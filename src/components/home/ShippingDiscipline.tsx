// How we ship — dual-track delivery discipline (Section 6).
//
// Two-column band. Left = project discipline. Right = retainer cadence.
// Equal weight. No AI-eval jargon in retainer copy, no PM jargon in
// project copy. The first three bullets on each side are the same shape
// (short headline + 2-3 plain-English sentences). The last bullet on each
// side is the "next step" line.

type DisciplinePoint = {
    title: string;
    body: string;
};

const projectColumn: {
    eyebrow: string;
    headline: string;
    points: DisciplinePoint[];
    cta: string;
    href: string;
} = {
    eyebrow: "For projects",
    headline: "Senior-review discipline.",
    points: [
        {
            title: "Named senior on every project.",
            body: "One senior owns the work end-to-end. No hand-offs to juniors, no account managers between you and the engineer.",
        },
        {
            title: "Versioned, reversible, traceable.",
            body: "Every change ships through Git. Roll back any deploy in under five minutes. Every prompt and config change is reviewed.",
        },
        {
            title: "Fixed scope. Fixed price.",
            body: "Written scope the next day. The price you see is the price you pay. 30 days of post-launch support included.",
        },
    ],
    cta: "Tell us about your project →",
    href: "/contact?type=project",
};

const retainerColumn: {
    eyebrow: string;
    headline: string;
    points: DisciplinePoint[];
    cta: string;
    href: string;
} = {
    eyebrow: "For retainers",
    headline: "Monthly cadence that fits a small team.",
    points: [
        {
            title: "12 posts a month. Scheduled.",
            body: "We plan, write, schedule, and post. You approve once, we ship the rest of the month.",
        },
        {
            title: "Monthly call + WhatsApp.",
            body: "One strategy call a month. WhatsApp or async in between. Same humans every time.",
        },
        {
            title: "30-day rolling. Cancel any month.",
            body: "No annual lock-in. We earn the next month every month.",
        },
    ],
    cta: "Stay with us monthly →",
    href: "/services/retainer",
};

export default function ShippingDiscipline() {
    return (
        <section className="sd-section" aria-labelledby="sd-title">
            <header className="sd-header">
                <p className="sd-eyebrow">How we ship</p>
                <h2 id="sd-title" className="sd-title">
                    One team. Two rhythms.
                </h2>
                <p className="sd-sub">
                    Same discipline, different clock.
                </p>
            </header>

            <div className="sd-grid">
                <ProjectColumn column={projectColumn} />
                <RetainerColumn column={retainerColumn} />
            </div>
        </section>
    );
}

function ProjectColumn({ column }: { column: typeof projectColumn }) {
    return (
        <article className="sd-col sd-col-project">
            <p className="sd-col-eyebrow">{column.eyebrow}</p>
            <h3 className="sd-col-headline">{column.headline}</h3>
            <ol className="sd-col-list">
                {column.points.map((p, i) => (
                    <li key={p.title} className="sd-col-point">
                        <span className="sd-col-num">{String(i + 1).padStart(2, "0")}</span>
                        <div>
                            <h4 className="sd-col-point-title">{p.title}</h4>
                            <p
                                className="sd-col-point-body"
                                dangerouslySetInnerHTML={{ __html: p.body }}
                            />
                        </div>
                    </li>
                ))}
            </ol>
            <a href={column.href} className="sd-col-cta sd-col-cta-project">
                {column.cta}
            </a>
        </article>
    );
}

function RetainerColumn({ column }: { column: typeof retainerColumn }) {
    return (
        <article className="sd-col sd-col-retainer">
            <p className="sd-col-eyebrow">{column.eyebrow}</p>
            <h3 className="sd-col-headline">{column.headline}</h3>
            <ol className="sd-col-list">
                {column.points.map((p, i) => (
                    <li key={p.title} className="sd-col-point">
                        <span className="sd-col-num">{String(i + 1).padStart(2, "0")}</span>
                        <div>
                            <h4 className="sd-col-point-title">{p.title}</h4>
                            <p
                                className="sd-col-point-body"
                                dangerouslySetInnerHTML={{ __html: p.body }}
                            />
                        </div>
                    </li>
                ))}
            </ol>
            <a href={column.href} className="sd-col-cta sd-col-cta-retainer">
                {column.cta}
            </a>
        </article>
    );
}