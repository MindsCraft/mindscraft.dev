"use client";

import React from "react";
import { comparisonData } from "@/content/comparison";
import { Tabs } from "@/components/ui/tabs/Tabs";
import { Button } from "@/components/ui/button/Button";
import "./comparison.css";

export const ComparisonSection: React.FC = () => {
  const tabItems = comparisonData.map((item) => ({
    id: item.id,
    label: item.pillar,
    content: (
      <div className="comparison-grid">
        <div className="matrix-card matrix-card--problem">
          <span className="matrix-card__tag">Alternative: {item.problem.party}</span>
          <h3 className="matrix-card__title">{item.problem.description}</h3>
        </div>
        <div className="matrix-card matrix-card--solution">
          <span className="matrix-card__tag text-accent">mindsCraft Solution</span>
          <h3 className="matrix-card__title">{item.solution.headline}</h3>
          <p className="matrix-card__desc">{item.solution.description}</p>
        </div>
      </div>
    ),
  }));

  return (
    <section className="comparison-section">
      <div className="container">
        <div className="section-header">
          <h2 className="h2">Why tech founders choose mindsCraft</h2>
          <p className="body-lead text-muted" style={{ marginTop: "12px" }}>
            Design agencies leave you with Figma files. Dev shops write code without UX insight. Freelancers disappear. We combine all three disciplines into one cohesive partnership.
          </p>
        </div>

        <Tabs items={tabItems} defaultTab="execution" />

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <Button href="#trial" variant="primary" size="lg">
            Get a dedicated partner
          </Button>
        </div>
      </div>
    </section>
  );
};
