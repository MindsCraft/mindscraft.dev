'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxLayerData {
  id: number;
  image: string;
  speed: number;
  opacity: number;
  scale: number;
}

interface ParallaxLayerProps {
  layer: ParallaxLayerData;
  scrollY: any;
}

// Separate component for each layer to properly encapsulate hooks
function ParallaxLayerComponent({ layer, scrollY }: ParallaxLayerProps) {
  // Move useTransform hook to the top level of this component
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * layer.speed]);

  return (
    <motion.div
      key={layer.id}
      className="absolute inset-0"
      style={{
        backgroundImage: `url("${layer.image}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: `${layer.scale * 100}px`,
        opacity: layer.opacity,
        y,
      }}
    />
  );
}

interface ParallaxBackgroundProps {
  className?: string;
  layers?: ParallaxLayerData[];
}

export default function ParallaxBackground({
  className = '',
  layers = [
    {
      id: 1,
      image: "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' fill='%233B82F6' fill-opacity='0.2'/%3E%3C/svg%3E",
      speed: 0.2,
      opacity: 0.3,
      scale: 1.5,
    },
    {
      id: 2,
      image: "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='20' y='20' width='60' height='60' fill='%233B82F6' fill-opacity='0.2'/%3E%3C/svg%3E",
      speed: 0.4,
      opacity: 0.35,
      scale: 2,
    },
    {
      id: 3,
      image: "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 15 L85 85 L15 85 Z' fill='%233B82F6' fill-opacity='0.2'/%3E%3C/svg%3E",
      speed: 0.6,
      opacity: 0.3,
      scale: 2.5,
    },
  ],
}: ParallaxBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {layers.map((layer) => (
        <ParallaxLayerComponent
          key={layer.id}
          layer={layer}
          scrollY={scrollY}
        />
      ))}
    </div>
  );
}
