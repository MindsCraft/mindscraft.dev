'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  content: string;
  image: string;
  imageAlt?: string;
}

// This would be replaced with a real API call in production
const getPost = async (slug: string): Promise<BlogPost | null> => {
  const posts: BlogPost[] = [
    {
      id: 1,
      slug: 'future-of-ux-design',
      title: 'The Future of UX Design in AI-Powered Applications',
      description: 'Exploring how AI is transforming user experience design and what it means for developers.',
      date: '2024-03-20',
      author: 'Mindscraft Team',
      category: 'UX Design',
      content: 'This is a placeholder for the blog post content...',
      image: 'https://picsum.photos/seed/ux-design/1200/630',
      imageAlt: 'AI and UX Design concept'
    },
    {
      id: 2,
      slug: 'scalable-web-applications',
      title: 'Building Scalable Web Applications with Next.js',
      description: 'A comprehensive guide to creating performant and scalable web applications.',
      date: '2024-03-18',
      author: 'Mindscraft Team',
      category: 'Web Development',
      content: 'This is a placeholder for the blog post content...',
      image: 'https://picsum.photos/seed/nextjs/1200/630',
      imageAlt: 'Next.js development'
    },
  ];

  return posts.find((post) => post.slug === slug) || null;
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(params.slug);
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <span className="text-sm text-gray-500">{post.category}</span>
          <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>

        <div className="relative aspect-video w-full mb-8 rounded-xl overflow-hidden bg-gray-100">
          <img
            src={post.image}
            alt={post.imageAlt || `${post.title} cover image`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">{post.description}</p>
          <div className="text-gray-800">
            {post.content}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </a>
        </div>
      </div>
    </article>
  );
}
