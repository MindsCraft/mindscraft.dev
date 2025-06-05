import { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';

// Import the client component without SSR
const AboutContent = dynamic(() => import('./AboutContent'));

export const metadata: Metadata = {
  title: 'About Us | Mindscraft',
  description: 'Learn about Mindscraft, our mission, values, and the team behind our AI-powered web development and UX design services.',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function AboutPage() {
  return <AboutContent />;
}
