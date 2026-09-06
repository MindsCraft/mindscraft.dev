import React from "react";
import { principlesData } from "@/content/principles";
import "./principles.css";

export const PrinciplesSection: React.FC = () => {
  return (
    <section className="principles-section">
      <div className="container">
        <div className="section-header">
          <span className="caption text-accent">Philosophy</span>
          <h2 className="h2" style={{ marginTop: "8px" }}>We stick to our principles:</h2>
        </div>

        <div className="principles-grid">
          {principlesData.map((item) => (
            <div key={item.number} className="principle-card">
              <span className="principle-card__num">{item.number}</span>
              <h3 className="principle-card__title">{item.title}</h3>
              <p className="principle-card__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
