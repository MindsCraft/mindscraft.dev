import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-context";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import JsonLd from "@/components/seo/JsonLd";

const SITE_TITLE = 'MindsCraft - Expert UX Design & AI-Powered Web Development';
const SITE_DESCRIPTION = 'Leading agency in Bangladesh delivering scalable solutions for global enterprises and local businesses, blending intuitive UX engineering with cutting-edge AI integrations to drive measurable results.';
const SITE_URL = 'https://mindscraft.dev';

// Viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Mindscraft',
    images: [{
      url: `${SITE_URL}/images/og-image.png`,
      width: 1200,
      height: 630,
      alt: SITE_TITLE,
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: '@mindscraft',
    site: '@mindscraft',
    images: [{
      url: `${SITE_URL}/images/og-image.png`,
      width: 1200,
      height: 630,
      alt: SITE_TITLE,
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
