'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { workItems } from '@/data/workData';
import WorkHero from './WorkHero';
import { FiArrowRight, FiClock, FiZap, FiGlobe } from 'react-icons/fi';
import '@/styles/pages/work.css';
import '../home/cta.css';

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
    <div className="min-h-screen bg-[#f0f0ee] pb-24">
      {/* 2026 Work Page Hero */}
      <WorkHero />

      {/* Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">


          {/* Projects List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Loading Indicator / End Message */}
          <div className="mt-20 flex justify-center">
            {hasMore ? (
              <div ref={observerTarget} className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#101828]/20 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-3 h-3 rounded-full bg-[#101828]/20 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-3 h-3 rounded-full bg-[#101828]/20 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            ) : filteredProjects.length > ITEMS_PER_PAGE ? (
              <p className="text-[#101828]/40 font-medium tracking-tight">You've reached the end of our portfolio</p>
            ) : null}
          </div>
        </div>
      </section>

      {/* ── How We Work Globally ── */}
      <section className="py-24 bg-white border-t border-black/[0.04]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#101828] bg-[#F3F4C0] rounded-full mb-6">
              Global Collaboration
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#101828] tracking-tight mb-6">
              Built for <span className="opacity-60">Global Scale</span>
            </h2>
            <p className="text-lg text-[#101828]/60 leading-relaxed md:text-xl">
              We understand the hesitations of hiring a remote agency. We’ve designed our entire engineering process to make timezones irrelevant and communication crystal clear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <FiClock className="w-6 h-6" />,
                title: "Timezone Overlap",
                desc: "We guarantee daily overlap hours for live video syncs, ensuring you never have to wait 24 hours for a simple answer."
              },
              {
                icon: <FiZap className="w-6 h-6" />,
                title: "Asynchronous Excellence",
                desc: "We live in Slack, Linear, and Loom. You go to sleep, and wake up to recorded demos and measurable code progress."
              },
              {
                icon: <FiGlobe className="w-6 h-6" />,
                title: "Transparent Sprints",
                desc: "No black-box development. We work in strict weekly sprints with transparent tracking, so you always know what we're building."
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-[#f0f0ee] border border-black/[0.04] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-[#101828] text-[#F3F4C0] flex items-center justify-center mb-6 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#101828] mb-4">{feature.title}</h3>
                <p className="text-[#101828]/70 leading-relaxed">{feature.desc}</p>
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
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_60%)] translate-y-1/3 -translate-x-1/3 pointer-events-none rounded-full blur-[60px]" />

            <div className="cta-inner">
              {/* Left — Copy */}
              <div className="cta-left">
                <h2 className="cta-heading">
                  Ready to map out your{' '}
                  <span className="cta-heading-accent">MVP?</span>
                </h2>
                <p className="cta-subtext">
                  Stop losing revenue to slow websites and terrible UX. Let's dig into your technical challenges and architect a solution that scales.
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
    <Link href={`/work/${project.id}`} className="group flex flex-col bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-black/[0.04]">
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#101828] border-b border-black/[0.04]">
        <Image
          src={project.images?.[0] || project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-8">
        {/* Category */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#101828] bg-[#F3F4C0] rounded-full">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-black text-[#101828] mb-3 tracking-tight group-hover:opacity-70 transition-opacity">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#101828]/60 text-sm leading-relaxed mb-8 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies?.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-[11px] font-bold text-[#101828]/50 bg-black/[0.03] rounded-md uppercase tracking-wide">
              {tech}
            </span>
          ))}
          {project.technologies && project.technologies.length > 3 && (
            <span className="px-2.5 py-1 text-[11px] font-bold text-[#101828]/40 uppercase tracking-wide">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Link Button */}
        <div className="flex items-center gap-2 mt-auto text-[#101828] font-bold text-sm group/btn">
          <div className="w-8 h-8 rounded-full bg-[#101828] text-white flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45">
            <FiArrowRight className="w-4 h-4" />
          </div>
          View Project Details
        </div>
      </div>
    </Link>
  );
}
