import { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';

const WorkContent = dynamic(() => import('./WorkContent'), { ssr: true });

const SITE_URL = 'https://mindscraft.dev';

export const metadata: Metadata = {
  title: 'Portfolio — Web & App Development Projects | MindsCraft',
  description: 'Browse MindsCraft\'s portfolio of custom web apps, SaaS dashboards, e-commerce platforms, and AI-powered products built for clients across Bangladesh and globally.',
  alternates: {
    canonical: `${SITE_URL}/work`,
  },
  openGraph: {
    title: 'Portfolio — Web & App Development Projects | MindsCraft',
    description: 'Browse our portfolio of custom web apps, SaaS dashboards, e-commerce platforms, and AI-powered products.',
    url: `${SITE_URL}/work`,
    siteName: 'MindsCraft',
    images: [{ url: `${SITE_URL}/images/og-image.png`, width: 1200, height: 630, alt: 'MindsCraft Portfolio' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio — Web & App Development Projects | MindsCraft',
    description: 'Custom web apps, SaaS dashboards, e-commerce, and AI products.',
    site: '@mindscraft',
    images: [`${SITE_URL}/images/og-image.png`],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function WorkPage() {
  return <WorkContent />;
}