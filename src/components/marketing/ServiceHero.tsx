"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import "./service-hero.css";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface VisualShowcaseData {
  beforeImage?: string;
  afterImage?: string;
  label?: string;
  showcaseImages?: { src: string; caption: string }[];
}

export interface ServiceHeroProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  visualShowcase?: VisualShowcaseData;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  badge = "Product Redesign",
  title,
  description,
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: badge },
  ],
  primaryCtaText = "Start 3-day free trial",
  primaryCtaHref = "/pricing#trial",
  secondaryCtaText = "Check portfolio",
  secondaryCtaHref = "#case-studies",
  visualShowcase,
}) => {
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");

  const hasBeforeAfter =
    visualShowcase?.beforeImage && visualShowcase?.afterImage;

  // Fallback showcase image if none provided
  const defaultDisplayImage =
    visualShowcase?.afterImage ||
    visualShowcase?.showcaseImages?.[0]?.src ||
    "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/68cbe92bade02c20b334ca1e_img-nworx-after.webp";

  return (
    <section className="service-hero">
      {/* 1. Breadcrumbs Bar */}
      <nav aria-label="Breadcrumb" className="service-hero__breadcrumbs-nav">
        <div className="container">
          <ol className="service-hero__breadcrumbs-list">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={idx} className="service-hero__breadcrumbs-item">
                  {crumb.href && !isLast ? (
                    <Link href={crumb.href} className="service-hero__breadcrumbs-link">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="service-hero__breadcrumbs-current" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && <span className="service-hero__breadcrumbs-divider">/</span>}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>

      {/* 2. Main Hero Two-Column Content */}
      <div className="container">
        <div className="service-hero__main-grid">
          {/* Left Column: Big Headline */}
          <div className="service-hero__left-col">
            <h1 className="service-hero__h1">{title}</h1>
          </div>

          {/* Right Column: Lead Text, CTAs, Clutch Rating */}
          <div className="service-hero__right-col">
            <p className="service-hero__lead">{description}</p>

            <div className="service-hero__buttons">
              <Button href={primaryCtaHref} variant="primary" size="md">
                {primaryCtaText}
              </Button>
              <Button
                href={secondaryCtaHref}
                variant="subtle"
                size="md"
                icon={<ArrowRight size={15} />}
              >
                {secondaryCtaText}
              </Button>
            </div>

            <div className="service-hero__trust-strip">
              <div className="service-hero__stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" stroke="none" />
                ))}
              </div>
              <span className="service-hero__trust-text">
                <strong>100+ reviews</strong> on Clutch.co (Rated 4.9/5)
              </span>
            </div>
          </div>
        </div>

        {/* 3. Hero Visual Transformation Showcase Box */}
        <div className="service-hero__showcase-wrapper">
          <div className="service-hero__window">
            <div className="service-hero__window-bar">
              <div className="service-hero__window-dots" aria-hidden="true">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
              </div>

              {hasBeforeAfter && (
                <div className="service-hero__toggle-group" role="tablist" aria-label="Before and After Redesign View">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "before"}
                    className={`service-hero__toggle-btn ${activeTab === "before" ? "is-active" : ""}`}
                    onClick={() => setActiveTab("before")}
                  >
                    Before
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "after"}
                    className={`service-hero__toggle-btn ${activeTab === "after" ? "is-active" : ""}`}
                    onClick={() => setActiveTab("after")}
                  >
                    After mindsCraft
                  </button>
                </div>
              )}
            </div>

            <div className="service-hero__image-frame">
              {hasBeforeAfter ? (
                <>
                  <img
                    src={activeTab === "after" ? visualShowcase.afterImage! : visualShowcase.beforeImage!}
                    alt={
                      activeTab === "after"
                        ? "Modernized UI after mindsCraft redesign"
                        : "Legacy clunky UI before redesign"
                    }
                    className="service-hero__showcase-img"
                  />
                  <span className={`service-hero__screen-badge service-hero__screen-badge--${activeTab}`}>
                    {activeTab === "after" ? "After mindsCraft Redesign" : "Before Redesign"}
                  </span>
                </>
              ) : (
                <img
                  src={defaultDisplayImage}
                  alt={visualShowcase?.label || title}
                  className="service-hero__showcase-img"
                />
              )}
            </div>

            <div className="service-hero__caption-bar">
              <span>{visualShowcase?.label || `${title} — Production UI Transformation`}</span>
              <span className="service-hero__caption-tag">Interactive Case View</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
