'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GridPosition {
  id: string;
  x: number;
  y: number;
  shape: number;
  size: number;
  rotation: number;
  delay: number;
  shouldRender: boolean;
}

interface GeometricPatternProps {
  className?: string;
  patternColor?: string;
  opacity?: number;
  gridSize?: number;
  animate?: boolean;
}

export default function GeometricPattern({
  className = '',
  patternColor = 'rgba(59, 130, 246, 0.1)', // Light blue color with low opacity
  opacity = 0.1,
  gridSize = 40,
  animate = true,
}: GeometricPatternProps) {
  const [mounted, setMounted] = useState(false);
  const [gridPositions, setGridPositions] = useState<GridPosition[]>([]);

  useEffect(() => {
    // Calculate the number of shapes based on screen size
    const columns = Math.ceil(100 / gridSize);
    const rows = Math.ceil(100 / gridSize);

    // Create an array of grid positions with consistent random values
    const positions: GridPosition[] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        positions.push({
          id: `${row}-${col}`,
          x: col * gridSize,
          y: row * gridSize,
          shape: Math.floor(Math.random() * 3), // 0: circle, 1: square, 2: triangle
          size: 5 + Math.random() * 10,
          rotation: Math.random() * 360,
          delay: Math.random() * 5,
          shouldRender: Math.random() > 0.7, // Only render about 30% of the shapes
        });
      }
    }

    setGridPositions(positions);
    setMounted(true);
  }, [gridSize]);

  // During SSR or before client hydration, return a simple div
  if (!mounted) {
    return <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} />;
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {gridPositions.map((item) => {
        // Skip items that shouldn't be rendered
        if (!item.shouldRender) return null;

        let shape;
        switch (item.shape) {
          case 0: // Circle
            shape = (
              <motion.div
                key={item.id}
                className="absolute rounded-full"
                style={{
                  width: `${item.size}px`,
                  height: `${item.size}px`,
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  backgroundColor: patternColor,
                  opacity,
                }}
                animate={animate ? {
                  scale: [1, 1.2, 1],
                  opacity: [opacity, opacity * 1.5, opacity],
                } : undefined}
                transition={animate ? {
                  duration: 10 + (item.id.charCodeAt(0) % 10), // Deterministic "random" based on id
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: item.delay,
                } : undefined}
              />
            );
            break;
          case 1: // Square
            shape = (
              <motion.div
                key={item.id}
                className="absolute"
                style={{
                  width: `${item.size}px`,
                  height: `${item.size}px`,
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  backgroundColor: patternColor,
                  opacity,
                  transform: `rotate(${item.rotation}deg)`,
                }}
                animate={animate ? {
                  rotate: [item.rotation, item.rotation + 180, item.rotation],
                  opacity: [opacity, opacity * 1.5, opacity],
                } : undefined}
                transition={animate ? {
                  duration: 15 + (item.id.charCodeAt(0) % 15), // Deterministic "random" based on id
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: item.delay,
                } : undefined}
              />
            );
            break;
          case 2: // Triangle (using border trick)
            shape = (
              <motion.div
                key={item.id}
                className="absolute"
                style={{
                  width: 0,
                  height: 0,
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  borderLeft: `${item.size / 2}px solid transparent`,
                  borderRight: `${item.size / 2}px solid transparent`,
                  borderBottom: `${item.size}px solid ${patternColor}`,
                  opacity,
                  transform: `rotate(${item.rotation}deg)`,
                }}
                animate={animate ? {
                  rotate: [item.rotation, item.rotation + 180, item.rotation],
                  opacity: [opacity, opacity * 1.5, opacity],
                } : undefined}
                transition={animate ? {
                  duration: 20 + (item.id.charCodeAt(0) % 10), // Deterministic "random" based on id
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: item.delay,
                } : undefined}
              />
            );
            break;
        }

        return shape;
      })}
    </div>
  );
}
