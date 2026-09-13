export interface VisualShowcase {
  beforeImage?: string;
  afterImage?: string;
  label?: string;
  showcaseImages?: { src: string; caption: string }[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  badge: string;
  heroHeadline: string;
  heroDescription: string;
  visualShowcase?: VisualShowcase;
  problemTitle: string;
  problems: { title: string; desc: string }[];
  deliverablesTitle: string;
  deliverables: { title: string; desc: string }[];
  processTitle: string;
  processSteps: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relevantCases: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "product-redesign": {
    slug: "product-redesign",
    title: "SaaS Product Redesign Services",
    badge: "Product Redesign",
    heroHeadline: "Redesign your SaaS product for clarity, retention, and growth",
    heroDescription:
      "We help established SaaS teams fix accumulated UX debt, reduce user drop-off, and modernize complex interfaces without breaking ongoing developer velocity.",
    visualShowcase: {
      beforeImage: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/68cbe92bade02c20b334ca11_img-nworx.webp",
      afterImage: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/68cbe92bade02c20b334ca1e_img-nworx-after.webp",
      label: "Nworx LMS Platform: Before & After Redesign",
      showcaseImages: [
        {
          src: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/69c15750f72a4191bd92252a_img-case-seocrawl-slide.webp",
          caption: "SEO Crawl: Real-time analytics dashboard redesign",
        },
        {
          src: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/68d53246a2dde26b3db4f2e7_mylnterview.webp",
          caption: "MyInterview: Rebuilding the candidate flow to eliminate 90% churn",
        },
        {
          src: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/69c1569a54cb9e3f3c59a7c3_img-case-zaplify-slide.webp",
          caption: "Zaplify: Streamlining sales sequences to double user activation",
        },
      ],
    },
    problemTitle: "When SaaS companies come to us for a redesign",
    problems: [
      {
        title: "Product grew too fast",
        desc: "New features were stacked on top of an old MVP layout, making the platform feel cluttered and confusing for users.",
      },
      {
        title: "High churn & onboarding drop-off",
        desc: "Users fail to find value quickly, leading to friction during onboarding and low trial-to-paid conversion.",
      },
      {
        title: "Inconsistent visual language",
        desc: "Different engineering teams built separate modules without a shared design system, creating a disjointed user experience.",
      },
    ],
    deliverablesTitle: "Scope & Deliverables of our SaaS Redesign",
    deliverables: [
      {
        title: "UX Research & Audit",
        desc: "Deep dive into usage analytics, user journeys, pain points, and usability bottlenecks.",
      },
      {
        title: "Information Architecture",
        desc: "Restructuring navigation, flows, and page hierarchy so core workflows take fewer clicks.",
      },
      {
        title: "Figma Component Library",
        desc: "Production-ready, accessible design system ready for engineering handoff with auto-layout.",
      },
      {
        title: "Interactive Prototypes",
        desc: "High-fidelity clickable prototypes tested with real users before writing a single line of code.",
      },
    ],
    processTitle: "How we approach product redesign",
    processSteps: [
      {
        step: "01",
        title: "Discovery & Alignment",
        desc: "We analyze your product, product roadmap, user feedback, and align directly with your dev team in Slack.",
      },
      {
        step: "02",
        title: "Wireframing & Core Flows",
        desc: "We map out revised user journeys and wireframe the highest-impact workflows first.",
      },
      {
        step: "03",
        title: "UI Polish & Design System",
        desc: "We turn wireframes into sleek, modern screens and build a modular design system in Figma.",
      },
      {
        step: "04",
        title: "Handoff & Developer Support",
        desc: "We provide complete developer specs, tokens, and assist your engineers during implementation.",
      },
    ],
    faqs: [
      {
        question: "How long does a SaaS product redesign take?",
        answer:
          "Most redesigns take between 1 to 3 months depending on complexity. Because we work on a monthly subscription, you can scale the engagement up or down as needed.",
      },
      {
        question: "Will our developers have to pause feature development?",
        answer:
          "No. We redesign your platform modularly, delivering user flows in sprints so engineering can ship updates incrementally without stalling.",
      },
      {
        question: "Can we test your work before committing?",
        answer: "Yes, we offer a free 3-day trial so you can experience our workflow, speed, and design quality firsthand.",
      },
    ],
    relevantCases: ["datawisp", "aampe", "myinterview", "nworx"],
  },

  "mvp-design": {
    slug: "mvp-design",
    title: "MVP Design for SaaS",
    badge: "MVP Design",
    heroHeadline: "Turn your product vision into an investor-ready MVP",
    heroDescription:
      "We design intuitive, lean SaaS MVPs from scratch that impress early adopters, validate product-market fit, and help founders raise capital.",
    visualShowcase: {
      showcaseImages: [
        {
          src: "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b248adcfc510fc6c6d_697b712406148079bfae472f_floret-thumbnail-image-02.webp",
          caption: "Floret: From concept to a $2.3M seed investment round",
        },
        {
          src: "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b3f75d65d1b9936a3d_697b712406148079bfae4762_flourishon-thumbnail-image-02.webp",
          caption: "FlourishON: Clean caregiving MVP designed in 4 weeks",
        },
        {
          src: "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b0488335b907ec7a11_697b712406148079bfae4745_hubble-network-thumbnail-image-02.webp",
          caption: "Hubble Network: Geospatial MVP that powered a $70M Series B",
        },
      ],
    },
    problemTitle: "Common challenges when designing an MVP",
    problems: [
      {
        title: "Scope creep",
        desc: "Trying to design everything at once delays launch by months and burns capital prematurely.",
      },
      {
        title: "Developer-designed look",
        desc: "Early prototypes built without dedicated UX talent look raw and struggle to convince enterprise buyers or investors.",
      },
      {
        title: "Unclear user journeys",
        desc: "Without structured UX mapping, early users get confused and abandon the core value proposition.",
      },
    ],
    deliverablesTitle: "What you get with our MVP design service",
    deliverables: [
      {
        title: "Core Feature Scoping",
        desc: "Trimming nice-to-haves and prioritizing the critical workflows essential for launch.",
      },
      {
        title: "Clickable MVP Prototype",
        desc: "Interactive demo ready for pitch meetings, customer interviews, and user validation.",
      },
      {
        title: "Developer-Ready Specs",
        desc: "Complete component states, edge cases, error states, and responsive layouts.",
      },
      {
        title: "Foundational UI Kit",
        desc: "Reusable buttons, inputs, cards, and modal components that accelerate dev velocity.",
      },
    ],
    processTitle: "MVP design timeline",
    processSteps: [
      {
        step: "01",
        title: "Scope & User Personas",
        desc: "We define user personas, core jobs-to-be-done, and map the happy path for the MVP.",
      },
      {
        step: "02",
        title: "Low-Fidelity Prototyping",
        desc: "Rapid wireframing to validate the core user loop with founders and key stakeholders.",
      },
      {
        step: "03",
        title: "High-Fidelity Visual Design",
        desc: "Transforming wireframes into polished, modern UI that stands out in your category.",
      },
      {
        step: "04",
        title: "Handoff to Engineering",
        desc: "Delivering detailed design tokens, assets, and responsive breakdowns in Figma.",
      },
    ],
    faqs: [
      {
        question: "How fast can we launch an MVP with your design?",
        answer:
          "Our designers typically deliver an end-to-end clickable MVP prototype within 3 to 6 weeks, ready for developers to start building immediately.",
      },
      {
        question: "Can we use the designs for investor pitch decks?",
        answer:
          "Absolutely. Our high-fidelity screens and prototypes are frequently used by founders to raise seed and Series A funding rounds.",
      },
    ],
    relevantCases: ["floret", "flourishon", "hubble-network", "bering-lab"],
  },

  "team-extension": {
    slug: "team-extension",
    title: "Dedicated UI/UX Designer Extension",
    badge: "Team Extension",
    heroHeadline: "Add a dedicated senior product designer to your SaaS team",
    heroDescription:
      "Scale your design capacity instantly without the hiring overhead, recruitment fees, or long onboarding cycles of full-time hiring.",
    visualShowcase: {
      showcaseImages: [
        {
          src: "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370af488335b907ec79f3_697b712406148079bfae473e_datawisp-thumbnail-image-02.webp",
          caption: "Datawisp: Dedicated designer working directly with founder in Slack",
        },
        {
          src: "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dd31f235a540aa84c9_697b712406148079bfae4715_zaplify-thumbnail-image-02.webp",
          caption: "Zaplify: Embedded senior designer delivering weekly sprints",
        },
      ],
    },
    problemTitle: "Why hiring in-house design talent is painful",
    problems: [
      {
        title: "Hiring takes 2-4 months",
        desc: "Sourcing, interviewing, and vetting product designers with real SaaS experience delays product roadmaps.",
      },
      {
        title: "High recruitment fees",
        desc: "Recruiters and headhunters take 20-30% commissions on top of six-figure designer salaries.",
      },
      {
        title: "Mismatch in SaaS expertise",
        desc: "Many agency designers specialize in marketing landing pages rather than complex data-heavy software workflows.",
      },
    ],
    deliverablesTitle: "How our team extension works",
    deliverables: [
      {
        title: "100% Dedicated Designer",
        desc: "One senior designer working exclusively on your product, embedded in your daily standups and Slack channels.",
      },
      {
        title: "Direct Real-Time Collaboration",
        desc: "No account managers or middlemen. You talk directly with your designer every day.",
      },
      {
        title: "Flexibility to Pause or Scale",
        desc: "Scale up to multiple designers during intense release sprints or pause when your roadmap winds down.",
      },
      {
        title: "Full Intellectual Property Transfer",
        desc: "All Figma files, assets, and design system components belong 100% to your company from day one.",
      },
    ],
    processTitle: "Start in 24 hours",
    processSteps: [
      {
        step: "01",
        title: "Match Designer",
        desc: "We match you with a senior designer experienced in your exact SaaS vertical.",
      },
      {
        step: "02",
        title: "3-Day Free Trial",
        desc: "Your designer begins working on real product tasks in your backlog with zero upfront payment.",
      },
      {
        step: "03",
        title: "Daily Sprints",
        desc: "Collaborate directly in Slack, Figma, and Jira/Linear on a simple flat monthly subscription.",
      },
    ],
    faqs: [
      {
        question: "Does the designer work with our existing tools?",
        answer: "Yes, we integrate seamlessly with Figma, Slack, Jira, Linear, Loom, and your preferred stack.",
      },
      {
        question: "What timezone does the designer work in?",
        answer: "Our designers overlap with US and European business hours for real-time meetings and daily updates.",
      },
    ],
    relevantCases: ["zaplify", "datawisp", "cheerity", "astraea"],
  },

  "ux-audit": {
    slug: "ux-audit",
    title: "SaaS UX Audit & Usability Review",
    badge: "UX Audit",
    heroHeadline: "Uncover conversion bottlenecks and usability leaks in your product",
    heroDescription:
      "A comprehensive, expert evaluation of your SaaS application's user experience with prioritized, actionable recommendations to improve activation and retention.",
    problemTitle: "When you should get a UX Audit",
    problems: [
      {
        title: "Metrics dropping with no clear cause",
        desc: "Users churn during onboarding or fail to discover key features, but analytics don't tell the full story.",
      },
      {
        title: "Preparing for a redesign",
        desc: "You know the platform needs modernization, but you need a clear, prioritized roadmap before assigning developers.",
      },
      {
        title: "Customer support overload",
        desc: "Your team is flooded with repetitive tickets about basic product workflows and navigation confusion.",
      },
    ],
    deliverablesTitle: "What is included in the UX Audit",
    deliverables: [
      {
        title: "Heuristic Evaluation",
        desc: "Systematic review against Nielsen Norman usability standards across all core user flows.",
      },
      {
        title: "Friction Point Heatmap",
        desc: "Screen-by-screen breakdown of unnecessary steps, cognitive overload, and UI inconsistencies.",
      },
      {
        title: "Prioritized Action Matrix",
        desc: "Categorized by impact vs. implementation effort: quick wins, medium adjustments, and long-term revamps.",
      },
      {
        title: "Video Walkthrough & Figma File",
        desc: "Recorded presentation with annotations directly in Figma showing proposed solutions.",
      },
    ],
    processTitle: "Our 2-week UX audit process",
    processSteps: [
      {
        step: "01",
        title: "Access & Flow Definition",
        desc: "We obtain test access to your app and define the 3-5 critical user journeys to evaluate.",
      },
      {
        step: "02",
        title: "Deep-Dive Evaluation",
        desc: "Our senior UX architects analyze each step for usability, accessibility, clarity, and speed.",
      },
      {
        step: "03",
        title: "Findings Presentation",
        desc: "We present our report with wireframe suggestions showing exactly how to fix each issue.",
      },
    ],
    faqs: [
      {
        question: "How long does a UX audit take?",
        answer: "A standard UX audit is completed in 7 to 14 business days.",
      },
      {
        question: "Can you help implement the recommendations?",
        answer: "Yes, you can transition directly into our monthly design subscription to redesign the identified flows.",
      },
    ],
    relevantCases: ["myinterview", "nworx", "datawisp", "logitude-word"],
  },

  "design-system": {
    slug: "design-system",
    title: "SaaS Design System Service",
    badge: "Design System",
    heroHeadline: "Build a scalable, unified design system for your engineering team",
    heroDescription:
      "Accelerate product shipping, ensure pixel-perfect consistency, and eliminate UI rework with a robust, tokenized design system in Figma.",
    problemTitle: "Signs you need a formalized design system",
    problems: [
      {
        title: "UI divergence across teams",
        desc: "Engineers create duplicate buttons, custom modals, and slightly different color shades across different pages.",
      },
      {
        title: "Slow feature turnaround",
        desc: "Every new screen requires designing elements from scratch, slowing down your product release cycles.",
      },
      {
        title: "Accessibility & responsiveness gaps",
        desc: "Lack of standard components leads to broken mobile views and accessibility compliance issues.",
      },
    ],
    deliverablesTitle: "Design system deliverables",
    deliverables: [
      {
        title: "Design Tokens",
        desc: "Color palettes, typographic scale, spacing tokens, shadow hierarchies, and border radii mapped to code.",
      },
      {
        title: "Figma Component Library",
        desc: "Fully interactive components with auto-layout, variants, states (hover, focus, disabled, active), and dark mode.",
      },
      {
        title: "Usage Documentation",
        desc: "Clear guidelines on when to use each component, spacing rules, and layout dos and don'ts.",
      },
      {
        title: "Dev Handoff Specifications",
        desc: "Naming conventions aligned with React, Tailwind, or your CSS framework for friction-free implementation.",
      },
    ],
    processTitle: "Design system architecture process",
    processSteps: [
      {
        step: "01",
        title: "UI Inventory",
        desc: "We catalog all buttons, inputs, icons, typography, and containers currently in your product.",
      },
      {
        step: "02",
        title: "Foundation & Token Setup",
        desc: "We define your core tokens (colors, typography, grid, spacing, elevations).",
      },
      {
        step: "03",
        title: "Component Construction",
        desc: "We build atomic components, molecules, and organisms using modern Figma auto-layout.",
      },
      {
        step: "04",
        title: "Documentation & Versioning",
        desc: "We write guidelines and support your front-end team in connecting Figma to your component library.",
      },
    ],
    faqs: [
      {
        question: "Can you work with our existing front-end library (React, MUI, Tailwind)?",
        answer:
          "Yes, we build Figma components that mirror the structure and naming conventions of your preferred tech stack.",
      },
      {
        question: "How do you handle ongoing updates?",
        answer: "We establish a version-controlled design system release process so components evolve smoothly over time.",
      },
    ],
    relevantCases: ["astraea", "gamaya", "datawisp", "logitude-word"],
  },

  "consulting": {
    slug: "consulting",
    title: "Product Design Consulting",
    badge: "Consulting",
    heroHeadline: "Strategic design direction for SaaS founders and product leaders",
    heroDescription:
      "Get high-level UX strategy, design sprint facilitation, and architectural guidance from design leaders who have shipped over 200 SaaS products.",
    problemTitle: "When SaaS leaders need design consulting",
    problems: [
      {
        title: "Pivoting the business model",
        desc: "Moving from self-serve to enterprise sales requires restructuring permissions, teams, and data views.",
      },
      {
        title: "Integrating AI workflows",
        desc: "Adding generative AI features requires new interaction patterns, prompt guidance, and feedback loops.",
      },
      {
        title: "Design team mentoring",
        desc: "Your internal junior designers need senior direction, design critique, and structural coaching.",
      },
    ],
    deliverablesTitle: "Consulting engagement options",
    deliverables: [
      {
        title: "Strategic UX Advisory",
        desc: "Weekly design reviews, roadmap critique, and product architecture strategy sessions.",
      },
      {
        title: "Design Sprints",
        desc: "Facilitated intensive sprints to prototype and validate risky product concepts in 5 days.",
      },
      {
        title: "Competitive Analysis",
        desc: "Benchmarking your user experience against market leaders to identify unique differentiators.",
      },
      {
        title: "Design Hiring Assistance",
        desc: "Helping evaluate portfolios, conduct design interviews, and set up your internal design ops.",
      },
    ],
    processTitle: "Consulting framework",
    processSteps: [
      {
        step: "01",
        title: "Strategic Assessment",
        desc: "Review of your product roadmap, metrics, and business objectives.",
      },
      {
        step: "02",
        title: "Action Plan",
        desc: "Definition of high-leverage UX interventions and priority milestones.",
      },
      {
        step: "03",
        title: "Advisory & Implementation",
        desc: "Ongoing hands-on sessions with leadership and product teams.",
      },
    ],
    faqs: [
      {
        question: "Is consulting full-time or advisory?",
        answer: "We offer flexible advisory retainers ranging from 10 to 40 hours per month.",
      },
      {
        question: "Who leads the consulting engagements?",
        answer: "Our design directors and founders with 10+ years of SaaS design experience.",
      },
    ],
    relevantCases: ["ricochet-360", "textmagic", "datawisp", "aampe"],
  },

  "hire-designer": {
    slug: "hire-designer",
    title: "Hire a UI/UX Designer Built for SaaS",
    badge: "Hire Designer",
    heroHeadline: "Hire a vetted product designer specialized exclusively in SaaS",
    heroDescription:
      "Skip the months-long recruiting slog. We match you with a battle-tested designer who understands SaaS business metrics, complex data tables, and user flows.",
    problemTitle: "Why standard freelancers fail at SaaS design",
    problems: [
      {
        title: "Only know marketing sites",
        desc: "Most freelance designers build landing pages and lack experience with complex dashboards and permission matrices.",
      },
      {
        title: "Unpredictable availability",
        desc: "Freelancers juggle multiple clients, disappear unexpectedly, and rarely commit full-time attention.",
      },
      {
        title: "No peer review",
        desc: "Solo designers work in a vacuum without design directors to review their work or catch usability flaws.",
      },
    ],
    deliverablesTitle: "What you get when you hire through mindsCraft",
    deliverables: [
      {
        title: "Pre-vetted SaaS Talent",
        desc: "Top 3% of product designers tested specifically on real-world complex SaaS applications.",
      },
      {
        title: "Design Director Oversight",
        desc: "Every designer is supported by an experienced design lead for quality assurance and guidance.",
      },
      {
        title: "Zero Long-Term Lock-in",
        desc: "Pay month-to-month. Cancel or pause anytime with simple 14-day notice.",
      },
      {
        title: "Immediate Replacement Guarantee",
        desc: "If a designer isn't the perfect fit, we replace them immediately at no extra charge.",
      },
    ],
    processTitle: "Hiring process",
    processSteps: [
      {
        step: "01",
        title: "Briefing Call",
        desc: "Tell us about your product, tech stack, and roadmap goals.",
      },
      {
        step: "02",
        title: "Designer Introduction",
        desc: "Meet your matched designer and review their portfolio of similar SaaS work.",
      },
      {
        step: "03",
        title: "3-Day Free Trial",
        desc: "Start working together on real tasks before any financial commitment.",
      },
    ],
    faqs: [
      {
        question: "Can I interview the designer before starting?",
        answer: "Yes, you will have a video call to discuss your project directly with the candidate.",
      },
      {
        question: "How does billing work?",
        answer: "One transparent flat monthly fee. No surprises, no hourly time tracking, no recruitment fees.",
      },
    ],
    relevantCases: ["zaplify", "habstash", "kipsi", "datawisp"],
  },

  "web-app-design": {
    slug: "web-app-design",
    title: "Web App UI/UX Design Services",
    badge: "Web App Design",
    heroHeadline: "Design modern, responsive web applications users love using every day",
    heroDescription:
      "From complex data tables and analytics dashboards to collaborative team workspaces, we design web apps that balance immense power with simplicity.",
    problemTitle: "Challenges in web app interface design",
    problems: [
      {
        title: "Information density vs. clarity",
        desc: "Displaying large amounts of data without overwhelming users requires disciplined typographic hierarchy.",
      },
      {
        title: "Complex multi-role permissions",
        desc: "Designing navigation and views that adapt gracefully across admins, members, and guest users.",
      },
      {
        title: "Responsive desktop-to-tablet scaling",
        desc: "Ensuring deep, multi-step workflows function reliably across varied screen resolutions.",
      },
    ],
    deliverablesTitle: "Web app design scope",
    deliverables: [
      {
        title: "Responsive Dashboard Layouts",
        desc: "High-density data visualization, customizable widgets, and filter bars.",
      },
      {
        title: "Table & Grid Architectures",
        desc: "Advanced sorting, pagination, bulk actions, and expandable row states.",
      },
      {
        title: "Modal & Drawer Patterns",
        desc: "Contextual inspection panels that preserve user state without losing context.",
      },
      {
        title: "State Management UI",
        desc: "Empty states, loading skeletons, error fallbacks, and success notifications.",
      },
    ],
    processTitle: "Web app design sprint",
    processSteps: [
      {
        step: "01",
        title: "Workflow Mapping",
        desc: "Mapping out user tasks, edge cases, and permission roles.",
      },
      {
        step: "02",
        title: "Wireframes & Information Hierarchy",
        desc: "Validating layout density and core navigation structures.",
      },
      {
        step: "03",
        title: "Visual System & Component Specs",
        desc: "Delivering complete pixel-perfect screens in Figma.",
      },
    ],
    faqs: [
      {
        question: "Do you design responsive layouts for tablets and mobile?",
        answer: "Yes, every screen includes breakpoint guidelines for mobile, tablet, laptop, and ultra-wide displays.",
      },
    ],
    relevantCases: ["datawisp", "logitude-word", "astraea", "aampe"],
  },

  "saas-web-design": {
    slug: "saas-web-design",
    title: "SaaS Website & Landing Page Design",
    badge: "SaaS Web Design",
    heroHeadline: "High-converting marketing websites designed for B2B SaaS",
    heroDescription:
      "We design SaaS marketing websites that explain complex value propositions clearly, build immediate enterprise credibility, and drive qualified pipeline.",
    problemTitle: "Why most SaaS websites fail to convert",
    problems: [
      {
        title: "Too much jargon",
        desc: "Visitors leave within seconds because the headline is abstract and doesn't explain what the product does.",
      },
      {
        title: "Generic stock visuals",
        desc: "Failing to showcase real product UI creates skepticism among technical buyers.",
      },
      {
        title: "Unfocused conversion paths",
        desc: "Competing calls-to-action confuse visitors and depress sign-up rates.",
      },
    ],
    deliverablesTitle: "What our SaaS web design covers",
    deliverables: [
      {
        title: "Homepage & Core Pitch",
        desc: "High-impact narrative arc from problem statement to interactive product showcase.",
      },
      {
        title: "Feature & Solution Pages",
        desc: "Dedicated deep-dive landing pages tailored to specific buyer personas and industries.",
      },
      {
        title: "Interactive Pricing Calculator",
        desc: "Clear tiered pricing tables, comparison matrices, and FAQ accordions.",
      },
      {
        title: "Product Visuals & Motion Assets",
        desc: "Custom isometric UI mockups, screen recordings, and micro-interactions.",
      },
    ],
    processTitle: "Website launch process",
    processSteps: [
      {
        step: "01",
        title: "Copywriting & Architecture",
        desc: "Structuring page wireframes and value proposition messaging.",
      },
      {
        step: "02",
        title: "Visual Design & 3D/UI Assets",
        desc: "Crafting modern, distinctive visual aesthetics tailored to tech buyers.",
      },
      {
        step: "03",
        title: "Handoff & Optimization",
        desc: "Delivering ready-to-code assets with responsive specs.",
      },
    ],
    faqs: [
      {
        question: "Can you design both the marketing site and the product application?",
        answer: "Yes! Our designers ensure seamless visual continuity between your marketing website and the in-app experience.",
      },
    ],
    relevantCases: ["cheerity", "zaplify", "whoosh", "floret"],
  },

  "mobile-app-design": {
    slug: "mobile-app-design",
    title: "Mobile App UI/UX Design for SaaS",
    badge: "Mobile App Design",
    heroHeadline: "Native iOS & Android app design tailored for SaaS mobile companions",
    heroDescription:
      "We design intuitive mobile applications that extend your SaaS platform to users on the go, adhering strictly to Apple HIG and Material Design 3 guidelines.",
    problemTitle: "Mobile SaaS design challenges",
    problems: [
      {
        title: "Desktop cramming",
        desc: "Attempting to shrink a complex desktop interface onto a 6-inch phone screen creates unusable interfaces.",
      },
      {
        title: "Navigation bloat",
        desc: "Complex desktop navigation must be distilled into thumb-friendly tab bars and contextual action sheets.",
      },
      {
        title: "Offline & sync states",
        desc: "Handling intermittent connectivity with clear background synchronization feedback.",
      },
    ],
    deliverablesTitle: "Mobile app deliverables",
    deliverables: [
      {
        title: "iOS & Android UI Kits",
        desc: "Native components tailored for Apple Human Interface Guidelines and Material 3.",
      },
      {
        title: "Touch-Optimized Workflows",
        desc: "Gestures, swipes, contextual bottom sheets, and haptic feedback specifications.",
      },
      {
        title: "Push Notification Flows",
        desc: "Design for contextual permission requests and notification preview cards.",
      },
      {
        title: "Clickable Mobile Prototypes",
        desc: "Testable prototypes running natively on iOS and Android test devices.",
      },
    ],
    processTitle: "Mobile design process",
    processSteps: [
      {
        step: "01",
        title: "Mobile Feature Scoping",
        desc: "Identifying the high-frequency mobile use cases for your product.",
      },
      {
        step: "02",
        title: "Wireframing & Native Patterns",
        desc: "Mapping thumb zones and navigation architecture.",
      },
      {
        step: "03",
        title: "Visual Polish & Prototypes",
        desc: "Delivering finished Figma screens and interactive flow simulations.",
      },
    ],
    faqs: [
      {
        question: "Do you design for both iOS and Android?",
        answer: "Yes, we provide platform-specific design adaptations for both operating systems.",
      },
    ],
    relevantCases: ["flourishon", "myinterview", "gamaya", "habstash"],
  },

  "design-as-a-service": {
    slug: "design-as-a-service",
    title: "Design as a Service (DaaS) for SaaS Teams",
    badge: "Design as a Service",
    heroHeadline: "On-demand product design capacity on a predictable monthly retainer",
    heroDescription:
      "All the benefits of an in-house design team with none of the recruiting friction, long-term contracts, or management overhead.",
    problemTitle: "Why DaaS outperforms traditional agencies",
    problems: [
      {
        title: "Predictable monthly budgeting",
        desc: "No surprise hourly overages or bloated change orders.",
      },
      {
        title: "Direct daily communication",
        desc: "Work directly with your designer in Slack instead of waiting for account manager emails.",
      },
      {
        title: "Seamless velocity",
        desc: "Ship tasks continuously every business day without waiting for new contract negotiations.",
      },
    ],
    deliverablesTitle: "What is included in DaaS",
    deliverables: [
      { title: "Full-Time Dedicated Designer", desc: "40 hours/week dedicated solely to your product backlog." },
      { title: "Senior Design Director Support", desc: "Regular design reviews to ensure quality and strategic alignment." },
      { title: "Unlimited Design Requests", desc: "Submit and prioritize as many tasks as your roadmap requires." },
      { title: "Flexible Pausing", desc: "Pause your subscription when you hit a development-only cycle." },
    ],
    processTitle: "How DaaS works",
    processSteps: [
      { step: "01", title: "Subscribe", desc: "Choose your tier and get onboarded in under 24 hours." },
      { step: "02", title: "3-Day Free Trial", desc: "Experience our work before the first invoice." },
      { step: "03", title: "Continuous Delivery", desc: "Daily Figma updates and real-time collaboration." },
    ],
    faqs: [
      { question: "Can we pause our subscription?", answer: "Yes, you can pause or resume whenever your roadmap requires." },
    ],
    relevantCases: ["datawisp", "aampe", "zaplify", "astraea"],
  },

  "subscription": {
    slug: "subscription",
    title: "UX Design Subscription for SaaS Teams",
    badge: "Design Subscription",
    heroHeadline: "A flat-rate monthly design subscription built for fast-moving startups",
    heroDescription:
      "Get a senior UI/UX designer embedded in your team for a flat fee. Scale up, pause, or cancel anytime with zero friction.",
    problemTitle: "The modern way to hire SaaS product design",
    problems: [
      { title: "No recruitment fees", desc: "Save $20k-$30k in recruiter fees per designer." },
      { title: "No long-term commitments", desc: "Work month-to-month and adjust capacity as your funding or roadmap changes." },
      { title: "Immediate start", desc: "Kick off work in hours rather than waiting months for candidate searches." },
    ],
    deliverablesTitle: "Subscription features",
    deliverables: [
      { title: "Dedicated SaaS Product Designer", desc: "Working directly with you every day." },
      { title: "Figma Source Files", desc: "Full ownership of all source components and assets." },
      { title: "Daily Async Updates", desc: "Daily Loom walkthroughs and Slack check-ins." },
      { title: "Free 3-Day Trial", desc: "Test our design quality with zero risk." },
    ],
    processTitle: "Get started in 3 steps",
    processSteps: [
      { step: "01", title: "Intro Call", desc: "We review your product and goals." },
      { step: "02", title: "Designer Kickoff", desc: "Your designer starts on your trial tasks." },
      { step: "03", title: "Seamless Delivery", desc: "Iterate and ship features on your roadmap." },
    ],
    faqs: [
      { question: "How much does the subscription cost?", answer: "We offer transparent flat monthly pricing. Visit our pricing page for details." },
    ],
    relevantCases: ["datawisp", "cheerity", "floret", "logitude-word"],
  },
};

export const allServicesList = Object.values(servicesData);
