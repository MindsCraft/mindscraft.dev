'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiArrowUpRight } from 'react-icons/fi';

interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}

interface BlogListProps {
  posts: Post[];
  categories: string[];
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  'AI & SaaS': { bg: 'rgba(243,244,192,0.18)', text: '#F3F4C0' },
  'Web Development': { bg: 'rgba(255,255,255,0.12)', text: 'rgba(255,255,255,0.7)' },
  'UX & CRO': { bg: 'rgba(167,243,208,0.15)', text: '#6ee7b7' },
  'Performance': { bg: 'rgba(196,181,253,0.15)', text: '#c4b5fd' },
};

const lightCategoryColors: Record<string, { bg: string; text: string }> = {
  'AI & SaaS': { bg: 'rgba(16,24,40,0.07)', text: '#101828' },
  'Web Development': { bg: 'rgba(16,24,40,0.06)', text: '#101828' },
  'UX & CRO': { bg: 'rgba(5,150,105,0.08)', text: '#065f46' },
  'Performance': { bg: 'rgba(109,40,217,0.08)', text: '#5b21b6' },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p.id !== featured?.id);

  return (
    <div className="blg-page">
      {/* ── Hero ── */}
      <section className="blg-hero">
        <div className="blg-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="blg-eyebrow">From the Team</span>
            <h1 className="blg-hero-title">
              Ideas worth<br />
              <span className="blg-hero-accent">building on.</span>
            </h1>
            <p className="blg-hero-sub">
              Practical guides on AI development, SaaS growth, performance
              engineering, and UX — written by the people building products
              every day.
            </p>
          </motion.div>

          {/* Category filter */}
          <div className="blg-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`blg-filter-btn ${activeCategory === cat ? 'blg-filter-btn--active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="blg-content">
        <div className="blg-content-inner">

          {featured && (
            <motion.div
              key={`featured-${featured.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              {/* ── Featured card ── */}
              <Link href={`/blog/${featured.slug}`} className="blg-featured-card">
                <div className="blg-featured-image">
                  {featured.image && (
                    <Image
                      src={featured.image}
                      alt={featured.imageAlt || featured.title}
                      fill
                      className="blg-featured-img-el"
                      sizes="(max-width: 768px) 100vw, 55vw"
                    />
                  )}
                  <div className="blg-featured-img-overlay" />
                </div>
                <div className="blg-featured-body">
                  <div className="blg-featured-top">
                    <span className="blg-featured-label">Featured</span>
                    <span
                      className="blg-cat-tag"
                      style={{
                        background: categoryColors[featured.category]?.bg ?? 'rgba(255,255,255,0.1)',
                        color: categoryColors[featured.category]?.text ?? '#fff',
                      }}
                    >
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="blg-featured-title">{featured.title}</h2>
                  <p className="blg-featured-desc">{featured.description}</p>
                  <div className="blg-featured-footer">
                    <div className="blg-meta">
                      <FiClock className="blg-meta-icon" />
                      <span>{featured.readTime}</span>
                      <span className="blg-meta-sep">·</span>
                      <span>{formatDate(featured.date)}</span>
                    </div>
                    <span className="blg-read-link">
                      Read article <FiArrowUpRight className="blg-arrow-icon" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* ── Grid of remaining posts ── */}
          {rest.length > 0 && (
            <div className="blg-grid">
              {rest.map((post, i) => {
                const lc = lightCategoryColors[post.category] ?? { bg: 'rgba(16,24,40,0.06)', text: '#101828' };
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <Link href={`/blog/${post.slug}`} className="blg-card">
                      {/* Image */}
                      <div className="blg-card-image">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.imageAlt || post.title}
                            fill
                            className="blg-card-img-el"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        ) : (
                          <div className="blg-card-img-placeholder" />
                        )}
                      </div>

                      {/* Body */}
                      <div className="blg-card-body">
                        <span
                          className="blg-card-cat"
                          style={{ background: lc.bg, color: lc.text }}
                        >
                          {post.category}
                        </span>
                        <h3 className="blg-card-title">{post.title}</h3>
                        <p className="blg-card-desc">{post.description}</p>
                        <div className="blg-card-footer">
                          <div className="blg-card-meta">
                            <FiClock className="blg-meta-icon blg-meta-icon--dark" />
                            <span>{post.readTime}</span>
                            <span className="blg-meta-sep blg-meta-sep--dark">·</span>
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <span className="blg-card-read">
                            Read <FiArrowRight className="blg-card-arrow" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="blg-empty">
              <p>No posts in this category yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter strip ── */}
      <section className="blg-newsletter">
        <div className="blg-newsletter-inner">
          <div className="blg-newsletter-left">
            <span className="blg-nl-eyebrow">Stay sharp</span>
            <h2 className="blg-nl-title">Get the next article in your inbox.</h2>
            <p className="blg-nl-sub">
              One email per week. No fluff — just practical guides on AI,
              SaaS, and web performance.
            </p>
          </div>
          <form className="blg-nl-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="blg-nl-input"
              autoComplete="email"
            />
            <button type="submit" className="blg-nl-btn">
              Subscribe
              <FiArrowRight />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}