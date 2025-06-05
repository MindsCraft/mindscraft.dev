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
             <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
               <div className="h-48 bg-gray-200"></div>
               <div className="p-6">
                 <span className="text-sm text-gray-500">{post.category}</span>
                 <h3 className="text-xl font-bold my-2">{post.title}</h3>
                 <p className="text-gray-600 mb-4">{post.excerpt}</p>
                 <span className="text-sm text-gray-500">{post.date}</span>
               </div>
             </article>
           ))}
         </div>
       </div>
     </section>
   )
 }