import { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';

// Import the client component without SSR
const AboutContent = dynamic(() => import('./AboutContent'));

export const metadata: Metadata = {
  title: 'About Us | MindsCraft',
  description: 'MindsCraft is a digital product studio based in Dhaka, Bangladesh. Meet our team of senior specialists with 40+ combined years of experience in web development, UX design, and AI integration.',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function AboutPage() {
  return <AboutContent />;
}
