import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';
import { getWorkItem, getRelatedWork } from '@/data/workData';
import { workItems } from '@/data/workData';

export function generateStaticParams() {
  return workItems.map((item) => ({
    id: item.id.toString(),
  }));
}

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
    <div className="min-h-screen bg-white">
      {/* Back button */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/work"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
        >
          <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
      </div>

      {/* Hero section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-5 shadow-sm">
              {work.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-800">
              {work.title}
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              {work.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {work.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white rounded-full shadow-sm border border-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project links */}
            <div className="flex justify-center gap-4 mt-8">
              {work.link && work.link !== '#' && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  <FiExternalLink className="mr-2" />
                  Visit Project
                </a>
              )}
              {work.github && work.github !== '#' && (
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  <FiGithub className="mr-2" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Main image with overlay */}
          <div className="rounded-xl overflow-hidden mb-16 shadow-xl border border-gray-100 relative group">
            <Image
              src={work.image}
              alt={work.title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="w-full p-6 text-white">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Project Showcase</span>
                  <span className="text-sm">{work.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Project Overview</h2>
            <p className="text-gray-700">{work.content}</p>

            {work.features && work.features.length > 0 && (
              <div className="mt-16">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {work.features.map((feature, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {work.challenges && work.challenges.length > 0 && (
              <div className="mt-16 p-8 bg-gray-50 rounded-xl border border-gray-100 shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Challenges We Overcame</h3>
                </div>
                <div className="space-y-4 mt-6">
                  {work.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-amber-600 mr-3 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {work.results && work.results.length > 0 && (
              <div className="mt-16">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Results & Impact</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {work.results.map((result, index) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        <div className="h-px flex-grow bg-blue-200/50"></div>
                      </div>
                      <p className="font-medium text-gray-800 text-lg">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Additional images */}
          {work.images && work.images.length > 0 && (
            <div className="mt-24">
              <div className="flex items-center justify-center mb-10">
                <div className="h-px w-12 bg-gray-300 mr-4"></div>
                <h3 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-800">Project Gallery</h3>
                <div className="h-px w-12 bg-gray-300 ml-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {work.images.map((image, index) => (
                  <div
                    key={index}
                    className="group rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-blue-200"
                  >
                    <div className="relative">
                      <Image
                        src={image}
                        alt={`${work.title} screenshot ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-medium">Screenshot {index + 1}</span>
                      </div>
                      <div className="absolute top-3 right-3 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to action */}
          <div className="mt-32 p-12 bg-gray-50 rounded-3xl text-center shadow-lg border border-gray-100 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-200/30"></div>
              <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-200/40"></div>
              <div className="absolute top-1/2 left-1/4 w-6 h-6 rounded-full bg-blue-400/20"></div>
              <div className="absolute bottom-1/4 right-1/3 w-8 h-8 rounded-full bg-indigo-400/20"></div>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4 shadow-sm">
                Ready to Collaborate?
              </span>

              <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Like what you see?
              </h3>

              <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
                Interested in working together or have a project in mind? Our team of experts is ready to help you create exceptional digital experiences that drive results.
              </p>

              <div className="flex flex-wrap justify-center gap-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact Us
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center px-8 py-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-xl text-gray-800"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  View More Work
                </Link>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                We typically respond within 24 hours
              </p>
            </div>
          </div>

          {/* Related work */}
          {relatedWork.length > 0 && (
            <div className="mt-32">
              <div className="flex items-center justify-center mb-12">
                <div className="h-px w-12 bg-gray-300 mr-4"></div>
                <h3 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-800">Related Projects</h3>
                <div className="h-px w-12 bg-gray-300 ml-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {relatedWork.map((item) => (
                  <Link
                    key={item.id}
                    href={`/work/${item.id}`}
                    className="group block"
                  >
                    <div className="rounded-xl overflow-hidden mb-6 shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-200 transform group-hover:-translate-y-2">
                      <div className="relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div>
                            <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full mb-2 shadow-sm">
                              {item.category}
                            </span>
                            <p className="text-white font-medium text-lg">View Project</p>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 mt-1">{item.category}</p>
                      </div>
                      <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                        #{item.id}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/work"
                  className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  View All Projects
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
