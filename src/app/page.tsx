import Hero from './home/Hero'
import Clients from './home/Clients'
import Work from './home/Work'
import Services from './home/Services'
import About from './home/About'
import Testimonials from './home/Testimonials'
import Blog from './home/Blog'
import Cta from './home/Cta'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindsCraft - Premium Web Development & UX Design',
  description: 'Transform your digital presence with MindsCraft. We specialize in high-performance web development, modern UX/UI design, and scalable software solutions.',
  alternates: {
    canonical: 'https://mindscraft.dev',
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Work />
      <Services />
      <About />
      <Testimonials />
      <Blog />
      <Cta />
    </main>
  )
}
