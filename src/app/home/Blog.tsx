'use client';

import Link from 'next/link';
import { posts as allPosts } from '@/data/blogData';

export default function Blog() {
  // Map the new blog structure to the format required by the homepage grid
  const formattedPosts = allPosts.slice(0, 5).map((post, index) => {
    // Format date string from YYYY-MM-DD to Month DD, YYYY
    const d = new Date(post.date);
    const dateFormatted = d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    return {
      slug: post.slug,
      title: post.title,
      excerpt: post.description.split('.')[0] + '.', // Get first sentence as excerpt
      category: post.category,
      date: dateFormatted,
      readTime: post.readTime.replace(' read', ''),
      image: post.image,
      type: index === 0 ? 'featured' : index < 3 ? 'standard' : index === 3 ? 'cream' : 'navy'
    };
  });

  const featured = formattedPosts[0];
  const mid1 = formattedPosts[1];
  const mid2 = formattedPosts[2];
  const cream = formattedPosts[3];
  const navy = formattedPosts[4];

  return (
    <section className="bb-section" aria-label="Blog posts">
      <div className="bb-container">

        {/* ── Header ── */}
        <div className="bb-header">
          <div className="bb-header-left">
            <span className="bb-eyebrow">Insights & Thinking</span>
            <h2 className="bb-title">Latest from the Blog</h2>
          </div>
          <Link href="/blog" className="bb-view-all">
            View all posts
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ marginLeft: '0.2rem' }}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="bb-header-rule"></div>

        {/* ── Grid ── */}
        <div className="bb-grid">

          {/* COLUMN 1: Featured */}
          <div className="bb-col">
            <Link href={`/blog/${featured.slug}`} className="bb-card-featured">
              <div className="bb-img-wrap-lg">
                <img src={featured.image!} alt={featured.title} className="bb-img" loading="lazy" />
                <span className="bb-badge-pill">{featured.category}</span>
              </div>
              <div className="bb-content-featured">
                <div className="bb-meta">{featured.date} · {featured.readTime}</div>
                <h3 className="bb-heading-lg">{featured.title}</h3>
                <p className="bb-excerpt">{featured.excerpt}</p>
                <div className="bb-read">Read article &rarr;</div>
              </div>
            </Link>
          </div>

          {/* COLUMN 2: Standard Cards */}
          <div className="bb-col">
            {/* Top */}
            <Link href={`/blog/${mid1.slug}`} className="bb-card-std">
              <div className="bb-img-wrap-md">
                <img src={mid1.image!} alt={mid1.title} className="bb-img" loading="lazy" />
              </div>
              <div className="bb-content-std">
                <div className="bb-cat">{mid1.category}</div>
                <h3 className="bb-heading-md">{mid1.title}</h3>
                <div className="bb-meta-flex">
                  <span className="bb-meta">{mid1.date}</span>
                </div>
                <div className="bb-read">Read &rarr;</div>
              </div>
            </Link>

            {/* Bottom */}
            <Link href={`/blog/${mid2.slug}`} className="bb-card-std">
              <div className="bb-img-wrap-md bb-img-wrap-sm">
                <img src={mid2.image!} alt={mid2.title} className="bb-img" loading="lazy" />
              </div>
              <div className="bb-content-std">
                <div className="bb-cat">{mid2.category}</div>
                <h3 className="bb-heading-md">{mid2.title}</h3>
                <div className="bb-meta-flex">
                  <span className="bb-meta">{mid2.date}</span>
                </div>
                <div className="bb-read">Read &rarr;</div>
              </div>
            </Link>
          </div>

          {/* COLUMN 3: Solid Cards */}
          <div className="bb-col">
            {/* Top: Cream array */}
            <Link href={`/blog/${cream.slug}`} className="bb-card-cream">
              <span className="bb-ghost-num">08</span>
              <div className="bb-cat bb-cat-cream">{cream.category}</div>
              <h3 className="bb-heading-md">{cream.title}</h3>
              <p className="bb-excerpt-sm">{cream.excerpt}</p>
              <div className="bb-read mt-auto">Read article &rarr;</div>
            </Link>

            {/* Bottom: Navy */}
            <Link href={`/blog/${navy.slug}`} className="bb-card-navy">
              <h3 className="bb-heading-lg bb-text-white">{navy.title}</h3>
              <p className="bb-excerpt-navy">{navy.excerpt}</p>
              <div className="bb-read bb-read-cream mt-auto">Read &rarr;</div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}