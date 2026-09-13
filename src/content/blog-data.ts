export interface BlogSection {
  id: string;
  title: string;
  paragraphs: string[];
  callout?: string;
  bulletPoints?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  date: string;
  updatedDate?: string;
  readTime: string;
  excerpt: string;
  tldr?: string;
  image?: string;
  thumbnail?: string;
  featured?: boolean;
  fresh?: boolean;
  popular?: boolean;
  editorsPick?: boolean;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  reviewer?: {
    name: string;
    role: string;
    avatar?: string;
  };
  content?: string[];
  sections?: BlogSection[];
}

export const blogCategories = [
  { name: "All Topics", slug: "all" },
  { name: "Design Process", slug: "design-process" },
  { name: "SaaS Business", slug: "saas-business" },
  { name: "Product Design", slug: "product-design" },
  { name: "Design Team", slug: "design-team" },
];

export const allBlogPosts: BlogPost[] = [
  // 1. Featured Top Hero Post (Left column)
  {
    slug: "how-where-and-when-to-find-a-designer-for-your-saas-app",
    title: "How, where and when to find a designer for your SaaS app",
    category: "Design Team",
    categorySlug: "design-team",
    date: "Aug 20, 2026",
    updatedDate: "Aug 24, 2026",
    readTime: "8 min read",
    featured: true,
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a7e24755ca2e4add395498_How%2C%20Where%2C%20and%20When%20to%20Find%20a%20Designer.png",
    thumbnail:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a7e24755ca2e4add395498_How%2C%20Where%2C%20and%20When%20to%20Find%20a%20Designer-p-500.png",
    excerpt:
      "Looking for a designer that has the stomach to design an effective SaaS application? Read tactical tips on how, where, and when to find a SaaS designer.",
    tldr:
      "Finding the right designer for a SaaS product requires looking beyond visual aesthetics into domain complexity, user workflows, and state logic. For early-stage companies, hiring an in-house designer is expensive and slow ($130k+ base, 2-3 months recruiting). Dedicated design subscriptions provide immediate senior talent with zero hiring overhead, while freelancers work best for narrow, isolated features.",
    author: {
      name: "Alex P.",
      role: "Head of Design",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80",
    },
    reviewer: {
      name: "Olga S.",
      role: "Senior UX Architect",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
    },
    sections: [
      {
        id: "what-is-special-about-saas-design",
        title: "What is special about SaaS design?",
        paragraphs: [
          "Unlike consumer apps or marketing landing pages, software interfaces require understanding information density, user workflows, and complex state management.",
          "The ultimate goal of a product designer in SaaS is not merely to amaze users with visually glossy mockups, but to reduce cognitive friction so users achieve their core task in the fewest possible clicks.",
          "Good SaaS product design balances flexibility, scalability, and predictable feedback mechanisms across dense data tables, modals, multi-step wizards, and permissions hierarchies.",
        ],
        callout: "Design in SaaS is not decoration; it is product architecture that directly influences churn, activation velocity, and net revenue retention.",
      },
      {
        id: "when-do-you-need-a-saas-designer",
        title: "When do you actually need a dedicated SaaS designer?",
        paragraphs: [
          "Many founders start by building their MVP using off-the-shelf component libraries like Tailwind UI, Shadcn, or Bootstrap. This works wonderfully for validating initial demand.",
          "However, you know it is time to bring in professional product design when:",
        ],
        bulletPoints: [
          "Customer churn is driven by onboarding confusion or 'hard-to-use' feedback.",
          "Your engineering team spends excessive cycles debating layout details or rebuilding confusing user flows.",
          "Adding a single new feature feels like it might break the existing information architecture.",
          "Sales demos stall because prospects compare your UI unfavorably to modern competitors.",
        ],
      },
      {
        id: "three-hiring-paths-comparison",
        title: "The 3 hiring paths: In-house, Freelance, or Design Subscription",
        paragraphs: [
          "When founders decide to hire, they typically evaluate three paths: building an in-house team, hiring specialized freelancers on Upwork/Dribbble, or partnering with an agile design agency on a monthly subscription.",
          "In-house hiring takes an average of 45–75 days in the tech sector, carries substantial recruiting fees (15–20% of first-year salary), and obligates you to recurring equity and benefits regardless of your roadmap fluctuation.",
          "Freelancers offer flexibility, but managing them requires significant founder oversight. Many freelancers excel at graphic design or marketing visuals, but lack the technical rigor to design complex table states, empty states, and permission roles.",
          "Dedicated design subscriptions (like mindsCraft) provide pre-vetted senior designers embedded directly into your Slack and Figma workflows, with month-to-month flexibility and no hiring friction.",
        ],
      },
      {
        id: "how-to-evaluate-designer-portfolio",
        title: "How to evaluate a SaaS designer's portfolio",
        paragraphs: [
          "Don't get dazzled by flashy Dribbble animations that have no buttons, error states, or data boundaries. When reviewing case studies for B2B software, ask these essential questions:",
        ],
        bulletPoints: [
          "Did they show before-and-after flows, or just finished hero screenshots?",
          "How did they handle edge cases: zero data states, error validations, and high-volume table rows?",
          "Can they explain the business metrics tied to their design (e.g., increased conversion, reduced support tickets)?",
          "How do they collaborate with engineers to inspect component specifications?",
        ],
      },
      {
        id: "summary-and-checklist",
        title: "Summary: Finding the right fit for your stage",
        paragraphs: [
          "Hiring the right product designer comes down to your current ARR and growth velocity. If you are pre-revenue, focus on validating product-market fit. Once you hit early traction, having dedicated design execution ensures you don't accumulate costly UX debt that slows down engineering.",
        ],
      },
    ],
  },

  // 2. Hero Right Stack (4 compact horizontal posts)
  {
    slug: "product-management-organization-structure-which-one-to-choose",
    title: "Product management organizational structure: Which one to choose?",
    category: "SaaS Business",
    categorySlug: "saas-business",
    date: "14 Jan, 2026",
    updatedDate: "18 Jan, 2026",
    readTime: "9 min read",
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a7c088ec601b40be82a93e_167.%20Product%20Management%20Organization%20Structure.png",
    thumbnail:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a7c088ec601b40be82a93e_167.%20Product%20Management%20Organization%20Structure-p-500.png",
    excerpt:
      "How to organize product managers, designers, and engineering pods as your SaaS company scales past $5M ARR.",
    tldr:
      "Scaling past 30 employees requires transitioning from ad-hoc product communication to structured squad models. Feature-based pods promote deep domain expertise, while customer-journey pods align teams directly with funnel conversions. Choosing the right structure prevents cross-team dependencies and keeps design delivery fast.",
    author: {
      name: "Alex P.",
      role: "Head of Design",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80",
    },
    sections: [
      {
        id: "the-growth-inflection-point",
        title: "The growth inflection point: Why flat teams stop working",
        paragraphs: [
          "In the early days of a startup, communication happens informally. The founder talks directly to the engineer and designer, and decisions are made in minutes.",
          "As headcount crosses 20–30 people, this unstructured model causes bottlenecking. Everyone waits for founder sign-off, priorities conflict across departments, and release velocity plummets.",
        ],
      },
      {
        id: "three-organizational-models",
        title: "Three proven organizational models for B2B SaaS",
        paragraphs: [
          "Depending on your customer acquisition strategy and product architecture, three primary team models dominate successful tech organizations:",
        ],
        bulletPoints: [
          "Feature Pods: Cross-functional units owning a specific product capability (e.g., Billing, Reporting, Core Editor).",
          "Customer Journey Pods: Teams focused on specific lifecycle stages (Activation, Expansion, Retention).",
          "Platform / Infrastructure Pods: Dedicated squads building internal design systems and developer tooling.",
        ],
      },
      {
        id: "integrating-design-into-squads",
        title: "How to embed product designers into agile pods",
        paragraphs: [
          "Designers should never be an isolated shared service ticket queue. Embedding a dedicated designer into each squad ensures they understand user interviews, join sprint planning, and stay one sprint ahead of engineers.",
        ],
      },
    ],
  },
  {
    slug: "improving-your-saas-bottom-line",
    title: "Improving your SaaS bottom line: How design affects growth metrics",
    category: "SaaS Business",
    categorySlug: "saas-business",
    date: "28 Jan, 2026",
    readTime: "12 min read",
    image:
      "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/66573875208163b79258b999_img-book-01.webp",
    thumbnail:
      "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/66573875208163b79258b999_img-book-01-p-500.webp",
    excerpt:
      "Direct correlation between interface friction, onboarding abandonment, and monthly recurring revenue churn.",
    tldr:
      "Product design directly influences every stage of SaaS unit economics. By eliminating friction from initial setup, clarifying data visualization, and engineering intuitive empty states, companies reduce time-to-value (TTV) and lift 90-day retention by up to 35%.",
    author: {
      name: "Olga S.",
      role: "Senior UX Architect",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
    },
    sections: [
      {
        id: "the-real-cost-of-bad-ux",
        title: "The real cost of poor user experience in SaaS",
        paragraphs: [
          "When a trial user signs up for your product, you have less than 5 minutes to deliver their 'aha!' moment. If the initial setup requires reading documentation or guessing what button to press, 60% of users bounce and never return.",
          "Acquisition costs (CAC) continue to rise across Google and LinkedIn ads. Losing acquired users due to friction in onboarding burns capital and suppresses Net Expansion Rate (NDR).",
        ],
      },
      {
        id: "three-ux-levers-that-lift-mrr",
        title: "Three UX levers that immediately impact MRR",
        paragraphs: [
          "Surgical UX improvements create compound gains across the customer lifecycle:",
        ],
        bulletPoints: [
          "Contextual Onboarding: Replacing generic walkthrough modals with interactive checklist triggers.",
          "Transparent Empty States: Designing zero-states that guide users to create their first item rather than staring at blank tables.",
          "Self-serve Upgrade Paths: Eliminating 'Contact Sales' friction for natural tier upgrades.",
        ],
      },
    ],
  },
  {
    slug: "to-redesign-or-not-to-redesign-your-product",
    title: "To redesign or not to redesign your product: A solution to resolve your doubts",
    category: "Design Process",
    categorySlug: "design-process",
    date: "12 Feb, 2026",
    readTime: "7 min read",
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a7dcba4a57286e7b19db4c_To%20Redesign%20or%20Not%20to%20Redesign%20Your%20Product_%20A%20Solution%20to%20Resolve%20Your%20Doubts.png",
    thumbnail:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a7dcba4a57286e7b19db4c_To%20Redesign%20or%20Not%20to%20Redesign%20Your%20Product_%20A%20Solution%20to%20Resolve%20Your%20Doubts-p-500.png",
    excerpt:
      "Before embarking on a multi-month revamp, use this 5-point checklist to determine if you need surgical UX fixes or a full rewrite.",
    tldr:
      "Complete product redesigns are risky and often alienate power users. Before starting a rewrite, audit whether your problems stem from outdated visual styling or fundamental information architecture flaws. In 70% of cases, iterative UX sprints achieve higher conversion lifts faster than ground-up rewrites.",
    author: {
      name: "Olga S.",
      role: "Senior UX Architect",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
    },
    sections: [
      {
        id: "the-redesign-dilemma",
        title: "The redesign dilemma: Why big-bang redesigns fail",
        paragraphs: [
          "Redesigning software from scratch is tempting. Founders believe a brand-new interface will solve declining activation rates. But complete rewrites stall feature shipping for 6–12 months and disorient your existing loyal customers.",
        ],
      },
      {
        id: "when-a-full-redesign-is-necessary",
        title: "When is a full redesign truly justified?",
        paragraphs: [
          "There are specific scenarios where an iterative polish isn't enough:",
        ],
        bulletPoints: [
          "A fundamental shift in target market (e.g., transitioning from SMBs to Enterprise security requirements).",
          "Accumulated technical debt that prevents responsive layouts or component reuse.",
          "Merging multiple acquisitions or disparate modules into a single unified workspace.",
        ],
      },
    ],
  },
  {
    slug: "linear-app-case-study",
    title: "Linear app built $400M issue tracker with next to no marketing: Here's how",
    category: "Product Design",
    categorySlug: "product-design",
    date: "24 Feb, 2026",
    readTime: "10 min read",
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/673c7fe350c372830b3dc455_6627e7033ff19f62367ae969_Linear%2520app-1.png",
    thumbnail:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/673c7fe350c372830b3dc455_6627e7033ff19f62367ae969_Linear%2520app-1-p-500.png",
    excerpt:
      "We analyze Linear's keyboard shortcuts, sub-50ms optimistic UI updates, and craftsmanship that captured the modern developer ecosystem.",
    tldr:
      "Linear succeeded in a saturated market dominated by Jira and Asana through radical product craftsmanship. By prioritizing sub-50ms interaction speeds, keyboard-first navigation, and minimalist visual restraint, Linear transformed issue tracking into a competitive advantage.",
    author: {
      name: "Max V.",
      role: "Product Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
    },
    sections: [
      {
        id: "speed-as-a-feature",
        title: "Speed as a core product feature",
        paragraphs: [
          "Most web applications feel sluggish because they wait for server confirmation before updating the screen. Linear treats speed as non-negotiable, implementing instant optimistic UI updates and local data syncing.",
        ],
      },
      {
        id: "keyboard-first-design",
        title: "Keyboard-first navigation and Command-K menus",
        paragraphs: [
          "Power users don't want to move their hand to the mouse to assign an issue or update a status. Linear popularized the global Command-K palette that is now standard across SaaS.",
        ],
      },
    ],
  },

  // 3. Fresh Section Posts
  {
    slug: "contextual-menu-ui",
    title: "Contextual menu UI: Best practices, examples, and UX guidelines",
    category: "Product Design",
    categorySlug: "product-design",
    date: "7 Sep, 2026",
    readTime: "6 min read",
    fresh: true,
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a7c088ec601b40be82a93e_167.%20Product%20Management%20Organization%20Structure.png",
    excerpt:
      "See how top SaaS tools design contextual menu UI, when menus appear, and best practices that keep power-user actions fast, clear, and easy to discover.",
    tldr:
      "High-density data tables become unusable when cluttered with too many action buttons. Contextual menus, right-click triggers, and hovering action docks keep data readable while exposing advanced bulk actions on demand.",
    author: {
      name: "Olga S.",
      role: "Senior UX Architect",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
    },
  },
  {
    slug: "ux-research-for-startups",
    title: "UX research for startups: How to learn from users on a budget",
    category: "Design Process",
    categorySlug: "design-process",
    date: "1 Sep, 2026",
    readTime: "8 min read",
    fresh: true,
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a7e24755ca2e4add395498_How%2C%20Where%2C%20and%20When%20to%20Find%20a%20Designer.png",
    excerpt:
      "You don't need a dedicated research team to get game-changing user feedback. Here is how founders can run rapid 30-minute usability tests.",
    tldr:
      "Usability research doesn't require five-figure testing suites. Watching just five real users navigate your core flow without assistance uncovers 80% of critical workflow misunderstandings.",
    author: {
      name: "Max V.",
      role: "Product Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
    },
  },
  {
    slug: "18-ux-improvements-that-move-product-metrics",
    title: "18 UX improvements that move core product metrics",
    category: "Product Design",
    categorySlug: "product-design",
    date: "25 Aug, 2026",
    readTime: "11 min read",
    fresh: true,
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/6819d5da4bfd78258a7a913e_cover.png",
    excerpt:
      "From zero-state empty states to inline micro-feedback, explore 18 specific interface tweaks proven to lift conversion and decrease onboarding drop-off.",
    tldr:
      "Micro-interactions have a macro effect on SaaS retention. Simple additions like optimistic save indicators, auto-focus input fields, and inline data validation measurably lift user confidence.",
    author: {
      name: "Alex P.",
      role: "Head of Design",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80",
    },
  },
  {
    slug: "ux-research-field-study",
    title: "UX research field study: A simple way to study real SaaS users",
    category: "Design Process",
    categorySlug: "design-process",
    date: "18 Aug, 2026",
    readTime: "7 min read",
    fresh: true,
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a7dcba4a57286e7b19db4c_To%20Redesign%20or%20Not%20to%20Redesign%20Your%20Product_%20A%20Solution%20to%20Resolve%20Your%20Doubts.png",
    excerpt:
      "Step outside the laboratory. How observing customers in their actual daily work environment uncovers hidden workarounds and workflow friction.",
    author: {
      name: "Olga S.",
      role: "Senior UX Architect",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
    },
  },

  // 4. Popular Now Posts
  {
    slug: "dashboard-design-examples-that-catch-the-eye",
    title: "16 best dashboard design examples: Innovative approaches to data presentation",
    category: "Product Design",
    categorySlug: "product-design",
    date: "18 Jul, 2026",
    readTime: "11 min read",
    popular: true,
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/6819d5da4bfd78258a7a913e_cover.png",
    excerpt:
      "A curated breakdown of world-class SaaS dashboards, analyzing typography, card hierarchy, color restraint, and data visualization.",
    author: {
      name: "Olga S.",
      role: "Senior UX Architect",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
    },
  },
  {
    slug: "roles-in-saas-company-who-you-need-to-start-hiring-when-your-saas-is-growing",
    title: "Roles in SaaS company: Who you need to start hiring when your SaaS is growing",
    category: "SaaS Business",
    categorySlug: "saas-business",
    date: "10 Jul, 2026",
    readTime: "8 min read",
    popular: true,
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a40807f6d0ba0bdf85fb6a_Roles%20in%20SaaS%20Company_%20How%20to%20Build%20a%20Team%20at%20the%20Growth%20Stage%C2%A0.png",
    excerpt:
      "From first full-time designer to VP of Product: a hiring roadmap for venture-backed and bootstrapped SaaS founders.",
    author: {
      name: "Alex P.",
      role: "Head of Design",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80",
    },
  },
  {
    slug: "compelling-design-takes-more-than-making-it-like-stripe",
    title: "Compelling design takes more than “Making It Like Stripe”",
    category: "Product Design",
    categorySlug: "product-design",
    date: "28 Jun, 2026",
    readTime: "9 min read",
    popular: true,
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/673c8ccdb0be5dd96d243bdd_64a4053b28c7258ea73e2ed6_%25E2%2580%259CMaking%2520It%2520Like%2520Stripe%25E2%2580%259D.png",
    excerpt:
      "Why copying another brand's gradient mesh and typography won't solve your user's specific workflow problems.",
    author: {
      name: "Max V.",
      role: "Product Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
    },
  },
  {
    slug: "banking-app-design-how-proper-ux-can-help-overcome-user-concerns",
    title: "Banking app design: How proper UX can help overcome user concerns and increase trust",
    category: "Product Design",
    categorySlug: "product-design",
    date: "14 Jun, 2026",
    readTime: "10 min read",
    popular: true,
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a55d8a2d6459f3acd13894_COVER_Banking%20App%20Design_%20How%20Do%20Top%20Neobanks%20Handle%20UX_.png",
    excerpt:
      "How top fintech and neobanks handle compliance, security transparency, and transaction reassurance through delicate micro-copy and clean states.",
    author: {
      name: "Olga S.",
      role: "Senior UX Architect",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
    },
  },

  // 5. Editor's Picks Posts
  {
    slug: "the-cost-of-hiring-a-designer-for-your-startup",
    title: "The cost of hiring a designer for your startup: Main things to consider",
    category: "SaaS Business",
    categorySlug: "saas-business",
    date: "2 May, 2026",
    readTime: "7 min read",
    editorsPick: true,
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a85a83287855de270e649b_Onboarding%20New%20Designers%20Shouldn%27t%20Be%20a%20Problem.png",
    excerpt:
      "First time hiring a UI/UX designer? Read on to learn how much they charge, what their rates depend on, and where to find a good fit.",
    author: {
      name: "Alex P.",
      role: "Head of Design",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80",
    },
  },
  {
    slug: "onboarding-new-designers-shouldnt-be-a-problem",
    title: "Onboarding new designers shouldn't be a problem: Here's how to onboard remote teams",
    category: "Design Team",
    categorySlug: "design-team",
    date: "20 Apr, 2026",
    readTime: "8 min read",
    editorsPick: true,
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a85a83287855de270e649b_Onboarding%20New%20Designers%20Shouldn%27t%20Be%20a%20Problem.png",
    excerpt:
      "Want to get your new designers productive from day three? Follow our tested remote designer onboarding workflow and component library checklist.",
    author: {
      name: "Max V.",
      role: "Product Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
    },
  },
  {
    slug: "what-do-ux-designers-do-responsibilities-explained",
    title: "What do UX designers do: Their responsibilities explained",
    category: "Design Team",
    categorySlug: "design-team",
    date: "8 Apr, 2026",
    readTime: "9 min read",
    editorsPick: true,
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a7ae510e60f80409d5d85c_What%20Do%20UX%20Designers%20Do_%20Their%20Responsibilities%20Explained.png",
    excerpt:
      "Clarifying the distinct roles between UX research, interaction architecture, design systems, and visual fidelity in a product squad.",
    author: {
      name: "Olga S.",
      role: "Senior UX Architect",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
    },
  },
  {
    slug: "how-to-hire-ui-ux-designer-what-works-and-what-doesnt",
    title: "How to hire UI UX designer: What works and what doesn’t (A designer’s perspective)",
    category: "Design Team",
    categorySlug: "design-team",
    date: "22 Mar, 2026",
    readTime: "10 min read",
    editorsPick: true,
    image:
      "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/64a4062543c87546c9bbdc8b_How%20to%20Hire%20UX%20Designers_%20Essential%20Guide%20from%20Head%20Hunting%20to%20Interview.png",
    excerpt:
      "Why design test assignments often backfire, how to evaluate live Figma case files, and how to assess communication under pressure.",
    author: {
      name: "Alex P.",
      role: "Head of Design",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80",
    },
  },
];
