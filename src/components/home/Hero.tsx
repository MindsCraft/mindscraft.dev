import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Hero() {
    return (
        <section className="ph-hero" aria-labelledby="ph-hero-title">
            <div className="ph-hero-inner">
                <p className="ph-eyebrow">
                    <span className="ph-eyebrow-dot" aria-hidden="true" />
                    AI-First Product Studio · Dhaka · 14+ countries
                </p>

                <h1 id="ph-hero-title" className="ph-title">
                    We ship AI products<br />
                    in <em>weeks</em>,<br />
                    not quarters.
                </h1>

                <p className="ph-sub">
                    Senior-led sprints building AI integrations, AI-augmented
                    SaaS, and full AI MVPs for funded founders. Fixed scope.
                    Fixed price. A named senior on every project — never handed
                    off to juniors.
                </p>

                <div className="ph-actions">
                    <Link href="/contact" className="ph-cta">
                        Book a 30-min AI call
                        <FiArrowUpRight aria-hidden />
                    </Link>
                    <Link href="/ai-audit" className="ph-ghost">
                        Try the free AI Audit →
                    </Link>
                </div>
            </div>
        </section>
    );
}