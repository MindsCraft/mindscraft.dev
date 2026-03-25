import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiClock, FiCalendar, FiArrowRight, FiBookOpen } from 'react-icons/fi';
import postsData from '@/data/posts.json';
import BlogDetailClient from './BlogDetailClient';

type BlogPost = {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author?: string;
  category: string;
  content: string;
  image: string;
  imageAlt?: string;
  featured?: boolean;
  status?: string;
};

const fullPosts: BlogPost[] = (postsData as any[])
  .filter(post => post.status === 'Published')
  .map(post => ({
    ...post,
    author: 'The MindsCraft Team',
  }));

const categoryServiceMap: Record<string, { label: string; href: string }> = {
  'AI & SaaS': { label: 'AI & SaaS Development', href: '/services' },
  'Web Development': { label: 'Web Development', href: '/services' },
  'UX & CRO': { label: 'UX & Conversion Services', href: '/services' },
  'Performance': { label: 'Performance Engineering', href: '/services' },
};

async function getPost(slug: string): Promise<BlogPost | undefined> {
  return fullPosts.find((post) => post.slug === slug);
}

function getRelatedPosts(currentPost: BlogPost, count = 3): BlogPost[] {
  return fullPosts
    .filter(p => p.slug !== currentPost.slug && p.category === currentPost.category)
    .slice(0, count);
}

export async function generateStaticParams() {
  return fullPosts.filter(post => post.status === 'Published').map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found | MindsCraft',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | MindsCraft Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['MindsCraft'],
      images: [{ url: post.image, alt: post.imageAlt || post.title, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: `https://mindscraft.dev/blog/${post.slug}`,
    },
  };
}

// Extract headings from HTML content for the Table of Contents
function extractHeadings(html: string): { id: string; text: string }[] {
  const regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, '').trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    headings.push({ id, text });
  }
  return headings;
}

// Add IDs to h2 tags in the HTML content
function addHeadingIds(html: string): string {
  return html.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (_, attrs, content) => {
    const text = content.replace(/<[^>]*>/g, '').trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<h2${attrs} id="${id}">${content}</h2>`;
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);
  const serviceLink = categoryServiceMap[post.category];
  const headings = extractHeadings(post.content);
  const processedContent = addHeadingIds(post.content);
  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
  const readTime = Math.ceil(wordCount / 225);

  // JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `https://mindscraft.dev/blog/${post.slug}`,
        headline: post.title,
        description: post.description,
        image: post.image,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        wordCount,
        timeRequired: `PT${readTime}M`,
        isAccessibleForFree: "true",
        author: {
          '@type': 'Organization',
          name: 'MindsCraft',
          url: 'https://mindscraft.dev',
        },
        publisher: {
          '@type': 'Organization',
          name: 'MindsCraft',
          logo: { '@type': 'ImageObject', url: 'https://mindscraft.dev/logo.png' },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://mindscraft.dev/blog/${post.slug}`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindscraft.dev' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://mindscraft.dev/blog' },
          { '@type': 'ListItem', position: 3, name: post.category, item: `https://mindscraft.dev/blog?cat=${encodeURIComponent(post.category)}` },
          { '@type': 'ListItem', position: 4, name: post.title, item: `https://mindscraft.dev/blog/${post.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c').replace(/>/g, '\\u003e')
        }}
      />
      <BlogDetailClient
        post={{ ...post, content: processedContent }}
        headings={headings}
        relatedPosts={relatedPosts}
        serviceLink={serviceLink}
        wordCount={wordCount}
      />
    </>
  );
}
