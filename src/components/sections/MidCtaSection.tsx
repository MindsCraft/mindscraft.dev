import React from "react";
import { Button } from "@/components/ui/button/Button";
import "./mid-cta.css";

export const MidCtaSection: React.FC = () => {
  return (
    <section className="mid-cta-section">
      <div className="container">
        <div className="mid-cta-card">
          <h2 className="h2">Let’s make your SaaS product the best it can be.</h2>
          <p className="body-lead text-muted">
            You handle the vision and the development — we’ll handle the UX/UI. Ready to give it a go?
          </p>
          <div className="mid-cta-actions">
            <Button href="#trial" variant="primary" size="lg">
              Book your trial
            </Button>
            <Button href="#cases" variant="subtle" size="lg">
              See case studies →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
