import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { aboutData } from "@/content/about-data";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import "./about.css";

export const metadata: Metadata = {
  title: "About Us — Pragmatic SaaS Product Design Agency | mindsCraft",
  description:
    "We are mindsCraft: a pragmatic product design agency born to improve design services for SaaS startups and scaleups.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="About mindsCraft"
          title="We are mindsCraft, a pragmatic product design agency"
          description="We help SaaS founders and engineering teams turn complex software into clean, intuitive, and profitable digital products."
          stats={aboutData.stats.map((s) => ({ stat: s.number, label: s.label }))}
          primaryCtaText="Meet our team of experts"
          primaryCtaHref="/team-of-experts"
          secondaryCtaText="View case studies"
          secondaryCtaHref="/cases"
        />

        {/* Origin Story Section with Visual Award & Media */}
        <section className="about-story-section">
          <div className="container">
            <div className="about-story__grid">
              <div className="about-story__left">
                <span className="page-hero__badge">Our Story</span>
                <h2 className="section-title">Born to improve design services for SaaS</h2>
                <div className="about-clutch-badge-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/6986076bced239b1e43e4b75_top-cluthc-02.webp"
                    alt="Top Clutch Rated Design Agency"
                    className="about-clutch-badge"
                  />
                  <div className="about-clutch-info">
                    <strong>Top B2B Design Partner</strong>
                    <span>50+ verified 5-star founder reviews</span>
                  </div>
                </div>
              </div>
              <div className="about-story__text">
                {aboutData.originStory.map((p, idx) => (
                  <p key={idx} className="about-story__p">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="about-principles-section">
          <div className="container">
            <div className="text-center">
              <span className="page-hero__badge">Core Principles</span>
              <h2 className="section-title">How we work differently</h2>
            </div>

            <div className="about-principles__grid">
              {aboutData.principles.map((pr, idx) => (
                <div key={idx} className="about-principle-card">
                  <span className="about-principle-number">0{idx + 1}</span>
                  <h3 className="about-principle-title">{pr.title}</h3>
                  <p className="about-principle-desc">{pr.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Band */}
        <section className="about-culture-band">
          <div className="container">
            <div className="about-culture-card">
              <div className="about-culture-content">
                <h2>A distributed team of senior SaaS specialists</h2>
                <p>
                  We operate 100% remotely across the US and Europe. Every designer on our team has vetted experience in product design, design systems, and frontend developer collaboration.
                </p>
                <div className="about-culture-badges">
                  <span className="culture-pill">
                    <CheckCircle2 size={16} className="text-accent" /> No Junior Experimentation
                  </span>
                  <span className="culture-pill">
                    <CheckCircle2 size={16} className="text-accent" /> Daily Real-Time Standups
                  </span>
                  <span className="culture-pill">
                    <CheckCircle2 size={16} className="text-accent" /> Overlap with US/EU Business Hours
                  </span>
                </div>
                <a href="/team-of-experts" className="about-culture-link">
                  See our designers and leads <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Ready to upgrade your SaaS design?"
          subtitle="Test our velocity, communication, and visual craftsmanship with a free 3-day trial."
          buttonText="Start 3-day trial"
          buttonHref="/pricing#trial"
        />
      </main>
      <Footer />
    </>
  );
}
