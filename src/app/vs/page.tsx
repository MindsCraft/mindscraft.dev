import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { allComparisonsList } from "@/content/comparisons-data";
import { ArrowRight } from "lucide-react";
import "./vs.css";

export const metadata: Metadata = {
  title: "mindsCraft vs Alternatives — Toptal, In-House, and Traditional Agencies",
  description:
    "Compare mindsCraft's dedicated SaaS design subscription model against Toptal freelancers, in-house hiring, and traditional design agencies.",
};

export default function ComparisonsHubPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Compare Solutions"
          title="How mindsCraft compares to design alternatives"
          description="Evaluate the trade-offs of hiring in-house, working with traditional design agencies, or hiring through freelancer platforms like Toptal."
          stats={[
            { stat: "50%", label: "Cost Savings vs Toptal" },
            { stat: "3 Months", label: "Time Saved vs In-House Hiring" },
            { stat: "0 hrs", label: "Bureaucracy vs Agencies" },
          ]}
          primaryCtaText="Start 3-day free trial"
          primaryCtaHref="/pricing#trial"
        />

        <section className="vs-list-section">
          <div className="container">
            <div className="vs-grid">
              {allComparisonsList.map((comp) => (
                <a key={comp.slug} href={`/vs/${comp.slug}`} className="vs-card">
                  <span className="vs-card__badge">{comp.badge}</span>
                  <h2 className="vs-card__title">{comp.title}</h2>
                  <p className="vs-card__desc">{comp.heroDescription}</p>

                  <div className="vs-card__summary">
                    <strong>Key Differentiator:</strong>
                    <p>{comp.whyChoosePoints[0]?.desc}</p>
                  </div>

                  <span className="vs-card__link">
                    Read full comparison <ArrowRight size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title="See the difference in a free 3-day trial"
          subtitle="Work with an embedded senior SaaS designer on your actual product backlog before committing."
          buttonText="Start 3-day trial"
          buttonHref="/pricing#trial"
        />
      </main>
      <Footer />
    </>
  );
}
