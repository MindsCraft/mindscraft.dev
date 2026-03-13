import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiClock, FiCalendar, FiUser } from 'react-icons/fi';
import { posts as basePosts } from '@/data/blogData';

// Map of detailed content (HTML strings) for each slug
const postContents: Record<string, string> = {
  'build-ai-saas-6-weeks': `
    <p class="lead">Building an AI product doesn't have to take months. In our experience, the fastest path to product-market fit is launching a lean, focused MVP in under 6 weeks. Here is the exact blueprint we use to take founders from concept to revenue.</p>
    
    <h2>The Tech Stack</h2>
    <p>Choosing the right stack is 50% of the battle. We rely on <strong>Next.js 15</strong> for the frontend and edge-ready API routes, <strong>Supabase</strong> for PostgreSQL and Auth, and <strong>LangChain</strong> (or direct OpenAI APIs) for orchestration. This combo provides the perfect balance of iteration speed, developer experience, and production scalability. No Kubernetes. No complex microservices. Just a monolith that scales when it needs to.</p>
    
    <h2>Weeks 1-2: Core AI Loop</h2>
    <p>The first two weeks are entirely focused on data ingestion and the core AI loop. If the LLM can't return valuable outputs by the end of week 2, there is no product. We build a basic CLI or rough frontend to test the prompts, fine-tune the context windows, and solidify the pipeline.</p>
    
    <h2>Weeks 3-4: App Layer & UI/UX</h2>
    <p>Once the core AI value is proven, we wrap it in a clean, minimal UI. We use our internal premium design system built on Tailwind CSS and Framer Motion. This phase also includes wired-up authentication using Supabase. Users should be able to log in, see their history, and interact with the AI smoothly.</p>

    <blockquote>"The goal isn't to build every feature imaginable. The goal is to build just enough to confidently validate the market and start generating revenue."</blockquote>
    
    <h2>Weeks 5-6: Payments, Polish & Launch</h2>
    <p>The final stretch is about friction reduction. We integrate Stripe for subscription billing, create seamless onboarding flows, and polish the loading states. AI apps often have high latency due to LLM generation times—using streaming responses and optimistic UI updates here is critical to make the app feel blazingly fast.</p>
  `,
  'rag-vs-fine-tuning': `
    <p class="lead">Two of the most misunderstood options in AI product development explained clearly. We break down when to use retrieval-augmented generation vs fine-tuning your own model.</p>
    <h2>What is RAG?</h2>
    <p>Retrieval-Augmented Generation (RAG) is like giving an LLM an open-book test. You store your company's data in a vector database, and when a user asks a question, you pull the most relevant documents and feed them to the LLM as context.</p>
    <ul>
      <li><strong>Pros:</strong> Data is always up-to-date, cheaper to implement, no retraining required, easy to cite sources.</li>
      <li><strong>Cons:</strong> Can increase latency, context window limits apply.</li>
    </ul>
    <h2>What is Fine-Tuning?</h2>
    <p>Fine-tuning is like sending the LLM to culinary school. You aren't teaching it new facts; you are teaching it a new tone, style, or specific output format (like outputting pure JSON).</p>
    <h2>The Verdict</h2>
    <p>For 95% of businesses looking to build internal tools or customer support bots, <strong>RAG is the correct answer</strong>. Fine-tuning should only be used when you need the model to adopt a highly specific structural format or voice that cannot be achieved through prompt engineering.</p>
  `,
  'core-web-vitals-2026': `
    <p class="lead">Google has updated its ranking signals again. We audited 40 client sites and identified exactly which CWV metrics correlate with ranking improvements — and which ones everyone is wasting time on.</p>
    <h2>Interaction to Next Paint (INP) is King</h2>
    <p>First Input Delay (FID) is officially dead. INP is the new standard, and it is notoriously harder to optimize. INP measures the latency of every single click, tap, and keyboard interaction throughout the user's lifespan on the page.</p>
    <h2>How to fix poor INP in React/Next.js</h2>
    <p>The biggest culprit of poor INP in React applications is long main-thread tasks. When a user clicks a button, if React is busy rendering a massive list or parsing heavy JSON, the browser freezes.</p>
    <ul>
      <li>Implement concurrent features (` + "`useTransition`" + `)</li>
      <li>Defer non-critical third-party scripts (Intercom, Hotjar) using Next.js <code>&lt;Script strategy="lazyOnload" /&gt;</code></li>
      <li>Virtualize long lists</li>
    </ul>
    <p>Stop stressing over getting a 100/100 Lighthouse score. Aim for a "Good" rating in the Chrome User Experience Report (CrUX) field data—that's what actually matters for SEO.</p>
  `,
  'saas-cro-case-study': `
    <p class="lead">We redesigned the onboarding flow for a B2B SaaS tool and tripled their trial-to-paid conversion in 8 weeks. Here's what worked.</p>
    <h2>The Problem</h2>
    <p>The client had solid top-of-funnel traffic, but a massive drop-off right after account creation. Users were landing on an empty dashboard with a generic "Create New Project" button and leaving within 60 seconds.</p>
    <h2>The Solution: Opinionated Onboarding</h2>
    <p>We replaced the empty dashboard with a highly opinionated, 3-step setup wizard.</p>
    <ol>
      <li><strong>Personalization:</strong> Ask the user their role (Marketing, Dev, Exec).</li>
      <li><strong>Template Selection:</strong> Provide pre-filled, beautiful templates instead of a blank canvas.</li>
      <li><strong>Quick Win:</strong> Guide them to complete exactly one high-value action within the first 3 minutes.</li>
    </ol>
    <p>By defining success for the user instead of making them figure it out, trial-to-paid conversion jumped from 2.1% to 9.4%.</p>
  `,
  'design-system-that-scales': `
    <p class="lead">Most design systems die in the Figma file phase. We've shipped five this year. Here's the structural decisions that separate the ones teams love from the ones teams abandon.</p>
    <h2>Stop building everything from scratch</h2>
    <p>In 2026, building your own basic primitive components (Buttons, Modals, Dropdowns) is a waste of engineering time. We start every design system with headless UI libraries like Radix UI or React Aria, and style them with Tailwind CSS.</p>
    <h2>The 3-Tier Architecture</h2>
    <ol>
      <li><strong>Design Tokens:</strong> Raw values (colors, spacing, typography) defined in a central config.</li>
      <li><strong>Primitives:</strong> The basic building blocks (Button, Input). They contain zero business logic.</li>
      <li><strong>Compositions:</strong> Complex, domain-specific modules (UserAvatarCard, SubscriptionTable).</li>
    </ol>
    <p>When design systems fail, it's usually because developers mix Tier 2 and Tier 3, creating bloated primitives that are impossible to reuse in different contexts.</p>
  `,
  'nextjs-15-app-router-patterns': `
    <p class="lead">After shipping 12 Next.js projects, we've landed on a set of patterns for data fetching, caching, auth, and error handling that actually hold up under real-world traffic.</p>
    <h2>Component-Level Data Fetching</h2>
    <p>Stop doing all your data fetching at the top of the page route and passing props down 5 levels. React Server Components (RSC) allow you to fetch data exactly where it's needed.</p>
    <h2>Mutations and Server Actions</h2>
    <p>Server Actions are powerful, but they can be brittle if not structured correctly. Always wrap server actions with a validation layer (like Zod) and return predictable <code>{'{ success, error, data }'}</code> objects instead of blindly throwing errors.</p>
    <h2>Caching Gotchas</h2>
    <p>Next.js aggressive caching is great for marketing sites, but a nightmare for dynamic dashboards. Be completely explicit with your cache boundaries using <code>revalidatePath</code> and <code>revalidateTag</code>.</p>
  `
};

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
const fullPosts: BlogPost[] = basePosts.map(post => ({
  ...post,
  author: 'The MindsCraft Team',
  content: postContents[post.slug] || '<p>Content coming soon.</p>'
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
