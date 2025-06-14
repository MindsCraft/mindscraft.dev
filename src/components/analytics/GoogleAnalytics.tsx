'use client';

import Script from 'next/script';

// Get GA_MEASUREMENT_ID from environment variable or use a default value
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-YVGX6Q8GXE';

export default function GoogleAnalytics() {
  // Only check if measurement ID is provided
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
        onError={(e) => {
          console.error('Google Analytics script failed to load', e);
        }}
      />
      <Script
        id="google-analytics-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Initialize GA for all environments
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true,
              anonymize_ip: true
            });

            // Add error handler for gtag calls
            window.gtag = function() {
              try {
                dataLayer.push(arguments);
              } catch (e) {
                console.warn('GTAG Error:', e);
              }
            };
          `,
        }}
      />
    </>
  );
}
