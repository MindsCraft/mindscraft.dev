import React from "react";
import "./service-partner-comparison.css";

export interface ComparisonPillar {
  title: string;
  problemTitle: string;
  problemDesc: string;
  solutionTitle: string;
  solutionDesc: string;
}

const DEFAULT_PILLARS: ComparisonPillar[] = [
  {
    title: "Flexibility",
    problemTitle: "Outsourcing vendors force rigid, slow contracts",
    problemDesc: "Traditional vendors operate with fixed scopes and slow change requests that paralyze early-stage velocity.",
    solutionTitle: "We adapt to your team's real sprint pace",
    solutionDesc: "We tailor our workflow to your roadmap. Pause, scale up, or pivot task priorities anytime with zero friction.",
  },
  {
    title: "Transparency",
    problemTitle: "Design agencies hide behind account managers",
    problemDesc: "You communicate through slow agency middlemen with zero real-time visibility into who is actually designing your screens.",
    solutionTitle: "Direct daily access to your dedicated designer",
    solutionDesc: "Your designer sits directly in your Slack, attends daily standups, and works live in your shared Figma workspace.",
  },
  {
    title: "Dedication",
    problemTitle: "Freelancers juggle multiple clients and vanish",
    problemDesc: "Freelance contractors often take on side gigs, miss critical deadlines, and drop context when crunch time arrives.",
    solutionTitle: "100% dedicated focus on your product",
    solutionDesc: "Your designer works exclusively on your product backlog, fully immersed in your user personas and product goals.",
  },
  {
    title: "SaaS Expertise",
    problemTitle: "Generalist designers lack B2B SaaS nuance",
    problemDesc: "Generalist agencies treat SaaS apps like marketing landing pages, ignoring data density, tables, and permissions.",
    solutionTitle: "Deep specialization in complex B2B SaaS UX",
    solutionDesc: "With 9+ years specializing in SaaS applications, we already master complex multi-tenant workflows and design systems.",
  },
];

export const ServicePartnerComparison: React.FC = () => {
  return (
    <section className="service-comparison-section">
      <div className="container">
        <div className="service-comparison__intro text-center">
          <span className="service-comparison__badge">Why mindsCraft</span>
          <h2 className="service-comparison__title">
            mindsCraft is a tailored design partner for SaaS startups
          </h2>
          <p className="service-comparison__subtitle">
            Freelancers bail. Agencies overprice. In-house takes forever to recruit. We keep what works from all of them, and eliminate what doesn’t.
          </p>
        </div>

        <div className="service-comparison__grid">
          {DEFAULT_PILLARS.map((pillar) => (
            <div key={pillar.title} className="service-comparison-card">
              <div className="service-comparison-card__tag">{pillar.title}</div>

              <div className="service-comparison-card__column service-comparison-card__column--problem">
                <span className="service-comparison-card__label service-comparison-card__label--problem">
                  The Problem
                </span>
                <h4 className="service-comparison-card__h4">{pillar.problemTitle}</h4>
                <p className="service-comparison-card__text">{pillar.problemDesc}</p>
              </div>

              <div className="service-comparison-card__divider" />

              <div className="service-comparison-card__column service-comparison-card__column--solution">
                <span className="service-comparison-card__label service-comparison-card__label--solution">
                  The mindsCraft Way
                </span>
                <h4 className="service-comparison-card__h4">{pillar.solutionTitle}</h4>
                <p className="service-comparison-card__text">{pillar.solutionDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
