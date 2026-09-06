import React from "react";
import { testimonialsData } from "@/content/testimonials";
import "./testimonials.css";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="caption text-accent">Social Proof</span>
          <h2 className="h2" style={{ marginTop: "8px" }}>4.9 is our Clutch average</h2>
          <p className="body-lead text-muted" style={{ marginTop: "12px" }}>
            Here’s what SaaS founders and product teams shared about working with us.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card">
              <p className="testimonial-quote">“{item.quote}”</p>
              <div className="testimonial-meta">
                <span className="testimonial-author">{item.author}</span>
                <span className="testimonial-role">
                  {item.role}, {item.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
