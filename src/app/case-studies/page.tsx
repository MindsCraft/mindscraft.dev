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
};

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gray-900 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Case Studies</p>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Behind the work
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Not just what we built — but why, how, and what difference it made. Detailed breakdowns of real projects, coming soon.
                    </p>
                </div>
            </div>

            {/* Coming Soon State */}
            <div className="max-w-3xl mx-auto px-4 py-24 text-center">
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-14">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                        📋
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Case studies are on their way
                    </h2>
                    <p className="text-gray-500 leading-relaxed max-w-lg mx-auto mb-8">
                        We&apos;re documenting the real stories behind our recent projects — the problems clients faced, the solutions we built, and the measurable impact. Check back soon, or browse our portfolio in the meantime.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/work"
                            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-2xl font-semibold hover:bg-blue-600 transition-colors duration-300"
                        >
                            View our portfolio <FiArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-7 py-3.5 rounded-2xl font-semibold hover:border-gray-900 hover:text-gray-900 transition-colors duration-300"
                        >
                            Start a project
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
