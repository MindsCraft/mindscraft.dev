import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environmental variables from the root .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config(); // Fallback to .env

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, '../src/data/posts.json');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;

if (!GEMINI_API_KEY) {
    console.error('❌ GEMINI_API_KEY is not set in environment variables.');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function rebuildBlogs() {
    console.log('🚀 Starting Automated Blog Rebuild for 2026...');

    const currentPosts = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    // Let's rebuild the first 6 posts from the MVP which have outdated 2024 copy
    const targetPosts = currentPosts.filter((p: any) => p.id <= 6);
    
    for (const post of targetPosts) {
        console.log(`🧠 Rebuilding post: ${post.title} (ID: ${post.id})`);

        const prompt = `
        You are the Head of Content at "MindsCraft", a premium software development agency.
        Your CURRENT FOCUS is on **AI-Driven Development in 2026**.

        I need you to completely rewrite the following old blog post to reflect a 2026 perspective on the tech industry. It should be massive, insightful, and use our new design elements.
        
        OLD TITLE: ${post.title}
        OLD DESCRIPTION: ${post.description}
        OLD CATEGORY: ${post.category}
        OLD CONTENT: """${post.content}"""

        Write a NEW, ORIGINAL, and EXPANDED blog post covering the same core theme but updated for the reality of software engineering, AI, UX, and SaaS in 2026.

        REQUIREMENTS:
        - Tone: Visionary but highly technical, Premium, Minimalist.
        - Title: Catchy, SEO-optimized, focused on 2026 trends for this topic.
        - Structure: Use HTML tags (h2, p, ul, li, blockquote). Avoid h1.
        - VISUAL ELEMENTS: 
          * Use <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-8">...</div> for important "Key Takeaways" or "Technical Deep Dives".
          * Use <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">...</div> for comparison charts or feature lists.
        - Content: At least 1000 words. Provide deep technical insights and "MindsCraft" internal perspectives.
        - Output: Return ONLY a valid JSON object. 
        - CRITICAL: Ensure all double quotes inside the "content" or "description" strings are properly escaped as \\" to avoid breaking the JSON.

        JSON SCHEMA:
        {
            "title": "string",
            "description": "short 200 char summary",
            "content": "Full HTML content string with escaped quotes",
            "readTime": "X min read",
            "imageAlt": "image description"
        }
        `;

        let text = "";
        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            text = response.text();
            
            // More robust JSON extraction
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (!jsonMatch) {
                console.error("AI Response was:", text);
                throw new Error('AI response did not contain a valid JSON block.');
            }
            const cleanJson = jsonMatch[0].trim();
            const newPostData = JSON.parse(cleanJson);
            
            const postIndex = currentPosts.findIndex((p: any) => p.id === post.id);

            // Update preserving slug, category, id, date, image and featured
            currentPosts[postIndex] = {
                ...currentPosts[postIndex],
                title: newPostData.title || currentPosts[postIndex].title,
                description: newPostData.description || currentPosts[postIndex].description,
                content: newPostData.content || currentPosts[postIndex].content,
                readTime: newPostData.readTime || currentPosts[postIndex].readTime,
                imageAlt: newPostData.imageAlt || currentPosts[postIndex].imageAlt
            };

            fs.writeFileSync(DATA_FILE, JSON.stringify(currentPosts, null, 2));
            console.log(`✅ Success! Post updated: ${post.id}`);

            // Wait a few seconds to avoid rate limits
            await new Promise(resolve => setTimeout(resolve, 8000));

        } catch (apiError: any) {
            console.error(`❌ Failed to generate content for post ID ${post.id}.`);
            if (text) {
                const preview = text.length > 500 ? text.substring(0, 500) + "..." : text;
                console.error('   AI Raw Output Preview:', preview);
            }
            if (apiError.status) console.error(`   Status: ${apiError.status} (${apiError.statusText})`);
            console.error('   Continuing to next post...');
        }
    }
    
    console.log("🏁 All rebuilds complete!");
}

rebuildBlogs().catch(err => {
    console.error("❌ Fatal Error:", err);
    process.exit(1);
});
