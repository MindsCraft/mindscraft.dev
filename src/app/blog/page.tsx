export const dynamic = 'force-dynamic'
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

import { categories, posts } from '@/data/blogData';

export default function Blog() {
  return <BlogList posts={posts} categories={categories} />;
}