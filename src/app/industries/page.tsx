import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { allIndustriesList } from "@/content/industries-data";
import { ArrowRight } from "lucide-react";
import "./industries.css";

export const metadata: Metadata = {
  title: "SaaS Industries & Niches We Specialize In | mindsCraft",
  description:
    "We design for every major SaaS vertical: Fintech, DevTools, AI, Data Intelligence, Healthcare, Sales, LegalTech, and PropTech.",
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Domain Specialization"
          title="UI/UX design for every SaaS niche"
          description="Your vertical is no mystery to us. We understand the specific user behaviors, compliance hurdles, and data architectures of your industry."
          stats={[
            { stat: "10+", label: "Specialized Verticals" },
            { stat: "200+", label: "Apps Shipped" },
            { stat: "4.9", label: "Clutch Verified Rating" },
          ]}
          primaryCtaText="Start 3-day free trial"
          primaryCtaHref="/pricing#trial"
        />

        <section className="industries-list-section">
          <div className="container">
            <div className="industries-grid">
              {allIndustriesList.map((ind) => (
                <a
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="industry-card"
                >
                  <span className="industry-card__badge">{ind.name}</span>
                  <h2 className="industry-card__title">{ind.heroHeadline}</h2>
                  <p className="industry-card__desc">{ind.heroDescription}</p>

                  <div className="industry-card__challenges">
                    <strong>Common problems we solve:</strong>
                    <ul>
                      {ind.challenges.slice(0, 2).map((ch, i) => (
                        <li key={i}>{ch.title}</li>
                      ))}
                    </ul>
                  </div>

                  <span className="industry-card__link">
                    Explore {ind.name} design expertise <ArrowRight size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title="Need design expertise in your SaaS vertical?"
          subtitle="Match with a dedicated senior designer who already understands your industry."
          buttonText="Start 3-day trial"
          buttonHref="/pricing#trial"
        />
      </main>
      <Footer />
    </>
  );
}
