'use client'

import { workItems } from '@/data/workData'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { Badge } from '@/components/ui/badge'


// Add year & category label to each project
const projectMeta: Record<number, { year: string; label: string }> = {
  1: { year: '2024', label: 'E-commerce Platform' },
  2: { year: '2024', label: 'SaaS Dashboard' },
  3: { year: '2023', label: 'AI Integration' },
  4: { year: '2024', label: 'Mobile Banking App' },
  5: { year: '2023', label: 'EdTech Platform' },
}

export default function Work() {
  const featuredProjects = workItems.slice(0, 4);

  return (
    <section id="work" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section Header ── */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-4">
            {/* Label row */}
            <div className="inline-flex mb-2">
              <Badge variant="default" size="sm">Our Work</Badge>
            </div>
            {/* Serif heading */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-gray-900 leading-tight">
              Transforming Ideas into<br />
              Digital Excellence
            </h2>
            {/* Subtitle */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              A curated selection of projects that define our craft — built with precision, purpose, and measurable impact.
            </p>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-500 hover:text-gray-900 transition-colors pb-1 shrink-0"
          >
            View All Projects
            <FiArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* ── Project Rows ── */}
        <div>
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const imgSrc = project.image || project.images?.[0] || '';
            const meta = projectMeta[project.id] ?? { year: '2024', label: project.category };

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="border-b border-gray-100 last:border-b-0"
              >
                <Link
                  href={`/work/${project.id}`}
                  className={`group flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 lg:gap-16 py-14 md:py-16`}
                >

                  {/* ── IMAGE inside gray container ── */}
                  <div className="w-full md:w-[52%] shrink-0">
                    <div className="bg-gray-100 rounded-2xl p-4 md:p-5 transition-all duration-500 group-hover:bg-gray-150">
                      <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: '4/3' }}>
                        <Image
                          src={imgSrc}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 52vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ── CONTENT ── */}
                  <div className="flex flex-col gap-5 w-full md:w-[48%]">

                    {/* Year + Category label */}
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="font-semibold tabular-nums">{meta.year}</span>
                      <span className="text-gray-300">·</span>
                      <span className="font-bold uppercase tracking-widest">{meta.label}</span>
                    </div>

                    {/* Title — serif */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags — outlined uppercase pills */}
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.technologies?.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-bold uppercase tracking-widest border border-gray-300 text-gray-500 px-3 py-1.5 rounded-full transition-colors group-hover:border-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-gray-600 transition-colors">
                        View Case Study
                      </span>
                      <FiArrowUpRight className="w-4 h-4 text-gray-900 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  )
}