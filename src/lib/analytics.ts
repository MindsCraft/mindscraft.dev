export const GA_MEASUREMENT_ID = 'G-YVGX6Q8GXE';

// Log page views
export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Log specific events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track blog post views
export const trackBlogView = (postTitle: string, postSlug: string) => {
  event({
    action: 'view_blog_post',
    category: 'Blog',
    label: postTitle,
  });
  pageview(`/blog/${postSlug}`);
};

// Track newsletter subscriptions
export const trackNewsletterSubscription = (email: string) => {
  event({
    action: 'newsletter_subscription',
    category: 'Newsletter',
    label: email,
  });
};

// Track service clicks
export const trackServiceClick = (serviceName: string) => {
  event({
    action: 'service_click',
    category: 'Services',
    label: serviceName,
  });
};

// Track contact form submissions
export const trackContactForm = (formType: string) => {
  event({
    action: 'contact_form_submission',
    category: 'Contact',
    label: formType,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  event({
    action: 'scroll_depth',
    category: 'Engagement',
    label: `${depth}%`,
    value: depth,
  });
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  event({
    action: 'time_on_page',
    category: 'Engagement',
    label: `${seconds} seconds`,
    value: seconds,
  });
};

// Track search queries
export const trackSearch = (query: string, resultsCount: number) => {
  event({
    action: 'search',
    category: 'Search',
    label: query,
    value: resultsCount,
  });
};

// Track category filters
export const trackCategoryFilter = (category: string) => {
  event({
    action: 'category_filter',
    category: 'Blog',
    label: category,
  });
};

// Track social shares
export const trackSocialShare = (platform: string, url: string) => {
  event({
    action: 'social_share',
    category: 'Social',
    label: platform,
  });
}; 