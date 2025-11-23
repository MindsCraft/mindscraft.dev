import React from 'react';

export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Mindscraft",
        "url": "https://mindscraft.dev",
        "logo": "https://mindscraft.dev/logo/png/mindscraft-logo.png",
        "sameAs": [
            "https://twitter.com/mindscraft",
            "https://linkedin.com/company/mindscraft"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-555-5555",
            "contactType": "customer service"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
