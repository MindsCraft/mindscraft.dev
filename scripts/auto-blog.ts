import { GoogleGenerativeAI } from '@google/generative-ai';
import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── CONFIGURATION ──
const RSS_FEEDS = [
    'https://vercel.com/blog/feed',
    'https://web.dev/feed.xml',
    'https://dev.to/feed',
    'https://simonwillison.net/atom/entries/tag/ai/',
    'https://deepmind.google/blog/rss.xml',
    'https://openai.com/news/rss.xml',
    'https://anthropic.com/news'
];

const DATA_FILE = path.join(__dirname, '../src/data/posts.json');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error('❌ GEMINI_API_KEY is not set in environment variables.');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const parser = new Parser();

async function generateBlogPost() {
    console.log('🚀 Starting Automated Blog Generation...');

    // 1. Fetch Latest News from RSS
    const allItems: any[] = [];
    for (const url of RSS_FEEDS) {
        try {
            const feed = await parser.parseURL(url);
            allItems.push(...feed.items.map(item => ({ title: item.title, link: item.link, snippet: item.contentSnippet })));
        } catch (e) {
            console.warn(`⚠️ Failed to fetch feed: ${url}`);
        }
    }

    // Pick top 15 items for context
    const context = allItems.slice(0, 15).map(i => `- ${i.title}: ${i.snippet}`).join('\n');

    // 2. Call Gemini
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
    You are the Head of Content at "MindsCraft", a premium software development agency.
    Your CURRENT FOCUS is on **AI-Driven Development in 2026**.
    
    Industry news and trending papers/articles:
    ${context}

    Write a NEW, ORIGINAL blog post for the MindsCraft website. 
    Focus on how AI is fundamentally changing software development in 2026 (e.g., Agentic Workflows, AI-first coding patterns, LLM-integrated UX, self-healing infrastructure).

    REQUIREMENTS:
    - Tone: Visionary but highly technical, Premium, Minimalist.
    - Title: Catchy, SEO-optimized, focused on 2026 AI trends.
    - Structure: Use HTML tags (h2, p, ul, li, blockquote). Avoid h1.
    - Content: At least 1500 words. Provide deep technical insights and "MindsCraft" internal perspectives.
    - Output: Return ONLY a JSON object:
      {
        "title": "...",
        "slug": "...",
        "description": "...",
        "category": "AI & SaaS",
        "content": "HTML_STRING",
        "readTime": "X min read",
        "imageAlt": "..."
      }
    - Category should almost always be "AI & SaaS" for this campaign.
    - Date: Use today's date (${new Date().toISOString().split('T')[0]}).
    `;

    console.log('🧠 Generating content with Gemini...');
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Clean JSON from markdown if needed
    const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const newPost = JSON.parse(cleanJson);

    // 3. Assign ID and Image
    const currentPosts = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    newPost.id = currentPosts.length + 1;
    newPost.date = new Date().toISOString().split('T')[0];
    newPost.featured = false;
    
    // Use a placeholder or dynamic image service
    // For now, let's use a nice Unsplash search link based on the category
    const categoryKeywords: Record<string, string> = {
        "AI & SaaS": "artificial-intelligence-tech",
        "Web Development": "coding-programming-dark",
        "UX & CRO": "user-experience-interface",
        "Performance": "speed-abstract-neon"
    };
    const keyword = categoryKeywords[newPost.category] || "technology";
    newPost.image = `https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000&seed=${newPost.id}`; // Simple placeholder rule

    // 4. Save back to file
    currentPosts.unshift(newPost); // Add to beginning
    fs.writeFileSync(DATA_FILE, JSON.stringify(currentPosts, null, 2));

    console.log(`✅ Success! New post generated: ${newPost.title}`);
}

generateBlogPost().catch(err => {
    console.error('💥 Error generating blog post:', err);
    process.exit(1);
});
