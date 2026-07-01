// Selected Work — featured on the homepage
// Each entry is a short, honest slot the founder populates with a real case study.
// Rule of thumb: keep scope to one sentence; skip the metric unless you can verify it.

export interface FeaturedWork {
  id: string;          // url slug
  title: string;       // client or project name
  scope: string;       // one-line description, no metrics
  category: string;    // e.g. "Brand & Web", "E-commerce", "Content & Social"
  image: string;       // cover image path
  href?: string;       // optional link to a case study (left undefined until /work/[slug] exists)
}

export const featuredWork: FeaturedWork[] = [
  {
    id: '1',
    title: 'NexusAI',
    scope: 'Enterprise RAG search and AI knowledge retrieval assistant.',
    category: 'AI Product Development',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1665&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'FlowState',
    scope: 'B2B client onboarding and process automation SaaS MVP.',
    category: 'SaaS MVP Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Fintegrate',
    scope: 'Trial-to-paid UX overhaul that tripled customer activation rate.',
    category: 'UX Design & CRO',
    image: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?q=80&w=1465&auto=format&fit=crop',
  },
];