import React from "react";
import "./thesis.css";

export const ThesisSection: React.FC = () => {
  return (
    <section className="thesis-section">
      <div className="container">
        <div className="thesis-content">
          <h2 className="thesis-lead">
            Most digital products don’t fail on features. They fail when design and code don’t talk to each other.
          </h2>
          <p className="thesis-sub">
            Design agencies leave you with Figma files and no code. Traditional dev shops build clunky tools that users abandon. MindsCraft bridges the gap: we craft conversion-focused UX, engineer production-ready software, and stick with you for continuous post-launch support.
          </p>
        </div>

        {/* 3-Pillar Capability Grid (Moved after logo and thesis text) */}
        <div className="thesis-pillars" role="region" aria-label="What we do">
          <div className="thesis-pillar-card">
            <span className="thesis-pillar-card__tag">01 / Strategy & UX</span>
            <h3 className="thesis-pillar-card__title">Conversion-Driven UX</h3>
            <p className="thesis-pillar-card__desc">
              In-depth user research, wireframes, and interactive Figma prototypes designed to maximize engagement and reduce churn.
            </p>
          </div>

          <div className="thesis-pillar-card">
            <span className="thesis-pillar-card__tag">02 / Engineering</span>
            <h3 className="thesis-pillar-card__title">Full-Stack Codebase</h3>
            <p className="thesis-pillar-card__desc">
              Modern Next.js, React, Node, and cloud backends. Fast, scalable, clean architecture built to handle real traffic.
            </p>
          </div>

          <div className="thesis-pillar-card">
            <span className="thesis-pillar-card__tag">03 / Partnership</span>
            <h3 className="thesis-pillar-card__title">Ongoing Support & SLAs</h3>
            <p className="thesis-pillar-card__desc">
              We stay on board post-launch: continuous UX optimization, feature enhancements, security updates, and performance monitoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
