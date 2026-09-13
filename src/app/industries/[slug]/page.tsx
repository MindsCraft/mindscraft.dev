import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industriesData, allIndustriesList } from "@/content/industries-data";
import { allCases } from "@/content/all-cases";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { CaseCard } from "@/components/marketing/CaseCard";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { SubpageChallengesGrid } from "@/components/sections/SubpageChallengesGrid";
import { SubpageDeliverablesGrid } from "@/components/sections/SubpageDeliverablesGrid";
import { SubpageTeamIntegration } from "@/components/sections/SubpageTeamIntegration";
import { DeliveryProcessSection } from "@/components/sections/DeliveryProcessSection";
import { SubpageTestimonial } from "@/components/sections/SubpageTestimonial";
import { SubpageRelatedNav } from "@/components/sections/SubpageRelatedNav";
import { SubpageFaq } from "@/components/sections/SubpageFaq";
import "./industry-detail.css";

export function generateStaticParams() {
  return allIndustriesList.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = industriesData[slug];
  if (!ind) return { title: "Industry Not Found | mindsCraft" };

  return {
    title: `${ind.heroHeadline} — mindsCraft`,
    description: ind.heroDescription,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = industriesData[slug];

  if (!ind) {
    notFound();
  }

  // Find relevant case studies, fallback to top cases if none explicitly matched
  const matchedCases = allCases.filter(
    (c) =>
      ind.relevantCases.includes(c.slug) ||
      c.industry.toLowerCase().includes(ind.name.toLowerCase())
  );
  const relevantCases = matchedCases.length > 0 ? matchedCases : allCases.slice(0, 4);

  // Sibling industries for cross-navigation
  const relatedIndustries = allIndustriesList
    .filter((i) => i.slug !== slug)
    .slice(0, 3)
    .map((i) => ({
      title: `${i.name} UI/UX Design`,
      badge: i.name,
      desc: i.heroDescription,
      href: `/industries/${i.slug}`,
    }));

  return (
    <>
      <Header />
      <main className="industry-detail-page">
        {/* 1. Page Hero */}
        <PageHero
          badge={`${ind.name} Specialization`}
          title={ind.heroHeadline}
          description={ind.heroDescription}
          stats={ind.metrics}
          primaryCtaText="Start 3-day free trial"
          primaryCtaHref="/pricing#trial"
          secondaryCtaText="Browse case studies"
          secondaryCtaHref="#case-studies"
        />

        {/* 2. Client Logos Social Proof Bar */}
        <ClientMarquee />

        {/* 3. Challenges & Triggers */}
        {ind.challenges && ind.challenges.length > 0 && (
          <SubpageChallengesGrid
            badge="Niche Pain Points"
            title={`We get hired to design, fix or scale ${ind.name} products`}
            subtitle={`Designing high-performing ${ind.name.toLowerCase()} software requires navigating unique friction points, regulatory hurdles, and dense data workflows.`}
            items={ind.challenges}
          />
        )}

        {/* 4. Relevant Case Studies Showcase (Immediately following Triggers) */}
        {relevantCases.length > 0 && (
          <section id="case-studies" className="industry-cases-section">
            <div className="container">
              <div className="section-intro text-center">
                <span className="page-hero__badge">Real Portfolio</span>
                <h2 className="section-title">{ind.name} design work we’ve done</h2>
                <p className="section-subtitle">
                  Real client outcomes, metric jumps, and interface transformations from our {ind.name.toLowerCase()} portfolio.
                </p>
              </div>

              <div className="cases-grid">
                {relevantCases.slice(0, 4).map((c) => (
                  <CaseCard key={c.slug} caseStudy={c} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. Deliverables & Domain Solutions */}
        {ind.solutions && ind.solutions.length > 0 && (
          <SubpageDeliverablesGrid
            badge="mindsCraft Approach"
            title={`We make ${ind.name} products feel effortless`}
            subtitle={`By handling compliance, data density, and user workflows so your product feels fast, intuitive, and trustworthy.`}
            items={ind.solutions}
          />
        )}

        {/* 6. Dedicated Team & Integration ("A design partner you can rely on") */}
        <SubpageTeamIntegration
          badge="Studio Partnership"
          title="A design partner you can rely on"
          subtitle="We don’t assign random freelancers. We run a battle-tested product design process embedded directly into your team."
        />

        {/* 7. 6-Stage Delivery Process */}
        <DeliveryProcessSection />

        {/* 8. Client Testimonial & Social Proof */}
        <SubpageTestimonial
          badge="Client Endorsement"
          title="Rated 4.9 on Clutch by SaaS leaders"
          subtitle={`From solving tough ${ind.name.toLowerCase()} UX challenges to shipping designs quickly, our process is built on trust, velocity, and measurable impact.`}
        />

        {/* 9. Related Expertise Cross-Navigation */}
        {relatedIndustries.length > 0 && (
          <SubpageRelatedNav
            badge="Related Verticals"
            title="Explore related industry expertise"
            subtitle="Discover our specialized design frameworks across adjacent SaaS verticals and complex product domains."
            items={relatedIndustries}
          />
        )}

        {/* 10. Interactive FAQ Accordion */}
        {ind.faqs && ind.faqs.length > 0 && (
          <SubpageFaq
            badge="Common Inquiries"
            title={`${ind.name} design FAQs`}
            subtitle={`Answers to common questions about designing, auditing, and scaling ${ind.name.toLowerCase()} SaaS applications.`}
            faqs={ind.faqs}
          />
        )}

        {/* 11. Pre-Footer Trial CTA Banner */}
        <CtaBanner
          title={`Ready to scale your ${ind.name} product?`}
          subtitle="Experience our dedicated SaaS design model with a risk-free 3-day trial. Cancel anytime with zero lock-in."
          buttonText="Start 3-day free trial"
          buttonHref="/pricing#trial"
        />
      </main>
      <Footer />
    </>
  );
}
