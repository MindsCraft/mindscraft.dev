import React from "react";
import { Button } from "@/components/ui/button/Button";
import "./final-pitch.css";

export const FinalPitchSection: React.FC = () => {
  return (
    <section className="final-pitch-section">
      <div className="container">
        <div className="final-pitch-card">
          <h2 className="final-pitch-title">
            We get hired to design, build, and scale digital products
          </h2>
          <p className="final-pitch-sub">
            Whether you need to validate a new product concept, re-engineer a clunky tool to boost conversions, or secure an end-to-end partner for full-stack development and continuous support, mindsCraft is your full-cycle product team.
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
