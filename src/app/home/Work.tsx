'use client'

import { workItems } from '@/data/workData'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Work() {
  // Show only first 4 projects on homepage
  const featuredProjects = workItems.slice(0, 4);

  return (
    <section id="work" className="py-12 md:py-16 lg:py-[120px] bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 items-end">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900">
              Transforming Ideas into Digital Excellence
            </h2>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-lg text-gray-600">
              Explore our portfolio of successful projects that have helped businesses grow, engage users, and achieve measurable results.
            </p>
          </div>
        </div>

        {/* Portfolio List - 1 card per row */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-[rgb(15,23,42)] text-white px-8 py-4 font-medium"
          >
            View All Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: typeof workItems[0];
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative bg-white group h-[720px] transition-all duration-300 rounded-[8px] overflow-hidden">
      {/* Main Card Content */}
      <div className="grid md:grid-cols-[1fr_2fr] h-full">
        {/* Left: Project Info (1/3 width) */}
        <div className="flex flex-col justify-center p-10 md:p-14 h-full relative z-10">
          {/* Project Name */}
          <h3 className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-900 mb-6 tracking-tight">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-gray-600 mb-8 text-lg leading-relaxed line-clamp-4 font-medium">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="inline-block border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-900 rounded-full">
              {project.category}
            </span>
            {project.technologies?.slice(0, 2).map((tech) => (
              <span key={tech} className="inline-block border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-600 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Project Image (2/3 width) */}
        <div className="relative h-full overflow-hidden">
          <div className="absolute left-0 right-0 top-20 bottom-20">
            <div className="relative w-full h-full overflow-hidden ">
              <Image
                src={project.images?.[0] || project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Expand/Close Button - Positioned on main card */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center z-20 transition-all duration-300 group/btn"
        style={{
          backgroundColor: 'rgba(15, 23, 42, 0.3)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)'
        }}
        aria-label={isExpanded ? "Close details" : "Expand details"}
      >
        <div className={`relative w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}>
          {/* Vertical line */}
          <span className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white transition-colors duration-300 group-hover/btn:bg-[#F3F4C0]" />
          {/* Horizontal line */}
          <span className="absolute top-1/2 left-0 -translate-y-1/2 h-[2px] w-full bg-white transition-colors duration-300 group-hover/btn:bg-[#F3F4C0]" />
        </div>
      </button>

      {/* Expanded Overlay */}
      <div
        className={`absolute inset-0 bg-white z-10 overflow-y-auto transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
          }`}
      >
        <div className="p-8 md:p-12 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {project.content}
            </p>

            {/* Project Images Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {project.images?.map((img, idx) => (
                <div key={idx} className="relative h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={`${project.title} - Image ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Features */}
              {project.features && (
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Key Features</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[rgb(15,23,42)] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Results */}
              {project.results && (
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Impact & Results</h4>
                  <ul className="space-y-3">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[rgb(15,23,42)] flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}