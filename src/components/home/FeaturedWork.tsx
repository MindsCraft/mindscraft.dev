import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { recentProjects, specProjects } from "@/data/featuredWork";

// Selected Work — two rows, two audiences (wireframe Section 7).
//
// Row 1: Recent projects — real client work, founder-confirmed only.
// Row 2: Spec projects   — internal builds that demo what we can ship.
//                          Labelled honestly as "Spec projects — internal
//                          builds that demo what we can ship for clients".
//
// Both row labels are required UI so visitors can see at a glance which is
// real client work and which is internal. Without the labels, the section
// reads as 6 client case studies — exactly the failure mode that broke the
// previous version.

export default function FeaturedWork() {
    const hasRecent = recentProjects.length > 0;

    return (
        <section className="fw-section" aria-labelledby="fw-title">
            <header className="fw-header">
                <div>
                    <p className="fw-eyebrow">Selected work</p>
                    <h2 id="fw-title" className="fw-title">
                        Recent projects, and a few we built to prove a point.
                    </h2>
                </div>
                <Link href="/work" className="fw-all">
                    See all work
                    <FiArrowUpRight aria-hidden />
                </Link>
            </header>

            {/* Row 1 — Recent projects */}
            <div className="fw-row">
                <p className="fw-row-label">
                    <span className="fw-row-eyebrow">Recent projects</span>
                    <span className="fw-row-desc">
                        Real client work shipped in the last 12 months.
                    </span>
                </p>

                {hasRecent ? (
                    <ul className="fw-grid">
                        {recentProjects.map((w) => (
                            <li key={w.id} className="fw-card">
                                <Link
                                    href={w.href ?? "/work"}
                                    className="fw-card-link"
                                    aria-label={`${w.title} — ${w.scope}`}
                                >
                                    <div className="fw-card-media">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={w.image}
                                            alt={w.title}
                                            className="fw-card-img"
                                        />
                                    </div>
                                    <div className="fw-card-body">
                                        <span className="fw-card-cat">{w.pillar}</span>
                                        <h3 className="fw-card-title">{w.title}</h3>
                                        <p className="fw-card-scope">{w.scope}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="fw-empty">
                        <p>
                            Case studies land here as the founder confirms each one.
                        </p>
                        <Link href="/sandbox/rag-demo" className="fw-empty-link">
                            Try the AI demo &rarr;
                        </Link>
                    </div>
                )}
            </div>

            {/* Row 2 — Spec projects */}
            <div className="fw-row fw-row-spec">
                <p className="fw-row-label">
                    <span className="fw-row-eyebrow">Spec projects</span>
                    <span className="fw-row-desc">
                        Internal builds that demo what we can ship for clients.
                    </span>
                </p>

                <ul className="fw-grid">
                    {specProjects.map((w) => (
                        <li key={w.id} className="fw-card fw-card-spec">
                            <Link
                                href={w.href}
                                className="fw-card-link"
                                aria-label={`${w.title} — ${w.scope}`}
                            >
                                <div className="fw-card-media">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={w.image}
                                        alt={w.title}
                                        className="fw-card-img"
                                    />
                                    <span className={`fw-card-status fw-card-status-${w.status}`}>
                                        {w.status === "live"
                                            ? "Live"
                                            : w.status === "in-build"
                                              ? "In build"
                                              : "Planned"}
                                    </span>
                                </div>
                                <div className="fw-card-body">
                                    <span className="fw-card-cat">{w.pillar}</span>
                                    <h3 className="fw-card-title">{w.title}</h3>
                                    <p className="fw-card-scope">{w.scope}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}