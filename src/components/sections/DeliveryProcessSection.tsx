import React from "react";
import { deliveryProcessData } from "@/content/process";
import "./process.css";

export const DeliveryProcessSection: React.FC = () => {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <span className="caption text-accent">Process</span>
          <h2 className="h2" style={{ marginTop: "8px" }}>A battle-tested process, perfected for SaaS</h2>
          <p className="body-lead text-muted" style={{ marginTop: "12px" }}>
            Start small with a trial, validate with research, iterate screens quickly, then smoothly hand off to developers with ongoing support.
          </p>
        </div>

        <div className="process-grid">
          {deliveryProcessData.map((step) => (
            <div key={step.number} className="process-card">
              <div>
                <div className="process-card__header">
                  <span className="process-card__num">{step.number}</span>
                  <h3 className="process-card__title">{step.name}</h3>
                </div>
                <p className="process-card__desc" style={{ marginTop: "12px" }}>
                  {step.description}
                </p>
              </div>

              <div>
                <div className="caption" style={{ marginBottom: "8px" }}>
                  You get:
                </div>
                <div className="process-card__deliverables">
                  {step.deliverables.map((item) => (
                    <span key={item} className="deliverable-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
