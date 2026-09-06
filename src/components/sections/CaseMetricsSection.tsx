import React from "react";
import { caseStudiesData } from "@/content/case-studies";
import { Button } from "@/components/ui/button/Button";
import "./case-metrics.css";

export const CaseMetricsSection: React.FC = () => {
  return (
    <section id="cases" className="case-metrics-section">
      <div className="container">
        <div className="section-header">
          <h2 className="h2">We’ve helped improve and scale 200+ SaaS products</h2>
          <p className="body-lead text-muted" style={{ marginTop: "12px" }}>
            When your product is easy to use, the results speak for themselves.
          </p>
          <div style={{ marginTop: "24px" }}>
            <Button href="/cases" variant="subtle" size="sm">
              More product redesign examples →
            </Button>
          </div>
        </div>

        <div className="case-grid">
          {caseStudiesData.map((item) => (
            <div key={item.id} className="case-metric-card">
              <div>
                <div className="case-metric-card__num">{item.number}</div>
                <h3 className="case-metric-card__title">{item.headline}</h3>
                <p className="case-metric-card__desc">{item.description}</p>
              </div>
              <a href={item.link} className="case-metric-card__link">
                Explore case study →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
