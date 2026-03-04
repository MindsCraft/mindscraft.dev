import { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';

const AboutContent = dynamic(() => import('./AboutContent'), { ssr: true });

const SITE_URL = 'https://mindscraft.dev';

export const metadata: Metadata = {
  title: 'Web Development Agency Bangladesh | MindsCraft',
  description: 'MindsCraft is a premium digital product studio based in Dhaka, Bangladesh. 40+ combined years of experience in web development, UX design, and AI integration for global enterprises.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'Web Development Agency Bangladesh | MindsCraft',
    description: 'MindsCraft is a premium digital product studio based in Dhaka, Bangladesh. 40+ combined years of experience in web development, UX design, and AI integration for global enterprises.',
    url: `${SITE_URL}/about`,
    siteName: 'MindsCraft',
    images: [{ url: `${SITE_URL}/images/og-image.png`, width: 1200, height: 630, alt: 'MindsCraft — Web Development Agency' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Agency Bangladesh | MindsCraft',
    description: 'Premium digital product studio based in Dhaka, Bangladesh.',
    site: '@mindscraft',
    images: [`${SITE_URL}/images/og-image.png`],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function AboutPage() {
  return <AboutContent />;
}
