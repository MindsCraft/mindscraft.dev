import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      return NextResponse.json({ error: 'GEMINI_API_KEY is missing' }, { status: 500 });
    }

    const { content, title, instruction } = await req.json();

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `
    You are an expert editor at "MindsCraft", a top-tier software agency.
    You are editing an existing blog post.

    Current Title: ${title}
    Current HTML Content:
    ${content}

    User Instruction: "${instruction}"

    Action: Refine the content based on the instruction. Keep the same structure and tone unless asked otherwise. 
    Ensure the HTML remains clean and high-quality.
    
    Output: Return ONLY the raw HTML content string with NO triple backticks or conversational text.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const refinedHtml = response.text().trim();

    return NextResponse.json({ 
      success: true, 
      refinedContent: refinedHtml 
    });

  } catch (error: any) {
    console.error('AI Editing Error:', error);
    return NextResponse.json({ 
      error: 'Failed to refine content', 
      details: error.message 
    }, { status: 500 });
  }
}
