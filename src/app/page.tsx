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
    canonical: 'https://mindscraft.dev',
  },
  openGraph: {
    title: 'MindsCraft - Premium Web Development & UX Design',
    description: 'Transform your digital presence with MindsCraft. We specialize in high-performance web development, modern UX/UI design, and scalable software solutions.',
    url: 'https://mindscraft.dev',
    siteName: 'MindsCraft',
    type: 'website',
    images: [{ url: 'https://mindscraft.dev/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindsCraft - Premium Web Development & UX Design',
    description: 'Transform your digital presence with MindsCraft. We specialize in high-performance web development, modern UX/UI design, and scalable software solutions.',
    images: ['https://mindscraft.dev/images/og-image.png'],
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
