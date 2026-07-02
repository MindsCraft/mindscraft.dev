// Tooling band — stack credibility across all 4 pillars (Section 5).
//
// Row labels are required UI so visitors can see at a glance that we don't
// only do AI — we ship web, apps, content, AND AI. Without the labels, the
// section collapses into "another AI studio's tool list".

import { FiGlobe, FiCpu, FiEdit3, FiBox } from "react-icons/fi";

type Row = {
    icon: any;
    pillar: string;
    tagline: string;
    tools: string[];
};

const rows: Row[] = [
    {
        icon: FiGlobe,
        pillar: "Web",
        tagline: "Marketing sites, headless CMS, fast storefronts.",
        tools: ["Next.js 15", "Laravel", "WordPress", "Vite", "Tailwind"],
    },
    {
        icon: FiBox,
        pillar: "Apps",
        tagline: "Operations dashboards, portals, multi-tenant SaaS.",
        tools: ["React", "Node", "Supabase", "Postgres", "Prisma"],
    },
    {
        icon: FiEdit3,
        pillar: "Content",
        tagline: "Small-business content retainers — the work most studios skip.",
        tools: ["Sanity", "Notion", "Buffer", "Ahrefs", "GA4"],
    },
    {
        icon: FiCpu,
        pillar: "AI",
        tagline: "Model-agnostic by default. Switch providers without rewriting the app.",
        tools: ["LangGraph", "Vercel AI SDK", "pgvector", "Pinecone", "Anthropic", "OpenAI", "Langfuse"],
    },
];

export default function ToolingBand() {
    return (
        <section className="tb-section" aria-labelledby="tb-title">
            <header className="tb-header">
                <p className="tb-eyebrow">Tooling</p>
                <h2 id="tb-title" className="tb-title">
                    The stacks we actually ship in.
                </h2>
                <p className="tb-sub">
                    The tools we use every week &mdash; across all four pillars.
                </p>
            </header>

            <ul className="tb-grid">
                {rows.map((r) => {
                    const Icon = r.icon;
                    return (
                        <li key={r.pillar} className="tb-row">
                            <div className="tb-row-mark" aria-hidden="true">
                                <Icon />
                            </div>
                            <div className="tb-row-head">
                                <span className="tb-row-eyebrow">{r.pillar}</span>
                                <span className="tb-row-tagline">{r.tagline}</span>
                            </div>
                            <ul className="tb-row-tools">
                                {r.tools.map((t) => (
                                    <li key={t} className="tb-row-tool">
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
