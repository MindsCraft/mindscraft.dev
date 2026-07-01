import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | MindsCraft',
  description: 'Terms and conditions governing the use of MindsCraft web development and design services. Read before engaging our agency.',
  alternates: {
    canonical: 'https://mindscraft.dev/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | MindsCraft',
    description: 'Terms governing the use of MindsCraft web development and design services.',
    url: 'https://mindscraft.dev/terms-and-conditions',
    siteName: 'MindsCraft',
    images: [{ url: 'https://mindscraft.dev/images/og-image.png', width: 1200, height: 630, alt: 'MindsCraft Terms & Conditions' }],
    locale: 'en_US',
    type: 'website',
  },
};

const LAST_UPDATED = 'March 3, 2026';

export default function TermsAndConditions() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="legal-hero-inner">
          <p className="legal-hero-eyebrow">Legal</p>
          <h1 className="legal-hero-title">Terms &amp; Conditions</h1>
          <p className="legal-hero-meta">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="legal-body">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website mindscraft.dev and any services provided by MindsCraft (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our website or services.
          </p>
        </section>

        <section>
          <h2>2. Services</h2>
          <p>
            MindsCraft provides web development, UI/UX design, mobile development, and AI integration services. The scope, deliverables, timelines, and pricing of any specific engagement are governed by a separate written agreement or proposal issued to the client.
          </p>
          <p>
            We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
          </p>
        </section>

        <section>
          <h2>3. Project Agreements</h2>
          <p>
            All client projects require a signed statement of work (SOW) or project proposal prior to commencement. These documents will outline:
          </p>
          <ul>
            <li>Project scope, milestones, and deliverables</li>
            <li>Payment schedule and accepted payment methods</li>
            <li>Revision limits and change request procedures</li>
            <li>Intellectual property transfer terms</li>
            <li>Confidentiality obligations for both parties</li>
          </ul>
        </section>

        <section>
          <h2>4. Payment Terms</h2>
          <p>Unless otherwise agreed in writing, our standard payment terms are:</p>
          <ul>
            <li>A deposit (typically 50%) is required before work begins.</li>
            <li>The remaining balance is due upon project completion or as specified in the project agreement.</li>
            <li>Late payments may incur a late fee as outlined in the project agreement.</li>
            <li>We reserve the right to pause work on overdue accounts.</li>
          </ul>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>
          <p>
            Upon receipt of full payment, MindsCraft assigns all rights, title, and interest in the custom-developed deliverables to the client, unless otherwise specified in the project agreement.
          </p>
          <p>
            MindsCraft retains the right to display completed work in its portfolio unless the client requests confidentiality in writing prior to project start. Any third-party libraries, fonts, or frameworks used in your project remain governed by their respective open-source or commercial licenses.
          </p>
        </section>

        <section>
          <h2>6. Client Responsibilities</h2>
          <p>The client agrees to:</p>
          <ul>
            <li>Provide timely feedback and approvals as required by the project timeline.</li>
            <li>Supply accurate and complete content, assets, and access credentials required for the project.</li>
            <li>Ensure that all materials provided do not infringe the intellectual property rights of any third party.</li>
          </ul>
        </section>

        <section>
          <h2>7. Revisions and Changes</h2>
          <p>
            Each project proposal specifies the number of included revision rounds. Requests beyond the agreed scope will be quoted and billed separately. Requests that materially change the project scope will require an updated agreement.
          </p>
        </section>

        <section>
          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, MindsCraft shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or website, including but not limited to loss of revenue, data, or business opportunities. Our total liability to you shall not exceed the amount paid by you for the specific service in question.
          </p>
        </section>

        <section>
          <h2>9. Warranty Disclaimer</h2>
          <p>
            Our services are provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not warrant that our work will be error-free or meet every specific requirement not documented in the agreed scope. Post-launch support and maintenance, where applicable, will be covered under a separate maintenance agreement.
          </p>
        </section>

        <section>
          <h2>10. Confidentiality</h2>
          <p>
            Both parties agree to treat as confidential any non-public information shared during the course of the project. This obligation survives the termination of the project agreement.
          </p>
        </section>

        <section>
          <h2>11. Termination</h2>
          <p>
            Either party may terminate a project engagement with 14 days&apos; written notice. The client shall pay for all work completed up to the termination date. Deposits are non-refundable once work has commenced unless MindsCraft is in material breach of the agreed scope.
          </p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Bangladesh. Any disputes shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes shall be subject to the jurisdiction of the courts of Dhaka, Bangladesh.
          </p>
        </section>

        <section>
          <h2>13. Changes to These Terms</h2>
          <p>
            We may update these Terms and Conditions from time to time. Updated terms will be posted on this page with a revised &quot;Last updated&quot; date. Continued use of our services after changes constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2>14. Contact</h2>
          <p>For questions about these Terms, please contact us:</p>
          <div className="legal-card">
            <p><strong>MindsCraft</strong></p>
            <p>Email: <a href="mailto:hello@mindscraft.dev">hello@mindscraft.dev</a></p>
            <p>Website: <Link href="/">mindscraft.dev</Link></p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </section>

        <div className="legal-footer-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}