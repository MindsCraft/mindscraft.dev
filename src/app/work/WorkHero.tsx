'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { workItems } from '@/data/workData';
import '@/styles/components/work-hero.css';

export default function WorkHero() {
    // Grab the first 3 featured projects for the bento marquee
    const showcaseProjects = workItems.slice(0, 3);

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: 'rgb(var(--primary-900))' }}>
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

            <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-32 pb-24">

                {/* Left Side: Dramatic Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-8 max-w-2xl text-white"
                >
                    {/* True Glassmorphic Badge */}
                    <div className="inline-flex">
                        <span className="glass-badge">
                            <span className="w-2.5 h-2.5 rounded-full mr-3 shadow-[0_0_10px_rgba(243,244,192,0.8)] animate-pulse" style={{ backgroundColor: 'rgb(var(--accent-400))' }} />
                            PORTFOLIO
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                        Transforming Ideas into <br />
                        <span className="gradient-text-mask mt-2">Digital Excellence</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-xl">
                        We don't just build websites. We architect <strong className="text-white font-medium">digital experiences</strong> that convert.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="flex flex-wrap gap-4 mt-4"
                    >
                        <div className="flex items-center gap-2 text-sm text-gray-400 font-medium tracking-wide">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-brand"><path d="M22 11.08V12a10 10 10 0 1 1-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>
                            AI-POWERED
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 font-medium tracking-wide">
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
                    className="hidden lg:flex relative h-[650px] w-full mt-10 lg:mt-0 items-center justify-center"
                >
                    <div className="relative w-full max-w-[500px] aspect-square bento-showcase">

                        {/* Central Hub */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center z-20 shadow-[0_0_40px_rgba(243,244,192,0.1)]"
                            animate={{
                                boxShadow: ['0 0 20px rgba(243,244,192,0.05)', '0 0 60px rgba(243,244,192,0.15)', '0 0 20px rgba(243,244,192,0.05)']
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white mb-1">98<span className="text-accent-brand">%</span></div>
                                <div className="text-[10px] tracking-widest text-gray-400 uppercase">Success Rate</div>
                            </div>

                            {/* Rotating Ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full border border-r-transparent border-b-transparent border-t-white/30 border-l-white/10"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute inset-[-10px] rounded-full border border-l-transparent border-t-transparent border-b-accent-brand/40 border-r-accent-brand/10"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.div>

                        {/* Satellite Nodes */}
                        <motion.div
                            className="absolute top-[10%] left-[15%] w-32 glass-panel p-4 z-30"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-accent-brand text-xs">01</span>
                                <div className="text-xs font-bold text-white tracking-widest uppercase">Speed</div>
                            </div>
                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                    className="bg-accent-brand h-full rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '85%' }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute top-[20%] right-[0%] w-40 glass-panel p-4 z-10"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Projects Delivered</div>
                            <div className="text-3xl font-bold text-white">200+</div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-[20%] left-[5%] w-36 glass-panel p-4 z-10"
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        >
                            <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Client ROI</div>
                            <div className="flex items-end gap-1 h-10">
                                <div className="w-1/4 bg-white/20 rounded-t-sm h-[30%]" />
                                <div className="w-1/4 bg-white/40 rounded-t-sm h-[50%]" />
                                <div className="w-1/4 bg-white/60 rounded-t-sm h-[75%]" />
                                <motion.div
                                    className="w-1/4 bg-accent-brand rounded-t-sm"
                                    initial={{ height: '0%' }}
                                    animate={{ height: '100%' }}
                                    transition={{ duration: 2, delay: 1.2 }}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-[10%] right-[10%] w-48 glass-panel p-4 z-30 flex gap-4 items-center"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                                <div className="w-2 h-2 rounded-full bg-accent-brand animate-pulse" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-white mb-0.5">Global Reach</div>
                                <div className="text-[10px] text-gray-400">14+ Countries</div>
                            </div>
                        </motion.div>

                        {/* Connecting Lines (Decorative) */}
                        <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none" viewBox="0 0 500 500">
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
