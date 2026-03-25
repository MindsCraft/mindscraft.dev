import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
import type { Schema } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

// Using structured output schema guarantees 100% valid JSON matching this exact shape
const blogPostSchema: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    title: { type: SchemaType.STRING, description: "A catchy, SEO-optimized title" },
    slug: { type: SchemaType.STRING, description: "URL friendly slug e.g., 'future-of-ai-2026'" },
    description: { type: SchemaType.STRING, description: "Short 200 char summary for meta description" },
    category: { type: SchemaType.STRING, description: "Category string, matching one of: AI & SaaS, Web Development, Performance, UX & CRO, Future" },
    content: { type: SchemaType.STRING, description: "Full HTML string of the blog post body. Use semantic tags (<h2>, <p>, <ul>, <blockquote>)." },
    readTime: { type: SchemaType.STRING, description: "e.g. '5 min read'" },
    imageSearchTerm: { type: SchemaType.STRING, description: "Detailed visual description for an AI image generator. (e.g., 'A futuristic neural network with glowing pathways in deep navy and gold')" },
  },
  required: ["title", "slug", "description", "category", "content", "readTime", "imageSearchTerm"]
};

export async function POST(req: Request) {
  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      return NextResponse.json({ error: 'GEMINI_API_KEY is missing' }, { status: 500 });
    }

    // Parse incoming request body
    const body = await req.json().catch(() => ({}));
    const { topicUrl, topicTitle, topicSnippet, isRewrite } = body;

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: blogPostSchema
      }
    });

    let contextInstruction = "Focus on how AI is changing modern software development and digital experiences.";
    
    if (topicTitle && topicSnippet) {
      contextInstruction = `
      Focus your article specifically on the following subject/article from the web:
      Source Article Title: "${topicTitle}"
      Source Content/Snippet: "${topicSnippet}"
      
      Your goal: Analyze this news/topic and write a comprehensive, original deep-dive blog post about it from the perspective of MindsCraft.`;
    }

    if (isRewrite && topicUrl) {
      contextInstruction = `
      The user wants to write about the topic found at this URL: ${topicUrl}. 
      Use your knowledge of this topic or deduce it from the URL.
      Your goal: Completely rewrite the core concepts into an original thought-leadership piece from our agency, MindsCraft. Do not plagiarize.`;
    }

    const prompt = `
    You are the Head of Content at "MindsCraft", a premium software development and design agency.
    Write a NEW, ORIGINAL, highly technical, and visionary blog post for our website.
    
    ${contextInstruction}

    REQUIREMENTS:
    - Tone: Visionary, Premium, Developer-oriented.
    - Structure: Use HTML tags (h2, p, ul, li, blockquote). Avoid using arbitrary CSS classes in HTML.
    - Images: Every time you transition to a major new section (e.g. at a key <h2>), inject a placeholder exactly like this: [IMAGE_PROMPT: detailed 5 word visual description of section]
    - Content Length: At least 800-1000 words. Provide deep technical insights and "MindsCraft" internal perspectives.
    - Date: The article should sound as if it was written today (${new Date().toISOString().split('T')[0]}).

    OUTPUT INSTRUCTIONS:
    Return your response strictly matching the required JSON schema response object, representing the complete blog post.
    `;

    const logFile = "j:\\WorkSpace\\Ongoing\\mindsCraft.dev\\generation_debug.log";
    const log = (msg: string) => {
      const entry = `[${new Date().toISOString()}] ${msg}\n`;
      try {
        fs.appendFileSync(logFile, entry);
      } catch (e) {
        console.error('Logging failed:', e);
      }
      console.log(msg);
    };

    log('--- START GENERATION PIPELINE ---');
    log(`Topic Info - Title: ${topicTitle}, URL: ${topicUrl}`);

    log('Generating text content via Gemini 2.5...');
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const jsonText = response.text();
    const generatedPost = JSON.parse(jsonText);
    log(`Text content generated: ${generatedPost.title}`);

    // ── NANO BANANA IMAGE GENERATION (GOOGLE IMAGEN) ──
    let imageUrl = '';
    
    // ── GOOGLE IMAGE GENERATION FALLBACK CHAIN ──
    const promptBase = `${generatedPost.imageSearchTerm}. Style: premium software agency, high-tech, cinematic 3D render, minimalist, ultra-high resolution, 8k.`;
    const imageModelsToTry = [
      'models/imagen-4.0-fast-generate-001', 
      'models/imagen-4.0-generate-001',
      'models/gemini-3.1-flash-image-preview',
      'models/gemini-2.5-flash-image',
      'models/nano-banana-pro-preview'
    ];

    let success = false;
    for (const modelName of imageModelsToTry) {
        if (success) break;
        try {
            log(`Attempting image generation with ${modelName}...`);
            const imageModel = genAI.getGenerativeModel({ model: modelName });
            
            const imagePromise = imageModel.generateContent(promptBase);
            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout after 15s')), 15000));
            
            const result: any = await Promise.race([imagePromise, timeoutPromise]);
            const response = await result.response;
            const part = response.candidates?.[0]?.content?.parts?.find((p: any) => p.inlineData);
            
            if (part?.inlineData?.data) {
                const buffer = Buffer.from(part.inlineData.data, 'base64');
                const fileName = `${generatedPost.slug}.png`;
                const imagesDir = path.join(process.cwd(), 'public', 'images', 'blog');
                if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
                fs.writeFileSync(path.join(imagesDir, fileName), buffer);
                imageUrl = `/images/blog/${fileName}`;
                log(`✅ Success with ${modelName}: ${imageUrl}`);
                success = true;
            } else {
                log(`⚠️ No data from ${modelName}`);
            }
        } catch (err: any) {
            log(`❌ ${modelName} call failed: ${err.message || err}`);
            // Continue to next model in loop
        }
    }

    if (!success) {
        log('⚠️ All Google models failed (or Quota 0). Falling back to Pollinations API.');
        try {
          const pollinationsKey = process.env.POLLINATIONS_API_KEY;
          if (pollinationsKey) {
            log('Using Pollinations API Key for direct generation.');
            const res = await fetch('https://gen.pollinations.ai/v1/images/generations', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${pollinationsKey}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                prompt: generatedPost.imageSearchTerm + ", minimalist 3D render, high-tech, cinematic lighting, premium software agency style, 8k",
                model: 'flux',
                width: 1200,
                height: 630,
                response_format: 'b64_json'
              })
            });
            
            const data = await res.json();
            if (data.data && data.data[0] && data.data[0].b64_json) {
                const buffer = Buffer.from(data.data[0].b64_json, 'base64');
                const fileName = `${generatedPost.slug}.png`;
                const imagesDir = path.join(process.cwd(), 'public', 'images', 'blog');
                if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
                fs.writeFileSync(path.join(imagesDir, fileName), buffer);
                imageUrl = `/images/blog/${fileName}`;
                log(`✅ Success with Pollinations: ${imageUrl}`);
            } else {
                log(`❌ Pollinations API failed: ${JSON.stringify(data)}`);
            }
          } else {
             log('⚠️ POLLINATIONS_API_KEY not found in .env.local! Using a default static fallback image.');
             imageUrl = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000';
          }
        } catch(err: any) {
             log(`❌ Pollinations request error: ${err.message}`);
             imageUrl = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000';
        }
    }

    // ── INLINE IMAGE GENERATION (POLLINATIONS FLUX) ──
    const promptRegex = /\[IMAGE_PROMPT:\s*([^\]]+)\]/g;
    let finalHtmlContent = generatedPost.content;
    const matches = [...finalHtmlContent.matchAll(promptRegex)];
    
    if (matches.length > 0 && process.env.POLLINATIONS_API_KEY) {
        log(`Found ${matches.length} inline image prompts. Generating concurrently with Pollinations Flux...`);
        const inlineImagePromises = matches.map(async (match, index) => {
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
                        model: 'flux', // Explicitly using the best model
                        width: 1000,
                        height: 500,
                        response_format: 'b64_json'
                    })
                });
                
                const data = await res.json();
                if (data.data && data.data[0] && data.data[0].b64_json) {
                    const buffer = Buffer.from(data.data[0].b64_json, 'base64');
                    const fileName = `${generatedPost.slug}-inline-${index + 1}.png`;
                    const imagesDir = path.join(process.cwd(), 'public', 'images', 'blog');
                    if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
                    fs.writeFileSync(path.join(imagesDir, fileName), buffer);
                    const inlineUrl = `/images/blog/${fileName}`;
                    
                    // Format into proper HTML img tag
                    const imgTag = `<img src="${inlineUrl}" alt="${rawPrompt}" style="width:100%; border-radius:12px; margin: 24px 0;" />`;
                    return { match: match[0], imgTag };
                }
            } catch (err) {
                log(`❌ Failed to generate inline image for "${rawPrompt}": ${err}`);
            }
            return null; // Fallback if failed
        });

        const results = await Promise.all(inlineImagePromises);
        results.forEach(result => {
            if (result) {
                finalHtmlContent = finalHtmlContent.replace(result.match, result.imgTag);
            } else {
                // If it fails, remove the placeholder so it doesn't show text to the user
                finalHtmlContent = finalHtmlContent.replace(promptRegex, '');
            }
        });
        log(`✅ Finished processing inline images.`);
    } else if (matches.length > 0) {
        log('⚠️ POLLINATIONS_API_KEY not found or missing matches. Removing inline placeholders.');
        finalHtmlContent = finalHtmlContent.replace(promptRegex, '');
    }

    // Build the final post object
    const finalPost = {
      id: Date.now(),
      ...generatedPost,
      content: finalHtmlContent,
      date: new Date().toISOString().split('T')[0],
      status: 'Draft', 
      featured: false,
      author: { name: 'MindsCraft AI', avatar: 'MA' },
      image: imageUrl
    };

    log('Saving post to JSON DB...');
    // Save to our static JSON DB
    const DATA_FILE = path.join(process.cwd(), 'src/data/posts.json');
    let currentPosts = [];
    if (fs.existsSync(DATA_FILE)) {
      currentPosts = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
    
    currentPosts.unshift(finalPost);
    fs.writeFileSync(DATA_FILE, JSON.stringify(currentPosts, null, 2));

    return NextResponse.json({ 
        message: 'Draft created successfully!', 
        post: finalPost,
        success: true 
    });

  } catch (error: any) {
    console.error('AI Content Engine Error:', error);
    return NextResponse.json({ 
        error: 'Failed to generate content', 
        details: error.message 
    }, { status: 500 });
  }
}
