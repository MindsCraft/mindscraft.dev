import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import React from "react";
import { Providers } from "@/components/providers";
// Import the client-side Google Analytics wrapper
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import ConditionalHeader from "@/components/layout/ConditionalHeader";
import ConditionalFooter from "@/components/layout/ConditionalFooter";

// Site metadata constants
const SITE_TITLE = 'Mindscraft - UX-Focused Web Development Agency';
const SITE_DESCRIPTION = 'We help startups and product teams launch faster with our AI-powered web development and UX design services. Transform your ideas into reality with our expert team.';
const SITE_URL = 'https://mindscraft.dev';

// Fonts
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ['400', '500', '600', '700'],
});

// Viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mindscraft",
  "description": SITE_DESCRIPTION,
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/logo/png/mindscraft-logo.png`
  },
  "sameAs": [
    "https://twitter.com/mindscraft",
    "https://linkedin.com/company/mindscraft"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "offers": {
    "@type": "Offer",
    "category": "Web Development Services"
  }
};

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
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
      { url: '/logo/favicon/favicon.ico' },
      { url: '/logo/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/logo/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/logo/favicon/apple-touch-icon.png' },
    ],
  },
  manifest: '/logo/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`font-sans ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
      style={{
        '--font-sans': 'Inter, system-ui, -apple-system, sans-serif',
        '--font-mono': 'JetBrains Mono, monospace'
      } as React.CSSProperties}
    >
      <head>
        {/* Google Analytics - Client Component */}
        <GoogleAnalytics />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preconnect to important origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Apple mobile web app */}
        <meta name="apple-mobile-web-app-title" content="MindsCraft" />

        {/* Favicon and icon links */}
        <link rel="icon" href="/logo/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo/favicon/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/logo/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/logo/favicon/site.webmanifest" />
      </head>

      <body className="font-sans antialiased">
        <Providers>
          {/* Conditional Header and Footer */}
          <ConditionalHeader />
          <main id="main-content" className="min-h-screen pt-16">
            {children}
          </main>
          <ConditionalFooter />
        </Providers>
      </body>
    </html>
  );
}
