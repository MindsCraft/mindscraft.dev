"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import { FiArrowUpRight } from "react-icons/fi";

/**
 * Header — 2026 minimal navbar (single light theme).
 *
 * Layout A: Logo (left) · Nav (center) · CTA (right)
 * - Sticky on scroll
 * - Hides on scroll-down, shows on scroll-up
 * - Backdrop blur + 1px hairline border when scrolled
 * - Single theme (light) — logo tinted with currentColor
 */

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "Studio" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      // Hide when scrolling down past threshold; show when scrolling up
      if (y > lastY && y > 80) setHidden(true);
      else setHidden(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header
      className={[
        "nav-shell",
        scrolled ? "is-scrolled" : "",
        hidden ? "is-hidden" : "",
      ].join(" ")}
      data-state={mobileOpen ? "open" : "closed"}
    >
      <div className="nav-inner">
        {/* Logo — auto-tints to currentColor */}
        <Link href="/" className="nav-logo" aria-label="MindsCraft home">
          <Logo variant="horizontal" width={40} height={40} />
        </Link>

        {/* Center nav (desktop) */}
        <nav className="nav-center" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${isActive(item.href) ? " is-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="nav-right">
          <Link href="/ai-audit" className="nav-ghost">
            AI Audit
          </Link>
          <Link href="/contact" className="nav-cta">
            Book a call
            <FiArrowUpRight aria-hidden />
          </Link>

          {/* Mobile burger */}
          <button
            className="nav-burger"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="nav-burger-bar" />
            <span className="nav-burger-bar" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="nav-drawer">
          <nav aria-label="Mobile primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-drawer-link${isActive(item.href) ? " is-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="nav-drawer-cta">
            <Link href="/ai-audit" className="nav-ghost">
              Free AI Audit
            </Link>
            <Link href="/contact" className="nav-cta nav-cta-block">
              Book a call
              <FiArrowUpRight aria-hidden />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
