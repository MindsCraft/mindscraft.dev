export interface ProcessStep {
  number: string;
  name: string;
  description: string;
  deliverables: string[];
}

export const deliveryProcessData: ProcessStep[] = [
  {
    number: "01",
    name: "Trial",
    description: "Begin with a no-commitment trial to ensure we are a right fit for you.",
    deliverables: ["1-2 screens designed"],
  },
  {
    number: "02",
    name: "User research",
    description: "Audit in case of redesign, product discovery and competitor analysis if we design from scratch. This step clarifies the 'what' and 'why' behind your product decisions.",
    deliverables: ["Competitive analysis", "UX audit report"],
  },
  {
    number: "03",
    name: "Information architecture",
    description: "We map out the app’s structure and navigation, ensuring workflows are intuitive and scalable before diving into screen design.",
    deliverables: ["User flows", "Initial wireframes"],
  },
  {
    number: "04",
    name: "Screens design",
    description: "You get several UI/UX design options with variations in typography, icons and colors. The preferred one gets iterated until the final design is ready.",
    deliverables: ["Wireframes", "Prototypes", "Several UI options", "Final design"],
  },
  {
    number: "05",
    name: "Design handoff",
    description: "We don't develop software, but we make sure your developers have everything they need to implement the product we've designed.",
    deliverables: ["All screens", "UI kit", "Design system"],
  },
  {
    number: "06",
    name: "Project support",
    description: "We stay engaged for as long as you need us, making sure our designs are implemented smoothly.",
    deliverables: ["Adding new features", "UX consulting", "Supervising execution"],
  },
];
