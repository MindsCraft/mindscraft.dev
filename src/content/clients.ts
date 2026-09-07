export interface ClientItem {
  id: string;
  name: string;
  logo: string;
  industry?: string;
  service?: string;
}

export const clientsData: ClientItem[] = [
  { id: "appstar", name: "Appstar", logo: "/content/clients/appstar.png", industry: "Mobile & Apps", service: "Product Design" },
  { id: "as-sunnah", name: "As-Sunnah", logo: "/content/clients/as-sunnah.png", industry: "Non-Profit", service: "Web Platform" },
  { id: "balloon", name: "Balloon", logo: "/content/clients/balloon.png", industry: "Tech & SaaS", service: "Product Redesign" },
  { id: "bdot-color", name: "Bdot Color", logo: "/content/clients/bdot-color.png", industry: "Creative", service: "Design System" },
  { id: "capitalfm", name: "Capital FM", logo: "/content/clients/capitalfm.png", industry: "Media & Audio", service: "Digital Experience" },
  { id: "chkware", name: "Chkware", logo: "/content/clients/chkware.png", industry: "DevTools", service: "MVP Design" },
  { id: "cyberz", name: "Cyberz", logo: "/content/clients/cyberz.png", industry: "Cybersecurity", service: "Product Redesign" },
  { id: "eloylab", name: "Eloy Lab", logo: "/content/clients/eloylab.png", industry: "Healthcare", service: "Team Extension" },
  { id: "mlbd", name: "MLBD", logo: "/content/clients/mlbd.png", industry: "Enterprise", service: "UX Audit" },
  { id: "mles", name: "MLES", logo: "/content/clients/mles.png", industry: "Engineering", service: "Product Design" },
  { id: "monta", name: "Monta", logo: "/content/clients/monta.png", industry: "CleanTech", service: "Team Extension" },
  { id: "namco", name: "Namco", logo: "/content/clients/namco 1.png", industry: "Entertainment", service: "UI/UX Design" },
  { id: "neom", name: "Neom", logo: "/content/clients/neom.png", industry: "Smart City", service: "Design Strategy" },
  { id: "nspec", name: "Nspec", logo: "/content/clients/nspec-logo.png", industry: "Inspection", service: "MVP Design" },
  { id: "pocket", name: "Pocket", logo: "/content/clients/pocket.png", industry: "Fintech", service: "Mobile App" },
  { id: "prayers", name: "Prayers", logo: "/content/clients/prayers.png", industry: "Lifestyle", service: "Product Redesign" },
  { id: "sagawa", name: "Sagawa", logo: "/content/clients/sagawa.png", industry: "Logistics", service: "Enterprise UX" },
  { id: "sdc", name: "SDC", logo: "/content/clients/SDC.png", industry: "Consulting", service: "Design System" },
  { id: "sunstar", name: "Sunstar", logo: "/content/clients/sunstar-logo.png", industry: "Healthcare", service: "Product Redesign" },
  { id: "tagnpac", name: "TAGNPAC", logo: "/content/clients/TAGNPAC.png", industry: "Manufacturing", service: "Web Design" },
  { id: "taikyo", name: "Taikyo", logo: "/content/clients/taikyo.png", industry: "Industrial", service: "Digital Platform" },
  { id: "tokup", name: "Tokup", logo: "/content/clients/tokup.png", industry: "E-Commerce", service: "MVP Design" },
  { id: "typewriting", name: "Typewriting", logo: "/content/clients/typewriting.png", industry: "EdTech", service: "Product Design" },
];
