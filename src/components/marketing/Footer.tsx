import React from "react";
import { navigationData } from "@/content/navigation";
import "./footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <a href="/" className="h3">
              mindsCraft<span className="text-accent">.dev</span>
            </a>
            <p className="body-small">
              Pragmatic UI/UX design agency for SaaS. Turning complex tools into clean, usable products.
            </p>
            <div className="footer__locations">
              {navigationData.footer.locations.map((loc) => (
                <p key={loc.city} className="body-small">
                  <strong>{loc.city}</strong>: {loc.address}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer__title">Services</h4>
            <ul className="footer__list">
              {navigationData.footer.services.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__title">Industries</h4>
            <ul className="footer__list">
              {navigationData.footer.industries.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__title">Comparisons</h4>
            <ul className="footer__list">
              {navigationData.footer.comparisons.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__title">Legal</h4>
            <ul className="footer__list">
              {navigationData.footer.legal.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} mindsCraft. All rights reserved.</p>
          <p>Pragmatic SaaS Design Architecture</p>
        </div>
      </div>
    </footer>
  );
};
