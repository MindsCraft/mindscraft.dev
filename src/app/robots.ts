import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://mindscraft.dev'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/api/', '/design-system', '/sandbox/', '/login'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
