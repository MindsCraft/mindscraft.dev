'use client';

import { motion } from 'framer-motion';
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 mb-6">
          <span className="text-sm font-medium text-gray-600">Trusted Partners</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          The CRM behind the next<br className="hidden md:block" /> generation of companies.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover how thousands of companies use MindsCraft to scale their business.
        </p>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6">
        <StackedGrid />
      </div>
    </section>
  );
}

function StackedGrid() {
  // We want 3 lines for 23 logos.
  // 23 / 3 = 7.66 -> 8 items per row to fit in 3 rows.
  const itemsPerRow = 8;
  const rows = Math.ceil(LOGOS.length / itemsPerRow);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-8 md:gap-16"
    >
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const rowLogos = LOGOS.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow);

        return (
          <div
            key={`row-${rowIndex}`}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-8 items-center justify-items-center"
          >
            {rowLogos.map((logo, idx) => (
              <div
                key={`logo-${rowIndex}-${idx}`}
                className="relative w-full h-12 flex items-center justify-center group"
              >
                <div className="relative w-32 h-12">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </motion.div>
  );
}