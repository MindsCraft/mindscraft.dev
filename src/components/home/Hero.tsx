import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

// Hero — variant restore (2026-07-02, option 3 — H1 reverted, sub rewritten).
//
// Eyebrow (unchanged): "AI-First Product Studio · Dhaka · 14+ countries"
// H1:   "We ship AI products in weeks, not quarters." (em-italic on "weeks")
// Sub:  Fresh copy — mentions weeks, fixed scope, no "senior" framing.
// CTAs: Primary → /contact?type=project
//       Secondary → /services/retainer

export default function Hero() {
    return (
        <section className="ph-hero" aria-labelledby="ph-hero-title">
            <div className="ph-hero-inner">
                <p className="ph-eyebrow">
                    <span className="ph-eyebrow-dot" aria-hidden="true" />
                    AI-First Product Studio &middot; Dhaka &middot; 14+ countries
                </p>

                <h1 id="ph-hero-title" className="ph-title">
                    We ship AI products<br />
                    in <em>weeks</em>,<br />
                    not quarters.
                </h1>

                <p className="ph-sub">
                    AI integrations, AI-augmented SaaS, and full AI MVPs &mdash;
                    fixed scope, fixed price, shipped in weeks. Or stay with
                    us monthly &mdash; same team, no re-onboarding.
                </p>

                <div className="ph-actions">
                    <Link href="/contact?type=project" className="ph-cta">
                        Tell us about your project
                        <FiArrowUpRight aria-hidden />
                    </Link>
                    <Link href="/services/retainer" className="ph-ghost">
                        Stay with us monthly &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
