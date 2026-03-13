export interface WorkItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  content: string;
  features?: string[];
  challenges?: string[];
  results?: string[];
  images?: string[];
}

export const workItems: WorkItem[] = [
  {
    id: 1,
    title: 'NexusAI: Enterprise Knowledge Retrieval',
    description: 'A custom RAG pipeline and AI chatbot developed to help a 500-person enterprise search their internal documents instantly.',
    category: 'AI Product Development',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1665&auto=format&fit=crop',
    technologies: ['Next.js', 'LangChain', 'Pinecone', 'OpenAI API', 'Tailwind CSS'],
    content: 'Our client, a massive logistics enterprise, was losing thousands of hours a year tracking down internal compliance protocols, employee handbooks, and shipping directives stored across scattered Google Drives and Confluence pages. They needed an intelligent AI assistant that could read their entire knowledge base and provide factual, cited answers to employees instantly. We built NexusAI: a highly secure Retrieval-Augmented Generation (RAG) system running entirely within their Virtual Private Cloud.',
    features: [
      'Custom document ingestion pipeline for PDFs, Word files, and Confluence pages',
      'Vectorization and storage using Pinecone for sub-second semantic search',
      'A sleek, chat-based Next.js interface for employees to query the database',
      'Cited sources: The AI tells users exactly which internal page it pulled the answer from',
      'Role-based access: The AI respects user permissions and won\'t surface confidential HR data to standard employees'
    ],
    challenges: [
      'Ingesting 10,000+ unstructured PDFs with varying layouts without losing data context',
      'Preventing the LLM from "hallucinating" facts by strictly binding it to the retrieved context',
      'Handling high-concurrent queries during peak morning hours without rate-limiting the OpenAI API'
    ],
    results: [
      'Reduced average search time for compliance documents from 12 minutes to < 5 seconds',
      'Saved the company an estimated $400,000 annually in lost productivity',
      'Zero hallucination rate verified during human QA testing'
    ],
    images: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1665&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'FlowState: B2B Process Automation SaaS',
    description: 'We took a napkin sketch to a fully-deployed, revenue-generating SaaS MVP in exactly 6 weeks.',
    category: 'SaaS MVP Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
    technologies: ['Next.js 15', 'Supabase', 'Stripe', 'React Hook Form', 'Zod', 'Vercel'],
    content: 'The founders of FlowState identified a massive gap in how creative agencies manage client onboarding. They had the domain expertise but lacked the technical team to build the software quickly. They hired MindsCraft to design, architect, and deploy a robust MVP before their seed funding round closed. Within 6 weeks, we mapped the UX, built a responsive React frontend, connected it to a Supabase PostgreSQL backend, and wired up subscription payments.',
    features: [
      'Multi-tenant architecture allowing agencies to invite their own clients securely',
      'Automated onboarding workflows with drag-and-drop form builders',
      'Stripe integration with complex tier-based subscription billing and free trials',
      'Real-time notifications using Supabase WebSockets',
      'Premium, glassmorphic UI system built from scratch'
    ],
    challenges: [
      'Compressing a typical 4-month development cycle into a strict 6-week MVP timeline',
      'Designing a database schema that isolated tenant data completely for enterprise compliance',
      'Ensuring the application felt snappy and responsive despite heavy data lifting'
    ],
    results: [
      'Launched 3 days ahead of the 6-week timeline',
      'Secured 15 paying B2B customers in the first month post-launch ($4,500 MRR)',
      'The highly-polished application was successfully used in presentations to secure a $1.2M seed round'
    ],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'Fintegrate: Trial-to-Paid UX Overhaul',
    description: 'A complete UX rewrite for an established FinTech app that tripled their activation rate.',
    category: 'UX Design & CRO',
    image: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?q=80&w=1465&auto=format&fit=crop',
    technologies: ['Figma', 'UX Research', 'Hotjar', 'A/B Testing', 'Design Systems'],
    content: 'Fintegrate had a fantastic core product, but they were suffering from a massive revenue leak: thousands of users were signing up for their free trial, logging into the dashboard, getting overwhelmed, and leaving forever. They approached MindsCraft for a comprehensive UX Audit and redesign. We spent a week analyzing Heatmaps and user session recordings to identify exactly where the friction was. Then, we designed a highly opinionated, step-by-step onboarding flow that forced users to achieve one "Aha!" moment within their first 3 minutes.',
    features: [
      'A complete Figma overhaul of their core dashboard and settings menus',
      'An interactive 3-step setup wizard that replaced the previously empty "blank canvas" state',
      'Pre-filled templates for common financial modeling use-cases',
      'A massive simplification of the primary navigation bar',
      'Micro-animations implemented globally to provide user feedback upon clicking'
    ],
    challenges: [
      'Simplifying highly complex financial graphs for novice users without alienating power users',
      'Convincing stakeholders to remove clunky legacy features that were confusing 90% of the user base',
      'Designing an onboarding flow that didn\'t feel like an annoying tutorial'
    ],
    results: [
      'Trial-to-paid conversion rate jumped from 2.1% to 8.7% within 30 days of implementing our designs',
      'User retention at Day 14 increased by over 45%',
      'Support tickets requesting "How do I do X?" plummeted by a massive margin'
    ],
    images: [
      'https://images.unsplash.com/photo-1554224155-3a58922a22c3?q=80&w=1465&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop'
    ]
  },
  {
    id: 4,
    title: 'MedPortal: HIPAA-Compliant Operations App',
    description: 'A deeply complex, full-stack patient management system built for scalability and total privacy.',
    category: 'Full-Stack Web Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'AWS'],
    content: 'A rapidly growing network of private clinics needed to migrate away from their expensive, clunky legacy software. They required a custom Web Application that could handle patient intake, calendar scheduling for 50+ doctors, secure messaging, and strict HIPAA compliance. We built a monolithic full-stack application leveraging Next.js React Server Components and a robust Node.js backend. Every piece of architecture was designed with raw performance, security, and long-term maintainability in mind.',
    features: [
      'A blazing fast React interface for clinic staff to manage daily schedules and patient records',
      'End-to-end encrypted messaging system between doctors and patients',
      'Automated SMS appointment reminders built with Twilio',
      'Strict Role-Based Access Control (Admin, Doctor, Receptionist, Patient)',
      'Extensive automated testing suites (Jest & Cypress) to ensure zero regressions during updates'
    ],
    challenges: [
      'Ensuring absolute data privacy and 100% HIPAA compliance throughout the entire tech stack',
      'Managing highly complex state synchronization when multiple receptionists edited the same calendar simultaneously',
      'Migrating 10 years of messy legacy data from an old SQL server into our modern PostgreSQL Prisma schema'
    ],
    results: [
      'Reduced the time it takes to onboard a new patient by 60%',
      'The clinic network saved over $80,000 vertically annually in legacy software licensing fees',
      'Passed a rigorous external security and compliance audit with flying colors'
    ],
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1470&auto=format&fit=crop'
    ]
  },
  {
    id: 5,
    title: 'NewsWire Daily: Core Web Vitals Rescue',
    description: 'We untangled a massive React codebase, dropping page load times from 8 seconds to under 1 second to save their SEO rankings.',
    category: 'Performance Engineering',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop',
    technologies: ['React Profiler', 'Lighthouse', 'Vercel Edge', 'Webpack Optimization', 'Next.js'],
    content: 'A large independent news publisher saw their organic Google traffic plummet after the latest Core Web Vitals algorithm update. Their site was heavily bloated with unnecessary third-party scripts, massive unoptimized hero images, and deeply inefficient React rendering loops that froze the browser (horrible INP scores). We were brought in to perform a deep-dive code audit and refactor the platform specifically for raw speed.',
    features: [
      'Implementation of a global Edge Caching network (CDN) to serve HTML instantly to users worldwide',
      'Aggressive image optimization pipeline that automatically generated Next-Gen formats (WebP/AVIF) at the correct sizes',
      'Deferred loading of non-critical third-party scripts (Ad networks, Analytics) until after the main content painted',
      'React component refactoring to eliminate useless re-renders and virtualize massive article lists',
      'Custom font-loading strategies to eliminate Cumulative Layout Shift (CLS)'
    ],
    challenges: [
      'Debugging deeply nested, generic React components that were triggering "render avalanches" on every scroll',
      'Balancing the need for lightning-fast speeds with the marketing team\'s requirement to run heavy advertisement scripts',
      'Auditing a massive legacy codebase without breaking existing functionality'
    ],
    results: [
      'Largest Contentful Paint (LCP) dropped from 4.8 seconds to 0.8 seconds',
      'Interaction to Next Paint (INP) improved from 800ms to an imperceptible 40ms',
      'Organic search traffic returned to baseline within 4 weeks and grew a further 20% due to the speed bump'
    ],
    images: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop'
    ]
  },
  {
    id: 6,
    title: 'Aura Lifestyle: Ultra-Fast Headless Storefront',
    description: 'We decoupled a struggling DTC brand from their Shopify theme, building a blazing fast custom frontend that drove conversion up.',
    category: 'Headless E-commerce',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1470&auto=format&fit=crop',
    technologies: ['Next.js', 'Shopify Storefront API', 'Sanity CMS', 'Framer Motion', 'Tailwind CSS'],
    content: 'Aura Lifestyle was a thriving Direct-to-Consumer (DTC) fashion brand doing serious volume, but they had completely outgrown their rigid Shopify theme. The page loads were slow, they couldn\'t build the custom, highly-interactive product experiences they wanted, and their marketing team was paralyzed by a terrible content management interface. We migrated them to a Headless architecture: keeping Shopify to handle the backend payments and inventory, while we built a custom Next.js frontend paired with Sanity CMS for complete content control.',
    features: [
      'Sub-second page transitions across the entire store using Next.js App Router',
      'A beautiful, deeply customized product configurator that standard Shopify themes couldn\'t support',
      'Sanity CMS integration, allowing the marketing team to build complex landing pages with modular blocks in minutes',
      'A highly immersive, interactive UI featuring custom Framer Motion page transitions and scroll-jacking lookbooks',
      'Algorithmic personalized product recommendations injected directly into the cart drawer'
    ],
    challenges: [
      'Handling the synchronization of live inventory and pricing between the static Next.js pages and Shopify\'s servers',
      'Building a complex, 10-step dynamic checkout flow while retaining the strict security of the Shopify API',
      'Migrating thousands of products, reviews, and blog posts into the new headless structure without breaking SEO URLs'
    ],
    results: [
      'Storewide conversion rate increased from 1.8% to 2.6% due to the massive speed and UX improvements',
      'Average page load times decreased by 75%',
      'The marketing team launched 4x more landing pages per month using the new Sanity workflow'
    ],
    images: [
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1470&auto=format&fit=crop'
    ]
  }
];

export function getWorkItem(id: number): WorkItem | undefined {
  return workItems.find(item => item.id === id);
}

export function getRelatedWork(currentId: number, category: string, limit = 2): WorkItem[] {
  return workItems
    .filter(item => item.id !== currentId && item.category === category)
    .slice(0, limit);
}
