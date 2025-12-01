'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import DottedBackground from './DottedBackground';

interface ModernHeroProps {
    title: string;
    description?: string;
    primaryCta?: {
        text: string;
        href: string;
    };
    secondaryCta?: {
        text: string;
        href: string;
    };
    badge?: string;
    rightContent?: React.ReactNode;
}

export default function ModernHero({
    title,
    description,
    primaryCta,
    secondaryCta,
    badge,
    rightContent
}: ModernHeroProps) {
    // Design system button styles - SQUARE (no border-radius)
    const navyButtonStyle = {
        backgroundColor: '#101828',
        boxShadow: `
      0px 1px 1px 0px rgba(255, 255, 255, 0.20) inset,
      0px 6px 12px 0px rgba(255, 255, 255, 0.08) inset,
      0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 4px 8px 0px rgba(0, 0, 0, 0.15)
    `,
        transition: 'all 0.2s ease',
    };

    const navyButtonHoverStyle = {
        transform: 'translateY(-1px)',
        boxShadow: `
      0px 1px 1px 0px rgba(255, 255, 255, 0.25) inset,
      0px 8px 16px 0px rgba(255, 255, 255, 0.10) inset,
      0px 2px 4px 0px rgba(0, 0, 0, 0.3),
      0px 8px 16px 0px rgba(0, 0, 0, 0.2)
    `,
    };

    const outlineButtonStyle = {
        backgroundColor: 'white',
        borderWidth: '1.5px',
        borderStyle: 'solid' as const,
        borderColor: '#E5E7EB',
        boxShadow: `
      0px 1px 2px 0px rgba(0, 0, 0, 0.05),
      0px 1px 3px 0px rgba(0, 0, 0, 0.03)
    `,
        transition: 'all 0.2s ease',
    };

    const outlineButtonHoverStyle = {
        borderColor: '#D1D5DB',
        backgroundColor: '#F9FAFB',
        transform: 'translateY(-1px)',
        boxShadow: `
      0px 2px 4px 0px rgba(0, 0, 0, 0.08),
      0px 4px 8px 0px rgba(0, 0, 0, 0.05)
    `,
    };

    return (
        <section className="relative py-20 flex items-center overflow-hidden bg-gradient-to-br from-white via-cream-50 to-cream-100">
            <DottedBackground
                dotColor="rgba(16, 24, 40, 0.12)"
                dotSize={2}
                spacing={24}
                animate={true}
            />

            <div className="container relative z-10 py-20 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                    >
                        {badge && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="inline-flex"
                            >
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/5 border border-navy-900/10 rounded-full text-sm font-medium text-navy-900">
                                    {badge}
                                </span>
                            </motion.div>
                        )}

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight text-navy-900"
                            style={{ fontWeight: 400 }}
                        >
                            {title}
                        </motion.h1>

                        {description && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed"
                                style={{ letterSpacing: '-0.02em' }}
                            >
                                {description}
                            </motion.p>
                        )}

                        {(primaryCta || secondaryCta) && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                {primaryCta && (
                                    <Link href={primaryCta.href}>
                                        <button
                                            className="group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                            style={navyButtonStyle}
                                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, navyButtonHoverStyle)}
                                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, navyButtonStyle)}
                                        >
                                            <span>{primaryCta.text}</span>
                                            <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </Link>
                                )}

                                {secondaryCta && (
                                    <Link href={secondaryCta.href}>
                                        <button
                                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                                            style={outlineButtonStyle}
                                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, outlineButtonHoverStyle)}
                                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, outlineButtonStyle)}
                                        >
                                            <span>{secondaryCta.text}</span>
                                        </button>
                                    </Link>
                                )}
                            </motion.div>
                        )}
                    </motion.div>

                    {rightContent && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="hidden lg:flex items-center justify-center"
                        >
                            {rightContent}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
