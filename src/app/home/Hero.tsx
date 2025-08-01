'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import BlobBackground from '@/components/ui/BlobBackground';
import { useState, useEffect } from 'react';

export default function Hero() {
  // Handle responsive sizing for BlobBackground
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Content area with frosted glass effect */}
      <div className="max-w-6xl mx-auto w-full relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl relative"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            🚀 We're open for projects
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
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

      {/* Geometric elements for depth */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated blobs in background - responsive sizing */}
        <BlobBackground
          blobCount={4}
          blobSize={isMobile ? 300 : 400}
          blur={isMobile ? 80 : 120}
          opacity={0.25}
          colors={['#93c5fd', '#a5b4fc', '#c7d2fe', '#ddd6fe', '#fbcfe8', '#bfdbfe']}
          duration={20}
        />

        {/* Geometric shapes - responsive sizing and positioning */}
        <div className="hidden md:block absolute top-[15%] right-[10%] w-32 h-32 border-4 border-blue-200/30 rounded-lg transform rotate-12 animate-float-slow" />
        <div className="absolute bottom-[20%] left-[15%] w-24 h-24 md:w-40 md:h-40 border-4 border-purple-200/30 rounded-full transform -rotate-6 animate-float-slow-reverse" />
        <div className="absolute top-[40%] left-[8%] w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-md transform rotate-45 animate-pulse-slow" />
        <div className="hidden sm:block absolute bottom-[30%] right-[20%] w-24 h-24 md:w-36 md:h-36 border-4 border-indigo-200/30 rounded-lg transform -rotate-12 animate-float-slow" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-slate-100" />

        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
      </div>
    </section>
  );
}
