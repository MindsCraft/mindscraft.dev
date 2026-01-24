'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import DottedBackground from './DottedBackground';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

            <div className="container hero-container">
                <div className="w-full">
                    <div className="hero-content animate-fade-in">
                        {badge && (
                            <div className="inline-flex">
                                <Badge variant="default" size="lg">
                                    {badge}
                                </Badge>
                            </div>
                        )}

                        <h1 className="hero-title">
                            {title}
                        </h1>

                        {description && (
                            <p className="hero-description">
                                {description}
                            </p>
                        )}

                        {(primaryCta || secondaryCta) && (
                            <div className="hero-cta">
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
