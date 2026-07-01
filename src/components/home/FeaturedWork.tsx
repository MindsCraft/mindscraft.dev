import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { featuredWork } from "@/data/featuredWork";

export default function FeaturedWork() {
    return (
        <section className="fw-section" aria-labelledby="fw-title">
            <header className="fw-header">
                <div>
                    <p className="fw-eyebrow">Selected work</p>
                    <h2 id="fw-title" className="fw-title">
                        What we&rsquo;ve shipped recently.
                    </h2>
                </div>
                <Link href="/work" className="fw-all">
                    See all work
                    <FiArrowUpRight aria-hidden />
                </Link>
            </header>

            <ul className="fw-grid">
                {featuredWork.map((w) => (
                    <li key={w.id} className="fw-card">
                        <Link
                            href={w.href ?? "/work"}
                            className="fw-card-link"
                            aria-label={`${w.title} — ${w.scope}`}
                        >
                            <div className="fw-card-media">
                                <Image
                                    src={w.image}
                                    alt={w.title}
                                    fill
                                    sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
                                    className="fw-card-img"
                                />
                            </div>

                            <div className="fw-card-body">
                                <span className="fw-card-cat">{w.category}</span>
                                <h3 className="fw-card-title">{w.title}</h3>
                                <p className="fw-card-scope">{w.scope}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}