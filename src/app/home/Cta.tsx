'use client';

import { Button } from '@/components/ui/button';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function Cta() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to start your project?</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Let's work together to create something amazing. Get in touch to discuss your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* TODO: Update with actual email address */}
          <Button
            variant="accent"
            size="lg"
            href="mailto:hello@mindscraft.dev"
            icon={<FiMail className="w-5 h-5" />}
          >
            hello@mindscraft.dev
          </Button>
          {/* TODO: Update with actual phone number */}
          <Button
            variant="secondary"
            size="lg"
            href="tel:+8801234567890"
            icon={<FiPhone className="w-5 h-5" />}
          >
            +880 1234 567 890
          </Button>
        </div>
      </div>
    </section>
  );
}