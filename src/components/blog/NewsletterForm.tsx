'use client';

import React, { useState } from 'react';
import { MailIcon, CheckIcon, AlertCircleIcon } from '@/components/ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { trackNewsletterSubscription } from '@/lib/analytics';
import '@/styles/components/admin.css';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Track successful subscription
      trackNewsletterSubscription(email);

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="nws-section">
      <div className="nws-inner">
        <MailIcon className="nws-icon" />
        <h3 className="nws-title">Subscribe to Our Newsletter</h3>
        <p className="nws-text">
          Get the latest articles and insights delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="nws-form">
          <div className="nws-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="nws-input"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="nws-button"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="nws-message nws-message--success"
              >
                <CheckIcon />
                <span>Successfully subscribed!</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="nws-message nws-message--error"
              >
                <AlertCircleIcon />
                <span>Something went wrong. Please try again.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
