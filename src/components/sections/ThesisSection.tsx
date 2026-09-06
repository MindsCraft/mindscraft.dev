import React from "react";
import "./thesis.css";

export const ThesisSection: React.FC = () => {
  return (
    <section className="thesis-section">
      <div className="container">
        <div className="thesis-card">
          <h2 className="thesis-title">
            Most SaaS products don’t fail on features. They fail on UX.
          </h2>
          <p className="thesis-body">
            Confusing design means more churn, more support tickets, and fewer conversions — not because your product lacks value, but because users can't access that value fast. We can help.
          </p>
        </div>
      </div>
    </section>
  );
};
