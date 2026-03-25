'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiClock, FiCalendar, FiArrowRight, FiBookOpen, FiShare2, FiCopy, FiCheck } from 'react-icons/fi';

type BlogPost = {
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

export default function BlogDetailClient({ post, headings, relatedPosts, serviceLink, wordCount }: Props) {

  const [activeHeading, setActiveHeading] = useState('');
  const [showToc, setShowToc] = useState(false);
  const [copied, setCopied] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = articleRef.current;
      if (!el) return;


      // Show TOC after scrolling past the hero
      setShowToc(window.scrollY > 600);
    };

    const observeHeadings = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveHeading(entry.target.id);
            }
          });
        },
        { rootMargin: '-20% 0px -60% 0px' }
      );

      headings.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const cleanup = observeHeadings();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cleanup();
    };
  }, [headings]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://mindscraft.dev/blog/${post.slug}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>


      {/* ── FLOATING TOC (Desktop) ── */}
      <div
        className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:block transition-all duration-500 ${
          showToc ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 pointer-events-none'
        }`}
      >
        <div className="w-56 bg-white/80 backdrop-blur-xl rounded-2xl border border-black/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-5">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#101828]/30 mb-4 flex items-center gap-1.5">
            <FiBookOpen className="w-3 h-3" /> Contents
          </p>
          <nav className="space-y-0.5">
            {headings.map(({ id, text }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`block text-[12px] font-semibold py-1.5 px-3 rounded-lg transition-all duration-200 leading-snug ${
                  activeHeading === id
                    ? 'text-[#101828] bg-[#F3F4C0]/40 border-l-2 border-[#101828]'
                    : 'text-[#101828]/40 hover:text-[#101828]/70 hover:bg-black/[0.02] border-l-2 border-transparent'
                }`}
              >
                {text.length > 32 ? text.substring(0, 32) + '…' : text}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <article ref={articleRef} className="min-h-screen bg-[#fafaf9]">

        {/* ── BREADCRUMB ── */}
        <div className="bg-white border-b border-black/[0.04]">
          <nav className="max-w-6xl mx-auto px-6 py-3.5 flex items-center gap-2 text-[10px] font-bold text-[#101828]/35 uppercase tracking-[0.15em]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#101828] transition-colors">Home</Link>
            <span className="text-[#101828]/15">/</span>
            <Link href="/blog" className="hover:text-[#101828] transition-colors">Blog</Link>
            <span className="text-[#101828]/15">/</span>
            <Link href={`/blog?cat=${encodeURIComponent(post.category)}`} className="hover:text-[#101828] transition-colors">{post.category}</Link>
            <span className="text-[#101828]/15">/</span>
            <span className="text-[#101828]/55 truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>

        {/* ── HERO HEADER ── */}
        <header className="relative bg-[#101828] overflow-hidden">
          {/* Ambient Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(243,244,192,0.1),transparent_70%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#101828] to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
            {/* Back Link */}
            <Link href="/blog" className="group inline-flex items-center gap-2 text-white/30 hover:text-[#F3F4C0] font-bold text-[10px] uppercase tracking-[0.2em] transition-all mb-10">
              <FiArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
              All Insights
            </Link>

            {/* Category Chips */}
            <div className="flex items-center justify-center gap-2.5 mb-8">
              <span className="px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#101828] bg-[#F3F4C0] rounded-full shadow-[0_0_40px_rgba(243,244,192,0.15)]">
                {post.category}
              </span>
              {serviceLink && (
                <Link href={serviceLink.href} className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 hover:text-white/80 border border-white/[0.08] rounded-full transition-all hover:border-white/20">
                  {serviceLink.label} →
                </Link>
              )}
            </div>

            {/* Title */}
            <h1 className="text-[2.5rem] sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-black text-white leading-[1.04] mb-8 tracking-[-0.035em] max-w-[820px] mx-auto">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-white/40 text-base sm:text-lg font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
              {post.description}
            </p>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-black text-white/25 uppercase tracking-[0.15em]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#F3F4C0] flex items-center justify-center">
                  <span className="text-[7px] font-black text-[#101828]">MC</span>
                </div>
                <span className="text-white/60">{post.author || 'The MindsCraft Team'}</span>
              </div>
              <div className="h-3 w-px bg-white/[0.08]" />
              <div className="flex items-center gap-1.5">
                <FiCalendar className="w-3 h-3" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
              <div className="h-3 w-px bg-white/[0.08]" />
              <div className="flex items-center gap-1.5 text-[#F3F4C0]/70">
                <FiClock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
              <div className="h-3 w-px bg-white/[0.08]" />
              <div className="flex items-center gap-1.5">
                <FiBookOpen className="w-3 h-3" />
                <span>{wordCount.toLocaleString()} words</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── HERO IMAGE ── */}
        <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-20 mb-16">
          <div className="group relative aspect-[2.2/1] w-full rounded-[28px] overflow-hidden bg-[#101828] border-[6px] border-white shadow-[0_40px_100px_-20px_rgba(16,24,40,0.35)]">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* ── ARTICLE BODY ── */}
        <div className="max-w-[720px] mx-auto px-6 pb-20">

          {/* Prose Content */}
          <div className="prose-blog" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* ── INLINE CTA ── */}
          <div className="my-16 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F3F4C0]/30 via-[#101828]/10 to-[#F3F4C0]/30 rounded-[36px] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative p-10 sm:p-14 bg-[#101828] rounded-[32px] text-white overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,244,192,0.12),transparent_60%)]" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-[radial-gradient(circle,rgba(243,244,192,0.06),transparent_70%)]" />
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F3F4C0] mb-4 relative z-10">MindsCraft Builds This</p>
              <h3 className="text-2xl sm:text-3xl font-black leading-[1.1] mb-4 relative z-10 tracking-tight">
                Want us to build this<br className="hidden sm:block" /> for your product?
              </h3>
              <p className="text-white/45 text-sm font-medium mb-8 relative z-10 max-w-md leading-relaxed">
                We've shipped {post.category} solutions for startups and scale-ups across the globe. Let's talk about yours.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#F3F4C0] text-[#101828] font-black rounded-2xl hover:bg-white transition-all relative z-10 text-sm hover:shadow-[0_0_30px_rgba(243,244,192,0.3)]">
                Start a conversation <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ── AUTHOR CARD ── */}
          <div className="mt-16 pt-14 border-t border-black/[0.06]">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#101828] flex items-center justify-center shadow-lg">
                <span className="text-[#F3F4C0] font-black text-lg">MC</span>
              </div>
              <div className="flex-1">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#101828]/30 mb-1.5">Written By</p>
                <h4 className="text-lg font-black text-[#101828] mb-1.5">{post.author || 'The MindsCraft Team'}</h4>
                <p className="text-sm text-[#101828]/50 font-medium leading-relaxed max-w-md">
                  Engineering & AI specialists building premium digital products for founders and enterprises. We write about what we actually build.
                </p>
              </div>
            </div>
          </div>

          {/* ── SHARE BAR ── */}
          <div className="mt-14 pt-8 border-t border-black/[0.06]">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#101828]/30 flex items-center gap-1.5 mr-2">
                <FiShare2 className="w-3 h-3" /> Share
              </p>
              <a
                href={`https://twitter.com/intent/tweet?url=https://mindscraft.dev/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-[11px] font-black bg-[#f0f0ee] rounded-xl hover:bg-[#101828] hover:text-white transition-all"
              >
                Share on 𝕏
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://mindscraft.dev/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-[11px] font-black bg-[#f0f0ee] rounded-xl hover:bg-[#0A66C2] hover:text-white transition-all"
              >
                Share on LinkedIn
              </a>
              <button
                onClick={handleCopyLink}
                className="px-5 py-2.5 text-[11px] font-black bg-[#f0f0ee] rounded-xl hover:bg-[#101828] hover:text-white transition-all flex items-center gap-1.5"
              >
                {copied ? <><FiCheck className="w-3 h-3" /> Copied!</> : <><FiCopy className="w-3 h-3" /> Copy Link</>}
              </button>
            </div>
          </div>
        </div>

        {/* ── CONVERSION FOOTER PANEL ── */}
        <div className="bg-[#101828] py-28 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(243,244,192,0.06),transparent_60%)]" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#101828] bg-[#F3F4C0] rounded-full mb-8">
              {post.category}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.05] mb-6 tracking-[-0.03em]">
              Let's build your vision<br />with expert AI development.
            </h2>
            <p className="text-white/40 text-base sm:text-lg max-w-xl mx-auto mb-10 font-medium leading-relaxed">
              MindsCraft ships premium software for founders who refuse to compromise on quality, speed, or intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-[#F3F4C0] text-[#101828] font-black rounded-2xl hover:bg-white transition-all hover:shadow-[0_0_40px_rgba(243,244,192,0.25)] text-sm">
                Start Your Project
              </Link>
              <Link href="/work" className="px-8 py-4 border-2 border-white/15 text-white font-black rounded-2xl hover:border-white/40 transition-all text-sm">
                See Our Work →
              </Link>
            </div>
          </div>
        </div>

        {/* ── RELATED ARTICLES ── */}
        {relatedPosts.length > 0 && (
          <div className="bg-[#f0f0ee] py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#101828]/30 mb-2">More from MindsCraft</p>
                  <h2 className="text-3xl font-black text-[#101828] tracking-[-0.03em]">Related Insights</h2>
                </div>
                <Link href="/blog" className="hidden sm:inline-flex items-center gap-2 text-sm font-black text-[#101828]/50 hover:text-[#101828] transition-colors">
                  All articles <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(related => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group bg-white rounded-[24px] overflow-hidden border border-black/[0.04] hover:border-black/[0.08] shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
                  >
                    {related.image && (
                      <div className="relative aspect-[16/9] w-full bg-[#101828] overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.imageAlt || related.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1200px) 33vw, 400px"
                        />
                      </div>
                    )}
                    <div className="p-7">
                      <span className="inline-block px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] bg-[#f0f0ee] text-[#101828]/50 rounded-full mb-3">{related.category}</span>
                      <h3 className="font-black text-[#101828] text-base leading-snug mb-2.5 line-clamp-2 group-hover:text-[#101828]/75 transition-colors">{related.title}</h3>
                      <p className="text-[13px] text-[#101828]/40 line-clamp-2 mb-5 font-medium leading-relaxed">{related.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black text-[#101828]/30 uppercase tracking-wider">{related.readTime}</span>
                        <span className="text-[11px] font-black text-[#101828] group-hover:translate-x-1 transition-transform">Read →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>

      {/* ── INLINE STYLES ── */}
      <style>{`
        html { scroll-behavior: smooth; }

        .prose-blog h2 {
          font-size: 1.65rem;
          font-weight: 800;
          color: #101828;
          margin-top: 3.5rem;
          margin-bottom: 1rem;
          letter-spacing: -0.035em;
          line-height: 1.15;
          scroll-margin-top: 2rem;
        }

        .prose-blog h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #101828;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }

        .prose-blog p {
          color: rgba(16,24,40,0.65);
          line-height: 1.9;
          margin-bottom: 1.6rem;
          font-size: 1.0625rem;
        }

        .prose-blog ul {
          color: rgba(16,24,40,0.65);
          padding-left: 1.5rem;
          list-style-type: disc;
          margin-bottom: 1.5rem;
        }

        .prose-blog ul li, .prose-blog ol li {
          margin-bottom: 0.25rem;
          font-size: 1.0625rem;
          line-height: 1.75;
          padding-left: 0.5rem;
        }

        .prose-blog li p {
          margin-bottom: 0 !important;
        }

        .prose-blog ul li::marker {
          color: #101828;
          font-size: 1.1em;
        }

        .prose-blog ol {
          color: rgba(16,24,40,0.65);
          padding-left: 0;
          list-style: none;
          margin-bottom: 1.5rem;
          counter-reset: ol-counter;
        }

        .prose-blog ol li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 0.25rem;
          font-size: 1.0625rem;
          line-height: 1.75;
        }

        .prose-blog ol li::before {
          content: counter(ol-counter);
          counter-increment: ol-counter;
          background: #101828;
          color: #F3F4C0;
          border: none;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 10px;
          font-weight: 800;
          top: 0.38em;
        }

        .prose-blog blockquote {
          border: none;
          background: #101828;
          color: #F3F4C0;
          padding: 2.5rem 3rem;
          border-radius: 24px;
          margin: 2.5rem 0;
          position: relative;
          overflow: hidden;
        }

        .prose-blog blockquote::before {
          content: '"';
          position: absolute;
          top: 0.5rem;
          left: 1.2rem;
          font-size: 5rem;
          line-height: 1;
          color: rgba(243,244,192,0.12);
          font-family: Georgia, serif;
        }

        .prose-blog blockquote p {
          color: #F3F4C0;
          font-size: 1.15rem;
          font-weight: 700;
          font-style: italic;
          margin: 0;
          line-height: 1.6;
        }

        .prose-blog strong {
          font-weight: 700;
          color: #101828;
        }

        .prose-blog a {
          font-weight: 700;
          color: #101828;
          text-decoration: underline;
          text-decoration-color: #F3F4C0;
          text-underline-offset: 4px;
          text-decoration-thickness: 2px;
          transition: opacity 0.2s;
        }

        .prose-blog a:hover { opacity: 0.65; }

        .prose-blog img {
          width: 100%;
          border-radius: 16px;
          margin: 2rem 0;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }

        .prose-blog code {
          background: #101828;
          color: #F3F4C0;
          border-radius: 6px;
          padding: 2px 8px;
          font-size: 0.85em;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
        }

        .prose-blog pre {
          background: #0d1117;
          border-radius: 16px;
          padding: 1.75rem;
          overflow-x: auto;
          margin: 2rem 0;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .prose-blog pre code {
          background: none;
          color: #e6edf3;
          padding: 0;
          font-size: 0.875rem;
        }

        /* Smooth entrance for images */
        .prose-blog img {
          animation: fadeUp 0.6s ease-out both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
