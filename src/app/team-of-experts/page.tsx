import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { teamData } from "@/content/team-data";
import "./team.css";

export const metadata: Metadata = {
  title: "Team of Experts — SaaS Product Designers | mindsCraft",
  description:
    "Meet our senior UI/UX designers, design directors, and UX architects with specialized expertise in complex B2B software.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Product Design Talent"
          title="Our Team of Experts"
          description="Every designer on our team has years of focused experience designing dashboards, data workflows, and complex SaaS applications."
          stats={[
            { stat: "100%", label: "Senior Level Specialists" },
            { stat: "200+", label: "Products Shipped" },
            { stat: "4.9", label: "Clutch Verified Rating" },
          ]}
        />

        <section className="team-grid-section">
          <div className="container">
            <div className="team-grid">
              {teamData.map((member) => (
                <div key={member.name} className="team-card">
                  <div className="team-card__image-wrap">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      loading="lazy"
                      className="team-card__image"
                    />
                  </div>
                  <div className="team-card__content">
                    <span className="team-card__exp">{member.experience}</span>
                    <h3 className="team-card__name">{member.name}</h3>
                    <p className="team-card__role">{member.role}</p>
                    <div className="team-card__spec">
                      <strong>Specialization:</strong> {member.specialization}
                    </div>
                    <p className="team-card__bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner
          title="Work with our top product designers"
          subtitle="Get a dedicated senior designer matched to your exact product niche with a 3-day free trial."
          buttonText="Start 3-day trial"
          buttonHref="/pricing#trial"
        />
      </main>
      <Footer />
    </>
  );
}
