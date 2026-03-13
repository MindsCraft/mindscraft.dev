import { FiCpu, FiMonitor, FiLayout, FiCode, FiZap, FiShoppingBag, FiLayers } from 'react-icons/fi';

export interface Service {
    id: string;
    number: string;
    tag: string;
    title: string;
    description: string;
    features: string[];
    cta: string;
    startingFrom: string;
    accent: 'light' | 'navy' | 'cream';
    icon: any; // For home page use
}

export const servicesData: Service[] = [
    {
        id: 'ai-product-dev',
        number: '01',
        tag: 'Most Popular',
        title: 'AI Product Development',
        description:
            'Ship AI-native features your users will actually use. We design and build LLM-powered products — from intelligent search and RAG pipelines to AI dashboards and automated workflows. If you need an AI feature to attract investors or users, we can take it from concept to production in under 6 weeks.',
        features: [
            'LLM & RAG Integration',
            'AI Chatbot & Assistants',
            'Prompt Engineering',
            'OpenAI / Anthropic APIs',
            'Embeddings & Vector DBs',
            'Process Automation',
        ],
        cta: 'Build Your AI Feature',
        startingFrom: '$5,000',
        accent: 'navy',
        icon: FiCpu,
    },
    {
        id: 'saas-mvp',
        number: '02',
        tag: 'Startup Favourite',
        title: 'SaaS MVP Development',
        description:
            'From napkin sketch to deployed, demo-ready product — in 6 to 8 weeks. We handle the full stack: UX design, frontend, backend, auth, payments, and cloud deployment. Built to scale when your user base grows, not to be thrown away and rewritten.',
        features: [
            'Full-Stack React & Next.js',
            'Auth & Subscription Billing',
            'Admin Dashboard',
            'REST & GraphQL APIs',
            'CI/CD & Cloud Deploy',
            'Post-Launch Support',
        ],
        cta: 'Launch Your MVP',
        startingFrom: '$8,000',
        accent: 'light',
        icon: FiMonitor,
    },
    {
        id: 'wordpress-cms',
        number: '03',
        tag: 'CMS Expertise',
        title: 'WordPress & CMS Web Development',
        description:
            'We are capable of handling any kind of WordPress project, from simple marketing sites to complex custom themes, plugins, and headless CMS architectures. Whether you need an engaging corporate website, a high-traffic blog, or an enterprise-grade CMS platform, we build robust, scalable, and easy-to-manage solutions tailored to your business needs.',
        features: [
            'Custom Theme Development',
            'Plugin Development & Integration',
            'Headless WordPress (Next.js)',
            'Migration & Performance tuning',
            'E-commerce (WooCommerce)',
            'Enterprise CMS Architecture',
        ],
        cta: 'Build Your Website',
        startingFrom: '$2,500',
        accent: 'light',
        icon: FiLayers,
    },
    {
        id: 'ux-cro',
        number: '04',
        tag: 'High ROI',
        title: 'UX Design & Conversion Optimisation',
        description:
            "Bad UX is a revenue leak. We audit your existing product or website, identify where users drop off, and redesign the critical flows — sign-up, onboarding, checkout, pricing — to convert better. You'll see measurable improvement in trial-to-paid, CTR, and user retention.",
        features: [
            'UX Audit & Heatmap Analysis',
            'User Research & Interviews',
            'Wireframing & Prototyping',
            'A/B Test Design',
            'Figma Design System',
            'Interaction Design',
        ],
        cta: 'Improve My Conversions',
        startingFrom: '$2,500',
        accent: 'cream',
        icon: FiLayout,
    },
    {
        id: 'fullstack-dev',
        number: '05',
        tag: 'Core Service',
        title: 'Full-Stack Web Development',
        description:
            'Reliable, scalable web applications built with modern tooling and clean architecture. Whether you need a marketing site, an internal tool, a client portal, or a complex web app — we build it right the first time and make it easy to maintain long-term.',
        features: [
            'React & Next.js 15',
            'Node.js & PostgreSQL',
            'TypeScript Throughout',
            'Responsive & Accessible',
            'Performance Optimised',
            'Long-Term Maintenance',
        ],
        cta: 'Start Your Project',
        startingFrom: '$3,500',
        accent: 'light',
        icon: FiCode,
    },
    {
        id: 'performance-eng',
        number: '06',
        tag: 'SEO Critical',
        title: 'Performance Engineering',
        description:
            "Google's Core Web Vitals are now a direct ranking factor. A slow site loses organic traffic and pushes users away. We diagnose and fix performance issues at the code level — reducing load times, improving Lighthouse scores, and ensuring your site passes CWV for every page.",
        features: [
            'Core Web Vitals Audit',
            'Lighthouse Score Boost',
            'Image & Asset Optimisation',
            'Server Response Time',
            'Bundle Size Reduction',
            'CDN & Edge Config',
        ],
        cta: 'Fix My Performance',
        startingFrom: '$1,500',
        accent: 'light',
        icon: FiZap,
    },
];
