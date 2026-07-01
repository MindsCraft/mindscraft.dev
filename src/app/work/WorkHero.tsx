'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { workItems } from '@/data/workData';
import '@/styles/components/work-hero.css';

export default function WorkHero() {
    // Grab the first 3 featured projects for the bento marquee
    const showcaseProjects = workItems.slice(0, 3);

    return (
        <section className="work-hero-shell">
            {/* 2026 Aurora Mesh Background */}
            <div className="aurora-bg">
                <motion.div
                    className="aurora-orb orb-1"
                    animate={{
                        x: [0, 80, 0],
                        y: [0, -60, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="aurora-orb orb-2"
                    animate={{
                        x: [0, -60, 0],
                        y: [0, 80, 0],
                        scale: [1, 1.25, 1],
                    }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="work-hero-grid">
                {/* Left Side: Dramatic Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="work-hero-left"
                >
                    {/* True Glassmorphic Badge */}
                    <div className="work-hero-eyebrow">
                        <span className="glass-badge">
                            <span className="glass-badge-pulse" />
                            PORTFOLIO
                        </span>
                    </div>

                    <h1 className="work-hero-title">
                        Transforming Ideas into <br />
                        <span className="gradient-text-mask">Digital Excellence</span>
                    </h1>

                    <p className="work-hero-sub">
                        We don&rsquo;t just build websites. We architect <strong>digital experiences</strong> that convert.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="work-hero-bullets"
                    >
                        <div className="work-hero-bullet">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-brand"><path d="M22 11.08V12a10 10 10 0 1 1-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            AI-POWERED
                        </div>
                        <div className="work-hero-bullet">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-brand"><path d="M22 11.08V12a10 10 10 0 1 1-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            HUMAN-CENTRIC UX
                        </div>
                    </motion.div>

                </motion.div>

                {/* Right Side: Animated Infographic / Data Visualization */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="work-hero-right"
                >
                    <div className="work-hero-bento">
                        {/* Central Hub */}
                        <motion.div className="work-hero-hub">
                            <div className="work-hero-hub-inner">
                                <div className="work-hero-hub-num">98<span className="text-accent-brand">%</span></div>
                                <div className="work-hero-hub-label">Success Rate</div>
                            </div>

                            {/* Rotating Ring */}
                            <motion.div
                                className="work-hero-hub-ring-a"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="work-hero-hub-ring-b"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.div>

                        {/* Satellite Nodes */}
                        <motion.div
                            className="work-hero-node"
                            style={{ top: '10%', left: '15%', width: '8rem', zIndex: 30 }}
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                        >
                            <div className="work-hero-node-row">
                                <span className="work-hero-node-chip">01</span>
                                <div className="work-hero-node-title">Speed</div>
                            </div>
                            <div className="work-hero-bar-track">
                                <motion.div
                                    className="work-hero-bar-fill"
                                    initial={{ width: 0 }}
                                    animate={{ width: '85%' }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="work-hero-node"
                            style={{ top: '20%', right: '0%', width: '10rem' }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="work-hero-node-eyebrow">Projects Delivered</div>
                            <div className="work-hero-node-value">200+</div>
                        </motion.div>

                        <motion.div
                            className="work-hero-node"
                            style={{ bottom: '20%', left: '5%', width: '9rem' }}
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        >
                            <div className="work-hero-node-eyebrow">Client ROI</div>
                            <div className="work-hero-bar-chart">
                                <div style={{ height: '30%' }} />
                                <div style={{ height: '50%' }} />
                                <div style={{ height: '75%' }} />
                                <motion.div
                                    className="accent"
                                    initial={{ height: '0%' }}
                                    animate={{ height: '100%' }}
                                    transition={{ duration: 2, delay: 1.2 }}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="work-hero-node"
                            style={{ bottom: '10%', right: '10%', width: '12rem', display: 'flex', gap: '1rem', alignItems: 'center', zIndex: 30 }}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <div style={{ width: '2.5rem', height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <div className="work-hero-dot" />
                            </div>
                            <div>
                                <div className="work-hero-node-title">Global Reach</div>
                                <div className="work-hero-node-eyebrow">14+ Countries</div>
                            </div>
                        </motion.div>

                        {/* Connecting Lines (Decorative) */}
                        <svg className="work-hero-connector" viewBox="0 0 500 500">
                            <motion.path
                                d="M 120 120 L 250 250 M 400 150 L 250 250 M 100 350 L 250 250 M 350 400 L 250 250"
                                stroke="#F3F4C0"
                                strokeWidth="1"
                                strokeDasharray="4 4"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 0.5 }}
                            />
                        </svg>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}