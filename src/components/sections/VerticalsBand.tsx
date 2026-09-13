import React from "react";
import { ArrowRight } from "lucide-react";
import "./verticals.css";

const verticals = [
  "Healthcare",
  "Geoservice",
  "Sales",
  "Fintech",
  "Development-focused",
  "Marketing",
  "Data & Analytics",
  "Artificial Intelligence",
  "EdTech & LMS",
  "Cybersecurity",
  "HR Tech & Recruiting",
  "B2B Collaboration",
];

export const VerticalsBand: React.FC = () => {
  return (
    <section className="verticals-section" id="verticals">
      <div className="container">
        <div className="list-industries">
          {/* Left Column: Heading, Subtitle & Action */}
          <div className="list-industries-text">
            <span className="verticals-badge">Domain Expertise</span>
            <h2 className="list-industries-h2">
              Your SaaS vertical is no mystery to us — we've designed for them all
            </h2>
            <p className="list-industries-desc">
              We understand the SaaS space in-depth — and most likely have deep, hands-on experience in your vertical.
            </p>
            <div className="list-industries-btn-wrap">
              <a href="/cases" className="list-industries-btn">
                <span>Explore case studies</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Eleken Vertical Infinite Rolling Marquee */}
          <div className="list-industries-slide">
            <div className="carousel-names-wrapper">
              <div className="carousel-words-component" data-carousel="vertical">
                <div className="carousel-names-list">
                  {verticals.map((v, i) => (
                    <div key={`v1-${i}`} className="carousel-name-item">
                      {v}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="carousel-words-component"
                data-carousel="vertical"
                aria-hidden="true"
              >
                <div className="carousel-names-list">
                  {verticals.map((v, i) => (
                    <div key={`v2-${i}`} className="carousel-name-item">
                      {v}
                    </div>
                  ))}
                </div>
              </div>

              {/* Gradient Mask Overlays for Smooth Clay Fade */}
              <div className="list-of-industries-bg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

