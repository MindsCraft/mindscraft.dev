'use client';

import React from 'react';

interface SvgBackgroundProps {
    /**
     * Custom SVG content - you can replace this with your own SVG
     */
    children?: React.ReactNode;

    /**
     * Background color
     * @default 'transparent'
     */
    backgroundColor?: string;

    /**
     * Opacity of the SVG
     * @default 1
     */
    opacity?: number;

    /**
     * Z-index
     * @default -1
     */
    zIndex?: number;
}

/**
 * SVG Background Component
 * 
 * Usage:
 * 1. Replace the SVG content inside this component with your own design
 * 2. Or pass custom SVG as children
 * 
 * Example:
 * <SvgBackground>
 *   <svg>...</svg>
 * </SvgBackground>
 */
const SvgBackground: React.FC<SvgBackgroundProps> = ({
    children,
    backgroundColor = 'transparent',
    opacity = 1,
    zIndex = 1
}) => {
    return (
        <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
                backgroundColor,
                opacity,
                zIndex
            }}
        >
            {children || (
                // Digital Data Streams / Fiber Optic Effect
                <svg
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 800"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        {/* Stream Gradients */}
                        <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>

                        <linearGradient id="streamGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                        </linearGradient>

                        <linearGradient id="streamGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                        </linearGradient>

                        {/* Packet Gradient */}
                        <radialGradient id="packetGlow1">
                            <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </radialGradient>

                        <radialGradient id="packetGlow2">
                            <stop offset="0%" stopColor="#a78bfa" stopOpacity="1" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                        </radialGradient>

                        <radialGradient id="packetGlow3">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                        </radialGradient>

                        {/* Glow Filter */}
                        <filter id="streamGlow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Background subtle paths */}
                    <g fill="none" strokeWidth="1">
                        <path id="path1" d="M -100,600 C 400,600 600,200 1540,200" stroke="url(#streamGrad1)" />
                        <path id="path2" d="M -100,500 C 300,500 800,700 1540,300" stroke="url(#streamGrad2)" />
                        <path id="path3" d="M -100,300 C 500,300 900,100 1540,500" stroke="url(#streamGrad3)" />

                        <path id="path4" d="M -100,700 C 200,700 600,400 1540,500" stroke="url(#streamGrad1)" opacity="0.6" />
                        <path id="path5" d="M -100,400 C 600,400 800,100 1540,100" stroke="url(#streamGrad2)" opacity="0.6" />
                        <path id="path6" d="M -100,200 C 400,200 900,600 1540,600" stroke="url(#streamGrad3)" opacity="0.6" />
                    </g>

                    {/* Static Particles for atmosphere */}
                    <circle cx="200" cy="200" r="1.5" fill="#3b82f6" opacity="0.4">
                        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="800" cy="500" r="2" fill="#8b5cf6" opacity="0.3">
                        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="1200" cy="300" r="1.5" fill="#06b6d4" opacity="0.4">
                        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
                    </circle>

                    {/* Animated Data Packets traveling along paths */}
                    <g filter="url(#streamGlow)">
                        {/* Packets on Path 1 */}
                        <circle r="4" fill="url(#packetGlow1)">
                            <animateMotion dur="6s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path1" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="6s" repeatCount="indefinite" />
                        </circle>
                        <circle r="3" fill="url(#packetGlow1)">
                            <animateMotion dur="8s" repeatCount="indefinite" begin="3s" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path1" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="8s" repeatCount="indefinite" begin="3s" />
                        </circle>

                        {/* Packets on Path 2 */}
                        <circle r="5" fill="url(#packetGlow2)">
                            <animateMotion dur="7s" repeatCount="indefinite" begin="1s" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path2" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="7s" repeatCount="indefinite" begin="1s" />
                        </circle>

                        {/* Packets on Path 3 */}
                        <circle r="4" fill="url(#packetGlow3)">
                            <animateMotion dur="9s" repeatCount="indefinite" begin="0.5s" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path3" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="9s" repeatCount="indefinite" begin="0.5s" />
                        </circle>
                        <circle r="3" fill="url(#packetGlow3)">
                            <animateMotion dur="6s" repeatCount="indefinite" begin="4s" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path3" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="6s" repeatCount="indefinite" begin="4s" />
                        </circle>

                        {/* Packets on Path 4 */}
                        <circle r="3" fill="url(#packetGlow1)">
                            <animateMotion dur="8s" repeatCount="indefinite" begin="2s" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path4" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="8s" repeatCount="indefinite" begin="2s" />
                        </circle>

                        {/* Packets on Path 5 */}
                        <circle r="4" fill="url(#packetGlow2)">
                            <animateMotion dur="10s" repeatCount="indefinite" begin="1.5s" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path5" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="10s" repeatCount="indefinite" begin="1.5s" />
                        </circle>

                        {/* Packets on Path 6 */}
                        <circle r="3.5" fill="url(#packetGlow3)">
                            <animateMotion dur="7.5s" repeatCount="indefinite" begin="2.5s" keyPoints="0;1" keyTimes="0;1">
                                <mpath href="#path6" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="7.5s" repeatCount="indefinite" begin="2.5s" />
                        </circle>
                    </g>
                </svg>
            )}
        </div>
    );
};

export default SvgBackground;
