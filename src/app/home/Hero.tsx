'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            🚀 We're open for projects
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            We Design & Build{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Digital</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-blue-100/60 -z-0" />
            </span>{' '}
            <br className="hidden md:block" />
            Products
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-12 leading-relaxed">
            We help startups and enterprises create exceptional digital experiences that drive results through thoughtful design and development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full bg-black text-white hover:bg-gray-900 transition-all duration-300"
            >
              <span>Get in touch</span>
              <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </Link>
            
            <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full border-2 border-black hover:bg-gray-50 transition-all duration-300">
              <span>Watch Showreel</span>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll down</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}