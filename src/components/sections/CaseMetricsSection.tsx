"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import "./case-metrics.css";

interface CaseItem {
  id: string;
  num: string;
  title: string;
  description: string;
  metric: string;
  industry: string;
  img: string;
  link: string;
}

const casesData: CaseItem[] = [
  {
    id: "datawisp",
    num: "/ 01",
    title: "Datawisp secures $3.6M in seed funding",
    description:
      "We redesigned Datawisp’s core UX to make its data logic builder self-explanatory, helping non-technical users analyze millions of records.",
    metric: "$3.6M Seed Round",
    industry: "Data Analytics",
    img: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/69b013e378892da90951f16c_img-case-datawisp-slide.webp",
    link: "/cases/datawisp",
  },
  {
    id: "aampe",
    num: "/ 02",
    title: "Aampe raises $18M after platform redesign",
    description:
      "We redesigned Aampe so marketers could run AI-powered campaigns on their own, removing engineering bottlenecks and tripling retention.",
    metric: "$18M Series A",
    industry: "AI Marketing",
    img: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/69b013e3473ded196a584a82_img-case-aampe-slide.webp",
    link: "/cases/aampe",
  },
  {
    id: "myinterview",
    num: "/ 03",
    title: "MyInterview fixes 90% candidate drop-off with new UX",
    description:
      "We rebuilt the candidate evaluation flow to eliminate candidate friction, winning enterprise contracts and scaling candidate completions.",
    metric: "90% Drop-off Fixed",
    industry: "HR Tech",
    img: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/68d53246a2dde26b3db4f2e7_mylnterview.webp",
    link: "/cases/myinterview",
  },
  {
    id: "nworx",
    num: "/ 04",
    title: "Nworx increases user satisfaction by 200% after revamp",
    description:
      "We restructured Nworx’s leadership LMS interface, aligning it with user workflows and cutting support tickets across key enterprise cohorts.",
    metric: "+200% Satisfaction",
    industry: "EdTech & LMS",
    img: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/69b013e4d474eed899dfab52_img-case-nworx-slide.webp",
    link: "/cases/nworx",
  },
];

export const CaseMetricsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance every 5 seconds unless paused by mouse hover
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % casesData.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  const activeCase = casesData[activeIndex];

  return (
    <section
      id="cases"
      className="case-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <div className="case-slider-row">
          {/* ============================================================
              LEFT COLUMN: Header, CTA & Synchronized Case List
              ============================================================ */}
          <div className="case-slider-col case-slider-col--left">
            <div className="card-lg-case">
              {/* Header Title Area */}
              <div className="case-header-content">
                <span className="case-section-badge">Proven Results</span>
                <h2 className="case-section-h2">
                  We’ve helped improve and scale 200+ SaaS products
                </h2>
                <p className="case-section-desc">
                  When your product is easy to use, the results speak for themselves.
                </p>
                <div className="case-btn-wrap">
                  <a href="/cases" className="case-primary-btn">
                    More product redesign examples <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              {/* Synchronized 4-Item Tab List */}
              <div className="slider-case-list">
                {casesData.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div
                      key={item.id}
                      className={`slider-case-item ${isActive ? "slider-case-item--active" : ""}`}
                      onClick={() => setActiveIndex(index)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select case ${item.title}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveIndex(index);
                        }
                      }}
                    >
                      <div className="slider-case-item__header">
                        <span className="slider-case-num">{item.num}</span>
                        <h3 className="slider-case-title">{item.title}</h3>
                      </div>
                      {isActive && (
                        <p className="slider-case-desc">{item.description}</p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Segmented Progress Indicators (Dots / Bars) */}
              <div className="slider-case-dots-wrap">
                {casesData.map((_, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={index}
                      type="button"
                      className={`slider-case-dot ${isActive ? "slider-case-dot--active" : ""}`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <div className="slider-case-dot__progress" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ============================================================
              RIGHT COLUMN: Synchronized Visual Showcase & Explore Trigger
              ============================================================ */}
          <div className="case-slider-col case-slider-col--right">
            <div className="slider-case-preview-frame">
              <a
                href={activeCase.link}
                className="card-case-image-link"
                aria-label={`Explore ${activeCase.title} case study`}
              >
                {/* Metric pill on top */}
                <div className="case-preview-metric-tag">
                  <span className="case-preview-metric-val">{activeCase.metric}</span>
                  <span className="case-preview-metric-sep">•</span>
                  <span className="case-preview-metric-ind">{activeCase.industry}</span>
                </div>

                {/* Software Interface Preview Screen */}
                <div className="case-preview-image-container">
                  <img
                    key={activeCase.id}
                    src={activeCase.img}
                    alt={activeCase.title}
                    className="case-preview-image"
                    loading="lazy"
                  />
                </div>

                {/* Interactive Floating Hover "Explore" Badge */}
                <div className="case-hover-explore-badge">
                  <span>Explore case study</span>
                  <ArrowUpRight size={14} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
