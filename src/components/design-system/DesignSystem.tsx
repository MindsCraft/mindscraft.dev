'use client';

import React, { useState } from 'react';
import Typography from '@/components/design-system/Typography';
import ColorPalette from '@/components/design-system/ColorPalette';
import ButtonsDemo from '@/components/design-system/ButtonsDemo';
import { motion } from 'framer-motion';

type Tab = 'typography' | 'colors' | 'components';

export function DesignSystemComponent() {
  const [activeTab, setActiveTab] = useState<Tab>('typography');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'typography', label: 'Typography' },
    { id: 'colors', label: 'Colors' },
    { id: 'components', label: 'Components' },
  ];

  return (
    <div className="ds-page">
      <header className="ds-header">
        <div className="ds-header-inner">
          <div className="ds-header-row">
            <div className="ds-brand">
              <img src="/logo/logo-black.svg" alt="MindsCraft" className="ds-brand-logo" />
              <div className="ds-brand-divider" />
              <div>
                <h1 className="ds-brand-title">Design System</h1>
                <p className="ds-brand-sub">Component Library & Guidelines</p>
              </div>
            </div>
            <span className="ds-version-pill">v2.0</span>
          </div>

          <nav className="ds-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`ds-tab${activeTab === tab.id ? ' ds-tab--active' : ' ds-tab--inactive'}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="ds-main">
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
