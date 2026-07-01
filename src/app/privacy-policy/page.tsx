import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | MindsCraft',
  description: 'Learn how MindsCraft collects, uses, and protects your personal information in compliance with applicable data protection laws.',
  alternates: {
    canonical: 'https://mindscraft.dev/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | MindsCraft',
    description: 'How MindsCraft collects, uses, and protects your personal information.',
    url: 'https://mindscraft.dev/privacy-policy',
    siteName: 'MindsCraft',
    images: [{ url: 'https://mindscraft.dev/images/og-image.png', width: 1200, height: 630, alt: 'MindsCraft Privacy Policy' }],
    locale: 'en_US',
    type: 'website',
  },
};

const LAST_UPDATED = 'March 3, 2026';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="legal-hero-inner">
          <p className="legal-hero-eyebrow">Legal</p>
          <h1 className="legal-hero-title">Privacy Policy</h1>
          <p className="legal-hero-meta">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="legal-body">
        <section>
          <h2>1. Introduction</h2>
          <p>
            MindsCraft (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website mindscraft.dev (the &quot;Service&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Contact information</strong> — name, company name, and email address when you submit our contact form.</li>
            <li><strong>Project details</strong> — information you provide in your message, including project briefs or attached files.</li>
            <li><strong>Usage data</strong> — browser type, IP address, pages visited, and time spent on pages, collected automatically via analytics tools.</li>
            <li><strong>Cookies</strong> — small data files stored on your device. See our <Link href="/cookie-policy">Cookie Policy</Link> for details.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide services you request.</li>
            <li>Communicate about your project, proposals, or questions.</li>
            <li>Improve our website and services based on usage patterns.</li>
            <li>Send occasional service-related updates (never unsolicited marketing).</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2>4. How We Share Your Information</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share data with:</p>
          <ul>
            <li><strong>Service providers</strong> — such as email delivery services (e.g., Resend, SendGrid), used solely to deliver messages you initiate.</li>
            <li><strong>Analytics providers</strong> — such as Google Analytics, to understand website usage in aggregate.</li>
            <li><strong>Legal requirements</strong> — if required by law or to protect our rights.</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>
            We retain contact form submissions for up to 2 years for business correspondence purposes. You may request deletion of your data at any time by emailing us at <a href="mailto:hello@mindscraft.dev">hello@mindscraft.dev</a>.
          </p>
        </section>

        <section>
          <h2>6. Cookies</h2>
          <p>
            We use essential and analytics cookies to operate and improve our website. You can control cookie preferences through your browser settings. For full details, see our <Link href="/cookie-policy">Cookie Policy</Link>.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data.</li>
            <li>Object to or restrict processing of your data.</li>
            <li>Withdraw consent at any time (where processing is based on consent).</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at <a href="mailto:hello@mindscraft.dev">hello@mindscraft.dev</a>.
          </p>
        </section>

        <section>
          <h2>8. Security</h2>
          <p>
            We implement industry-standard security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to external sites. We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.
          </p>
        </section>

        <section>
          <h2>10. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately.
          </p>
        </section>

        <section>
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be posted on this page with an updated &quot;Last updated&quot; date. We encourage you to review this page from time to time.
          </p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
          <div className="legal-card">
            <p><strong>MindsCraft</strong></p>
            <p>Email: <a href="mailto:hello@mindscraft.dev">hello@mindscraft.dev</a></p>
            <p>Website: <Link href="/">mindscraft.dev</Link></p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </section>

        <div className="legal-footer-links">
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}