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

interface Blob {
  id: number;
  x: number;
  y: number;
  scale: number;
  color: string;
  duration: number;
  delay: number;
  radius: string;
  xMove1: number;
  xMove2: number;
  yMove1: number;
  yMove2: number;
  endRadius: string;
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
  const [blobs, setBlobs] = useState<Blob[]>([]);

  useEffect(() => {
    setMounted(true);

    // Generate random positions and animations for blobs
    const newBlobs = Array.from({ length: blobCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: 0.8 + Math.random() * 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: duration * (0.8 + Math.random() * 0.4), // Randomize duration slightly
      delay: Math.random() * 5,
      radius: `${Math.random() * 50 + 30}% ${Math.random() * 50 + 30}% ${Math.random() * 50 + 30}% ${Math.random() * 50 + 30}%`,
      // Pre-calculate animation values
      xMove1: (Math.random() - 0.5) * 30,
      xMove2: (Math.random() - 0.5) * 20,
      yMove1: (Math.random() - 0.5) * 30,
      yMove2: (Math.random() - 0.5) * 20,
      endRadius: `${Math.random() * 50 + 25}% ${Math.random() * 50 + 25}% ${Math.random() * 50 + 25}% ${Math.random() * 50 + 25}%`,
    }));

    setBlobs(newBlobs);
  }, [blobCount, colors, duration]);

  if (!mounted || blobs.length === 0) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute rounded-full"
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
              `${blob.xMove1}%`,
              `${blob.xMove2}%`,
              '0%',
            ],
            y: [
              '0%',
              `${blob.yMove1}%`,
              `${blob.yMove2}%`,
              '0%',
            ],
            scale: [1, 1.1, 0.9, 1],
            borderRadius: [
              blob.radius,
              blob.endRadius,
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
