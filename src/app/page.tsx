import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ClientsGrid from '@/components/home/ClientsGrid';
import Services from '@/components/home/Services';
import FeaturedWork from '@/components/home/FeaturedWork';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';
import CtaBand from '@/components/home/CtaBand';

export const metadata: Metadata = {
  title: 'MindsCraft — AI-First Product Studio',
  description:
    'Senior-led AI studio shipping AI integrations, AI-augmented SaaS, and AI MVPs for funded founders. Fixed scope. Fixed price. 2–8 weeks. From $5,000.',
  alternates: { canonical: 'https://mindscraft.dev' },
};

export default function Home() {
  return (
    <main className="ph-shell">
      <Hero />
      <ClientsGrid />
      <Services />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <CtaBand />
    </main>
  );
}
