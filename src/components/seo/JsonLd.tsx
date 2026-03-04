import React from 'react';

export default function JsonLd() {
    const jsonLd = [
        // ── Organisation ──────────────────────────────────────────
        {
            "@context": "https://schema.org",
            "@type": ["Organization", "ProfessionalService"],
            "@id": "https://mindscraft.dev/#organization",
            "name": "MindsCraft",
            "alternateName": "Mindscraft",
            "url": "https://mindscraft.dev",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mindscraft.dev/images/logo.png",
                "width": 200,
                "height": 60
            },
            "description": "Premium web development and UX design agency based in Dhaka, Bangladesh. We deliver scalable digital products for global enterprises and startups, blending intuitive UX engineering with cutting-edge AI integration.",
            "foundingDate": "2021",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dhaka",
                "addressCountry": "BD"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@mindscraft.dev",
                "contactType": "customer service",
                "availableLanguage": ["English"]
            },
            "areaServed": ["Worldwide", "Bangladesh", "United States", "United Kingdom", "Australia"],
            "serviceType": ["Web Development", "UX Design", "Mobile App Development", "AI Integration"],
            "sameAs": [
                "https://twitter.com/mindscraft",
                "https://linkedin.com/company/mindscraft"
            ]
        },
        // ── WebSite (enables Google's Sitelinks search box) ───────
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://mindscraft.dev/#website",
            "url": "https://mindscraft.dev",
            "name": "MindsCraft",
            "description": "Premium web development and UX design agency",
            "publisher": {
                "@id": "https://mindscraft.dev/#organization"
            },
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://mindscraft.dev/blog?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
            }
        }
    ];

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
