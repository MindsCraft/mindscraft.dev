'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';

export default function Cta() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Built for the future
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Experience the next generation of web development. Fast, reliable, and beautifully crafted.
            </p>
          </div>
          
          <div className="pt-4">
            <Button
              variant="primary"
              size="xl"
              href="/contact"
              icon={<FiArrowRight className="w-6 h-6" />}
            >
              Experience It
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 pt-2">
            Free consultation • No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
}