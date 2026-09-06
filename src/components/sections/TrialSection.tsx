"use client";

import React, { useState } from "react";
import { FormField } from "@/components/ui/form/FormField";
import { Button } from "@/components/ui/button/Button";
import "./trial.css";

const sourceOptions = [
  { value: "Not Set", label: "Select an option..." },
  { value: "Clutch.co", label: "Clutch.co" },
  { value: "Perplexity", label: "Perplexity" },
  { value: "Gemini", label: "Gemini" },
  { value: "ChatGPT", label: "ChatGPT" },
  { value: "DesignRush", label: "DesignRush" },
  { value: "Blog", label: "Blog" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "YouTube", label: "YouTube" },
  { value: "Referral", label: "Referral" },
  { value: "Search Engine", label: "Other search engine" },
];

export const TrialSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    description: "",
    source: "Not Set",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="trial" className="trial-section">
      <div className="container">
        <div className="trial-layout">
          {/* Left info column */}
          <div className="trial-info">
            <div>
              <h2 className="h2">Test our SaaS design expertise with a free 3-day trial</h2>
              <p className="body-lead text-muted" style={{ marginTop: "12px" }}>
                Choosing a SaaS design agency on the web is often a game of luck. So we offer you to put our collaboration to test before committing.
              </p>
            </div>

            <div className="trial-steps">
              <div className="trial-step-card">
                <span className="trial-step-card__num">01</span>
                <span className="trial-step-card__text">Pick a small part of your existing product.</span>
              </div>
              <div className="trial-step-card">
                <span className="trial-step-card__num">02</span>
                <span className="trial-step-card__text">See our process in action and test if you enjoy it.</span>
              </div>
              <div className="trial-step-card">
                <span className="trial-step-card__num">03</span>
                <span className="trial-step-card__text">Get 1-2 screens designed for you during the trial period.</span>
              </div>
              <div className="trial-step-card">
                <span className="trial-step-card__num">04</span>
                <span className="trial-step-card__text">Decide if you’re ready for a subscription.</span>
              </div>
            </div>

            <div className="trial-quotes">
              <div className="trial-quote-item">
                <p>"Their talented team impressed us right from the start with a three-day trial, presenting several design options, each of which was excellent and reinforced our confidence in moving forward."</p>
                <div className="trial-quote-author">Sean Quinn — Founder of TimeKeeper</div>
              </div>
              <div className="trial-quote-item">
                <p>"I really enjoyed the designer trial period since it allowed us to assess our designer’s ability to execute on our specific design needs."</p>
                <div className="trial-quote-author">Claire Tsukuda — Co-Founder & CEO of Kipsi</div>
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="trial-form-card">
            <h3 className="h3">Book Your 3-Day Trial</h3>
            {submitted ? (
              <div className="form-feedback">
                Thank you! Your submission has been received. Our team will contact you within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="trial-form">
                <FormField
                  label="Full name"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <FormField
                  label="Your company"
                  id="company"
                  name="company"
                  placeholder="Your company name"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
                <FormField
                  label="E-mail"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.name@company.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <FormField
                  label="How can we help you?"
                  id="description"
                  name="description"
                  type="textarea"
                  placeholder="Tell us about your product…"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
                <FormField
                  label="How did you hear about us?"
                  id="source"
                  name="source"
                  type="select"
                  options={sourceOptions}
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                />
                <Button type="submit" variant="primary" fullWidth size="lg">
                  Proceed with call booking
                </Button>
                <p className="form-disclaimer">
                  By clicking on the button, you consent to the processing of personal data and agree to the site's <a href="/privacy">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
