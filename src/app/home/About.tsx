import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a team of passionate designers and developers dedicated to creating exceptional digital experiences.
              Our approach combines creativity with technical excellence to deliver solutions that make a real impact.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With years of experience in the industry, we've helped startups and established companies alike bring their
              ideas to life through thoughtful design and robust development.
            </p>
            <button className="px-6 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition">
              Learn more about us
            </button>
          </div>
          <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-400">Team photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}