import React from 'react';
import { Metadata } from 'next';
import BlogList from '@/components/blog/BlogList';

export const metadata: Metadata = {
  title: 'Blog | Mindscraft',
  description: 'Insights on UX, web development, AI, and startup growth from the Mindscraft team.',
};

const categories = [
  'All',
  'UX Design',
  'Web Development',
  'AI & Technology',
  'Startup Growth'
];

const posts = [
  {
    id: 1,
    title: 'The Future of UX Design in AI-Powered Applications',
    description: 'Exploring how AI is transforming user experience design and what it means for developers.',
    category: 'UX Design',
    date: '2024-03-20',
    slug: 'future-of-ux-design',
    image: 'https://picsum.photos/seed/ux-design/800/500',
    imageAlt: 'AI and UX Design concept'
  },
  {
    id: 2,
    title: 'Building Scalable Web Applications with Next.js',
    description: 'A comprehensive guide to creating performant and scalable web applications.',
    category: 'Web Development',
    date: '2024-03-18',
    slug: 'scalable-web-applications',
    image: 'https://picsum.photos/seed/nextjs/800/500',
    imageAlt: 'Next.js development'
  },
  {
    id: 3,
    title: 'AI Integration Strategies for Startups',
    description: 'How startups can leverage AI to gain competitive advantages and improve efficiency.',
    category: 'AI & Technology',
    date: '2024-03-15',
    slug: 'ai-integration-strategies',
    image: 'https://picsum.photos/seed/ai-startup/800/500',
    imageAlt: 'AI in business'
  },
  {
    id: 4,
    title: 'Startup Growth Hacking Techniques',
    description: 'Proven strategies for accelerating your startup\'s growth in the digital age.',
    category: 'Startup Growth',
    date: '2024-03-12',
    slug: 'startup-growth-hacking',
    image: 'https://picsum.photos/seed/startup/800/500',
    imageAlt: 'Startup growth strategies'
  },
  {
    id: 5,
    title: 'The Role of UX in Product Success',
    description: 'Why user experience is crucial for product success and how to get it right.',
    category: 'UX Design',
    date: '2024-03-10',
    slug: 'role-of-ux-in-product-success',
    image: 'https://picsum.photos/seed/ux-role/800/500',
    imageAlt: 'User experience design process'
  },
  {
    id: 6,
    title: 'Modern Web Development Best Practices',
    description: 'Essential best practices for building modern, maintainable web applications.',
    category: 'Web Development',
    date: '2024-03-08',
    slug: 'modern-web-development',
    image: 'https://picsum.photos/seed/web-dev-best/800/500',
    imageAlt: 'Web development best practices'
  }
];

export default function Blog() {
  return <BlogList posts={posts} categories={categories} />;
} 