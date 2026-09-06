import React from "react";
import { Button } from "@/components/ui/button/Button";
import "./onboarding.css";

export const OnboardingSection: React.FC = () => {
  return (
    <section className="onboarding-section">
      <div className="container">
        <div className="section-header">
          <span className="caption text-accent">Collaboration Flow</span>
          <h2 className="h2" style={{ marginTop: "8px" }}>
            So that your designer can just fit in, pick things up fast, and get them done
          </h2>
        </div>

        <div className="onboarding-grid">
          <div className="onboarding-card">
            <span className="onboarding-card__num">01</span>
            <h3 className="onboarding-card__title">Intro call</h3>
            <p className="onboarding-card__desc">
              You book a 30-minute chat to share where you’re stuck. We’ll walk you through how we can help.
            </p>
          </div>

          <div className="onboarding-card">
            <span className="onboarding-card__num">02</span>
            <h3 className="onboarding-card__title">Free trial</h3>
            <p className="onboarding-card__desc">
              You give us a real task. In three days, you see exactly how we think, communicate, and deliver.
            </p>
          </div>

          <div className="onboarding-card">
            <span className="onboarding-card__num">03</span>
            <h3 className="onboarding-card__title">Subscription kickoff</h3>
            <p className="onboarding-card__desc">
              Our model is month-to-month, with no long-term commitments, no overhead, and no waiting.
            </p>
          </div>

          <div className="onboarding-card">
            <span className="onboarding-card__num">04</span>
            <h3 className="onboarding-card__title">Scale up or down</h3>
            <p className="onboarding-card__desc">
              Need more speed? Add a second designer. Done for now? Pause anytime. We flex with your roadmap.
            </p>
          </div>
        </div>

        <div className="onboarding-banner">
          <div>
            <div className="onboarding-banner__title">Sounds good?</div>
            <div className="onboarding-banner__sub">Your dedicated SaaS designer is just one call away.</div>
          </div>
          <Button href="#trial" variant="primary" size="lg">
            Redesign with confidence
          </Button>
        </div>
      </div>
    </section>
  );
};
