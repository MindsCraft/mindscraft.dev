'use client';

import React from 'react';
import Image from 'next/image';

const LOGOS = [
  { name: 'SDC', src: '/content/clients/SDC.png' },
  { name: 'TAGNPAC', src: '/content/clients/TAGNPAC.png' },
  { name: 'AppStar', src: '/content/clients/appstar.png' },
  { name: 'As-Sunnah', src: '/content/clients/as-sunnah.png' },
  { name: 'Balloon', src: '/content/clients/balloon.png' },
  { name: 'Bdot', src: '/content/clients/bdot-color.png' },
  { name: 'Capital FM', src: '/content/clients/capitalfm.png' },
  { name: 'Chkware', src: '/content/clients/chkware.png' },
  { name: 'CyberZ', src: '/content/clients/cyberz.png' },
  { name: 'Eloylab', src: '/content/clients/eloylab.png' },
  { name: 'MLBD', src: '/content/clients/mlbd.png' },
  { name: 'MLES', src: '/content/clients/mles.png' },
  { name: 'Monta', src: '/content/clients/monta.png' },
  { name: 'Namco', src: '/content/clients/namco 1.png' },
  { name: 'Neom', src: '/content/clients/neom.png' },
  { name: 'Nspec', src: '/content/clients/nspec-logo.png' },
  { name: 'Pocket', src: '/content/clients/pocket.png' },
  { name: 'Prayers', src: '/content/clients/prayers.png' },
  { name: 'Sagawa', src: '/content/clients/sagawa.png' },
  { name: 'Sunstar', src: '/content/clients/sunstar-logo.png' },
  { name: 'Taikyo', src: '/content/clients/taikyo.png' },
  { name: 'Tokup', src: '/content/clients/tokup.png' },
  { name: 'Typewriting', src: '/content/clients/typewriting.png' },
];

export default function Clients() {
  return (
    <section className="py-12 md:py-16 lg:py-[120px] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 mb-6">
          <span className="text-sm font-medium text-gray-600">Trusted Partners</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900 mb-6">
          Trusted by Industry Leaders.
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We have collaborated with forward-thinking organizations across global enterprises to create impactful UX designs, AI-integrated developments, and scalable web solutions that drive success.
        </p>
      </div>

      <div className="w-full">
        <StackedGrid />
      </div>
    </section>
  );
}

function StackedGrid() {
  // Split logos into 2 rows
  const midPoint = Math.ceil(LOGOS.length / 2);
  const row1Logos = LOGOS.slice(0, midPoint);
  const row2Logos = LOGOS.slice(midPoint);

  return (
    <div className="flex flex-col gap-8">
      {/* Row 1 - Scrolls left */}
      <MarqueeRow logos={row1Logos} direction="left" />

      {/* Row 2 - Scrolls right */}
      <MarqueeRow logos={row2Logos} direction="right" />
    </div>
  );
}

interface MarqueeRowProps {
  logos: typeof LOGOS;
  direction: 'left' | 'right';
}

function MarqueeRow({ logos, direction }: MarqueeRowProps) {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden cursor-grab active:cursor-grabbing"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex gap-12 md:gap-16 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
          } ${isDragging ? '[animation-play-state:paused]' : ''}`}
        style={{
          width: 'fit-content',
        }}
      >
        {duplicatedLogos.map((logo, idx) => (
          <div
            key={`${logo.name}-${idx}`}
            className="flex-shrink-0 h-8 w-auto relative grayscale-[80%] opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            style={{ minWidth: '60px' }}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={200}
              height={32}
              className="object-contain h-8 w-auto"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
