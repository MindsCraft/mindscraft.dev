import { MetadataRoute } from 'next'
import postsData from '@/data/posts.json'
import { workItems } from '@/data/workData'

export const dynamic = 'force-static';

type BlogPost = {
    slug: string;
    date: string;
    status?: string;
};

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mindscraft.dev'
    const now = new Date()

    // ── Core pages ──────────────────────────────────────────
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/work`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        // ── Secondary pages ──────────────────────────────────────
        {
            url: `${baseUrl}/case-studies`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        // ── Legal pages ──────────────────────────────────────────
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-and-conditions`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/cookie-policy`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.2,
        },
    ]

    // ── Blog posts (dynamic from posts.json) ─────────────────
    const publishedPosts = (postsData as BlogPost[]).filter(
        (post) => post.status === 'Published'
    )

    const blogPages: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'yearly' as const,
        priority: 0.6,
    }))

    // ── Work/portfolio items (dynamic from workData) ─────────
    const workPages: MetadataRoute.Sitemap = workItems.map((item) => ({
        url: `${baseUrl}/work/${item.id}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...blogPages, ...workPages]
}
