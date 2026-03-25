"use client";

import Link from 'next/link';
import { GithubIcon, TwitterIcon, LinkedInIcon, YoutubeIcon } from '@/components/ui/icons';
import Logo from '@/components/ui/Logo';
import { useState } from 'react';

type FooterLink = {
  title: string;
  href: string;
  external?: boolean;
};

const services: FooterLink[] = [
  { title: 'Custom Software', href: '/services' },
  { title: 'E-commerce', href: '/services' },
  { title: 'SaaS Development', href: '/services' },
  { title: 'API Development', href: '/services' },
  { title: 'Pricing', href: '/pricing' },
];

const company: FooterLink[] = [
  { title: 'About Us', href: '/about' },
  { title: 'Our Work', href: '/work' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
  { title: 'FAQ', href: '/faq' },
];

const resources: FooterLink[] = [
  { title: 'Case Studies', href: '/case-studies' },
  { title: 'Privacy Policy', href: '/privacy-policy' },
  { title: 'Terms of Service', href: '/terms-and-conditions' },
  { title: 'Cookie Policy', href: '/cookie-policy' },
];

const linkGroups = [
  { title: 'Services', links: services },
  { title: 'Company', links: company },
  { title: 'Resources', links: resources },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      // TODO: connect to actual newsletter service
    }
  };

  return (
    <footer className="ft-footer">
      <div className="ft-container">

        {/* ── Main grid ── */}
        <div className="ft-grid">

          {/* Brand column */}
          <div className="ft-brand-col">
            <div className="ft-logo-wrap">
              <Logo variant="horizontal" size="md" />
            </div>
            <p className="ft-description">
              UX-focused web development agency helping startups and product
              teams launch faster with AI-powered solutions.
            </p>

            {/* Direct contact */}
            <div className="ft-contact-info">
              <a href="mailto:hello@mindscraft.dev" className="ft-contact-link">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 4l6 4 6-4M2 4v8h12V4H2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                hello@mindscraft.dev
              </a>
            </div>

            {/* Social icons */}
            <div className="ft-socials">
              <a href="https://github.com/mindscraft-dev" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/mindscraft" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/mindscraft" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="LinkedIn">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@mindscraft" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="YouTube">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {linkGroups.map((group, idx) => (
            <div key={idx} className="ft-link-col">
              <h3 className="ft-col-title">{group.title}</h3>
              <ul className="ft-link-list">
                {group.links.map((link) => (
                  <li key={link.href + link.title}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : '_self'}
                      rel={link.external ? 'noopener noreferrer' : ''}
                      className="ft-link"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Newsletter ── */}
        <div className="ft-newsletter">
          <div className="ft-newsletter-text">
            <h4 className="ft-newsletter-title">Stay updated</h4>
            <p className="ft-newsletter-sub">
              Get our latest insights on web development, design, and AI
              delivered to your inbox.
            </p>
          </div>
          <form onSubmit={handleNewsletter} className="ft-newsletter-form">
            {subscribed ? (
              <div className="ft-newsletter-success">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8l3 3 7-7" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Thanks! You're subscribed.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="ft-newsletter-input"
                />
                <button type="submit" className="ft-newsletter-btn">
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>

        {/* ── Bottom bar ── */}
        <div className="ft-bottom">
          <p className="ft-copyright">
            &copy; {currentYear} Mindscraft.dev. All rights reserved.
          </p>
          <div className="ft-legal">
            <Link href="/privacy-policy" className="ft-legal-link">Privacy</Link>
            <Link href="/terms-and-conditions" className="ft-legal-link">Terms</Link>
            <Link href="/cookie-policy" className="ft-legal-link">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
