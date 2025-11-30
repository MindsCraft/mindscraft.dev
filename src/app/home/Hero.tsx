'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Adjust this value to control speed (0.8 = 80% speed)
    }
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/content/bg-vid-wb-ccl.mp4" type="video/mp4" />
        </video>

        {/* Overlay - customize as needed */}
        <div className="hero-overlay"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700 mb-8"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Available for new projects</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-gray-900"
        >
          We Design & Build
          <br />
          Digital Products
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          We help startups and enterprises create exceptional digital experiences
          that drive results through thoughtful design and cutting-edge development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-800 hover:-translate-y-0.5"
          >
            <span>Start Your Project</span>
            <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/work"
            className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-xl font-semibold hover:border-gray-700 hover:bg-gray-50 transition-all duration-300"
          >
            <span>View Our Work</span>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-4"
        >
          <p className="text-sm text-gray-600 font-medium">Trusted by innovative companies</p>

          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <FiCheck className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-700">200+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheck className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-700">98% Client Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
