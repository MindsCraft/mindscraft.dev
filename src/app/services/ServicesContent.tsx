'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

interface Service {
    id: string;
    number: string;
    tag: string;
    title: string;
    description: string;
    features: string[];
    cta: string;
    startingFrom: string;
    accent: 'light' | 'navy' | 'cream';
}

const services: Service[] = [
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
    },
    {
        id: 'ux-cro',
        number: '03',
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
    },
    {
        id: 'fullstack-dev',
        number: '04',
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
    },
    {
        id: 'performance-eng',
        number: '05',
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
    },
    {
        id: 'headless-ecommerce',
        number: '06',
        tag: 'DTC Brands',
        title: 'Headless E-commerce & CMS',
        description:
            "Outgrown your Shopify theme? We build headless storefronts using Next.js and Shopify's Storefront API — giving you blazing page speeds, full design freedom, and a CMS your team can actually use. Built for DTC brands doing serious volume who refuse to compromise on experience.",
        features: [
            'Next.js + Shopify Headless',
            'Sanity / Contentful CMS',
            'Sub-2s Page Load',
            'Custom Checkout Flows',
            'Product Personalisation',
            'Analytics & Attribution',
        ],
        cta: 'Upgrade My Store',
        startingFrom: '$6,000',
        accent: 'light',
    },
];

const accentMap = {
    navy: { bg: '#101828', text: '#fff', tagBg: 'rgba(243,244,192,0.15)', tagColor: '#F3F4C0' },
    cream: { bg: '#F3F4C0', text: '#101828', tagBg: 'rgba(16,24,40,0.1)', tagColor: '#101828' },
    light: { bg: '#fff', text: '#101828', tagBg: 'rgba(16,24,40,0.05)', tagColor: '#101828' },
};

export default function ServicesContent() {
    return (
        <div className="svc-page">
            {/* ── Hero ── */}
            <section className="svc-hero">
                <div className="svc-hero-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="svc-hero-content"
                    >
                        <span className="svc-hero-eyebrow">What We Build</span>
                        <h1 className="svc-hero-heading">
                            Services that solve<br />
                            <span className="svc-hero-accent">real business problems.</span>
                        </h1>
                        <p className="svc-hero-sub">
                            We work with funded startups, scale-ups, and product teams who need
                            fast, reliable execution — not months of back-and-forth. Every
                            service is scoped around outcomes, not deliverables.
                        </p>
                        <div className="svc-hero-pills">
                            {services.map((s) => (
                                <a key={s.id} href={`#${s.id}`} className="svc-hero-pill">
                                    {s.title}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Services ── */}
            <section className="svc-list">
                <div className="svc-list-inner">
                    {services.map((service, i) => {
                        const colors = accentMap[service.accent];
                        return (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                                className="svc-card"
                                style={{ background: colors.bg, color: colors.text }}
                            >
                                {/* Top bar */}
                                <div className="svc-card-top">
                                    <span className="svc-card-number" style={{ color: colors.text, opacity: 0.18 }}>
                                        {service.number}
                                    </span>
                                    <span
                                        className="svc-card-tag"
                                        style={{ background: colors.tagBg, color: colors.tagColor }}
                                    >
                                        {service.tag}
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="svc-card-body">
                                    <div className="svc-card-left">
                                        <h2 className="svc-card-title" style={{ color: colors.text }}>
                                            {service.title}
                                        </h2>
                                        <p className="svc-card-desc" style={{ color: colors.text, opacity: 0.65 }}>
                                            {service.description}
                                        </p>
                                        <div className="svc-card-actions">
                                            <Link
                                                href={`/contact?service=${service.id}`}
                                                className="svc-card-cta"
                                                style={
                                                    service.accent === 'navy'
                                                        ? { background: '#F3F4C0', color: '#101828' }
                                                        : { background: '#101828', color: '#F3F4C0' }
                                                }
                                            >
                                                {service.cta}
                                                <FiArrowRight className="svc-cta-arrow" />
                                            </Link>
                                            <span className="svc-card-price" style={{ color: colors.text, opacity: 0.45 }}>
                                                Starting from {service.startingFrom}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="svc-card-right">
                                        <div className="svc-features-grid">
                                            {service.features.map((f, fi) => (
                                                <div
                                                    key={fi}
                                                    className="svc-feature-pill"
                                                    style={{
                                                        background: colors.tagBg,
                                                        color: service.accent === 'navy' ? 'rgba(255,255,255,0.8)' : 'rgba(16,24,40,0.75)',
                                                        borderColor: service.accent === 'navy' ? 'rgba(255,255,255,0.08)' : 'rgba(16,24,40,0.08)',
                                                    }}
                                                >
                                                    <span className="svc-feature-dot" style={{
                                                        background: service.accent === 'navy' ? '#F3F4C0' : '#101828',
                                                        opacity: service.accent === 'navy' ? 0.8 : 0.35,
                                                    }} />
                                                    {f}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="svc-bottom-cta">
                <div className="svc-btm-container">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="svc-btm-card"
                    >
                        {/* Aurora glows */}
                        <div className="svc-btm-glow svc-btm-glow--cream" />
                        <div className="svc-btm-glow svc-btm-glow--blue" />

                        <div className="svc-btm-inner">
                            {/* Left — copy */}
                            <div className="svc-btm-left">
                                <span className="svc-btm-eyebrow">Let's talk</span>
                                <h2 className="svc-btm-title">
                                    Not sure where<br />to start?
                                </h2>
                                <p className="svc-btm-sub">
                                    Book a free 30-minute strategy call. We'll listen to your goals
                                    and tell you exactly what we'd recommend — no pressure,
                                    no sales pitch.
                                </p>
                                {/* Social proof */}
                                <div className="svc-btm-proof">
                                    <div className="svc-btm-avatars">
                                        <span className="svc-btm-avatar" style={{ background: '#4F46E5' }}>S</span>
                                        <span className="svc-btm-avatar" style={{ background: '#059669' }}>A</span>
                                        <span className="svc-btm-avatar" style={{ background: '#D97706' }}>K</span>
                                    </div>
                                    <span className="svc-btm-proof-text">
                                        Joined by <strong>30+ founders</strong> this year
                                    </span>
                                </div>
                            </div>

                            {/* Right — actions */}
                            <div className="svc-btm-right">
                                <Link href="/contact" className="svc-btm-primary-btn group">
                                    <span>Book a Free Strategy Call</span>
                                    <FiArrowRight className="svc-btm-arrow" />
                                    <div className="svc-btm-btn-shine" />
                                </Link>
                                <Link href="/pricing" className="svc-btm-secondary-btn">
                                    See our pricing
                                    <FiArrowRight className="svc-btm-arrow-sm" />
                                </Link>
                                <p className="svc-btm-micro">30-min call · No commitment</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
