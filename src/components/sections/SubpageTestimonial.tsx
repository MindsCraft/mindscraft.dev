import React from "react";
import { Star } from "lucide-react";
import "./subpage-testimonial.css";

export interface SubpageTestimonialProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  quote?: string;
  author?: string;
  role?: string;
  company?: string;
  metric?: string;
  metricLabel?: string;
  className?: string;
}

export const SubpageTestimonial: React.FC<SubpageTestimonialProps> = ({
  badge = "Client Endorsement",
  title = "Rated 4.9 on Clutch by SaaS leaders",
  subtitle = "From solving tough UX problems to shipping designs quickly, our process is built on trust, velocity, and measurable business impact.",
  quote = "mindsCraft transformed our dense SaaS platform into an intuitive, high-converting product. The dedicated designer felt like a core team member from day one, delivering production-ready Figma files that cut our development cycles in half.",
  author = "Alexander Wright",
  role = "Founder & CEO",
  company = "Datawisp Analytics",
  metric = "+140%",
  metricLabel = "User activation increase post-redesign",
  className = "",
}) => {
  return (
    <section className={`subpage-testimonial-section ${className}`}>
      <div className="container">
        <div className="subpage-testimonial__intro text-center">
          {badge && <span className="subpage-testimonial__badge">{badge}</span>}
          <h2 className="subpage-testimonial__title">{title}</h2>
          {subtitle && <p className="subpage-testimonial__subtitle">{subtitle}</p>}
        </div>

        <div className="subpage-testimonial__card">
          <div className="subpage-testimonial__header">
            <div className="subpage-testimonial__rating">
              <div className="subpage-testimonial__stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <span className="subpage-testimonial__score">4.9 / 5.0 on Clutch</span>
            </div>
            <span className="subpage-testimonial__verified">Verified Review</span>
          </div>

          <blockquote className="subpage-testimonial__quote">
            “{quote}”
          </blockquote>

          <div className="subpage-testimonial__footer">
            <div className="subpage-testimonial__author-box">
              <div className="subpage-testimonial__avatar">
                {author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <cite className="subpage-testimonial__author">{author}</cite>
                <span className="subpage-testimonial__role">
                  {role}, {company}
                </span>
              </div>
            </div>

            {metric && (
              <div className="subpage-testimonial__metric-box">
                <span className="subpage-testimonial__metric-val">{metric}</span>
                <span className="subpage-testimonial__metric-lbl">{metricLabel}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
