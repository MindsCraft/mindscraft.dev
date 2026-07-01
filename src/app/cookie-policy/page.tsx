import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Cookie Policy | MindsCraft',
    description: 'Learn how MindsCraft uses cookies on mindscraft.dev and how you can manage your cookie preferences on our website.',
    alternates: {
        canonical: 'https://mindscraft.dev/cookie-policy',
    },
    openGraph: {
        title: 'Cookie Policy | MindsCraft',
        description: 'How MindsCraft uses cookies and how to manage your preferences.',
        url: 'https://mindscraft.dev/cookie-policy',
        siteName: 'MindsCraft',
        images: [{ url: 'https://mindscraft.dev/images/og-image.png', width: 1200, height: 630, alt: 'MindsCraft Cookie Policy' }],
        locale: 'en_US',
        type: 'website',
    },
};

const LAST_UPDATED = 'March 3, 2026';

export default function CookiePolicy() {
    return (
        <div className="legal-page">
            <div className="legal-hero">
                <div className="legal-hero-inner">
                    <p className="legal-hero-eyebrow">Legal</p>
                    <h1 className="legal-hero-title">Cookie Policy</h1>
                    <p className="legal-hero-meta">Last updated: {LAST_UPDATED}</p>
                </div>
            </div>

            <div className="legal-body">
                <section>
                    <h2>1. What Are Cookies?</h2>
                    <p>
                        Cookies are small text files that are stored on your device when you visit a website. They help the website remember information about your visit, such as your preferences and settings. Cookies cannot run programs or deliver viruses to your device.
                    </p>
                </section>

                <section>
                    <h2>2. How We Use Cookies</h2>
                    <p>We use cookies for the following purposes:</p>

                    <div className="legal-card-stack">
                        <div className="legal-card">
                            <div className="legal-card-head">
                                <span className="legal-badge legal-badge-green">Always Active</span>
                                <h3>Essential Cookies</h3>
                            </div>
                            <p>
                                These cookies are strictly necessary for the website to function. They enable core features such as security, session management, and form submissions. You cannot opt out of these cookies as the site cannot function without them.
                            </p>
                        </div>

                        <div className="legal-card">
                            <div className="legal-card-head">
                                <span className="legal-badge legal-badge-blue">Analytics</span>
                                <h3>Performance &amp; Analytics Cookies</h3>
                            </div>
                            <p>
                                We use analytics cookies (such as Google Analytics) to understand how visitors interact with our website — which pages are most popular, how long visitors stay, and where they come from. This data is aggregated and anonymous. You can opt out via your browser settings or the Google Analytics opt-out browser add-on.
                            </p>
                        </div>

                        <div className="legal-card">
                            <div className="legal-card-head">
                                <span className="legal-badge legal-badge-gray">Optional</span>
                                <h3>Functional Cookies</h3>
                            </div>
                            <p>
                                These cookies allow the website to remember choices you make (such as your preferred theme) and provide enhanced, personalized features.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>3. Third-Party Cookies</h2>
                    <p>
                        Some cookies on our website are set by third-party services. These services have their own privacy and cookie policies, which we encourage you to review:
                    </p>
                    <ul>
                        <li><strong>Google Analytics</strong> — used for website traffic analysis. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                    </ul>
                </section>

                <section>
                    <h2>4. Managing Your Cookie Preferences</h2>
                    <p>You can control and manage cookies in several ways:</p>
                    <ul>
                        <li><strong>Browser settings</strong> — most browsers allow you to block or delete cookies through their settings. Note that disabling essential cookies may affect website functionality.</li>
                        <li><strong>Google Analytics opt-out</strong> — install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
                        <li><strong>Device settings</strong> — many mobile devices allow you to manage cookies through device settings.</li>
                    </ul>
                </section>

                <section>
                    <h2>5. Changes to This Policy</h2>
                    <p>
                        We may update this Cookie Policy from time to time. Changes will be reflected on this page with a revised &ldquo;Last updated&rdquo; date.
                    </p>
                </section>

                <section>
                    <h2>6. Contact Us</h2>
                    <p>For questions about our use of cookies:</p>
                    <div className="legal-card">
                        <p><strong>MindsCraft</strong></p>
                        <p>Email: <a href="mailto:hello@mindscraft.dev">hello@mindscraft.dev</a></p>
                    </div>
                </section>

                <div className="legal-footer-links">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}