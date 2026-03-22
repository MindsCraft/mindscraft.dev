import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { type, topic, tone, audience } = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'GEMINI_API_KEY is missing' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    let prompt = '';
    let isJsonReturn = false;

    if (type === 'blog') {
      prompt = `
        You are the Head of Content at "MindsCraft", a premium software development agency.
        Write a NEW, ORIGINAL blog post for the MindsCraft website.
        
        TOPIC: ${topic}
        TARGET AUDIENCE: ${audience}
        TONE: ${tone}

        REQUIREMENTS:
        - Structure: Use proper HTML tags (h2, p, ul, li, blockquote).
        - Styling: Use <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-8">...</div> for important "Key Takeaways". 
        - Content: Provide deep insights, not generic fluff. Make it sound like an expert software agency wrote it.
        - Output: Return ONLY a valid JSON object matching the schema below.
        - CRITICAL: Ensure all double quotes inside the strings are escaped as \\".

        JSON SCHEMA:
        {
            "title": "string",
            "slug": "string-slug-format",
            "description": "short 200 char summary",
            "category": "${topic.split(' ')[0]}",
            "content": "Full HTML content string",
            "readTime": "X min read",
            "imageAlt": "image description"
        }
      `;
      isJsonReturn = true;
    } else if (type === 'social') {
      prompt = `
        You are the Social Media Manager for "MindsCraft", a premium software dev agency.
        Draft a highly engaging, professional LinkedIn and Twitter post about: ${topic}
        TARGET AUDIENCE: ${audience}
        TONE: ${tone}

        Include bullet points, tasteful emojis, and 3-5 relevant hashtags. Hook the reader immediately and end with a solid CTA to work with MindsCraft.
        Do NOT output JSON. Output raw markdown.
      `;
    } else if (type === 'email') {
      prompt = `
        You are an expert B2B Sales Executive for "MindsCraft".
        Write a cold outreach email offering our software development services.
        TARGET CLIENT: ${audience}
        SERVICE FOCUS / HOOK: ${topic}
        TONE: ${tone}. Short, punchy, value-driven, and hyper-personalized.

        Include a Subject Line. Do NOT output JSON. Output raw markdown.
      `;
    }

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // If blog, parse JSON and save to database (posts.json)
    if (type === 'blog') {
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("Did not return valid JSON from AI");
        
        const newPost = JSON.parse(jsonMatch[0].trim());
        const dataPath = path.join(process.cwd(), 'src/data/posts.json');
        
        let currentPosts = [];
        try {
            currentPosts = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        } catch(e) {}

        const nextId = currentPosts.length > 0 ? Math.max(...currentPosts.map((p: any) => p.id || 0)) + 1 : 1;
        
        const finalPost = {
            id: nextId,
            ...newPost,
            date: new Date().toISOString().split('T')[0],
            status: "Draft", // Always set manual blogs to draft so user can review
            featured: false,
            image: `https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000&seed=${nextId}`
        };

        currentPosts.unshift(finalPost);
        fs.writeFileSync(dataPath, JSON.stringify(currentPosts, null, 2));

        return NextResponse.json({ 
            success: true, 
            message: 'Draft saved to your posts table!',
            postId: nextId 
        });
    }

    // Otherwise, return raw text for social/email
    return NextResponse.json({ success: true, text });

  } catch (error: any) {
    console.error('Marketing AI Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
