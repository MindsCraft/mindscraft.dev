'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FiClock,
  FiCalendar,
  FiArrowRight,
  FiShare2,
  FiTwitter,
  FiLinkedin,
  FiLink,
  FiCheck
} from 'react-icons/fi';

import BlogCard from '@/components/blog/BlogCard';
import DOMPurify from 'isomorphic-dompurify';
import '@/styles/blog/blog-detail.css';
import '@/styles/pages/blog.css';

type BlogPost = {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author?: string;
  category: string;
  content: string;
  image: string;
  imageAlt?: string;
};

type Heading = { id: string; text: string };

type Props = {
  post: BlogPost;
  headings: Heading[];
  relatedPosts: BlogPost[];
  serviceLink?: { label: string; href: string };
  wordCount: number;
};

const lightCategoryColors: Record<string, { bg: string; text: string }> = {
  'AI & SaaS': { bg: 'rgba(16,24,40,0.07)', text: '#101828' },
  'Web Development': { bg: 'rgba(16,24,40,0.06)', text: '#101828' },
  'UX & CRO': { bg: 'rgba(5,150,105,0.08)', text: '#065f46' },
  'Performance': { bg: 'rgba(109,40,217,0.08)', text: '#5b21b6' },
};

export default function BlogDetailClient({ post, headings, relatedPosts, wordCount }: Props) {
  const [activeHeading, setActiveHeading] = useState(headings[0]?.id ?? '');
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const proseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── CLICK TO COPY UTILITY ──
    if (!proseRef.current) return;
    const blocks = proseRef.current.querySelectorAll('pre');
    
    blocks.forEach((block) => {
      if (block.querySelector('.copy-code-btn')) return;
      
      const button = document.createElement('button');
      button.className = 'copy-code-btn';
      button.innerHTML = 'Copy';
      
      button.addEventListener('click', () => {
        const text = block.querySelector('code')?.innerText || block.innerText;
        navigator.clipboard.writeText(text).then(() => {
          button.innerText = 'Copied!';
          setTimeout(() => { button.innerText = 'Copy'; }, 2000);
        });
      });
      
      block.appendChild(button);
    });
  }, [post.content]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollY / docHeight) * 100) : 0);

      let current = headings[0]?.id ?? '';
      for (const { id } of headings) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = id;
          }
        }
      }
      setActiveHeading(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const readTime = Math.ceil(wordCount / 225);
  const catColors = lightCategoryColors[post.category] ?? { bg: 'rgba(16,24,40,0.06)', text: '#101828' };

  return (
    <div className="blog-detail-page">

      {/* ── HEADER ── */}
      <div className="container">
        <header className="header-section">
          <Link
            href={`/blog?cat=${encodeURIComponent(post.category)}`}
            className="category-tag"
            style={{ backgroundColor: catColors.bg, color: catColors.text }}
          >
            {post.category}
          </Link>

          <h1 className="post-title">
            {post.title}
          </h1>

          <p className="post-lead">
            {post.description}
          </p>

          <div className="meta-row">
            <div>
              Written by <strong>{post.author || 'MindsCraft Team'}</strong>
            </div>
            <div className="dot" />
            <div>
              Review by <strong>MindsCraft Engineering</strong>
            </div>
            <div className="dot" />
            <div>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="dot" />
            <div>
              {readTime} min read
            </div>
          </div>
        </header>

        {/* ── HERO IMAGE ── */}
        <div className="featured-image-container">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            priority
            sizes="100vw"
          />
        </div>

        {/* ── ARTICLE GRID ── */}
        <div className="article-grid">

          {/* L: TABLE OF CONTENTS (ENLARGED) */}
          <aside className="sidebar-left">
            <div className="sticky-content">
              <nav className="toc-list">
                {headings.map((h) => (
                  <a
                    key={h.id}
                    href={`#${h.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`toc-link ${activeHeading === h.id ? 'active' : ''}`}
                  >
                    {h.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* C: MAIN CONTENT (FULL WIDTH ACCESSIBLE) */}
          <article className="main-content">
            <div
              ref={proseRef}
              className="prose-section"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
            />

            {/* ── MINIMALIST SOCIAL FOOTER ── */}
            <footer className="article-footer-meta">
              <div className="share-conclusion">
                <p className="sidebar-label">Share this insight</p>
                <div className="share-row-round">
                  <button onClick={handleCopy} className="round-share-btn" title="Copy Link">
                    {copied ? <FiCheck color="#059669" /> : <FiLink />}
                  </button>
                  <button className="round-share-btn" title="Share on Twitter"><FiTwitter /></button>
                  <button className="round-share-btn" title="Share on LinkedIn"><FiLinkedin /></button>
                </div>
              </div>
            </footer>
          </article>

        </div>
      </div>

      {/* ── RELATED POSTS ── */}
      {relatedPosts.length > 0 && (
        <section className="related-posts-section">
          <div className="container">
            <div className="related-header">
              <div>
                <p className="sidebar-label">Read next</p>
                <h2 className="related-section-title">More insights</h2>
              </div>
              <Link href="/blog" className="view-all-link">
                View all stories
              </Link>
            </div>

            <div className="related-slider-wrap">
              <RelatedSlider relatedPosts={relatedPosts} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
function RelatedSlider({ relatedPosts }: { relatedPosts: BlogPost[] }) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const offset = direction === 'left' ? -clientWidth : clientWidth;
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <div className="discovery-slider-container">
      {canScrollLeft && (
        <button 
          className="slider-nav-btn slider-nav-btn--prev" 
          onClick={() => scroll('left')}
          aria-label="Previous posts"
        >
          <FiArrowRight style={{ transform: 'rotate(180deg)' }} />
        </button>
      )}
      {canScrollRight && (
        <button 
          className="slider-nav-btn slider-nav-btn--next" 
          onClick={() => scroll('right')}
          aria-label="Next posts"
        >
          <FiArrowRight />
        </button>
      )}
      
      <div 
        ref={scrollRef} 
        className="slider-track"
        onScroll={handleScroll}
      >
        {relatedPosts.map((rp, idx) => (
          <div key={rp.slug} className="slider-item">
            <BlogCard post={rp} index={idx} />
          </div>
        ))}
      </div>
    </div>
  );
}
