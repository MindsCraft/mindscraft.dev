'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

interface PageHeaderProps {
    /**
     * Main title of the page
     */
    title: string;

    /**
     * Subtitle or description text
     */
    description?: string;

    /**
     * Optional badge text (e.g., "New", "Beta", "Coming Soon")
     */
    badge?: string;

    /**
     * Optional CTA button configuration
     */
    cta?: {
        text: string;
        href: string;
        variant?: 'primary' | 'secondary';
    };

    /**
     * Background variant
     * @default 'gradient'
     */
    variant?: 'gradient' | 'solid' | 'minimal';

    /**
     * Alignment of content
     * @default 'center'
     */
    align?: 'left' | 'center';

    /**
     * Custom breadcrumb items
     */
    breadcrumbs?: Array<{
        label: string;
        href?: string;
    }>;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    description,
    badge,
    cta,
    variant = 'gradient',
    align = 'center',
    breadcrumbs,
}) => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    // Background styles based on variant
    const getBackgroundClasses = () => {
        switch (variant) {
            case 'gradient':
                return 'bg-gradient-to-br from-navy-50 via-white to-cream-100 relative overflow-hidden';
            case 'solid':
                return 'bg-navy-900 text-white';
            case 'minimal':
                return 'bg-white border-b border-gray-200';
            default:
                return 'bg-gradient-to-br from-navy-50 via-white to-cream-100';
        }
    };

    const getTextAlignClasses = () => {
        return align === 'center' ? 'text-center mx-auto' : 'text-left';
    };

    const getContainerAlignClasses = () => {
        return align === 'center' ? 'items-center' : 'items-start';
    };

    return (
        <section className={`relative ${getBackgroundClasses()} py-16 md:py-24 lg:py-28`}>
            {/* Decorative Elements for gradient variant */}
            {variant === 'gradient' && (
                <>
                    {/* Floating accent blob */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cream-400/20 rounded-full blur-3xl animate-float-slow" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-200/30 rounded-full blur-3xl animate-float-slow-reverse" />

                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 bg-grid-slate-100 pointer-events-none" />
                </>
            )}

            <div className="container relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className={`max-w-4xl ${getTextAlignClasses()} flex flex-col ${getContainerAlignClasses()} gap-6`}
                >
                    {/* Breadcrumbs */}
                    {breadcrumbs && breadcrumbs.length > 0 && (
                        <motion.nav
                            variants={itemVariants}
                            className="flex items-center gap-2 text-sm"
                            aria-label="Breadcrumb"
                        >
                            {breadcrumbs.map((crumb, index) => (
                                <React.Fragment key={index}>
                                    {crumb.href ? (
                                        <Link
                                            href={crumb.href}
                                            className={`${variant === 'solid' ? 'text-cream-300 hover:text-cream-200' : 'text-gray-600 hover:text-navy-900'
                                                } transition-colors`}
                                        >
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className={variant === 'solid' ? 'text-white font-medium' : 'text-navy-900 font-medium'}>
                                            {crumb.label}
                                        </span>
                                    )}
                                    {index < breadcrumbs.length - 1 && (
                                        <span className={variant === 'solid' ? 'text-cream-400' : 'text-gray-400'}>/</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </motion.nav>
                    )}

                    {/* Badge */}
                    {badge && (
                        <motion.div variants={itemVariants} className="inline-flex">
                            <span
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${variant === 'solid'
                                        ? 'bg-cream-400/20 text-cream-300 border border-cream-400/30'
                                        : 'bg-navy-900/5 text-navy-900 border border-navy-900/10'
                                    }`}
                            >
                                {badge}
                            </span>
                        </motion.div>
                    )}

                    {/* Title */}
                    <motion.h1
                        variants={itemVariants}
                        className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${variant === 'solid' ? 'text-white' : 'text-navy-900'
                            }`}
                    >
                        {title}
                    </motion.h1>

                    {/* Description */}
                    {description && (
                        <motion.p
                            variants={itemVariants}
                            className={`text-lg md:text-xl leading-relaxed max-w-2xl ${variant === 'solid' ? 'text-cream-200' : 'text-gray-700'
                                }`}
                        >
                            {description}
                        </motion.p>
                    )}

                    {/* CTA Button */}
                    {cta && (
                        <motion.div variants={itemVariants} className="mt-4">
                            <Link
                                href={cta.href}
                                className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${cta.variant === 'secondary' || variant === 'solid'
                                        ? 'bg-white text-navy-900 hover:bg-cream-100 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                                        : 'bg-navy-900 text-white hover:bg-navy-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                                    }`}
                            >
                                <span>{cta.text}</span>
                                <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default PageHeader;
