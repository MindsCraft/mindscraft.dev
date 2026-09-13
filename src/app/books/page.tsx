import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { allBooksList } from "@/content/books-data";
import { Clock, ArrowRight } from "lucide-react";
import "./books.css";

export const metadata: Metadata = {
  title: "SaaS UI/UX Books & Guides | mindsCraft",
  description:
    "Discover insights from the front lines of SaaS UI/UX design. Free guides on UX research, designer collaboration, product-led growth, and design crash courses.",
};

export default function BooksHubPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Publications & Guides"
          title="Insights from the front lines of SaaS UI/UX design"
          description="Actionable, no-fluff guidebooks written by our design directors to help founders, engineers, and product leaders build better software."
          stats={[
            { stat: "5", label: "Published Guides" },
            { stat: "20k+", label: "Readers Worldwide" },
            { stat: "100%", label: "Free & Open Access" },
          ]}
        />

        <section className="books-grid-section">
          <div className="container">
            <div className="books-grid">
              {allBooksList.map((book) => (
                <div key={book.slug} className="book-card">
                  <div className="book-card__spine">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      loading="lazy"
                      className="book-card__cover-image"
                    />
                  </div>
                  <div className="book-card__content">
                    <div className="book-card__meta">
                      <span>
                        <Clock size={14} /> {book.readTime}
                      </span>
                      <span>{book.pages} pages</span>
                    </div>

                    <h2 className="book-card__title">{book.title}</h2>
                    <p className="book-card__desc">{book.description}</p>

                    <div className="book-card__audience">
                      <strong>Best for:</strong> {book.audience}
                    </div>

                    <a href={`/books/${book.slug}`} className="book-card__link">
                      Read guide <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title="Want to put these principles into practice?"
          subtitle="Hire a dedicated SaaS product designer to implement best-in-class UX for your product."
          buttonText="Start 3-day trial"
          buttonHref="/pricing#trial"
        />
      </main>
      <Footer />
    </>
  );
}
