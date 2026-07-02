import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { servicesData } from "@/data/servicesData";

// Services — four honest pillars (wireframe Section 3, 2026-07-02).
//
// We removed the per-pillar "starting from $X" block. Pricing lives at
// /pricing and /services/retainer now. Each pillar card shows: icon, tag,
// title, description, 4 feature bullets, one CTA. CTA href is per-pillar
// (pillar=website / pillar=apps / retainer route / sandbox/rag-demo) so
// the contact form pre-fills with the pillar context.

export default function Services() {
    return (
        <section className="sv-section" aria-labelledby="sv-title">
            <header className="sv-header">
                <p className="sv-eyebrow">What we ship</p>
                <h2 id="sv-title" className="sv-title">
                    Four focused pillars.<br />
                    One senior-led team.
                </h2>
                <p className="sv-sub">
                    Fixed-scope projects or a monthly retainer. One named senior per engagement, 2&ndash;8 weeks to ship.
                </p>
            </header>

            <ul className="sv-grid sv-grid-four">
                {servicesData.map((s) => {
                    const Icon = s.icon;
                    return (
                        <li key={s.id} className={`sv-card sv-card-${s.accent}`}>
                            <div className="sv-card-top">
                                <span className="sv-card-icon" aria-hidden="true">
                                    <Icon />
                                </span>
                                <span className="sv-card-num">{s.number}</span>
                            </div>

                            <span className="sv-card-tag">{s.tag}</span>
                            <h3 className="sv-card-title">{s.title}</h3>
                            <p className="sv-card-desc">{s.description}</p>

                            <ul className="sv-card-features">
                                {s.features.map((f) => (
                                    <li key={f} className="sv-card-feature">
                                        <span className="sv-card-tick" aria-hidden="true">
                                            &rarr;
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={s.href}
                                className="sv-card-link"
                            >
                                {s.cta}
                                <FiArrowUpRight aria-hidden />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}