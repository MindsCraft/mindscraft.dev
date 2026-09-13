import React from "react";
import { Check } from "lucide-react";
import "./service-approach.css";

export interface ServiceApproachSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const ServiceApproachSection: React.FC<ServiceApproachSectionProps> = ({
  badge = "Redesign Strategy",
  title = "How do we approach redesign",
  subtitle = "We tailor our approach to fit your needs. For most of our clients, it comes down to one of two options:",
  className = "",
}) => {
  return (
    <section className={`service-approach-section ${className}`}>
      <div className="container">
        <div className="service-approach__intro text-center">
          {badge && <span className="service-approach__badge">{badge}</span>}
          <h2 className="service-approach__title">{title}</h2>
          {subtitle && <p className="service-approach__subtitle">{subtitle}</p>}
        </div>

        <div className="service-approach__grid">
          {/* Option 1: Complete Makeover */}
          <div className="service-approach-card">
            <div className="service-approach-card__top">
              <span className="service-approach-card__tag">Option 01</span>
              <span className="service-approach-card__type">Total Overhaul</span>
            </div>
            <h3 className="service-approach-card__title">Complete makeover</h3>
            <p className="service-approach-card__desc">
              A total refresh where every screen gets redesigned. The best choice if your product feels severely outdated, you are preparing for a major funding round, or you need a unified visual identity that commands market leadership.
            </p>
            <ul className="service-approach-card__list">
              <li>
                <span className="service-approach-card__check"><Check size={14} /></span>
                <span>Complete re-architecture of information hierarchy</span>
              </li>
              <li>
                <span className="service-approach-card__check"><Check size={14} /></span>
                <span>Unified Figma design system built from scratch</span>
              </li>
              <li>
                <span className="service-approach-card__check"><Check size={14} /></span>
                <span>Revamped onboarding and high-traffic user journeys</span>
              </li>
              <li>
                <span className="service-approach-card__check"><Check size={14} /></span>
                <span>Polished visual language that impresses enterprise clients</span>
              </li>
            </ul>
          </div>

          {/* Option 2: Iterative Changes */}
          <div className="service-approach-card">
            <div className="service-approach-card__top">
              <span className="service-approach-card__tag">Option 02</span>
              <span className="service-approach-card__type">Sprint-by-Sprint</span>
            </div>
            <h3 className="service-approach-card__title">Iterative changes</h3>
            <p className="service-approach-card__desc">
              Step-by-step modular improvements. We focus on high-friction bottlenecks first—such as onboarding drop-offs or feature discovery—while preserving familiar patterns so daily active users aren’t alienated.
            </p>
            <ul className="service-approach-card__list">
              <li>
                <span className="service-approach-card__check"><Check size={14} /></span>
                <span>Immediate targeting of highest-churn friction points</span>
              </li>
              <li>
                <span className="service-approach-card__check"><Check size={14} /></span>
                <span>Zero disruption to ongoing developer sprint cycles</span>
              </li>
              <li>
                <span className="service-approach-card__check"><Check size={14} /></span>
                <span>Incremental rollouts with continuous user feedback</span>
              </li>
              <li>
                <span className="service-approach-card__check"><Check size={14} /></span>
                <span>Preserves existing user familiarity and muscle memory</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
