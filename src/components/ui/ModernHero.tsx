'use client';

import React from 'react';
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
        <section className="hero-background relative flex items-center overflow-hidden">
            <DottedBackground
                dotColor="rgba(16, 24, 40, 0.2)"
                dotSize={2}
                spacing={24}
                animate={true}
            />

            <div className="container relative z-10 pt-[200px] pb-[160px]">
                <div className="w-full">
                    <div className="space-y-8 animate-fade-in">
                        {badge && (
                            <div className="inline-flex">
                                <span className="hero-badge">
                                    {badge}
                                </span>
                            </div>
                        )}

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight text-navy-900 mb-4">
                            {title}
                        </h1>

                        {description && (
                            <p
                                className="text-lg md:text-xl text-gray-700 leading-relaxed mb-20"
                                style={{ letterSpacing: '-0.02em' }}
                            >
                                {description}
                            </p>
                        )}

                        {(primaryCta || secondaryCta) && (
                            <div className="flex flex-col sm:flex-row gap-5">
                                {primaryCta && (
                                    <Button
                                        variant="primary"
                                        size="xl"
                                        className="group"
                                        href={primaryCta.href}
                                        icon={<FiArrowRight className="h-7 w-7 hover:h-8 hover:w-8" />}
                                    >
                                        {primaryCta.text}
                                    </Button>
                                )}

                                {secondaryCta && (
                                    <Button
                                        variant="secondary"
                                        size="xl"
                                        href={secondaryCta.href}
                                    >
                                        {secondaryCta.text}
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </section>
    );
}
