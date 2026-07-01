import { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
    title: 'Client Case Studies — Real Project Results | MindsCraft',
    description: 'In-depth case studies of real client projects — the problems we solved, our development process, and the measurable business results we delivered.',
    alternates: {
        canonical: 'https://mindscraft.dev/case-studies',
    },
    openGraph: {
        title: 'Client Case Studies | MindsCraft',
        description: 'Real project results: problems solved, process used, and measurable business outcomes.',
        url: 'https://mindscraft.dev/case-studies',
        siteName: 'MindsCraft',
        images: [{ url: 'https://mindscraft.dev/images/og-image.png', width: 1200, height: 630, alt: 'MindsCraft Case Studies' }],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Client Case Studies | MindsCraft',
        description: 'Real project results: problems solved, process used, and measurable business outcomes.',
        images: ['https://mindscraft.dev/images/og-image.png'],
    },
};

export default function CaseStudiesPage() {
    return (
        <div className="case-studies-page">
            {/* Header */}
            <div className="case-studies-hero">
                <div className="case-studies-hero-inner">
                    <p className="case-studies-eyebrow">Case Studies</p>
                    <h1 className="case-studies-title">Behind the work</h1>
                    <p className="case-studies-subtitle">
                        Not just what we built — but why, how, and what difference it made. Detailed breakdowns of real projects, coming soon.
                    </p>
                </div>
            </div>

            {/* Coming Soon State */}
            <div className="case-studies-empty">
                <div className="case-studies-card">
                    <div className="case-studies-emoji">📋</div>
                    <h2>Case studies are on their way</h2>
                    <p>
                        We&apos;re documenting the real stories behind our recent projects — the problems clients faced, the solutions we built, and the measurable impact. Check back soon, or browse our portfolio in the meantime.
                    </p>
                    <div className="case-studies-actions">
                        <Link href="/work" className="cs-cta-primary">
                            View our portfolio <FiArrowRight />
                        </Link>
                        <Link href="/contact" className="cs-cta-secondary">
                            Start a project
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
