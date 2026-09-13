import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allBlogPosts, blogCategories } from "@/content/blog-data";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { Clock, ArrowRight } from "lucide-react";
import "@/app/blog/blog-hub.css";

export function generateStaticParams() {
  return blogCategories
    .filter((c) => c.slug !== "all")
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = blogCategories.find((c) => c.slug === slug);
  if (!cat) return { title: "Category Not Found | mindsCraft" };

  return {
    title: `${cat.name} Articles — SaaS Product Design | mindsCraft`,
    description: `Read articles and practical guides on ${cat.name} for SaaS startups.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = blogCategories.find((c) => c.slug === slug);

  if (!cat) {
    notFound();
  }

  const categoryPosts = allBlogPosts.filter(
    (p) => p.categorySlug.toLowerCase() === slug.toLowerCase()
  );

  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Category Archive"
          title={`${cat.name} Articles`}
          description={`Browse our published essays, guides, and practical teardowns focused on ${cat.name}.`}
        />

        <section className="blog-hub-section">
          <div className="container">
            <div className="blog-categories-wrap">
              <a href="/blog" className="blog-category-pill">
                All Articles
              </a>
              {blogCategories
                .filter((c) => c.slug !== "all")
                .map((item) => (
                  <a
                    key={item.slug}
                    href={`/category/${item.slug}`}
                    className={`blog-category-pill ${
                      item.slug === slug ? "blog-category-pill--active" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
            </div>

            <div className="blog-articles-grid">
              {categoryPosts.map((post) => (
                <article key={post.slug} className="blog-article-card">
                  <div className="blog-article__meta">
                    <span className="blog-article__category">{post.category}</span>
                    <span className="blog-article__time">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="blog-article__title">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h2>

                  <p className="blog-article__excerpt">{post.excerpt}</p>

                  <div className="blog-article__footer">
                    <span className="blog-article__author">{post.author.name}</span>
                    <a href={`/blog/${post.slug}`} className="blog-article__read">
                      Read post <ArrowRight size={12} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title="Turn these insights into product features"
          subtitle="Embed a dedicated senior SaaS designer into your team with a 3-day trial."
          buttonText="Start 3-day trial"
          buttonHref="/pricing#trial"
        />
      </main>
      <Footer />
    </>
  );
}
