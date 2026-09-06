'use client';

import React, { useState } from 'react';
import { FiCpu, FiLayout, FiZap, FiCheck, FiArrowRight, FiPlay, FiTerminal } from 'react-icons/fi';

type TabKey = 'ai-agent' | 'saas' | 'web';

export default function StudioShowcase() {
  const [activeTab, setActiveTab] = useState<TabKey>('ai-agent');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(2);

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimStep(0);
    setTimeout(() => setSimStep(1), 700);
    setTimeout(() => setSimStep(2), 1500);
    setTimeout(() => setIsSimulating(false), 2000);
  };

  return (
    <div className="sc-card">
      {/* Studio Chrome Header */}
      <div className="sc-header">
        <div className="sc-controls">
          <span className="sc-dot sc-dot-red" />
          <span className="sc-dot sc-dot-yellow" />
          <span className="sc-dot sc-dot-green" />
          <span className="sc-title">mindscraft-engine · v2026.4</span>
        </div>

        {/* Tab switcher */}
        <div className="sc-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'ai-agent'}
            onClick={() => setActiveTab('ai-agent')}
            className={`sc-tab ${activeTab === 'ai-agent' ? 'is-active' : ''}`}
          >
            <FiCpu className="sc-tab-icon" />
            <span>AI Agent</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'saas'}
            onClick={() => setActiveTab('saas')}
            className={`sc-tab ${activeTab === 'saas' ? 'is-active' : ''}`}
          >
            <FiLayout className="sc-tab-icon" />
            <span>SaaS Core</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'web'}
            onClick={() => setActiveTab('web')}
            className={`sc-tab ${activeTab === 'web' ? 'is-active' : ''}`}
          >
            <FiZap className="sc-tab-icon" />
            <span>Edge Web</span>
          </button>
        </div>
      </div>

      {/* Screen Body */}
      <div className="sc-body">
        {activeTab === 'ai-agent' && (
          <div className="sc-pane">
            <div className="sc-pane-top">
              <div className="sc-badge-live">
                <span className="sc-pulse" />
                Live Agent Pipeline
              </div>
              <button 
                onClick={handleSimulate}
                disabled={isSimulating}
                className="sc-btn-sim"
              >
                <FiPlay className={`sc-btn-sim-icon ${isSimulating ? 'is-spinning' : ''}`} />
                {isSimulating ? 'Executing...' : 'Run Simulation'}
              </button>
            </div>

            {/* Pipeline visual stages */}
            <div className="sc-pipeline">
              <div className={`sc-stage ${simStep >= 0 ? 'is-active' : ''}`}>
                <div className="sc-stage-indicator">1</div>
                <div className="sc-stage-content">
                  <div className="sc-stage-title">Ingest Trigger</div>
                  <div className="sc-stage-meta">Webhook payload validated · CRM sync</div>
                </div>
                {simStep >= 0 && <FiCheck className="sc-stage-check" />}
              </div>

              <div className={`sc-stage ${simStep >= 1 ? 'is-active' : ''}`}>
                <div className="sc-stage-indicator">2</div>
                <div className="sc-stage-content">
                  <div className="sc-stage-title">RAG & Neural Search</div>
                  <div className="sc-stage-meta">Hybrid vector query · 14 internal docs matched</div>
                </div>
                {simStep >= 1 && <FiCheck className="sc-stage-check" />}
              </div>

              <div className={`sc-stage ${simStep >= 2 ? 'is-active' : ''}`}>
                <div className="sc-stage-indicator">3</div>
                <div className="sc-stage-content">
                  <div className="sc-stage-title">Multi-Turn Synthesis</div>
                  <div className="sc-stage-meta">Structured output generated in 420ms</div>
                </div>
                {simStep >= 2 && <FiCheck className="sc-stage-check" />}
              </div>
            </div>

            {/* Output preview terminal */}
            <div className="sc-terminal">
              <div className="sc-terminal-bar">
                <FiTerminal className="sc-term-icon" />
                <span>Response Stream [JSON Mode]</span>
                <span className="sc-term-perf">420ms · 99.4% Eval</span>
              </div>
              <pre className="sc-term-code">
                <code>{`{
  "action": "dispatch_personalized_brief",
  "confidence": 0.994,
  "execution_time_ms": 420,
  "status": "ready_for_founder"
}`}</code>
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'saas' && (
          <div className="sc-pane">
            <div className="sc-saas-grid">
              <div className="sc-metric-card">
                <div className="sc-metric-label">Client MRR Growth</div>
                <div className="sc-metric-val">$148,200</div>
                <div className="sc-metric-delta">+34.8% after redesign</div>
              </div>
              <div className="sc-metric-card">
                <div className="sc-metric-label">Median API Latency</div>
                <div className="sc-metric-val">38ms</div>
                <div className="sc-metric-delta">Edge Redis + Prisma 6</div>
              </div>
            </div>

            <div className="sc-saas-preview">
              <div className="sc-saas-bar">
                <span className="sc-saas-pill">Auth: Multi-Tenant RBAC</span>
                <span className="sc-saas-pill">Billing: Stripe Sync</span>
                <span className="sc-saas-pill">AI Ops: Langfuse</span>
              </div>
              <div className="sc-saas-callout">
                <p>
                  <strong>Zero boilerplate tech debt.</strong> We build SaaS engines with production-grade schemas, instant database migrations, and isolated client workspaces.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'web' && (
          <div className="sc-pane">
            <div className="sc-lighthouse-bar">
              <div className="sc-lh-item">
                <div className="sc-lh-circle">100</div>
                <span className="sc-lh-lbl">Performance</span>
              </div>
              <div className="sc-lh-item">
                <div className="sc-lh-circle">100</div>
                <span className="sc-lh-lbl">Accessibility</span>
              </div>
              <div className="sc-lh-item">
                <div className="sc-lh-circle">100</div>
                <span className="sc-lh-lbl">Best Practices</span>
              </div>
              <div className="sc-lh-item">
                <div className="sc-lh-circle">100</div>
                <span className="sc-lh-lbl">SEO</span>
              </div>
            </div>

            <div className="sc-web-details">
              <div className="sc-web-row">
                <span className="sc-web-k">Next.js 16</span>
                <span className="sc-web-v">Turbopack &amp; Server Actions</span>
              </div>
              <div className="sc-web-row">
                <span className="sc-web-k">Interaction Speed</span>
                <span className="sc-web-v">Sub-second INP (&lt;40ms)</span>
              </div>
              <div className="sc-web-row">
                <span className="sc-web-k">Typography &amp; UX</span>
                <span className="sc-web-v">LeniaSans Custom Design Tokens</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Benchmark Strip */}
      <div className="sc-footer">
        <div className="sc-footer-item">
          <span className="sc-footer-dot" />
          <span>Next.js 16 + React 19</span>
        </div>
        <div className="sc-footer-item">
          <span>Fixed 2–4 Wk Sprints</span>
        </div>
        <div className="sc-footer-item">
          <span>100% Client Code Ownership</span>
        </div>
      </div>
    </div>
  );
}
