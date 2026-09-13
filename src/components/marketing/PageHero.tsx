import React from "react";
import { Button } from "@/components/ui/button/Button";
import "./page-hero.css";

export interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  stats?: { stat: string; label: string }[];
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  description,
  primaryCtaText = "Book a 3-day trial",
  primaryCtaHref = "/pricing#trial",
  secondaryCtaText,
  secondaryCtaHref,
  stats,
}) => {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero__inner">
          {badge && <span className="page-hero__badge">{badge}</span>}
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__desc">{description}</p>

          <div className="page-hero__actions">
            {primaryCtaText && (
              <Button href={primaryCtaHref} variant="primary" size="md">
                {primaryCtaText}
              </Button>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <Button href={secondaryCtaHref} variant="subtle" size="md">
                {secondaryCtaText}
              </Button>
            )}
          </div>

          {stats && stats.length > 0 && (
            <div className="page-hero__stats">
              {stats.map((s, idx) => (
                <div key={idx} className="page-hero__stat-item">
                  <span className="page-hero__stat-value">{s.stat}</span>
                  <span className="page-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
