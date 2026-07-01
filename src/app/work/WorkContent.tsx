'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { workItems } from '@/data/workData';
import WorkHero from './WorkHero';
import { FiArrowRight, FiClock, FiZap, FiGlobe } from 'react-icons/fi';
import '@/styles/pages/work.css';
import '@/styles/pages/home.css';

// Get unique categories
const categories = ['All', ...new Set(workItems.map(item => item.category))];

const ITEMS_PER_PAGE = 6;

export default function WorkContent() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [displayedItems, setDisplayedItems] = useState(ITEMS_PER_PAGE);
    const observerTarget = useRef<HTMLDivElement>(null);

    const filteredProjects = useCallback(
        () => (activeCategory === 'All'
            ? workItems
            : workItems.filter(project => project.category === activeCategory)),
        [activeCategory]
    )();

    const visibleProjects = filteredProjects.slice(0, displayedItems);
    const hasMore = displayedItems < filteredProjects.length;

    // Reset displayed items when category changes
    useEffect(() => {
        setDisplayedItems(ITEMS_PER_PAGE);
    }, [activeCategory]);

    // Infinite scroll observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && hasMore) {
                    setDisplayedItems(prev => Math.min(prev + ITEMS_PER_PAGE, filteredProjects.length));
                }
            },
            { threshold: 0.1 }
        );

        const currentTarget = observerTarget.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [hasMore, filteredProjects.length]);

    return (
        <div className="work-page-bg">
            {/* 2026 Work Page Hero */}
            <WorkHero />

            {/* Work Section */}
            <section className="work-section">
                <div className="work-container">
                    {/* Category filter */}
                    <div className="work-controls">
                        <div className="category-filter">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                                >
                                    {cat}
                                    {activeCategory === cat && <span className="category-indicator" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="projects-grid">
                        {visibleProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {/* Loading Indicator / End Message */}
                    <div className="loading-container">
                        {hasMore ? (
                            <div ref={observerTarget} className="loading-dots">
                                <span className="loading-dot" style={{ animationDelay: '0ms' }} />
                                <span className="loading-dot" style={{ animationDelay: '150ms' }} />
                                <span className="loading-dot" style={{ animationDelay: '300ms' }} />
                            </div>
                        ) : filteredProjects.length > ITEMS_PER_PAGE ? (
                            <p className="end-text">You&rsquo;ve reached the end of our portfolio</p>
                        ) : null}
                    </div>
                </div>
            </section>

            {/* ── How We Work Globally ── */}
            <section className="work-global-section">
                <div className="work-container">
                    <div className="work-global-intro">
                        <span className="work-global-badge">Global Collaboration</span>
                        <h2 className="work-global-title">Built for <span className="opacity-60">Global Scale</span></h2>
                        <p className="work-global-desc">
                            We understand the hesitations of hiring a remote agency. We&rsquo;ve designed our entire engineering process to make timezones irrelevant and communication crystal clear.
                        </p>
                    </div>

                    <div className="work-global-grid">
                        {[
                            {
                                icon: <FiClock size={24} />,
                                title: "Timezone Overlap",
                                desc: "We guarantee daily overlap hours for live video syncs, ensuring you never have to wait 24 hours for a simple answer."
                            },
                            {
                                icon: <FiZap size={24} />,
                                title: "Asynchronous Excellence",
                                desc: "We live in Slack, Linear, and Loom. You go to sleep, and wake up to recorded demos and measurable code progress."
                            },
                            {
                                icon: <FiGlobe size={24} />,
                                title: "Transparent Sprints",
                                desc: "No black-box development. We work in strict weekly sprints with transparent tracking, so you always know what we're building."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="work-global-card">
                                <div className="work-global-icon">{feature.icon}</div>
                                <h3 className="work-global-card-title">{feature.title}</h3>
                                <p className="work-global-card-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Massive Bottom CTA (Unified Design) ── */}
            <section className="cta-modern-section">
                <div className="cta-modern-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="cta-modern-content"
                    >
                        {/* Aurora gradient overlays */}
                        <div className="cta-glow cta-glow--cream" />
                        <div className="cta-glow cta-glow--blue" />
                        <div className="cta-extra-glow" />

                        <div className="cta-inner">
                            {/* Left — Copy */}
                            <div className="cta-left">
                                <h2 className="cta-heading">
                                    Ready to map out your{' '}
                                    <span className="cta-heading-accent">MVP?</span>
                                </h2>
                                <p className="cta-subtext">
                                    Stop losing revenue to slow websites and terrible UX. Let&rsquo;s dig into your technical challenges and architect a solution that scales.
                                </p>
                                {/* Social proof */}
                                <div className="cta-proof">
                                    <div className="cta-proof-avatars">
                                        <span className="cta-avatar" style={{ background: '#4F46E5', color: 'white' }}>N</span>
                                        <span className="cta-avatar" style={{ background: '#059669', color: 'white' }}>F</span>
                                        <span className="cta-avatar" style={{ background: '#D97706', color: 'white' }}>M</span>
                                        <span className="cta-avatar" style={{ background: '#DC2626', color: 'white' }}>A</span>
                                    </div>
                                    <span className="cta-proof-text">
                                        Trusted by <strong>industry-leading</strong> startups
                                    </span>
                                </div>
                            </div>

                            {/* Right — CTA Button */}
                            <div className="cta-right">
                                <Link href="/contact" className="cta-button group">
                                    <span className="cta-button-text">
                                        Get in Touch
                                        <FiArrowRight className="cta-button-arrow" />
                                    </span>
                                    <div className="cta-button-shine" />
                                </Link>
                                <p className="cta-micro">
                                    Free consultation · Actionable roadmap
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

interface ProjectCardProps {
    project: typeof workItems[0];
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/work/${project.id}`} className="work-card">
            {/* Image Section */}
            <div className="work-card-image">
                <Image
                    src={project.images?.[0] || project.image}
                    alt={project.title}
                    fill
                    className="project-card-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="work-card-image-overlay" />
            </div>

            {/* Content Section */}
            <div className="work-card-content">
                {/* Category */}
                <div className="work-card-tag-row">
                    <span className="work-card-tag">{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="work-card-title">{project.title}</h3>

                {/* Description */}
                <p className="work-card-desc">{project.description}</p>

                {/* Tags */}
                <div className="work-card-tech-row">
                    {project.technologies?.slice(0, 3).map((tech) => (
                        <span key={tech} className="work-card-tech">{tech}</span>
                    ))}
                    {project.technologies && project.technologies.length > 3 && (
                        <span className="work-card-tech">+{project.technologies.length - 3}</span>
                    )}
                </div>

                {/* Link Button */}
                <div className="work-card-cta">
                    Details
                    <FiArrowRight className="work-card-cta-arrow" />
                </div>
            </div>
        </Link>
    );
}