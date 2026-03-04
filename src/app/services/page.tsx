import { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';

const ServicesContent = dynamic(() => import('./ServicesContent'), { ssr: true });

const SITE_URL = 'https://mindscraft.dev';

export const metadata: Metadata = {
  title: 'Web Development & UX Design Services | MindsCraft',
  description: 'Explore MindsCraft\'s full-stack services: custom web development, UX/UI design, mobile apps, and AI integration. Scalable solutions for startups and enterprises. Projects from $1,500.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: 'Web Development & UX Design Services | MindsCraft',
    description: 'Custom web development, UX/UI design, mobile apps, and AI integration. Scalable solutions for startups and enterprises.',
    url: `${SITE_URL}/services`,
    siteName: 'MindsCraft',
    images: [{ url: `${SITE_URL}/images/og-image.png`, width: 1200, height: 630, alt: 'MindsCraft Services' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & UX Design Services | MindsCraft',
    description: 'Custom web development, UX/UI design, mobile apps, and AI integration.',
    site: '@mindscraft',
    images: [`${SITE_URL}/images/og-image.png`],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function ServicesPage() {
  return <ServicesContent />;
}