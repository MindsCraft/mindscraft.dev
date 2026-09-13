import React from "react";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ThesisSection } from "@/components/sections/ThesisSection";
import { ProblemSolutionTrio } from "@/components/sections/ProblemSolutionTrio";
import { CaseMetricsSection } from "@/components/sections/CaseMetricsSection";
import { VerticalsBand } from "@/components/sections/VerticalsBand";
import { TrialSection } from "@/components/sections/TrialSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StandardsSection } from "@/components/sections/StandardsSection";
import { OnboardingSection } from "@/components/sections/OnboardingSection";
import { DeliveryProcessSection } from "@/components/sections/DeliveryProcessSection";
import { MidCtaSection } from "@/components/sections/MidCtaSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { DisqualifierSection } from "@/components/sections/DisqualifierSection";
import { FitMatrixSection } from "@/components/sections/FitMatrixSection";
import { FinalPitchSection } from "@/components/sections/FinalPitchSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FaqSection } from "@/components/sections/FaqSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ThesisSection />
        <ProblemSolutionTrio />
        <CaseMetricsSection />
        <VerticalsBand />
        <TrialSection />
        <ComparisonSection />
        <TestimonialsSection />
        <StandardsSection />
        <OnboardingSection />
        <DeliveryProcessSection />
        <MidCtaSection />
        <PrinciplesSection />
        <DisqualifierSection />
        <FitMatrixSection />
        <FinalPitchSection />
        <BlogSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
