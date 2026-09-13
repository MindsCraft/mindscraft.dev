"use client";

import React from "react";
import { Accordion } from "@/components/ui/accordion/Accordion";
import "./subpage-faq.css";

export interface SubpageFaqProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  faqs: { question: string; answer: string }[];
  className?: string;
}

export const SubpageFaq: React.FC<SubpageFaqProps> = ({
  badge = "Clear Answers",
  title = "Frequently asked questions",
  subtitle = "Everything you need to know about our workflow, 3-day trial, and subscription terms.",
  faqs,
  className = "",
}) => {
  if (!faqs || faqs.length === 0) return null;

  const accordionItems = faqs.map((f, i) => ({
    id: `faq-${i}`,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <section className={`subpage-faq-section ${className}`}>
      <div className="container container--narrow">
        <div className="subpage-faq__intro text-center">
          {badge && <span className="subpage-faq__badge">{badge}</span>}
          <h2 className="subpage-faq__title">{title}</h2>
          {subtitle && <p className="subpage-faq__subtitle">{subtitle}</p>}
        </div>

        <div className="subpage-faq__wrapper">
          <Accordion items={accordionItems} allowMultiple={false} />
        </div>
      </div>
    </section>
  );
};
