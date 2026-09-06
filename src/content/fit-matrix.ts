export interface FitScenario {
  id: string;
  category: string;
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
}

export const fitScenariosData: FitScenario[] = [
  {
    id: "hiring",
    category: "Hiring",
    problemTitle: "The right designers are hard to find",
    problemDescription: "You don't have the right design talent with expertise in creating SaaS, and it's not easy to find candidates with relevant skill sets and the right attitude.",
    solutionTitle: "Experienced SaaS designers",
    solutionDescription: "We have 40+ UI/UX designers with SaaS design expertise on the team, so we can jump into the project whenever you need us. Plus, we provide a 3-day FREE trial to let you see us in action before signing the contract.",
  },
  {
    id: "deadlines",
    category: "Deadlines",
    problemTitle: "Deadlines are burning",
    problemDescription: "You've underestimated the amount of work that goes into your project, and now you're behind schedule. You want to find designers who can help you out, but posting a job and interviewing candidates is taking up too much of your time.",
    solutionTitle: "Scale without hiring",
    solutionDescription: "We can provide as many designers as you need to complete your project and not add a single employee to your payroll. We'll work with you throughout the process until you are satisfied with the final product, on schedule.",
  },
  {
    id: "overload",
    category: "Overload",
    problemTitle: "There's too much on your plate",
    problemDescription: "You've built your SaaS business up quite a bit over the last few years, and you've got more than enough customers to keep your team busy. Now you're ready to develop a new product. But how will you keep your current customers happy?",
    solutionTitle: "Extra hands",
    solutionDescription: "Eleken can provide a remote team to help you implement new features, support the design system you've started to create, or redesign your products while you focus on other priorities.",
  },
];
