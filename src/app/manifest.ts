import { MetadataRoute } from 'next';
import { readFile } from 'fs/promises';
import path from 'path';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  let seo = { siteTitle: 'MindsCraft', siteDescription: 'Expert UX Design & AI-Powered Web Development' };
  
  try {
    const filePath = path.join(process.cwd(), 'src/data/seo-settings.json');
    const raw = await readFile(filePath, 'utf-8');
    seo = JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load SEO settings for manifest:', e);
  }

  return {
    name: seo.siteTitle,
    short_name: 'Mindscraft',
    description: seo.siteDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/images/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
