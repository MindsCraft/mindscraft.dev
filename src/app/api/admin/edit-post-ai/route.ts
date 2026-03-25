import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      return NextResponse.json({ error: 'GEMINI_API_KEY is missing' }, { status: 500 });
    }

    const { content, title, instruction } = await req.json();

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            refinedContent: { type: "string" },
            explanation: { type: "string" }
          },
          required: ["refinedContent", "explanation"]
        } as any
      }
    });

    const prompt = `
    You are an expert editor at "MindsCraft", a top-tier software agency.
    You are editing an existing blog post.

    Current Title: ${title}
    Current HTML Content:
    ${content}

    User Instruction: "${instruction}"

    Action: Refine the content based on the instruction. Keep the same structure and tone unless asked otherwise. 
    Ensure the HTML remains clean and high-quality.
    
    Output Format:
    1. refinedContent: The full, revised HTML for the article. (If the user asks to add images, insert placeholders exactly like this: [IMAGE_PROMPT: 5-word visual description])
    2. explanation: A friendly, premium conversational response to the user explaining what you did or confirming their request.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let { refinedContent, explanation } = JSON.parse(response.text());

    // ── INLINE IMAGE GENERATION (POLLINATIONS FLUX) ──
    const promptRegex = /\[IMAGE_PROMPT:\s*([^\]]+)\]/g;
    const matches = [...refinedContent.matchAll(promptRegex)];
    
    if (matches.length > 0 && process.env.POLLINATIONS_API_KEY) {
        const inlineImagePromises = matches.map(async (match) => {
            const rawPrompt = match[1];
            const fullPrompt = rawPrompt + ", minimalist 3D render, high-tech, cinematic lighting, premium software agency style, 8k";
            try {
                const res = await fetch('https://gen.pollinations.ai/v1/images/generations', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${process.env.POLLINATIONS_API_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        prompt: fullPrompt,
                        model: 'flux',
                        width: 1000,
                        height: 500,
                        response_format: 'b64_json'
                    })
                });
                
                const data = await res.json();
                if (data.data && data.data[0] && data.data[0].b64_json) {
                    const buffer = Buffer.from(data.data[0].b64_json, 'base64');
                    
                    // ── STRICT FILENAME SANITIZATION (PATH TRAVERSAL GUARD) ──
                    const safeTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 30);
                    const safeFileName = path.basename(`${safeTitle}-inline-${Math.floor(Math.random()*10000)}.png`);
                    
                    const imagesDir = path.join(process.cwd(), 'public', 'images', 'blog');
                    if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
                    
                    const finalPath = path.join(imagesDir, safeFileName);
                    fs.writeFileSync(finalPath, buffer);
                    
                    const inlineUrl = `/images/blog/${safeFileName}`;
                    const imgTag = `<img src="${inlineUrl}" alt="${rawPrompt.replace(/"/g, '&quot;')}" style="width:100%; border-radius:12px; margin: 24px 0;" />`;
                    return { match: match[0], imgTag };
                }
            } catch (err) {
                console.error(`Failed inline image: ${err}`);
            }
            return null;
        });

        const results = await Promise.all(inlineImagePromises);
        results.forEach(result => {
            if (result) refinedContent = refinedContent.replace(result.match, result.imgTag);
            else refinedContent = refinedContent.replace(promptRegex, '');
        });
    } else if (matches.length > 0) {
        refinedContent = refinedContent.replace(promptRegex, '');
    }

    return NextResponse.json({ 
      success: true, 
      refinedContent,
      explanation 
    });

  } catch (error: any) {
    console.error('AI Editing Error:', error);
    
    // ── GRACEFUL QUOTA HANDLING (HTTP 429) ──
    if (error.status === 429 || error.message?.includes('429')) {
      return NextResponse.json({ 
        error: 'Gemini API Quota Exceeded', 
        details: 'You have reached the daily 20-request limit for the Gemini Free Tier. Please wait 24 hours or upgrade to a pay-as-you-go plan.' 
      }, { status: 429 });
    }

    return NextResponse.json({ 
      error: 'Failed to refine content', 
      details: error.message 
    }, { status: 500 });
  }
}
