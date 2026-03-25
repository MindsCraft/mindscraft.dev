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

    const { postId, imageSearchTerm, slug } = await req.json();

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    
    // We use the same optimized fallback chain!
    const promptBase = `${imageSearchTerm}. Style: premium software agency, high-tech, cinematic 3D render, minimalist, ultra-high resolution, 8k.`;
    const imageModelsToTry = [
      'models/imagen-4.0-fast-generate-001', 
      'models/imagen-4.0-generate-001',
      'models/gemini-3.1-flash-image-preview',
      'models/gemini-2.5-flash-image',
      'models/nano-banana-pro-preview'
    ];

    let imageUrl = '';
    let success = false;

    for (const modelName of imageModelsToTry) {
        if (success) break;
        try {
            const imageModel = genAI.getGenerativeModel({ model: modelName });
            
            const imagePromise = imageModel.generateContent(promptBase);
            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 10000));
            
            const result: any = await Promise.race([imagePromise, timeoutPromise]);
            const response = await result.response;
            const part = response.candidates?.[0]?.content?.parts?.find((p: any) => p.inlineData);
            
            if (part?.inlineData?.data) {
                const buffer = Buffer.from(part.inlineData.data, 'base64');
                const fileName = `${slug}.png`;
                const imagesDir = path.join(process.cwd(), 'public', 'images', 'blog');
                if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
                fs.writeFileSync(path.join(imagesDir, fileName), buffer);
                imageUrl = `/images/blog/${fileName}`;
                success = true;
            }
        } catch (err: any) {
            // Keep going
        }
    }

    if (!success) {
      const pollinationsKey = process.env.POLLINATIONS_API_KEY;
      if (pollinationsKey) {
          const res = await fetch('https://gen.pollinations.ai/v1/images/generations', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${pollinationsKey}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              prompt: imageSearchTerm + ", minimalist 3D render, high-tech, cinematic lighting, premium software agency style, 8k",
              model: 'flux',
              width: 1200,
              height: 630,
              response_format: 'b64_json'
            })
          });
          const data = await res.json();
          if (data.data && data.data[0] && data.data[0].b64_json) {
              const buffer = Buffer.from(data.data[0].b64_json, 'base64');
              const fileName = `${slug}.png`;
              const imagesDir = path.join(process.cwd(), 'public', 'images', 'blog');
              if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
              fs.writeFileSync(path.join(imagesDir, fileName), buffer);
              imageUrl = `/images/blog/${fileName}`;
              success = true;
          }
      }
    }

    return NextResponse.json({ 
      success: true, 
      imageUrl,
      isGoogle: success 
    });

  } catch (error: any) {
    console.error('Image Regeneration Error:', error);
    return NextResponse.json({ error: 'Failed to regenerate image' }, { status: 500 });
  }
}
