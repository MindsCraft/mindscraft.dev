import { FiCpu, FiMonitor, FiEdit3, FiCode } from 'react-icons/fi';

// Four honest pillars for the home page.
// We removed the per-pillar "starting from $X" pricing because:
//   - The old prices ($5K / $8K / $2,500 / $2,500 / $3,500 / $1,500) were
//     invented and not grounded in real engagements.
//   - The dual-track model (projects vs retainers) means pricing lives on
//     /pricing and /services/retainer, not in 4 inline card CTAs.
//   - Showing a fabricated starting price on the homepage forces a sales
//     conversation around a number we can't defend.

export interface Service {
    id: string;
    number: string;
    tag: string;
    title: string;
    description: string;
    features: string[];
    cta: string;
    href: string;          // explicit destination route per pillar
    accent: 'light' | 'navy' | 'cream';
    icon: any;
}

export const servicesData: Service[] = [
    {
        id: 'website-web-apps',
        number: '01',
        tag: 'Most common',
        title: 'Website & Web Apps',
        description:
            'Marketing sites and content-heavy web apps. Next.js, Laravel, or WordPress — whichever ships fastest.',
        features: [
            'Next.js 15 + TypeScript',
            'Laravel for content-heavy apps',
            'Headless WordPress',
            'Lighthouse 95+, sub-second LCP',
        ],
        cta: 'Website brief →',
        href: '/contact?type=project&pillar=website',
        accent: 'light',
        icon: FiMonitor,
    },
    {
        id: 'apps-internal-tools',
        number: '02',
        tag: 'High ROI',
        title: 'Apps & Internal Tools',
        description:
            'Operations dashboards, client portals, multi-tenant SaaS. Source code, docs, 30 days support.',
        features: [
            'React + Node + Postgres + Prisma',
            'Supabase for fast backends',
            'Auth, billing, role-based access',
            'CI/CD + cloud deploy',
        ],
        cta: 'App scope →',
        href: '/contact?type=project&pillar=apps',
        accent: 'light',
        icon: FiCode,
    },
    {
        id: 'content-social',
        number: '03',
        tag: 'Retainer',
        title: 'Content & Social',
        description:
            'Someone to post, reply, and keep the brand consistent every week. 12 posts, monthly call, WhatsApp.',
        features: [
            '12 social posts / month',
            'Monthly strategy call',
            'WhatsApp + async',
            '30-day rolling',
        ],
        cta: 'Retainer brief →',
        href: '/services/retainer',
        accent: 'cream',
        icon: FiEdit3,
    },
    {
        id: 'ai-integrations',
        number: '04',
        tag: 'Newly proven',
        title: 'AI Integrations',
        description:
            'RAG search, AI assistants, AI workflows. Model-agnostic — switch providers without rewriting.',
        features: [
            'RAG over your docs',
            'AI assistants + prompt evaluation',
            'Anthropic / OpenAI — switchable',
            'Langfuse observability',
        ],
        cta: 'Try the AI demo →',
        href: '/sandbox/rag-demo',
        accent: 'navy',
        icon: FiCpu,
    },
];
