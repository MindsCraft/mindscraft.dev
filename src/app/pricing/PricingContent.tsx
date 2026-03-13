'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FiCheck, FiArrowRight, FiMessageSquare } from 'react-icons/fi';

const plans = [
    {
        name: 'Starter',
        tagline: 'Perfect for landing pages & small businesses',
        price: 'From $1,500',
        timeline: '2–4 weeks',
        highlight: false,
        features: [
            'Up to 5 pages',
            'Mobile-responsive design',
            'Contact form integration',
            'Basic SEO setup',
            'Performance optimization',
            '2 rounds of revisions',
            '2 weeks post-launch support',
        ],
        notIncluded: [
            'Custom backend / database',
            'User authentication',
            'AI integrations',
        ],
        ctaVariant: 'secondary' as const,
        ctaLabel: 'Get a quote',
    },
    {
        name: 'Growth',
        tagline: 'For startups launching a web application or SaaS',
        price: 'From $5,000',
        timeline: '6–12 weeks',
        highlight: true,
        badge: 'Most popular',
        features: [
            'Custom web application',
            'User auth & onboarding flow',
            'Database design & API development',
            'Admin dashboard',
            'Full mobile responsiveness',
            'Payment gateway integration',
            '3 rounds of revisions',
            'Staging environment & QA',
            '4 weeks post-launch support',
        ],
        notIncluded: [
            'AI/ML model training',
        ],
        ctaVariant: 'accent' as const,
        ctaLabel: 'Start your project',
    },
    {
        name: 'Enterprise',
        tagline: 'Complex platforms, AI integrations & long-term partnerships',
        price: 'Custom pricing',
        timeline: 'Scoped per project',
        highlight: false,
        features: [
            'Everything in Growth',
            'AI/ML integration & automation',
            'Scalable cloud infrastructure',
            'Multi-role access & permissions',
            'Custom analytics & reporting',
            'Third-party API integrations',
            'Dedicated project management',
            'Agile sprints with weekly demos',
            'Ongoing retainer available',
        ],
        notIncluded: [],
        ctaVariant: 'secondary' as const,
        ctaLabel: 'Talk to us',
    }
];

const addons = [
    { name: 'UI/UX Design Sprint', desc: 'User research, wireframes, and high-fidelity prototypes before development', price: 'From $800' },
    { name: 'WordPress Development', desc: 'Custom theme, plugin development, and content-managed site', price: 'From $1,200' },
    { name: 'SEO Audit & Setup', desc: 'Technical SEO, Google Search Console, sitemap, and meta optimization', price: 'From $400' },
    { name: 'Monthly Maintenance', desc: 'Bug fixes, security patches, minor content updates', price: 'From $200/mo' },
    { name: 'AI Chatbot Integration', desc: 'Custom-trained chatbot for customer service or lead capture', price: 'From $1,500' },
    { name: 'Performance Audit', desc: 'Lighthouse, Core Web Vitals analysis and code optimization', price: 'From $350' },
];

export default function PricingContent() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="bg-gray-900 text-white pt-24 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm font-semibold uppercase tracking-widest mb-4"
                        style={{ color: 'var(--btn-cream)' }}
                    >
                        Transparent Pricing
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                        Simple, honest pricing
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        No hidden fees. No surprises. Every project starts with a free consultation and a detailed proposal.
                    </motion.p>
                </div>
            </div>

            {/* Plans */}
            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative rounded-3xl p-8 border flex flex-col ${plan.highlight
                                    ? 'border-gray-700 shadow-2xl scale-[1.02]'
                                    : 'bg-white border-gray-200 shadow-sm'
                                }`}
                            style={plan.highlight ? { backgroundColor: 'var(--btn-navy-primary)' } : {}}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span
                                        className="text-xs font-bold px-4 py-1.5 rounded-full shadow"
                                        style={{
                                            backgroundColor: 'var(--btn-cream)',
                                            color: 'var(--btn-navy-primary)'
                                        }}
                                    >
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h2
                                    className="text-xl font-bold mb-1"
                                    style={{ color: plan.highlight ? 'white' : 'var(--btn-navy-primary)' }}
                                >
                                    {plan.name}
                                </h2>
                                <p className={`text-sm mb-6 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {plan.tagline}
                                </p>
                                <div
                                    className="text-3xl font-bold mb-1"
                                    style={{ color: plan.highlight ? 'white' : 'var(--btn-navy-primary)' }}
                                >
                                    {plan.price}
                                </div>
                                <p className={`text-sm ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                                    ⏱ Typical timeline: {plan.timeline}
                                </p>
                            </div>

                            <div className="flex-grow space-y-3 mb-8">
                                {plan.features.map((f, fi) => (
                                    <div key={fi} className="flex items-start gap-3">
                                        <FiCheck
                                            className="w-4 h-4 mt-0.5 shrink-0"
                                            style={{ color: plan.highlight ? 'var(--btn-cream)' : 'var(--btn-navy-primary)' }}
                                        />
                                        <span className={`text-sm ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
                                    </div>
                                ))}
                                {plan.notIncluded.map((f, fi) => (
                                    <div key={fi} className="flex items-start gap-3 opacity-40">
                                        <span className="w-4 h-4 mt-0.5 shrink-0 text-center text-xs">✕</span>
                                        <span className={`text-sm line-through ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{f}</span>
                                    </div>
                                ))}
                            </div>

                            <Button variant={plan.ctaVariant} size="lg" href="/contact" fullWidth>
                                {plan.ctaLabel}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-sm text-gray-400 mt-8">
                    All prices are in USD. Final scope and pricing confirmed in a written proposal before any work begins.{' '}
                    <a href="/faq" className="underline hover:text-gray-600">See FAQ</a> for payment terms.
                </p>

                {/* Add-ons */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--btn-navy-primary)' }}>
                            Add-ons &amp; One-Off Services
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Need something specific? These can be added to any project or booked independently.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {addons.map((addon, i) => (
                            <motion.div
                                key={addon.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start justify-between gap-2 mb-3">
                                    <h3 className="font-bold text-base" style={{ color: 'var(--btn-navy-primary)' }}>
                                        {addon.name}
                                    </h3>
                                    <span
                                        className="shrink-0 text-sm font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap"
                                        style={{ backgroundColor: 'var(--btn-cream)', color: 'var(--btn-navy-primary)' }}
                                    >
                                        {addon.price}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed">{addon.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 rounded-3xl p-12 text-center"
                    style={{ backgroundColor: 'var(--btn-navy-primary)' }}
                >
                    <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                        style={{ backgroundColor: 'var(--btn-cream)' }}
                    >
                        <FiMessageSquare className="w-7 h-7" style={{ color: 'var(--btn-navy-primary)' }} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">Not sure which plan fits?</h3>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg">
                        Every project is different. Contact us with your requirements — let&apos;s figure out the right approach together.
                    </p>
                    <Button variant="accent" size="xl" href="/contact" icon={<FiArrowRight />}>
                        Contact Us
                    </Button>
                    <p className="text-gray-500 text-sm mt-6">No commitment required. We reply within 24 hours.</p>
                </motion.div>
            </div>
        </div>
    );
}
