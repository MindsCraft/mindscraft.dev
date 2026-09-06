export interface ArticleItem {
  id: string;
  title: string;
  description: string;
  link: string;
}

export const articlesData: ArticleItem[] = [
  {
    id: "art-1",
    title: "How to Evaluate UI/UX Designers Before Hiring Them",
    description: "Making a successful hire is challenging. Read our article to learn what skill sets to evaluate to make the right choice.",
    link: "/blog",
  },
  {
    id: "art-2",
    title: "Product Design vs Product Management and Why They Need to Combine Forces",
    description: "Struggling to find the right team collaboration structure? Here we explain all the nuances of product management and product design that you need to know.",
    link: "/blog",
  },
  {
    id: "art-3",
    title: "To Redesign or Not to Redesign Your Product: A Solution to Resolve Your Doubts",
    description: "Doubting whether to redesign your product or not? Find out why redesigns fail so often and how to avoid that.",
    link: "/blog",
  },
  {
    id: "art-4",
    title: "Scaling Your Startup - How It Looks from the Product Design Perspective",
    description: "Learn what pitfalls might wait for you when scaling a product team and expanding the product and how to overcome them.",
    link: "/blog",
  },
  {
    id: "art-5",
    title: "Onboarding New Designers Shouldn't Be a Problem: Here's How to Onboard Your Remote Team",
    description: "Want to get your new designers on track as fast as possible? Learn our tips for remote UX designers onboarding.",
    link: "/blog",
  },
  {
    id: "art-6",
    title: "The Cost of Hiring a Designer for Your Startup: Main Things to Consider",
    description: "First time looking for a product or UI/UX designer? Read on to learn how much they charge, what their rates depend on, and where to find a good fit for your team.",
    link: "/blog",
  },
];
