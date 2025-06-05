import { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';

const WorkContent = dynamic(() => import('./WorkContent'), {
  ssr: true
});

export const metadata: Metadata = {
  title: 'Our Work | Mindscraft',
  description: 'Explore our portfolio of web development and UX design projects. See how we help startups and product teams launch faster with AI-powered solutions.',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function WorkPage() {
  return <WorkContent />;
}