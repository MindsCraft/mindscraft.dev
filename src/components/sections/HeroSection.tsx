import React from "react";
import { Button } from "@/components/ui/button/Button";
import "./hero.css";

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1">
            Pragmatic UI/UX design agency for SaaS
          </h1>
          <p className="body-lead">
            We help SaaS teams turn clunky MVPs and dev-designed tools into clean, usable products — with a dedicated designer on your side, starting tomorrow and moving fast.
          </p>
          <div className="hero-ctas">
            <Button href="#trial" variant="primary" size="lg">
              Book a call
            </Button>
            <Button href="#cases" variant="subtle" size="lg">
              Check portfolio →
            </Button>
          </div>
          <div className="hero-rating">
            <span className="stars-row">★★★★★</span>
            <span>100+ reviews on Clutch.co</span>
          </div>
        </div>
      </div>
    </section>
  );
};
