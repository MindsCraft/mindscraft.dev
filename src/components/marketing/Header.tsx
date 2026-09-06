import React from "react";
import { Button } from "@/components/ui/button/Button";
import { navigationData } from "@/content/navigation";
import "./header.css";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="/" className="header__logo">
            mindsCraft<span className="text-accent">.dev</span>
          </a>

          <nav className="header__nav" aria-label="Main Navigation">
            {navigationData.mainNav.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <Button href="#trial" variant="primary" size="sm">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
