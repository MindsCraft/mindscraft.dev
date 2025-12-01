'use client';

import ModernHero from '@/components/ui/ModernHero';
import { FiCheck } from 'react-icons/fi';

export default function Hero() {
  // Right side visual content - trust indicators
  const rightContent = (
    <div className="space-y-6">
      <p className="text-sm text-gray-600 font-medium">Trusted by innovative companies</p>
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-gray-700">
          <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
            <FiCheck className="h-5 w-5 text-green-600" />
          </div>
          <span className="text-lg">200+ Projects Delivered</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
            <FiCheck className="h-5 w-5 text-green-600" />
          </div>
          <span className="text-lg">98% Client Satisfaction</span>
        </div>
      </div>
    </div>
  );

  return (
    <ModernHero
      badge="Available for new projects"
      title="Elevate Your Digital Presence with Expert UX Design and AI-Powered Web Development"
      description="As a leading agency in Bangladesh, we deliver scalable solutions for global enterprises and local businesses, blending intuitive UX engineering with cutting-edge AI integrations to drive measurable results."
      primaryCta={{
        text: 'Request a Free Quote',
        href: '#contact'
      }}
      secondaryCta={{
        text: 'View Portfolio',
        href: '/work'
      }}
      rightContent={rightContent}
    />
  );
}
