import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { booksData, allBooksList } from "@/content/books-data";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { Button } from "@/components/ui/button/Button";
import { ArrowLeft, BookOpen, Clock, CheckCircle } from "lucide-react";
import "./book-detail.css";

export function generateStaticParams() {
  return allBooksList.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = booksData[slug];
  if (!book) return { title: "Book Not Found | mindsCraft" };

  return {
    title: `${book.title} — mindsCraft Guide`,
    description: book.description,
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = booksData[slug];

  if (!book) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="book-detail-page">
        <div className="book-detail__topbar">
          <div className="container">
            <a href="/books" className="book-back-link">
              <ArrowLeft size={16} /> Back to all guides & books
            </a>
          </div>
        </div>

        <section className="book-detail__hero">
          <div className="container">
            <div className="book-detail__hero-grid">
              <div className="book-detail__hero-content">
                <span className="page-hero__badge">Free Educational Guide</span>
                <h1 className="book-detail__title">{book.title}</h1>
                <p className="book-detail__subtitle">{book.subtitle}</p>

                <div className="book-detail__meta-bar">
                  <span>
                    <Clock size={16} /> {book.readTime}
                  </span>
                  <span>
                    <BookOpen size={16} /> {book.pages} pages
                  </span>
                  <span>Audience: {book.audience}</span>
                </div>

                <div className="book-detail__actions">
                  <Button href="#chapters" variant="primary" size="md">
                    Browse Table of Contents
                  </Button>
                  <Button href="/pricing#trial" variant="subtle" size="md">
                    Book a 3-day design trial
                  </Button>
                </div>
              </div>

              {book.coverImage && (
                <div className="book-detail__cover-wrap">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="book-detail__cover-img"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Chapters Breakdown */}
        <section id="chapters" className="book-detail__chapters-section">
          <div className="container container--narrow">
            <h2 className="section-title text-center mb-xl">Table of Contents & Key Takeaways</h2>

            <div className="book-chapters-list">
              {book.chapters.map((ch, idx) => (
                <div key={idx} className="book-chapter-card">
                  <div className="book-chapter-header">
                    <CheckCircle className="text-accent" size={20} />
                    <h3>{ch.title}</h3>
                  </div>
                  <p>{ch.summary}</p>
                </div>
              ))}
            </div>

            <div className="book-synopsis-box">
              <h3>About this publication</h3>
              <p>{book.description}</p>
              <p>
                Written by the senior design directors at mindsCraft based on experience designing and revamping over 200 B2B SaaS platforms.
              </p>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Turn these principles into reality"
          subtitle="Hire a dedicated SaaS product designer to implement these best practices directly into your product."
          buttonText="Start 3-day trial"
          buttonHref="/pricing#trial"
        />
      </main>
      <Footer />
    </>
  );
}
