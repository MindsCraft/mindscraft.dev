import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mindscraft.dev'
    const now = new Date()

    return [
        // ── Core pages ──────────────────────────────────────────
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
        // ── Blog posts ──────────────────────────────────────────
        // TODO: Replace with dynamic fetch from CMS/DB when blog goes live
        {
            url: `${baseUrl}/blog/future-of-ux-design`,
            lastModified: new Date('2024-03-20'),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/scalable-web-applications`,
            lastModified: new Date('2024-03-18'),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/ai-integration-strategies`,
            lastModified: new Date('2024-03-15'),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/startup-growth-hacking`,
            lastModified: new Date('2024-03-12'),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/role-of-ux-in-product-success`,
            lastModified: new Date('2024-03-10'),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/modern-web-development`,
            lastModified: new Date('2024-03-08'),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
    ]
}
