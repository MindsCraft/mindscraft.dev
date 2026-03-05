'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './cta.css';

export default function Cta() {
  return (
    <section className="cta-modern-section">
      <div className="cta-modern-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="cta-modern-content"
        >
          {/* Aurora gradient overlays */}
          <div className="cta-glow cta-glow--cream" />
          <div className="cta-glow cta-glow--blue" />

          <div className="cta-inner">
            {/* Left — Copy */}
            <div className="cta-left">
              <h2 className="cta-heading">
                Your next digital product{' '}
                <span className="cta-heading-accent">starts here.</span>
              </h2>
              <p className="cta-subtext">
                From concept to launch in under 8 weeks. We handle UX design,
                full-stack development, and deployment — so you can focus on
                growing your business.
              </p>
              {/* Social proof */}
              <div className="cta-proof">
                <div className="cta-proof-avatars">
                  <span className="cta-avatar" style={{ background: '#4F46E5' }}>S</span>
                  <span className="cta-avatar" style={{ background: '#059669' }}>A</span>
                  <span className="cta-avatar" style={{ background: '#D97706' }}>K</span>
                  <span className="cta-avatar" style={{ background: '#DC2626' }}>R</span>
                </div>
                <span className="cta-proof-text">
                  Trusted by <strong>30+ startups</strong> worldwide
                </span>
              </div>
            </div>

            {/* Right — CTA Button */}
            <div className="cta-right">
              <a href="/contact" className="cta-button group">
                <span className="cta-button-text">
                  Get a Free Proposal
                  <FiArrowRight className="cta-button-arrow" />
                </span>
                <div className="cta-button-shine" />
              </a>
              <p className="cta-micro">
                Free consultation · No commitment required
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}