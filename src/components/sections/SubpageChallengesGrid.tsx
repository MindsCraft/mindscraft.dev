import React from "react";
import "./subpage-challenges-grid.css";

export interface ChallengeItem {
  title: string;
  desc: string;
  badge?: string;
}

export interface SubpageChallengesGridProps {
  badge?: string;
  title: string;
  subtitle?: string;
  items: ChallengeItem[];
  columns?: 2 | 3;
  className?: string;
}

export const SubpageChallengesGrid: React.FC<SubpageChallengesGridProps> = ({
  badge = "The Challenge",
  title,
  subtitle,
  items,
  columns = 3,
  className = "",
}) => {
  return (
    <section className={`subpage-challenges-section ${className}`}>
      <div className="container">
        <div className="subpage-challenges__intro text-center">
          {badge && <span className="subpage-challenges__badge">{badge}</span>}
          <h2 className="subpage-challenges__title">{title}</h2>
          {subtitle && <p className="subpage-challenges__subtitle">{subtitle}</p>}
        </div>

        <div className={`subpage-challenges__grid subpage-challenges__grid--col-${columns}`}>
          {items.map((item, idx) => (
            <div key={idx} className="subpage-challenge-card">
              <div className="subpage-challenge-card__header">
                <span className="subpage-challenge-card__number">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {item.badge && (
                  <span className="subpage-challenge-card__tag">{item.badge}</span>
                )}
              </div>
              <h3 className="subpage-challenge-card__title">{item.title}</h3>
              <p className="subpage-challenge-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
