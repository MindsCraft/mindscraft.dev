import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiClock, FiCalendar, FiUser, FiShare2, FiArrowRight, FiBookOpen } from 'react-icons/fi';
import postsData from '@/data/posts.json';

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
};

const fullPosts: BlogPost[] = (postsData as any[]).map(post => ({
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
  return fullPosts.map((post) => ({ slug: post.slug }));
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

  // JSON-LD for AI & Search Engines (Article + Breadcrumb)
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
        wordCount: post.content.split(' ').length,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Scroll Progress */}
      <style>{`
        html { scroll-behavior: smooth; }
        .prose-blog h2 { font-size: 1.75rem; font-weight: var(--fw-bold); color: #101828; margin-top: 3rem; margin-bottom: 1rem; letter-spacing: -0.04em; line-height: 1.1; }
        .prose-blog h3 { font-size: 1.25rem; font-weight: var(--fw-bold); color: #101828; margin-top: 2rem; margin-bottom: 0.75rem; letter-spacing: -0.02em; }
        .prose-blog p { color: rgba(16,24,40,0.72); line-height: 1.85; margin-bottom: 1.5rem; font-size: 1.0625rem; font-weight: var(--fw-regular); }
        .prose-blog ul, .prose-blog ol { color: rgba(16,24,40,0.72); padding-left: 0; list-style: none; margin-bottom: 1.5rem; }
        .prose-blog li { position: relative; padding-left: 1.5rem; margin-bottom: 0.6rem; font-size: 1.0625rem; line-height: 1.7; font-weight: var(--fw-regular); }
        .prose-blog li::before { content: ''; position: absolute; left: 0; top: 0.68em; width: 8px; height: 8px; border-radius: 50%; background: #F3F4C0; border: 2px solid #101828; }
        .prose-blog ol { counter-reset: ol-counter; }
        .prose-blog ol li::before { content: counter(ol-counter); counter-increment: ol-counter; background: #101828; color: #F3F4C0; border: none; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 11px; font-weight: var(--fw-bold); top: 0.35em; }
        .prose-blog blockquote { border: none; background: #101828; color: #F3F4C0; padding: 2.5rem 3rem; border-radius: 28px; margin: 2.5rem 0; position: relative; }
        .prose-blog blockquote p { color: #F3F4C0; font-size: 1.25rem; font-weight: var(--fw-bold); font-style: italic; margin: 0; }
        .prose-blog blockquote::before { content: '"'; position: absolute; top: 1rem; left: 1.5rem; font-size: 5rem; line-height: 1; color: rgba(243,244,192,0.2); font-family: serif; }
        .prose-blog strong { font-weight: var(--fw-bold); color: #101828; }
        .prose-blog a { font-weight: var(--fw-bold); color: #101828; text-decoration: underline; text-decoration-color: #F3F4C0; text-underline-offset: 4px; text-decoration-thickness: 2px; }
        .prose-blog a:hover { opacity: 0.7; }
        .prose-blog code { background: #101828; color: #F3F4C0; border-radius: 6px; padding: 2px 8px; font-size: 0.875em; font-family: 'JetBrains Mono', 'Fira Code', monospace; font-weight: var(--fw-regular); }
        .prose-blog pre { background: #0d1117; border-radius: 16px; padding: 2rem; overflow-x: auto; margin: 2rem 0; border: 1px solid rgba(255,255,255,0.06); }
        .prose-blog pre code { background: none; color: #e6edf3; padding: 0; font-size: 0.9rem; font-weight: var(--fw-regular); }
        .toc-link { display: block; padding: 6px 12px; border-radius: 8px; font-size: 0.8125rem; font-weight: var(--fw-bold); color: rgba(16,24,40,0.5); transition: all 0.2s; border-left: 2px solid transparent; }
        .toc-link:hover { color: #101828; background: rgba(243,244,192,0.3); border-left-color: #F3F4C0; }
      `}</style>

      <article className="min-h-screen bg-[#f8f9fa] pb-0">

        {/* ── BREADCRUMB NAV ── */}
        <div className="bg-white border-b border-black/[0.05] py-3 px-4">
          <nav className="container mx-auto max-w-7xl flex items-center gap-2 text-xs font-bold text-[#101828]/40 uppercase tracking-widest" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#101828] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#101828] transition-colors">Blog</Link>
            <span>/</span>
            <Link href={`/blog?cat=${encodeURIComponent(post.category)}`} className="hover:text-[#101828] transition-colors">{post.category}</Link>
            <span>/</span>
            <span className="text-[#101828]/70 truncate max-w-xs">{post.title}</span>
          </nav>
        </div>

        {/* ── PREMIUM DARK HEADER ── */}
        <div className="bg-[#101828] text-white pt-16 pb-48 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_50%_0%,rgba(243,244,192,0.12),transparent_70%)] pointer-events-none" />

          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <Link href="/blog" className="group inline-flex items-center gap-2 text-white/40 hover:text-[#F3F4C0] font-bold text-xs uppercase tracking-widest transition-all mb-10">
              <FiArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              All Insights
            </Link>

            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#101828] bg-[#F3F4C0] rounded-full shadow-[0_0_30px_rgba(243,244,192,0.2)]">
                {post.category}
              </span>
              {serviceLink && (
                <Link href={serviceLink.href} className="inline-block px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white border border-white/10 rounded-full transition-colors">
                  {serviceLink.label} →
                </Link>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[4.25rem] font-black text-white leading-[1.02] mb-10 tracking-[-0.04em] max-w-4xl mx-auto">
              {post.title}
            </h1>

            <p className="text-white/50 text-lg font-medium max-w-2xl mx-auto mb-12 leading-relaxed">{post.description}</p>

            <div className="flex flex-wrap items-center justify-center gap-8 text-[11px] font-black text-white/30 uppercase tracking-[0.15em]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#F3F4C0] flex items-center justify-center">
                  <span className="text-[8px] font-black text-[#101828]">MC</span>
                </div>
                <span className="text-white/70">{post.author || 'The MindsCraft Team'}</span>
              </div>
              <div className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <FiCalendar className="w-3.5 h-3.5" />
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
              <div className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-2 text-[#F3F4C0]">
                <FiClock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
              <div className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <FiBookOpen className="w-3.5 h-3.5" />
                <span>~{Math.round(post.content.split(' ').length)} words</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT AREA ── */}
        <div className="container mx-auto max-w-7xl px-4 -mt-32 relative z-20">

          {/* Hero Image */}
          <div className="group relative aspect-[21/9] w-full mb-16 rounded-[40px] overflow-hidden bg-[#101828] border-[10px] border-white shadow-[0_50px_120px_-30px_rgba(16,24,40,0.4)]">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              sizes="(max-width: 1400px) 100vw, 1400px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/30 to-transparent" />
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start pb-24">

            {/* ── ARTICLE CONTENT ── */}
            <div>
              <div className="bg-white rounded-[48px] p-8 md:p-14 lg:p-20 shadow-[0_4px_40px_rgba(0,0,0,0.04)] border border-black/[0.04]">
                <div className="prose-blog">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* ── MID-ARTICLE SOFT CTA ── */}
                <div className="my-16 p-10 bg-[#101828] rounded-[32px] text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,244,192,0.15),transparent_60%)]" />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F3F4C0] mb-3 relative z-10">MindsCraft Builds This</p>
                  <h3 className="text-2xl font-black leading-tight mb-4 relative z-10">
                    Want us to build this for your product?
                  </h3>
                  <p className="text-white/60 text-sm font-medium mb-8 relative z-10 max-w-md">
                    We've shipped {post.category} solutions for startups and scale-ups. Let's talk about yours.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#F3F4C0] text-[#101828] font-black rounded-2xl hover:bg-white transition-colors relative z-10 text-sm">
                    Start a conversation <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* ── AUTHOR CARD ── */}
                <div className="mt-16 pt-12 border-t border-black/[0.06]">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="flex-shrink-0 w-20 h-20 rounded-[20px] bg-[#101828] flex items-center justify-center shadow-lg">
                      <span className="text-[#F3F4C0] font-black text-2xl">MC</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#101828]/40 mb-1">Written By</p>
                      <h4 className="text-xl font-black text-[#101828] mb-1">{post.author || 'The MindsCraft Team'}</h4>
                      <p className="text-sm text-[#101828]/60 font-medium leading-relaxed">
                        Engineering & AI specialists building premium digital products for founders and enterprises. We write about what we actually build.
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <a href={`https://twitter.com/intent/tweet?url=https://mindscraft.dev/blog/${post.slug}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-2xl bg-[#f0f0ee] flex items-center justify-center text-sm font-black hover:bg-[#101828] hover:text-white transition-all">𝕏</a>
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://mindscraft.dev/blog/${post.slug}`} target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-2xl bg-[#f0f0ee] flex items-center justify-center text-sm font-black hover:bg-[#101828] hover:text-white transition-all">in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── STICKY SIDEBAR ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-6 space-y-6">

                {/* Table of Contents */}
                <div className="bg-white rounded-[32px] p-8 border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#101828]/40 mb-5 flex items-center gap-2">
                    <FiBookOpen className="w-3.5 h-3.5" /> In this article
                  </h3>
                  <nav className="space-y-1" aria-label="Table of contents">
                    <a href="#" className="toc-link">Introduction</a>
                    <a href="#" className="toc-link">The Tech Stack</a>
                    <a href="#" className="toc-link">Building the Core Loop</a>
                    <a href="#" className="toc-link">App Layer & UI</a>
                    <a href="#" className="toc-link">Payments & Launch</a>
                    <a href="#" className="toc-link">Key Takeaways</a>
                  </nav>
                </div>

                {/* Book a Call CTA */}
                <div className="bg-[#101828] rounded-[32px] p-8 text-white relative overflow-hidden group/cta">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F3F4C0] opacity-10 rounded-full blur-3xl transition-all group-hover/cta:opacity-20 group-hover/cta:scale-150" />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F3F4C0] mb-3 relative z-10">MindsCraft</p>
                  <h3 className="text-lg font-black mb-3 relative z-10 leading-snug">
                    Ready to build your AI product in 2026?
                  </h3>
                  <p className="text-xs text-white/50 mb-6 relative z-10 font-medium leading-relaxed">
                    We help startups ship faster with premium engineering & AI systems.
                  </p>
                  <Link href="/contact" className="block w-full text-center py-3.5 bg-[#F3F4C0] text-[#101828] font-black rounded-2xl hover:bg-white transition-colors relative z-10 text-sm">
                    Book a Free Strategy Call
                  </Link>
                  <Link href="/work" className="block w-full text-center py-3 text-white/50 hover:text-white font-bold text-xs mt-2 relative z-10 transition-colors">
                    See our work →
                  </Link>
                </div>

                {/* Tech Stack Tags */}
                <div className="bg-white rounded-[32px] p-8 border border-black/[0.05]">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#101828]/40 mb-5">Technologies & Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {[post.category, 'Gemini 2.5', 'Next.js', 'TypeScript', '2026 Trends'].map(tag => (
                      <span key={tag} className="inline-block px-3 py-1.5 text-[11px] font-black uppercase tracking-wider bg-[#f0f0ee] text-[#101828]/70 rounded-full border border-black/[0.05]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="bg-white rounded-[32px] p-8 border border-black/[0.05]">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#101828]/40 mb-4 flex items-center gap-2">
                    <FiShare2 className="w-3.5 h-3.5" /> Share this article
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <a href={`https://twitter.com/intent/tweet?url=https://mindscraft.dev/blog/${post.slug}`} target="_blank" rel="noopener noreferrer"
                      className="text-center py-3 text-xs font-black bg-[#f0f0ee] rounded-2xl hover:bg-[#101828] hover:text-white transition-all">
                      Share on 𝕏
                    </a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://mindscraft.dev/blog/${post.slug}`} target="_blank" rel="noopener noreferrer"
                      className="text-center py-3 text-xs font-black bg-[#f0f0ee] rounded-2xl hover:bg-[#101828] hover:text-white transition-all">
                      Share on in
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ── CONVERSION FOOTER PANEL ── */}
        <div className="bg-[#101828] py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(243,244,192,0.08),transparent_70%)]" />
            <span className="inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#101828] bg-[#F3F4C0] rounded-full mb-8 relative z-10">
              {post.category}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 relative z-10 tracking-tight">
              Let's build your vision<br />with expert AI development.
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 relative z-10 font-medium leading-relaxed">
              MindsCraft ships premium software for founders who refuse to compromise on quality, speed, or intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/contact" className="px-8 py-4 bg-[#F3F4C0] text-[#101828] font-black rounded-2xl hover:bg-white transition-all hover:scale-105">
                Start Your Project
              </Link>
              <Link href="/work" className="px-8 py-4 border-2 border-white/20 text-white font-black rounded-2xl hover:border-white/60 transition-all">
                See Our Work →
              </Link>
            </div>
          </div>
        </div>

        {/* ── RELATED ARTICLES ── */}
        {relatedPosts.length > 0 && (
          <div className="bg-[#f0f0ee] py-24 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#101828]/40 mb-2">More from MindsCraft</p>
                  <h2 className="text-3xl font-black text-[#101828] tracking-tight">Related Insights</h2>
                </div>
                <Link href="/blog" className="hidden sm:inline-flex items-center gap-2 text-sm font-black text-[#101828]/60 hover:text-[#101828] transition-colors">
                  All articles <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(related => (
                  <Link key={related.slug} href={`/blog/${related.slug}`} className="group bg-white rounded-[32px] overflow-hidden border border-black/[0.04] hover:border-black/[0.1] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
                    {related.image && (
                      <div className="relative aspect-[16/9] w-full bg-[#101828]">
                        <Image src={related.image} alt={related.imageAlt || related.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1200px) 33vw, 400px" />
                      </div>
                    )}
                    <div className="p-8">
                      <span className="inline-block px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] bg-[#f0f0ee] text-[#101828]/60 rounded-full mb-4">{related.category}</span>
                      <h3 className="font-black text-[#101828] text-lg leading-snug mb-3 line-clamp-2 group-hover:text-[#101828]/80 transition-colors">{related.title}</h3>
                      <p className="text-sm text-[#101828]/50 line-clamp-2 mb-6 font-medium leading-relaxed">{related.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-[#101828]/40 uppercase tracking-wider">{related.readTime}</span>
                        <span className="text-xs font-black text-[#101828] group-hover:translate-x-1 transition-transform">Read →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

      </article>
    </>
  );
}
