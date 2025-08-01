import Hero from './home/Hero'
import Clients from './home/Clients'
import Work from './home/Work'
import Services from './home/Services'
import About from './home/About'
import Testimonials from './home/Testimonials'
import Blog from './home/Blog'
import Cta from './home/Cta'

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
