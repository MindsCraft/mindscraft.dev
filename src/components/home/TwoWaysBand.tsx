import Link from "next/link";
import { FiArrowUpRight, FiBriefcase, FiRepeat } from "react-icons/fi";

// Two ways to work — dual-track routing layer (Section 4).
//
// Two audiences:
//   1. Mid-market project buyers (funded teams, regional chains).
//   2. Small-business retainer buyers (restaurants, clinics, retail, tuition,
//      NGOs, agents).
//
// Both cards get equal weight. No visual hierarchy that pushes one audience
// down. The button destinations are the founder-locked routes:
//
//   Primary   → /contact?type=project     (matches Hero primary + Section 10)
//   Secondary → /services/retainer        (matches Hero secondary + Section 10)

type Track = {
    eyebrow: string;
    headline: string;
    pitch: string;
    bullets: string[];
    cta: string;
    href: string;
    icon: any;
};

const tracks: Track[] = [
    {
        eyebrow: "Project track",
        headline: "Got a project?",
        pitch: "Fixed scope, fixed price, named senior, 2&ndash;8 weeks.",
        bullets: [
            "Written scope the next day",
            "Senior reviews every change",
            "Source, docs, 30 days support",
        ],
        cta: "Tell us about your project →",
        href: "/contact?type=project",
        icon: FiBriefcase,
    },
    {
        eyebrow: "Retainer track",
        headline: "Need a team that stays?",
        pitch: "Someone who posts, replies, and keeps the brand consistent every week.",
        bullets: [
            "12 social posts / month",
            "Monthly call + WhatsApp",
            "30-day rolling, cancel any month",
        ],
        cta: "Stay with us monthly →",
        href: "/services/retainer",
        icon: FiRepeat,
    },
];

export default function TwoWaysBand() {
    return (
        <section className="tw-section" aria-labelledby="tw-title">
            <header className="tw-header">
                <p className="tw-eyebrow">Two ways to work</p>
                <h2 id="tw-title" className="tw-title">
                    One project, or one team that stays.
                </h2>
                <p className="tw-sub">
                    Pick the track that matches today. Switch any month.
                </p>
            </header>

            <div className="tw-grid">
                {tracks.map((t) => {
                    const Icon = t.icon;
                    return (
                        <article key={t.eyebrow} className="tw-card">
                            <div className="tw-card-top">
                                <span className="tw-card-icon" aria-hidden="true">
                                    <Icon />
                                </span>
                                <span className="tw-card-eyebrow">{t.eyebrow}</span>
                            </div>

                            <h3 className="tw-card-title">{t.headline}</h3>
                            <p
                                className="tw-card-pitch"
                                dangerouslySetInnerHTML={{ __html: t.pitch }}
                            />

                            <ul className="tw-card-bullets">
                                {t.bullets.map((b) => (
                                    <li key={b} className="tw-card-bullet">
                                        <span className="tw-card-tick" aria-hidden="true">
                                            &rarr;
                                        </span>
                                        {b}
                                    </li>
                                ))}
                            </ul>

                            <Link href={t.href} className="tw-card-cta">
                                {t.cta}
                                <FiArrowUpRight aria-hidden />
                            </Link>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
