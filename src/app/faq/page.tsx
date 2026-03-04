import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const FAQContent = dynamic(() => import('./FAQContent'), { ssr: true });

export const metadata: Metadata = {
    title: 'FAQ | MindsCraft',
    description: 'Answers to the most common questions about working with MindsCraft — process, pricing, timelines, and more.',
};

export default function FAQPage() {
    return <FAQContent />;
}
