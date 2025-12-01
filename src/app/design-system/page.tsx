'use client';

import React, { useState } from 'react';
import Typography from '@/components/design-system/Typography';
import ColorPalette from '@/components/design-system/ColorPalette';
import ButtonsDemo from '@/components/design-system/ButtonsDemo';
import { motion } from 'framer-motion';

type Tab = 'typography' | 'colors' | 'components';

export default function DesignSystem() {
  const [activeTab, setActiveTab] = useState<Tab>('typography');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'typography', label: 'Typography' },
    { id: 'colors', label: 'Colors' },
    { id: 'components', label: 'Components' },
  ];

  // Logo colors
  const NAVY = '#101828';
  const CREAM = '#F3F4C0';

  // Active tab style with glossy effect
  const activeTabStyle = {
    backgroundColor: NAVY,
    color: 'white',
    boxShadow: `
      0px 1px 1px 0px rgba(255, 255, 255, 0.20) inset,
      0px 4px 8px 0px rgba(255, 255, 255, 0.08) inset,
      0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 3px 6px 0px rgba(0, 0, 0, 0.15)
    `,
  };

  // Inactive tab style
  const inactiveTabStyle = {
    backgroundColor: 'white',
    color: '#6B7280',
    border: '1.5px solid #E5E7EB',
    boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
  };

  const inactiveHoverStyle = {
    ...inactiveTabStyle,
    backgroundColor: '#F9FAFB',
    borderColor: '#D1D5DB',
    color: '#374151',
    transform: 'translateY(-1px)',
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Logo & Title Row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img src="/logo/new-logo.svg" alt="MindsCraft" className="h-9 w-auto" />
              <div className="h-7 w-px bg-gray-200"></div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Design System</h1>
                <p className="text-xs text-gray-500 mt-0.5">Component Library & Guidelines</p>
              </div>
            </div>
            <span
              className="px-3 py-1.5 rounded-md text-xs font-semibold"
              style={{
                backgroundColor: CREAM,
                color: NAVY,
                boxShadow: `
                  0px 1px 1px 0px rgba(255, 255, 255, 0.30) inset,
                  0px 1px 2px 0px rgba(16, 24, 40, 0.08)
                `
              }}
            >
              v2.0
            </span>
          </div>

          {/* Tabs - Button Style */}
          <nav className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-5 py-2.5 text-sm font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-all duration-200"
                style={activeTab === tab.id ? activeTabStyle : inactiveTabStyle}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    Object.assign(e.currentTarget.style, inactiveHoverStyle);
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    Object.assign(e.currentTarget.style, inactiveTabStyle);
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'typography' && (
          <motion.div
            key="typography"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Typography />
          </motion.div>
        )}

        {activeTab === 'colors' && (
          <motion.div
            key="colors"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ColorPalette />
          </motion.div>
        )}

        {activeTab === 'components' && (
          <motion.div
            key="components"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ButtonsDemo />
          </motion.div>
        )}
      </main>
    </div>
  );
}
