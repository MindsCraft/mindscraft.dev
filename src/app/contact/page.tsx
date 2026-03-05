import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ContactContent = dynamic(() => import('./ContactContent'), { ssr: true });

const SITE_URL = 'https://mindscraft.dev';

export const metadata: Metadata = {
  title: 'Hire a Web Development Agency — Contact MindsCraft',
  description: 'Ready to start your project? Contact MindsCraft — a premium web development & UX design agency based in Dhaka, Bangladesh. We typically respond within 24 hours.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Hire a Web Development Agency — Contact MindsCraft',
    description: 'Ready to start your project? Contact MindsCraft — premium web development & UX design. We respond within 24 hours.',
    url: `${SITE_URL}/contact`,
    siteName: 'MindsCraft',
    images: [{ url: `${SITE_URL}/images/og-image.png`, width: 1200, height: 630, alt: 'Contact MindsCraft' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a Web Development Agency — Contact MindsCraft',
    description: 'Start your project with MindsCraft. We respond within 24 hours.',
    site: '@mindscraft',
    images: [`${SITE_URL}/images/og-image.png`],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}