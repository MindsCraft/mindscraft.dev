export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  bio: string;
  avatar: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Alex Podhornyi",
    role: "Head of Product Design",
    experience: "10+ years in SaaS UX",
    specialization: "Design Systems, B2B SaaS Architecture, PLG",
    bio: "Led design revamps for over 40 SaaS platforms across devtools, fintech, and data intelligence.",
    avatar: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/62c82305a41764619d0e8061_alex-p.webp",
  },
  {
    name: "Olga Semenova",
    role: "Lead UX Architect",
    experience: "8+ years in software design",
    specialization: "Healthcare, BioTech, Clinical Information Architecture",
    bio: "Specializes in turning dense diagnostic and multi-role clinical workflows into accessible interfaces.",
    avatar: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/62c82305a4176472480e8062_olga-s.webp",
  },
  {
    name: "Maksym Vovk",
    role: "Senior Product Designer",
    experience: "7+ years in product design",
    specialization: "Developer Tools, AI Copilots, API Dashboards",
    bio: "Passionate about keyboard-first interfaces, terminal styling, and minimal cognitive load for developers.",
    avatar: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/62c82305a4176442fa0e8063_max-v.webp",
  },
  {
    name: "Yevhenii Kravchenko",
    role: "Senior Product Designer",
    experience: "6+ years in Fintech & Crypto",
    specialization: "High-volume transaction ledgers, trading charts, KYC",
    bio: "Crafted banking and wealth management workflows handling millions in daily volume.",
    avatar: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/62c82305a4176405ba0e8064_yevhenii-k.webp",
  },
  {
    name: "Daria Lytvyn",
    role: "Senior UI/UX Designer",
    experience: "6+ years in SaaS",
    specialization: "Marketing Analytics, No-Code Workflow Builders",
    bio: "Designed visual canvas builders for campaign automation and multi-touch attribution.",
    avatar: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/62c82305a417643f8e0e8065_daria-l.webp",
  },
  {
    name: "Kateryna Boyko",
    role: "Design Operations Lead",
    experience: "5+ years in Design Ops",
    specialization: "Designer Vetting, Quality Assurance, Client Onboarding",
    bio: "Ensures seamless integration between our designers and client engineering squads.",
    avatar: "https://cdn.prod.website-files.com/5e8b3356a5a8f5321855bbe7/62c82305a4176474ae0e8066_kateryna-b.webp",
  },
];
