import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Cookie Policy | MindsCraft',
    description: 'Learn how MindsCraft uses cookies and how you can manage your cookie preferences.',
};

const LAST_UPDATED = 'March 3, 2026';

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-100 py-16 px-4">
                <div className="max-w-3xl mx-auto">
                    <p className="text-sm font-medium text-blue-600 mb-3">Legal</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
                    <p className="text-gray-500 text-base">Last updated: {LAST_UPDATED}</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 py-16 space-y-10 text-gray-700 leading-relaxed">

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">1. What Are Cookies?</h2>
                    <p>
                        Cookies are small text files that are stored on your device when you visit a website. They help the website remember information about your visit, such as your preferences and settings. Cookies cannot run programs or deliver viruses to your device.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Cookies</h2>
                    <p className="mb-4">We use cookies for the following purposes:</p>

                    <div className="space-y-6">
                        <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Always Active</span>
                                <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                These cookies are strictly necessary for the website to function. They enable core features such as security, session management, and form submissions. You cannot opt out of these cookies as the site cannot function without them.
                            </p>
                        </div>

                        <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Analytics</span>
                                <h3 className="font-semibold text-gray-900">Performance &amp; Analytics Cookies</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                We use analytics cookies (such as Google Analytics) to understand how visitors interact with our website — which pages are most popular, how long visitors stay, and where they come from. This data is aggregated and anonymous. You can opt out via your browser settings or the Google Analytics opt-out browser add-on.
                            </p>
                        </div>

                        <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">Optional</span>
                                <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                These cookies allow the website to remember choices you make (such as your preferred theme) and provide enhanced, personalized features.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">3. Third-Party Cookies</h2>
                    <p>
                        Some cookies on our website are set by third-party services. These services have their own privacy and cookie policies, which we encourage you to review:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-3">
                        <li><strong>Google Analytics</strong> — used for website traffic analysis. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Google Privacy Policy</a></li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">4. Managing Your Cookie Preferences</h2>
                    <p className="mb-3">You can control and manage cookies in several ways:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Browser settings</strong> — most browsers allow you to block or delete cookies through their settings. Note that disabling essential cookies may affect website functionality.</li>
                        <li><strong>Google Analytics opt-out</strong> — install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Google Analytics Opt-out Browser Add-on</a>.</li>
                        <li><strong>Device settings</strong> — many mobile devices allow you to manage cookies through device settings.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">5. Changes to This Policy</h2>
                    <p>
                        We may update this Cookie Policy from time to time. Changes will be reflected on this page with a revised &ldquo;Last updated&rdquo; date.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
                    <p>For questions about our use of cookies:</p>
                    <div className="mt-4 p-5 bg-gray-50 rounded-xl border border-gray-100 space-y-1">
                        <p className="font-semibold text-gray-900">MindsCraft</p>
                        <p>Email: <a href="mailto:hello@mindscraft.dev" className="text-blue-600 underline hover:text-blue-800">hello@mindscraft.dev</a></p>
                    </div>
                </section>

                <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-gray-500">
                    <Link href="/privacy-policy" className="hover:text-gray-900 underline">Privacy Policy</Link>
                    <Link href="/terms-and-conditions" className="hover:text-gray-900 underline">Terms &amp; Conditions</Link>
                    <Link href="/contact" className="hover:text-gray-900 underline">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}
