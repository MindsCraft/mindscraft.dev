import { GoogleGenerativeAI } from '@google/generative-ai';
import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environmental variables from the root .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config(); // Fallback to .env

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── CONFIGURATION ──
const RSS_FEEDS = [
    'https://web.dev/feed.xml',
    'https://dev.to/feed',
    'https://openai.com/news/rss.xml',
    'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_anthropic_news.xml'
];

const DATA_FILE = path.join(__dirname, '../src/data/posts.json');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;

if (!GEMINI_API_KEY) {
    console.error('❌ GEMINI_API_KEY is not set in environment variables.');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
});

async function generateBlogPost() {
    console.log('🚀 Starting Automated Blog Generation...');

    // 1. Fetch Latest News from RSS
    const allItems: any[] = [];
    for (const url of RSS_FEEDS) {
        try {
            const feed = await parser.parseURL(url);
            allItems.push(...feed.items.map((item: any) => ({ title: item.title, link: item.link, snippet: item.contentSnippet })));
        } catch (e) {
            console.warn(`⚠️ Failed to fetch feed: ${url}`);
        }
    }

    // Pick top items for context
    const context = allItems.slice(0, 15).map(i => `- ${i.title}: ${i.snippet}`).join('\n');

    // 2. Call Gemini
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `
    You are the Head of Content at "MindsCraft", a premium software development agency.
    Your CURRENT FOCUS is on **AI-Driven Development in 2026**.
    
    Industry news and trending papers/articles:
    ${context}

    Write a NEW, ORIGINAL blog post for the MindsCraft website. 
    Focus on how AI is fundamentally changing software development in 2026.

    REQUIREMENTS:
    - Tone: Visionary but highly technical, Premium, Minimalist.
    - Title: Catchy, SEO-optimized, focused on 2026 AI trends.
    - Structure: Use HTML tags (h2, p, ul, li, blockquote).
    - VISUAL ELEMENTS: 
      * Use <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-8">...</div> for important "Key Takeaways" or "Technical Deep Dives".
      * Use <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">...</div> for comparison charts or feature lists.
    - Content: At least 1000 words. Provide deep technical insights and "MindsCraft" internal perspectives.
    - Output: Return ONLY a valid JSON object. 
    - CRITICAL: Ensure all double quotes inside the "content" or "description" strings are properly escaped as \\" to avoid breaking the JSON.

    JSON SCHEMA:
    {
        "title": "string",
        "slug": "string-slug-format",
        "description": "short 200 char summary",
        "category": "AI & SaaS",
        "content": "Full HTML content string with escaped quotes",
        "readTime": "X min read",
        "imageAlt": "image description"
    }

    - Category: "AI & SaaS".
    - Date: Use today's date (${new Date().toISOString().split('T')[0]}).
    `;

    console.log('🧠 Generating content with Gemini (model: gemini-2.5-flash)...');
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
        const newPost = JSON.parse(cleanJson);

        // 3. Assign ID and Image
        const currentPosts = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
        newPost.id = currentPosts.length + 1;
        newPost.date = new Date().toISOString().split('T')[0];
        newPost.featured = false;
        
        // Use a placeholder or dynamic image service
        newPost.image = `https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000&seed=${newPost.id}`;

        // 4. Save back to file
        currentPosts.unshift(newPost); // Add to beginning
        fs.writeFileSync(DATA_FILE, JSON.stringify(currentPosts, null, 2));

        console.log(`✅ Success! New post generated: ${newPost.title}`);
    } catch (apiError: any) {
        console.error('❌ Failed to generate content with Gemini.');
        if (text) {
             const preview = text.length > 500 ? text.substring(0, 500) + "..." : text;
             console.error('   AI Raw Output Preview:', preview);
        }
        if (apiError.status) console.error(`   Status: ${apiError.status} (${apiError.statusText})`);
        console.error('   Full Error Details:', apiError.message || apiError);
        throw apiError; 
    }
}

generateBlogPost().catch(err => {
    console.error('💥 Error generating blog post:', err);
    process.exit(1);
});
