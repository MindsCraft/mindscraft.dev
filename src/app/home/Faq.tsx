"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "What can I do with Typewriting AI?",
      answer: "You can create unlimited chatbots, organized by different project names. Manage separate knowledge bases and questionnaires tailored for each project easily."
    },
    {
      question: "How safe are my files and customer responses with Typewriting AI?",
      answer: "Your data is secure. We never use your files or responses for language model training. Everything is stored safely and separately. When you delete a file from your project, it's completely removed from our system."
    },
    {
      question: "How fast and reliable are Typewriting AI's responses?",
      answer: "We use trusted open-source models combined with a Retrieval-Augmented Generation (RAG) layer to provide precise, accurate answers and avoid hallucinations or incorrect info—keeping your customers well-informed."
    },
    {
      question: "Does Typewriting AI support other languages?",
      answer: "Yes! Typewriting AI supports multiple languages and always tries to respond in the same language as your customer."
    },
    {
      question: "What is the difference between free and paid plans?",
      answer: "The free plan includes all features but limits the number of contacts your bots can respond to—up to 30 contacts. Paid plans remove this limit for unlimited contacts."
    },
    {
      question: "What is your Enterprise Plan?",
      answer: "We know enterprises have unique needs that go beyond standard packages. Our team works closely with you to tailor solutions—whether within existing features or with custom additions—to fit your business perfectly."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Typewriting.ai and how it can help your business
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bg-white border ${openItem === index ? 'border-blue-200 shadow-md' : 'border-gray-200'} rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full p-6 text-left font-medium focus:outline-none"
                aria-expanded={openItem === index}
              >
                <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 transition-all duration-300 ${openItem === index ? 'bg-blue-100 text-blue-600 rotate-180' : 'text-gray-500'}`}>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openItem === index ? 'auto' : 0,
                  opacity: openItem === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 text-gray-600 border-t border-gray-100">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="mb-6 text-gray-600 max-w-xl mx-auto">
            Our team is ready to help you with any questions you might have about our platform.
          </p>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <a
              href="https://calendly.com/uddinmoin/typewriting"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2382fc] text-white text-lg font-medium rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Schedule a Call
              <FiCalendar className="ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
