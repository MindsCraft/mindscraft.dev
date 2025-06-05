'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BlobBackgroundProps {
  className?: string;
  blobCount?: number;
  blobSize?: number;
  colors?: string[];
  opacity?: number;
  duration?: number;
  blur?: number;
}

export default function BlobBackground({
  className = '',
  blobCount = 5,
  blobSize = 300,
  blur = 120,
  colors = ['#93c5fd', '#a5b4fc', '#c7d2fe', '#ddd6fe', '#fbcfe8'],
  opacity = 0.2,
  duration = 15,
}: BlobBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate random positions and animations for blobs
  const blobs = Array.from({ length: blobCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: 0.8 + Math.random() * 0.8,
    color: colors[Math.floor(Math.random() * colors.length)],
    duration: duration * (0.8 + Math.random() * 0.4), // Randomize duration slightly
    delay: Math.random() * 5,
    radius: `${Math.random() * 50 + 30}% ${Math.random() * 50 + 30}% ${Math.random() * 50 + 30}% ${Math.random() * 50 + 30}%`,
  }));

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute rounded-full mix-blend-multiply"
          style={{
            width: `${blobSize}px`,
            height: `${blobSize}px`,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            backgroundColor: blob.color,
            opacity,
            borderRadius: blob.radius,
            filter: `blur(${blur}px)`,
            willChange: 'transform, opacity',
          }}
          animate={{
            x: [
              '0%',
              `${(Math.random() - 0.5) * 30}%`,
              `${(Math.random() - 0.5) * 20}%`,
              '0%',
            ],
            y: [
              '0%',
              `${(Math.random() - 0.5) * 30}%`,
              `${(Math.random() - 0.5) * 20}%`,
              '0%',
            ],
            scale: [1, 1.1, 0.9, 1],
            borderRadius: [
              blob.radius,
              `${Math.random() * 50 + 25}% ${Math.random() * 50 + 25}% ${Math.random() * 50 + 25}% ${Math.random() * 50 + 25}%`,
              blob.radius,
            ],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: blob.delay,
          }}
        />
      ))}
    </div>
  );
}
