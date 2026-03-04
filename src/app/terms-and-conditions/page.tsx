import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | MindsCraft',
  description: 'Read the terms and conditions governing the use of MindsCraft services and website.',
};

const LAST_UPDATED = 'March 3, 2026';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-blue-600 mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms &amp; Conditions</h1>
          <p className="text-gray-500 text-base">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website mindscraft.dev and any services provided by MindsCraft (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Services</h2>
          <p className="mb-3">
            MindsCraft provides web development, UI/UX design, mobile development, and AI integration services. The scope, deliverables, timelines, and pricing of any specific engagement are governed by a separate written agreement or proposal issued to the client.
          </p>
          <p>
            We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Project Agreements</h2>
          <p>
            All client projects require a signed statement of work (SOW) or project proposal prior to commencement. These documents will outline:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Project scope, milestones, and deliverables</li>
            <li>Payment schedule and accepted payment methods</li>
            <li>Revision limits and change request procedures</li>
            <li>Intellectual property transfer terms</li>
            <li>Confidentiality obligations for both parties</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Payment Terms</h2>
          <p className="mb-3">
            Unless otherwise agreed in writing, our standard payment terms are:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A deposit (typically 50%) is required before work begins.</li>
            <li>The remaining balance is due upon project completion or as specified in the project agreement.</li>
            <li>Late payments may incur a late fee as outlined in the project agreement.</li>
            <li>We reserve the right to pause work on overdue accounts.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Intellectual Property</h2>
          <p className="mb-3">
            Upon receipt of full payment, MindsCraft assigns all rights, title, and interest in the custom-developed deliverables to the client, unless otherwise specified in the project agreement.
          </p>
          <p>
            MindsCraft retains the right to display completed work in its portfolio unless the client requests confidentiality in writing prior to project start. Any third-party libraries, fonts, or frameworks used in your project remain governed by their respective open-source or commercial licenses.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Client Responsibilities</h2>
          <p>The client agrees to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Provide timely feedback and approvals as required by the project timeline.</li>
            <li>Supply accurate and complete content, assets, and access credentials required for the project.</li>
            <li>Ensure that all materials provided do not infringe the intellectual property rights of any third party.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Revisions and Changes</h2>
          <p>
            Each project proposal specifies the number of included revision rounds. Requests beyond the agreed scope will be quoted and billed separately. Requests that materially change the project scope will require an updated agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, MindsCraft shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or website, including but not limited to loss of revenue, data, or business opportunities. Our total liability to you shall not exceed the amount paid by you for the specific service in question.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">9. Warranty Disclaimer</h2>
          <p>
            Our services are provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not warrant that our work will be error-free or meet every specific requirement not documented in the agreed scope. Post-launch support and maintenance, where applicable, will be covered under a separate maintenance agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">10. Confidentiality</h2>
          <p>
            Both parties agree to treat as confidential any non-public information shared during the course of the project. This obligation survives the termination of the project agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">11. Termination</h2>
          <p>
            Either party may terminate a project engagement with 14 days&apos; written notice. The client shall pay for all work completed up to the termination date. Deposits are non-refundable once work has commenced unless MindsCraft is in material breach of the agreed scope.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Bangladesh. Any disputes shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes shall be subject to the jurisdiction of the courts of Dhaka, Bangladesh.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">13. Changes to These Terms</h2>
          <p>
            We may update these Terms and Conditions from time to time. Updated terms will be posted on this page with a revised &quot;Last updated&quot; date. Continued use of our services after changes constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">14. Contact</h2>
          <p>For questions about these Terms, please contact us:</p>
          <div className="mt-4 p-5 bg-gray-50 rounded-xl border border-gray-100 space-y-1">
            <p className="font-semibold text-gray-900">MindsCraft</p>
            <p>Email: <a href="mailto:hello@mindscraft.dev" className="text-blue-600 underline hover:text-blue-800">hello@mindscraft.dev</a></p>
            <p>Website: <Link href="/" className="text-blue-600 underline hover:text-blue-800">mindscraft.dev</Link></p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </section>

        <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-gray-500">
          <Link href="/privacy-policy" className="hover:text-gray-900 underline">Privacy Policy</Link>
          <Link href="/cookie-policy" className="hover:text-gray-900 underline">Cookie Policy</Link>
          <Link href="/contact" className="hover:text-gray-900 underline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}