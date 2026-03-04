const posts = [
  {
    title: "The Future of Web Design",
    excerpt: "Exploring the latest trends and technologies shaping the future of web design.",
    date: "May 15, 2023",
    category: "Design"
  },
  {
    title: "Getting Started with Next.js",
    excerpt: "A beginner's guide to building modern web applications with Next.js.",
    date: "April 28, 2023",
    category: "Development"
  },
  {
    title: "Mobile First Approach",
    excerpt: "Why designing for mobile first leads to better user experiences.",
    date: "April 10, 2023",
    category: "UI/UX"
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Latest from the Blog</h2>
          <a href="/blog" className="text-black hover:underline">View all posts</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={`https://images.unsplash.com/photo-${index === 0 ? '1618761714954-0b8cd0026356' : index === 1 ? '1555066931-4365d14bab8c' : '1512941937669-90a1b58e7e9c'}?auto=format&fit=crop&q=80&w=600`}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors leading-tight">{post.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">{post.date}</span>
                  <span className="text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Read More <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}