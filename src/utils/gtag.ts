export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-YVGX6Q8GXE';

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetId: string,
      config?: {
        [key: string]: any;
        page_path?: string | undefined;
        page_location?: string | undefined;
        page_title?: string | undefined;
        event_category?: string | undefined;
        event_label?: string | undefined;
        value?: number | undefined;
      } | undefined
    ) => void;
  }
}

// Track page views
export const pageview = (url: string) => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  } catch (e) {
    console.warn('Analytics error:', e);
  }
};

// Track custom events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  } catch (e) {
    console.warn('Analytics error:', e);
  }
};
