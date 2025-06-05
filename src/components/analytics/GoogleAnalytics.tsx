'use client';


import Script from 'next/script';

// Get GA_MEASUREMENT_ID from environment variable or use a default value
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-YVGX6Q8GXE';

export default function GoogleAnalytics() {
  // Don't load GA if no measurement ID is provided or in development
  if (!GA_MEASUREMENT_ID || process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onError={(e) => {
          console.error('Google Analytics script failed to load', e);
        }}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Only initialize GA if not on localhost
            const isLocalhost = window.location.hostname === 'localhost';
            
            if (!isLocalhost) {
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true,
                anonymize_ip: true
              });
            }
            
            // Add error handler for gtag calls
            window.gtag = function() {
              try {
                if (window.location.hostname !== 'localhost') {
                  dataLayer.push(arguments);
                }
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
