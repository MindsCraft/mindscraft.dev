"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

/**
 * Footer — 2026 modern footer.
 *
 * Sections (top → bottom):
 *  1. Big brand wordmark (overflows to the right edge)
 *  2. Newsletter inline (left) · Status badge (right)
 *  3. Link columns: Studio · Resources · Legal
 *  4. Bottom row: copyright · socials · legal links
 */

const columns = [
  {
    title: "Studio",
    links: [
      { title: "Services", href: "/services" },
      { title: "Work", href: "/work" },
      { title: "Pricing", href: "/pricing" },
      { title: "About", href: "/about" },
      { title: "Process", href: "/#process" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Blog", href: "/blog" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "AI Audit", href: "/ai-audit" },
      { title: "FAQ", href: "/faq" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy", href: "/privacy-policy" },
      { title: "Terms", href: "/terms-and-conditions" },
      { title: "Cookies", href: "/cookie-policy" },
    ],
  },
];

const socials = [
  { title: "GitHub", href: "https://github.com/mindscraft-dev" },
  { title: "X", href: "https://twitter.com/mindscraft" },
  { title: "LinkedIn", href: "https://linkedin.com/company/mindscraft" },
  { title: "YouTube", href: "https://www.youtube.com/@mindscraft" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="ft-shell">
      {/* Watermark wordmark */}
      <div className="ft-watermark" aria-hidden="true">
        MindsCraft
      </div>

      <div className="ft-container">
        {/* Top row — newsletter + status */}
        <div className="ft-top">
          <div className="ft-newsletter">
            <p className="ft-eyebrow">Newsletter</p>
            <h3 className="ft-headline">
              One short brief, every other Tuesday. No fluff.
            </h3>
            <form className="ft-form" onSubmit={onSubscribe}>
              {subscribed ? (
                <span className="ft-success">Thanks — you&rsquo;re in.</span>
              ) : (
                <>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="ft-input"
                    aria-label="Email address"
                  />
                  <button type="submit" className="ft-submit">
                    Subscribe
                  </button>
                </>
              )}
            </form>
          </div>

          <div className="ft-status">
            <span className="ft-status-dot" aria-hidden="true" />
            <span className="ft-status-text">
              <strong>All systems normal</strong>
              <span className="ft-status-meta">
                Studio open · Q3 2026 · Booking
              </span>
            </span>
            <Link href="/status" className="ft-status-link">
              Status →
            </Link>
          </div>
        </div>

        {/* Middle row — columns + brand */}
        <div className="ft-grid">
          <div className="ft-brand">
            <Link href="/" className="ft-logo" aria-label="MindsCraft home">
              <Logo variant="horizontal" width={40} height={40} />
            </Link>
            <p className="ft-tagline">
              A senior-led AI studio. We ship AI products for founders who
              refuse to wait a quarter.
            </p>
            <a href="mailto:hello@mindscraft.dev" className="ft-mail">
              hello@mindscraft.dev
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="ft-col">
              <h4 className="ft-col-title">{col.title}</h4>
              <ul className="ft-col-list">
                {col.links.map((l) => (
                  <li key={l.href + l.title}>
                    <Link href={l.href} className="ft-col-link">
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row — copyright + socials + legal */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © {year} MindsCraft. Built in Dhaka, shipping worldwide.
          </p>
          <ul className="ft-socials">
            {socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social-link"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
