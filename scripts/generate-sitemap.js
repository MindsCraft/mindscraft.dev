import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get base URL from environment or use default
const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://typewriting.ai').replace(/\/$/, '');

// Define the pages in your site
const pages = [
  {
    url: '/',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: '/about',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: '/blog',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: '/contact',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: '/services',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: '/work',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: '/privacy-policy',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  },
  {
    url: '/terms-and-conditions',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  },
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${page.lastModified.toISOString()}</lastmod>
      <changefreq>${page.changeFrequency}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

// Create public directory if it doesn't exist
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Write sitemap to public directory
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully!');
