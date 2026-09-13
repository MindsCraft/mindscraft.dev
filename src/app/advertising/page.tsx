import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { legalDocs } from "@/content/legal-data";
import "@/app/privacy/legal.css";

export const metadata: Metadata = {
  title: "Advertising Policy — mindsCraft",
  description: "Our policy regarding advertising, sponsorships, and editorial independence.",
};

export default function AdvertisingPage() {
  const doc = legalDocs.advertising;

  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container container--narrow">
          <header className="legal-header">
            <span className="page-hero__badge">Independence & Transparency</span>
            <h1 className="legal-title">{doc.title}</h1>
            <p className="legal-updated">Last Updated: {doc.lastUpdated}</p>
          </header>

          <div className="legal-content">
            {doc.sections.map((sec, idx) => (
              <section key={idx} className="legal-section-block">
                <h2>{sec.heading}</h2>
                {sec.body.map((par, pIdx) => (
                  <p key={pIdx}>{par}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
