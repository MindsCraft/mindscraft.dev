export interface IndustryDetail {
  slug: string;
  name: string;
  heroHeadline: string;
  heroDescription: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  relevantCases: string[];
  metrics: { stat: string; label: string }[];
  faqs: { question: string; answer: string }[];
}

export const industriesData: Record<string, IndustryDetail> = {
  fintech: {
    slug: "fintech",
    name: "Fintech",
    heroHeadline: "Fintech app UI/UX design services for modern SaaS",
    heroDescription:
      "We design compliant, trustworthy, and intuitive financial software. From crypto and neo-banking to wealth management and corporate expense platforms, we turn dense financial data into crystal-clear actions.",
    challenges: [
      {
        title: "Building user trust in seconds",
        desc: "Users are hypersensitive about their money. Clunky UI or confusing confirmation dialogs instantly erode trust.",
      },
      {
        title: "Regulatory & compliance friction",
        desc: "KYC/AML verification flows must be frictionless while satisfying strict international compliance standards.",
      },
      {
        title: "Multi-layered transaction tables",
        desc: "Managing high-volume financial ledgers with filtering, currency toggling, and export capabilities.",
      },
    ],
    solutions: [
      {
        title: "Frictionless onboarding & KYC",
        desc: "Designing step-by-step verification flows that minimize abandonment and accelerate user activation.",
      },
      {
        title: "Clear data visualizations",
        desc: "Transforming balance histories, yield curves, and asset allocations into clean, legible charts.",
      },
      {
        title: "Accidental-click safeguards",
        desc: "Two-step authorization patterns and clear fee disclosures that give users confidence before transferring funds.",
      },
    ],
    relevantCases: ["alture-funds", "pay-up", "glow-labs", "habstash"],
    metrics: [
      { stat: "$100M+", label: "Capital raised by our fintech clients" },
      { stat: "99.8%", label: "Client satisfaction on security and clarity" },
      { stat: "4.9", label: "Clutch rating across all SaaS projects" },
    ],
    faqs: [
      {
        question: "Have you designed for regulated financial institutions?",
        answer: "Yes, we've designed for B2B fintechs handling millions in transactions, banking APIs, and crypto platforms.",
      },
      {
        question: "How do you handle security and sensitive client data in Figma?",
        answer: "We use dummy anonymized data and comply with strict NDAs to protect your intellectual property.",
      },
    ],
  },

  sales: {
    slug: "sales",
    name: "Sales",
    heroHeadline: "Sales & CRM UI/UX design services for high-velocity teams",
    heroDescription:
      "We redesign sales pipelines, lead enrichment engines, and CRM dashboards so reps spend less time logging data and more time closing deals.",
    challenges: [
      {
        title: "Rep adoption resistance",
        desc: "Sales teams bypass complicated CRMs when manual data entry feels like a second full-time job.",
      },
      {
        title: "Pipeline visibility bottlenecks",
        desc: "Managers struggle to forecast accurately when deal stages and activity metrics are buried under tabs.",
      },
      {
        title: "Multichannel outreach overload",
        desc: "Integrating email sequences, phone calls, LinkedIn messages, and notes into one coherent interface.",
      },
    ],
    solutions: [
      {
        title: "Streamlined kanban pipelines",
        desc: "Fast drag-and-drop opportunity boards with instant inline editing and actionable deal insights.",
      },
      {
        title: "One-click sequence builders",
        desc: "Visual workflow builders that allow reps to craft multi-touch drip campaigns effortlessly.",
      },
      {
        title: "Instant summary drawer panels",
        desc: "Contextual sliding drawers allowing reps to inspect contact details without losing their spot in lists.",
      },
    ],
    relevantCases: ["zaplify", "ricochet-360", "textmagic", "gridle"],
    metrics: [
      { stat: "2x", label: "Average increase in user activation" },
      { stat: "35%", label: "Reduction in daily data entry time" },
      { stat: "4.9", label: "Average client rating on Clutch" },
    ],
    faqs: [
      {
        question: "Can you help optimize our sales funnel conversion?",
        answer: "Yes, our designers specialize in reducing cognitive load and shortening key user workflows in B2B sales.",
      },
    ],
  },

  healthcare: {
    slug: "healthcare",
    name: "Healthcare",
    heroHeadline: "Healthcare & MedTech UI/UX design services",
    heroDescription:
      "We design empathetic, accessible, and HIPAA-ready software for clinicians, patients, and healthcare administrators.",
    challenges: [
      {
        title: "Clinician cognitive fatigue",
        desc: "Doctors and nurses are overwhelmed by cumbersome electronic health records that require dozens of clicks per patient.",
      },
      {
        title: "Strict accessibility standards",
        desc: "Healthcare apps must adhere to WCAG 2.1 AA accessibility guidelines to ensure usability across all ages and abilities.",
      },
      {
        title: "Sensitive data presentation",
        desc: "Presenting vital lab results, prescription dosages, and diagnostics with zero margin for interpretation error.",
      },
    ],
    solutions: [
      {
        title: "At-a-glance patient charts",
        desc: "Clean card layouts prioritizing critical vitals, active medications, and urgent clinical flags.",
      },
      {
        title: "Empathetic patient portals",
        desc: "Warm, reassuring interfaces that make appointment scheduling and telehealth consultations effortless.",
      },
      {
        title: "Error-prevention UX",
        desc: "Visual safeguards and clear confirmation patterns around dosage adjustments and medical notes.",
      },
    ],
    relevantCases: ["flourishon", "b-well", "haven-diagnostics", "healthstream-insights"],
    metrics: [
      { stat: "100%", label: "WCAG 2.1 AA accessibility compliance" },
      { stat: "45%", label: "Faster patient intake and documentation" },
      { stat: "4.9", label: "Clutch score from healthcare founders" },
    ],
    faqs: [
      {
        question: "Are your designs HIPAA compliant?",
        answer: "Our designers follow HIPAA UI guidelines regarding privacy masking, automatic timeouts, and access controls.",
      },
    ],
  },

  marketing: {
    slug: "marketing",
    name: "Marketing",
    heroHeadline: "Marketing tech & analytics UI/UX design services",
    heroDescription:
      "We build intuitive MarTech platforms, automation workflows, and attribution dashboards that help marketing teams execute campaigns with speed.",
    challenges: [
      {
        title: "Complex multi-channel attribution",
        desc: "Displaying customer journeys across ads, social, email, and organic search without visual clutter.",
      },
      {
        title: "Overcomplicated automation logic",
        desc: "Rule-based branching logic builders frequently confuse non-technical marketers.",
      },
    ],
    solutions: [
      {
        title: "Visual campaign flowcharts",
        desc: "Intuitive node-based canvas editors for constructing email triggers and customer journeys.",
      },
      {
        title: "Unified performance dashboards",
        desc: "Clean data summaries showing CAC, ROAS, and conversions side-by-side with exportable reports.",
      },
    ],
    relevantCases: ["aampe", "seo-crawl", "cheerity", "datawisp"],
    metrics: [
      { stat: "$18M", label: "Aampe raised post-redesign" },
      { stat: "3x", label: "Faster campaign setup times" },
      { stat: "4.9", label: "Rated on Clutch" },
    ],
    faqs: [
      {
        question: "Can you design both the marketing tool and the client-facing report view?",
        answer: "Yes, we design both the internal campaign management interfaces and the end-client sharing portals.",
      },
    ],
  },

  data: {
    slug: "data",
    name: "Data Products",
    heroHeadline: "UI/UX design services for data analytics & BI platforms",
    heroDescription:
      "We specialize in designing no-code query builders, interactive data catalogs, and high-performance business intelligence dashboards.",
    challenges: [
      {
        title: "SQL-level complexity for non-technical users",
        desc: "Enabling business users to build advanced data queries without needing to write SQL syntax.",
      },
      {
        title: "Information density in tables",
        desc: "Balancing millions of data rows with rapid filtering, column reordering, and cell inspection.",
      },
    ],
    solutions: [
      {
        title: "Modular logic builders",
        desc: "Lego-like visual query constructors that make joins, filters, and aggregations self-explanatory.",
      },
      {
        title: "Dynamic visualization palettes",
        desc: "Harmonious chart color palettes and interactive drill-down views that tell a compelling data story.",
      },
    ],
    relevantCases: ["datawisp", "data-streams", "cylynx", "advan-research"],
    metrics: [
      { stat: "$3.6M", label: "Datawisp seed round raised" },
      { stat: "85%", label: "Query builder self-serve completion" },
      { stat: "4.9", label: "Clutch score" },
    ],
    faqs: [
      {
        question: "How do you handle ultra-dense tables?",
        answer: "We design compact row states, horizontal pinning, sticky headers, and customizable column visibility.",
      },
    ],
  },

  geoservice: {
    slug: "geoservice",
    name: "Geospatial",
    heroHeadline: "UI/UX design for geospatial & location data products",
    heroDescription:
      "We design interactive map interfaces, GIS tooling, and satellite imagery analysis platforms for spatial intelligence startups.",
    challenges: [
      {
        title: "Map controls competing with UI panels",
        desc: "Balancing screen real estate between high-resolution map tiles and complex analytical filter panels.",
      },
      {
        title: "Multi-layer spatial data overlay",
        desc: "Presenting heatmaps, polygons, satellite rasters, and vector points simultaneously without visual chaos.",
      },
    ],
    solutions: [
      {
        title: "Floating drawer architectures",
        desc: "Collapsible floating panels that maximize map viewing area while keeping data filters one click away.",
      },
      {
        title: "Layer manager UI",
        desc: "Intuitive layer toggling, opacity sliders, and temporal timeline controls.",
      },
    ],
    relevantCases: ["gamaya", "hubble-network", "involi", "astraea"],
    metrics: [
      { stat: "$70M", label: "Hubble Network Series B raised" },
      { stat: "4.9", label: "Clutch rating" },
    ],
    faqs: [
      {
        question: "Do you design for Mapbox or Google Maps integrations?",
        answer: "Yes, we tailor our layouts specifically around Mapbox, Leaflet, and standard web GIS rendering engines.",
      },
    ],
  },

  devtools: {
    slug: "devtools",
    name: "Developer Tools",
    heroHeadline: "UI/UX design services for developer tools & technical platforms",
    heroDescription:
      "Developers have zero tolerance for unnecessary friction or sluggish UI. We design developer platforms, API dashboards, and infrastructure management consoles built for speed.",
    challenges: [
      {
        title: "Skepticism toward heavy UI",
        desc: "Engineers prefer CLIs; any web GUI must be keyboard-accessible, blisteringly fast, and devoid of fluff.",
      },
      {
        title: "Code snippet & JSON formatting",
        desc: "Displaying syntax-highlighted code, payload diffs, and schema validators clearly.",
      },
    ],
    solutions: [
      {
        title: "Command palette navigation",
        desc: "CMD+K command menus and keyboard shortcuts for rapid power-user interactions.",
      },
      {
        title: "Clean dark-mode first design",
        desc: "Monospace typography, clear syntax styling, and low-contrast dark themes that feel native to engineering environments.",
      },
    ],
    relevantCases: ["lambda", "frontend-ai", "techcore", "vector0"],
    metrics: [
      { stat: "100%", label: "Keyboard-navigable designs" },
      { stat: "4.9", label: "Clutch score" },
    ],
    faqs: [
      {
        question: "Do your designers understand technical concepts like CI/CD, webhooks, and APIs?",
        answer: "Yes, our team specializes in technical SaaS and dev tools used by DevOps, backend, and security engineers.",
      },
    ],
  },

  ai: {
    slug: "ai",
    name: "AI Products",
    heroHeadline: "UI/UX design for AI-powered applications & copilots",
    heroDescription:
      "We design generative AI interfaces, conversational copilots, and intelligent workflow assistants that make machine learning practical and trustworthy.",
    challenges: [
      {
        title: "AI hallucination & ambiguity",
        desc: "Users need clear signals about confidence levels, sources, and easy ways to edit or verify AI responses.",
      },
      {
        title: "Beyond the basic chatbot window",
        desc: "Embedding contextual AI actions directly into documents, tables, and workflows rather than a generic chat sidebar.",
      },
    ],
    solutions: [
      {
        title: "Inline copilot actions",
        desc: "Highlight-to-prompt contextual menus, autocomplete suggestions, and diff previews.",
      },
      {
        title: "Explainability & citation chips",
        desc: "Interactive citation pills that allow users to inspect the underlying source document instantly.",
      },
    ],
    relevantCases: ["frontend-ai", "stradigi-ai", "panjaya", "bering-lab"],
    metrics: [
      { stat: "40%", label: "Higher user trust with citation UI" },
      { stat: "4.9", label: "Clutch rating" },
    ],
    faqs: [
      {
        question: "How do you design for AI latency and streaming tokens?",
        answer: "We design skeleton states, typing cursors, and cancellation controls that provide instant feedback while models generate output.",
      },
    ],
  },

  "real-estate": {
    slug: "real-estate",
    name: "Real Estate",
    heroHeadline: "PropTech & real estate SaaS UI/UX design services",
    heroDescription:
      "We design property management platforms, lease accounting tools, and real estate marketplace portals that simplify transaction pipelines.",
    challenges: [
      {
        title: "Multi-stakeholder workflows",
        desc: "Brokers, tenants, landlords, and maintenance crews all need distinct views and permission levels.",
      },
      {
        title: "Document & contract tracking",
        desc: "Managing dozens of leases, amendments, and inspection reports across thousands of units.",
      },
    ],
    solutions: [
      {
        title: "Interactive property matrices",
        desc: "Unit-level status boards displaying occupancy, lease expirations, and open maintenance requests.",
      },
      {
        title: "Step-by-step application flows",
        desc: "Mobile-optimized tenant screening and digital signature workflows.",
      },
    ],
    relevantCases: ["jobcall", "populate", "habitspace", "modia"],
    metrics: [
      { stat: "60%", label: "Faster lease processing times" },
      { stat: "4.9", label: "Clutch score" },
    ],
    faqs: [
      {
        question: "Do you design for both property managers and tenant portals?",
        answer: "Yes, we design comprehensive ecosystems spanning back-office management and consumer-facing tenant portals.",
      },
    ],
  },

  "legal-tech": {
    slug: "legal-tech",
    name: "LegalTech",
    heroHeadline: "LegalTech & compliance UI/UX design services",
    heroDescription:
      "We design contract lifecycle management (CLM), patent analysis, and legal research tools that make dense legal operations fast and error-free.",
    challenges: [
      {
        title: "Excessive textual density",
        desc: "Lawyers read hundreds of pages of legal text daily; interface typography must minimize eye strain.",
      },
      {
        title: "Redlining & version control",
        desc: "Displaying multi-party markup, clause suggestions, and approval workflows cleanly.",
      },
    ],
    solutions: [
      {
        title: "Dual-pane document comparison",
        desc: "Side-by-side clause revision tracking with instant accepted/rejected redline controls.",
      },
      {
        title: "Structured clause libraries",
        desc: "Drag-and-drop clause insertion with automated compliance risk indicators.",
      },
    ],
    relevantCases: ["bering-lab", "casescribe", "clearpoint-strategy"],
    metrics: [
      { stat: "$2.3M", label: "Bering Lab pre-Series A raised" },
      { stat: "4.9", label: "Clutch score" },
    ],
    faqs: [
      {
        question: "Have you designed legal tools used by law firms and enterprise general counsels?",
        answer: "Yes, we have deep experience designing for attorneys, paralegals, and legal compliance officers.",
      },
    ],
  },
};

export const allIndustriesList = Object.values(industriesData);
