'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  FiCheck,
  FiX,
  FiInfo,
  FiAlertTriangle,
  FiArrowRight,
  FiDownload,
  FiCopy,
  FiEye,
  FiEyeOff,
  FiSearch,
  FiMenu,
  FiHome,
  FiSettings,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiClock,
  FiStar,
  FiHeart,
  FiShare2,
  FiMoreHorizontal
} from 'react-icons/fi';

export default function DesignSystemContent() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#101828');

  const navigationItems = [
    { id: 'overview', name: 'Overview', href: '#overview' },
    { id: 'hero-concepts', name: 'Hero Concepts', href: '#hero-concepts' },
    { id: 'brand', name: 'Brand', href: '#brand' },
    { id: 'color-variables', name: 'Color Variables', href: '#color-variables' },
    { id: 'design-tokens', name: 'Design Tokens', href: '#design-tokens' },
    { id: 'typography', name: 'Typography', href: '#typography' },
    { id: 'components', name: 'Components', href: '#components' },
    { id: 'patterns', name: 'Patterns', href: '#patterns' },
    { id: 'guidelines', name: 'Guidelines', href: '#guidelines' },
    { id: 'resources', name: 'Resources', href: '#resources' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#101828] to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-[#F3F4C0] text-[#101828] rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#101828] rounded-full mr-2"></span>
              Design System v2.0
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Mindscraft
              <span className="block text-[#F3F4C0]">Design System</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
              A comprehensive design language that enables teams to build consistent,
              accessible, and beautiful digital experiences at scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#F3F4C0] text-[#101828] hover:bg-[#E5E7A3] font-semibold">
                <FiDownload className="mr-2" />
                Download Assets
              </Button>
              <Button variant="outline" className="border-gray-400 text-white hover:bg-white/10">
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8 py-4 overflow-x-auto">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm font-medium transition-colors whitespace-nowrap pb-2 border-b-2 ${activeTab === item.id
                  ? 'text-[#101828] border-[#F3F4C0]'
                  : 'text-gray-600 hover:text-[#101828] border-transparent'
                  }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Overview Section */}
        {activeTab === 'overview' && (
          <section className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Design System Overview</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our design system provides the building blocks for creating cohesive,
                scalable, and accessible digital products.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#101828] mb-2">50+</div>
                <div className="text-gray-600">Components</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#101828] mb-2">200+</div>
                <div className="text-gray-600">Design Tokens</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#101828] mb-2">WCAG AA</div>
                <div className="text-gray-600">Accessible</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#101828] mb-2">5</div>
                <div className="text-gray-600">Platforms</div>
              </div>
            </div>

            {/* Principles */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">Design Principles</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-8 text-center bg-white">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiEye className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Clarity</h4>
                  <p className="text-gray-600">
                    Every element serves a purpose and communicates clearly to users.
                  </p>
                </Card>

                <Card className="p-8 text-center bg-white">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Consistency</h4>
                  <p className="text-gray-600">
                    Unified patterns and behaviors across all touchpoints.
                  </p>
                </Card>

                <Card className="p-8 text-center bg-white">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiHeart className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Accessibility</h4>
                  <p className="text-gray-600">
                    Inclusive design that works for everyone, everywhere.
                  </p>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Hero Concepts Section */}
        {activeTab === 'hero-concepts' && (
          <section className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Brand Guidelines</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our brand identity, logo usage, and visual guidelines
              </p>
            </div>

            {/* Award-Winning Inspired Heroes */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Award-Winning Inspired Heroes</h3>
                <p className="text-lg text-gray-600">
                  Hero concepts inspired by Awwwards winners and top design agencies
                </p>
              </div>

              {/* Minimalist Typography Hero */}
              <div className="space-y-6 mb-16">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">A</div>
                  <h4 className="text-2xl font-bold">Minimalist Typography Hero</h4>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Clean & Modern</span>
                </div>

                <Card className="p-0 bg-white overflow-hidden min-h-[600px] flex items-center">
                  <div className="w-full p-16 lg:p-24">
                    <div className="max-w-5xl mx-auto">
                      <div className="mb-8">
                        <div className="text-sm font-mono text-gray-500 mb-4">01 — DIGITAL INNOVATION</div>
                        <h1 className="text-6xl lg:text-8xl font-light leading-none mb-8">
                          <span className="block text-[#101828]">We craft</span>
                          <span className="block text-blue-600 font-bold">digital</span>
                          <span className="block text-[#101828]">experiences</span>
                        </h1>
                        <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                          Transforming ambitious ideas into market-leading digital products
                          through strategic design and cutting-edge development.
                        </p>
                      </div>

                      <div className="flex items-center gap-12">
                        <Button className="bg-[#101828] text-white hover:bg-gray-800 px-8 py-4 rounded-none font-normal">
                          Start Project
                        </Button>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex -space-x-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full border-2 border-white"></div>
                            <div className="w-8 h-8 bg-green-100 rounded-full border-2 border-white"></div>
                            <div className="w-8 h-8 bg-purple-100 rounded-full border-2 border-white"></div>
                          </div>
                          <span>200+ successful launches</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <strong>Inspiration:</strong> Minimalist agencies like Pentagram, Studio Dumbar.
                  Uses typography hierarchy, negative space, and subtle animations.
                </div>
              </div>



              {/* Brutalist Bold Hero */}
              <div className="space-y-6 mb-16">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">D</div>
                  <h4 className="text-2xl font-bold">Brutalist Bold Hero</h4>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Disruptive</span>
                </div>

                <Card className="p-0 bg-[#101828] text-white overflow-hidden">
                  <div className="p-16 lg:p-24">
                    <div className="max-w-6xl mx-auto">
                      <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                          <div className="text-red-500 font-mono text-sm mb-4">WARNING: DISRUPTIVE CONTENT</div>
                          <h1 className="text-6xl lg:text-8xl font-black leading-none mb-8">
                            <span className="block">BREAK</span>
                            <span className="block text-red-500">THE</span>
                            <span className="block">RULES</span>
                          </h1>
                          <div className="bg-red-500 h-2 w-32 mb-8"></div>
                          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            While others follow trends, we create them.
                            Radical design. Disruptive technology. Unstoppable results.
                          </p>

                          <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-red-500 text-white hover:bg-red-600 px-8 py-4 font-bold uppercase tracking-wider">
                              Let's Disrupt
                            </Button>
                            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold uppercase tracking-wider">
                              See Chaos
                            </Button>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-red-500 h-32 rounded-lg"></div>
                            <div className="bg-white h-32 rounded-lg"></div>
                            <div className="bg-white h-32 rounded-lg"></div>
                            <div className="bg-red-500 h-32 rounded-lg"></div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-6xl font-black text-black bg-white rounded-full w-24 h-24 flex items-center justify-center">
                              !
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <strong>Inspiration:</strong> Brutalist agencies like Instrument, Collins.
                  Uses bold typography, high contrast, and rebellious messaging.
                </div>
              </div>


            </div>

            {/* AI-Inspired Dark Hero */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">🚀 AI-Inspired Dark Hero</h3>
                <p className="text-lg text-gray-600">
                  Modern dark theme with vibrant gradients and 3D geometric elements
                </p>
              </div>

              <div className="space-y-6 mb-16">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold">AI</div>
                  <h4 className="text-2xl font-bold">AI Agent SDK Hero</h4>
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-blue-100 text-gray-800 rounded-full text-sm font-medium">Tech Forward</span>
                </div>

                <Card className="p-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden min-h-[600px] relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg transform rotate-12 blur-sm"></div>
                    <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg transform -rotate-12 blur-sm"></div>
                    <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg transform rotate-45 blur-sm"></div>
                  </div>

                  <div className="relative grid lg:grid-cols-2 gap-0 min-h-[600px]">
                    <div className="p-12 lg:p-16 flex flex-col justify-center">
                      {/* New Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm font-medium mb-8 w-fit">
                        <FiStar className="mr-2 text-purple-400" />
                        <span className="text-purple-300">New</span>
                        <span className="ml-2 text-gray-300">Introducing AI Agent SDK</span>
                      </div>

                      {/* Main Heading with Gradient */}
                      <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                        <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                          AI Agent
                        </span>
                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                          SDK
                        </span>
                      </h1>

                      {/* Description */}
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                        Create powerful AI agent workflows with just a few lines of code, enabling complex task automation and decision-making processes.
                      </p>

                      {/* CTA Button */}
                      <div className="flex items-center gap-4 mb-8">
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                          <FiArrowRight className="mr-2" />
                          Get Started
                        </Button>
                      </div>

                      {/* Support Text */}
                      <p className="text-gray-400 text-sm">
                        Available for all major programming languages
                      </p>

                      {/* Language Icons */}
                      <div className="flex items-center gap-3 mt-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">JS</div>
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-xs font-bold text-white">PY</div>
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-xs font-bold text-white">GO</div>
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center text-xs font-bold text-white">RS</div>
                        <span className="text-gray-500 text-sm ml-2">+8 more</span>
                      </div>
                    </div>

                    {/* 3D Geometric Elements */}
                    <div className="p-12 lg:p-16 flex items-center justify-center relative">
                      <div className="relative w-80 h-80">
                        {/* Isometric Cube Formation */}
                        <style jsx>{`
                          @keyframes isometric-float {
                            0%, 100% { transform: translate(0, 0) rotateX(0deg) rotateY(0deg) scale(1); }
                            25% { transform: translate(5px, -10px) rotateX(15deg) rotateY(15deg) scale(1.05); }
                            50% { transform: translate(-3px, -15px) rotateX(-10deg) rotateY(25deg) scale(0.95); }
                            75% { transform: translate(8px, -5px) rotateX(20deg) rotateY(-10deg) scale(1.02); }
                          }
                          @keyframes orbital-dance {
                            0% { transform: translate(0, 0) rotate(0deg) scale(1); }
                            25% { transform: translate(15px, -20px) rotate(90deg) scale(1.1); }
                            50% { transform: translate(0, -30px) rotate(180deg) scale(0.9); }
                            75% { transform: translate(-15px, -20px) rotate(270deg) scale(1.05); }
                            100% { transform: translate(0, 0) rotate(360deg) scale(1); }
                          }
                          @keyframes breathing-formation {
                            0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
                            50% { transform: translate(0, 0) scale(1.15) rotate(5deg); }
                          }
                          @keyframes spiral-motion {
                            0% { transform: translate(0, 0) rotate(0deg) scale(1); }
                            25% { transform: translate(20px, -10px) rotate(90deg) scale(1.2); }
                            50% { transform: translate(10px, -25px) rotate(180deg) scale(0.8); }
                            75% { transform: translate(-10px, -15px) rotate(270deg) scale(1.1); }
                            100% { transform: translate(0, 0) rotate(360deg) scale(1); }
                          }
                          @keyframes wave-ripple {
                            0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
                            33% { transform: translate(8px, -12px) scale(1.1) rotate(120deg); }
                            66% { transform: translate(-8px, -8px) scale(0.9) rotate(240deg); }
                          }
                          @keyframes magnetic-pull {
                            0%, 100% { transform: translate(0, 0) scale(1); }
                            50% { transform: translate(-5px, -10px) scale(1.3); }
                          }
                          
                          .iso-float { animation: isometric-float 12s ease-in-out infinite; }
                          .orbital { animation: orbital-dance 8s linear infinite; }
                          .breathing { animation: breathing-formation 6s ease-in-out infinite; }
                          .spiral { animation: spiral-motion 10s ease-in-out infinite; }
                          .wave { animation: wave-ripple 7s ease-in-out infinite; }
                          .magnetic { animation: magnetic-pull 5s ease-in-out infinite; }
                          
                          /* Staggered delays for organic motion */
                          .delay-1 { animation-delay: 0s; }
                          .delay-2 { animation-delay: 0.5s; }
                          .delay-3 { animation-delay: 1s; }
                          .delay-4 { animation-delay: 1.5s; }
                          .delay-5 { animation-delay: 2s; }
                          .delay-6 { animation-delay: 2.5s; }
                          
                          /* Textured surfaces */
                          .textured {
                            background-image: 
                              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px);
                            background-size: 8px 8px;
                          }
                        `}</style>

                        {/* Central Isometric Formation - Version 1: Classic */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                          {/* Top Row */}
                          <div className="absolute top-8 left-16 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-2xl iso-float delay-1" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 85%, 0 100%)' }}></div>
                          <div className="absolute top-4 left-32 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-2xl iso-float delay-2" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 85%)' }}></div>
                          <div className="absolute top-8 left-48 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-2xl iso-float delay-3" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 85%, 0 100%)' }}></div>

                          {/* Middle Row */}
                          <div className="absolute top-20 left-8 w-16 h-16 textured rounded-lg shadow-2xl orbital delay-1" style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)' }}></div>
                          <div className="absolute top-24 left-24 w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-lg shadow-2xl breathing delay-4"></div>
                          <div className="absolute top-20 left-40 w-16 h-16 textured rounded-lg shadow-2xl orbital delay-2" style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)' }}></div>

                          {/* Bottom Row */}
                          <div className="absolute top-32 left-16 w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg shadow-2xl spiral delay-5" style={{ clipPath: 'polygon(0 15%, 85% 0, 100% 100%, 15% 100%)' }}></div>
                          <div className="absolute top-36 left-32 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-2xl spiral delay-6" style={{ clipPath: 'polygon(0 15%, 85% 0, 100% 100%, 15% 100%)' }}></div>

                          {/* Center Magenta Pieces */}
                          <div className="absolute top-28 left-28 w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 rounded shadow-xl wave delay-3"></div>
                          <div className="absolute top-32 left-36 w-8 h-8 bg-gradient-to-br from-pink-500 to-fuchsia-500 rounded shadow-lg magnetic delay-4"></div>
                        </div>

                        {/* Enhanced Ambient Glow */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-48 h-48 bg-gradient-to-r from-orange-500/10 to-fuchsia-500/10 rounded-full blur-3xl animate-pulse"></div>
                          <div className="absolute inset-0 w-64 h-64 bg-gradient-to-r from-fuchsia-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                        </div>

                        {/* Mesmerizing Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 320 320">
                          <line x1="80" y1="80" x2="240" y2="120" stroke="url(#gradient1)" strokeWidth="2" className="line-1" />
                          <line x1="120" y1="160" x2="200" y2="200" stroke="url(#gradient2)" strokeWidth="2" className="line-2" />
                          <line x1="60" y1="240" x2="180" y2="180" stroke="url(#gradient3)" strokeWidth="2" className="line-3" />
                          <line x1="200" y1="60" x2="100" y2="180" stroke="url(#gradient4)" strokeWidth="1.5" className="line-1" />
                          <line x1="40" y1="120" x2="280" y2="200" stroke="url(#gradient5)" strokeWidth="1.5" className="line-2" />
                          <line x1="160" y1="40" x2="160" y2="280" stroke="url(#gradient6)" strokeWidth="1" className="line-3" />

                          <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ec4899" />
                              <stop offset="50%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#ec4899" />
                            </linearGradient>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="50%" stopColor="#06b6d4" />
                              <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#10b981" />
                              <stop offset="50%" stopColor="#14b8a6" />
                              <stop offset="100%" stopColor="#10b981" />
                            </linearGradient>
                            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#f59e0b" />
                              <stop offset="50%" stopColor="#f97316" />
                              <stop offset="100%" stopColor="#f59e0b" />
                            </linearGradient>
                            <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#8b5cf6" />
                              <stop offset="50%" stopColor="#ec4899" />
                              <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                            <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#06b6d4" />
                              <stop offset="50%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Card>
                <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <strong>Design Features:</strong> Dark theme with vibrant gradient text, 3D floating geometric elements with hover animations,
                  subtle background patterns, and modern tech aesthetic inspired by AI/ML platforms.
                </div>
              </div>

              {/* White Background Variation */}
              <div className="space-y-6 mb-16">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-800 to-black text-white rounded-full flex items-center justify-center font-bold">W</div>
                  <h4 className="text-2xl font-bold">White Background Variation</h4>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Clean & Modern</span>
                </div>

                <Card className="p-0 bg-white text-gray-900 overflow-hidden min-h-[600px] relative border border-gray-200">
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-gray-300 rounded-lg transform rotate-12 blur-sm"></div>
                    <div className="absolute top-40 right-32 w-24 h-24 bg-gray-400 rounded-lg transform -rotate-12 blur-sm"></div>
                    <div className="absolute bottom-32 left-32 w-28 h-28 bg-gray-500 rounded-lg transform rotate-45 blur-sm"></div>
                  </div>

                  <div className="relative grid lg:grid-cols-2 gap-0 min-h-[600px]">
                    <div className="p-12 lg:p-16 flex flex-col justify-center">
                      {/* New Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium mb-8 w-fit">
                        <FiStar className="mr-2 text-gray-600" />
                        <span className="text-gray-700">New</span>
                        <span className="ml-2 text-gray-600">Introducing AI Agent SDK</span>
                      </div>

                      {/* Main Heading */}
                      <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                        <span className="block text-gray-900">
                          AI Agent
                        </span>
                        <span className="block text-gray-700">
                          SDK
                        </span>
                      </h1>

                      {/* Description */}
                      <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                        Create powerful AI agent workflows with just a few lines of code, enabling complex task automation and decision-making processes.
                      </p>

                      {/* CTA Button */}
                      <div className="flex items-center gap-4 mb-8">
                        <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-gray-900/25 transition-all duration-300">
                          <FiArrowRight className="mr-2" />
                          Get Started
                        </Button>
                      </div>

                      {/* Support Text */}
                      <p className="text-gray-500 text-sm">
                        Available for all major programming languages
                      </p>

                      {/* Language Icons - Grayscale */}
                      <div className="flex items-center gap-3 mt-4">
                        <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-xs font-bold text-white">JS</div>
                        <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-xs font-bold text-white">PY</div>
                        <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center text-xs font-bold text-white">GO</div>
                        <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">RS</div>
                        <span className="text-gray-400 text-sm ml-2">+8 more</span>
                      </div>
                    </div>

                    {/* Grayscale Geometric Elements */}
                    <div className="p-12 lg:p-16 flex items-center justify-center relative">
                      <div className="relative w-80 h-80">
                        {/* Grayscale Isometric Formation */}
                        <style jsx>{`
                          /* White background textured surfaces */
                          .textured-white {
                            background-image: 
                              radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, rgba(0,0,0,0.05) 1px, transparent 1px);
                            background-size: 8px 8px;
                          }
                        `}</style>

                        {/* Central Isometric Formation - Grayscale Version */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                          {/* Top Row - Black/Dark Gray */}
                          <div className="absolute top-8 left-16 w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl iso-float delay-1" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 85%, 0 100%)' }}></div>
                          <div className="absolute top-4 left-32 w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-2xl iso-float delay-2" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 85%)' }}></div>
                          <div className="absolute top-8 left-48 w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl iso-float delay-3" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 85%, 0 100%)' }}></div>

                          {/* Middle Row - Light Gray Textured */}
                          <div className="absolute top-20 left-8 w-16 h-16 textured-white rounded-lg shadow-2xl orbital delay-1" style={{ background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%)' }}></div>
                          <div className="absolute top-24 left-24 w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg shadow-2xl breathing delay-4"></div>
                          <div className="absolute top-20 left-40 w-16 h-16 textured-white rounded-lg shadow-2xl orbital delay-2" style={{ background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%)' }}></div>

                          {/* Bottom Row - Medium Gray */}
                          <div className="absolute top-32 left-16 w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg shadow-2xl spiral delay-5" style={{ clipPath: 'polygon(0 15%, 85% 0, 100% 100%, 15% 100%)' }}></div>
                          <div className="absolute top-36 left-32 w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg shadow-2xl spiral delay-6" style={{ clipPath: 'polygon(0 15%, 85% 0, 100% 100%, 15% 100%)' }}></div>

                          {/* Center White/Light Gray Pieces */}
                          <div className="absolute top-28 left-28 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded shadow-xl wave delay-3"></div>
                          <div className="absolute top-32 left-36 w-8 h-8 bg-gradient-to-br from-white to-gray-200 rounded shadow-lg magnetic delay-4"></div>
                        </div>

                        {/* Subtle Ambient Glow - Grayscale */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-48 h-48 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-full blur-3xl animate-pulse"></div>
                          <div className="absolute inset-0 w-64 h-64 bg-gradient-to-r from-gray-200/10 to-gray-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                        </div>

                        {/* Grayscale Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 320 320">
                          <line x1="80" y1="80" x2="240" y2="120" stroke="url(#gradient-gray-1)" strokeWidth="2" className="line-1" />
                          <line x1="120" y1="160" x2="200" y2="200" stroke="url(#gradient-gray-2)" strokeWidth="2" className="line-2" />
                          <line x1="60" y1="240" x2="180" y2="180" stroke="url(#gradient-gray-3)" strokeWidth="2" className="line-3" />
                          <line x1="200" y1="60" x2="100" y2="180" stroke="url(#gradient-gray-4)" strokeWidth="1.5" className="line-1" />
                          <line x1="40" y1="120" x2="280" y2="200" stroke="url(#gradient-gray-5)" strokeWidth="1.5" className="line-2" />
                          <line x1="160" y1="40" x2="160" y2="280" stroke="url(#gradient-gray-6)" strokeWidth="1" className="line-3" />

                          <defs>
                            <linearGradient id="gradient-gray-1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#374151" />
                              <stop offset="50%" stopColor="#6b7280" />
                              <stop offset="100%" stopColor="#374151" />
                            </linearGradient>
                            <linearGradient id="gradient-gray-2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#4b5563" />
                              <stop offset="50%" stopColor="#9ca3af" />
                              <stop offset="100%" stopColor="#4b5563" />
                            </linearGradient>
                            <linearGradient id="gradient-gray-3" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#6b7280" />
                              <stop offset="50%" stopColor="#d1d5db" />
                              <stop offset="100%" stopColor="#6b7280" />
                            </linearGradient>
                            <linearGradient id="gradient-gray-4" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#9ca3af" />
                              <stop offset="50%" stopColor="#e5e7eb" />
                              <stop offset="100%" stopColor="#9ca3af" />
                            </linearGradient>
                            <linearGradient id="gradient-gray-5" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#374151" />
                              <stop offset="50%" stopColor="#6b7280" />
                              <stop offset="100%" stopColor="#374151" />
                            </linearGradient>
                            <linearGradient id="gradient-gray-6" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#6b7280" />
                              <stop offset="50%" stopColor="#4b5563" />
                              <stop offset="100%" stopColor="#6b7280" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Card>
                <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <strong>White Variation:</strong> Clean white background with sophisticated grayscale geometric elements.
                  Uses black, white, and various shades of gray for a professional, minimalist aesthetic.
                </div>
              </div>


              {/* Multiple Cube Formation Versions */}
              <div className="mt-12">
                <h4 className="text-2xl font-bold mb-8 text-center">🎭 Animation Variations</h4>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Version 2: Scattered Formation */}
                  <Card className="p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden min-h-[400px] relative">
                    <div className="text-center mb-4">
                      <h5 className="text-lg font-bold text-orange-400">Version 2: Scattered Dance</h5>
                    </div>
                    <div className="relative w-full h-80">
                      <style jsx>{`
                        @keyframes scatter-1 {
                          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
                          25% { transform: translate(30px, -20px) rotate(45deg) scale(1.2); }
                          50% { transform: translate(-20px, -40px) rotate(90deg) scale(0.8); }
                          75% { transform: translate(40px, -10px) rotate(135deg) scale(1.1); }
                        }
                        @keyframes scatter-2 {
                          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
                          33% { transform: translate(-25px, 15px) rotate(-60deg) scale(1.3); }
                          66% { transform: translate(35px, 25px) rotate(120deg) scale(0.7); }
                        }
                        @keyframes scatter-3 {
                          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
                          20% { transform: translate(15px, -30px) rotate(72deg) scale(1.1); }
                          40% { transform: translate(-30px, -15px) rotate(144deg) scale(0.9); }
                          60% { transform: translate(25px, 20px) rotate(216deg) scale(1.2); }
                          80% { transform: translate(-10px, 30px) rotate(288deg) scale(0.8); }
                        }
                        .scatter-1 { animation: scatter-1 9s ease-in-out infinite; }
                        .scatter-2 { animation: scatter-2 7s ease-in-out infinite; }
                        .scatter-3 { animation: scatter-3 11s ease-in-out infinite; }
                      `}</style>

                      {/* Scattered Orange Cubes */}
                      <div className="absolute top-12 left-16 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-xl scatter-1"></div>
                      <div className="absolute top-8 right-20 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg shadow-xl scatter-2 delay-1"></div>
                      <div className="absolute bottom-16 left-12 w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg shadow-xl scatter-3 delay-2"></div>

                      {/* Scattered Gray Textured Cubes */}
                      <div className="absolute top-20 left-32 w-10 h-10 textured rounded-lg shadow-xl scatter-2 delay-3" style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)' }}></div>
                      <div className="absolute bottom-20 right-16 w-12 h-12 textured rounded-lg shadow-xl scatter-1 delay-4" style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)' }}></div>

                      {/* Scattered Magenta Cubes */}
                      <div className="absolute top-32 right-12 w-8 h-8 bg-gradient-to-br from-fuchsia-400 to-pink-500 rounded shadow-lg scatter-3 delay-5"></div>
                      <div className="absolute bottom-8 left-24 w-10 h-10 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded shadow-lg scatter-1 delay-6"></div>
                      <div className="absolute top-16 left-48 w-6 h-6 bg-gradient-to-br from-fuchsia-500 to-pink-400 rounded shadow-md scatter-2 delay-2"></div>
                    </div>
                  </Card>

                  {/* Version 3: Orbital Formation */}
                  <Card className="p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden min-h-[400px] relative">
                    <div className="text-center mb-4">
                      <h5 className="text-lg font-bold text-fuchsia-400">Version 3: Orbital System</h5>
                    </div>
                    <div className="relative w-full h-80">
                      <style jsx>{`
                        @keyframes orbit-center {
                          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
                          100% { transform: translate(0, 0) rotate(360deg) scale(1); }
                        }
                        @keyframes orbit-ring-1 {
                          0% { transform: translate(0, 0) rotate(0deg); }
                          100% { transform: translate(0, 0) rotate(-360deg); }
                        }
                        @keyframes orbit-ring-2 {
                          0% { transform: translate(0, 0) rotate(0deg); }
                          100% { transform: translate(0, 0) rotate(360deg); }
                        }
                        .orbit-center { animation: orbit-center 20s linear infinite; }
                        .orbit-ring-1 { animation: orbit-ring-1 15s linear infinite; }
                        .orbit-ring-2 { animation: orbit-ring-2 12s linear infinite; }
                      `}</style>

                      {/* Central Core */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-lg shadow-2xl orbit-center"></div>
                      </div>

                      {/* Inner Orbit Ring */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 orbit-ring-1">
                        <div className="absolute -top-12 -left-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-xl"></div>
                        <div className="absolute top-8 -left-2 w-8 h-8 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg shadow-xl"></div>
                        <div className="absolute top-2 -left-12 w-6 h-6 textured rounded shadow-lg" style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)' }}></div>
                        <div className="absolute top-2 left-8 w-6 h-6 textured rounded shadow-lg" style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)' }}></div>
                      </div>

                      {/* Outer Orbit Ring */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 orbit-ring-2">
                        <div className="absolute -top-20 -left-3 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-xl"></div>
                        <div className="absolute top-12 -left-3 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-xl"></div>
                        <div className="absolute top-1 -left-20 w-8 h-8 textured rounded-lg shadow-lg" style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)' }}></div>
                        <div className="absolute top-1 left-12 w-8 h-8 textured rounded-lg shadow-lg" style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)' }}></div>
                        <div className="absolute -top-6 left-16 w-6 h-6 bg-gradient-to-br from-fuchsia-400 to-pink-500 rounded shadow-md"></div>
                        <div className="absolute top-16 left-16 w-6 h-6 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded shadow-md"></div>
                      </div>
                    </div>
                  </Card>

                  {/* Version 4: Wave Formation */}
                  <Card className="p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden min-h-[400px] relative">
                    <div className="text-center mb-4">
                      <h5 className="text-lg font-bold text-orange-400">Version 4: Wave Ripple</h5>
                    </div>
                    <div className="relative w-full h-80">
                      <style jsx>{`
                        @keyframes wave-1 {
                          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
                          50% { transform: translateY(-20px) scale(1.1) rotate(10deg); }
                        }
                        @keyframes wave-2 {
                          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
                          50% { transform: translateY(-15px) scale(1.05) rotate(-5deg); }
                        }
                        @keyframes wave-3 {
                          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
                          50% { transform: translateY(-25px) scale(1.15) rotate(15deg); }
                        }
                        .wave-1 { animation: wave-1 3s ease-in-out infinite; }
                        .wave-2 { animation: wave-2 3s ease-in-out infinite; }
                        .wave-3 { animation: wave-3 3s ease-in-out infinite; }
                      `}</style>

                      {/* Wave Row 1 */}
                      <div className="absolute top-8 left-8 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-xl wave-1"></div>
                      <div className="absolute top-8 left-24 w-8 h-8 textured rounded shadow-lg wave-2 delay-1" style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)' }}></div>
                      <div className="absolute top-8 left-36 w-6 h-6 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded shadow-md wave-3 delay-2"></div>
                      <div className="absolute top-8 left-48 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg shadow-xl wave-1 delay-3"></div>

                      {/* Wave Row 2 */}
                      <div className="absolute top-24 left-12 w-8 h-8 textured rounded shadow-lg wave-2 delay-4" style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)' }}></div>
                      <div className="absolute top-24 left-28 w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-pink-600 rounded-lg shadow-xl wave-3 delay-5"></div>
                      <div className="absolute top-24 left-44 w-8 h-8 bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg shadow-lg wave-1 delay-6"></div>

                      {/* Wave Row 3 */}
                      <div className="absolute top-40 left-16 w-6 h-6 bg-gradient-to-br from-pink-400 to-fuchsia-500 rounded shadow-md wave-1 delay-2"></div>
                      <div className="absolute top-40 left-32 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-xl wave-2 delay-3"></div>
                      <div className="absolute top-40 left-48 w-8 h-8 textured rounded shadow-lg wave-3 delay-4" style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)' }}></div>
                    </div>
                  </Card>

                  {/* Version 5: Spiral Galaxy */}
                  <Card className="p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden min-h-[400px] relative">
                    <div className="text-center mb-4">
                      <h5 className="text-lg font-bold text-fuchsia-400">Version 5: Spiral Galaxy</h5>
                    </div>
                    <div className="relative w-full h-80">
                      <style jsx>{`
                        @keyframes spiral-arm-1 {
                          0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
                          100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
                        }
                        @keyframes spiral-arm-2 {
                          0% { transform: rotate(120deg) translateX(60px) rotate(-120deg); }
                          100% { transform: rotate(480deg) translateX(60px) rotate(-480deg); }
                        }
                        @keyframes spiral-arm-3 {
                          0% { transform: rotate(240deg) translateX(80px) rotate(-240deg); }
                          100% { transform: rotate(600deg) translateX(80px) rotate(-600deg); }
                        }
                        .spiral-arm-1 { animation: spiral-arm-1 18s linear infinite; }
                        .spiral-arm-2 { animation: spiral-arm-2 22s linear infinite; }
                        .spiral-arm-3 { animation: spiral-arm-3 26s linear infinite; }
                      `}</style>

                      {/* Central Core */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-lg shadow-2xl animate-pulse"></div>
                      </div>

                      {/* Spiral Arm 1 */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 spiral-arm-1">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-xl"></div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 spiral-arm-1" style={{ animationDelay: '-6s' }}>
                        <div className="w-6 h-6 textured rounded shadow-lg" style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)' }}></div>
                      </div>

                      {/* Spiral Arm 2 */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 spiral-arm-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-xl"></div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 spiral-arm-2" style={{ animationDelay: '-8s' }}>
                        <div className="w-4 h-4 bg-gradient-to-br from-fuchsia-400 to-pink-500 rounded shadow-md"></div>
                      </div>

                      {/* Spiral Arm 3 */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 spiral-arm-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg shadow-lg"></div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 spiral-arm-3" style={{ animationDelay: '-10s' }}>
                        <div className="w-8 h-8 textured rounded-lg shadow-lg" style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)' }}></div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

          </section>
        )}

        {/* Brand Section */}
        {activeTab === 'brand' && (
          <section className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Brand Identity</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our brand reflects professionalism, innovation, and technical expertise
              </p>
            </div>

            {/* Logo System */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Logo System</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-8 bg-white">
                  <div className="text-center mb-6">
                    <img
                      src="/logo/png/mindscraft-logo.png"
                      alt="Mindscraft Logo"
                      className="h-16 mx-auto"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-lg mb-2">Primary Logo</h4>
                    <p className="text-gray-600 mb-4">Use on light backgrounds</p>
                    <div className="flex justify-center gap-2">
                      <Button size="sm" variant="outline">
                        <FiDownload className="mr-1" /> SVG
                      </Button>
                      <Button size="sm" variant="outline">
                        <FiDownload className="mr-1" /> PNG
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gray-900">
                  <div className="text-center mb-6">
                    <img
                      src="/logo/png/mindscraft-logo-dark.png"
                      alt="Mindscraft Logo Dark"
                      className="h-16 mx-auto"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-lg mb-2 text-white">Dark Version</h4>
                    <p className="text-gray-300 mb-4">Use on dark backgrounds</p>
                    <div className="flex justify-center gap-2">
                      <Button size="sm" variant="outline" className="border-gray-600 text-white">
                        <FiDownload className="mr-1" /> SVG
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-white">
                        <FiDownload className="mr-1" /> PNG
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Brand Colors */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Brand Colors</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 bg-white">
                  <h4 className="font-bold text-lg mb-6">Primary Colors</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#101828] rounded-xl relative">
                        <button
                          onClick={() => navigator.clipboard.writeText('#101828')}
                          className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/50 rounded-xl transition-opacity"
                        >
                          <FiCopy className="text-white" />
                        </button>
                      </div>
                      <div>
                        <h5 className="font-semibold">Charcoal Black</h5>
                        <p className="font-mono text-sm text-gray-600">#101828</p>
                        <p className="text-xs text-gray-500">Primary brand color</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#F3F4C0] rounded-xl border relative">
                        <button
                          onClick={() => navigator.clipboard.writeText('#F3F4C0')}
                          className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/20 rounded-xl transition-opacity"
                        >
                          <FiCopy className="text-gray-800" />
                        </button>
                      </div>
                      <div>
                        <h5 className="font-semibold">Cream Yellow</h5>
                        <p className="font-mono text-sm text-gray-600">#F3F4C0</p>
                        <p className="text-xs text-gray-500">Brand accent color</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gray-50">
                  <h4 className="font-bold text-lg mb-6">Usage Guidelines</h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Do use high contrast combinations</p>
                        <p className="text-gray-600">Ensure 4.5:1 contrast ratio for accessibility</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Do use cream yellow sparingly</p>
                        <p className="text-gray-600">As accent color for highlights and CTAs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiX className="text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Don't use low contrast combinations</p>
                        <p className="text-gray-600">Avoid cream yellow on white backgrounds</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Color Variables Section - Button System Colors */}
        {activeTab === 'color-variables' && (
          <section className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Button System Color Variables</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visual representation of all color variables used in our button system. These are the actual CSS custom properties referenced in your button-system.css file.
              </p>
            </div>

            {/* Note about missing variables */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <FiAlertTriangle className="text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Missing Color Definitions</h3>
                  <p className="text-yellow-700 text-sm">
                    Your button system references <code className="bg-yellow-100 px-1 rounded">--color-black-*</code>, <code className="bg-yellow-100 px-1 rounded">--color-white-*</code>, and <code className="bg-yellow-100 px-1 rounded">--color-blue-*</code> variables, 
                    but these are not defined in your CSS files. Below are estimated values based on common design system patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* Black Color Variables */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-8">Black Color Variables</h3>
                <p className="text-gray-600 mb-6">These variables are referenced in your button system for dark themes and backgrounds.</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {[
                    { name: '--color-black-200', estimated: '#1f2937', usage: 'Primary button background, outline button bg' },
                    { name: '--color-black-300', estimated: '#374151', usage: 'Ghost button text active, outline text active' },
                    { name: '--color-black-350', estimated: '#4b5563', usage: 'Outline button active background' },
                    { name: '--color-black-400', estimated: '#6b7280', usage: 'Ghost button text, outline text, disabled borders' },
                    { name: '--color-black-500', estimated: '#9ca3af', usage: 'Button active states, outline borders' },
                    { name: '--color-black-600', estimated: '#d1d5db', usage: 'Button borders, hover states, disabled text' },
                    { name: '--color-black-700', estimated: '#e5e7eb', usage: 'Button active borders, outline hover borders' },
                  ].map((color) => (
                    <div key={color.name} className="text-center">
                      <div 
                        className="w-full h-24 rounded-lg mb-3 border border-gray-300 shadow-sm"
                        style={{ backgroundColor: color.estimated }}
                      ></div>
                      <div className="text-xs font-mono text-gray-700 mb-1">{color.name}</div>
                      <div className="text-xs text-gray-500 mb-2">{color.estimated}</div>
                      <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded text-left">
                        <strong>Used for:</strong><br />
                        {color.usage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* White Color Variables */}
              <div>
                <h3 className="text-3xl font-bold mb-8">White Color Variables</h3>
                <p className="text-gray-600 mb-6">These variables are used for light themes, text colors, and background elements.</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {[
                    { name: '--color-white-100', estimated: '#ffffff', usage: 'Pure white backgrounds, button text hover' },
                    { name: '--color-white-200', estimated: '#f9fafb', usage: 'Blue theme button hover backgrounds' },
                    { name: '--color-white-300', estimated: '#f3f4f6', usage: 'Primary button text, ghost hover bg' },
                    { name: '--color-white-400', estimated: '#e5e7eb', usage: 'Dark theme text, ghost active bg, blue text' },
                    { name: '--color-white-500', estimated: '#d1d5db', usage: 'Ghost button text, outline disabled borders' },
                    { name: '--color-white-700', estimated: '#9ca3af', usage: 'Dark theme outline hover borders' },
                    { name: '--color-white-800', estimated: '#6b7280', usage: 'Outline button borders, disabled text' },
                    { name: '--color-white-900', estimated: '#4b5563', usage: 'Primary disabled backgrounds and borders' },
                  ].map((color) => (
                    <div key={color.name} className="text-center">
                      <div 
                        className="w-full h-24 rounded-lg mb-3 border border-gray-300 shadow-sm"
                        style={{ backgroundColor: color.estimated }}
                      ></div>
                      <div className="text-xs font-mono text-gray-700 mb-1">{color.name}</div>
                      <div className="text-xs text-gray-500 mb-2">{color.estimated}</div>
                      <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded text-left">
                        <strong>Used for:</strong><br />
                        {color.usage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blue Color Variables */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Blue Color Variables</h3>
                <p className="text-gray-600 mb-6">These variables are used in the blue theme variant of your button system.</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {[
                    { name: '--color-blue-400', estimated: '#60a5fa', usage: 'Blue button borders, disabled text' },
                    { name: '--color-blue-450', estimated: '#3b82f6', usage: 'Blue button backgrounds, ghost hover/focus' },
                    { name: '--color-blue-500', estimated: '#2563eb', usage: 'Blue outline backgrounds, button text hover' },
                  ].map((color) => (
                    <div key={color.name} className="text-center">
                      <div 
                        className="w-full h-24 rounded-lg mb-3 border border-gray-300 shadow-sm"
                        style={{ backgroundColor: color.estimated }}
                      ></div>
                      <div className="text-xs font-mono text-gray-700 mb-1">{color.name}</div>
                      <div className="text-xs text-gray-500 mb-2">{color.estimated}</div>
                      <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded text-left">
                        <strong>Used for:</strong><br />
                        {color.usage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button Examples with Variable Usage */}
              <div>
                <h3 className="text-3xl font-bold mb-8">How These Variables Work in Buttons</h3>
                <p className="text-gray-600 mb-6">Here's how these color variables are actually used in your button system:</p>
                
                <div className="space-y-8">
                  {/* Variable Mapping Examples */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">Primary Button (Default Theme)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="space-y-2 text-sm font-mono">
                          <div><span className="text-gray-600">Background:</span> <span className="text-blue-600">var(--color-black-200)</span></div>
                          <div><span className="text-gray-600">Border:</span> <span className="text-blue-600">var(--color-black-600)</span></div>
                          <div><span className="text-gray-600">Text:</span> <span className="text-blue-600">var(--color-white-300)</span></div>
                          <div><span className="text-gray-600">Hover BG:</span> <span className="text-blue-600">var(--color-black-600) → var(--color-black-200)</span></div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button 
                          className="px-6 py-3 rounded-lg font-medium transition-all duration-200"
                          style={{
                            backgroundColor: '#1f2937',
                            borderColor: '#9ca3af',
                            color: '#f3f4f6',
                            border: '1px solid'
                          }}
                        >
                          Example Button
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">Primary Button (Blue Theme)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="space-y-2 text-sm font-mono">
                          <div><span className="text-gray-600">Background:</span> <span className="text-blue-600">var(--color-blue-450)</span></div>
                          <div><span className="text-gray-600">Border:</span> <span className="text-blue-600">var(--color-blue-400)</span></div>
                          <div><span className="text-gray-600">Text:</span> <span className="text-blue-600">var(--color-white-300)</span></div>
                          <div><span className="text-gray-600">Hover BG:</span> <span className="text-blue-600">var(--color-white-100) → #c8dcffb2</span></div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button 
                          className="px-6 py-3 rounded-lg font-medium transition-all duration-200"
                          style={{
                            backgroundColor: '#3b82f6',
                            borderColor: '#60a5fa',
                            color: '#f3f4f6',
                            border: '1px solid'
                          }}
                        >
                          Blue Theme Button
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-white">Primary Button (Dark Theme)</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="space-y-2 text-sm font-mono text-gray-300">
                          <div><span className="text-gray-400">Background:</span> <span className="text-blue-400">var(--color-black-500)</span></div>
                          <div><span className="text-gray-400">Border:</span> <span className="text-blue-400">#50596780</span></div>
                          <div><span className="text-gray-400">Text:</span> <span className="text-blue-400">var(--color-white-400)</span></div>
                          <div><span className="text-gray-400">Hover BG:</span> <span className="text-blue-400">var(--color-black-600)</span></div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button 
                          className="px-6 py-3 rounded-lg font-medium transition-all duration-200"
                          style={{
                            backgroundColor: '#6b7280',
                            borderColor: '#50596780',
                            color: '#e5e7eb',
                            border: '1px solid'
                          }}
                        >
                          Dark Theme Button
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Complete Variable List */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Complete List of Missing Variables</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Here are ALL the color variables referenced in your button-system.css file:
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-xs">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Black Variables (7 total)</h4>
                    <div className="space-y-1 font-mono text-gray-600">
                      <div>--color-black-200</div>
                      <div>--color-black-300</div>
                      <div>--color-black-350</div>
                      <div>--color-black-400</div>
                      <div>--color-black-500</div>
                      <div>--color-black-600</div>
                      <div>--color-black-700</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">White Variables (8 total)</h4>
                    <div className="space-y-1 font-mono text-gray-600">
                      <div>--color-white-100</div>
                      <div>--color-white-200</div>
                      <div>--color-white-300</div>
                      <div>--color-white-400</div>
                      <div>--color-white-500</div>
                      <div>--color-white-700</div>
                      <div>--color-white-800</div>
                      <div>--color-white-900</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Blue Variables (3 total)</h4>
                    <div className="space-y-1 font-mono text-gray-600">
                      <div>--color-blue-400</div>
                      <div>--color-blue-450</div>
                      <div>--color-blue-500</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
                  <strong>Total: 18 missing color variables</strong> that need to be defined for your button system to work properly.
                </div>
              </div>

              {/* Action Items */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <FiInfo className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Next Steps</h3>
                    <p className="text-blue-700 text-sm mb-3">
                      To make your button system work properly, you need to define these color variables in your CSS:
                    </p>
                    <div className="bg-blue-100 p-3 rounded text-xs font-mono text-blue-800 overflow-x-auto">
                      <div>:root {`{`}</div>
                      <div className="ml-2">/* Black Variables */</div>
                      <div className="ml-2">--color-black-200: #1f2937;</div>
                      <div className="ml-2">--color-black-300: #374151;</div>
                      <div className="ml-2">--color-black-350: #4b5563;</div>
                      <div className="ml-2">--color-black-400: #6b7280;</div>
                      <div className="ml-2">--color-black-500: #9ca3af;</div>
                      <div className="ml-2">--color-black-600: #d1d5db;</div>
                      <div className="ml-2">--color-black-700: #e5e7eb;</div>
                      <div className="ml-2 mt-2">/* White Variables */</div>
                      <div className="ml-2">--color-white-100: #ffffff;</div>
                      <div className="ml-2">--color-white-200: #f9fafb;</div>
                      <div className="ml-2">--color-white-300: #f3f4f6;</div>
                      <div className="ml-2">--color-white-400: #e5e7eb;</div>
                      <div className="ml-2">--color-white-500: #d1d5db;</div>
                      <div className="ml-2">--color-white-700: #9ca3af;</div>
                      <div className="ml-2">--color-white-800: #6b7280;</div>
                      <div className="ml-2">--color-white-900: #4b5563;</div>
                      <div className="ml-2 mt-2">/* Blue Variables */</div>
                      <div className="ml-2">--color-blue-400: #60a5fa;</div>
                      <div className="ml-2">--color-blue-450: #3b82f6;</div>
                      <div className="ml-2">--color-blue-500: #2563eb;</div>
                      <div>{`}`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Design Tokens Section */}
        {activeTab === 'design-tokens' && (
          <section className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Design Tokens</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our design tokens provide the foundation for consistent visual design across all platforms and products.
              </p>
            </div>

            {/* Color System */}
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-bold mb-8">Color System</h3>
                
                {/* Primary Brand Colors */}
                <div className="mb-12">
                  <h4 className="text-xl font-semibold mb-6">Primary Brand Colors</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
                    {[
                      { name: 'primary-50', value: '239 246 255', hex: '#eff6ff' },
                      { name: 'primary-100', value: '219 234 254', hex: '#dbeafe' },
                      { name: 'primary-200', value: '191 219 254', hex: '#bfdbfe' },
                      { name: 'primary-300', value: '147 197 253', hex: '#93c5fd' },
                      { name: 'primary-400', value: '96 165 250', hex: '#60a5fa' },
                      { name: 'primary-500', value: '59 130 246', hex: '#3b82f6' },
                      { name: 'primary-600', value: '37 99 235', hex: '#2563eb' },
                      { name: 'primary-700', value: '29 78 216', hex: '#1d4ed8' },
                      { name: 'primary-800', value: '30 64 175', hex: '#1e40af' },
                      { name: 'primary-900', value: '30 58 138', hex: '#1e3a8a' },
                    ].map((color) => (
                      <div key={color.name} className="text-center">
                        <div 
                          className="w-full h-20 rounded-lg mb-2 border border-gray-200 shadow-sm"
                          style={{ backgroundColor: color.hex }}
                        ></div>
                        <div className="text-xs font-mono text-gray-600">{color.name}</div>
                        <div className="text-xs text-gray-500">{color.hex}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grayscale Colors */}
                <div className="mb-12">
                  <h4 className="text-xl font-semibold mb-6">Grayscale</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
                    {[
                      { name: 'gray-50', value: '249 250 251', hex: '#f9fafb' },
                      { name: 'gray-100', value: '243 244 246', hex: '#f3f4f6' },
                      { name: 'gray-200', value: '229 231 235', hex: '#e5e7eb' },
                      { name: 'gray-300', value: '209 213 219', hex: '#d1d5db' },
                      { name: 'gray-400', value: '156 163 175', hex: '#9ca3af' },
                      { name: 'gray-500', value: '107 114 128', hex: '#6b7280' },
                      { name: 'gray-600', value: '75 85 99', hex: '#4b5563' },
                      { name: 'gray-700', value: '55 65 81', hex: '#374151' },
                      { name: 'gray-800', value: '31 41 55', hex: '#1f2937' },
                      { name: 'gray-900', value: '17 24 39', hex: '#111827' },
                    ].map((color) => (
                      <div key={color.name} className="text-center">
                        <div 
                          className="w-full h-20 rounded-lg mb-2 border border-gray-200 shadow-sm"
                          style={{ backgroundColor: color.hex }}
                        ></div>
                        <div className="text-xs font-mono text-gray-600">{color.name}</div>
                        <div className="text-xs text-gray-500">{color.hex}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Semantic Colors */}
                <div className="mb-12">
                  <h4 className="text-xl font-semibold mb-6">Semantic Colors</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Success Colors */}
                    <div>
                      <h5 className="font-medium mb-4 text-green-700">Success</h5>
                      <div className="space-y-3">
                        {[
                          { name: 'success-50', hex: '#f0fdf4' },
                          { name: 'success-100', hex: '#dcfce7' },
                          { name: 'success-500', hex: '#22c55e' },
                          { name: 'success-600', hex: '#16a34a' },
                        ].map((color) => (
                          <div key={color.name} className="flex items-center gap-3">
                            <div 
                              className="w-12 h-12 rounded-lg border border-gray-200"
                              style={{ backgroundColor: color.hex }}
                            ></div>
                            <div>
                              <div className="text-sm font-mono">{color.name}</div>
                              <div className="text-xs text-gray-500">{color.hex}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Error Colors */}
                    <div>
                      <h5 className="font-medium mb-4 text-red-700">Error</h5>
                      <div className="space-y-3">
                        {[
                          { name: 'error-50', hex: '#fef2f2' },
                          { name: 'error-100', hex: '#fee2e2' },
                          { name: 'error-500', hex: '#ef4444' },
                          { name: 'error-600', hex: '#dc2626' },
                        ].map((color) => (
                          <div key={color.name} className="flex items-center gap-3">
                            <div 
                              className="w-12 h-12 rounded-lg border border-gray-200"
                              style={{ backgroundColor: color.hex }}
                            ></div>
                            <div>
                              <div className="text-sm font-mono">{color.name}</div>
                              <div className="text-xs text-gray-500">{color.hex}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Warning Colors */}
                    <div>
                      <h5 className="font-medium mb-4 text-yellow-700">Warning</h5>
                      <div className="space-y-3">
                        {[
                          { name: 'warning-50', hex: '#fffbeb' },
                          { name: 'warning-100', hex: '#fef3c7' },
                          { name: 'warning-500', hex: '#f59e0b' },
                          { name: 'warning-600', hex: '#d97706' },
                        ].map((color) => (
                          <div key={color.name} className="flex items-center gap-3">
                            <div 
                              className="w-12 h-12 rounded-lg border border-gray-200"
                              style={{ backgroundColor: color.hex }}
                            ></div>
                            <div>
                              <div className="text-sm font-mono">{color.name}</div>
                              <div className="text-xs text-gray-500">{color.hex}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacing System */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Spacing System</h3>
                <div className="space-y-4">
                  {[
                    { name: 'space-1', value: '0.25rem', px: '4px' },
                    { name: 'space-2', value: '0.5rem', px: '8px' },
                    { name: 'space-3', value: '0.75rem', px: '12px' },
                    { name: 'space-4', value: '1rem', px: '16px' },
                    { name: 'space-5', value: '1.25rem', px: '20px' },
                    { name: 'space-6', value: '1.5rem', px: '24px' },
                    { name: 'space-8', value: '2rem', px: '32px' },
                    { name: 'space-10', value: '2.5rem', px: '40px' },
                    { name: 'space-12', value: '3rem', px: '48px' },
                    { name: 'space-16', value: '4rem', px: '64px' },
                    { name: 'space-20', value: '5rem', px: '80px' },
                    { name: 'space-24', value: '6rem', px: '96px' },
                  ].map((space) => (
                    <div key={space.name} className="flex items-center gap-4">
                      <div className="w-20 text-sm font-mono text-gray-600">{space.name}</div>
                      <div className="w-16 text-sm text-gray-500">{space.px}</div>
                      <div 
                        className="bg-blue-500 h-4 rounded"
                        style={{ width: space.value }}
                      ></div>
                      <div className="text-sm text-gray-500">{space.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Border Radius */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Border Radius</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                  {[
                    { name: 'radius-sm', value: '0.125rem', px: '2px' },
                    { name: 'radius-md', value: '0.375rem', px: '6px' },
                    { name: 'radius-lg', value: '0.5rem', px: '8px' },
                    { name: 'radius-xl', value: '0.75rem', px: '12px' },
                    { name: 'radius-2xl', value: '1rem', px: '16px' },
                    { name: 'radius-3xl', value: '1.5rem', px: '24px' },
                    { name: 'radius-full', value: '9999px', px: 'full' },
                  ].map((radius) => (
                    <div key={radius.name} className="text-center">
                      <div 
                        className="w-20 h-20 bg-blue-500 mx-auto mb-3"
                        style={{ borderRadius: radius.value }}
                      ></div>
                      <div className="text-sm font-mono text-gray-600">{radius.name}</div>
                      <div className="text-xs text-gray-500">{radius.px}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shadows */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Shadows</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { name: 'shadow-sm', description: 'Small shadow for subtle elevation' },
                    { name: 'shadow-md', description: 'Medium shadow for cards and buttons' },
                    { name: 'shadow-lg', description: 'Large shadow for modals and dropdowns' },
                    { name: 'shadow-xl', description: 'Extra large shadow for floating elements' },
                  ].map((shadow) => (
                    <div key={shadow.name} className="text-center">
                      <div 
                        className={`w-24 h-24 bg-white rounded-lg mx-auto mb-4 ${shadow.name === 'shadow-sm' ? 'shadow-sm' : 
                          shadow.name === 'shadow-md' ? 'shadow-md' :
                          shadow.name === 'shadow-lg' ? 'shadow-lg' : 'shadow-xl'}`}
                      ></div>
                      <div className="text-sm font-mono text-gray-600">{shadow.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{shadow.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Button System Showcase */}
        {activeTab === 'components' && (
          <section className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Component Library</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our component library showcases the button system and interactive elements built with our design tokens.
              </p>
            </div>

            {/* Button System */}
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-bold mb-8">Button System</h3>
                
                {/* Primary Buttons */}
                <div className="mb-12">
                  <h4 className="text-xl font-semibold mb-6">Primary Buttons</h4>
                  <div className="space-y-8">
                    {/* Default Theme */}
                    <div>
                      <h5 className="text-lg font-medium mb-4">Default Theme</h5>
                      <div className="flex flex-wrap gap-4 p-6 bg-gray-50 rounded-lg">
                        <button className="button-primary px-6 py-3 rounded-lg font-medium transition-all duration-200">
                          Default
                        </button>
                        <button className="button-primary px-6 py-3 rounded-lg font-medium transition-all duration-200" disabled>
                          Disabled
                        </button>
                        <button className="button-primary px-8 py-4 rounded-lg font-medium transition-all duration-200 text-lg">
                          Large
                        </button>
                        <button className="button-primary px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm">
                          Small
                        </button>
                      </div>
                    </div>

                    {/* Dark Theme */}
                    <div className="dark">
                      <h5 className="text-lg font-medium mb-4">Dark Theme</h5>
                      <div className="flex flex-wrap gap-4 p-6 bg-gray-900 rounded-lg">
                        <button className="button-primary px-6 py-3 rounded-lg font-medium transition-all duration-200">
                          Default
                        </button>
                        <button className="button-primary px-6 py-3 rounded-lg font-medium transition-all duration-200" disabled>
                          Disabled
                        </button>
                        <button className="button-primary px-8 py-4 rounded-lg font-medium transition-all duration-200 text-lg">
                          Large
                        </button>
                        <button className="button-primary px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm">
                          Small
                        </button>
                      </div>
                    </div>

                    {/* Blue Theme */}
                    <div className="blue">
                      <h5 className="text-lg font-medium mb-4">Blue Theme</h5>
                      <div className="flex flex-wrap gap-4 p-6 bg-blue-50 rounded-lg">
                        <button className="button-primary px-6 py-3 rounded-lg font-medium transition-all duration-200">
                          Default
                        </button>
                        <button className="button-primary px-6 py-3 rounded-lg font-medium transition-all duration-200" disabled>
                          Disabled
                        </button>
                        <button className="button-primary px-8 py-4 rounded-lg font-medium transition-all duration-200 text-lg">
                          Large
                        </button>
                        <button className="button-primary px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm">
                          Small
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outline Buttons */}
                <div className="mb-12">
                  <h4 className="text-xl font-semibold mb-6">Outline Buttons</h4>
                  <div className="space-y-8">
                    {/* Default Theme */}
                    <div>
                      <h5 className="text-lg font-medium mb-4">Default Theme</h5>
                      <div className="flex flex-wrap gap-4 p-6 bg-gray-50 rounded-lg">
                        <button className="button-outline px-6 py-3 rounded-lg font-medium border-2 transition-all duration-200">
                          Default
                        </button>
                        <button className="button-outline px-6 py-3 rounded-lg font-medium border-2 transition-all duration-200" disabled>
                          Disabled
                        </button>
                        <button className="button-outline px-8 py-4 rounded-lg font-medium border-2 transition-all duration-200 text-lg">
                          Large
                        </button>
                        <button className="button-outline px-4 py-2 rounded-lg font-medium border-2 transition-all duration-200 text-sm">
                          Small
                        </button>
                      </div>
                    </div>

                    {/* Dark Theme */}
                    <div className="dark">
                      <h5 className="text-lg font-medium mb-4">Dark Theme</h5>
                      <div className="flex flex-wrap gap-4 p-6 bg-gray-900 rounded-lg">
                        <button className="button-outline px-6 py-3 rounded-lg font-medium border-2 transition-all duration-200">
                          Default
                        </button>
                        <button className="button-outline px-6 py-3 rounded-lg font-medium border-2 transition-all duration-200" disabled>
                          Disabled
                        </button>
                        <button className="button-outline px-8 py-4 rounded-lg font-medium border-2 transition-all duration-200 text-lg">
                          Large
                        </button>
                        <button className="button-outline px-4 py-2 rounded-lg font-medium border-2 transition-all duration-200 text-sm">
                          Small
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ghost Buttons */}
                <div className="mb-12">
                  <h4 className="text-xl font-semibold mb-6">Ghost Buttons</h4>
                  <div className="space-y-8">
                    {/* Default Theme */}
                    <div>
                      <h5 className="text-lg font-medium mb-4">Default Theme</h5>
                      <div className="flex flex-wrap gap-4 p-6 bg-gray-50 rounded-lg">
                        <button className="button-ghost px-6 py-3 rounded-lg font-medium transition-all duration-200">
                          Default
                        </button>
                        <button className="button-ghost px-6 py-3 rounded-lg font-medium transition-all duration-200" disabled>
                          Disabled
                        </button>
                        <button className="button-ghost px-8 py-4 rounded-lg font-medium transition-all duration-200 text-lg">
                          Large
                        </button>
                        <button className="button-ghost px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm">
                          Small
                        </button>
                      </div>
                    </div>

                    {/* Dark Theme */}
                    <div className="dark">
                      <h5 className="text-lg font-medium mb-4">Dark Theme</h5>
                      <div className="flex flex-wrap gap-4 p-6 bg-gray-900 rounded-lg">
                        <button className="button-ghost px-6 py-3 rounded-lg font-medium transition-all duration-200">
                          Default
                        </button>
                        <button className="button-ghost px-6 py-3 rounded-lg font-medium transition-all duration-200" disabled>
                          Disabled
                        </button>
                        <button className="button-ghost px-8 py-4 rounded-lg font-medium transition-all duration-200 text-lg">
                          Large
                        </button>
                        <button className="button-ghost px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm">
                          Small
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Components */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Form Components</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Input Field</label>
                      <input 
                        type="text" 
                        placeholder="Enter text here..."
                        className="form-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Input</label>
                      <input 
                        type="email" 
                        placeholder="your@email.com"
                        className="form-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password Input</label>
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        className="form-input w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Textarea</label>
                      <textarea 
                        placeholder="Enter your message..."
                        rows={4}
                        className="form-input w-full resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select</label>
                      <select className="form-input w-full">
                        <option>Choose an option</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Components */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Card Components</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="card p-6">
                    <h4 className="text-lg font-semibold mb-3">Basic Card</h4>
                    <p className="text-gray-600 mb-4">This is a basic card component with default styling.</p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                  <div className="card card-hover p-6">
                    <h4 className="text-lg font-semibold mb-3">Hover Card</h4>
                    <p className="text-gray-600 mb-4">This card has hover effects and animations.</p>
                    <button className="btn btn-secondary">Explore</button>
                  </div>
                  <div className="card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                    <h4 className="text-lg font-semibold mb-3 text-blue-900">Featured Card</h4>
                    <p className="text-blue-700 mb-4">This is a featured card with custom styling.</p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Original Design Tokens Section */}
        {activeTab === 'original-design-tokens' && (
          <section className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Design Tokens</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The atomic elements of our design system - colors, spacing, typography, and more
              </p>
            </div>

            {/* Color Tokens */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Color Tokens</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Primary Colors */}
                <Card className="p-6 bg-white">
                  <h4 className="font-bold mb-4">Primary</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'primary-50', value: '#eff6ff', color: 'bg-blue-50' },
                      { name: 'primary-500', value: '#3b82f6', color: 'bg-blue-500' },
                      { name: 'primary-600', value: '#2563eb', color: 'bg-blue-600' },
                      { name: 'primary-900', value: '#1e3a8a', color: 'bg-blue-900' },
                    ].map((token) => (
                      <div key={token.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 ${token.color} rounded border`}></div>
                          <span className="text-sm font-mono">{token.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{token.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Semantic Colors */}
                <Card className="p-6 bg-white">
                  <h4 className="font-bold mb-4">Semantic</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'success', value: '#10b981', color: 'bg-green-500' },
                      { name: 'warning', value: '#f59e0b', color: 'bg-yellow-500' },
                      { name: 'error', value: '#ef4444', color: 'bg-red-500' },
                      { name: 'info', value: '#3b82f6', color: 'bg-blue-500' },
                    ].map((token) => (
                      <div key={token.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 ${token.color} rounded border`}></div>
                          <span className="text-sm font-mono">{token.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{token.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Neutral Colors */}
                <Card className="p-6 bg-white">
                  <h4 className="font-bold mb-4">Neutral</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'gray-50', value: '#f9fafb', color: 'bg-gray-50' },
                      { name: 'gray-200', value: '#e5e7eb', color: 'bg-gray-200' },
                      { name: 'gray-500', value: '#6b7280', color: 'bg-gray-500' },
                      { name: 'gray-900', value: '#111827', color: 'bg-gray-900' },
                    ].map((token) => (
                      <div key={token.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 ${token.color} rounded border`}></div>
                          <span className="text-sm font-mono">{token.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{token.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Spacing Tokens */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Spacing Tokens</h3>
              <Card className="p-8 bg-white">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                  {[
                    { name: 'xs', value: '4px', size: 'w-1' },
                    { name: 'sm', value: '8px', size: 'w-2' },
                    { name: 'md', value: '16px', size: 'w-4' },
                    { name: 'lg', value: '24px', size: 'w-6' },
                    { name: 'xl', value: '32px', size: 'w-8' },
                    { name: '2xl', value: '48px', size: 'w-12' },
                    { name: '3xl', value: '64px', size: 'w-16' },
                    { name: '4xl', value: '96px', size: 'w-24' },
                  ].map((token) => (
                    <div key={token.name} className="text-center">
                      <div className={`${token.size} h-4 bg-blue-500 mx-auto mb-2`}></div>
                      <div className="text-xs font-mono">{token.name}</div>
                      <div className="text-xs text-gray-500">{token.value}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Typography Section */}
        {activeTab === 'typography' && (
          <section className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Typography</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our typography system creates clear hierarchy and enhances readability
              </p>
            </div>

            {/* Font Families */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Font Families</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 bg-white">
                  <h4 className="text-xl font-bold mb-6">Inter - Primary</h4>
                  <div className="space-y-4">
                    <div className="font-sans text-3xl font-normal">The quick brown fox</div>
                    <div className="font-sans text-2xl font-medium">The quick brown fox</div>
                    <div className="font-sans text-xl font-semibold">The quick brown fox</div>
                    <div className="font-sans text-lg font-bold">The quick brown fox</div>
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <code className="text-sm">font-family: 'Inter', sans-serif;</code>
                  </div>
                </Card>

                <Card className="p-8 bg-gray-900 text-white">
                  <h4 className="text-xl font-bold mb-6">JetBrains Mono - Code</h4>
                  <div className="space-y-4">
                    <div className="font-mono text-lg">const hello = "world";</div>
                    <div className="font-mono text-base">function example() { }</div>
                    <div className="font-mono text-sm">// Comment</div>
                    <div className="font-mono text-xs">npm install</div>
                  </div>
                  <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                    <code className="text-sm">font-family: 'JetBrains Mono', monospace;</code>
                  </div>
                </Card>
              </div>
            </div>

            {/* Type Scale */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Type Scale</h3>
              <Card className="p-8 bg-white">
                <div className="space-y-8">
                  {[
                    { name: 'Display Large', class: 'text-6xl font-bold', size: '60px' },
                    { name: 'Display Medium', class: 'text-5xl font-bold', size: '48px' },
                    { name: 'Heading 1', class: 'text-4xl font-bold', size: '36px' },
                    { name: 'Heading 2', class: 'text-3xl font-semibold', size: '30px' },
                    { name: 'Heading 3', class: 'text-2xl font-semibold', size: '24px' },
                    { name: 'Body Large', class: 'text-lg font-normal', size: '18px' },
                    { name: 'Body Medium', class: 'text-base font-normal', size: '16px' },
                    { name: 'Body Small', class: 'text-sm font-normal', size: '14px' },
                    { name: 'Caption', class: 'text-xs font-normal', size: '12px' },
                  ].map((type) => (
                    <div key={type.name} className="flex items-baseline justify-between">
                      <div className={`${type.class} text-[#101828]`}>
                        {type.name}
                      </div>
                      <div className="text-sm text-gray-500 font-mono">
                        {type.size} • {type.class}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Components Section */}
        {activeTab === 'components' && (
          <section className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Components</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reusable UI components built for consistency and accessibility
              </p>
            </div>

            {/* Buttons */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Buttons</h3>
              <Card className="p-8 bg-white">
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold mb-4">Variants</h4>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="default">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Sizes</h4>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">With Icons</h4>
                    <div className="flex flex-wrap gap-4">
                      <Button>
                        <FiDownload className="mr-2" />
                        Download
                      </Button>
                      <Button variant="outline">
                        <FiArrowRight className="mr-2" />
                        Continue
                      </Button>
                      <Button variant="ghost">
                        <FiShare2 className="mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Form Controls */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Form Controls</h3>
              <Card className="p-8 bg-white">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Text Input</label>
                      <Input placeholder="Enter text..." />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email Input</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Password Input</label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                          {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Search Input</label>
                      <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <Input placeholder="Search..." className="pl-10" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Select</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Choose an option</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Textarea</label>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        placeholder="Enter your message..."
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Cards */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Cards</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-white">
                  <h4 className="font-bold text-lg mb-3">Basic Card</h4>
                  <p className="text-gray-600 mb-4">
                    Simple card with clean design and no borders.
                  </p>
                  <Button size="sm">Learn More</Button>
                </Card>

                <Card className="p-6 bg-blue-50">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <FiStar className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-lg mb-3">Feature Card</h4>
                  <p className="text-gray-600">
                    Card with icon and colored background for features.
                  </p>
                </Card>

                <Card className="p-6 bg-white border-l-4 border-l-green-500">
                  <div className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Success Card</h4>
                      <p className="text-gray-600">
                        Card with status indicator and semantic styling.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Alerts */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Alerts</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <FiCheck className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800">Success</h4>
                    <p className="text-green-700">Your changes have been saved successfully.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <FiInfo className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-800">Information</h4>
                    <p className="text-blue-700">Here's some helpful information for you.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <FiAlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Warning</h4>
                    <p className="text-yellow-700">Please review this important information.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <FiX className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-800">Error</h4>
                    <p className="text-red-700">Something went wrong. Please try again.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Patterns Section */}
        {activeTab === 'patterns' && (
          <section className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Design Patterns</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Common UI patterns and layouts for consistent user experiences
              </p>
            </div>

            {/* Navigation Patterns */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Navigation</h3>
              <Card className="p-8 bg-white">
                <h4 className="font-semibold mb-4">Primary Navigation</h4>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-6">
                    <div className="font-bold">Logo</div>
                    <nav className="flex gap-6">
                      <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                      <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
                      <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
                      <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
                    </nav>
                  </div>
                  <Button size="sm">Get Started</Button>
                </div>
              </Card>
            </div>

            {/* Form Patterns */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Form Layouts</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 bg-white">
                  <h4 className="font-semibold mb-4">Contact Form</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">First Name</label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Last Name</label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows={3}
                        placeholder="Your message..."
                      />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </div>
                </Card>

                <Card className="p-6 bg-white">
                  <h4 className="font-semibold mb-4">Login Form</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Password</label>
                      <Input type="password" placeholder="••••••••" />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-blue-600 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Button className="w-full">Sign In</Button>
                  </div>
                </Card>
              </div>
            </div>

            {/* Content Patterns */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Content Layouts</h3>
              <div className="grid gap-8">
                <Card className="p-6 bg-white">
                  <h4 className="font-semibold mb-4">Article Layout</h4>
                  <div className="max-w-3xl">
                    <div className="mb-6">
                      <h1 className="text-3xl font-bold mb-2">Article Title</h1>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>By Author Name</span>
                        <span>•</span>
                        <span>March 15, 2024</span>
                        <span>•</span>
                        <span>5 min read</span>
                      </div>
                    </div>
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        This is the article introduction. It provides a brief overview of what
                        the reader can expect from the content that follows.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The body content continues with well-structured paragraphs that are
                        easy to read and understand.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Guidelines Section */}
        {activeTab === 'guidelines' && (
          <section className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Design Guidelines</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Best practices and principles for creating consistent, accessible designs
              </p>
            </div>

            {/* Accessibility */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Accessibility</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 bg-white">
                  <h4 className="font-bold text-lg mb-6">Color Contrast</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-[#101828] text-white rounded">
                      <span>White on Dark</span>
                      <span className="text-sm">21:1 ✓</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-600 text-white rounded">
                      <span>White on Blue</span>
                      <span className="text-sm">8.2:1 ✓</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-100 text-gray-900 rounded">
                      <span>Dark on Light</span>
                      <span className="text-sm">16.7:1 ✓</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-white">
                  <h4 className="font-bold text-lg mb-6">Touch Targets</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 bg-blue-600 rounded flex items-center justify-center text-white">
                        44px
                      </div>
                      <div>
                        <p className="font-medium">Minimum Size</p>
                        <p className="text-sm text-gray-600">44px × 44px for touch targets</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center text-white text-sm">
                        48px
                      </div>
                      <div>
                        <p className="font-medium">Recommended</p>
                        <p className="text-sm text-gray-600">48px × 48px for better usability</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Spacing Guidelines */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Spacing Guidelines</h3>
              <Card className="p-8 bg-white">
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold mb-4">8px Grid System</h4>
                    <p className="text-gray-600 mb-4">
                      All spacing should be multiples of 8px for consistency and alignment.
                    </p>
                    <div className="flex items-center gap-2">
                      {[8, 16, 24, 32, 40, 48].map((size) => (
                        <div key={size} className="text-center">
                          <div
                            className="bg-blue-500 mb-2"
                            style={{ width: `${size}px`, height: '16px' }}
                          ></div>
                          <span className="text-xs">{size}px</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Component Spacing</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Between related elements</span>
                        <code>8px - 16px</code>
                      </div>
                      <div className="flex justify-between">
                        <span>Between sections</span>
                        <code>24px - 32px</code>
                      </div>
                      <div className="flex justify-between">
                        <span>Page margins</span>
                        <code>16px - 24px</code>
                      </div>
                      <div className="flex justify-between">
                        <span>Component padding</span>
                        <code>12px - 24px</code>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Resources Section */}
        {activeTab === 'resources' && (
          <section className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Resources</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tools, assets, and documentation to help you implement our design system
              </p>
            </div>

            {/* Downloads */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Downloads</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 bg-white text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FiDownload className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-2">Figma Library</h4>
                  <p className="text-gray-600 mb-4">Complete component library for Figma</p>
                  <Button size="sm" className="w-full">Download</Button>
                </Card>

                <Card className="p-6 bg-white text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FiDownload className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold mb-2">Logo Package</h4>
                  <p className="text-gray-600 mb-4">All logo variations in multiple formats</p>
                  <Button size="sm" className="w-full">Download</Button>
                </Card>

                <Card className="p-6 bg-white text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FiDownload className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold mb-2">Icon Set</h4>
                  <p className="text-gray-600 mb-4">Complete icon library in SVG format</p>
                  <Button size="sm" className="w-full">Download</Button>
                </Card>
              </div>
            </div>

            {/* Documentation */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Documentation</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 bg-white">
                  <h4 className="font-bold text-lg mb-4">Getting Started</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <FiCheck className="text-green-500" />
                      <a href="#" className="text-blue-600 hover:underline">Installation Guide</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <FiCheck className="text-green-500" />
                      <a href="#" className="text-blue-600 hover:underline">Quick Start Tutorial</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <FiCheck className="text-green-500" />
                      <a href="#" className="text-blue-600 hover:underline">Component Usage</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <FiCheck className="text-green-500" />
                      <a href="#" className="text-blue-600 hover:underline">Customization Guide</a>
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 bg-white">
                  <h4 className="font-bold text-lg mb-4">Developer Resources</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <FiCheck className="text-green-500" />
                      <a href="#" className="text-blue-600 hover:underline">React Components</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <FiCheck className="text-green-500" />
                      <a href="#" className="text-blue-600 hover:underline">CSS Variables</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <FiCheck className="text-green-500" />
                      <a href="#" className="text-blue-600 hover:underline">Tailwind Config</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <FiCheck className="text-green-500" />
                      <a href="#" className="text-blue-600 hover:underline">API Reference</a>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Support</h3>
              <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="text-center">
                  <h4 className="font-bold text-xl mb-4">Need Help?</h4>
                  <p className="text-gray-600 mb-6">
                    Our team is here to help you implement and customize the design system.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button>
                      <FiMail className="mr-2" />
                      Contact Support
                    </Button>
                    <Button variant="outline">
                      Join Community
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-24 py-16 bg-gradient-to-r from-[#101828] to-gray-900 text-white rounded-2xl">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/logo/png/mindscraft-logo-dark.png"
                alt="Mindscraft Logo"
                className="h-12 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-4">Mindscraft Design System</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Built with modern web technologies and design principles.
                Open source and continuously evolving.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-[#F3F4C0] font-bold text-2xl">v2.0</div>
                <div className="text-gray-400">Current Version</div>
              </div>
              <div className="text-center">
                <div className="text-[#F3F4C0] font-bold text-2xl">50+</div>
                <div className="text-gray-400">Components</div>
              </div>
              <div className="text-center">
                <div className="text-[#F3F4C0] font-bold text-2xl">200+</div>
                <div className="text-gray-400">Design Tokens</div>
              </div>
              <div className="text-center">
                <div className="text-[#F3F4C0] font-bold text-2xl">WCAG AA</div>
                <div className="text-gray-400">Accessible</div>
              </div>
            </div>

            <div className="text-sm text-gray-400">
              Last updated: March 2024 • Made with ❤️ by the Mindscraft team
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}