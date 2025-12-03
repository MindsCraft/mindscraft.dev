'use client'

import { workItems } from '@/data/workData'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Work() {
  // Show only first 4 projects on homepage
  const featuredProjects = workItems.slice(0, 4);

  return (
    <section id="work" className="py-12 md:py-16 lg:py-[120px] bg-gray-50 relative">
      {/* Background Element */}
      <div 
        className="absolute left-0 right-0 top-0 w-full h-[800px] -z-0"
        style={{
          background: 'linear-gradient(180deg, #fdff8e, #f9fafb)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} imageOnRight={index % 2 !== 0} />
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
  imageOnRight?: boolean;
}

function ProjectCard({ project, imageOnRight = true }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative bg-white group h-[720px] transition-all duration-300 rounded-[8px] overflow-hidden">
      {/* Dots Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23000000'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Main Card Content */}
      <div className={`grid h-full relative z-[1] ${imageOnRight ? 'md:grid-cols-[40%_60%]' : 'md:grid-cols-[60%_40%]'}`}>
        {/* Project Info (40% width) */}
        <div className={`flex flex-col justify-between py-16 px-8 md:px-12 lg:px-16 h-full relative z-10 ${imageOnRight ? 'order-1' : 'order-2'}`}>
          <div>
            {/* Small label at top */}
            <p className="text-sm text-gray-500 mb-12">
              {project.category}
            </p>

            {/* Project Name */}
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-8">
              {project.title}
            </h3>

            {/* One line about project */}
            <p className="text-base text-gray-400 leading-relaxed mb-10">
              {project.description}
            </p>

            {/* Tags - simple text with spaces */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              {project.technologies?.slice(0, 3).map((tech) => (
                <span key={tech}>
                  {tech.toLowerCase()}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <div>
            <Button variant="secondary" size="lg" href={`/work/${project.id}`}>
              View More
            </Button>
          </div>
        </div>

        {/* Project Image (60% width) */}
        <div className={`relative h-full overflow-hidden ${imageOnRight ? 'order-2' : 'order-1'}`}>
          <div className="absolute left-0 right-0 top-16 bottom-16">
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