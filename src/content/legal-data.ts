export interface LegalDoc {
  title: string;
  lastUpdated: string;
  sections: { heading: string; body: string[] }[];
}

export const legalDocs: Record<string, LegalDoc> = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "1. Introduction",
        body: [
          "mindsCraft ('we', 'our', or 'us') respects your privacy and is committed to protecting your personal data.",
          "This privacy policy informs you about how we look after your personal data when you visit our website, utilize our SaaS design services, or contact us.",
        ],
      },
      {
        heading: "2. The Data We Collect",
        body: [
          "We may collect, use, store and transfer different kinds of personal data including Identity Data (first name, last name), Contact Data (email address, telephone numbers, company name), and Technical Data (IP address, browser type and version, time zone setting, location, operating system).",
          "We do not collect any Special Categories of Personal Data about you (details about your race, ethnicity, religious beliefs, sexual orientation, political opinions, or genetic information).",
        ],
      },
      {
        heading: "3. How We Use Your Personal Data",
        body: [
          "We will only use your personal data when the law allows us to. Most commonly, we use your personal data to perform the contract we are about to enter into or have entered into with you, to manage our relationship with you, and to improve our website and design services.",
        ],
      },
      {
        heading: "4. Data Security & Confidentiality",
        body: [
          "All customer designs, intellectual property, product specifications, and project assets are strictly confidential and protected by standard Non-Disclosure Agreements (NDAs).",
          "We have put in place appropriate security measures to prevent your personal data and project files from being accidentally lost, used or accessed in an unauthorized way.",
        ],
      },
      {
        heading: "5. Contact Us",
        body: [
          "If you have any questions about this privacy policy or our privacy practices, please contact us at hello@mindscraft.dev.",
        ],
      },
    ],
  },

  editorial: {
    title: "Editorial Process",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "1. Our Editorial Mission",
        body: [
          "At mindsCraft, our mission is to provide SaaS founders, product designers, and product leaders with practical, actionable, and hype-free insights on user experience, product design, and software growth.",
          "We believe that design should be grounded in real product business metrics rather than aesthetic trends.",
        ],
      },
      {
        heading: "2. Originality & Practical Verification",
        body: [
          "All articles, guides, and teardowns published on mindsCraft are authored by practicing product designers and design directors with direct experience shipping SaaS software.",
          "We do not publish generic content farm summaries. Every case study and recommendation is based on firsthand design experiments and measurable product outcomes.",
        ],
      },
      {
        heading: "3. Fact-Checking & Case Data Integrity",
        body: [
          "Case study metrics, funding figures, and client testimonials are verified directly with the founding teams and publicly available SEC/Crunchbase records prior to publication.",
        ],
      },
      {
        heading: "4. Corrections and Updates",
        body: [
          "We continually update our articles to reflect new software versions, Figma features, and shifting UX industry standards. If you spot an error, please reach out to our editorial team.",
        ],
      },
    ],
  },

  advertising: {
    title: "Advertising Policy",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "1. Independence from Advertisers",
        body: [
          "mindsCraft does not accept paid guest posts, sponsored product placements, or third-party banner advertisements.",
          "Our content is funded entirely by our dedicated product design subscription services. This allows us to remain 100% objective when reviewing software tools and product design patterns.",
        ],
      },
      {
        heading: "2. Software Tool Mentions",
        body: [
          "When we mention third-party tools such as Figma, Linear, Jira, Slack, or Webflow, we do so purely on editorial merit based on what our design team actually uses to deliver client work.",
          "We do not receive affiliate payouts or sponsorships for tool recommendations.",
        ],
      },
    ],
  },
};
