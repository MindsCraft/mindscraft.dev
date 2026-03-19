'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ModernHeroProps {
    title: string;
    titleHighlight?: string;   // phrase inside title to colour-accent
    description?: string;
    primaryCta?: { text: string; href: string };
    secondaryCta?: { text: string; href: string };
    badge?: string;
    rightContent?: React.ReactNode;
}

/** Splits `title` at `highlight` and wraps the matched phrase in a styled span */
function HighlightedTitle({ title, highlight }: { title: string; highlight?: string }) {
    if (!highlight) return <>{title}</>;
    const idx = title.indexOf(highlight);
    if (idx === -1) return <>{title}</>;
    return (
        <>
            {title.slice(0, idx)}
            <span style={{ color: 'var(--btn-navy-primary, #101828)', opacity: 0.7 }}>{highlight}</span>
            {title.slice(idx + highlight.length)}
        </>
    );
}

export default function ModernHero({
    title,
    titleHighlight,
    description,
    primaryCta,
    secondaryCta,
    badge,
    rightContent,
}: ModernHeroProps) {

    /* ── default floating UI composition ── */
    const defaultRightContent = (
        <div className="relative w-full h-full">
            {/* Soft ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[55%] rounded-full blur-[90px] bg-blue-100/60 pointer-events-none z-0" />

            {/* ─ Main dashboard card ─ */}
            <motion.div
                initial={{ opacity: 0, y: 32, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.5 } }}
                className="absolute top-[8%] right-0 w-[88%] rounded-2xl overflow-hidden shadow-2xl border border-white/60 bg-white/70 backdrop-blur-md z-20"
                style={{ transformOrigin: 'top right' }}
            >
                {/* Fake browser chrome */}
                <div className="flex items-center gap-1.5 px-3 h-7 bg-gray-100/90 border-b border-gray-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                    <Image
                        src="/images/placeholders/hero-dashboard-1.jpg"
                        alt="Dashboard analytics preview"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </motion.div>

            {/* ─ Secondary card ─ */}
            <motion.div
                initial={{ opacity: 0, y: 40, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 4 }}
                transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.5 } }}
                className="absolute bottom-[10%] left-0 w-[62%] rounded-2xl overflow-hidden shadow-xl border border-white/60 bg-white/70 backdrop-blur-md z-10"
                style={{ transformOrigin: 'bottom left' }}
            >
                <div className="flex items-center gap-1 px-2 h-6 bg-gray-100/90 border-b border-gray-200/70">
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                </div>
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                    <Image
                        src="/images/placeholders/hero-dashboard-2.jpg"
                        alt="Analytics UI preview"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </motion.div>
        </div>
    );

    return (
        <section className="aurora-mesh-bg relative overflow-hidden min-h-[80vh] flex items-center pt-20">

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center min-h-[80vh]">

                    {/* ═══════════════ LEFT: Content ═══════════════ */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-6 text-center lg:text-left max-w-xl mx-auto lg:mx-0"
                    >
                        {/* Badge */}
                        {badge && (
                            <div className="flex justify-center lg:justify-start">
                                <Badge variant="default" size="lg">{badge}</Badge>
                            </div>
                        )}

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold tracking-tight text-gray-900 leading-[1.1]">
                            <HighlightedTitle title={title} highlight={titleHighlight} />
                        </h1>

                        {/* Description */}
                        {description && (
                            <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                                {description}
                            </p>
                        )}

                        {/* CTAs */}
                        {(primaryCta || secondaryCta) && (
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                                {primaryCta && (
                                    <Button
                                        variant="primary"
                                        size="xl"
                                        className="group w-full sm:w-auto"
                                        href={primaryCta.href}
                                        icon={<FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                                    >
                                        {primaryCta.text}
                                    </Button>
                                )}
                                {secondaryCta && (
                                    <Button
                                        variant="secondary"
                                        size="xl"
                                        className="w-full sm:w-auto"
                                        href={secondaryCta.href}
                                    >
                                        {secondaryCta.text}
                                    </Button>
                                )}
                            </div>
                        )}

                        {/* Social proof */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 border-t border-gray-200/70 justify-center lg:justify-start">
                            <div className="flex -space-x-3">
                                {[11, 12, 13, 14].map((i) => (
                                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative shadow-sm">
                                        <Image src={`https://i.pravatar.cc/100?img=${i}`} alt="Client avatar" fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500">
                                <span className="font-semibold text-gray-900">Trusted by 50+</span> innovative startups
                            </p>
                        </div>
                    </motion.div>

                    {/* ═══════════════ RIGHT: Floating UI ═══════════════ */}
                    <div className="relative hidden lg:block h-[560px] xl:h-[640px]">
                        {rightContent ?? defaultRightContent}
                    </div>

                </div>
            </div>
        </section>
    );
}
