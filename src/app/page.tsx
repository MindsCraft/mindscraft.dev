import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ClientsGrid from '@/components/home/ClientsGrid';
import Services from '@/components/home/Services';
import TwoWaysBand from '@/components/home/TwoWaysBand';
import ToolingBand from '@/components/home/ToolingBand';
import ShippingDiscipline from '@/components/home/ShippingDiscipline';
import FeaturedWork from '@/components/home/FeaturedWork';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';
import CtaBand from '@/components/home/CtaBand';

export const metadata: Metadata = {
  title: 'MindsCraft — AI-First Product Studio · Dhaka · 14+ countries',
  description:
    'We build the digital backbone for businesses that are done being held back by their web stack. Senior-led AI studio shipping fixed-scope projects and monthly retainers from Dhaka to 14+ countries.',
  alternates: { canonical: 'https://mindscraft.dev' },
};

export default function Home() {
  return (
    <main className="ph-shell">
      <Hero />
      <ClientsGrid />
      <Services />
      <TwoWaysBand />
      <ToolingBand />
      <ShippingDiscipline />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <CtaBand />
    </main>
  );
}
