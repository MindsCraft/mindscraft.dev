import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allBlogPosts, BlogPost, BlogSection } from "@/content/blog-data";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { ArrowRight, ArrowLeft, Clock, Calendar, CheckCircle2, Sparkles, Share2 } from "lucide-react";
import "./blog-post.css";

export function generateStaticParams() {
  return allBlogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allBlogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found | mindsCraft" };

  return {
    title: `${post.title} — mindsCraft Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Generate fallback sections if the post does not have explicit sections
  const sections: BlogSection[] = post.sections || [
    {
      id: "overview",
      title: "Overview & Context",
      paragraphs: post.content || [post.excerpt],
    },
    {
      id: "key-considerations",
      title: "Key Architectural & UX Considerations",
      paragraphs: [
        "In modern B2B SaaS, user experience directly correlates with customer retention and net revenue expansion. Eliminating friction points in core product workflows creates immediate compound returns on developer velocity and customer satisfaction.",
        "When engineering interfaces for power users, always prioritize predictable feedback states, optimistic data caching, and dense yet scannable information hierarchy.",
      ],
      bulletPoints: [
        "Optimize table row densities and keyboard shortcuts for high-frequency user actions.",
        "Implement explicit, friendly error states that instruct users how to resolve edge cases.",
        "Keep cognitive load minimal by decomposing multi-step workflows into progressive disclosures.",
      ],
    },
    {
      id: "practical-implementation",
      title: "Practical Implementation & Next Steps",
      paragraphs: [
        "Begin with a structured UX audit of your current critical user journeys: signup, workspace provisioning, and the primary unit of work (e.g. creating a report, launching a campaign, or configuring an integration).",
        "Watch real target users navigate the flow without assistance. The friction points you uncover will inform your high-impact design sprint priorities.",
      ],
      callout: "The fastest software companies don't over-complicate redesigns—they relentlessly eliminate interface friction on their highest-traffic screens.",
    },
  ];

  // Related articles (Eleken "Read next" section)
  const relatedPosts = allBlogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="blog-post-root">
      <Header />
      <main className="blog-post-main">
        {/* ================================================================
            ARTICLE HERO HEADER (Eleken Structure)
            ================================================================ */}
        <section className="blog-post-hero">
          <div className="container">
            {/* Breadcrumb Bar */}
            <nav aria-label="Breadcrumbs" className="blog-breadcrumbs">
              <a href="/" className="breadcrumb-link">Home</a>
              <span className="breadcrumb-separator">/</span>
              <a href="/blog" className="breadcrumb-link">Blog</a>
              <span className="breadcrumb-separator">/</span>
              <a href={`/category/${post.categorySlug}`} className="breadcrumb-link">
                {post.category}
              </a>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">{post.title}</span>
            </nav>

            {/* Meta tags & updated date */}
            <div className="row-blog-data">
              <div className="article-meta-tags">
                <span className="article-meta-tag">Article</span>
                <span className="article-meta-tag article-meta-tag--category">
                  {post.category}
                </span>
              </div>
              <div className="blog-post-date">
                <span>Updated on: {post.updatedDate || post.date}</span>
              </div>
            </div>

            {/* Title & Reading Time */}
            <h1 className="blog-header-title">{post.title}</h1>
            <div className="blog-post-time-meta">
              <Clock size={14} />
              <span>{post.readTime.includes("read") ? post.readTime : `${post.readTime} read`}</span>
            </div>

            {/* Featured Hero Cover Artwork */}
            {post.image && (
              <div className="blog-header-img-wrap">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-header-img"
                  loading="eager"
                />
              </div>
            )}

            {/* Author & Reviewer Bar */}
            <div className="blog-author-wrap">
              <div className="blog-author-item">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="blog-author-avatar"
                  />
                ) : (
                  <div className="blog-author-initials">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div className="blog-author-info">
                  <span className="blog-author-name">{post.author.name}</span>
                  <span className="blog-author-role">{post.author.role}</span>
                </div>
              </div>

              {post.reviewer && (
                <div className="blog-author-item blog-reviewer-item">
                  {post.reviewer.avatar ? (
                    <img
                      src={post.reviewer.avatar}
                      alt={post.reviewer.name}
                      className="blog-author-avatar"
                    />
                  ) : (
                    <div className="blog-author-initials">
                      {post.reviewer.name.charAt(0)}
                    </div>
                  )}
                  <div className="blog-author-info">
                    <span className="blog-author-name">{post.reviewer.name}</span>
                    <span className="blog-author-role">Reviewed by • {post.reviewer.role}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================================================================
            TWO-COLUMN BODY: Sticky Table of Contents + Article Content
            ================================================================ */}
        <section className="blog-post-body-section">
          <div className="container">
            <div className="content-blog-row">
              {/* Left Column: Sticky Table of Contents */}
              <aside className="table-content-wrap">
                <div className="toc-sticky">
                  <div className="toc-header">
                    <span className="toc-title">Table of contents</span>
                    <div className="toc-header-line" />
                  </div>
                  <nav className="toc-nav">
                    <ol className="toc-list">
                      {sections.map((sec, idx) => (
                        <li key={sec.id} className="toc-item">
                          <a href={`#${sec.id}`} className="toc-link">
                            <span className="toc-num">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span className="toc-text">{sec.title}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>

                  {/* Sidebar Quick Action Card */}
                  <div className="toc-cta-card">
                    <div className="toc-cta-badge">
                      <Sparkles size={12} /> Risk-Free Trial
                    </div>
                    <div className="toc-cta-text">
                      Need a dedicated senior SaaS designer on your team?
                    </div>
                    <a href="/contact" className="toc-cta-btn">
                      Start 3-day trial <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </aside>

              {/* Right Column: Main Article Body */}
              <article className="blog-article-content">
                {/* TL;DR Box (Eleken Signature) */}
                <div className="blog-tldr">
                  <h2 className="blog-tldr-title">TL;DR</h2>
                  <p className="blog-tldr-text">
                    {post.tldr || post.excerpt}
                  </p>
                </div>

                {/* Main Content Sections */}
                <div className="blog-content-stream">
                  {sections.map((sec) => (
                    <div key={sec.id} id={sec.id} className="blog-section-block">
                      <h2 className="blog-section-h2">{sec.title}</h2>

                      {sec.paragraphs.map((par, pIdx) => (
                        <p key={pIdx} className="blog-p">
                          {par}
                        </p>
                      ))}

                      {/* Optional Checklist */}
                      {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                        <ul className="blog-checklist">
                          {sec.bulletPoints.map((item, bIdx) => (
                            <li key={bIdx} className="blog-checklist-item">
                              <CheckCircle2 size={18} className="blog-check-icon" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Optional Callout / Key Takeaway */}
                      {sec.callout && (
                        <div className="blog-callout-box">
                          <div className="blog-callout-pill">Key Takeaway</div>
                          <p className="blog-callout-text">{sec.callout}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Inline Conversion Banner */}
                <div className="blog-inline-promo">
                  <div className="blog-inline-promo__body">
                    <span className="blog-inline-promo__badge">
                      Embedded Partnership
                    </span>
                    <h3 className="blog-inline-promo__title">
                      Looking for a dedicated SaaS designer to scale your product?
                    </h3>
                    <p className="blog-inline-promo__desc">
                      mindsCraft embeds senior product designers directly into your team on a flexible monthly subscription. Zero recruiting fees, zero equity, and a risk-free 3-day trial.
                    </p>
                    <a href="/contact" className="blog-inline-promo__btn">
                      Claim your 3-day trial <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Author Signature Footer Block */}
                <div className="blog-author-signature">
                  <div className="blog-author-sig-info">
                    <span className="blog-author-written">Written by</span>
                    <h4 className="blog-author-sig-name">{post.author.name}</h4>
                    <p className="blog-author-sig-role">
                      {post.author.role} at mindsCraft — Pragmatic UI/UX Design Agency for SaaS
                    </p>
                  </div>
                  <a href="/blog" className="blog-back-all-btn">
                    <ArrowLeft size={14} /> All articles
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ================================================================
            READ NEXT SECTION (Eleken Related Articles)
            ================================================================ */}
        <section className="blog-post-related-section">
          <div className="container">
            <div className="blog-post-related-header">
              <div className="blog-post-related-title-wrap">
                <h2 className="blog-section-h2-lg">Read next</h2>
                <span className="blog-section-badge">Recommended Guides</span>
              </div>
              <a href="/blog" className="blog-section-link">
                View all articles <ArrowRight size={14} />
              </a>
            </div>

            <div className="blog-related-grid">
              {relatedPosts.map((rel) => (
                <article key={rel.slug} className="blog-card blog-card--related">
                  <a href={`/blog/${rel.slug}`} className="blog-related-link">
                    {rel.image && (
                      <div className="blog-related-img-wrap">
                        <img
                          src={rel.image}
                          alt={rel.title}
                          loading="lazy"
                          className="blog-related-img"
                        />
                      </div>
                    )}
                    <div className="blog-related-body">
                      <div className="blog-card-meta-line">
                        <span className="blog-category-tag">{rel.category}</span>
                        <span className="blog-meta-bullet">•</span>
                        <span className="blog-time">
                          <Clock size={12} /> {rel.readTime}
                        </span>
                      </div>
                      <h3 className="blog-related-title">{rel.title}</h3>
                      <p className="blog-related-excerpt">{rel.excerpt}</p>
                      <div className="blog-related-footer">
                        <span className="blog-read-link">
                          Read article <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            BOTTOM CONVERSION CTA BANNER
            ================================================================ */}
        <CtaBanner
          title="Ready to elevate your SaaS product design?"
          subtitle="Start with a risk-free 3-day trial and get senior designers embedded into your product sprints."
          buttonText="Start 3-day trial"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
