import React from "react";
import { disqualifiersData } from "@/content/disqualifiers";
import { Button } from "@/components/ui/button/Button";
import "./disqualifier.css";

export const DisqualifierSection: React.FC = () => {
  return (
    <section className="disqualifier-section">
      <div className="container">
        <div className="disqualifier-card">
          <div className="text-center">
            <span className="caption text-accent">Boundary & Fit</span>
            <h2 className="h2" style={{ marginTop: "8px" }}>We are not for everyone</h2>
          </div>

          <div className="disqualifier-list">
            {disqualifiersData.map((rule) => (
              <div key={rule} className="disqualifier-item">
                <span className="disqualifier-mark">✕</span>
                <span>{rule}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="#cases" variant="subtle" size="md">
              View our case studies →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
