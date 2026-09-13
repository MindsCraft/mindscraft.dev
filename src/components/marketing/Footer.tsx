import React from "react";
import Link from "next/link";
import { navigationData } from "@/content/navigation";
import "./footer.css";

export const Footer: React.FC = () => {
  const { footer } = navigationData;

  return (
    <footer className="clay-footer" aria-label="Site Footer">
      <div className="clay-footer__container">
        
        {/* Row 1: Direct Contact Hero & Primary Navigation */}
        <div className="clay-footer__top">
          <div className="clay-footer__contacts">
            <h2 className="clay-footer__heading">Let’s Talk</h2>
            
            <a
              href={`mailto:${footer.contact.email}`}
              className="clay-footer__email-link"
              aria-label={`Email ${footer.contact.email}`}
            >
              <span>{footer.contact.email}</span>
            </a>

            <Link
              href={footer.contact.bookingHref}
              className="clay-footer__call-link"
              aria-label="Book an intro call"
            >
              <span>Book an intro call</span>
              <svg
                className="clay-footer__arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3.333 8h9.334M8.667 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <nav className="clay-footer__nav" aria-label="Footer Navigation">
            <ul className="clay-footer__nav-list">
              {footer.navLinks.map((item) => (
                <li key={item.label} className="clay-footer__nav-item">
                  <Link href={item.href} className="clay-footer__nav-link">
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Row 2: Brand / Mission & Global Locations */}
        <div className="clay-footer__middle">
          <div className="clay-footer__brand-wrapper">
            <Link href="/" className="clay-footer__logo">
              mindsCraft.dev
            </Link>
            <p className="clay-footer__mission">
              Pragmatic UI/UX design agency for SaaS. Turning complex tools and dev-designed MVPs into clean, high-converting digital products.
            </p>
          </div>

          <div className="clay-footer__locations-wrapper">
            <div className="clay-footer__locations-grid">
              {footer.locations.map((loc) => (
                <div key={loc.city} className="clay-footer__location-item">
                  <span className="clay-footer__location-city">{loc.city}</span>
                  <p className="clay-footer__location-address">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Socials, Copyright & Legal Links */}
        <div className="clay-footer__bottom">
          <div className="clay-footer__socials">
            <ul className="clay-footer__social-list">
              {footer.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="clay-footer__social-link"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="clay-footer__meta">
            <span className="clay-footer__copyright">
              © {new Date().getFullYear()} mindsCraft.dev, LLC
            </span>

            <div className="clay-footer__legal-links">
              {footer.legal.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="clay-footer__legal-link"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
