'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiGlobe, FiSmartphone, FiLayout, FiTrendingUp } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: FiGlobe,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and scalability.',
    link: '/services/web-development'
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across devices.',
    link: '/services/mobile-apps'
  },
  {
    icon: FiLayout,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that prioritize user experience and drive engagement.',
    link: '/services/ui-ux-design'
  },
  {
    icon: FiTrendingUp,
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies to help your business grow and succeed online.',
    link: '/services/digital-strategy'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            className="inline-flex mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" size="sm">Our Services</Badge>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What We Do
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We deliver comprehensive digital solutions tailored to your business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:shadow-md transition-all">
                  <IconComponent className="w-7 h-7 text-gray-900" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <a
                  href={service.link}
                  className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors group/button"
                >
                  <span>Learn more</span>
                  <FiArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a project in mind? Let's work together.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="#contact"
            icon={<FiArrowRight className="w-5 h-5" />}
          >
            Get in touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
