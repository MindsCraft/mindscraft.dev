import React from 'react';
import { Metadata } from 'next';
import BlogList from '@/components/blog/BlogList';

const SITE_URL = 'https://mindscraft.dev';

export const metadata: Metadata = {
  title: 'Blog — AI, SaaS & Web Development Insights | MindsCraft',
  description: 'Practical guides on AI product development, SaaS MVPs, Core Web Vitals, UX/CRO, and modern web engineering from the MindsCraft team.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'Blog — AI, SaaS & Web Development Insights | MindsCraft',
    description: 'Practical guides on AI product development, SaaS MVPs, Core Web Vitals, UX/CRO, and modern web engineering.',
    url: `${SITE_URL}/blog`,
    siteName: 'MindsCraft',
    images: [{ url: `${SITE_URL}/images/og-image.png`, width: 1200, height: 630, alt: 'MindsCraft Blog' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — AI, SaaS & Web Development Insights | MindsCraft',
    description: 'Practical guides on AI product development, SaaS MVPs, Core Web Vitals, UX/CRO, and modern web engineering.',
    site: '@mindscraft',
    images: [`${SITE_URL}/images/og-image.png`],
  },
};

export const categories = [
  'All',
  'AI & SaaS',
  'Web Development',
  'UX & CRO',
  'Performance',
];

export const posts = [
  {
    id: 1,
    title: 'How to Build an AI-Powered SaaS in 6 Weeks',
    description:
      'The exact stack, process, and decisions that let us take a founder from zero to a live, paying-user product in under 6 weeks — using Next.js, LangChain, and Supabase.',
    category: 'AI & SaaS',
    date: '2026-02-28',
    readTime: '8 min read',
    slug: 'build-ai-saas-6-weeks',
    image: '/images/blog/blog-ai-saas.png',
    imageAlt: 'Glowing neural network on dark background — AI SaaS development',
    featured: true,
  },
  {
    id: 2,
    title: 'RAG vs Fine-Tuning: Which One Does Your Product Actually Need?',
    description:
      'Two of the most misunderstood options in AI product development explained clearly. We break down when to use retrieval-augmented generation vs fine-tuning your own model — with real cost and latency comparisons.',
    category: 'AI & SaaS',
    date: '2026-02-20',
    readTime: '6 min read',
    slug: 'rag-vs-fine-tuning',
    image: '/images/blog/blog-llm-rag.png',
    imageAlt: 'Abstract data streams representing RAG vs fine-tuning for LLMs',
    featured: false,
  },
  {
    id: 3,
    title: 'Core Web Vitals in 2026: What Actually Moves the SEO Needle',
    description:
      'Google has updated its ranking signals again. We audited 40 client sites and identified exactly which CWV metrics correlate with ranking improvements — and which ones everyone is wasting time on.',
    category: 'Performance',
    date: '2026-02-14',
    readTime: '5 min read',
    slug: 'core-web-vitals-2026',
    image: '/images/blog/blog-core-web-vitals.png',
    imageAlt: 'Glowing performance gauge rings — Core Web Vitals 2026',
    featured: false,
  },
  {
    id: 4,
    title: 'From 2% to 9%: A SaaS Trial-to-Paid CRO Case Study',
    description:
      'We redesigned the onboarding flow for a B2B SaaS tool and tripled their trial-to-paid conversion in 8 weeks. Here\'s every change we made, what worked, and what didn\'t.',
    category: 'UX & CRO',
    date: '2026-02-07',
    readTime: '7 min read',
    slug: 'saas-cro-case-study',
    image: '/images/blog/blog-cro-saas.png',
    imageAlt: 'Abstract funnel visualising SaaS conversion optimisation',
    featured: false,
  },
  {
    id: 5,
    title: 'Building a Design System That Actually Scales',
    description:
      'Most design systems die in the Figma file phase. We\'ve shipped five this year. Here\'s the structural decisions that separate the ones teams love from the ones teams abandon.',
    category: 'UX & CRO',
    date: '2026-01-30',
    readTime: '9 min read',
    slug: 'design-system-that-scales',
    image: '/images/blog/blog-design-system.png',
    imageAlt: 'Glowing UI component grid — design system architecture',
    featured: false,
  },
  {
    id: 6,
    title: 'Next.js 15 App Router: Patterns That Work in Production',
    description:
      'After shipping 12 Next.js 15 projects, we\'ve landed on a set of patterns for data fetching, caching, auth, and error handling that actually hold up under real-world traffic.',
    category: 'Web Development',
    date: '2026-01-22',
    readTime: '11 min read',
    slug: 'nextjs-15-app-router-patterns',
    image: '/images/blog/blog-nextjs-patterns.png',
    imageAlt: 'Abstract route tree diagram — Next.js App Router architecture',
    featured: false,
  },
];

export default function Blog() {
  return <BlogList posts={posts} categories={categories} />;
}