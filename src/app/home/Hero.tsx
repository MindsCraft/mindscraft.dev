'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiPlay, FiCheck } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-20 left-[10%] w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl rotate-12 opacity-60 animate-float-slow"></div>
        <div className="absolute top-[30%] right-[15%] w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-50 animate-float-slow-reverse"></div>
        <div className="absolute bottom-[25%] left-[8%] w-20 h-20 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl -rotate-12 opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-[40%] right-[20%] w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg rotate-45 opacity-60 animate-float-slow"></div>
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7">
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            >
              <span className="block text-gray-900">We Design &</span>
              <span className="block">
                <span className="text-gray-900">Build </span>
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Digital
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-blue-200 to-purple-200 opacity-30 -z-10"></span>
                </span>
              </span>
              <span className="block text-gray-900">Products</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl"
            >
              We help startups and enterprises create exceptional digital experiences 
              that drive results through thoughtful design and cutting-edge development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-800 hover:-translate-y-0.5"
              >
                <span>Start Your Project</span>
                <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                <FiPlay className="mr-2 h-5 w-5" />
                <span>Watch Our Work</span>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-sm text-gray-500 font-medium">Trusted by innovative companies</p>
              
              {/* Stats Row */}
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <FiCheck className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">200+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheck className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">98% Client Satisfaction</span>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-sm text-gray-500">Built with:</span>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">React</div>
                  <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">Next.js</div>
                  <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">TypeScript</div>
                  <span className="text-xs text-gray-400">+more</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - 5 columns */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative"
            >
              {/* Main Visual Container */}
              <div className="relative w-full max-w-lg mx-auto">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-3xl blur-3xl scale-110"></div>
                
                {/* Main Card */}
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">mindscraft.dev</div>
                  </div>
                  
                  {/* Content Blocks */}
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-200 to-blue-100 rounded-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="h-4 bg-gradient-to-r from-purple-200 to-purple-100 rounded-lg animate-pulse" style={{animationDelay: '1s'}}></div>
                    
                    {/* Interactive Elements */}
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="h-12 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl border border-indigo-200/50 animate-float-slow"></div>
                      <div className="h-12 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-xl border border-cyan-200/50 animate-float-slow-reverse"></div>
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="text-xs text-gray-500">Live Preview</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-2xl rotate-12 animate-float-slow opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-pink-200 to-rose-200 rounded-xl -rotate-12 animate-float-slow-reverse opacity-80"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
