"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Navigation items to keep DRY
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Enhanced chromatic blur with frosted glass effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`border-b border-gray-200/30 absolute inset-0 transition-all duration-500 ease-in-out backdrop-filter backdrop-blur-lg bg-gradient-to-r from-white/70 via-white/80 to-white/70 ${
          scrolled 
            ? 'bg-opacity-80' 
            : 'bg-opacity-70' 
        }`}
        style={{
          backdropFilter: 'blur(0.75rem) saturate(180%)',
          WebkitBackdropFilter: 'blur(0.75rem) saturate(180%)'
        }}
      >
        {/* Enhanced chromatic light effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/15 via-indigo-100/10 to-purple-100/15 opacity-40 mix-blend-overlay"></div>
      </motion.div>

      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -1.25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 z-10"
          >
            <Link href="/" className="flex items-center cursor-pointer group">
              <span className="text-lg font-medium tracking-tight text-gray-900 group-hover:text-gray-800 transition-colors duration-200">
                Mindscraft<span className="text-[#2382fc] group-hover:text-blue-700 transition-colors duration-200">.dev</span>
              </span>
            </Link>
          </motion.div>

          {/* Navigation - Center */}
          <motion.nav
            initial={{ opacity: 0, y: -0.625 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-1 bg-gray-100/50 rounded-full px-1.5 py-1.5"
          >
            {navItems.map((item, index) => (
              <motion.div 
                key={item.href}
                className="relative"
                initial={{ opacity: 0, y: -0.625 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-2.5 py-0.375 text-[0.875rem] leading-[1.25rem] font-medium rounded-full transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                  }`}
                  style={{ paddingTop: '0.375rem', paddingBottom: '0.375rem' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* CTA - Right - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 1.25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-end flex-shrink-0 z-10"
          >
            {/* Book a call button - Enhanced */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="hidden md:block"
            >
              <a
                href="https://calendly.com/uddinmoin/typewriting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#2382fc] text-white text-[0.875rem] leading-[1.25rem] font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                Book a Call
                <FiCalendar className="ml-2" />
              </a>
            </motion.div>

            {/* Mobile menu button - Enhanced */}
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

      {/* Full-screen Mobile menu with enhanced animations */}
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
                        ease: [0.4, 0, 0.2, 1]
                      }}
                    >
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 text-base font-medium rounded-md ${
                          isActive(item.href)
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="pt-6 mt-6 space-y-4 border-t border-gray-100"
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <a
                      href="https://calendly.com/uddinmoin/typewriting"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full inline-flex items-center justify-center px-6 py-4 bg-blue-600 text-white text-lg font-medium rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      Book a Call
                      <FiCalendar className="ml-2.5" />
                    </a>
                  </motion.div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
