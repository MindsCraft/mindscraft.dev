"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon } from '@/components/ui/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Logo colors
  const NAVY = '#101828';
  const CREAM = '#F3F4C0';
  const CREAM_LIGHT = '#FCFCF0';

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items to keep DRY
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/admin', label: 'Admin' },
  ];

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  // Premium button styles
  const ctaButtonStyle = {
    backgroundColor: NAVY,
    color: 'white',
    boxShadow: `
      0px 1px 1px 0px rgba(255, 255, 255, 0.20) inset,
      0px 4px 8px 0px rgba(255, 255, 255, 0.08) inset,
      0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 3px 6px 0px rgba(0, 0, 0, 0.15)
    `,
    transition: 'all 0.2s ease',
  };

  const ctaHoverStyle = {
    ...ctaButtonStyle,
    transform: 'translateY(-1px)',
    boxShadow: `
      0px 1px 2px 0px rgba(255, 255, 255, 0.25) inset,
      0px 6px 12px 0px rgba(255, 255, 255, 0.10) inset,
      0px 2px 4px 0px rgba(0, 0, 0, 0.35),
      0px 6px 12px 0px rgba(0, 0, 0, 0.20)
    `,
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Enhanced frosted glass effect with Navy tint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`border-b border-gray-200/30 absolute inset-0 transition-all duration-500 ease-in-out backdrop-filter backdrop-blur-lg bg-gradient-to-r from-white/75 via-white/85 to-white/75 ${scrolled
            ? 'bg-opacity-85 shadow-md'
            : 'bg-opacity-75'
          }`}
        style={{
          backdropFilter: 'blur(12px) saturate(180%)',
          WebkitBackdropFilter: 'blur(12px) saturate(180%)'
        }}
      >
        {/* Subtle cream accent overlay */}
        <div
          className="absolute inset-0 opacity-5 mix-blend-overlay"
          style={{ background: `linear-gradient(to right, ${CREAM_LIGHT}, transparent, ${CREAM_LIGHT})` }}
        ></div>
      </motion.div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 z-10"
          >
            <Link href="/" className="flex items-center cursor-pointer group">
              <Logo
                variant="horizontal"
                size="sm"
                className="transition-opacity duration-200 group-hover:opacity-80"
              />
            </Link>
          </motion.div>

          {/* Navigation - Center with updated styling */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-1 bg-white/60 backdrop-blur-sm rounded-full px-2 py-2 shadow-sm border border-gray-200/50"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                className="relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium rounded-full transition-all duration-200"
                  style={
                    isActive(item.href)
                      ? {
                        color: NAVY,
                        backgroundColor: '#F3F4F6',
                        fontWeight: '600',
                        boxShadow: `0px 1px 2px 0px rgba(16, 24, 40, 0.05)`,
                      }
                      : {
                        color: '#6B7280',
                      }
                  }
                  onMouseEnter={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.backgroundColor = '#F3F4F6';
                      e.currentTarget.style.color = '#374151';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#6B7280';
                    }
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* CTA - Right - Navy button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-end flex-shrink-0 z-10"
          >
            {/* Book a call button - Premium Navy */}
            <div className="hidden md:block">
              <a
                href="https://calendly.com/uddinmoin/typewriting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
                style={ctaButtonStyle}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, ctaHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, ctaButtonStyle)}
              >
                Book a Call
                <CalendarIcon className="ml-2" />
              </a>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100/70 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            className="md:hidden fixed inset-0 z-50 bg-white"
          >
            {/* Close button */}
            <div className="absolute top-4 right-4 z-50">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="h-full flex flex-col justify-center px-6 py-16 overflow-y-auto">
              <nav className="space-y-6">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.05 * index,
                      }}
                    >
                      <Link
                        href={item.href}
                        className="block py-3 px-4 text-lg font-semibold rounded-lg transition-all"
                        style={
                          isActive(item.href)
                            ? { color: NAVY, backgroundColor: '#F3F4F6', fontWeight: '700' }
                            : { color: '#374151' }
                        }
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="pt-6 border-t border-gray-200"
                >
                  <a
                    href="https://calendly.com/uddinmoin/typewriting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold rounded-lg"
                    style={ctaButtonStyle}
                  >
                    Book a Call
                    <CalendarIcon className="ml-2" />
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
