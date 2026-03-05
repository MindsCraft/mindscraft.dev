import { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';

const ServicesContent = dynamic(() => import('./ServicesContent'), { ssr: true });

const SITE_URL = 'https://mindscraft.dev';

export const metadata: Metadata = {
  title: 'AI, SaaS & Web Development Services | MindsCraft',
  description: 'MindsCraft builds AI-powered products, SaaS MVPs, full-stack web apps, and high-performance e-commerce for funded startups and scale-ups. From concept to launch in 6–8 weeks. Starting from $1,500.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: 'AI, SaaS & Web Development Services | MindsCraft',
    description: 'We build AI products, SaaS MVPs, and high-performance web apps for funded startups and scale-ups. Fast execution, clean code, measurable results.',
    url: `${SITE_URL}/services`,
    siteName: 'MindsCraft',
    images: [{ url: `${SITE_URL}/images/og-image.png`, width: 1200, height: 630, alt: 'MindsCraft Services' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI, SaaS & Web Development Services | MindsCraft',
    description: 'AI product development, SaaS MVPs, UX design & CRO, performance engineering. Starting from $1,500.',
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