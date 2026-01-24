'use client';

import React from 'react';
import { Variants } from 'framer-motion';
import { AnimatedSection, AnimatedDiv } from '@/components/ui/AnimatedSection';
import PageHeader from '@/components/ui/PageHeader';
import Image from 'next/image';

// Service type definition
interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
    features: string[];
}

// Service data
const services: Service[] = [
    {
        id: 'ux-design',
        title: 'UX Design',
        description: 'Crafting intuitive and engaging user experiences that delight users and drive business goals. We focus on user-centric design principles, ensuring every interaction is meaningful and efficient.',
        image: '/images/services/ux_design_visual_1764807893512.png',
        features: [
            'User Research & Testing',
            'Wireframing & Prototyping',
            'UI Design & Branding',
            'Usability Optimization'
        ]
    },
    {
        id: 'frontend-dev',
        title: 'Front-End Development',
        description: 'Building responsive, high-performance user interfaces using modern frameworks like React and Next.js. We ensure your site looks stunning and works flawlessly across all devices.',
        image: '/images/services/frontend_dev_visual_1764807909819.png',
        features: [
            'React & Next.js',
            'Responsive Design',
            'Performance Optimization',
            'Interactive Animations'
        ]
    },
    {
        id: 'backend-dev',
        title: 'Back-End Development',
        description: 'Architecting robust and scalable server-side solutions to power your applications. From API development to database management, we ensure security and reliability.',
        image: '/images/services/backend_dev_visual_1764807924207.png',
        features: [
            'API Development',
            'Database Design',
            'Cloud Infrastructure',
            'Security Implementation'
        ]
    },
    {
        id: 'wordpress-dev',
        title: 'WordPress Development',
        description: 'Custom WordPress solutions tailored to your specific needs. We create easy-to-manage, secure, and high-performing websites that give you full control over your content.',
        image: '/images/services/wordpress_dev_visual_1764807940884.png',
        features: [
            'Custom Themes',
            'Plugin Development',
            'Performance Tuning',
            'Security Hardening'
        ]
    },
    {
        id: 'ai-dev',
        title: 'AI-Related Development',
        description: 'Integrating cutting-edge AI technologies to automate processes and provide intelligent insights. From chatbots to predictive analytics, we help you leverage the power of AI.',
        image: '/images/services/ai_dev_visual_1764807956415.png',
        features: [
            'AI Integration',
            'Chatbot Development',
            'Predictive Analytics',
            'Process Automation'
        ]
    }
];

// Animation variants
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

// Service Card Component
const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
    <AnimatedDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="service-card"
    >
        <div className="service-card-content">
            {/* Visual Section (Left) */}
            <div className="service-visual-section">
                <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="service-visual-image"
                />
            </div>

            {/* Content Section (Right) */}
            <div className="service-content-section">
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>

                <div className="service-features-list">
                    {service.features.map((feature, i) => (
                        <div key={i} className="service-feature-item">
                            {feature}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </AnimatedDiv>
);

// Main Component
export default function ServicesContent() {
    return (
        <div className="services-page-background min-h-screen">
            {/* Background Blobs */}
            <div className="services-blob blob-1" />
            <div className="services-blob blob-2" />

            {/* Page Header Hero */}
            <PageHeader
                title="Comprehensive Digital Services Tailored for Global and Local Success"
                description="From UX design to AI integrations, our Bangladesh-based expertise delivers scalable solutions that drive business growth. Experience top-tier AI-powered web development services."
                badge="Our Expertise"
                variant="gradient"
                align="center"
                cta={{
                    text: "Schedule a Consultation",
                    href: "/contact",
                    variant: "primary"
                }}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services' }
                ]}
            />

            {/* Services Grid */}
            <AnimatedSection className="services-grid-section">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Specialized Services</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Tailored digital solutions to help your business thrive in the modern landscape.
                        </p>
                    </div>
                    <div className="services-grid-container">
                        {services.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}
