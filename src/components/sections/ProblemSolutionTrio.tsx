import React from "react";
import { Button } from "@/components/ui/button/Button";
import "./problem-solution.css";

export const ProblemSolutionTrio: React.FC = () => {
  return (
    <section className="problem-solution-section">
      <div className="container">
        <div className="trio-grid">
          {/* Card 1 */}
          <div className="trio-card">
            <div className="trio-content">
              <span className="caption text-accent">Problem 01</span>
              <h2 className="trio-title">
                You have a sophisticated product and a confusing design
              </h2>
              <p className="trio-text">
                Your product was designed by engineers — a solid backend, packed with features, but the interface is a mess. Nothing’s clear. Users can’t find their way around. They get confused, frustrated, then leave before they ever see the value.
              </p>
              <p className="trio-text">
                Let us gently take over your UI/UX and turn it into something very intuitive, so your product finally delivers on its full potential.
              </p>
            </div>
            <div className="trio-action">
              <Button href="#trial" variant="primary">
                Redesign my SaaS
              </Button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="trio-card trio-card--alt">
            <div className="trio-content">
              <span className="caption text-accent">Problem 02</span>
              <h2 className="trio-title">
                Hunting for UX designer takes months of interviews and portfolio reviews
              </h2>
              <p className="trio-text">
                You needed design help weeks ago. But you're still buried in resumes and portfolios, hoping someone actually knows SaaS. You try freelancers — they disappear. You try hiring — it drags for months. Meanwhile, your devs are blocked, and designs aren’t moving.
              </p>
              <p className="trio-text">
                Let us drop in immediately with a senior designer who’s done this before — no onboarding, no hand-holding, just real work from day one.
              </p>
            </div>
            <div className="trio-action">
              <Button href="#trial" variant="primary">
                Extend my team
              </Button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="trio-card">
            <div className="trio-content">
              <span className="caption text-accent">Problem 03</span>
              <h2 className="trio-title">
                You have a very aggressive timeline. You need MVP asap
              </h2>
              <p className="trio-text">
                You don’t want a long research phase. You want screens — fast. The sooner you put it in front of users, the sooner you know if it works. We take a pragmatic approach: using proven UX patterns to speed up design, and component libraries like Ant Design or Tailwind to make handoff to developers instant. You get an MVP that’s usable, testable, and ready to build on.
              </p>
            </div>
            <div className="trio-action">
              <Button href="#trial" variant="primary">
                Design from scratch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
