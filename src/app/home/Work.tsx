import { workItems } from '@/data/workData'
import Image from 'next/image'
import Link from 'next/link'

export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Selected Work</h2>
        
        <div className="space-y-20">
          {workItems.map((project) => (
            <div key={project.id} className="group">
              <Link href={`/work/${project.id}`}>
                <div className="relative h-[60vh] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                      <p className="text-xl mb-6">{project.category}</p>
                      <span className="inline-block border-2 border-white px-6 py-2 rounded-full">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-lg hover:gap-3 transition-all"
          >
            View all work
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}