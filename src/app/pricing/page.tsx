import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const PricingContent = dynamic(() => import('./PricingContent'), { ssr: true });

const SITE_URL = 'https://mindscraft.dev';

export const metadata: Metadata = {
    title: 'Web Development Pricing Plans | MindsCraft',
    description: 'Transparent, competitive pricing for web development, UX/UI design, and AI integration. Custom projects starting from $1,500. No hidden fees.',
    alternates: {
        canonical: `${SITE_URL}/pricing`,
    },
    openGraph: {
        title: 'Web Development Pricing Plans | MindsCraft',
        description: 'Transparent pricing for web development, UX/UI design, and AI integration. Projects from $1,500. No hidden fees.',
        url: `${SITE_URL}/pricing`,
        siteName: 'MindsCraft',
        images: [{ url: `${SITE_URL}/images/og-image.png`, width: 1200, height: 630, alt: 'MindsCraft Pricing' }],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Web Development Pricing Plans | MindsCraft',
        description: 'Transparent pricing for web development and UX design. Projects from $1,500.',
        site: '@mindscraft',
        images: [`${SITE_URL}/images/og-image.png`],
    },
};

export default function PricingPage() {
    return <PricingContent />;
}
