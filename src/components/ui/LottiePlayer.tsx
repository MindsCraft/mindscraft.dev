"use client";

import React, { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";

export interface LottiePlayerProps {
  animationPath?: string;
  animationData?: Record<string, unknown>;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const LottiePlayer: React.FC<LottiePlayerProps> = ({
  animationPath,
  animationData,
  loop = true,
  autoplay = true,
  className,
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    let isMounted = true;

    const initLottie = async () => {
      try {
        const lottieModule = await import("lottie-web");
        const lottie = lottieModule.default || lottieModule;

        if (!isMounted || !containerRef.current) return;

        let data = animationData;
        if (!data && animationPath) {
          const res = await fetch(animationPath);
          if (!res.ok) return;
          data = await res.json();
        }

        if (!isMounted || !containerRef.current || !data) return;

        if (animRef.current) {
          animRef.current.destroy();
        }

        animRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop,
          autoplay,
          animationData: data,
        });
      } catch (err) {
        console.warn("Lottie player error:", err);
      }
    };

    initLottie();

    return () => {
      isMounted = false;
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, [animationPath, animationData, loop, autoplay]);

  return <div ref={containerRef} className={className} style={style} />;
};
