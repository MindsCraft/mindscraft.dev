'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    quote: "Working with this team was an absolute pleasure. They delivered beyond our expectations.",
    author: "Jane Smith",
    role: "CEO",
    company: "TechStart Inc."
  },
  {
    quote: "The quality of their work is outstanding. We've seen a significant improvement in our digital presence.",
    author: "John Doe",
    role: "Marketing Director",
    company: "Global Solutions"
  },
  {
    quote: "Professional, creative, and reliable. Highly recommended for any digital project.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "InnovateCo"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" size="sm">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 text-gray-900">What Our Clients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-gray-700 mb-6">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 font-medium text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}