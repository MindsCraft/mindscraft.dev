'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

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

    const getVariantClass = () => {
        switch (variant) {
            case 'solid': return 'page-header-solid';
            case 'minimal': return 'page-header-minimal';
            default: return 'page-header-gradient';
        }
    };

    const getAlignClass = () => {
        return align === 'center' ? 'page-header-align-center' : 'page-header-align-left';
    };

    return (
        <section className={`page-header ${getVariantClass()}`}>
            {/* Decorative Elements for gradient variant */}
            {variant === 'gradient' && (
                <>
                    <div className="page-header-blob-1" />
                    <div className="page-header-blob-2" />
                    <div className="page-header-grid" />
                </>
            )}

            <div className="container relative z-10 py-36">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className={`page-header-container ${getAlignClass()}`}
                >
                    {/* Breadcrumbs */}
                    {breadcrumbs && breadcrumbs.length > 0 && (
                        <motion.nav
                            variants={itemVariants}
                            className="page-header-breadcrumbs"
                            aria-label="Breadcrumb"
                        >
                            {breadcrumbs.map((crumb, index) => (
                                <React.Fragment key={index}>
                                    {crumb.href ? (
                                        <Link
                                            href={crumb.href}
                                            className="breadcrumb-link"
                                        >
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className="breadcrumb-current">
                                            {crumb.label}
                                        </span>
                                    )}
                                    {index < breadcrumbs.length - 1 && (
                                        <span className="breadcrumb-separator">/</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </motion.nav>
                    )}

                    {/* Badge */}
                    {badge && (
                        <motion.div variants={itemVariants} className="inline-flex">
                            <Badge variant="outline" size="md">
                                {badge}
                            </Badge>
                        </motion.div>
                    )}

                    {/* Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="page-header-title"
                    >
                        {title}
                    </motion.h1>

                    {/* Description */}
                    {description && (
                        <motion.p
                            variants={itemVariants}
                            className="page-header-description"
                        >
                            {description}
                        </motion.p>
                    )}

                    {/* CTA Button */}
                    {cta && (
                        <motion.div variants={itemVariants} className="page-header-cta">
                            <Link
                                href={cta.href}
                                className={`cta-button ${cta.variant === 'secondary' || variant === 'solid' ? 'cta-secondary' : 'cta-primary'}`}
                            >
                                <span>{cta.text}</span>
                                <FiArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default PageHeader;
