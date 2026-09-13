export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdownGroup {
  label: string;
  items: NavLink[];
}

export const navigationData = {
  mainNav: [
    { label: "Case studies", href: "/cases" },
    {
      label: "Services",
      href: "/services",
      dropdown: [
        { label: "Product redesign", href: "/services/product-redesign" },
        { label: "Design from scratch (MVP)", href: "/services/mvp-design" },
        { label: "Team extension", href: "/services/team-extension" },
        { label: "UX audit", href: "/services/ux-audit" },
        { label: "Design system", href: "/services/design-system" },
        { label: "Consulting", href: "/services/consulting" },
      ],
    },
    {
      label: "Industries",
      href: "/industries",
      dropdown: [
        { label: "Sales", href: "/industries/sales" },
        { label: "Fintech", href: "/industries/fintech" },
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "Marketing", href: "/industries/marketing" },
        { label: "Data", href: "/industries/data" },
        { label: "Geoservice", href: "/industries/geoservice" },
        { label: "DevTools", href: "/industries/devtools" },
        { label: "AI", href: "/industries/ai" },
        { label: "Legal tech", href: "/industries/legal-tech" },
        { label: "Real estate", href: "/industries/real-estate" },
      ],
    },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  footer: {
    navLinks: [
      { label: "Work", href: "/cases" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Team of Experts", href: "/team-of-experts" },
    ],
    contact: {
      email: "hello@mindscraft.dev",
      tel: "+1 415 796 6262",
      bookingHref: "/contact",
    },
    locations: [
      { city: "San Francisco", address: "300 Broadway, San Francisco, CA 94133" },
      { city: "New York", address: "148 Lafayette St, New York, NY 10013" },
      { city: "Newark", address: "131 Continental Dr, Suite 305, Newark, DE" },
      { city: "Kyiv", address: "Dehtiarivska str. 33B, Kyiv, Ukraine" },
    ],
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Dribbble", href: "https://dribbble.com" },
      { label: "Behance", href: "https://behance.net" },
      { label: "X / Twitter", href: "https://twitter.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/privacy" },
      { label: "Sitemap", href: "/privacy" },
    ],
  },
};
