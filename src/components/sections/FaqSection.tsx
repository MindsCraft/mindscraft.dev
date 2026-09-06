import React from "react";
import { faqsData } from "@/content/faqs";
import { Accordion } from "@/components/ui/accordion/Accordion";
import "./faq.css";

export const FaqSection: React.FC = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <span className="caption text-accent">FAQ</span>
          <h2 className="h2" style={{ marginTop: "8px" }}>Frequently asked questions</h2>
        </div>

        <div className="faq-wrapper">
          <Accordion items={faqsData} allowMultiple={false} />
        </div>
      </div>
    </section>
  );
};
