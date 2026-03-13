'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FiArrowRight, FiPlus, FiMinus, FiMail } from 'react-icons/fi';

const faqs = [
    {
        category: 'Working With Us',
        items: [
            {
                q: 'How do I get started with MindsCraft?',
                a: "Simply fill out our contact form or email us at hello@mindscraft.dev with a brief description of your project. We'll reply within 24 hours to learn more about your goals, timeline, and budget."
            },
            {
                q: 'What information should I prepare before reaching out?',
                a: 'The more context the better — but you don\'t need everything upfront. Useful things to share: what you\'re trying to build, who your users or customers are, your rough timeline, and any budget range you\'re working with. A PDF brief or RFP is always welcome too.'
            },
            {
                q: 'Do you work with international clients?',
                a: 'Absolutely. We\'re a remote-first studio based in Dhaka, Bangladesh with experience serving clients across 14+ countries including the US, UK, UAE, and across Southeast Asia. We work across time zones and communicate in English fluently.'
            },
            {
                q: 'Do you work with startups or enterprise companies?',
                a: 'Both. We\'re well-suited for early-stage startups who need to move fast, and for growing businesses who need a reliable technical partner to build on top of an existing product. Our communication style and process adapt to your team\'s needs.'
            }
        ]
    },
    {
        category: 'Projects & Process',
        items: [
            {
                q: 'What is your development process?',
                a: 'We follow a structured but flexible process: (1) Discovery & scoping — we align on requirements and produce a detailed proposal. (2) Design — wireframes, prototypes, and UI design with your feedback. (3) Development — iterative builds with regular check-ins. (4) Testing & launch — QA, staging review, and deployment. (5) Handover — full code ownership, documentation, and optional post-launch support.'
            },
            {
                q: 'How long does a typical project take?',
                a: 'It depends on scope. A landing page or simple web app can take 2–4 weeks. A full-featured SaaS product or e-commerce platform typically takes 6–16 weeks. We\'ll define a clear timeline in your project proposal before any work begins.'
            },
            {
                q: 'How many revisions are included?',
                a: 'Every proposal specifies the number of revision rounds included (typically 2–3 rounds per design phase). Revisions within scope are covered. If a request significantly changes the agreed scope, we\'ll discuss the impact on timeline and budget transparently before proceeding.'
            },
            {
                q: 'Can I see work-in-progress during the project?',
                a: 'Yes — we share staging links and design previews regularly so you can review and provide feedback before anything is finalized. You\'re never surprised by the final result.'
            }
        ]
    },
    {
        category: 'Pricing & Payments',
        items: [
            {
                q: 'How much does a project cost?',
                a: 'Project costs vary based on scope, complexity, and timeline. As a rough guide: a simple website or landing page starts around $1,500–$3,000. A custom web application or SaaS MVP typically ranges from $5,000–$20,000. AI integrations and complex platforms are quoted individually. We\'ll always provide a detailed, transparent proposal before you commit to anything.'
            },
            {
                q: 'What are your payment terms?',
                a: 'We typically work with a 50% deposit to begin, and the remaining 50% on project completion or delivery. For larger projects, we often split into 3 milestones: 40% upfront, 30% at mid-project, 30% at launch. All terms are agreed in writing before work starts.'
            },
            {
                q: 'What payment methods do you accept?',
                a: 'We accept international bank transfer (SWIFT/IBAN), PayPal, Wise, and card payments via invoice. We\'ll confirm the simplest option for your country during onboarding.'
            }
        ]
    },
    {
        category: 'After Launch',
        items: [
            {
                q: 'Do you offer support after the project launches?',
                a: 'Yes. We offer post-launch maintenance packages that cover bug fixes, minor updates, performance monitoring, and security patches. The scope and pricing are discussed before launch. We can also train your team to manage content independently if needed.'
            },
            {
                q: 'Who owns the code and designs after the project?',
                a: 'You do, completely. Once full payment is received, all custom code, designs, and assets we built for you are transferred to you. No lock-in, no licensing fees, no strings attached.'
            },
            {
                q: 'Can I use my own hosting provider?',
                a: 'Yes. We can deploy to Vercel, AWS, DigitalOcean, or any provider you prefer. We\'ll advise on the best fit for your budget and scale during the planning phase.'
            }
        ]
    }
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="border border-gray-200 rounded-2xl overflow-hidden"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-gray-900 text-base leading-snug">{q}</span>
                <span className="shrink-0 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                    {isOpen ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                        <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                            <p className="pt-4">{a}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQContent() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="bg-gray-900 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm font-semibold uppercase tracking-widest mb-4"
                        style={{ color: 'var(--btn-cream)' }}
                    >
                        FAQ
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                        Questions? We&apos;ve got answers.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Everything you need to know before starting a project with MindsCraft.
                    </motion.p>
                </div>
            </div>

            {/* FAQ Sections */}
            <div className="max-w-3xl mx-auto px-4 py-20">
                <div className="space-y-16">
                    {faqs.map((group, gi) => (
                        <div key={gi}>
                            <h2
                                className="text-xs font-bold uppercase tracking-widest mb-6"
                                style={{ color: 'var(--btn-navy-primary)' }}
                            >
                                {group.category}
                            </h2>
                            <div className="space-y-3">
                                {group.items.map((item, qi) => (
                                    <FAQItem key={qi} q={item.q} a={item.a} index={qi} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still have questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gray-50 rounded-3xl p-10 text-center border border-gray-100"
                >
                    <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                        style={{ backgroundColor: 'var(--btn-cream)' }}
                    >
                        <FiMail className="w-7 h-7" style={{ color: 'var(--btn-navy-primary)' }} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Can&apos;t find what you&apos;re looking for? Send us a message and we&apos;ll get back to you within 24 hours.
                    </p>
                    <Button variant="primary" size="lg" href="/contact" icon={<FiArrowRight />}>
                        Get in touch
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
