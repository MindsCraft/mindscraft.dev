export interface CaseStudyItem {
  id: string;
  number: string;
  company: string;
  headline: string;
  description: string;
  link: string;
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "datawisp",
    number: "/ 01",
    company: "Datawisp",
    headline: "Datawisp secures $3.6M in seed funding",
    description: "We redesigned Datawisp’s core UX to make its data logic builder self-explanatory.",
    link: "/cases",
  },
  {
    id: "aampe",
    number: "/ 02",
    company: "Aampe",
    headline: "Aampe raises $18M after platform redesign",
    description: "We redesigned Aampe so marketers could run AI-powered campaigns on their own, no devs needed.",
    link: "/cases",
  },
  {
    id: "myinterview",
    number: "/ 03",
    company: "MyInterview",
    headline: "MyInterview fixes 90% candidate drop-off with new UX",
    description: "We rebuilt the candidate flow to cut the drop-off and designed new functionality that helped to win enterprise clients.",
    link: "/cases",
  },
  {
    id: "nworx",
    number: "/ 04",
    company: "Nworx",
    headline: "Nworx increases user satisfaction by 200% after revamp",
    description: "We restructured Nworx’s LMS interface, aligning it with user goals and cutting support tickets across key workflows.",
    link: "/cases",
  },
];
