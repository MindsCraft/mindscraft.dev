import type { Metadata, Viewport } from "next";
import { readFile } from 'fs/promises';
import path from 'path';
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-context";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import JsonLd from "@/components/seo/JsonLd";

const FALLBACK_TITLE = 'MindsCraft - Expert UX Design & AI-Powered Web Development';
const FALLBACK_DESCRIPTION = 'Leading agency in Bangladesh delivering scalable solutions for global enterprises and local businesses, blending intuitive UX engineering with cutting-edge AI integrations to drive measurable results.';
const FALLBACK_URL = 'https://mindscraft.dev';

async function getSeoSettings() {
  try {
    const filePath = path.join(process.cwd(), 'src/data/seo-settings.json');
    const raw = await readFile(filePath, 'utf-8');
    return JSON.parse(raw) as {
      siteTitle: string;
      siteDescription: string;
      siteUrl: string;
      siteName: string;
      twitterHandle: string;
      ogImage: string;
      ogImageAlt: string;
      keywords: string;
    };
  } catch {
    return null;
  }
}

// Viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
};

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoSettings();
  const SITE_TITLE = seo?.siteTitle || FALLBACK_TITLE;
  const SITE_DESCRIPTION = seo?.siteDescription || FALLBACK_DESCRIPTION;
  const SITE_URL = seo?.siteUrl || FALLBACK_URL;
  const SITE_NAME = seo?.siteName || 'Mindscraft';
  const TWITTER = seo?.twitterHandle || '@mindscraft';
  const OG_IMAGE = seo?.ogImage || '/images/og-image.png';
  const OG_IMAGE_ALT = seo?.ogImageAlt || SITE_TITLE;

  const ogImageUrl = OG_IMAGE.startsWith('http') ? OG_IMAGE : `${SITE_URL}${OG_IMAGE}`;

  return {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    keywords: seo?.keywords,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      siteName: SITE_NAME,
      images: [{
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      creator: TWITTER,
      site: TWITTER,
      images: [{
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/images/favicon.ico' },
        { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/images/apple-touch-icon.png' },
      ],
    },
    manifest: '/images/site.webmanifest',
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className="h-full scroll-smooth"
    >
      <body className="antialiased h-full bg-background text-foreground selection:bg-primary-100 selection:text-primary-900">
        <JsonLd />
        <ThemeProvider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
