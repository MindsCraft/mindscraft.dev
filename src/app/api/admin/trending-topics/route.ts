import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const RSS_FEEDS = [
    { source: 'Vercel', url: 'https://vercel.com/atom' },
    { source: 'Web.dev', url: 'https://web.dev/feed.xml' },
    { source: 'Dev.to', url: 'https://dev.to/feed' },
    { source: 'OpenAI', url: 'https://openai.com/news/rss.xml' }
];

export async function GET() {
    try {
        const parser = new Parser({
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        const allItems: any[] = [];
        
        await Promise.all(
            RSS_FEEDS.map(async (feedDef) => {
                try {
                    const feed = await parser.parseURL(feedDef.url);
                    const topItems = feed.items.slice(0, 5).map((item) => ({
                        title: item.title,
                        link: item.link,
                        snippet: item.contentSnippet || item.content || '',
                        source: feedDef.source,
                        date: item.pubDate || item.isoDate || new Date().toISOString()
                    }));
                    allItems.push(...topItems);
                } catch (e) {
                    console.warn(`⚠️ Failed to fetch feed: ${feedDef.url}`);
                }
            })
        );

        // Sort by date (newest first) and take top 15
        allItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        const trending = allItems.slice(0, 15);

        return NextResponse.json({ success: true, topics: trending });
    } catch (error: any) {
        console.error('Error fetching trending topics:', error);
        return NextResponse.json({ error: 'Failed to fetch topics' }, { status: 500 });
    }
}
