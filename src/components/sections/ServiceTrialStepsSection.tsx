import React from "react";
import { Button } from "@/components/ui/button/Button";
import "./service-trial-steps.css";

export const ServiceTrialStepsSection: React.FC = () => {
  return (
    <section className="service-trial-steps-section">
      <div className="container">
        <div className="service-trial-steps__intro text-center">
          <span className="service-trial-steps__badge">Risk-Free Evaluation</span>
          <h2 className="service-trial-steps__title">
            Test our SaaS design expertise with a free 3-day trial
          </h2>
          <p className="service-trial-steps__subtitle">
            Hiring an agency on the web is often a gamble. We eliminate all the risk by letting you put our team to the test before committing.
          </p>
        </div>

        <div className="service-trial-steps__grid">
          <div className="service-trial-step-card">
            <span className="service-trial-step-card__num">01</span>
            <h3 className="service-trial-step-card__title">
              Pick a real challenge from your product
            </h3>
            <p className="service-trial-step-card__desc">
              Select an onboarding flow, complex dashboard view, or confusing workflow that has been hurting your activation or retention metrics.
            </p>
          </div>

          <div className="service-trial-step-card">
            <span className="service-trial-step-card__num">02</span>
            <h3 className="service-trial-step-card__title">
              Get production screens solved in Figma
            </h3>
            <p className="service-trial-step-card__desc">
              Your dedicated designer delivers revised UI screens, annotated user journeys, and component tokens within 3 business days.
            </p>
          </div>

          <div className="service-trial-step-card">
            <span className="service-trial-step-card__num">03</span>
            <h3 className="service-trial-step-card__title">
              Evaluate our speed and quality risk-free
            </h3>
            <p className="service-trial-step-card__desc">
              Experience our daily Slack presence, Loom walkthroughs, and design craft. If you’re thrilled, we roll straight into production. If not, you owe nothing.
            </p>
          </div>
        </div>

        <div className="service-trial-steps__action text-center">
          <Button href="/pricing#trial" variant="primary" size="lg">
            Start 3-day free trial
          </Button>
        </div>
      </div>
    </section>
  );
};
