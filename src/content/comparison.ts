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
    id: "flexibility",
    pillar: "Flexibility",
    problem: {
      party: "Outsourcing Vendors",
      description: "Outsourcing vendors' one-size-fits-all processes don't fit SaaS startups.",
    },
    solution: {
      headline: "Dedicated Embedded Designer",
      description: "You get a dedicated designer that integrates into your team like an in-house specialist.",
    },
  },
  {
    id: "reliability",
    pillar: "Reliability",
    problem: {
      party: "Freelancers",
      description: "Freelance designers are flexible, but may not always be reliable.",
    },
    solution: {
      headline: "Exclusive Focus & Direct Comms",
      description: "The designer communicates directly with your team and works exclusively on your project.",
    },
  },
  {
    id: "transparency",
    pillar: "Transparency",
    problem: {
      party: "Traditional Agencies",
      description: "Design agencies lack the transparency that in-house designers offer.",
    },
    solution: {
      headline: "Zero Middlemen",
      description: "You always know who’s working, what they’re doing, and how much time it takes — no middlemen, no surprises.",
    },
  },
  {
    id: "expertise",
    pillar: "Expertise",
    problem: {
      party: "In-House Hiring",
      description: "In-house designers lack the team expertise that design agencies have.",
    },
    solution: {
      headline: "System-Level SaaS Thinking",
      description: "You get SaaS-focused designers with system-level thinking, guided by senior design leads.",
    },
  },
];
