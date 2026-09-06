import React from "react";
import { Button } from "@/components/ui/button/Button";
import "./final-pitch.css";

export const FinalPitchSection: React.FC = () => {
  return (
    <section className="final-pitch-section">
      <div className="container">
        <div className="final-pitch-card">
          <h2 className="final-pitch-title">
            We get hired to design, fix or scale SaaS products
          </h2>
          <p className="final-pitch-sub">
            Whether you are looking to secure funding for your new product, redesign your SaaS to increase profitability, or get a remote design team for faster growth, mindsCraft is the right choice for continuous product development.
          </p>
          <div style={{ marginTop: "16px" }}>
            <Button href="#trial" variant="accent" size="lg">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
