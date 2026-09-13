export interface ComparisonItem {
  id: string;
  pillar: string;
  problem: {
    party: string;
    description: string;
  };
  solution: {
    headline: string;
    description: string;
  };
}

export const comparisonData: ComparisonItem[] = [
  {
    id: "execution",
    pillar: "Full-Cycle Execution",
    problem: {
      party: "Design-Only Agencies",
      description: "Design agencies hand you Figma screens and disappear. You're left to find developers, manage bugs, and deal with broken UI implementations.",
    },
    solution: {
      headline: "From Figma to Scalable Production Code",
      description: "We own the complete cycle. Our designers and full-stack engineers work side-by-side to deliver a finished, fully functional product with zero handoff friction.",
    },
  },
  {
    id: "polish",
    pillar: "Product Polish",
    problem: {
      party: "Offshore Dev Shops",
      description: "Offshore dev shops write code without UX sensibility — resulting in confusing navigation, clunky interfaces, and high user drop-off.",
    },
    solution: {
      headline: "Conversion-Focused UX Architecture",
      description: "Every user flow, API response, and micro-interaction is designed around user engagement, conversion metrics, and business ROI.",
    },
  },
  {
    id: "support",
    pillar: "Post-Launch Support",
    problem: {
      party: "Freelancers & Contractors",
      description: "Freelancers bail once the initial invoice clears, leaving you stranded when production bugs emerge or servers need scaling.",
    },
    solution: {
      headline: "SLA-Backed Long-Term Partnership",
      description: "We stay on board after launch with guaranteed response SLAs, continuous maintenance, performance monitoring, and agile feature sprints.",
    },
  },
  {
    id: "velocity",
    pillar: "Velocity & Access",
    problem: {
      party: "Traditional Big Agencies",
      description: "Traditional agencies bill massive overhead for account managers, slide decks, and endless discovery meetings with slow turnaround.",
    },
    solution: {
      headline: "Direct Builder Collaboration",
      description: "Work directly with the senior designers and full-stack engineers building your product via Slack and Linear. Fast weekly demos, zero bureaucracy.",
    },
  },
];
