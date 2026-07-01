const steps = [
    {
        n: "01",
        label: "Discover",
        title: "Scope in 48 hours",
        body: "30-min call, written scope the next day. You see what you get, what you pay, and when it ships — before any invoice.",
    },
    {
        n: "02",
        label: "Design",
        title: "Wireframes to lock the shape",
        body: "Lo-fi wireframes by day 3, hi-fi Figma by end of week 1. You sign off the shape before we touch a line of code.",
    },
    {
        n: "03",
        label: "Build",
        title: "Weekly demos, no surprises",
        body: "A named senior ships code in two-week sprints. Live URLs every Friday. Slack channel. No theatre, no juniors.",
    },
    {
        n: "04",
        label: "Ship",
        title: "Deploy, hand-off, support",
        body: "Production deploy with full source, docs and CI. 30 days of post-launch support included. We don\'t ghost.",
    },
];

export default function Process() {
    return (
        <section className="pr-section" aria-labelledby="pr-title">
            <header className="pr-header">
                <p className="pr-eyebrow">How we work</p>
                <h2 id="pr-title" className="pr-title">
                    A predictable path from idea to live product.
                </h2>
            </header>

            <ol className="pr-grid">
                {steps.map((s) => (
                    <li key={s.n} className="pr-step">
                        <span className="pr-step-num">{s.n}</span>
                        <span className="pr-step-label">{s.label}</span>
                        <h3 className="pr-step-title">{s.title}</h3>
                        <p className="pr-step-body">{s.body}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
}