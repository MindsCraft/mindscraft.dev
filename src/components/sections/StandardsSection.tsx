import React from "react";
import "./standards.css";

export const StandardsSection: React.FC = () => {
  return (
    <section className="standards-section">
      <div className="container">
        <div className="section-header">
          <span className="caption text-accent">Internal Standards</span>
          <h2 className="h2" style={{ marginTop: "8px" }}>Here’s what we do behind the scenes</h2>
          <p className="body-lead text-muted" style={{ marginTop: "12px" }}>
            You get a trained designer who meets our standards, not someone we just found last week.
          </p>
        </div>

        <div className="standards-grid">
          <div className="standard-card">
            <span className="standard-card__num">Pillar 01</span>
            <h3 className="standard-card__title">Source top 1% designers</h3>
            <p className="standard-card__desc">
              We vet for design skills, fluent English, critical thinking, and clear communication.
            </p>
          </div>

          <div className="standard-card">
            <span className="standard-card__num">Pillar 02</span>
            <h3 className="standard-card__title">Train every designer for 3 months</h3>
            <p className="standard-card__desc">
              They go through an intense bootcamp to learn our UX standards, practices, and design process.
            </p>
          </div>

          <div className="standard-card">
            <span className="standard-card__num">Pillar 03</span>
            <h3 className="standard-card__title">Back them with senior oversight</h3>
            <p className="standard-card__desc">
              Each designer works independently but never alone — their work is reviewed by a design lead and peers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
