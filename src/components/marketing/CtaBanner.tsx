import React from "react";
import { Button } from "@/components/ui/button/Button";
import "./cta-banner.css";

export interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  title = "Test our SaaS design expertise with a free 3-day trial",
  subtitle = "Experience our velocity and quality on your real product backlog before committing to a monthly subscription.",
  buttonText = "Start 3-day trial",
  buttonHref = "/pricing#trial",
}) => {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner__card">
          <h2 className="cta-banner__title">{title}</h2>
          <p className="cta-banner__desc">{subtitle}</p>
          <div className="cta-banner__action">
            <Button href={buttonHref} variant="accent" size="lg">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
