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
  },
  required: ["title", "slug", "description", "category", "content", "readTime"]
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
    - Images: Every time you transition to a major new section (e.g. at a key <h2>), inject an image using this format: <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" alt="Relevant Alt Text" style="width:100%; border-radius:12px; margin: 24px 0;" />
    - Content Length: At least 800-1000 words. Provide deep technical insights and "MindsCraft" internal perspectives.
    - Date: The article should sound as if it was written today (${new Date().toISOString().split('T')[0]}).

    OUTPUT INSTRUCTIONS:
    Return your response strictly matching the required JSON schema response object, representing the complete blog post.
    `;

    console.log('Generating content via Gemini...');
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const jsonText = response.text();
    
    // Attempt parsing directly
    const generatedPost = JSON.parse(jsonText);

    // Build the final post object
    const finalPost = {
      id: Date.now(),
      ...generatedPost,
      date: new Date().toISOString().split('T')[0],
      status: 'Draft', // AI always writes to Draft first!
      featured: false,
      author: { name: 'MindsCraft AI', avatar: 'MA' },
      image: `https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000&seed=${Date.now()}`
    };

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
