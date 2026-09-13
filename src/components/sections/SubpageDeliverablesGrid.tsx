import React from "react";
import { Check } from "lucide-react";
import "./subpage-deliverables-grid.css";

export interface DeliverableItem {
  title: string;
  desc: string;
  category?: string;
}

export interface SubpageDeliverablesGridProps {
  badge?: string;
  title: string;
  subtitle?: string;
  items: DeliverableItem[];
  columns?: 2 | 3;
  className?: string;
}

export const SubpageDeliverablesGrid: React.FC<SubpageDeliverablesGridProps> = ({
  badge = "Scope & Deliverables",
  title,
  subtitle,
  items,
  columns = 3,
  className = "",
}) => {
  return (
    <section className={`subpage-deliverables-section ${className}`}>
      <div className="container">
        <div className="subpage-deliverables__intro text-center">
          {badge && <span className="subpage-deliverables__badge">{badge}</span>}
          <h2 className="subpage-deliverables__title">{title}</h2>
          {subtitle && <p className="subpage-deliverables__subtitle">{subtitle}</p>}
        </div>

        <div className={`subpage-deliverables__bento subpage-deliverables__bento--col-${columns}`}>
          {items.map((item, idx) => (
            <div key={idx} className="subpage-deliverable-card">
              <div className="subpage-deliverable-card__top">
                <div className="subpage-deliverable-card__check">
                  <Check size={14} strokeWidth={2.5} />
                </div>
                {item.category && (
                  <span className="subpage-deliverable-card__cat">{item.category}</span>
                )}
              </div>
              <h3 className="subpage-deliverable-card__title">{item.title}</h3>
              <p className="subpage-deliverable-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
