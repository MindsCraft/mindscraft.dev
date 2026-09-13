"use client";

import React, { useState } from "react";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { Button } from "@/components/ui/button/Button";
import { FaqSection } from "@/components/sections/FaqSection";
import { Mail, MapPin, CheckCircle, Clock } from "lucide-react";
import "./contact.css";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Get In Touch"
          title="4.9 is our Clutch average"
          description="Have a question or a product design challenge? Let's talk. We'll review your project and get back to you within 24 hours."
          stats={[
            { stat: "< 24 hrs", label: "Response Guarantee" },
            { stat: "3 Days", label: "Free Trial Available" },
            { stat: "50+", label: "Verified Clutch Reviews" },
          ]}
        />

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              {/* Left Column: Info & Offices */}
              <div className="contact-info">
                <span className="page-hero__badge">Direct Contact</span>
                <h2 className="contact-info__title">Let&apos;s build something exceptional</h2>
                <p className="contact-info__desc">
                  Whether you need a full product redesign, MVP design from scratch, or an embedded senior designer for your sprint, we&apos;re ready to help.
                </p>

                <div className="contact-methods">
                  <div className="contact-method-item">
                    <Mail className="contact-icon text-accent" size={20} />
                    <div>
                      <strong>Email us</strong>
                      <p>
                        <a href="mailto:hello@mindscraft.dev">hello@mindscraft.dev</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-method-item">
                    <Clock className="contact-icon text-accent" size={20} />
                    <div>
                      <strong>Response Time</strong>
                      <p>Within 24 business hours</p>
                    </div>
                  </div>

                  <div className="contact-method-item">
                    <MapPin className="contact-icon text-accent" size={20} />
                    <div>
                      <strong>Our Locations</strong>
                      <p>
                        <strong>Kyiv, Ukraine:</strong> Dehtiarivska str. 33B
                        <br />
                        <strong>Newark, DE, USA:</strong> 131 Continental Dr, Suite 305
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-quote-box">
                  <p className="contact-quote-text">
                    &ldquo;mindsCraft redesigned our entire data logic builder. It was so clean that we closed our $3.6M seed round right after launching.&rdquo;
                  </p>
                  <span className="contact-quote-author">— Jack Johnson, CEO at Datawisp</span>
                </div>
              </div>

              {/* Right Column: Inquiry Form */}
              <div className="contact-form-card">
                {submitted ? (
                  <div className="contact-success">
                    <CheckCircle size={48} className="text-accent" />
                    <h3>Thank you for reaching out!</h3>
                    <p>We received your inquiry and our design director will reply within 24 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <h3 className="contact-form__title">Tell us about your project</h3>

                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Sarah Connor"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Work Email *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company">Company / Product Website</label>
                      <input
                        id="company"
                        type="text"
                        placeholder="https://yourproduct.com"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">What service are you looking for?</label>
                      <select id="service" className="form-input">
                        <option value="redesign">SaaS Product Redesign</option>
                        <option value="mvp">MVP Design from Scratch</option>
                        <option value="dedicated">Dedicated Designer (Team Extension)</option>
                        <option value="audit">UX Audit & Usability Review</option>
                        <option value="system">Design System</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Project details & goals</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your product, current timeline, and what you'd like to achieve..."
                        className="form-input form-textarea"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" fullWidth>
                      Send Inquiry
                    </Button>

                    <p className="form-disclaimer">
                      We respect your privacy. All project information is strictly covered under NDA.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
