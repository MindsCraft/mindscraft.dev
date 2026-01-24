'use client';

import React, { useState } from 'react';
import Link from 'next/link';


interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  slug: string;
  image?: string;
  imageAlt?: string;
}

interface BlogListProps {
  posts: Post[];
  categories: string[];
}

const POSTS_PER_PAGE = 6;

export default function BlogList({ posts, categories }: BlogListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col h-full p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02]"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4 bg-gray-100">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-400">No image</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-3 self-start">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                <div className="mt-auto pt-2 border-t border-gray-100">
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600">No posts found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg transition-all ${currentPage === page
                ? 'bg-black text-white'
                : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 