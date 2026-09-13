import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { comparisonsData, allComparisonsList } from "@/content/comparisons-data";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { Check, X } from "lucide-react";
import "./vs-detail.css";

export function generateStaticParams() {
  return allComparisonsList.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comp = comparisonsData[slug];
  if (!comp) return { title: "Comparison Not Found | mindsCraft" };

  return {
    title: `${comp.heroHeadline} — mindsCraft`,
    description: comp.heroDescription,
  };
}

export default async function ComparisonDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comp = comparisonsData[slug];

  if (!comp) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="vs-detail-page">
        <PageHero
          badge={comp.badge}
          title={comp.heroHeadline}
          description={comp.heroDescription}
          primaryCtaText="Test in 3-day free trial"
          primaryCtaHref="/pricing#trial"
          secondaryCtaText="See all comparisons"
          secondaryCtaHref="/vs"
        />

        {/* Side-by-side Table */}
        <section className="vs-table-section">
          <div className="container">
            <div className="section-intro text-center">
              <span className="page-hero__badge">Side-by-Side Breakdown</span>
              <h2 className="section-title">mindsCraft vs {comp.competitor}</h2>
            </div>

            <div className="vs-table-wrap">
              <table className="vs-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="vs-table__col-us">mindsCraft</th>
                    <th className="vs-table__col-them">{comp.competitor}</th>
                  </tr>
                </thead>
                <tbody>
                  {comp.points.map((pt, idx) => (
                    <tr key={idx}>
                      <td className="vs-table__feature">{pt.feature}</td>
                      <td className="vs-table__val-us">
                        <span className="vs-check-badge">
                          <Check size={16} className="text-accent" />
                        </span>
                        {pt.us}
                      </td>
                      <td className="vs-table__val-them">
                        <span className="vs-x-badge">
                          <X size={16} />
                        </span>
                        {pt.them}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why choose mindsCraft */}
        <section className="vs-why-section">
          <div className="container">
            <div className="section-intro text-center">
              <span className="page-hero__badge">Core Advantages</span>
              <h2 className="section-title">{comp.whyChooseTitle}</h2>
            </div>

            <div className="vs-why-grid">
              {comp.whyChoosePoints.map((item, idx) => (
                <div key={idx} className="vs-why-card">
                  <span className="vs-why-num">0{idx + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        {comp.faqs.length > 0 && (
          <section className="vs-faq-section">
            <div className="container container--narrow">
              <div className="section-intro text-center">
                <span className="page-hero__badge">Questions</span>
                <h2 className="section-title">Frequently asked questions</h2>
              </div>

              <div className="vs-faq-list">
                {comp.faqs.map((faq, idx) => (
                  <div key={idx} className="vs-faq-card">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaBanner
          title={`Ready to test mindsCraft against ${comp.competitor}?`}
          subtitle="Start with a free 3-day trial. Zero upfront commitment."
          buttonText="Start 3-day trial"
          buttonHref="/pricing#trial"
        />
      </main>
      <Footer />
    </>
  );
}
