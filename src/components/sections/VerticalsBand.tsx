import React from "react";
import "./verticals.css";

const verticals = [
  "Healthcare",
  "Geoservice",
  "Sales",
  "Fintech",
  "Development-focused",
  "Marketing",
  "Data",
  "AI",
];

export const VerticalsBand: React.FC = () => {
  return (
    <section className="verticals-section">
      <div className="container">
        <h2 className="h2">
          Your SaaS vertical is no mystery to us — we've designed for them all
        </h2>
        <p className="body-lead text-muted" style={{ marginTop: "12px" }}>
          We understand the SaaS space in-depth — and most likely have experience in your vertical.
        </p>

        <div className="verticals-grid">
          {verticals.map((v) => (
            <div key={v} className="vertical-pill">
              {v}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
