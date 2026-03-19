import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiClock, FiCalendar, FiUser } from 'react-icons/fi';
import { posts as basePosts } from '@/data/blogData';

import postsData from '@/data/posts.json';

type BlogPost = {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  content: string;
  image: string;
  imageAlt?: string;
};

// Combine base posts with content and author
const fullPosts: BlogPost[] = (postsData as any[]).map(post => ({
  ...post,
  author: 'The MindsCraft Team',
}));


async function getPost(slug: string): Promise<BlogPost | undefined> {
  return fullPosts.find((post) => post.slug === slug);
}

export async function generateStaticParams() {
  return fullPosts.map((post) => ({
    slug: post.slug,
  }));
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
    title: `${post.title} | MindsCraft`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          alt: post.imageAlt || post.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[#f0f0ee] pb-24">
      {/* ── Premium Dark Header ── */}
      <div className="bg-[#101828] text-white pt-24 pb-32 px-4 relative overflow-hidden">
        {/* Subtle grid and glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(243,244,192,0.08)_0%,transparent_60%)] -translate-y-1/2 translate-x-1/4 pointer-events-none rounded-full blur-[80px]" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[rgba(255,255,255,0.5)] hover:text-[#F3F4C0] font-semibold text-sm transition-colors mb-10">
            <FiArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>

          <div className="flex justify-center mb-6">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#101828] bg-[#F3F4C0] rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight max-w-3xl mx-auto">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base font-medium text-[rgba(255,255,255,0.6)]">
            <div className="flex items-center gap-2">
              <FiUser className="w-4 h-4 text-[rgba(255,255,255,0.4)]" />
              <span>{post.author}</span>
            </div>
            <span className="opacity-40">•</span>
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4 text-[rgba(255,255,255,0.4)]" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <span className="opacity-40">•</span>
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4 text-[rgba(255,255,255,0.4)]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 -mt-20 relative z-20">
        {/* ── Featured Image ── */}
        <div className="relative aspect-[16/9] w-full mb-12 rounded-2xl md:rounded-[32px] overflow-hidden bg-[#101828] border-4 border-white shadow-2xl">
          <Image
            src={post.image}
            alt={post.imageAlt || `${post.title} cover image`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>

        {/* ── Article Content ── */}
        <div className="bg-white rounded-[32px] p-8 md:p-14 lg:p-20 shadow-sm border border-black/[0.04]">
          <div className="prose prose-lg md:prose-xl max-w-none 
            prose-headings:font-extrabold prose-headings:text-[#101828] prose-headings:tracking-tight 
            prose-p:text-[#101828]/70 prose-p:leading-relaxed 
            prose-a:text-[#101828] prose-a:font-bold prose-a:underline-offset-4 hover:prose-a:text-blue-600
            prose-strong:text-[#101828] prose-strong:font-bold
            prose-blockquote:border-l-4 prose-blockquote:border-[#F3F4C0] prose-blockquote:bg-[#F3F4C0]/10 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:font-medium prose-blockquote:text-[#101828]/80 prose-blockquote:not-italic
            prose-ul:text-[#101828]/70 prose-ol:text-[#101828]/70
            marker:text-[#101828]/40
          ">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* ── Article Footer ── */}
          <div className="mt-16 pt-10 border-t border-black/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#101828] text-white font-bold hover:bg-[#101828]/90 transition-transform hover:scale-105"
            >
              <FiArrowLeft className="w-5 h-5" /> Back to Blog
            </Link>

            <div className="flex gap-4">
              <span className="text-[#101828]/50 font-medium">Share this article:</span>
              <a
                href={`https://twitter.com/intent/tweet?url=https://mindscraft.dev/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#101828] hover:text-[#101828]/70 transition-colors"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://mindscraft.dev/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#101828] hover:text-[#101828]/70 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}
