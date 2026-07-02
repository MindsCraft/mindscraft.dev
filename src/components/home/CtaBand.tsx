import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

// Wireframe Section 10 — final CTA.
// One H1, two equal-weight columns. Same button weight as the Hero so
// the two tracks feel like the same choice presented twice, not a
// primary action plus an afterthought. The eyebrow signals we are
// open for new work without sounding desperate.

const tracks = [
    {
        eyebrow: "Project track",
        headline: "Tell us about your project.",
        body: "Fixed scope, fixed price. Named senior. 2&ndash;8 weeks.",
        cta: "Tell us about your project",
        href: "/contact?type=project",
        weight: "primary" as const,
    },
    {
        eyebrow: "Retainer track",
        headline: "Stay with us monthly.",
        body: "12 posts/month, one monthly call, WhatsApp. 30-day rolling.",
        cta: "Stay with us monthly",
        href: "/services/retainer",
        weight: "ghost" as const,
    },
];

export default function CtaBand() {
    return (
        <section className="cb-section" aria-labelledby="cb-title">
            <div className="cb-inner">
                <span className="cb-eyebrow">
                    <span className="cb-eyebrow-dot" aria-hidden="true" />
                    Currently booking Q3 2026
                </span>

                <h2 id="cb-title" className="cb-title">
                    One project, or one team that stays.
                </h2>

                <p className="cb-sub">
                    Pick the one that matches the shape of the problem.
                </p>

                <div className="cb-tracks">
                    {tracks.map((t) => (
                        <div key={t.href} className="cb-track">
                            <p className="cb-track-eyebrow">{t.eyebrow}</p>
                            <h3 className="cb-track-headline">{t.headline}</h3>
                            <p className="cb-track-body">{t.body}</p>
                            <Link
                                href={t.href}
                                className={
                                    t.weight === "primary"
                                        ? "cb-cta"
                                        : "cb-ghost"
                                }
                            >
                                {t.cta}
                                <FiArrowUpRight aria-hidden />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}