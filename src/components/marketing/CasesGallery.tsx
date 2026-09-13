"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button/Button";
import { allCases, CaseStudy } from "@/content/all-cases";
import { casesIndustryFilters, industryIntros } from "@/content/cases-page-data";
import "./cases-gallery.css";

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="case-btn__arrow"
    aria-hidden="true"
  >
    <path
      d="M3.333 8h9.334M8.667 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CasesGallery: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All Cases");
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const filteredCases = useMemo(() => {
    if (selectedIndustry === "All Cases") {
      return allCases;
    }
    const filterTerm = selectedIndustry.toLowerCase();

    return allCases.filter((c) => {
      const ind = (c.industry || "").toLowerCase();
      if (ind === filterTerm) return true;
      const tokens = ind.split(/[,/&]+/).map((s) => s.trim());
      if (tokens.includes(filterTerm)) return true;

      // For "AI", use word boundary so words like "analysis" or "raise" don't match
      if (filterTerm === "ai") {
        const aiRegex = /\b(ai|artificial intelligence)\b/i;
        return (
          aiRegex.test(ind) ||
          aiRegex.test(c.text || "") ||
          aiRegex.test(c.headline || "") ||
          aiRegex.test(c.title || "")
        );
      }

      const escaped = filterTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const wordRegex = new RegExp(`\\b${escaped}\\b`, "i");
      return (
        wordRegex.test(ind) ||
        wordRegex.test(c.text || "") ||
        wordRegex.test(c.headline || "")
      );
    });
  }, [selectedIndustry]);

  const visibleCases = filteredCases.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCases.length;

  const handleSelectIndustry = (industry: string) => {
    setSelectedIndustry(industry);
    setVisibleCount(8); // Reset count on filter change
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const activeIntro =
    selectedIndustry !== "All Cases" ? industryIntros[selectedIndustry] : null;

  return (
    <section className="cases-page-wrapper">
      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="cases-breadcrumbs-wrap">
        <div className="container">
          <ol className="cases-breadcrumbs-list">
            <li className="cases-breadcrumb-item">
              <Link href="/" className="cases-breadcrumb-link">
                Home
              </Link>
            </li>
            <li className="cases-breadcrumb-separator" aria-hidden="true">
              /
            </li>
            <li className="cases-breadcrumb-item cases-breadcrumb-item--active" aria-current="page">
              Cases
            </li>
          </ol>
        </div>
      </nav>

      <div className="container">
        {/* 2. Page Header Split (Title & Description vs. Choose Your Industry) */}
        <div className="cases-header-split">
          <div className="cases-header-left">
            <h1 className="cases-main-title">
              UX case studies <br className="cases-title-break" />
              for every SaaS niche
            </h1>
            <p className="cases-main-desc">
              A collection of all our UX case studies across industries, business models, and design challenges. See how we tailor design solutions that solve real problems and drive product growth.
            </p>
          </div>

          <div className="cases-header-right">
            <span className="cases-filter-label">Choose your industry:</span>
            <div className="cases-filter-pill-grid" role="group" aria-label="Filter cases by industry">
              {casesIndustryFilters.map((industry) => {
                const isActive = selectedIndustry === industry;
                return (
                  <button
                    key={industry}
                    type="button"
                    onClick={() => handleSelectIndustry(industry)}
                    className={`cases-filter-pill ${
                      isActive ? "cases-filter-pill--active" : ""
                    }`}
                    aria-pressed={isActive}
                  >
                    {industry}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. Selected Industry Overview Details Box */}
        {activeIntro && (
          <div className="cases-industry-intro" role="region" aria-label={`${activeIntro.title} overview`}>
            <h2 className="cases-industry-intro__title">{activeIntro.title}</h2>
            <p className="cases-industry-intro__desc">{activeIntro.description}</p>
          </div>
        )}

        {/* 4. Case Studies Stream (Horizontal 2-Column Cards + In-Stream Promos) */}
        <div className="cases-stream" role="feed" aria-label="UX Case Studies List">
          {visibleCases.map((caseStudy, index) => {
            const sanitizedText = caseStudy.text.replace(/Eleken/gi, "mindsCraft");
            const tags = caseStudy.industry
              ? caseStudy.industry.split(",").map((t) => t.trim())
              : ["SaaS"];

            return (
              <React.Fragment key={caseStudy.slug}>
                {/* Regular Case Study Row */}
                <article className="case-row-card">
                  <Link
                    href={`/cases/${caseStudy.slug}`}
                    className="case-row-card__link"
                    aria-label={`View ${caseStudy.title} case study`}
                  >
                    {/* Left Column: Metadata & Narrative */}
                    <div className="case-row-card__info">
                      <div className="case-row-card__tags">
                        {tags.map((tag) => (
                          <span key={tag} className="case-tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="case-row-card__title">{caseStudy.title}</h3>

                      <p className="case-row-card__desc">{sanitizedText}</p>

                      <div className="case-row-card__btn">
                        <span>Read case study</span>
                        <ArrowIcon />
                      </div>
                    </div>

                    {/* Right Column: Browser Window Mockup */}
                    <div className="case-row-card__visual-col">
                      <div className="case-browser-window">
                        <div className="case-browser-window__bar" aria-hidden="true">
                          <div className="case-browser-window__dots">
                            <span className="case-dot case-dot--red" />
                            <span className="case-dot case-dot--yellow" />
                            <span className="case-dot case-dot--green" />
                          </div>
                          <div className="case-browser-window__address">
                            {caseStudy.slug}.com
                          </div>
                        </div>

                        <div className="case-browser-window__viewport">
                          <img
                            src={caseStudy.img}
                            alt={`${caseStudy.title} user interface redesign`}
                            loading="lazy"
                            className="case-browser-window__img"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>

                {/* In-Stream Promo Banner 1 (After 4th item) */}
                {index === 3 && (
                  <aside className="cases-instream-cta" aria-label="UX Consultation Opportunity">
                    <div className="cases-instream-cta__inner">
                      <div className="cases-instream-cta__text">
                        <span className="cases-instream-cta__badge">Free 30-Min Strategy Call</span>
                        <h3 className="cases-instream-cta__headline">
                          Have a complex SaaS product and need UX direction?
                        </h3>
                        <p className="cases-instream-cta__sub">
                          Talk directly with our product design and engineering leads. We’ll review your product’s friction points and outline actionable conversion opportunities.
                        </p>
                        <Button href="/contact" variant="primary" size="md" icon={<ArrowIcon />}>
                          Book a discovery call
                        </Button>
                      </div>

                      <div className="cases-instream-cta__visual" aria-hidden="true">
                        <div className="cases-instream-cta__graphic">
                          <div className="cases-instream-cta__circle" />
                          <div className="cases-instream-cta__stat-box">
                            <span className="cases-instream-cta__stat-num">48h</span>
                            <span className="cases-instream-cta__stat-label">UX Audit Turnaround</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                )}

                {/* In-Stream Promo Banner 2 (After 8th item) */}
                {index === 7 && (
                  <aside className="cases-instream-cta cases-instream-cta--trial" aria-label="3-Day Trial Opportunity">
                    <div className="cases-instream-cta__inner">
                      <div className="cases-instream-cta__text">
                        <span className="cases-instream-cta__badge">Risk-Free Validation</span>
                        <h3 className="cases-instream-cta__headline">
                          Test our velocity and design quality with a 3-day trial
                        </h3>
                        <p className="cases-instream-cta__sub">
                          Pick 1–2 real user flows from your product backlog. We’ll design them in Figma and present production options before you commit to a subscription.
                        </p>
                        <Button href="#trial" variant="primary" size="md" icon={<ArrowIcon />}>
                          Start 3-day trial
                        </Button>
                      </div>

                      <div className="cases-instream-cta__visual" aria-hidden="true">
                        <div className="cases-instream-cta__graphic">
                          <div className="cases-instream-cta__circle cases-instream-cta__circle--dark" />
                          <div className="cases-instream-cta__stat-box">
                            <span className="cases-instream-cta__stat-num">100%</span>
                            <span className="cases-instream-cta__stat-label">Free Trial Period</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* 5. Load More Controls */}
        {hasMore && (
          <div className="cases-load-more-wrap">
            <p className="cases-count-caption">
              Showing {visibleCases.length} of {filteredCases.length} case studies
            </p>
            <Button
              variant="primary"
              size="md"
              onClick={handleLoadMore}
              icon={<ArrowIcon />}
            >
              Load more case studies
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
