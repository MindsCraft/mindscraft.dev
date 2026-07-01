'use client';

import React from 'react';
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
    notIncluded: ['Custom backend / database', 'User authentication', 'AI integrations'],
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
    notIncluded: ['AI/ML model training'],
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
  },
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
    <div className="pricing-page">
      {/* Hero */}
      <section className="pricing-hero">
        <div className="pricing-hero-inner">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pricing-hero-eyebrow"
          >
            Transparent Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="pricing-hero-title"
          >
            Simple, honest pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pricing-hero-sub"
          >
            No hidden fees. No surprises. Every project starts with a free consultation and a detailed proposal.
          </motion.p>
        </div>
      </section>

      {/* Plans */}
      <section className="pricing-plans-section">
        <div className="pricing-plans-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`pricing-plan ${plan.highlight ? 'pricing-plan-highlight' : 'pricing-plan-default'}`}
            >
              {plan.badge && (
                <div className="pricing-plan-badge-wrap">
                  <span className="pricing-plan-badge">{plan.badge}</span>
                </div>
              )}

              <div className="pricing-plan-header">
                <h2 className="pricing-plan-name">{plan.name}</h2>
                <p className="pricing-plan-tagline">{plan.tagline}</p>
                <div className="pricing-plan-price">{plan.price}</div>
                <p className="pricing-plan-timeline">⏱ Typical timeline: {plan.timeline}</p>
              </div>

              <div className="pricing-plan-features">
                {plan.features.map((f, fi) => (
                  <div key={fi} className="pricing-plan-feature">
                    <FiCheck />
                    <span className="pricing-plan-feature-text">{f}</span>
                  </div>
                ))}
                {plan.notIncluded.map((f, fi) => (
                  <div key={fi} className="pricing-plan-feature-disabled">
                    <span className="pricing-plan-feature-x">✕</span>
                    <span className="pricing-plan-feature-text">{f}</span>
                  </div>
                ))}
              </div>

              <Button variant={plan.ctaVariant} size="lg" href="/contact" fullWidth>
                {plan.ctaLabel}
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="pricing-disclaimer">
          All prices are in USD. Final scope and pricing confirmed in a written proposal before any work begins.{' '}
          <a href="/faq">See FAQ</a> for payment terms.
        </p>

        {/* Add-ons */}
        <div className="pricing-addons">
          <div className="pricing-addons-header">
            <h2 className="pricing-addons-title">Add-ons &amp; One-Off Services</h2>
            <p className="pricing-addons-sub">
              Need something specific? These can be added to any project or booked independently.
            </p>
          </div>
          <div className="pricing-addons-grid">
            {addons.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="pricing-addon-card"
              >
                <div className="pricing-addon-row">
                  <h3 className="pricing-addon-name">{addon.name}</h3>
                  <span className="pricing-addon-price">{addon.price}</span>
                </div>
                <p className="pricing-addon-desc">{addon.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pricing-bottom-cta"
        >
          <div className="pricing-bottom-cta-icon">
            <FiMessageSquare />
          </div>
          <h3 className="pricing-bottom-cta-title">Not sure which plan fits?</h3>
          <p className="pricing-bottom-cta-sub">
            Every project is different. Contact us with your requirements — let&apos;s figure out the right approach together.
          </p>
          <Button variant="accent" size="xl" href="/contact" icon={<FiArrowRight />}>
            Contact Us
          </Button>
          <p className="pricing-bottom-cta-note">No commitment required. We reply within 24 hours.</p>
        </motion.div>
      </section>
    </div>
  );
}
