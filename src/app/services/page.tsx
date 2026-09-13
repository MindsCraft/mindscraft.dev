import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { allServicesList } from "@/content/services-data";
import { ArrowRight } from "lucide-react";
import "./services.css";

export const metadata: Metadata = {
  title: "UI/UX Design Services for SaaS Startups & Scaleups | mindsCraft",
  description:
    "Explore our full suite of SaaS design services: Product Redesign, MVP Design from scratch, Dedicated Team Extension, UX Audits, and Design Systems.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Our Core Capabilities"
          title="UI/UX design services built for SaaS"
          description="We provide comprehensive product design solutions tailored to every stage of your software lifecycle, from early-stage MVP to enterprise scale."
          stats={[
            { stat: "12+", label: "Specialized Service Offerings" },
            { stat: "24 hrs", label: "Designer Kickoff" },
            { stat: "4.9", label: "Clutch Verified Rating" },
          ]}
          primaryCtaText="Get started with a free trial"
          primaryCtaHref="/pricing#trial"
        />

        <section className="services-list-section">
          <div className="container">
            <div className="services-grid">
              {allServicesList.map((service) => (
                <a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="service-card"
                >
                  <span className="service-card__badge">{service.badge}</span>
                  <h2 className="service-card__title">{service.title}</h2>
                  <p className="service-card__desc">{service.heroDescription}</p>

                  <div className="service-card__features">
                    <strong>Deliverables include:</strong>
                    <ul>
                      {service.deliverables.slice(0, 3).map((d, i) => (
                        <li key={i}>{d.title}</li>
                      ))}
                    </ul>
                  </div>

                  <span className="service-card__link">
                    Learn more about {service.badge} <ArrowRight size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title="Not sure which design service is right for you?"
          subtitle="Book a 15-minute discovery call and we'll recommend the ideal engagement for your current roadmap."
          buttonText="Schedule a call"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
