import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "./subpage-related-nav.css";

export interface RelatedNavItem {
  title: string;
  badge?: string;
  desc: string;
  href: string;
}

export interface SubpageRelatedNavProps {
  badge?: string;
  title: string;
  subtitle?: string;
  items: RelatedNavItem[];
  className?: string;
}

export const SubpageRelatedNav: React.FC<SubpageRelatedNavProps> = ({
  badge = "Related Disciplines",
  title,
  subtitle = "Explore how we apply our product design and engineering standards across other domains.",
  items,
  className = "",
}) => {
  return (
    <section className={`subpage-related-section ${className}`}>
      <div className="container">
        <div className="subpage-related__intro text-center">
          {badge && <span className="subpage-related__badge">{badge}</span>}
          <h2 className="subpage-related__title">{title}</h2>
          {subtitle && <p className="subpage-related__subtitle">{subtitle}</p>}
        </div>

        <div className="subpage-related__grid">
          {items.map((item, idx) => (
            <Link key={idx} href={item.href} className="subpage-related-card">
              <div className="subpage-related-card__top">
                {item.badge && (
                  <span className="subpage-related-card__tag">{item.badge}</span>
                )}
                <span className="subpage-related-card__arrow">
                  <ArrowRight size={16} />
                </span>
              </div>
              <h3 className="subpage-related-card__title">{item.title}</h3>
              <p className="subpage-related-card__desc">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
