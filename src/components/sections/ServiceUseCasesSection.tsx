import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import "./service-use-cases.css";

export interface UseCaseItem {
  number: string;
  title: string;
  desc: string;
}

export const PRODUCT_REDESIGN_USE_CASES: UseCaseItem[] = [
  {
    number: "01",
    title: "Product grew fast, UX didn't keep up",
    desc: "You got to market quickly — maybe with AI-generated screens or a template — and it worked. But post-PMF, that foundation starts showing cracks. We rebuild it properly, without starting from zero.",
  },
  {
    number: "02",
    title: "Users sign up but never really get started",
    desc: "If users drop off before they see value, no acquisition spend will fix that. We redesign SaaS onboarding so users reach their \"aha moment\" faster, with less hand-holding and fewer support tickets.",
  },
  {
    number: "03",
    title: "Your product works well but doesn't look like it",
    desc: "Legacy SaaS products carry years of good decisions buried under outdated UI. The functionality is there — users just can't trust it at first glance. We modernize the look and feel so your product earns credibility the moment someone opens it.",
  },
  {
    number: "04",
    title: "Users are leaving and you're not sure why",
    desc: "High churn without a clear cause usually points to friction in the product, not the market. We run a UX audit to find exactly where users get stuck, confused, or quietly give up, then redesign those moments to keep them engaged.",
  },
  {
    number: "05",
    title: "Every new feature makes the product feel heavier",
    desc: "When your design system wasn't built to scale, each sprint adds complexity instead of clarity. We restructure your product's foundation — redesigning the design system for SaaS, simplifying navigation, and creating room for new features to fit naturally rather than pile up.",
  },
  {
    number: "06",
    title: "You need the product to sell itself",
    desc: "Whether you're pursuing product-led growth, preparing for a funding round, or moving upmarket to enterprise, the product has to make the case on its own. We redesign for clarity, trust, and that critical first impression — so prospects get it before you say a word.",
  },
];

export interface ServiceUseCasesSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: UseCaseItem[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export const ServiceUseCasesSection: React.FC<ServiceUseCasesSectionProps> = ({
  eyebrow = "Use cases",
  title = "This is when SaaS teams come to us",
  subtitle = "Every redesign has a trigger. Here are the six situations our SaaS product studio knows best— and what we do about each one.",
  items = PRODUCT_REDESIGN_USE_CASES,
  ctaText = "Let’s talk",
  ctaHref = "/contact",
  className = "",
}) => {
  return (
    <section className={`service-use-cases-section ${className}`}>
      <div className="container">
        <div className="service-use-cases__layout">
          {/* Left Column: Sticky Title & Context */}
          <div className="service-use-cases__sticky-col">
            <div className="service-use-cases__header">
              {eyebrow && <span className="service-use-cases__eyebrow">{eyebrow}</span>}
              <h2 className="service-use-cases__title">{title}</h2>
              {subtitle && <p className="service-use-cases__subtitle">{subtitle}</p>}
            </div>

            <div className="service-use-cases__cta-desktop">
              <Button href={ctaHref} variant="primary" size="md" icon={<ArrowRight size={15} />}>
                {ctaText}
              </Button>
            </div>
          </div>

          {/* Right Column: Timeline / List of 6 Situations */}
          <div className="service-use-cases__timeline-col">
            <div className="service-use-cases__timeline-track">
              {items.map((item) => (
                <div key={item.number} className="service-use-case-card">
                  <div className="service-use-case-card__pin-wrap">
                    <span className="service-use-case-card__pin">{item.number}</span>
                  </div>

                  <div className="service-use-case-card__content">
                    <h3 className="service-use-case-card__title">{item.title}</h3>
                    <p className="service-use-case-card__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="service-use-cases__cta-mobile">
              <Button href={ctaHref} variant="primary" size="md" icon={<ArrowRight size={15} />} fullWidth>
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
