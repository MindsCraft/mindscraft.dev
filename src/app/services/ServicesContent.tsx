'use client';

import React from 'react';
import { FiArrowRight, FiLayout, FiCode, FiZap, FiUsers, FiCheck } from 'react-icons/fi';
import Link from 'next/link';
import { Variants } from 'framer-motion';
import { AnimatedSection, AnimatedDiv } from '@/components/ui/AnimatedSection';

// Service details
const services = [
    {
        id: 'ux-design',
        title: 'UX Design',
        description: 'Create intuitive and engaging user experiences that drive growth.',
        icon: <FiLayout className="w-8 h-8 text-blue-600" />,
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
        icon: <FiCode className="w-8 h-8 text-blue-600" />,
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
        icon: <FiZap className="w-8 h-8 text-blue-600" />,
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
        icon: <FiUsers className="w-8 h-8 text-blue-600" />,
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
            {/* Hero Section */}
            <AnimatedSection className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <AnimatedDiv
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                        <p className="text-xl text-gray-600">
                            Comprehensive web development and UX design solutions tailored to your needs
                        </p>
                    </AnimatedDiv>
                </div>
            </AnimatedSection>

            {/* Services Grid */}
            <AnimatedSection className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <AnimatedDiv
                                key={service.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden p-6"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                                            {service.icon}
                                        </div>
                                        <h2 className="text-2xl font-bold">{service.title}</h2>
                                    </div>
                                    <p className="text-lg text-gray-600">{service.description}</p>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                                        <ul className="space-y-3">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <FiCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                                    <h3 className="text-lg font-semibold mb-4">Our Process</h3>
                                    <ol className="space-y-4">
                                        {service.process.map((step, i) => (
                                            <li key={i} className="flex gap-4">
                                                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                                                    {i + 1}
                                                </span>
                                                <span>{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </AnimatedDiv>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <AnimatedDiv
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="text-xl mb-8 text-blue-100">Let's discuss how we can help your project succeed</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            Contact Us
                            <FiArrowRight className="ml-2" />
                        </Link>
                    </AnimatedDiv>
                </div>
            </AnimatedSection>
        </div>
    );
}
