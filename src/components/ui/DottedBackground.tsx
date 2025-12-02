'use client';

import React from 'react';

interface DottedBackgroundProps {
    /**
     * Dot color (CSS color value)
     * @default 'rgba(16, 24, 40, 0.15)' (navy-900 with opacity)
     */
    dotColor?: string;

    /**
     * Dot size in pixels
     * @default 2
     */
    dotSize?: number;

    /**
     * Spacing between dots in pixels
     * @default 24
     */
    spacing?: number;

    /**
     * Whether to animate dots with subtle pulse
     * @default true
     */
    animate?: boolean;

    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * DottedBackground Component
 * 
 * Creates a subtle dotted pattern background using SVG.
 * Optimized for performance with CSS transforms and opacity animations.
 */
export default function DottedBackground({
    dotColor = 'rgba(16, 24, 40, 0.15)',
    dotSize = 2,
    spacing = 24,
    animate = true,
    className = ''
}: DottedBackgroundProps) {
    // Create SVG pattern
    const patternId = 'dotted-pattern';

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id={patternId}
                        x="0"
                        y="0"
                        width={spacing}
                        height={spacing}
                        patternUnits="userSpaceOnUse"
                    >
                        <circle
                            cx={spacing / 2}
                            cy={spacing / 2}
                            r={dotSize / 2}
                            fill={dotColor}
                        />
                    </pattern>

                    {/* Gradient mask for fade effect on edges */}
                    <radialGradient id="dotted-gradient" cx="50%" cy="50%" r="70%">
                        <stop offset="0%" stopColor="white" stopOpacity="1" />
                        <stop offset="70%" stopColor="white" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Apply pattern with gradient mask */}
                <rect
                    width="100%"
                    height="100%"
                    fill={`url(#${patternId})`}
                    mask="url(#dotted-mask)"
                />

                {/* Mask for gradient fade */}
                <mask id="dotted-mask">
                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#dotted-gradient)"
                    />
                </mask>
            </svg>
        </div>
    );
}
