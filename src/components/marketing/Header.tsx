"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button/Button";
import { navigationData } from "@/content/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import "./header.css";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link href="/" className="header__logo" aria-label="mindsCraft">
            <img
              src="/logo/logo-black-2.svg"
              alt="mindsCraft"
              className="header__logo-img"
              width={134}
              height={34}
            />
          </Link>

          <nav className="header__nav" aria-label="Main Navigation">
            {navigationData.mainNav.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className="nav-item-dropdown"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a href={item.href} className="nav-link nav-link--has-dropdown">
                      <span>{item.label}</span>
                      <ChevronDown size={14} className="nav-dropdown-icon" />
                    </a>

                    <div className="nav-dropdown-menu">
                      <div className="nav-dropdown-grid">
                        {item.dropdown.map((sub) => (
                          <a key={sub.label} href={sub.href} className="nav-dropdown-link">
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="header__actions">
            <Button href="/pricing#trial" variant="primary" size="sm">
              Get started
            </Button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-menu__nav">
              {navigationData.mainNav.map((item) => (
                <div key={item.label} className="mobile-menu__item">
                  <a
                    href={item.href}
                    className="mobile-menu__link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <div className="mobile-menu__sub">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="mobile-menu__sublink"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mobile-menu__cta">
                <Button
                  href="/pricing#trial"
                  variant="primary"
                  fullWidth
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
