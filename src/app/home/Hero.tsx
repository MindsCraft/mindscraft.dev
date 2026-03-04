'use client';

import ModernHero from '@/components/ui/ModernHero';

export default function Hero() {
  return (
    <ModernHero
      badge="Available for new projects"
      title="Crafting Digital Experiences That Drive Exponential Growth."
      titleHighlight="Drive Exponential Growth."
      description="We engineer premium user experiences and robust web platforms to scale your business — combining hyper-modern aesthetics with powerful AI integrations for forward-thinking enterprises."
      primaryCta={{ text: 'Request a Free Quote', href: '#contact' }}
      secondaryCta={{ text: 'View Portfolio', href: '/work' }}
    />
  );
}
