import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { CasesGallery } from "@/components/marketing/CasesGallery";
import { TrialSection } from "@/components/sections/TrialSection";

export const metadata: Metadata = {
  title: "UX Case Studies for Every SaaS Niche | mindsCraft",
  description:
    "Explore our collection of 70+ SaaS UX case studies across AI, Fintech, DevTools, Data, Healthcare, and B2B platforms. See real transformations, metrics, and outcomes.",
};

export default function CasesPage() {
  return (
    <>
      <Header />
      <main>
        <CasesGallery />
        <div id="trial">
          <TrialSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
