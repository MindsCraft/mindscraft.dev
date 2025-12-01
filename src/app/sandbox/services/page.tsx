'use client';

import React from 'react';
import { FiLayout, FiCode, FiZap, FiUsers, FiCheck, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import DottedBackground from '@/components/ui/DottedBackground';
import { Button } from '@/components/ui/button';

const services = [
    {
        id: 'ux-design',
        title: 'UX Design',
        description: 'Create intuitive and engaging user experiences that drive growth.',
        icon: <FiLayout className="w-8 h-8" />,
        features: ['User Research & Testing', 'Wireframing & Prototyping', 'UI Design & Branding']
    },
    {
        id: 'web-development',
        title: 'Web Development',
        description: 'Build fast, scalable, and modern web applications.',
        icon: <FiCode className="w-8 h-8" />,
        features: ['Frontend Development', 'Backend Development', 'API Integration']
    },
    {
        id: 'ai-integration',
        title: 'AI Integration',
        description: 'Leverage AI to enhance your product capabilities.',
        icon: <FiZap className="w-8 h-8" />,
        features: ['AI Model Integration', 'Chatbot Development', 'Machine Learning']
    },
    {
        id: 'startup-solutions',
        title: 'Startup Solutions',
        description: 'Specialized services for startups and growing businesses.',
        icon: <FiUsers className="w-8 h-8" />,
        features: ['MVP Development', 'Product Strategy', 'Growth Optimization']
    }
];

export default function ServicesSandbox() {
    return (
        <div className="min-h-screen bg-white">
            {/* Page Title */}
            <div className="bg-navy-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">Services Design Sandbox</h1>
                    <p className="text-cream-200 mt-2">Explore different layout options</p>
                </div>
            </div>

            {/* Option 1: Minimalist Card Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-navy-900 mb-2">Option 1: Minimalist Card Grid</h2>
                        <p className="text-gray-600">Clean, professional, easy to scan</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 bg-navy-900 text-white flex items-center justify-center flex-shrink-0">
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-navy-900 mb-3">{service.title}</h3>
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                                    <FiCheck className="w-4 h-4 text-navy-900 flex-shrink-0" />
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
            <section className="py-20 bg-white relative overflow-hidden">
                <DottedBackground dotColor="rgba(16, 24, 40, 0.05)" dotSize={2} spacing={24} />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-navy-900 mb-2">Option 2: Bento Box Layout</h2>
                        <p className="text-gray-600">Modern, dynamic, visually interesting</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Large card - spans 2 columns */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 bg-navy-900 text-white p-8"
                        >
                            <div className="w-16 h-16 bg-cream-400 text-navy-900 flex items-center justify-center mb-6">
                                {services[0].icon}
                            </div>
                            <h3 className="text-3xl font-bold mb-4">{services[0].title}</h3>
                            <p className="text-cream-100 mb-6">{services[0].description}</p>
                            <Button variant="accent" className="gap-2">
                                Learn More <FiArrowRight />
                            </Button>
                        </motion.div>

                        {/* Tall card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:row-span-2 bg-cream-400 text-navy-900 p-8"
                        >
                            <div className="w-16 h-16 bg-navy-900 text-white flex items-center justify-center mb-6">
                                {services[1].icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{services[1].title}</h3>
                            <p className="text-navy-800 mb-6">{services[1].description}</p>
                            <ul className="space-y-3">
                                {services[1].features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <FiCheck className="w-4 h-4 flex-shrink-0" />
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
                            className="bg-white border-2 border-navy-900 p-6"
                        >
                            <div className="w-12 h-12 bg-navy-900 text-white flex items-center justify-center mb-4">
                                {services[2].icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{services[2].title}</h3>
                            <p className="text-gray-600 text-sm">{services[2].description}</p>
                        </motion.div>

                        {/* Wide card - spans 2 columns */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="md:col-span-2 bg-gray-50 border border-gray-200 p-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-navy-900 text-white flex items-center justify-center flex-shrink-0">
                                    {services[3].icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{services[3].title}</h3>
                                    <p className="text-gray-600 text-sm">{services[3].description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Option 3: Horizontal Scroll Cards */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-navy-900 mb-2">Option 3: Horizontal Scroll Cards</h2>
                        <p className="text-gray-600">Interactive, mobile-first, engaging</p>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex-shrink-0 w-80 bg-white p-8 shadow-lg snap-start hover:shadow-2xl transition-shadow"
                            >
                                <div className="w-20 h-20 bg-navy-900 text-white flex items-center justify-center mb-6 mx-auto">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-navy-900 text-center mb-4">{service.title}</h3>
                                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                                <div className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                            <FiCheck className="w-4 h-4 text-navy-900 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="primary" fullWidth className="mt-6">
                                    View Details
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Option 4: Icon-First Minimal */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-navy-900 mb-2">Option 4: Icon-First Minimal</h2>
                        <p className="text-gray-600">Ultra-clean, icon-focused, modern</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center group cursor-pointer"
                            >
                                <div className="w-24 h-24 bg-cream-400 text-navy-900 flex items-center justify-center mx-auto mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Option 5: List with Dotted Background */}
            <section className="py-20 bg-gradient-to-br from-white via-cream-50 to-cream-100 relative overflow-hidden">
                <DottedBackground dotColor="rgba(16, 24, 40, 0.08)" dotSize={2} spacing={24} />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-navy-900 mb-2">Option 5: List with Dotted Background</h2>
                        <p className="text-gray-600">Elegant, spacious, easy to read</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-navy-900 hover:bg-white transition-colors"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 bg-navy-900 text-white flex items-center justify-center flex-shrink-0">
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-navy-900 mb-2">{service.title}</h3>
                                        <p className="text-gray-700 mb-4">{service.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.features.map((feature, i) => (
                                                <span key={i} className="px-3 py-1 bg-cream-400 text-navy-900 text-xs font-medium">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <FiArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0 mt-2" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
