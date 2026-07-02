// Wireframe Section 9 — what people say.
// Three anonymous roles, split by track. No founder-first framing, no
// invented geo+stage combos. Tone split: terse technical (project),
// warm monthly (retainer), reflective trust (either).

type Quote = {
    body: string;
    role: string;
    track: "project" | "retainer" | "either";
};

const quotes: Quote[] = [
    {
        body: "Quoted a Friday, shipped a working RAG search by the end of the next month. The senior replied to me directly, every time.",
        role: "Founder, AI startup",
        track: "project",
    },
    {
        body: "Our clinic network has twelve locations and three rotating managers. They look after the site, the booking flow, and the WhatsApp reminders. Feels like a quiet in-house team.",
        role: "Operations lead, clinic chain",
        track: "retainer",
    },
    {
        body: "I run a small restaurant group. They built the site, keep it updated, and tell me once a year when the renewal is due. That's the whole arrangement.",
        role: "Owner, restaurant chain",
        track: "either",
    },
];

export default function Testimonials() {
    return (
        <section className="tm-section" aria-labelledby="tm-title">
            <header className="tm-header">
                <p className="tm-eyebrow">What it’s like working with us</p>
                <h2 id="tm-title" className="tm-title">
                    Real people. Real arrangements.
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
                            <span className="tm-role">{q.role}</span>
                        </footer>
                    </li>
                ))}
            </ul>
        </section>
    );
}