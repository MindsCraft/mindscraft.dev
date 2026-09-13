import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { TrialSection } from "@/components/sections/TrialSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FitMatrixSection } from "@/components/sections/FitMatrixSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import { clientsData } from "@/content/clients";
import "./pricing.css";

export const metadata: Metadata = {
  title: "Flat & Simple Pricing — Dedicated SaaS Product Designers | mindsCraft",
  description:
    "Hire a senior product designer with SaaS expertise on a flat monthly subscription. Includes 3-day free trial, direct Slack collaboration, and zero long-term lock-in.",
};

export default function PricingPage() {
  const planFeatures = [
    "One full-time dedicated senior UI/UX designer",
    "40 hours per week devoted exclusively to your product",
    "Design Director peer review & quality oversight",
    "Direct real-time communication in your Slack & Figma",
    "Daily design updates and Loom video walkthroughs",
    "Unlimited design requests and rapid iterations",
    "Complete design system maintenance & developer tokens",
    "Full intellectual property transfer from day one",
    "Pause or cancel anytime with simple 14-day notice",
  ];

  const diffPoints = [
    {
      title: "Top 3% SaaS Design Talent",
      desc: "Every designer has vetted experience shipping complex data tables, dashboards, and multi-tenant platforms.",
    },
    {
      title: "Start in 24 Hours, Not Months",
      desc: "Skip the 3-month recruiting slog, recruiter commissions, and HR onboarding overhead.",
    },
    {
      title: "Zero Employment Risks",
      desc: "No health insurance, equipment allowances, 401k, PTO coverage, or severance liabilities.",
    },
    {
      title: "Scale or Pause On-Demand",
      desc: "Scale to multiple designers during intense feature pushes, or pause when your engineering backlog is full.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Transparent SaaS Pricing"
          title="Flat & simple pricing"
          description="Dedicated SaaS product design talent on a predictable monthly subscription. No hidden fees, no hourly tracking, no contracts."
          primaryCtaText="Start 3-day free trial"
          primaryCtaHref="#trial"
          stats={[
            { stat: "4.9 / 5.0", label: "Clutch Verified Rating" },
            { stat: "24 hrs", label: "Kickoff Turnaround" },
            { stat: "3 Days", label: "100% Free Trial" },
          ]}
        />

        {/* Client Logos Visual Trust Bar */}
        <section className="pricing-trust-bar">
          <div className="container">
            <p className="pricing-trust-label">Trusted by fast-growing SaaS startups & scaleups</p>
            <div className="pricing-logos-scroll">
              {clientsData.slice(0, 10).map((c) => (
                <div key={c.id} className="pricing-logo-item">
                  <img src={c.logo} alt={c.name} className="pricing-logo-img" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plan Card */}
        <section className="pricing-plan-section">
          <div className="container">
            <div className="pricing-card">
              <div className="pricing-card__header">
                <div>
                  <span className="pricing-card__tier">Full-Time Dedicated Designer</span>
                  <h2 className="pricing-card__title">Monthly Subscription</h2>
                  <p className="pricing-card__desc">
                    A senior product designer embedded directly in your team, working exclusively on your product backlog.
                  </p>
                </div>
                <div className="pricing-card__price-box">
                  <span className="pricing-card__currency">$</span>
                  <span className="pricing-card__amount">4,300</span>
                  <span className="pricing-card__period">/ month</span>
                </div>
              </div>

              <div className="pricing-card__body">
                <h3 className="pricing-card__features-title">What&apos;s included in your plan:</h3>
                <ul className="pricing-card__features-list">
                  {planFeatures.map((feat, idx) => (
                    <li key={idx} className="pricing-card__feature-item">
                      <Check size={18} className="text-accent" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-card__footer">
                <Button href="#trial" variant="primary" size="lg">
                  Test with a 3-day free trial <ArrowRight size={16} />
                </Button>
                <p className="pricing-card__footer-note">
                  No credit card required. Test our velocity and design quality on real product backlog tasks before paying.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Grid */}
        <section className="pricing-values-section">
          <div className="container">
            <div className="section-intro text-center">
              <span className="page-hero__badge">Why mindsCraft</span>
              <h2 className="section-title">How we differ from in-house hiring</h2>
            </div>

            <div className="pricing-diff-grid">
              {diffPoints.map((item, idx) => (
                <div key={idx} className="pricing-diff-card">
                  <span className="pricing-diff-number">0{idx + 1}</span>
                  <h3 className="pricing-diff-title">{item.title}</h3>
                  <p className="pricing-diff-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FitMatrixSection />
        <ComparisonSection />
        <div id="trial">
          <TrialSection />
        </div>
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
