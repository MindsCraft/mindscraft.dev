import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allCases } from "@/content/all-cases";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { CaseCard } from "@/components/marketing/CaseCard";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { Button } from "@/components/ui/button/Button";
import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import "./case-detail.css";

export function generateStaticParams() {
  return allCases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = allCases.find((c) => c.slug === slug);
  if (!item) return { title: "Case Study Not Found | mindsCraft" };

  return {
    title: `${item.title} UX Case Study — mindsCraft`,
    description: item.text,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = allCases.find((c) => c.slug === slug);

  if (!item) {
    notFound();
  }

  // Find 3 other related cases
  const relatedCases = allCases
    .filter((c) => c.slug !== slug && (c.industry === item.industry || true))
    .slice(0, 3);

  // Filter out the hero image from additional visuals to prevent duplication
  const galleryVisuals = (item.visuals || []).filter(
    (v) => v.src !== item.img && !v.src.includes('logo')
  );

  return (
    <>
      <Header />
      <main className="case-detail-page">
        {/* Breadcrumb & Navigation */}
        <div className="case-detail__topbar">
          <div className="container">
            <a href="/cases" className="case-back-link">
              <ArrowLeft size={16} /> Back to all case studies
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <section className="case-detail__hero">
          <div className="container">
            <div className="case-detail__hero-content">
              <span className="case-detail__badge">{item.industry}</span>
              <h1 className="case-detail__title">{item.title}</h1>
              <p className="case-detail__headline">{item.headline || item.text}</p>

              <div className="case-detail__actions">
                <Button href="/pricing#trial" variant="primary" size="md">
                  Book a 3-day trial
                </Button>
                <Button href="/contact" variant="subtle" size="md">
                  Discuss your project
                </Button>
              </div>
            </div>

            {/* Featured Hero Mockup Image */}
            {item.img && (
              <div className="case-detail__image-frame">
                <img
                  src={item.img}
                  alt={`${item.title} interface showcase`}
                  className="case-detail__hero-image"
                />
              </div>
            )}
          </div>
        </section>

        {/* Case Narrative & Content Breakdown */}
        <section className="case-detail__body-section">
          <div className="container container--narrow">
            {item.quote && (
              <div className="case-detail__quote-card">
                <Quote size={32} className="text-accent" />
                <blockquote className="case-detail__quote-text">{item.quote}</blockquote>
              </div>
            )}

            <div className="case-detail__narrative">
              <h2>Project Overview & Objectives</h2>
              {item.summary?.map((paragraph, idx) => (
                <p key={idx} className="case-detail__paragraph">
                  {paragraph}
                </p>
              ))}

              <h2 className="mt-xl">Key Milestones & Deliverables</h2>
              <div className="case-detail__sections-grid">
                {item.sections?.map((sec, idx) => (
                  <div key={idx} className="case-detail__section-pill">
                    <CheckCircle2 size={18} className="text-accent" />
                    <span>{sec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Rich Visual Content Gallery from eleken.co */}
        {galleryVisuals.length > 0 && (
          <section className="case-detail__gallery-section">
            <div className="container">
              <div className="section-intro text-center">
                <span className="page-hero__badge">Design Artifacts</span>
                <h2 className="section-title">UI & Product Showcase</h2>
                <p className="section-desc">
                  Real screens, component workflows, and redesigned interfaces crafted by our team.
                </p>
              </div>

              <div className="case-gallery-grid">
                {galleryVisuals.map((visual, idx) => (
                  <div key={idx} className="case-gallery-item">
                    <img
                      src={visual.src}
                      alt={visual.alt || `${item.title} screen design ${idx + 1}`}
                      loading="lazy"
                      className="case-gallery-image"
                    />
                    {visual.alt && (
                      <p className="case-gallery-caption">{visual.alt}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Impact summary */}
        <section className="case-detail__takeaway-section">
          <div className="container container--narrow">
            <div className="case-detail__takeaway-card">
              <h3>The mindsCraft Impact</h3>
              <p>
                By deploying a dedicated senior product designer directly into {item.title}&apos;s Slack and engineering workflow, we eliminated UX bottlenecks, modernized the visual architecture, and accelerated their release cadence.
              </p>
            </div>
          </div>
        </section>

        {/* Related Cases */}
        <section className="case-detail__related-section">
          <div className="container">
            <div className="section-intro text-center">
              <span className="page-hero__badge">Explore More</span>
              <h2 className="section-title">Related SaaS Case Studies</h2>
            </div>
            <div className="cases-grid">
              {relatedCases.map((related) => (
                <CaseCard key={related.slug} caseStudy={related} />
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title={`Ready for a redesign like ${item.title}?`}
          subtitle="Try mindsCraft with a risk-free 3-day trial. We work directly on your product backlog."
          buttonText="Start 3-day trial"
          buttonHref="/pricing#trial"
        />
      </main>
      <Footer />
    </>
  );
}
