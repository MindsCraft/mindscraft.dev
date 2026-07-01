import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function CtaBand() {
    return (
        <section className="cb-section" aria-labelledby="cb-title">
            <div className="cb-inner">
                <span className="cb-eyebrow">
                    <span className="cb-eyebrow-dot" aria-hidden="true" />
                    Currently booking Q3 2026
                </span>

                <h2 id="cb-title" className="cb-title">
                    Got an AI product in mind?<br />
                    Let&rsquo;s scope it this week.
                </h2>

                <p className="cb-sub">
                    30-minute call, written scope the next day. No sales pitch,
                    no deck &mdash; just a senior engineer telling you what
                    it would take and what it would cost.
                </p>

                <div className="cb-actions">
                    <Link href="/contact" className="cb-cta">
                        Book a 30-min AI call
                        <FiArrowUpRight aria-hidden />
                    </Link>
                    <Link href="/ai-audit" className="cb-ghost">
                        Or try the free AI Audit &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}