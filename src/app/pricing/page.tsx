import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const PricingContent = dynamic(() => import('./PricingContent'), { ssr: true });

export const metadata: Metadata = {
    title: 'Pricing | MindsCraft',
    description: 'Transparent pricing for web development, UI/UX design, and AI integration services. Projects start from $1,500.',
};

export default function PricingPage() {
    return <PricingContent />;
}
