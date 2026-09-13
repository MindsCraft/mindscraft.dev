import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { allBlogPosts, blogCategories } from "@/content/blog-data";
import { ArrowRight, ArrowUpRight, Clock, BookOpen, Sparkles } from "lucide-react";
import "./blog-hub.css";

export const metadata: Metadata = {
  title: "SaaS UI/UX Design Blog — Guides, Teardowns & Strategy | mindsCraft",
  description:
    "Resources to help you design, fix or scale your product. Tactical teardowns, practical frameworks, and honest advice on building high-growth SaaS applications.",
};

export default function BlogHubPage() {
  const featuredPost =
    allBlogPosts.find((p) => p.featured) || allBlogPosts[0];
  const heroStackPosts = allBlogPosts.filter(
    (p) => !p.featured && ["saas-business", "design-process", "product-design"].includes(p.categorySlug)
  ).slice(0, 4);

  const freshPosts = allBlogPosts.filter((p) => p.fresh);
  const popularPosts = allBlogPosts.filter((p) => p.popular);
  const editorsPicks = allBlogPosts.filter((p) => p.editorsPick);

  const caseHighlights = [
    {
      slug: "datawisp",
      title: "Datawisp",
      metric: "$3.6M Seed Round",
      headline: "How our redesign helped a no-code data analysis platform raise a $3.6M seed round",
      img: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/68c94276e0835062c5bdb31a_img-case-01.webp",
      industry: "Data Analytics",
    },
    {
      slug: "floret",
      title: "Floret",
      metric: "$2.3M Investment",
      headline: "From initial concept to a $2.3 million investment round with MVP design",
      img: "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b248adcfc510fc6c6d_697b712406148079bfae472f_floret-thumbnail-image-02.webp",
      industry: "Supply Chain",
    },
    {
      slug: "zaplify",
      title: "Zaplify",
      metric: "3x Response Rate",
      headline: "Full UI overhaul that streamlined outreach workflows and tripled user engagement",
      img: "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370da31f235a540aa841b_697b712406148079bfae47e4_zaplify-case-study-actions-08.webp",
      industry: "Sales Automation",
    },
  ];

  return (
    <div className="blog-page-root">
      <Header />
      <main className="blog-main-content">
        {/* ================================================================
            SECTION 1: HERO & TOP NAVIGATION (Eleken Structure)
            ================================================================ */}
        <section className="blog-section blog-section--hero">
          <div className="container">
            {/* 2-col Title Wrap: Left H1 + Subtitle, Right Category Nav */}
            <div className="blog-title-wrap">
              <div className="blog-title-col">
                <h1 className="blog-h1">SaaS UI/UX design blog</h1>
                <p className="blog-subtitle">
                  Resources to help you design, fix{" "}
                  <span className="blog-subtitle-dim">or scale your product</span>
                </p>
              </div>

              <div className="blog-nav-col">
                <ul className="blog-navigation" role="list">
                  <li className="blog-nav-item">
                    <a
                      href="/blog"
                      className="blog-nav-link blog-nav-link--active"
                    >
                      All topics
                    </a>
                  </li>
                  {blogCategories
                    .filter((c) => c.slug !== "all")
                    .map((cat) => (
                      <li key={cat.slug} className="blog-nav-item">
                        <a
                          href={`/category/${cat.slug}`}
                          className="blog-nav-link"
                        >
                          {cat.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* 2-col Hero Row: Large Card Left, 4 Compact Horizontal Cards Right */}
            <div className="blog-main-row">
              {/* Left Column: Big Featured Hero Card */}
              <div className="blog-col blog-col--featured">
                <article className="blog-card blog-card--lg">
                  <a
                    href={`/blog/${featuredPost.slug}`}
                    className="blog-card-link-block"
                  >
                    <div className="blog-card-img-wrap blog-card-img-wrap--lg">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        loading="eager"
                        className="blog-card-img"
                      />
                    </div>

                    <div className="blog-card-meta-line">
                      <span className="blog-category-tag">
                        {featuredPost.category}
                      </span>
                      <span className="blog-meta-bullet">•</span>
                      <span className="blog-date">{featuredPost.date}</span>
                      <span className="blog-meta-bullet">•</span>
                      <span className="blog-time">
                        <Clock size={12} /> {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="blog-card-title--lg">{featuredPost.title}</h2>
                    <p className="blog-card-excerpt--lg">
                      {featuredPost.excerpt}
                    </p>

                    <div className="blog-card-action">
                      <span className="blog-read-btn">
                        Read article <ArrowRight size={14} />
                      </span>
                    </div>
                  </a>
                </article>
              </div>

              {/* Right Column: Stack of 4 Horizontal Compact Cards */}
              <div className="blog-col blog-col--stack">
                <div className="blog-cards-stack">
                  {heroStackPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="blog-card blog-card--horizontal"
                    >
                      <a
                        href={`/blog/${post.slug}`}
                        className="blog-card-link--horizontal"
                      >
                        <div className="blog-card-text-wrap">
                          <div className="blog-card-meta-line">
                            <span className="blog-category-tag">
                              {post.category}
                            </span>
                            <span className="blog-meta-bullet">•</span>
                            <span className="blog-date">{post.date}</span>
                          </div>

                          <h3 className="blog-card-title--sm">{post.title}</h3>

                          <div className="blog-card-read-hint">
                            <span>Read article</span>
                            <ArrowUpRight size={13} />
                          </div>
                        </div>

                        {post.thumbnail && (
                          <div className="blog-card-img-wrap blog-card-img-wrap--sm">
                            <img
                              src={post.thumbnail}
                              alt={post.title}
                              loading="lazy"
                              className="blog-card-img-sm"
                            />
                          </div>
                        )}
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 2: FRESH (Eleken Structure)
            ================================================================ */}
        <section className="blog-section blog-section--fresh">
          <div className="container">
            <div className="blog-section-header">
              <div className="blog-section-title-wrap">
                <h2 className="blog-section-h2">Fresh</h2>
                <span className="blog-section-badge">Latest Publications</span>
              </div>
              <a href="/blog" className="blog-section-link">
                View all latest <ArrowRight size={14} />
              </a>
            </div>

            <div className="blog-fresh-grid">
              {freshPosts.map((post) => (
                <article
                  key={post.slug}
                  className="blog-card blog-card--vertical"
                >
                  <a
                    href={`/blog/${post.slug}`}
                    className="blog-card-vertical-link"
                  >
                    <div className="blog-vertical-meta">
                      <span className="blog-category-tag">
                        {post.category}
                      </span>
                      <span className="blog-date">{post.date}</span>
                    </div>

                    <h3 className="blog-vertical-title">{post.title}</h3>

                    <p className="blog-vertical-excerpt">{post.excerpt}</p>

                    <div className="blog-vertical-footer">
                      <span className="blog-read-link">
                        Read article <ArrowRight size={12} />
                      </span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 3: POPULAR NOW (Eleken Structure)
            ================================================================ */}
        <section className="blog-section blog-section--popular">
          <div className="container">
            <div className="blog-section-header">
              <div className="blog-section-title-wrap">
                <h2 className="blog-section-h2">Popular now</h2>
                <span className="blog-section-badge">Most Read by Founders</span>
              </div>
            </div>

            <div className="blog-popular-grid">
              {popularPosts.map((post) => (
                <article
                  key={post.slug}
                  className="blog-card blog-card--popular-item"
                >
                  <a
                    href={`/blog/${post.slug}`}
                    className="blog-card-popular-link"
                  >
                    {post.image && (
                      <div className="blog-popular-img-wrap">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          className="blog-popular-img"
                        />
                      </div>
                    )}

                    <div className="blog-popular-body">
                      <div className="blog-card-meta-line">
                        <span className="blog-category-tag">
                          {post.category}
                        </span>
                        <span className="blog-meta-bullet">•</span>
                        <span className="blog-time">
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>

                      <h3 className="blog-popular-title">{post.title}</h3>

                      <p className="blog-popular-excerpt">{post.excerpt}</p>

                      <div className="blog-popular-footer">
                        <span className="blog-read-link">
                          Read article <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>

            {/* Embedded Special Resource Banner (Matching Eleken's SaaS Bottom Line Book Feature) */}
            <div className="blog-resource-banner">
              <div className="blog-resource-content">
                <div className="blog-resource-pill">
                  <BookOpen size={14} /> Comprehensive Guide
                </div>
                <h3 className="blog-resource-title">
                  Improving Your SaaS Bottom Line: How UX Design Directly Affects Growth Metrics
                </h3>
                <p className="blog-resource-desc">
                  Learn how surgical improvements to core user flows reduce churn, accelerate activation, and compound customer lifetime value.
                </p>
                <a
                  href="/blog/improving-your-saas-bottom-line"
                  className="blog-resource-cta"
                >
                  Read full guide <ArrowRight size={14} />
                </a>
              </div>
              <div className="blog-resource-visual">
                <img
                  src="https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/66573875208163b79258b999_img-book-01.webp"
                  alt="SaaS Bottom Line Guide"
                  loading="lazy"
                  className="blog-resource-book-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 4: CLIENT IMPACT / CASES (Eleken Case Section)
            ================================================================ */}
        <section className="blog-section blog-section--cases">
          <div className="container">
            <div className="blog-cases-row">
              {/* Left Column: Heading, pitch & CTA to cases */}
              <div className="blog-cases-pitch-col">
                <div className="blog-cases-badge">
                  <Sparkles size={14} /> Proven Results
                </div>
                <h2 className="blog-cases-h2">
                  We’ve helped improve and scale 200+ SaaS products
                </h2>
                <p className="blog-cases-desc">
                  When your product is easy to use, the results speak for themselves. Explore real-world case studies of venture-backed software redesigns.
                </p>
                <div className="blog-cases-cta-wrap">
                  <a href="/cases" className="blog-cases-primary-btn">
                    More product design examples <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              {/* Right Column: High-Impact Case Cards */}
              <div className="blog-cases-cards-col">
                <div className="blog-cases-cards-grid">
                  {caseHighlights.map((c) => (
                    <a
                      key={c.slug}
                      href={`/cases/${c.slug}`}
                      className="blog-case-card"
                    >
                      <div className="blog-case-card__img-wrap">
                        <img
                          src={c.img}
                          alt={c.title}
                          loading="lazy"
                          className="blog-case-card__img"
                        />
                        <span className="blog-case-card__metric">
                          {c.metric}
                        </span>
                      </div>
                      <div className="blog-case-card__body">
                        <div className="blog-case-card__industry">
                          {c.industry}
                        </div>
                        <h3 className="blog-case-card__headline">
                          {c.headline}
                        </h3>
                        <span className="blog-case-card__link-text">
                          View case study <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 5: EDITOR’S PICKS (Eleken Structure)
            ================================================================ */}
        <section className="blog-section blog-section--editors">
          <div className="container">
            <div className="blog-section-header">
              <div className="blog-section-title-wrap">
                <h2 className="blog-section-h2">Editor’s picks</h2>
                <span className="blog-section-badge">Essential Reading</span>
              </div>
            </div>

            <div className="blog-editors-grid">
              {editorsPicks.map((post) => (
                <article
                  key={post.slug}
                  className="blog-card blog-card--editor"
                >
                  <a
                    href={`/blog/${post.slug}`}
                    className="blog-card-editor-link"
                  >
                    {post.image && (
                      <div className="blog-editor-img-wrap">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          className="blog-editor-img"
                        />
                      </div>
                    )}

                    <div className="blog-editor-body">
                      <div className="blog-card-meta-line">
                        <span className="blog-category-tag">
                          {post.category}
                        </span>
                        <span className="blog-meta-bullet">•</span>
                        <span className="blog-time">
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>

                      <h3 className="blog-editor-title">{post.title}</h3>

                      <p className="blog-editor-excerpt">{post.excerpt}</p>

                      <div className="blog-editor-footer">
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
            SECTION 6: BOTTOM CONVERSION CTA (Clay Styled)
            ================================================================ */}
        <CtaBanner
          title="Need design help on your SaaS platform?"
          subtitle="Start with a risk-free 3-day trial and get a dedicated senior product designer embedded into your team."
          buttonText="Start 3-day trial"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
