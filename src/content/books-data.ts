export interface BookItem {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  pages: number;
  readTime: string;
  coverImage: string;
  chapters: { title: string; summary: string }[];
  audience: string;
  downloadUrl?: string;
}

export const booksData: Record<string, BookItem> = {
  "how-to-get-along-with-designers-and-work-well-together": {
    slug: "how-to-get-along-with-designers-and-work-well-together",
    title: "How to Get Along with Designers and Work Well Together",
    subtitle: "A software engineer and founder guide to giving effective design feedback",
    description:
      "Designers and developers often feel like they speak different languages. This guide decodes designer psychology, explains how to give constructive feedback, and sets up friction-free handoffs.",
    pages: 42,
    readTime: "25 min read",
    coverImage:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/63b70b7dac09f42b5abf02fa_How%20to%20Get%20Along%20with%20Designers%20%20and%20Work%20Well%20Together.png",
    chapters: [
      {
        title: "Chapter 1: The vocabulary gap",
        summary: "Understanding what designers mean by visual balance, cognitive load, and hierarchy.",
      },
      {
        title: "Chapter 2: How to give critique without demotivating your team",
        summary: "Framing feedback around user goals and technical constraints rather than personal taste.",
      },
      {
        title: "Chapter 3: The anatomy of a perfect developer handoff",
        summary: "Auto-layout, design tokens, error states, and responsive breakpoint documentation.",
      },
      {
        title: "Chapter 4: Establishing a healthy product design rhythm",
        summary: "Daily standups, asynchronous Loom updates, and weekly design critique rituals.",
      },
    ],
    audience: "Developers, CTOs, and Product Managers working closely with UI/UX designers.",
  },

  "improving-your-saas-bottom-line-how-design-affects-your-growth-metrics": {
    slug: "improving-your-saas-bottom-line-how-design-affects-your-growth-metrics",
    title: "How Design Impacts Your SaaS Growth Metrics",
    subtitle: "Connecting interface design directly to churn reduction, CAC, and expansion revenue",
    description:
      "Design isn't just decoration—it's a financial lever. This guide breaks down real case studies showing how redesigning core workflows helped SaaS startups raise capital and double revenue.",
    pages: 60,
    readTime: "40 min read",
    coverImage:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/63b70b84eca9da494bf632b0_How%20Design%20Impacts%20Your%20Growth%20Metrics.png",
    chapters: [
      {
        title: "Chapter 1: The math of user churn",
        summary: "How confusing UX drives silent cancellations and how to fix usability leaks.",
      },
      {
        title: "Chapter 2: Self-serve activation vs. sales-assist friction",
        summary: "Designing product-led growth (PLG) loops that convert free trialists automatically.",
      },
      {
        title: "Chapter 3: Raising capital with high-fidelity design",
        summary: "How Datawisp raised $3.6M and Aampe raised $18M after UX redesigns.",
      },
      {
        title: "Chapter 4: Calculating ROI on design investments",
        summary: "A framework for measuring the monetary return of UI/UX improvements.",
      },
    ],
    audience: "B2B SaaS Founders, CEOs, and VCs assessing product-led growth opportunities.",
  },

  "the-ux-design-crash-course-for-product-owners": {
    slug: "the-ux-design-crash-course-for-product-owners",
    title: "The UX Design Crash Course for Product Owners",
    subtitle: "Everything non-designers need to know to evaluate and guide product interfaces",
    description:
      "Learn the core mental models of modern interface design: visual hierarchy, affordances, progressive disclosure, and user onboarding principles.",
    pages: 56,
    readTime: "35 min read",
    coverImage:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/63b70b891d3ebc8331b452a3_The%20UX%20Design%20Crash%20Course%20for%20Product%20Owners.png",
    chapters: [
      {
        title: "Chapter 1: Visual hierarchy that directs user focus",
        summary: "Typography scale, contrast ratios, and white space as functional tools.",
      },
      {
        title: "Chapter 2: Progressive disclosure for complex software",
        summary: "How to keep complex features accessible without overwhelming beginner users.",
      },
      {
        title: "Chapter 3: Designing the first 5 minutes (Onboarding)",
        summary: "Guiding users to their 'Aha!' moment before cognitive fatigue sets in.",
      },
      {
        title: "Chapter 4: Designing for error recovery and edge cases",
        summary: "Empty states, destructive action warnings, and polite error messages.",
      },
    ],
    audience: "Product Owners, Startup Founders, and Operations Leads managing software development.",
  },

  "how-eleken-works-clients-guide": {
    slug: "how-eleken-works-clients-guide",
    title: "How mindsCraft Works: Client's Guide",
    subtitle: "The complete playbook on our subscription model, workflow rituals, and designer collaboration",
    description:
      "A transparent behind-the-scenes look at how we vet designers, manage daily communication in Slack, run Figma sprints, and guarantee top-tier design quality.",
    pages: 36,
    readTime: "20 min read",
    coverImage:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/63b70b939c833870fa5960f6_How%20We%20Work_%20Client%27s%20Guide.png",
    chapters: [
      {
        title: "Chapter 1: The dedicated subscription model",
        summary: "Why we abandoned hourly billing in favor of a flat monthly fee.",
      },
      {
        title: "Chapter 2: Onboarding in 24 hours",
        summary: "How our 3-day free trial works and how we kick off your first sprint.",
      },
      {
        title: "Chapter 3: Daily communication and collaboration tools",
        summary: "Working with Slack, Figma, Loom, and Linear to keep work moving seamlessly.",
      },
      {
        title: "Chapter 4: Design reviews and quality control",
        summary: "How our design directors review work behind the scenes to maintain our 4.9 Clutch score.",
      },
    ],
    audience: "Prospective and current clients wanting to maximize their design collaboration.",
  },

  "a-non-boring-guide-to-how-ux-research-is-supposed-to-work": {
    slug: "a-non-boring-guide-to-how-ux-research-is-supposed-to-work",
    title: "A Non-Boring Guide to How UX Research Is Supposed to Work",
    subtitle: "Practical user research methods for fast-moving SaaS teams that hate academic fluff",
    description:
      "A no-nonsense handbook on how to conduct user interviews, usability testing, and customer journey mapping without spending months or thousands of dollars on enterprise research suites.",
    pages: 48,
    readTime: "30 min read",
    coverImage:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/63b70b981d3ebceb8fb45375_A%20Non-Boring%20Guide%20%20to%20How%20UX%20Research%20%20Is%20Supposed%20to%20Work.png",
    chapters: [
      {
        title: "Chapter 1: Why most UX research is a waste of time",
        summary: "The difference between academic research and actionable product insights that change the roadmap.",
      },
      {
        title: "Chapter 2: Five questions that reveal genuine user pain",
        summary: "How to interview customers without biasing their responses or leading the witness.",
      },
      {
        title: "Chapter 3: Cheap, fast usability testing",
        summary: "Running 5-person test sessions on clickable Figma prototypes in 48 hours.",
      },
      {
        title: "Chapter 4: Translating findings into development tickets",
        summary: "Bridging the gap between qualitative feedback and engineering backlog prioritization.",
      },
    ],
    audience: "Founders, Product Managers, and UX Designers who want pragmatic user insights.",
  },
};

export const allBooksList = Object.values(booksData);
