'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { workItems } from '@/data/workData';

// Get unique categories
const categories = ['All', ...new Set(workItems.map(item => item.category))];

// Portfolio projects component
export default function WorkContent() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useCallback(
    () => (activeCategory === 'All'
      ? workItems
      : workItems.filter(project => project.category === activeCategory)),
    [activeCategory]
  )();

  const handleProjectClick = (e: React.MouseEvent | React.KeyboardEvent, projectId: number) => {
    e.preventDefault();
    window.location.href = `/work/${projectId}`;
  };

  const handleExternalLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, projectId: number) => {
    if (e.key === 'Enter') {
      handleProjectClick(e, projectId);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4"
        >
          Our Portfolio
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-800"
        >
          Our Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Explore our portfolio of successful projects and case studies that showcase our expertise in web development, UX design, and AI integration.
        </motion.p>
      </div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 mb-16"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-sm'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            layout
            transition={{
              duration: 0.4,
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1.5"
            onClick={(e) => handleProjectClick(e, project.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, project.id)}
          >
            <Link href={`/work/${project.id}`} className="block">
              <div className="relative h-60 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-blue-600/90 backdrop-blur-sm rounded-full mb-2 shadow-lg">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-gray-200/90 mt-2 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-md text-blue-600 font-medium text-sm">
                    {index + 1}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ml-2 flex-shrink-0">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs font-medium text-gray-700 bg-gray-100/80 rounded-md border border-gray-200 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 text-xs font-medium text-gray-500 bg-gray-100/80 rounded-md border border-gray-200 backdrop-blur-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                    <span className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                      View details
                      <FiArrowRight className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <div className="flex space-x-1">
                      {project.github && project.github !== '#' && (
                        <button
                          onClick={(e) => handleExternalLinkClick(e, project.github!)}
                          className="p-1.5 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
                          aria-label="View source code on GitHub"
                        >
                          <FiGithub className="w-4 h-4" />
                        </button>
                      )}
                      {project.link && project.link !== '#' && (
                        <button
                          onClick={(e) => handleExternalLinkClick(e, project.link!)}
                          className="p-1.5 text-gray-500 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100"
                          aria-label="Visit project website"
                        >
                          <FiExternalLink className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-40 text-center bg-gray-50 p-16 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-200/30"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-200/40"></div>
        </div>

        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4 shadow-sm"
          >
            Ready to Start?
          </motion.span>

          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Have a project in mind?
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Our team of experts is ready to help you create exceptional digital experiences that drive results.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Get in Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Our Services
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
