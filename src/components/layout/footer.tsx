"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaYoutube, FaGithub, FaDiscord, FaBook } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full border-t border-gray-200 py-20 mt-auto bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 md:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="flex items-center"
            >
              <div className="text-lg font-medium tracking-tight text-gray-900 group-hover:text-gray-800 transition-colors duration-200">
                Mindscraft<span className="text-[#2382fc] group-hover:text-blue-700 transition-colors duration-200">.dev</span>
              </div>
            </motion.div>
            <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
              UX-focused web development agency helping startups and product teams launch faster with AI-powered solutions.
            </p>
            <div className="flex gap-4">
              {/* Add social icons if needed */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-right"
          >
            <h3 className="text-base font-medium mb-4 md:font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Work", href: "/work" },
                { name: "About", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ x: -5, scale: 1.02 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-[#2382fc] transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-end gap-2">
                      <span>{item.name}</span>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:text-right"
          >
            <h3 className="text-base font-medium mb-4 md:font-semibold text-gray-900">Connect</h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Email",
                  href: "mailto:hello@mindscraft.dev",
                  icon: <FiMail className="h-4 w-4 transition-all duration-200 group-hover:scale-125" />
                },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com/company/mindscraft",
                  icon: <svg className="h-4 w-4 text-blue-700 transition-all duration-200 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                },
                {
                  name: "Twitter",
                  href: "https://twitter.com/mindscraft",
                  icon: <svg className="h-4 w-4 text-blue-400 transition-all duration-200 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
                }
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                  whileHover={{ x: -5, scale: 1.02 }}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-[#2382fc] transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-end gap-2">
                      <span>{item.name}</span>
                      {item.icon}
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-200 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Mindscraft.dev. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-[#2382fc] transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-sm text-gray-500 hover:text-[#2382fc] transition-colors duration-200">Terms and conditions</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
