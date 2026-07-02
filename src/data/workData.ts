// Long-form work data for the /work page.
//
// 2026-07-02: All previous entries were fabricated (NexusAI, FlowState,
// Fintegrate, MedPortal, NewsWire Daily, Aura Lifestyle) with invented
// metrics like "$400K saved", "trial-to-paid 2.1% → 8.7%", "$1.2M seed
// round". They have been removed. /work will render with no case studies
// until the founder confirms real entries.
//
// The interface below is preserved so a real case study can be added without
// touching the consumer components. Each entry the founder adds should
// include only metrics the founder wrote with the source client and has
// permission to publish.

export interface WorkItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  content: string;
  features?: string[];
  challenges?: string[];
  results?: string[];
  images?: string[];
}

export const workItems: WorkItem[] = [
  // Founder: add real, founder-confirmed case studies here.
  // Each entry should have: a real client name, a one-line description the
  // founder has permission to publish, an honest technology list, and
  // results that the founder can defend.
];

export function getWorkItem(id: number): WorkItem | undefined {
  return workItems.find(item => item.id === id);
}

export function getRelatedWork(currentId: number, category: string, limit = 2): WorkItem[] {
  return workItems
    .filter(item => item.id !== currentId && item.category === category)
    .slice(0, limit);
}