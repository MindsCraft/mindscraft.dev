'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { workItems } from '@/data/workData';
import WorkHero from './WorkHero';
import { FiArrowRight } from 'react-icons/fi';
import '@/styles/pages/work.css';

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
          {/* Category Filter */}
          <div className="work-controls">
            <div className="category-filter">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                >
                  {category}
                  {activeCategory === category && (
                    <span className="category-indicator" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Projects List */}
          <div className="projects-list">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Loading Indicator */}
          {hasMore && (
            <div ref={observerTarget} className="loading-container">
              <div className="loading-dots">
                <div className="loading-dot" style={{ animationDelay: '0ms' }} />
                <div className="loading-dot" style={{ animationDelay: '150ms' }} />
                <div className="loading-dot" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          {/* End Message */}
          {!hasMore && filteredProjects.length > ITEMS_PER_PAGE && (
            <div className="end-message">
              <p className="end-text">You've reached the end of our portfolio</p>
            </div>
          )}
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
    <Link href={`/work/${project.id}`} className="project-card">
      {/* Image Section */}
      <div className="project-card-image">
        <Image
          src={project.images?.[0] || project.image}
          alt={project.title}
          fill
          className="project-card-img"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content Section */}
      <div className="project-card-content">
        {/* Category */}
        <p className="project-card-category">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="project-card-title">
          {project.title}
        </h3>

        {/* Description */}
        <p className="project-card-description">
          {project.description}
        </p>

        {/* Tags */}
        <div className="project-card-tags">
          {project.technologies?.slice(0, 3).map((tech) => (
            <span key={tech} className="project-card-tag">
              {tech.toLowerCase()}
            </span>
          ))}
        </div>

        {/* Link Button */}
        <div className="link-button">
          <span className="link-button-icon">
            <FiArrowRight />
          </span>
          <span className="link-button-text">Learn more</span>
        </div>
      </div>
    </Link>
  );
}
