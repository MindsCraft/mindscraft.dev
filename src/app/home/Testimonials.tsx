const testimonials = [
  {
    quote: "Working with this team was an absolute pleasure. They delivered beyond our expectations.",
    author: "Jane Smith",
    role: "CEO, Company A"
  },
  {
    quote: "The quality of their work is outstanding. We've seen a significant improvement in our digital presence.",
    author: "John Doe",
    role: "Marketing Director, Company B"
  },
  {
    quote: "Professional, creative, and reliable. Highly recommended for any digital project.",
    author: "Sarah Johnson",
    role: "Product Manager, Company C"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4 text-gray-300">"</div>
              <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}