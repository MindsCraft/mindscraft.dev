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
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <div className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 mb-6">
                    <span className="text-sm font-medium text-gray-600">Trusted Partners</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900 mb-6">
                    Trusted by Industry <br className="hidden md:block" />Leaders Worldwide.
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    We have collaborated with forward-thinking organizations across global enterprises to create impactful UX designs, AI-integrated developments, and scalable web solutions that drive success.
                </p>
            </div>

            <div className="w-full">
                <GridLayout />
            </div>
        </section>
    );
}

function GridLayout() {
    return (
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
                {LOGOS.map((logo, idx) => (
                    <div
                        key={`${logo.name}-${idx}`}
                        className="flex-shrink-0 h-8 w-auto relative grayscale-[80%] opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                        <Image
                            src={logo.src}
                            alt={logo.name}
                            width={200}
                            height={32}
                            className="object-contain h-8 w-auto"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
