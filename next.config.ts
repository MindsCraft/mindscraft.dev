import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Company & Contact
      { source: "/about-us", destination: "/about" },
      { source: "/contact-us", destination: "/contact" },

      // Services Aliases
      { source: "/ui-ux-design-services", destination: "/services" },
      { source: "/ux-audit-service", destination: "/services/ux-audit" },
      { source: "/design-system-service", destination: "/services/design-system" },
      { source: "/web-app-design", destination: "/services/web-app-design" },
      { source: "/saas-web-design", destination: "/services/saas-web-design" },
      { source: "/mobile-app-design", destination: "/services/mobile-app-design" },
      { source: "/consulting", destination: "/services/consulting" },

      // Engagement mappings
      { source: "/engagement/product-redesign", destination: "/services/product-redesign" },
      { source: "/engagement/mvp-design-for-saas", destination: "/services/mvp-design" },
      { source: "/engagement/team-extension", destination: "/services/team-extension" },
      { source: "/engagement/hire-ui-ux-designer-built-for-saas", destination: "/services/hire-designer" },
      { source: "/engagement/design-as-a-service-for-saas-teams", destination: "/services/design-as-a-service" },
      { source: "/engagement/ux-design-subscription-for-saas-teams", destination: "/services/subscription" },

      // Comparisons
      { source: "/eleken-vs-toptal", destination: "/vs/toptal" },
      { source: "/eleken-vs-in-house-designer", destination: "/vs/in-house" },
      { source: "/eleken-vs-traditional-agency", destination: "/vs/agency" },

      // Industries
      { source: "/industries/ui-ux-design-for-developers", destination: "/industries/devtools" },
      { source: "/industries/ui-ux-design-for-data-products", destination: "/industries/data" },
      { source: "/industries/ui-ux-design-for-ai-based-products", destination: "/industries/ai" },
      { source: "/industries/ui-ux-design-for-geospatial-data-products", destination: "/industries/geoservice" },
      { source: "/industries/real-estate-ux-design-services", destination: "/industries/real-estate" },
      { source: "/industries/legal-tech-ux-design-services", destination: "/industries/legal-tech" },

      // Legal & Policies
      { source: "/privacy-policy", destination: "/privacy" },
      { source: "/editorial-process", destination: "/editorial" },
      { source: "/advertising-policy", destination: "/advertising" },

      // Blog & Articles
      { source: "/blog/main", destination: "/blog" },
      { source: "/blog/blog-all", destination: "/blog" },
      { source: "/blog-posts/:slug", destination: "/blog/:slug" },
      { source: "/articles/:slug", destination: "/blog/:slug" },
    ];
  },
};

export default nextConfig;
