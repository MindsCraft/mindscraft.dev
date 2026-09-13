import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import "./service-plans.css";

export interface PlanTier {
  name: string;
  hours: string;
  badge?: string;
  idealFor: string;
  features: string[];
  isPopular?: boolean;
}

const DEFAULT_PLANS: PlanTier[] = [
  {
    name: "Part-time designer",
    hours: "20h / week",
    badge: "Steady Iteration",
    idealFor: "Best for ongoing UX maintenance and secondary product modules",
    features: [
      "1 dedicated part-time UI/UX designer",
      "Direct Slack & Figma collaboration",
      "Daily asynchronous updates & Loom reviews",
      "Figma design system maintenance",
      "Free 3-day risk-free evaluation",
    ],
  },
  {
    name: "Full-time designer",
    hours: "40h / week",
    badge: "Most Popular",
    idealFor: "Best for end-to-end product redesigns and high-velocity sprints",
    features: [
      "1 dedicated full-time senior SaaS designer",
      "Embedded in daily standups and sprint rituals",
      "UX audits, wireframes, and production UI",
      "Complete auto-layout Figma design system",
      "Engineering handoff and ongoing QA support",
      "Free 3-day risk-free evaluation",
    ],
    isPopular: true,
  },
  {
    name: "Two designers squad",
    hours: "80h / week",
    badge: "Maximum Velocity",
    idealFor: "Best for enterprise re-architectures and aggressive launch deadlines",
    features: [
      "2 dedicated full-time senior product designers",
      "Parallel workflow: UX researcher + Design system lead",
      "Fastest turnaround for complex multi-role platforms",
      "Design Director weekly strategic reviews",
      "Priority developer handoff support",
      "Free 3-day risk-free evaluation",
    ],
  },
];

export const ServicePlansSection: React.FC = () => {
  return (
    <section className="service-plans-section">
      <div className="container">
        <div className="service-plans__intro text-center">
          <span className="service-plans__badge">Transparent Subscription</span>
          <h2 className="service-plans__title">
            One subscription covers everything — from initial audit to final handoff
          </h2>
          <p className="service-plans__subtitle">
            Flat monthly pricing with zero long-term commitments. Scale capacity up or down as your roadmap evolves.
          </p>
        </div>

        <div className="service-plans__grid">
          {DEFAULT_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`service-plan-card ${plan.isPopular ? "service-plan-card--popular" : ""}`}
            >
              <div className="service-plan-card__top">
                <span className="service-plan-card__name">{plan.name}</span>
                {plan.badge && (
                  <span className="service-plan-card__badge">{plan.badge}</span>
                )}
              </div>

              <div className="service-plan-card__hours">{plan.hours}</div>
              <p className="service-plan-card__ideal">{plan.idealFor}</p>

              <div className="service-plan-card__divider" />

              <ul className="service-plan-card__features">
                {plan.features.map((feat, idx) => (
                  <li key={idx}>
                    <span className="service-plan-card__check">
                      <Check size={14} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="service-plan-card__cta">
                <Button
                  href="/pricing#trial"
                  variant={plan.isPopular ? "primary" : "subtle"}
                  fullWidth
                >
                  Start 3-day free trial
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
