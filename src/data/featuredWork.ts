// Selected Work — two arrays, two audiences.
//
// Row 1: "Recent projects" — real client work the founder has personally
//         shipped in the last 12 months. Empty until the founder confirms
//         each entry. Empty array is acceptable — placeholders are not.
//
// Row 2: "Spec projects" — internal builds that demo what we can ship for
//         clients (especially the AI pillar we don't yet have client proof
//         for). Hardcoded list, ordered by ship-readiness. RAG first per
//         founder lock (2026-07-02).
//
// Rule of thumb: keep scope to one sentence; skip the metric unless you can
// verify it. No fake names. No fabricated logos.

export interface RecentProject {
    id: string;
    title: string;       // client or project name (founder-confirmed only)
    scope: string;       // one-line description, no metrics
    pillar: string;      // matches a pillar in servicesData.ts
    image: string;       // cover image path
    href?: string;       // optional link to a case study
}

export interface SpecProject {
    id: string;
    title: string;       // spec demo name (not a client)
    scope: string;       // one-line description of what it demos
    pillar: 'AI Integrations' | 'Apps & Internal Tools' | 'Website & Web Apps' | 'Content & Social';
    image: string;       // cover screenshot path
    href: string;        // where the demo lives
    status: 'live' | 'in-build' | 'planned';
}

// Recent projects — real client work only.
// TODO: founder to add real entries here as they confirm each is shippable.
export const recentProjects: RecentProject[] = [
    // Example shape (founder to uncomment + edit when adding a real entry):
    // {
    //     id: 'client-slug',
    //     title: 'Client Name',
    //     scope: 'One-line scope, no metrics.',
    //     pillar: 'Apps & Internal Tools',
    //     image: '/images/work/client-slug.jpg',
    // },
];

// Spec projects — internal builds, ordered by ship-readiness.
// These are sales tools. They are NOT client case studies. The home page
// section 7 wireframe labels this row clearly as "Spec projects — internal
// builds that demo what we can ship for clients".
export const specProjects: SpecProject[] = [
    {
        id: 'rag-public-docs',
        title: 'RAG over public docs',
        scope: 'Internal RAG demo. Ask questions of a real corpus, see eval scores live.',
        pillar: 'AI Integrations',
        image: '/images/specs/rag.svg',
        href: '/sandbox/rag-demo',
        status: 'in-build',
    },
    {
        id: 'multi-agent-research',
        title: 'Multi-agent research',
        scope: 'LangGraph orchestration: a planner agent, a searcher agent, a writer agent.',
        pillar: 'AI Integrations',
        image: '/images/specs/multi-agent.svg',
        href: '/sandbox/multi-agent',
        status: 'planned',
    },
    {
        id: 'inbound-sdr-agent',
        title: 'Inbound SDR agent',
        scope: 'Lead enrichment + first-touch email draft from a CRM webhook.',
        pillar: 'AI Integrations',
        image: '/images/specs/sdr.svg',
        href: '/sandbox/sdr-agent',
        status: 'planned',
    },
];