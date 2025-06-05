export default function Cta() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your project?</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Let's work together to create something amazing. Get in touch to discuss your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:hello@example.com" 
            className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 inline-flex items-center justify-center gap-2 text-lg font-medium"
          >
            hello@example.com
          </a>
          <a 
            href="tel:+1234567890" 
            className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black inline-flex items-center justify-center gap-2 text-lg font-medium"
          >
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </section>
  )
}