export interface ProcessStep {
  number: string;
  name: string;
  description: string;
  deliverables: string[];
}

export const deliveryProcessData: ProcessStep[] = [
  {
    number: "01",
    name: "Discovery & UX Trial",
    description: "Begin with a low-risk trial or discovery sprint. We audit user friction points, validate key flows, and map out your product's technical and UX requirements before full commitment.",
    deliverables: ["UX Audit & Teardown", "1-2 Core Flow Wireframes", "Technical Roadmap"],
  },
  {
    number: "02",
    name: "UX Strategy & Architecture",
    description: "We organize complex information architectures and user journeys. Workflows are simplified so users reach their 'aha!' moment immediately without confusion.",
    deliverables: ["User journey maps", "Information architecture", "Clickable wireframes"],
  },
  {
    number: "03",
    name: "UI Design & Systems",
    description: "We craft polished, conversion-tested interfaces and an atomic design system in Figma, complete with typography, color tokens, and responsive component libraries.",
    deliverables: ["High-fidelity Figma screens", "Interactive prototype", "Atomic design tokens"],
  },
  {
    number: "04",
    name: "Full-Stack Engineering",
    description: "Our engineers turn validated designs into scalable, production-grade code. Modern Next.js/React frontend, robust backend APIs, database architecture, and zero-handoff friction.",
    deliverables: ["Production Next.js codebase", "Scalable backend & APIs", "Database & auth setup"],
  },
  {
    number: "05",
    name: "QA, Performance & Launch",
    description: "Rigorous automated and manual cross-device testing, SEO optimization, security hardening, and performance tuning for a seamless zero-downtime production deployment.",
    deliverables: ["Cross-browser QA report", "Lighthouse 95+ performance", "Zero-downtime deployment"],
  },
  {
    number: "06",
    name: "Ongoing Support & SLAs",
    description: "We don't disappear after launch. We provide dedicated SLAs, monthly maintenance, continuous UX conversion optimization, and agile feature sprints as your business scales.",
    deliverables: ["Guaranteed response SLA", "Bug triage & maintenance", "Bi-weekly feature sprints"],
  },
];
