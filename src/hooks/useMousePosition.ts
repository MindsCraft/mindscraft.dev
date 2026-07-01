'use client';

import { useEffect } from 'react';
import { useMotionValue, type MotionValue } from 'framer-motion';

/**
 * Track normalized [redacted] position relative to the viewport center.
 * Returns `MotionValue`s in the range [-1, 1] so consumers can plug them
 * straight into `useTransform`, `useMotionTemplate`, etc.
 *
 * Skips updates when the user prefers reduced motion or uses a coarse
 * pointer. In those cases the motion values stay at 0 and effectively
 * disable any downstream parallax / magnetic effect.
 */
export function useMousePosition(): {
  x: MotionValue<number>;
  y: MotionValue<number>;
} {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReduced || coarsePointer) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      targetX = (e.clientX / w) * 2 - 1;
      targetY = (e.clientY / h) * 2 - 1;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      x.set(currentX);
      y.set(currentY);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [x, y]);

  return { x, y };
}