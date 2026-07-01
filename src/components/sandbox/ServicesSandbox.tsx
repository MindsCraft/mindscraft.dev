'use client';

import React from 'react';
import { FiLayout, FiCode, FiZap, FiUsers, FiCheck, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import DottedBackground from '@/components/ui/DottedBackground';
import { Button } from '@/components/ui/button';
import '@/styles/pages/sandbox.css';

const services = [
    {
        id: 'ux-design',
        title: 'UX Design',
        description: 'Create intuitive and engaging user experiences that drive growth.',
        icon: <FiLayout />,
        features: ['User Research & Testing', 'Wireframing & Prototyping', 'UI Design & Branding'],
    },
    {
        id: 'web-development',
        title: 'Web Development',
        description: 'Build fast, scalable, and modern web applications.',
        icon: <FiCode />,
        features: ['Frontend Development', 'Backend Development', 'API Integration'],
    },
    {
        id: 'ai-integration',
        title: 'AI Integration',
        description: 'Leverage AI to enhance your product capabilities.',
        icon: <FiZap />,
        features: ['AI Model Integration', 'Chatbot Development', 'Machine Learning'],
    },
    {
        id: 'startup-solutions',
        title: 'Startup Solutions',
        description: 'Specialized services for startups and growing businesses.',
        icon: <FiUsers />,
        features: ['MVP Development', 'Product Strategy', 'Growth Optimization'],
    },
];

export function ServicesSandboxComponent() {
    return (
        <div className="sb-page">
            {/* Page Title */}
            <div className="sb-banner">
                <div className="sb-container">
                    <h1>Services Design Sandbox</h1>
                    <p className="sb-banner-sub">Explore different layout options</p>
                </div>
            </div>

            {/* Option 1: Minimalist Card Grid */}
            <section className="sb-section sb-section--gray">
                <div className="sb-container">
                    <div className="sb-section-heading">
                        <h2>Option 1: Minimalist Card Grid</h2>
                        <p>Clean, professional, easy to scan</p>
                    </div>

                    <div className="sb-grid-2">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="sb-card"
                            >
                                <div className="sb-card-row-icon">
                                    <div className="sb-icon-box">{service.icon}</div>
                                    <div className="sb-card-body">
                                        <h3 className="sb-card-title">{service.title}</h3>
                                        <p className="sb-card-text">{service.description}</p>
                                        <ul className="sb-feature-list sb-feature-list--gap-sm">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="sb-feature">
                                                    <FiCheck />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Option 2: Bento Box Layout */}
            <section className="sb-section">
                <DottedBackground dotColor="rgba(16, 24, 40, 0.05)" dotSize={2} spacing={24} />

                <div className="sb-container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="sb-section-heading">
                        <h2>Option 2: Bento Box Layout</h2>
                        <p>Modern, dynamic, visually interesting</p>
                    </div>

                    <div className="sb-grid-bento">
                        {/* Large card - spans 2 columns */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="sb-card sb-card--solid sb-bento-wide"
                        >
                            <div className="sb-icon-box sb-icon-box--cream">
                                {services[0].icon}
                            </div>
                            <h3 className="sb-card-title sb-card-title--xl">{services[0].title}</h3>
                            <p className="sb-card-text">{services[0].description}</p>
                            <Button variant="accent" className="sb-card-button">
                                Learn More <FiArrowRight />
                            </Button>
                        </motion.div>

                        {/* Tall card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="sb-card sb-card--cream sb-bento-tall"
                        >
                            <div className="sb-icon-box">{services[1].icon}</div>
                            <h3 className="sb-card-title">{services[1].title}</h3>
                            <p className="sb-card-text">{services[1].description}</p>
                            <ul className="sb-feature-list sb-feature-list--gap-md">
                                {services[1].features.map((feature, i) => (
                                    <li key={i} className="sb-feature">
                                        <FiCheck />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Regular card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="sb-card sb-card--outlined"
                        >
                            <div className="sb-icon-box sb-icon-box--sm">
                                {services[2].icon}
                            </div>
                            <h3 className="sb-card-title sb-card-title--sm">{services[2].title}</h3>
                            <p className="sb-card-text sb-card-text--sm">{services[2].description}</p>
                        </motion.div>

                        {/* Wide card - spans 2 columns */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="sb-card sb-card--outlined-row sb-bento-wide"
                        >
                            <div className="sb-card-row-icon">
                                <div className="sb-icon-box sb-icon-box--sm">
                                    {services[3].icon}
                                </div>
                                <div>
                                    <h3 className="sb-card-title sb-card-title--sm sb-card-text--tight">{services[3].title}</h3>
                                    <p className="sb-card-text sb-card-text--sm">{services[3].description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Option 3: Horizontal Scroll Cards */}
            <section className="sb-section sb-section--gray">
                <div className="sb-container">
                    <div className="sb-section-heading">
                        <h2>Option 3: Horizontal Scroll Cards</h2>
                        <p>Interactive, mobile-first, engaging</p>
                    </div>

                    <div className="sb-scroll-row">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="sb-scroll-card"
                            >
                                <div className="sb-icon-box sb-icon-box--xl">
                                    {service.icon}
                                </div>
                                <h3 className="sb-card-title">{service.title}</h3>
                                <p className="sb-card-text">{service.description}</p>
                                <div className="sb-feature-list sb-feature-list--gap-sm">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="sb-feature">
                                            <FiCheck />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="primary" fullWidth className="sb-scroll-cta">
                                    View Details
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Option 4: Icon-First Minimal */}
            <section className="sb-section">
                <div className="sb-container">
                    <div className="sb-section-heading">
                        <h2>Option 4: Icon-First Minimal</h2>
                        <p>Ultra-clean, icon-focused, modern</p>
                    </div>

                    <div className="sb-grid-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="sb-icon-card"
                            >
                                <div className="sb-icon-box sb-icon-box--xl sb-icon-card-icon">
                                    {service.icon}
                                </div>
                                <h3 className="sb-card-title sb-card-title--sm">{service.title}</h3>
                                <p className="sb-card-text sb-card-text--sm">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Option 5: List with Dotted Background */}
            <section className="sb-section sb-section--gradient">
                <DottedBackground dotColor="rgba(16, 24, 40, 0.08)" dotSize={2} spacing={24} />

                <div className="sb-container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="sb-section-heading">
                        <h2>Option 5: List with Dotted Background</h2>
                        <p>Elegant, spacious, easy to read</p>
                    </div>

                    <div className="sb-list-rows">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="sb-list-row"
                            >
                                <div className="sb-icon-box">{service.icon}</div>
                                <div className="sb-card-body">
                                    <h3 className="sb-card-title sb-card-text--tight">{service.title}</h3>
                                    <p className="sb-card-text">{service.description}</p>
                                    <div className="sb-list-row-tags">
                                        {service.features.map((feature, i) => (
                                            <span key={i} className="sb-pill">{feature}</span>
                                        ))}
                                    </div>
                                </div>
                                <FiArrowRight className="sb-list-row-arrow" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
