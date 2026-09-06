"use client";

import React from "react";
import { fitScenariosData } from "@/content/fit-matrix";
import { Tabs } from "@/components/ui/tabs/Tabs";
import "./fit-matrix.css";

export const FitMatrixSection: React.FC = () => {
  const tabs = fitScenariosData.map((scenario) => ({
    id: scenario.id,
    label: scenario.category,
    content: (
      <div className="fit-card">
        <div className="fit-card__box fit-card__box--problem">
          <span className="fit-card__tag">Problem</span>
          <h3 className="fit-card__title">{scenario.problemTitle}</h3>
          <p className="fit-card__desc">{scenario.problemDescription}</p>
        </div>
        <div className="fit-card__box fit-card__box--solution">
          <span className="fit-card__tag text-accent">Solution</span>
          <h3 className="fit-card__title">{scenario.solutionTitle}</h3>
          <p className="fit-card__desc">{scenario.solutionDescription}</p>
        </div>
      </div>
    ),
  }));

  return (
    <section className="fit-matrix-section">
      <div className="container">
        <div className="section-header">
          <span className="caption text-accent">Scenarios</span>
          <h2 className="h2" style={{ marginTop: "8px" }}>When we’re the best fit</h2>
          <p className="body-lead text-muted" style={{ marginTop: "12px" }}>
            If you find yourself in one of the situations described below, our service is exactly what you need.
          </p>
        </div>

        <Tabs items={tabs} defaultTab="hiring" />
      </div>
    </section>
  );
};
