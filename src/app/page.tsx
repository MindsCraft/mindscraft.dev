export const dynamic = 'force-dynamic'
import Hero from './home/Hero'
import Clients from './home/Clients'
import Work from './home/Work'
import Services from './home/Services'
import Blog from './home/Blog'
import Cta from './home/Cta'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindsCraft - Premium Web Development & UX Design',
  description: 'Transform your digital presence with MindsCraft. We specialize in high-performance web development, modern UX/UI design, and scalable software solutions.',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Work />
      <Services />
      <Blog />
      <Cta />
    </main>
  )
}
