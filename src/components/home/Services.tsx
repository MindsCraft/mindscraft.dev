import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { servicesData } from "@/data/servicesData";

// Home surface shows 3 services (AI-product, SaaS MVP, full-stack)
// — the most relevant for an AI-first studio.
const featured = servicesData.slice(0, 3);

export default function Services() {
    return (
        <section className="sv-section" aria-labelledby="sv-title">
            <header className="sv-header">
                <p className="sv-eyebrow">What we ship</p>
                <h2 id="sv-title" className="sv-title">
                    Three focused offerings.<br />
                    One senior-led team.
                </h2>
                <p className="sv-sub">
                    No agency theatre. No outsourcing. You get a named senior on
                    every project, fixed scope, fixed price, and a working
                    product in 2&ndash;8 weeks.
                </p>
            </header>

            <ul className="sv-grid">
                {featured.map((s) => {
                    const Icon = s.icon;
                    return (
                        <li key={s.id} className="sv-card">
                            <div className="sv-card-top">
                                <span className="sv-card-icon" aria-hidden="true">
                                    <Icon />
                                </span>
                                <span className="sv-card-num">{s.number}</span>
                            </div>

                            <h3 className="sv-card-title">{s.title}</h3>
                            <p className="sv-card-desc">{s.description}</p>

                            <ul className="sv-card-features">
                                {s.features.slice(0, 4).map((f) => (
                                    <li key={f} className="sv-card-feature">
                                        <span className="sv-card-tick" aria-hidden="true">
                                            &rarr;
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <div className="sv-card-foot">
                                <span className="sv-card-price">
                                    from <strong>{s.startingFrom}</strong>
                                </span>
                                <Link
                                    href={`/services#${s.id}`}
                                    className="sv-card-link"
                                >
                                    {s.cta}
                                    <FiArrowUpRight aria-hidden />
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}