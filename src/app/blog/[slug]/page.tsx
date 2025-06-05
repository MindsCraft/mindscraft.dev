import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Types
type BlogPost = {
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
};

// Sample data - in a real app, this would come from a CMS or database
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
  {
    id: 3,
    slug: 'ai-integration-strategies',
    title: 'AI Integration Strategies for Startups',
    description: 'How startups can leverage AI to gain competitive advantages and improve efficiency.',
    date: '2024-03-15',
    author: 'Mindscraft Team',
    category: 'AI & Technology',
    content: 'This is a placeholder for the blog post content...',
    image: 'https://picsum.photos/seed/ai-startup/1200/630',
    imageAlt: 'AI in business'
  },
  {
    id: 4,
    slug: 'startup-growth-hacking',
    title: 'Startup Growth Hacking Techniques',
    description: 'Proven strategies for accelerating your startup\'s growth in the digital age.',
    date: '2024-03-12',
    author: 'Mindscraft Team',
    category: 'Startup Growth',
    content: 'This is a placeholder for the blog post content...',
    image: 'https://picsum.photos/seed/startup/1200/630',
    imageAlt: 'Startup growth strategies'
  },
  {
    id: 5,
    slug: 'role-of-ux-in-product-success',
    title: 'The Role of UX in Product Success',
    description: 'Why user experience is crucial for product success and how to get it right.',
    date: '2024-03-10',
    author: 'Mindscraft Team',
    category: 'UX Design',
    content: 'This is a placeholder for the blog post content...',
    image: 'https://picsum.photos/seed/ux-role/1200/630',
    imageAlt: 'User experience design process'
  },
  {
    id: 6,
    slug: 'modern-web-development',
    title: 'Modern Web Development Best Practices',
    description: 'Essential best practices for building modern, maintainable web applications.',
    date: '2024-03-08',
    author: 'Mindscraft Team',
    category: 'Web Development',
    content: 'This is a placeholder for the blog post content...',
    image: 'https://picsum.photos/seed/web-dev-best/1200/630',
    imageAlt: 'Web development best practices'
  }
];

// Get post by slug
async function getPost(slug: string): Promise<BlogPost | undefined> {
  return posts.find((post) => post.slug === slug);
}

// Get all posts for static generation
async function getAllPosts(): Promise<BlogPost[]> {
  return posts;
}

// Generate static paths at build time
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Mindscraft Blog`,
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

// Main page component
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
          <Image
            src={post.image}
            alt={post.imageAlt || `${post.title} cover image`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">{post.description}</p>
          <div className="text-gray-800">
            {post.content}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
