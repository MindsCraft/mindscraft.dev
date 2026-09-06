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
    locations: [
      { city: "Kyiv, Ukraine", address: "Dehtiarivska str. 33B" },
      { city: "Newark, DE, US", address: "131 Continental Dr, Suite 305" },
    ],
    services: [
      { label: "Product redesign", href: "/services/product-redesign" },
      { label: "Design from scratch (MVP)", href: "/services/mvp-design" },
      { label: "Team extension", href: "/services/team-extension" },
      { label: "UX audit", href: "/services/ux-audit" },
      { label: "Design system", href: "/services/design-system" },
      { label: "Hire UI/UX designer", href: "/services/hire-designer" },
      { label: "Consulting", href: "/services/consulting" },
    ],
    industries: [
      { label: "Fintech", href: "/industries/fintech" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "AI & Data", href: "/industries/ai" },
      { label: "DevTools", href: "/industries/devtools" },
      { label: "Real estate", href: "/industries/real-estate" },
      { label: "Sales & Marketing", href: "/industries/sales" },
    ],
    comparisons: [
      { label: "Eleken vs Toptal", href: "/vs/toptal" },
      { label: "Eleken vs In-house designer", href: "/vs/in-house" },
      { label: "Eleken vs Traditional agency", href: "/vs/agency" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Editorial Process", href: "/editorial" },
      { label: "Advertising Policy", href: "/advertising" },
    ],
  },
};
