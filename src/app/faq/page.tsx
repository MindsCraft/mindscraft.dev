import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const FAQContent = dynamic(() => import('./FAQContent'), { ssr: true });

const SITE_URL = 'https://mindscraft.dev';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions — Web Development Agency | MindsCraft',
    description: 'Common questions about working with MindsCraft: our process, project timelines, pricing, technologies we use, and how to get started.',
    alternates: {
        canonical: `${SITE_URL}/faq`,
    },
    openGraph: {
        title: 'Frequently Asked Questions | MindsCraft',
        description: 'Questions about our process, timelines, pricing, and technologies answered.',
        url: `${SITE_URL}/faq`,
        siteName: 'MindsCraft',
        images: [{ url: `${SITE_URL}/images/og-image.png`, width: 1200, height: 630, alt: 'MindsCraft FAQ' }],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Frequently Asked Questions | MindsCraft',
        description: 'Questions about our process, timelines, pricing, and technologies answered.',
        site: '@mindscraft',
        images: [`${SITE_URL}/images/og-image.png`],
    },
};

export default function FAQPage() {
    return <FAQContent />;
}
