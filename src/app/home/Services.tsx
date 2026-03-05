'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FiArrowUpRight, FiGlobe, FiSmartphone, FiLayout, FiTrendingUp,
} from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    number: '01',
    icon: FiGlobe,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and scalability.',
    link: '/services',
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript'],
  },
  {
    number: '02',
    icon: FiSmartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across devices.',
    link: '/services',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    number: '03',
    icon: FiLayout,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that prioritize user experience and drive real engagement.',
    link: '/services',
    tags: ['Figma', 'UX Research', 'Prototyping', 'Design Systems'],
  },
  {
    number: '04',
    icon: FiTrendingUp,
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies to help your business grow and succeed online.',
    link: '/services',
    tags: ['SEO', 'Analytics', 'Growth', 'Consulting'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section Header ── */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="inline-flex mb-3">
              <Badge variant="default" size="sm">Our Services</Badge>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              What We Do
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-base leading-relaxed md:text-right">
            Comprehensive digital solutions tailored to your business — from concept to launch.
          </p>
        </motion.div>

        {/* ── Service Rows ── */}
        <div>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="border-b border-gray-100 last:border-b-0"
              >
                <Link
                  href={service.link}
                  className="group flex items-center gap-6 md:gap-12 py-9 md:py-11 px-6 -mx-6 rounded-2xl transition-all duration-300 hover:px-8"
                  style={{
                    '--hover-bg': 'var(--btn-navy-primary)',
                  } as React.CSSProperties}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--btn-navy-primary)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = '';
                  }}
                >
                  {/* Number */}
                  <span
                    className="text-5xl md:text-6xl font-black select-none shrink-0 w-16 transition-colors duration-300 text-gray-150 group-hover:text-white/15"
                    style={{ color: '#e8e8e8' }}
                  >
                    {service.number}
                  </span>

                  {/* Title + Tags */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300 text-gray-900 group-hover:text-[var(--btn-cream)]"
                    >
                      {service.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-gray-400 transition-colors duration-300 group-hover:text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description — desktop only */}
                  <p className="hidden xl:block text-sm text-gray-500 max-w-[260px] leading-relaxed transition-colors duration-300 group-hover:text-white/60 shrink-0">
                    {service.description}
                  </p>

                  {/* Icon + Arrow */}
                  <div className="flex items-center gap-3 shrink-0 ml-auto">
                    <div className="w-12 h-12 rounded-full border border-gray-200 group-hover:border-white/25 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-5 h-5 text-gray-400 transition-colors duration-300 group-hover:text-[var(--btn-cream)]" />
                    </div>
                    <FiArrowUpRight className="w-6 h-6 text-gray-300 transition-all duration-300 group-hover:text-[var(--btn-cream)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className="mt-14 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.25 }}
        >
          <p className="text-gray-500 text-base">
            Have a project in mind?{' '}
            <span className="text-gray-900 font-medium">Let's build it together.</span>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-full transition-all duration-300 hover:opacity-90 hover:gap-3"
            style={{ backgroundColor: 'var(--btn-navy-primary)', color: 'var(--btn-cream)' }}
          >
            Start a project <FiArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
