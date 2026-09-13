export interface ComparisonPoint {
  feature: string;
  us: string;
  them: string;
  advantageUs: boolean;
}

export interface ComparisonDetail {
  slug: string;
  competitor: string;
  title: string;
  heroHeadline: string;
  heroDescription: string;
  badge: string;
  points: ComparisonPoint[];
  whyChooseTitle: string;
  whyChoosePoints: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const comparisonsData: Record<string, ComparisonDetail> = {
  toptal: {
    slug: "toptal",
    competitor: "Toptal",
    title: "mindsCraft vs Toptal",
    badge: "Alternative to Toptal",
    heroHeadline: "Dedicated UI/UX designer at half the cost of Toptal",
    heroDescription:
      "Toptal charges hefty hourly markups for generalist freelancers. mindsCraft gives you a dedicated senior product designer specialized exclusively in SaaS on a predictable, flat monthly subscription.",
    points: [
      {
        feature: "Pricing Model",
        us: "Flat monthly fee ($4,300/mo) with unlimited requests",
        them: "Hourly billing ($80-$150/hr), escalating costs",
        advantageUs: true,
      },
      {
        feature: "Designer Dedication",
        us: "100% dedicated to your product",
        them: "Freelancers juggling 2-3 other client contracts",
        advantageUs: true,
      },
      {
        feature: "Specialization",
        us: "Exclusively B2B SaaS product design",
        them: "General pool of freelancers (web, mobile, brand)",
        advantageUs: true,
      },
      {
        feature: "Management Support",
        us: "Design Director oversight included on every project",
        them: "Solo freelancer with no peer review",
        advantageUs: true,
      },
      {
        feature: "Free Trial",
        us: "3-day free trial on real product tasks",
        them: "Initial deposit required before starting work",
        advantageUs: true,
      },
      {
        feature: "Communication",
        us: "Direct Slack channel with your designer",
        them: "Varies by freelancer; often portal-based",
        advantageUs: true,
      },
    ],
    whyChooseTitle: "Why SaaS companies switch from Toptal to mindsCraft",
    whyChoosePoints: [
      {
        title: "50% lower monthly expense",
        desc: "A full-time designer on Toptal runs $12,000–$18,000/month. mindsCraft offers a dedicated designer for a fraction of that cost.",
      },
      {
        title: "Deep SaaS domain mastery",
        desc: "Our designers live and breathe complex dashboards, data visualizations, and multi-tenant user flows every single day.",
      },
      {
        title: "Immediate replacement guarantee",
        desc: "If your designer isn't an exact match, we swap them in 24 hours with zero onboarding downtime.",
      },
    ],
    faqs: [
      {
        question: "Is mindsCraft an agency or a marketplace like Toptal?",
        answer: "We are an agency with our own in-house design team, not a marketplace of disconnected freelancers.",
      },
      {
        question: "How quickly can a designer start?",
        answer: "Within 24 to 48 hours of our initial call.",
      },
    ],
  },

  "in-house": {
    slug: "in-house",
    competitor: "In-house designer",
    title: "mindsCraft vs In-House Designer",
    badge: "In-House Alternative",
    heroHeadline: "Skip 3 months of recruiting: get senior SaaS design talent tomorrow",
    heroDescription:
      "Hiring an in-house product designer takes months, costs tens of thousands in recruiter fees, and carries high employment risk. mindsCraft gives you immediate dedicated design capacity with zero overhead.",
    points: [
      {
        feature: "Time to Hire",
        us: "24-48 hours",
        them: "60-90 days average",
        advantageUs: true,
      },
      {
        feature: "Recruiter Fees",
        us: "$0",
        them: "$20,000 - $35,000 (20-30% of first year salary)",
        advantageUs: true,
      },
      {
        feature: "Commitment Risk",
        us: "Cancel or pause anytime with 14-day notice",
        them: "Full-time employment contract, severance risk",
        advantageUs: true,
      },
      {
        feature: "Benefits & Overhead",
        us: "Included in flat monthly rate",
        them: "Health insurance, 401k, hardware, PTO, payroll taxes",
        advantageUs: true,
      },
      {
        feature: "Knowledge Base",
        us: "Backed by 200+ SaaS design learnings & design directors",
        them: "Single individual's limited perspective",
        advantageUs: true,
      },
      {
        feature: "Trial Period",
        us: "3-day free trial on real tasks",
        them: "No free trial; offer letter required upfront",
        advantageUs: true,
      },
    ],
    whyChooseTitle: "When mindsCraft beats hiring in-house",
    whyChoosePoints: [
      {
        title: "You need to ship this quarter, not next quarter",
        desc: "Don't stall your product roadmap while waiting for HR to screen hundreds of unqualified resumes.",
      },
      {
        title: "Variable product workloads",
        desc: "When redesigns or new module releases are done, pause your subscription instead of having idle designers on payroll.",
      },
      {
        title: "Instant seniority",
        desc: "Get mid-to-senior product designers who have worked on dozens of software products without paying Silicon Valley salaries.",
      },
    ],
    faqs: [
      {
        question: "Can an outsourced designer really understand our product deeply?",
        answer: "Yes, because your designer works 100% exclusively on your product, attending your standups and chatting directly in Slack.",
      },
    ],
  },

  agency: {
    slug: "agency",
    competitor: "Traditional agency",
    title: "mindsCraft vs Traditional Agency",
    badge: "Agency Alternative",
    heroHeadline: "No account managers, no hourly billables, no bloated presentations",
    heroDescription:
      "Traditional design agencies bill by the hour, communicate through layers of account reps, and take weeks to deliver static pitch decks. mindsCraft operates like an embedded extension of your dev team.",
    points: [
      {
        feature: "Communication Channel",
        us: "Direct Slack channel with your designer every day",
        them: "Account managers, formal weekly status calls",
        advantageUs: true,
      },
      {
        feature: "Pricing Transparency",
        us: "Flat predictable monthly rate",
        them: "Hourly billing with frequent change orders",
        advantageUs: true,
      },
      {
        feature: "Turnaround Velocity",
        us: "Daily updates in Figma and Loom",
        them: "Milestone drops every 3-4 weeks",
        advantageUs: true,
      },
      {
        feature: "Developer Integration",
        us: "Embeds in your Jira/Linear and coordinates with engineers",
        them: "Hands off static PDFs and moves on to next client",
        advantageUs: true,
      },
      {
        feature: "Contract Flexibility",
        us: "Month-to-month, pause or cancel anytime",
        them: "Rigid 6-month minimum scope-of-work agreements",
        advantageUs: true,
      },
    ],
    whyChooseTitle: "Why founders choose our embedded model",
    whyChoosePoints: [
      {
        title: "Zero bureaucracy",
        desc: "Talk directly to the person pushing pixels. Feedback is incorporated within hours, not in next week's formal review.",
      },
      {
        title: "No bill shock",
        desc: "Never receive an unexpected invoice because a feature required an extra iteration.",
      },
      {
        title: "Engineers love us",
        desc: "We speak developer language: responsive tokens, auto-layout, edge states, and pragmatic component architectures.",
      },
    ],
    faqs: [
      {
        question: "Do you provide fixed-scope quotes?",
        answer: "We focus on agile monthly subscriptions because software development is inherently iterative, saving you money.",
      },
    ],
  },
};

export const allComparisonsList = Object.values(comparisonsData);
