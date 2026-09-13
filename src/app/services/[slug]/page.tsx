import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData, allServicesList } from "@/content/services-data";
import { allCases } from "@/content/all-cases";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { ServiceHero } from "@/components/marketing/ServiceHero";
import { CaseCard } from "@/components/marketing/CaseCard";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { ServiceUseCasesSection } from "@/components/sections/ServiceUseCasesSection";
import { SubpageDeliverablesGrid } from "@/components/sections/SubpageDeliverablesGrid";
import { ServicePlansSection } from "@/components/sections/ServicePlansSection";
import { ServicePartnerComparison } from "@/components/sections/ServicePartnerComparison";
import { ServiceApproachSection } from "@/components/sections/ServiceApproachSection";
import { DeliveryProcessSection } from "@/components/sections/DeliveryProcessSection";
import { SubpageTeamIntegration } from "@/components/sections/SubpageTeamIntegration";
import { SubpageTestimonial } from "@/components/sections/SubpageTestimonial";
import { SubpageRelatedNav } from "@/components/sections/SubpageRelatedNav";
import { ServiceTrialStepsSection } from "@/components/sections/ServiceTrialStepsSection";
import { SubpageFaq } from "@/components/sections/SubpageFaq";
import "./service-detail.css";

export function generateStaticParams() {
  return allServicesList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: "Service Not Found | mindsCraft" };

  return {
    title: `${service.title} — mindsCraft`,
    description: service.heroDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  // Find relevant case studies, fallback to top cases if none explicitly tagged
  const matchedCases = allCases.filter((c) =>
    service.relevantCases.includes(c.slug)
  );
  const relevantCases = matchedCases.length > 0 ? matchedCases : allCases.slice(0, 4);

  // Sibling services for cross-navigation
  const relatedServices = allServicesList
    .filter((s) => s.slug !== slug)
    .slice(0, 3)
    .map((s) => ({
      title: s.title,
      badge: s.badge,
      desc: s.heroDescription,
      href: `/services/${s.slug}`,
    }));

  return (
    <>
      <Header />
      <main className="service-detail-page">
        {/* 1. Page Hero with Breadcrumbs & Visual Showcase */}
        <ServiceHero
          badge={service.badge}
          title={service.heroHeadline}
          description={service.heroDescription}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
          primaryCtaText="Start 3-day free trial"
          primaryCtaHref="/pricing#trial"
          secondaryCtaText="Check portfolio"
          secondaryCtaHref="#case-studies"
          visualShowcase={service.visualShowcase}
        />

        {/* Use Cases ("This is when SaaS teams come to us") */}
        <ServiceUseCasesSection
          eyebrow="Use cases"
          title="This is when SaaS teams come to us"
          subtitle="Every redesign has a trigger. Here are the six situations our SaaS redesign studio knows best— and what we do about each one."
        />

        {/* 4. Proven Case Studies Showcase (Immediately following Triggers) */}
        {relevantCases.length > 0 && (
          <section id="case-studies" className="service-cases-section">
            <div className="container">
              <div className="section-intro text-center">
                <span className="page-hero__badge">Proven Results</span>
                <h2 className="section-title">We’ve helped improve and scale 200+ SaaS products</h2>
                <p className="section-subtitle">
                  When your product is easy to use, the results speak for themselves. Explore real metric jumps and interface transformations.
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

        {/* 5. Scope & Deliverables Matrix ("What's included in UI/UX redesign") */}
        {service.deliverables && service.deliverables.length > 0 && (
          <SubpageDeliverablesGrid
            badge="What's Included"
            title={`Scope and deliverables of ${service.badge} services`}
            subtitle="One clear scope covering everything from user research to production-ready design tokens and engineering handoff."
            items={service.deliverables}
          />
        )}

        {/* 6 & 7. Pricing & Engagement Model / Capacity Plans */}
        <ServicePlansSection />

        {/* 8. Partner Comparison ("Why mindsCraft vs Agencies, Freelancers, In-House") */}
        <ServicePartnerComparison />

        {/* 9. Approach Options ("Complete makeover vs Iterative changes") */}
        <ServiceApproachSection />

        {/* 10. SaaS Redesign Process Explained */}
        <DeliveryProcessSection />

        {/* 11. Dedicated Team & Quality Standards */}
        <SubpageTeamIntegration
          badge="Quality Standards"
          title="No surprises. Just great UI/UX redesign services, every time"
          subtitle="At mindsCraft, we don’t leave things to chance. All our designers are in-house trained specialists, not random freelancers."
        />

        {/* 12. Clutch Average & Testimonials */}
        <SubpageTestimonial
          badge="Client Endorsement"
          title="4.9 is our Clutch average"
          subtitle="Here’s what SaaS founders and product teams had to say about their experience working with us."
        />

        {/* 13. Related Solutions Cross-Navigation */}
        {relatedServices.length > 0 && (
          <SubpageRelatedNav
            badge="Related Disciplines"
            title="Explore more product design solutions we offer"
            subtitle="Discover our specialized design frameworks across team extension, UX audits, and design systems."
            items={relatedServices}
          />
        )}

        {/* 14. 3-Day Trial Breakdown */}
        <ServiceTrialStepsSection />

        {/* 15. Frequently Asked Questions */}
        {service.faqs && service.faqs.length > 0 && (
          <SubpageFaq
            badge="Clear Answers"
            title="Frequently asked questions"
            subtitle="Everything you need to know about our workflow, 3-day trial, and subscription terms."
            faqs={service.faqs}
          />
        )}

        {/* 16. Pre-Footer Conversion Banner */}
        <CtaBanner
          title={`Ready to revamp your SaaS?`}
          subtitle="With our subscription-based product redesign studio, you get autonomous full-time SaaS designers for a fixed monthly fee."
          buttonText="Start 3-day free trial"
          buttonHref="/pricing#trial"
        />
      </main>
      <Footer />
    </>
  );
}
