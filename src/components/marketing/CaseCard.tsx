import React from "react";
import { CaseStudy } from "@/content/all-cases";
import { ArrowRight } from "lucide-react";
import "./case-card.css";

export interface CaseCardProps {
  caseStudy: CaseStudy;
}

export const CaseCard: React.FC<CaseCardProps> = ({ caseStudy }) => {
  return (
    <a href={`/cases/${caseStudy.slug}`} className="case-card">
      <div className="case-card__image-wrap">
        {caseStudy.img ? (
          <img
            src={caseStudy.img}
            alt={`${caseStudy.title} UI preview`}
            loading="lazy"
            className="case-card__image"
          />
        ) : (
          <div className="case-card__image-placeholder">
            <span>{caseStudy.title}</span>
          </div>
        )}
      </div>

      <div className="case-card__body">
        <div className="case-card__meta">
          <span className="case-card__industry">{caseStudy.industry}</span>
        </div>
        <h3 className="case-card__title">{caseStudy.title}</h3>
        <p className="case-card__text">{caseStudy.text}</p>
        <span className="case-card__cta">
          Read case study <ArrowRight size={14} />
        </span>
      </div>
    </a>
  );
};
