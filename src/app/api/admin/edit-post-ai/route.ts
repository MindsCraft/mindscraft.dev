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
    1. refinedContent: The full, revised HTML for the article.
    2. explanation: A friendly, premium conversational response to the user explaining what you did or confirming their request.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const { refinedContent, explanation } = JSON.parse(response.text());

    return NextResponse.json({ 
      success: true, 
      refinedContent,
      explanation 
    });

  } catch (error: any) {
    console.error('AI Editing Error:', error);
    return NextResponse.json({ 
      error: 'Failed to refine content', 
      details: error.message 
    }, { status: 500 });
  }
}
