import { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';

const ContactContent = dynamic(() => import('./ContactContent'), {
  ssr: true
});

export const metadata: Metadata = {
  title: 'Contact Us | Mindscraft',
  description: 'Get in touch with Mindscraft for your web development and UX design needs. We help startups and product teams launch faster with AI-powered solutions.',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function ContactPage() {
  return <ContactContent />;
}