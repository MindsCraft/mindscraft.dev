'use client';

import React from 'react';
import SvgBackground from './SvgBackground';
import { Badge } from '@/components/ui/badge';

import '@/styles/components/page-header.css';

interface PageHeaderLeftProps {
    /**
     * Optional badge text (e.g., "Portfolio", "Services")
     */
    badge?: string;

    /**
     * Main title of the page
     */
    title: string;

    /**
     * Subtitle or description text
     */
    description?: string;

    /**
     * Background variant
     * @default 'dotted'
     */
    variant?: 'dotted' | 'gradient' | 'minimal';
}

const PageHeaderLeft: React.FC<PageHeaderLeftProps> = ({
    badge,
    title,
    description,
    variant = 'dotted'
}) => {
    return (
        <section className="page-header-section">
            {/* Background */}
            {variant === 'dotted' && (
                <SvgBackground opacity={1.0} />
            )}

            {variant === 'gradient' && (
                <div
                    className="page-header-gradient-overlay"
                    style={{
                        background: 'linear-gradient(180deg, rgba(253, 255, 142, 0.3), rgba(249, 250, 251, 0))'
                    }}
                />
            )}

            <div className="page-header-container">
                <div className="page-header-content-wrapper">
                    {/* Badge */}
                    {badge && (
                        <div className="page-header-badge-wrapper">
                            <Badge variant="default" size="md">
                                {badge}
                            </Badge>
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="page-header-title">
                        {title}
                    </h1>

                    {/* Description */}
                    {description && (
                        <p className="page-header-description">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PageHeaderLeft;
