'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  speed: number;
  delay: number;
  xOffset: number; // Add xOffset for animation
}

interface ParticleBackgroundProps {
  className?: string;
  particleCount?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
  minSpeed?: number;
  maxSpeed?: number;
}

export default function ParticleBackground({
  className = '',
  particleCount = 50,
  colors = ['#e0f2fe', '#dbeafe', '#e0e7ff', '#ede9fe', '#f5f3ff'],
  minSize = 2,
  maxSize = 6,
  minOpacity = 0.1,
  maxOpacity = 0.5,
  minSpeed = 15,
  maxSpeed = 40,
}: ParticleBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setMounted(true);

    // Generate random particles
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
      speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
      delay: Math.random() * 5,
      xOffset: (Math.random() - 0.5) * 20, // Pre-calculate random x offset
    }));

    setParticles(newParticles);
  }, [particleCount, colors, minSize, maxSize, minOpacity, maxOpacity, minSpeed, maxSpeed]);

  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            y: ['0%', '100%'],
            x: [
              '0%',
              `${particle.xOffset}%`,
            ],
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
