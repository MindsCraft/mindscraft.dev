import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';
import { getWorkItem, getRelatedWork } from '@/data/workData';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const work = getWorkItem(Number(resolvedParams.id));

  if (!work) {
    return {
      title: 'Work Not Found',
      description: 'The requested work item could not be found.',
    };
  }

  return {
    title: `${work.title} | Mindscraft Work`,
    description: work.description,
    openGraph: {
      title: work.title,
      description: work.description,
      type: 'article',
      images: [
        {
          url: work.image,
          alt: work.title,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function WorkDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const work = getWorkItem(Number(resolvedParams.id));

  if (!work) {
    notFound();
  }

  const relatedWork = getRelatedWork(work.id, work.category);

  return (
    <article className="min-h-screen bg-[#f0f0ee] pb-32">
      {/* ── Premium Dark Header ── */}
      <div className="bg-[#101828] text-white pt-24 pb-48 px-4 relative overflow-hidden">
        {/* Subtle grid and glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(243,244,192,0.08)_0%,transparent_60%)] -translate-y-1/2 translate-x-1/4 pointer-events-none rounded-full blur-[80px]" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[rgba(255,255,255,0.5)] hover:text-[#F3F4C0] font-semibold text-sm transition-colors mb-10"
          >
            <FiArrowLeft className="w-4 h-4" /> Back to all projects
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#101828] bg-[#F3F4C0] rounded-full mb-6">
                {work.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight text-balance">
                {work.title}
              </h1>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 shrink-0">
              {work.link && work.link !== '#' && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F3F4C0] hover:bg-white text-[#101828] font-bold rounded-full transition-colors"
                >
                  <FiExternalLink className="w-4 h-4" /> Live Site
                </a>
              )}
              {work.github && work.github !== '#' && (
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] text-white font-bold rounded-full transition-colors border border-[rgba(255,255,255,0.1)]"
                >
                  <FiGithub className="w-4 h-4" /> View Code
                </a>
              )}
            </div>
          </div>

          <p className="text-lg md:text-2xl text-[rgba(255,255,255,0.7)] max-w-3xl leading-relaxed">
            {work.description}
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3 mt-8">
            {work.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-xs md:text-sm font-medium text-white/80 bg-white/5 rounded-full border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 -mt-32 relative z-20">
        {/* ── Featured Image ── */}
        <div className="relative aspect-[16/9] w-full mb-12 lg:mb-20 rounded-2xl md:rounded-[32px] overflow-hidden bg-[#101828] border-4 md:border-8 border-white shadow-2xl">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Main Context */}
          <div className="lg:col-span-2 space-y-8 lg:space-y-12">
            <section className="bg-white rounded-[24px] md:rounded-[32px] p-8 md:p-12 shadow-sm border border-black/[0.04]">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#101828] mb-6 tracking-tight">Project Overview</h2>
              <div className="prose prose-lg text-[#101828]/70 leading-relaxed max-w-none">
                <p>{work.content}</p>
              </div>
            </section>

            {/* Challenges */}
            {work.challenges && work.challenges.length > 0 && (
              <section>
                <h3 className="text-2xl font-extrabold text-[#101828] mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#101828] text-[#F3F4C0] flex items-center justify-center text-sm shadow-md">
                    <FiCode />
                  </span>
                  Technical Challenges
                </h3>
                <div className="space-y-4">
                  {work.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-2xl border border-black/[0.04] shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-[#101828] mt-2.5 shrink-0" />
                      <p className="text-[#101828]/80 leading-relaxed font-medium">{challenge}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar (Results & Features) */}
          <div className="space-y-8">
            {work.results && work.results.length > 0 && (
              <div className="bg-[#101828] text-white rounded-[24px] md:rounded-[32px] p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F3F4C0]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-bold mb-6 text-[#F3F4C0]">The Impact</h3>
                <div className="space-y-6 relative z-10">
                  {work.results.map((result, index) => (
                    <div key={index} className="border-l-2 border-[#F3F4C0]/40 pl-4">
                      <p className="text-lg md:text-xl font-medium tracking-tight text-balance leading-snug">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {work.features && work.features.length > 0 && (
              <div className="bg-white rounded-[24px] md:rounded-[32px] p-8 shadow-sm border border-black/[0.04]">
                <h3 className="text-xl font-bold mb-6 text-[#101828]">Key Features</h3>
                <ul className="space-y-4">
                  {work.features.map((feature, index) => (
                    <li key={index} className="flex gap-3 text-[#101828]/70 text-sm md:text-base font-medium">
                      <span className="text-[#101828] font-bold shrink-0">{String(index + 1).padStart(2, '0')}.</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Gallery */}
        {work.images && work.images.length > 1 && (
          <div className="mt-20 lg:mt-32">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#101828] mb-8 tracking-tight text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {work.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="group rounded-2xl md:rounded-[32px] overflow-hidden border-4 border-white shadow-md bg-white relative aspect-[4/3]"
                >
                  <Image
                    src={image}
                    alt={`${work.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Bottom CTA ── */}
        <div className="mt-24 lg:mt-32 p-10 md:p-16 bg-white rounded-[32px] md:rounded-[40px] text-center shadow-lg border border-black/[0.04]">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#101828] bg-[#F3F4C0] rounded-full mb-6 relative z-10">
            Start Your Project
          </span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-[#101828]">
            Like what you see?
          </h3>
          <p className="text-[#101828]/60 mb-10 max-w-2xl mx-auto text-lg leading-relaxed text-balance">
            We work with ambitious founders to build products that scale. Send us an inquiry and let's map out your MVP.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-4 bg-[#101828] hover:bg-black text-white font-bold rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Contact Us To Build It
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
