'use client';

import React from 'react';
import { FiArrowRight, FiLayout, FiCode, FiZap, FiUsers, FiCheck } from 'react-icons/fi';
import Link from 'next/link';
import { Variants } from 'framer-motion';
import { AnimatedSection, AnimatedDiv } from '@/components/ui/AnimatedSection';
import PageHeader from '@/components/ui/PageHeader';

// Service details
const services = [
    {
        id: 'ux-design',
        title: 'UX Design',
        description: 'Create intuitive and engaging user experiences that drive growth.',
        icon: <FiLayout />,
        features: [
            'User Research & Testing',
            'Wireframing & Prototyping',
            'UI Design & Branding',
            'Usability Optimization',
            'Information Architecture',
            'Interaction Design'
        ],
        process: [
            'Discovery & Research',
            'User Personas & Journeys',
            'Wireframing & Prototyping',
            'UI Design & Branding',
            'Usability Testing',
            'Implementation Support'
        ]
    },
    {
        id: 'web-development',
        title: 'Web Development',
        description: 'Build fast, scalable, and modern web applications.',
        icon: <FiCode />,
        features: [
            'Frontend Development',
            'Backend Development',
            'API Integration',
            'Performance Optimization',
            'Responsive Design',
            'Progressive Web Apps'
        ],
        process: [
            'Requirements Analysis',
            'Architecture Design',
            'Development & Testing',
            'Performance Optimization',
            'Deployment & CI/CD',
            'Maintenance & Support'
        ]
    },
    {
        id: 'ai-integration',
        title: 'AI Integration',
        description: 'Leverage AI to enhance your product capabilities.',
        icon: <FiZap />,
        features: [
            'AI Model Integration',
            'Chatbot Development',
            'Machine Learning Solutions',
            'Data Analysis & Visualization',
            'Natural Language Processing',
            'Predictive Analytics'
        ],
        process: [
            'AI Strategy & Planning',
            'Model Selection & Training',
            'Integration & Testing',
            'Performance Monitoring',
            'User Experience Design',
            'Continuous Improvement'
        ]
    },
    {
        id: 'startup-solutions',
        title: 'Startup Solutions',
        description: 'Specialized services for startups and growing businesses.',
        icon: <FiUsers />,
        features: [
            'MVP Development',
            'Product Strategy',
            'Growth Optimization',
            'Technical Consulting',
            'Market Research',
            'Investor Pitch Support'
        ],
        process: [
            'Business Analysis',
            'MVP Planning & Design',
            'Rapid Development',
            'Market Testing',
            'Growth Strategy',
            'Scaling Support'
        ]
    }
];

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function ServicesContent() {
    return (
        <div className="min-h-screen">
            {/* Page Header Hero */}
            <PageHeader
                title="Our Services"
                description="Comprehensive web development and UX design solutions tailored to your needs. We combine creativity with technical expertise to deliver exceptional results."
                badge="What We Do"
                variant="gradient"
                align="center"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services' }
                ]}
            />

            {/* Services Grid */}
            <AnimatedSection className="services-grid-section">
                <div className="container mx-auto px-4">
                    <div className="services-grid-container">
                        {services.map((service, index) => (
                            <AnimatedDiv
                                key={service.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="service-card"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="service-icon-wrapper">
                                        {service.icon}
                                    </div>
                                    <h2 className="service-title">{service.title}</h2>
                                </div>

                                <p className="service-description">{service.description}</p>

                                <div className="service-features">
                                    <h3 className="features-title">Key Features</h3>
                                    <ul className="features-list">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="feature-item">
                                                <FiCheck className="feature-icon" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="service-process">
                                    <h3 className="process-title">Our Process</h3>
                                    <div className="process-list">
                                        {service.process.map((step, i) => (
                                            <div key={i} className="process-item">
                                                <span className="process-number">
                                                    {i + 1}
                                                </span>
                                                <span className="process-text">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedDiv>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="services-cta-section">
                <div className="container mx-auto px-4">
                    <AnimatedDiv
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.8 }}
                        className="cta-content"
                    >
                        <h2 className="cta-title">Ready to Get Started?</h2>
                        <p className="cta-description">Let's discuss how we can help your project succeed with our expert services.</p>
                        <Link
                            href="/contact"
                            className="cta-link"
                        >
                            Contact Us
                            <FiArrowRight />
                        </Link>
                    </AnimatedDiv>
                </div>
            </AnimatedSection>
        </div>
    );
}
