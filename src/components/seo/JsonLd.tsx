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
        },
        // ── Site Navigation (encourages Google Sitelinks) ─────────
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "SiteNavigationElement",
                    "position": 1,
                    "name": "Services",
                    "description": "Explore our premium web development and UX design services.",
                    "url": "https://mindscraft.dev/services"
                },
                {
                    "@type": "SiteNavigationElement",
                    "position": 2,
                    "name": "Work",
                    "description": "View our portfolio of scalable digital products.",
                    "url": "https://mindscraft.dev/work"
                },
                {
                    "@type": "SiteNavigationElement",
                    "position": 3,
                    "name": "About",
                    "description": "Learn more about the MindsCraft team and our mission.",
                    "url": "https://mindscraft.dev/about"
                },
                {
                    "@type": "SiteNavigationElement",
                    "position": 4,
                    "name": "Blog",
                    "description": "Insights on modern web development, UI/UX, and AI.",
                    "url": "https://mindscraft.dev/blog"
                },
                {
                    "@type": "SiteNavigationElement",
                    "position": 5,
                    "name": "Contact",
                    "description": "Get in touch with us to start your next project.",
                    "url": "https://mindscraft.dev/contact"
                }
            ]
        }
    ];

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
