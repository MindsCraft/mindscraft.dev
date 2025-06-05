import { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';

const ServicesContent = dynamic(() => import('./ServicesContent'), {
  ssr: true
});

export const metadata: Metadata = {
  title: 'Our Services | Mindscraft',
  description: 'Explore our comprehensive web development and UX design services. We help startups and product teams launch faster with AI-powered solutions.',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function ServicesPage() {
  return <ServicesContent />;
}