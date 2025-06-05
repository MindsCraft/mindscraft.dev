import { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

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

// Sample blog posts data - in a real app, this would come from a CMS or database
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

// This would typically come from your CMS or database
async function getPost(slug: string): Promise<BlogPost | undefined> {
  return posts.find((post) => post.slug === slug);
}

// Generate static paths at build time
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Get the post data using the slug from params
  const post = await getPost(params.slug);
  
  if (!post) {
    return {};
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
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
          <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts
              .filter(p => p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow block"
                >
                  <div className="relative h-32 w-full rounded-lg mb-4 overflow-hidden bg-gray-100">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.imageAlt || `${relatedPost.title} cover image`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{relatedPost.title}</h3>
                  <p className="text-gray-600">{relatedPost.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}
