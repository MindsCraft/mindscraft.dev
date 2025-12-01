'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import DottedBackground from './DottedBackground';
import { Button } from '@/components/ui/button';

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
    // Removed hardcoded styles as we now use the Button component

    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-cream-50 to-cream-100">
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
                                        <Button
                                            variant="primary"
                                            size="xl"
                                            className="group"
                                            icon={<FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                                        >
                                            {primaryCta.text}
                                        </Button>
                                    </Link>
                                )}

                                {secondaryCta && (
                                    <Link href={secondaryCta.href}>
                                        <Button variant="secondary" size="xl">
                                            {secondaryCta.text}
                                        </Button>
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
