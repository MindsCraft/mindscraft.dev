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
      title="We Design & Build Digital Products"
      description="We help startups and enterprises create exceptional digital experiences that drive results through thoughtful design and cutting-edge development."
      primaryCta={{
        text: 'Start Your Project',
        href: '#contact'
      }}
      secondaryCta={{
        text: 'View Our Work',
        href: '/work'
      }}
      rightContent={rightContent}
    />
  );
}
