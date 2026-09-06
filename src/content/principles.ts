export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

export const principlesData: PrincipleItem[] = [
  {
    number: "01",
    title: "Users don’t come first. Business comes",
    description: "This doesn’t mean ignoring the users. Every business will benefit from understanding its users better and making the product better for them. Being user-centered is a good thing. But it’s a good thing because it’s good for the business.",
  },
  {
    number: "02",
    title: "Structure is key, but good UI matters",
    description: "Well-thought information architecture and navigation makes complex apps easy to use. Beautiful interfaces make those apps emotionally appealing.",
  },
  {
    number: "03",
    title: "Design is a process, not an event",
    description: "There’s no place for overnight success. We work in short iterations, moving to the result bit by bit, and expect your consistent feedback.",
  },
];
