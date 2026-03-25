'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiClock, FiArrowRight } from 'react-icons/fi';

interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  image?: string;
  imageAlt?: string;
}

interface BlogCardProps {
  post: Post;
  index?: number;
}

const lightCategoryColors: Record<string, { bg: string; text: string }> = {
  'AI & SaaS': { bg: 'rgba(16,24,40,0.07)', text: '#101828' },
  'Web Development': { bg: 'rgba(16,24,40,0.06)', text: '#101828' },
  'UX & CRO': { bg: 'rgba(5,150,105,0.08)', text: '#065f46' },
  'Performance': { bg: 'rgba(109,40,217,0.08)', text: '#5b21b6' },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const lc = lightCategoryColors[post.category] ?? { bg: 'rgba(16,24,40,0.06)', text: '#101828' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link href={`/blog/${post.slug}`} className="blg-card">
        {/* Image */}
        <div className="blg-card-image">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="blg-card-img-el"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="blg-card-img-placeholder" />
          )}
        </div>

        {/* Body */}
        <div className="blg-card-body">
          <span
            className="blg-card-cat"
            style={{ background: lc.bg, color: lc.text }}
          >
            {post.category}
          </span>
          <h3 className="blg-card-title">{post.title}</h3>
          <p className="blg-card-desc">{post.description}</p>
          <div className="blg-card-footer">
            <div className="blg-card-meta">
              <FiClock className="blg-meta-icon blg-meta-icon--dark" />
              <span>{post.readTime}</span>
              <span className="blg-meta-sep blg-meta-sep--dark">·</span>
              <span>{formatDate(post.date)}</span>
            </div>
            <span className="blg-card-read">
              Read <FiArrowRight className="blg-card-arrow" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
