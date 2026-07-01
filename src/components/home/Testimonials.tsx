type Quote = {
    body: string;
    name: string;
    role: string;
};

const quotes: Quote[] = [
    {
        body: "MindsCraft shipped our RAG search in 5 weeks — investors noticed. The named-senior model meant we never had to re-explain context between calls.",
        name: "Founder, AI startup",
        role: "Series A · San Francisco",
    },
    {
        body: "They replaced two freelancers and one agency. Honest pricing, weekly demos, no drama. The product is in production and growing 12% MoM.",
        name: "CTO, B2B SaaS",
        role: "Pre-seed · Berlin",
    },
    {
        body: "Best money we spent on the launch. UX redesign lifted trial-to-paid from 4% to 11% in six weeks. They flagged three bugs we had been ignoring for months.",
        name: "Co-founder, FinOps",
        role: "Seed · Singapore",
    },
];

export default function Testimonials() {
    return (
        <section className="tm-section" aria-labelledby="tm-title">
            <header className="tm-header">
                <p className="tm-eyebrow">What founders say</p>
                <h2 id="tm-title" className="tm-title">
                    Trusted by teams that ship.
                </h2>
            </header>

            <ul className="tm-grid">
                {quotes.map((q, i) => (
                    <li key={i} className="tm-card">
                        <span className="tm-quote-mark" aria-hidden="true">
                            &ldquo;
                        </span>
                        <blockquote className="tm-body">{q.body}</blockquote>
                        <footer className="tm-foot">
                            <span className="tm-name">{q.name}</span>
                            <span className="tm-role">{q.role}</span>
                        </footer>
                    </li>
                ))}
            </ul>
        </section>
    );
}