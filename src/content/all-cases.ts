export interface CaseVisual {
  src: string;
  alt: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  text: string;
  img: string;
  headline?: string;
  sections?: string[];
  summary?: string[];
  quote?: string | null;
  visuals?: CaseVisual[];
}

export const allCases: CaseStudy[] = [
  {
    "slug": "datawisp",
    "title": "Datawisp",
    "industry": "Data",
    "text": "How our redesign helped a no-code data analysis platform to raise a $3.6M seed round",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370af488335b907ec79f3_697b712406148079bfae473e_datawisp-thumbnail-image-02.webp",
    "headline": "How our redesign helped a no-code data analysis platform to raise a $3.6M seed round",
    "sections": [
      "Datawisp struggled without a skilled product designer",
      "It took Eleken less than a week to get started with a redesign",
      "That is how the redesign process looked like",
      "Cards",
      "Charts",
      "Final results",
      "We managed to fix the overcomplicated UI/UX and helped Datawisp to get funding",
      "What’s next?"
    ],
    "summary": [
      "Without data analytics, companies on the web are blind like a deer caught in headlights. They have no idea about what, when and how their users are doing. Still, may prefer to stay blind  because you need either an engineer or a data scientist to make sense of an awful lot of information.",
      "Datawisp solves the problem by creating a new, visual way of working with numbers so that everyone could discover valuable ideas. Just like Webflow removed coding from web development, Datawisp removed coding from data analytics. The only problem is that the product is confusing as hell and looks more like Windows 98 interface rather than an innovative user-friendly app.",
      "Eleken product agency turned out to be a perfect match to all Datawisp’s design needs.",
      "We always have a few product designers on bench, so we were able to get to work as soon as we discussed Datawisp&#x27;s design needs. We usually begin our partnerships with a three-day trial to let our clients try before they buy.",
      "During this time, we can design a couple of pages or a short user flow. In the case of Datawisp, we did a complete redesign of the product’s main screen and provided several options to choose from. The client was pleased with the results and our working approach, so we continued with the full-scale product redesign."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370af488335b907ec79f6_697b712406148079bfae488e_datawisp-main-image-hero-01.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370af488335b907ec79e8_697b712406148079bfae488f_datawisp-case-study-logo-03.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ad488335b907ec787b_697b712406148079bfae4890_datawisp-case-study-documents%2520screen-before-04.webp",
        "alt": "Datawisp before redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ad488335b907ec7886_697b712406148079bfae4891_datawisp-case-study-main-screen-redesign-option-05.webp",
        "alt": "first version of the screen Datawisp"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae488335b907ec78b8_697b712406148079bfae4892_datawisp-case-study-main-screen-redesign-option-06.webp",
        "alt": "second version of the screen Datawisp"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae488335b907ec789c_697b712406148079bfae4893_datawisp-case-study-main-screen-redesign-option-07.webp",
        "alt": "third version of the screen Datawisp"
      },
      {
        "src": "https://cdn.prod.website-files.com/697b712306148079bfae08e3/697b712306148079bfae17e2_img-card-06.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae488335b907ec789f_697b712406148079bfae4894_datawisp-case-study-deconstructed-08.webp",
        "alt": "Deconstructed screen example Datawisp"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae488335b907ec788d_697b712406148079bfae4895_datawisp-case-study-ux-audit-screen-09.webp",
        "alt": "A fragment of UX audit Datawisp"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae488335b907ec78ab_697b712406148079bfae4896_datawisp-case-study-low-wifeframes-10.webp",
        "alt": "Datawisp’s low-fidelity wireframes "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae488335b907ec7890_697b712406148079bfae4897_datawisp-case-study-high-fidelity-wireframe-11.webp",
        "alt": "Datawisp’s first high-fidelity wireframe example "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae488335b907ec78a5_697b712406148079bfae4898_datawisp-case-study-high-fidelity-wireframe-12.webp",
        "alt": "Datawisp’s second high-fidelity wireframe example "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae488335b907ec78b5_697b712406148079bfae4899_datawisp-case-study-high-fidelity-wireframe-13.webp",
        "alt": "Datawisp’s third high-fidelity wireframe example "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae488335b907ec78a2_697b712406148079bfae4971_datawisp-case-study-cards-design-14.webp",
        "alt": "Cards redesign Datawisp"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae488335b907ec7899_697b712406148079bfae489a_datawisp-case-study-column-charts-15.01.webp",
        "alt": "column chart redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ad488335b907ec7878_697b712406148079bfae489b_datawisp-case-study-bar-chart-15.02.webp",
        "alt": "bar chart redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ad488335b907ec7881_697b712406148079bfae489c_datawisp-case-study-heatmap-15.03.webp",
        "alt": "heatmap redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ac488335b907ec786a_697b712406148079bfae489d_datawisp-case-study-pie-charts-15.04.webp",
        "alt": "pie chart"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae488335b907ec7896_697b712406148079bfae489e_datawisp-case-study-scatter-plot-15.05.webp",
        "alt": "scatter plot redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ad488335b907ec787e_697b712406148079bfae489f_datawisp-case-study-density-plot-15.06.webp",
        "alt": "density plot redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae488335b907ec78bb_697b712406148079bfae48a1_datawisp-case-study-after-redesign-16.webp",
        "alt": "Datawisp&#x27;s first screen example after redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae488335b907ec7893_697b712406148079bfae48a0_datawisp-case-study-after-redesign-17.webp",
        "alt": "Datawisp&#x27;s second screen example after redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae488335b907ec78b2_697b712406148079bfae48a2_datawisp-case-study-after-redesign-18.webp",
        "alt": "Datawisp&#x27;s third screen example after redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370af488335b907ec7979_697b712406148079bfae48a3_datawisp-case-study-design-system-19.webp",
        "alt": "A fragment of Datawisp’s new design system"
      }
    ]
  },
  {
    "slug": "zaplify",
    "title": "Zaplify",
    "industry": "Sales",
    "text": "How Eleken helped Zaplify double activation rates with a UX overhaul",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dd31f235a540aa84c9_697b712406148079bfae4715_zaplify-thumbnail-image-02.webp",
    "headline": "How Eleken helped Zaplify double activation rates with a UX overhaul",
    "sections": [
      "Starting with the problem",
      "What we found",
      "Rethinking the core: from campaigns to conversations",
      "Scaling personalization with playbooks",
      "Prospecting without the Spreadsheet",
      "Onboarding Built for Trust, Not Just Tasks",
      "What Happened After the Redesign",
      "Let&#x27;s design something special"
    ],
    "summary": [
      "Zaplify (now AndSend) made a bold move. They let go of their entire sales team and bet everything on product-led growth. From now on, users had to onboard themselves, discover value fast, and stay engaged all without a human guiding them.",
      "The platform required help just to get started. Outreach workflows were clunky and confusing. Navigation made users feel lost, not empowered. And the design team didn’t have the senior firepower to rethink core flows quickly.",
      "To make product-led growth work, Zaplify didn’t just need feature tweaks, they needed a UX that could sell.",
      "Zaplify kicked off the partnership with a simple test: Could we understand their users better than anyone else?",
      "For the 3-day trial, we focused on what mattered most: the core workspace where outreach happens. At the time, that workspace didn’t even exist. Messaging relied on pre-set templates. Users couldn’t switch channels, see past conversations, or view context on a lead. It was a system designed around the tool’s limitations rather than user behavior."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dc31f235a540aa84b7_697b712406148079bfae4974_zaplify-main-image-hero-01.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dc31f235a540aa84bf_697b712406148079bfae4a9f_zaplify-case-study-logo-03.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370db31f235a540aa842a_697b712406148079bfae44e1_zaplify-case-study-trial-dashboard-design-04.webp",
        "alt": "Zaplify&#x27;s workspace before redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370da31f235a540aa8424_697b712406148079bfae47e0_zaplify-case-study-ai-suggest-message-05.webp",
        "alt": "Zaplify&#x27;s AI-suggested messages before redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370da31f235a540aa8414_697b712406148079bfae47e2_zaplify-case-study-chats-mobile-06.webp",
        "alt": "Zaplify&#x27;s chats before redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370db31f235a540aa8438_697b712406148079bfae44e2_zaplify-case-study-massage-07.webp",
        "alt": "Zaplify’s outreach system before redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370da31f235a540aa841b_697b712406148079bfae47e4_zaplify-case-study-actions-08.webp",
        "alt": "Zaplify’s outreach system after redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370db31f235a540aa8430_697b712406148079bfae47e6_zaplify-case-study-play-books-setup-09.webp",
        "alt": "Zaplify&#x27;s playbook setup"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370da31f235a540aa8421_697b712406148079bfae47e8_zaplify-case-study-playbooks-incorporated-into-actions-10.webp",
        "alt": "Zaplify&#x27;s playbook incorporated into Actions"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370db31f235a540aa8443_697b712406148079bfae44e3_zaplify-case-study-prospects-screen-11.webp",
        "alt": "Zaplify&#x27;s Prospects before redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370db31f235a540aa8433_697b712406148079bfae47e9_zaplify-case-study-discover-contacts-screen-12.webp",
        "alt": "Zaplify&#x27;s &#x27;Discover contacts&#x27; after redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370db31f235a540aa8446_697b712406148079bfae47eb_zaplify-case-study-onbording-screens-13.webp",
        "alt": "Redesign of the registration screen"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370db31f235a540aa843e_697b712406148079bfae47ec_zaplify-case-study-onbording-screens-14.webp",
        "alt": "Redesign of the registration screen"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370da31f235a540aa841e_697b712406148079bfae47ee_zaplify-case-study-to-dos-screens-15.webp",
        "alt": "Zaplify after redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370db31f235a540aa843b_697b712406148079bfae47ef_zaplify-case-study-to-dos-screens-16.webp",
        "alt": "Zaplify after redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370db31f235a540aa842d_697b712406148079bfae47f1_zaplify-case-study-feedback-17.webp",
        "alt": "Zaplify customer review"
      }
    ]
  },
  {
    "slug": "floret",
    "title": "Floret",
    "industry": "Process Management",
    "text": "How Floret went from product idea to a $2.3 million investment round with MVP design",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b248adcfc510fc6c6d_697b712406148079bfae472f_floret-thumbnail-image-02.webp",
    "headline": "How Floret went from product idea to a $2.3 million investment round with MVP design",
    "sections": [
      "2 months, 6-hour time difference, one MVP, 200% commitment",
      "Presenting complex data in a smart and user-friendly way",
      "With the help of our design team Floret raised a $2.3Min seed round",
      "Let&#x27;s design something special"
    ],
    "summary": [
      "Companies operating in the food and beverage industry in the United States have to interact with lots of organizations and individuals in order to get food in stores: factories, agents, logistics suppliers, and many, many more. Every step of this process is marked by different transactions, promotions, and payments.",
      "If a company is large enough to handle all of the above, they might not find the process challenging. Small and medium companies, however, often struggle to handle that amount of incoming data.",
      "Floret is a solution created to make this process less overwhelming. It is a platform that allows foodtech companies to store all the transaction records in one place, view, and manage them in a simple and convenient way.",
      "Floret needed a professional UI/UX designer who could create an MVP so that they could show it to investors and raise funding for further development. They also needed it fast: 2 months at most.",
      "After interviewing 3 design studios to understand their processes, strength, timelines, and expertise, Floret decided to collaborate with Eleken. We had the best track record among the potential competitors."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b248adcfc510fc6c75_697b712406148079bfae4b82_floret-main-image-hero-01.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b248adcfc510fc6c67_697b712406148079bfae4b83_floret-case-study-logo-03.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b248adcfc510fc6bf1_697b712406148079bfae4b84_floret-case-study-all-screens-04.webp",
        "alt": "Floret platform interface"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b148adcfc510fc6bcd_697b712406148079bfae4b85_floret-case-study-calendar-before-05.webp",
        "alt": "Promotion calendar before"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/6915aa0a106264b6f7a5615a_Floret_dashboard_5.webp",
        "alt": "Floret redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b148adcfc510fc6bc3_697b712406148079bfae4b87_floret-case-study-add-promo-07.webp",
        "alt": "Promotion calendar after"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b248adcfc510fc6be2_697b712406148079bfae4b86_floret-case-study-promotional-calendar-standard-08.webp",
        "alt": "Promotion calendar: standard view"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b148adcfc510fc6bbd_697b712406148079bfae4b88_floret-case-study-promotional-calendar-kanban-09.webp",
        "alt": "Promotion calendar: kanban view"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b248adcfc510fc6be5_697b712406148079bfae4b89_floret-case-study-retailer-details-10.webp",
        "alt": "Retailer details, admin/editor user role"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b148adcfc510fc6bc0_697b712406148079bfae4b8a_floret-case-study-forecast-11.webp",
        "alt": "Promotion forecast"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b148adcfc510fc6bd0_697b712406148079bfae4b8b_floret-case-study-forecast-compare-revenue-12.webp",
        "alt": "Promotion forecast: compare revenue"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b148adcfc510fc6baf_697b712406148079bfae4b8c_floret-case-study-checks-details-13.webp",
        "alt": "Check details"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b148adcfc510fc6bb2_697b712406148079bfae4b91_floret-case-study-invoices-14.webp",
        "alt": "invoices"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b248adcfc510fc6bdb_697b712406148079bfae4b94_floret-case-study-upload-check-15.webp",
        "alt": "Upload check"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b248adcfc510fc6bd8_697b712406148079bfae4b96_floret-case-study-find-match-16.webp",
        "alt": "Match with deduction"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b148adcfc510fc6bd3_697b712406148079bfae4b97_floret-case-study-check-library-17.webp",
        "alt": "Check library"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b148adcfc510fc6bc6_697b712406148079bfae4b98_floret-case-study-dispute-request-18.webp",
        "alt": "Dispute request"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b148adcfc510fc6bba_697b712406148079bfae4b99_floret-case-study-request-reason-19.webp",
        "alt": "Dispute request: reasons for dispute"
      }
    ]
  },
  {
    "slug": "flourishon",
    "title": "FlourishON",
    "industry": "Healthcare",
    "text": "How Eleken designed an accessible caregiving MVP ready for investors",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b3f75d65d1b9936a3d_697b712406148079bfae4762_flourishon-thumbnail-image-02.webp",
    "headline": "How Eleken designed an accessible caregiving MVP ready for investors",
    "sections": [
      "FlourishON needed a UX designer to create a clear caregiving journey",
      "Starting with a 3-day trial",
      "From trial success to shaping the MVP",
      "From idea to investor-ready product experience",
      "Let&#x27;s design something special"
    ],
    "summary": [
      "FlourishON was born from a deeply personal story. Our clients had both cared for a loved one with dementia and knew firsthand the stress, confusion, and emotional toll that comes with it.",
      "After spending countless hours managing appointments, legal documents, paperwork, and medical decisions, they realized there was no single place where caregivers could stay organized and get clear, practical support.",
      "That insight became FlourishON, a digital platform designed to help families manage the complex realities of cognitive decline while staying calm, connected, and in control.",
      "Because success depended on a thoughtful, accessible user experience, the founders needed a design partner who truly understood UX.",
      "Having worked with Eleken before, the clients trusted our ability to turn complex challenges into simple, intuitive products, so partnering with us was the strategic choice."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b3f75d65d1b9936a4d_697b712406148079bfae4814_flourishon-main-image-hero-01.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b3f75d65d1b9936a45_697b712406148079bfae48bf_flourishon-case-study-logo-03.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b1f75d65d1b9936977_697b712406148079bfae4816_flourishon-case-study-branching-logic-system-04.webp",
        "alt": "Different screens opened based on Yes/No answers"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b2f75d65d1b993698e_697b712406148079bfae4817_flourishon-case-study-roadmap-05.webp",
        "alt": "Roadmap"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b2f75d65d1b993698b_697b712406148079bfae481a_flourishon-case-study-dashboard-06.webp",
        "alt": "Dashboards grouped by date and categories"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b1f75d65d1b993696e_697b712406148079bfae4818_flourishon-case-study-wcag-standards-07.webp",
        "alt": "Designing for accessibility"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b2f75d65d1b99369a3_697b712406148079bfae4819_flourishon-case-study-dashboard-08.webp",
        "alt": "Dashboard"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b2f75d65d1b9936991_697b712406148079bfae481b_flourishon-case-study-widgets-09.webp",
        "alt": "Care Central"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b2f75d65d1b9936984_697b712406148079bfae481c_flourishon-case-study-tracker-10.webp",
        "alt": "Fremium version"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b2f75d65d1b9936997_697b712406148079bfae481d_flourishon-case-study-additional-resources-11.webp",
        "alt": "Additional recources"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b1f75d65d1b9936971_697b712406148079bfae481e_flourishon-case-study-competitive-analysis-12.webp",
        "alt": "Competitive analysis"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b1f75d65d1b993697a_697b712406148079bfae4820_flourishon-case-study-i-need-help-with-13.webp",
        "alt": " “I need help with…” feature"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b2f75d65d1b993699c_697b712406148079bfae481f_flourishon-case-study-roadmap-14.webp",
        "alt": "Roadmap"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b2f75d65d1b9936988_697b712406148079bfae4821_flourishon-case-study-super-user-status-15.webp",
        "alt": "Super User status"
      },
      {
        "src": "https://cdn.prod.website-files.com/697b712306148079bfae08e3/697b712406148079bfae2f02_Mobile%20App%20For%20RP.webp",
        "alt": "Mobile App for RP"
      },
      {
        "src": "https://cdn.prod.website-files.com/697b712306148079bfae08e3/697b712406148079bfae2f03_img-case-flourish-02.webp",
        "alt": "Mobile App for NCD"
      },
      {
        "src": "https://cdn.prod.website-files.com/697b712306148079bfae08e3/697b712406148079bfae2ef4_img-case-flourish-01.webp",
        "alt": "Apple Watch App"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b2f75d65d1b9936994_697b712406148079bfae4822_flourishon-case-study-comprehensive-ui-kit-18.webp",
        "alt": "UI kit"
      }
    ]
  },
  {
    "slug": "gamaya",
    "title": "Gamaya",
    "industry": "Geoservice",
    "text": "Redesigning an AI-powered agriculture solution to enhance user interface and cut development costs",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b5c207a3c95d7a68df_697b712406148079bfae4754_gamaya-thumbnail-image-02.webp",
    "headline": "Redesigning an AI-powered agriculture solution to enhance user interface and cut development costs",
    "sections": [
      "Rethink the entire UI and optimize the UX. But make it easy to implement for developers",
      "A UI component library saved countless hours of development work",
      "We adapted our design to this library",
      "The results of redesigning Gamaya data visualization and analysis platform",
      "Layers to show data from different data sources",
      "Tables as an alternative data visualization option",
      "Flight calendar to schedule drone missions",
      "Scouting mobile app and a user interface for the manager"
    ],
    "summary": [
      "Gamaya is a Swiss company that produces technology for agricultural data processing and analysis allowing farmers to optimize agriculture operations, increase crop production, and monitor crop growth.",
      "Gamaya collects agricultural data from open-source satellite data sources and drone images. Drones that Gamaya uses have integrated HSI cameras. These cameras are designed specifically for SenseFly eBee Plus drones, but they can be integrated into almost any fixed-wing or multi-rotor drone platform.",
      "With the help of this solution, Gamaya wanted to gain new customers and expand to new markets. When they turned to us they already had an MVP of this product. But as it often happens with companies in an early stage of development, at the time they were building it, Gamaya’s founders were limited in time and resources, so they didn’t pay much attention to the UI/UX design.",
      "As an outcome, the MVP’s user interface was clunky and confusing, in other words inconvenient for new customers. Too many options, a variety of information to learn, complex navigation – every step the user took would add to their cognitive load.",
      "To be able to grow and reach their goals, Gamaya team needed to improve their product. As they didn’t have in-house designers, they needed to find UI/UX professionals to join their team and help make the software intuitive and easy to interact with."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b5c207a3c95d7a68dc_697b712406148079bfae4a3c_gamaya-main-image-hero-01.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b5c207a3c95d7a68d8_697b712406148079bfae496f_gamaya-case-study-logo-03.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b3c207a3c95d7a681f_697b712406148079bfae496e_gamaya-case-study-userflow-04.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b4c207a3c95d7a6839_697b712406148079bfae4970_gamaya-case-study-analyze-the-scouts-images-17.webp",
        "alt": "Gamaya redesign tags"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b4c207a3c95d7a6846_697b712406148079bfae4972_gamaya-case-study-interface-examples-built-on-react-06.webp",
        "alt": "UI component library Gamaya"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b4c207a3c95d7a684c_697b712406148079bfae4a3d_gamaya-case-study-interface-examples-built-on-react-07.webp",
        "alt": "UI component library Gamaya"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b4c207a3c95d7a684f_697b712406148079bfae4a3f_gamaya-case-study-interface-examples-built-on-react-08.webp",
        "alt": "UI component library Gamaya"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b3c207a3c95d7a6822_697b712406148079bfae4a3e_gamaya-case-stydy-golf-course-monitoring-18.webp",
        "alt": "redesigning Gamaya data visualization and analysis platform"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b3c207a3c95d7a6825_697b712406148079bfae4a40_gamaya-case-stydy-upload-file-10.webp",
        "alt": "redesigning Gamaya data visualization and analysis platform"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b4c207a3c95d7a6833_697b712406148079bfae4a41_gamaya-case-study-layers-to-show-data-11.webp",
        "alt": "Layers to show data Gamaya"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b4c207a3c95d7a683d_697b712406148079bfae4a42_gamaya-case-study-layers-to-show-data-location-filter-12.webp",
        "alt": "Layers to show data Gamaya"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b4c207a3c95d7a6849_697b712406148079bfae4a4d_gamaya-case-study-tables-14.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b4c207a3c95d7a6854_697b712406148079bfae4a4e_gamaya-case-study-flight-calendar-overview-15.webp",
        "alt": "Flight calendar Gamaya"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b3c207a3c95d7a6828_697b712406148079bfae4a4f_gamaya-case-study-mobile-app-interface-16.webp",
        "alt": "Scouting mobile app Gamaya"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b4c207a3c95d7a6843_697b712406148079bfae4a50_gamaya-case-study-reusing-materials-19.webp",
        "alt": "Gamaya after redesign"
      }
    ]
  },
  {
    "slug": "myinterview",
    "title": "MyInterview",
    "industry": "People Management",
    "text": "Redesign to fix the 90% user churn issue",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dd4f4529bced3a7609_697b712406148079bfae4719_myinterview-thumbnail-image-02.webp",
    "headline": "Redesign to fix the 90% user churn issue",
    "sections": [
      "Fixing input design to reduce the candidates&#x27; dramatic churn",
      "Empowering recruiters’ flow with UI/UX best practices",
      "Creating irresistible demos to win enterprise companies",
      "Creating a design system for consistent branding across different products",
      "myInterview’s case shows how good design solves real business problems",
      "What&#x27;s next for myInterview?",
      "Let&#x27;s design something special"
    ],
    "summary": [
      "Even great tech can fail if people don&#x27;t stick around to use it. myInterview knows this all too well. They&#x27;re innovators in the hiring world, with video interviewing software that cuts hiring time by 70% for over 5,000 companies. But they faced a critical issue: 90% of candidates were dropping out mid-interview. And that wasn&#x27;t the only challenge they were facing.",
      "myInterview turned to our team at Eleken with a clear set of challenges:",
      "Each of these tasks was crucial for setting myInterview up for long-term success. Let&#x27;s dive into how we approached each challenge, starting with the most pressing issue — the high candidate churn rate.",
      "The myInterview platform consists of two main user flows: one for recruiters to set up job descriptions, candidate flows, and branding, and another for candidates to complete the customized application process.",
      "We needed to improve user experience of both flows: optimize setting up the job for ease of use and optimize the application process for conversions. But the second issue was more critical to tackle right at the beginning, as the candidate’s retention was critically low."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dd4f4529bced3a7617_697b712406148079bfae4ba5_myinterview-main-image-hero-01.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dd4f4529bced3a7602_697b712406148079bfae4ba6_myinterview-case-study-logo-03.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/690b68e48ed25a585ab079f2_MyInterview%20redesign_before_3.webp",
        "alt": "myInterview before redesign issues"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/690b6a013d9d33c0548baa21_MyInterview%20redesign_before_4.webp",
        "alt": "myInterview after the redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dc4f4529bced3a7583_697b712406148079bfae4ba7_myinterview-case-study-steps-and-question-modules-after-redesign-06.webp",
        "alt": "myInterview improved flow after the redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dc4f4529bced3a75ab_697b712406148079bfae4bad_myinterview-case-study-step-by-step-job-creation-flow-08.webp",
        "alt": " Job postings before publishing."
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dc4f4529bced3a758d_697b712406148079bfae4bb1_myinterview-case-study-custom-branding-options-after-redesign-09.webp",
        "alt": "myInterview custom branding options"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dc4f4529bced3a7587_697b712406148079bfae4bb4_myinterview-case-study-template-system-after-redesign-10.webp",
        "alt": "myInterview job creation system"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dc4f4529bced3a7594_697b712406148079bfae4bb8_myinterview-case-study-real-time-insights-interactive-dashboard-after-redesign-12.webp",
        "alt": "interactive dashboards myInterview"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dc4f4529bced3a75a5_697b712406148079bfae4bb9_myinterview-case-study-real-time-insights-interactive-dashboard-after-redesign-13.webp",
        "alt": "Interactive dashboards myInterview"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dc4f4529bced3a759d_697b712406148079bfae4bbb_myinterview-case-study-real-time-insights-interactive-dashboard-after-redesign-14.webp",
        "alt": "interactive dashboards myInterview"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dc4f4529bced3a75ae_697b712406148079bfae4bba_myinterview-case-study-clients-15.webp",
        "alt": "MyInterview&#x27;s clients"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dc4f4529bced3a75a2_697b712406148079bfae4bbc_myinterview-case-study-chatbot-feature-after-redesign-16.webp",
        "alt": "chatbot prototype myInterview"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dc4f4529bced3a757d_697b712406148079bfae4bbe_myinterview-case-study-design-system-redesign-17.webp",
        "alt": "design system for myInterview"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dc4f4529bced3a7591_697b712406148079bfae4bc0_myinterview-case-study-design-system-redesign-18.webp",
        "alt": "design system for myInterview"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dc4f4529bced3a7599_697b712406148079bfae4bc2_myinterview-case-study-design-system-redesign-19.webp",
        "alt": "Scalable design system after"
      }
    ]
  },
  {
    "slug": "hubble-network",
    "title": "Hubble Network",
    "industry": "Geoservice",
    "text": "How our design helped a geospatial SaaS platform raise $70M in Series B funding",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c261034529da483cdc_697b712406148079bfae4710_hubble-network-thumbnail-image-02.webp",
    "headline": "How our design helped a geospatial SaaS platform raise $70M in Series B funding",
    "sections": [
      "Three days later, we delivered a dashboard that spoke for itself",
      "User flows and wireframes helped us make sense of a complex system",
      "With table-based layouts, we structured a dense set of geospatial data",
      "We designed role-based UX to match how teams actually work",
      "For thousands of moving trackers, we aimed to give users better control",
      "We simplified the alerts flow to provide instant awareness",
      "After user testing, we discovered some pains in the import flow and knew exactly what to do",
      "Eleken and Hubble Network’s partnership led to an investor-ready product, and it’s still growing"
    ],
    "summary": [
      "Hubble Network is aimed at building the future of global connectivity, and one day, they came up with the idea of Smartpin. This is a geospatial platform powered by a commercial-grade network of 80+ million Bluetooth access points from their partners.",
      "At that point, Hubble had a powerful concept and a detailed Product Requirements Document (PRD) for this B2B SaaS product. They needed a dedicated designer partner to deliver UX-centered designs without slowing down the development.",
      "So we stepped in to design Smartpin, a platform that would let users:",
      "→ Monitor and manage assets through real-time satellite data.",
      "→ Visualize geolocation insights in an interactive way."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c261034529da483cee_697b712406148079bfae486b_hubble-network-main-image-hero-01.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c261034529da483cdf_697b712406148079bfae486c_hubble-network-case-study-logo-03.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370be61034529da483b3a_697b712406148079bfae486d_hubble-network-case-study-initial-design-requirements-04.webp",
        "alt": "Initial client design requirements for the main dashboard"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370be61034529da483b3d_697b712406148079bfae486e_hubble-network-case-study-initial-design-requirements-05.webp",
        "alt": "Initial client design requirements for the main dashboard"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bf61034529da483b59_697b712406148079bfae486f_hubble-network-case-study-trial-dashboard-design-06.webp",
        "alt": "Dashboard interface designed by Eleken"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370be61034529da483b4c_697b712406148079bfae4870_hubble-network-case-study-trial-map-design-07.webp",
        "alt": "Dashboard interface designed by Eleken"
      },
      {
        "src": "https://cdn.prod.website-files.com/697b712306148079bfae08e3/697b712406148079bfae2ebd_logo-smartpin.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370be61034529da483b37_697b712406148079bfae4872_hubble-network-case-study-user-flow-08.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bf61034529da483b5f_697b712406148079bfae4871_hubble-network-case-study-product-wireframes-09.webp",
        "alt": "Wireframes for Hubble Network"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370be61034529da483b40_697b712406148079bfae4873_hubble-network-case-study-product-asset-details-page-10.webp",
        "alt": "Asset details page design"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370be61034529da483b52_697b712406148079bfae4874_hubble-network-case-study-admin-role-screen-11.01.webp",
        "alt": "Admin role screen design"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370be61034529da483b49_697b712406148079bfae4876_hubble-network-case-study-admin-role-screen-11.02.webp",
        "alt": "Admin role screen design"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bf61034529da483b5c_697b712406148079bfae4875_hubble-network-case-study-user-role-screen-12.webp",
        "alt": "User role screen"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bf61034529da483b87_697b712406148079bfae4877_hubble-network-case-study-mobile-app-screens-13.webp",
        "alt": "Interface design for the field worker app"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370be61034529da483b46_697b712406148079bfae4878_hubble-network-case-study-mobile-app-scanning-feature-14.webp",
        "alt": "mobile app scanning feature design"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370be61034529da483b4f_697b712406148079bfae4879_hubble-network-case-study-mobile-app-15.webp",
        "alt": "Smartpin app is available for download"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370be61034529da483b30_697b712406148079bfae487a_hubble-network-case-study-initial-design-requirements-16.webp",
        "alt": "Initial client design requirements for group organization"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370be61034529da483b43_697b712406148079bfae487b_hubble-network-case-study-group-organization-design-17.webp",
        "alt": "Asset group organization interface designed by Eleken"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c061034529da483b9c_697b712406148079bfae487c_hubble-network-case-study-asset-overview-design-18.webp",
        "alt": "Asset overview interface by Eleken"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c061034529da483b99_697b712406148079bfae487e_hubble-network-case-study-full-screen-map-view-19.webp",
        "alt": "Full-screen map view"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bf61034529da483b8a_697b712406148079bfae487d_hubble-network-case-study-asset-location-details-20.webp",
        "alt": "Asset last location details"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bf61034529da483b84_697b712406148079bfae487f_hubble-network-case-study-asset-location-details-21.webp",
        "alt": "Asset location history for the last 24 hours"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bf61034529da483b62_697b712406148079bfae4881_hubble-network-case-study-user-alerts-page-22.webp",
        "alt": "User alerts page"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c161034529da483c65_697b712406148079bfae4880_hubble-network-case-study-admin-alerts-page-23.webp",
        "alt": "Admin alerts page"
      }
    ]
  },
  {
    "slug": "bering-lab",
    "title": "Bering Lab",
    "industry": "Legal",
    "text": "How we turned a standard translation tool into a $2.3M pre-Series A success",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a9bf39e49e68022ebd_697b712406148079bfae4712_beringlab-thumbnail-image-02.webp",
    "headline": "How we turned a standard translation tool into a $2.3M pre-Series A success",
    "sections": [
      "We rethought the main translation page to cut the 89% bounce rate",
      "To raise retention, we showed why the premium service is worth paying for",
      "Users needed more value, and we delivered it with a new Smart Glossary",
      "It took a hard effort for us to design a new plugin that became a real differentiator",
      "Our close collaboration helped Bering Lab secure funding and compete with industry leaders",
      "Let&#x27;s design something special"
    ],
    "summary": [
      "In the legal industry, precision and trust are everything, and when it comes to translations, even the smallest mistake can have big consequences. That’s the challenge Bering Lab, a South Korean company, set out to solve.",
      "Their platform combines AI translation with professional human review, giving lawyers and firms a safer way to translate sensitive documents.",
      "But strong technology wasn’t enough, as the team recognized after seeing some red flags:",
      "→ The interface felt too similar to free tools like Google Translate or DeepL.",
      "Despite recently launching a 2.0 version with some design tweaks, the product still wasn’t meeting user expectations. The team realized that to compete in such a crowded market, they needed to offer a better UX."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a9bf39e49e68022eb2_697b712406148079bfae47be_bering-lab-main-image-hero-01.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a9bf39e49e68022ead_697b712406148079bfae47bf_bering-lab-case-study-logo-03.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/697b712306148079bfae08e3/697b712406148079bfae2ebc_logo-beginlab.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a7bf39e49e68022e18_697b712406148079bfae47c0_bering-lab-case-study-dashboard-before-redesign-04.webp",
        "alt": "Translate Text tab in Bering Lab "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a7bf39e49e68022e15_697b712406148079bfae47c1_bering-lab-case-study-dashboard-after-redesign-05.webp",
        "alt": "Text Translation tab after redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a8bf39e49e68022e1e_697b712406148079bfae47c2_bering-lab-case-study-interface-before-redesign-06.webp",
        "alt": "Bering Lab Expert Reviews page before redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a7bf39e49e68022e0e_697b712406148079bfae47c3_bering-lab-case-study-interface-after-redesign-07.webp",
        "alt": "Expert Reviews page redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a8bf39e49e68022e21_697b712406148079bfae47c5_bering-lab-case-study-interface-after-redesign-08.webp",
        "alt": "Interface after redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a8bf39e49e68022e24_697b712406148079bfae47c4_bering-lab-case-study-interface-after-redesign-09.webp",
        "alt": "Interface after redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a8bf39e49e68022e27_697b712406148079bfae47c6_bering-lab-case-study-smart-glossary-10.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a8bf39e49e68022e2d_697b712406148079bfae47c7_bering-lab-case-study-word-plugin-powered-by-llm-11.webp",
        "alt": "Llm-powered tool design"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a8bf39e49e68022e30_697b712406148079bfae47c9_bering-lab-case-study-word-plugin-powered-by-llm-12.webp",
        "alt": "AI-driven review interface"
      }
    ]
  },
  {
    "slug": "network-innovations",
    "title": "Network Innovations",
    "industry": "Geoservice",
    "text": "How Eleken turned a legacy network platform into a modern, user-first product",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698b13213275b98f037f739f_network-innovations-thumbnail-image-02.webp",
    "headline": "How Eleken turned a legacy network platform into a modern, user-first product",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How Eleken turned a legacy network platform into a modern, user-first product",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698b13213275b98f037f739f_network-innovations-thumbnail-image-02.webp",
        "alt": "Network Innovations"
      }
    ]
  },
  {
    "slug": "lambda",
    "title": "Lambda",
    "industry": "Geoservice",
    "text": "How we turned an internal supply chain tool into a client-facing SaaS product",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/69985b58d4e7dee1c8da80c5_lambda-thumbnail-image-02.webp",
    "headline": "How we turned an internal supply chain tool into a client-facing SaaS product",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How we turned an internal supply chain tool into a client-facing SaaS product",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/69985b58d4e7dee1c8da80c5_lambda-thumbnail-image-02.webp",
        "alt": "Lambda"
      }
    ]
  },
  {
    "slug": "newton360",
    "title": "Newton360",
    "industry": "Healthcare",
    "text": "How we built a design system that scaled design and development together",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/69e78405a0f3645ac9080a86_newton360-thumbnail-image-02.webp",
    "headline": "How we built a design system that scaled design and development together",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How we built a design system that scaled design and development together",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/69e78405a0f3645ac9080a86_newton360-thumbnail-image-02.webp",
        "alt": "Newton360"
      }
    ]
  },
  {
    "slug": "kipsi",
    "title": "Kipsi",
    "industry": "AI",
    "text": "How Eleken solved Kipsi’s UX challenges to unlock product-market fit",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c4169dd70c95a8840e_697b712406148079bfae472e_kipsi-thumbnail-image-02.webp",
    "headline": "How Eleken solved Kipsi’s UX challenges to unlock product-market fit",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How Eleken solved Kipsi’s UX challenges to unlock product-market fit",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c4169dd70c95a8840e_697b712406148079bfae472e_kipsi-thumbnail-image-02.webp",
        "alt": "Kipsi"
      }
    ]
  },
  {
    "slug": "aampe",
    "title": "Aampe",
    "industry": "AI",
    "text": "How our design helped the AI marketing platform to raise $18M funding",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a7f38837f7a0526b37_697b712406148079bfae471c_aampe-thumbnail-image-02.webp",
    "headline": "How our design helped the AI marketing platform to raise $18M funding",
    "sections": [
      "Becoming a full-fledged part of the team to fuel platform redesign",
      "100% fit into our client&#x27;s needs and values led to Aampe keeping Eleken designer on indefinitely",
      "Let&#x27;s design something special"
    ],
    "summary": [
      "Aampe is a startup whose goal is to provide an effective solution for companies to generate multiple versions of marketing messages and distribute them. They use AI to offer a scalable approach that allows marketing teams to send thousands of personalized messages to the right audience at the right time, leading to better response rates and engagement.",
      "To maintain the leading position in the market, Aampe always works on making the product better by improving what&#x27;s already there and adding new features. That&#x27;s why having a UI/UX designer on the team is a must for them.",
      "Since 2020, they&#x27;ve been in the market but recently encountered challenges with their in-house designer, which made them seek a new full-time team member. Aampe needed someone who",
      "Still, hiring an in-house designer is time-consuming and resource-intensive. Besides, as data scientists, Aampe founders lacked expertise in evaluating designer skills. Luckily, Eleken work model made hiring process fast and virtually risk-free for Aampe.",
      "It was game-changing for us to be able to get a full-time, fully-dedicated designer on our team without having to worry about qualifying (or even searching for) the candidate. Eleken did all the quality control so we didn't have to."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a7f38837f7a0526b3a_697b712406148079bfae48c0_aampe-main-image-hero-01.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a7f38837f7a0526b33_697b712406148079bfae48c1_aampe-case-study-logo-03.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a4f38837f7a0526a89_697b712406148079bfae48c2_aampe-case-study-before-redesign-05.webp",
        "alt": "Creating trigger in Aampe platform"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a6f38837f7a0526aa5_697b712406148079bfae48c3_aampe-case-study-system-setup-dashboard-07.webp",
        "alt": "System setup dashboard design"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a6f38837f7a0526ab2_697b712406148079bfae48c5_aampe-case-study-before-redesign-08.webp",
        "alt": "Accessibility level before redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a6f38837f7a0526a98_697b712406148079bfae48c4_aampe-case-study-after-redesign-09.webp",
        "alt": "Accessibility level after redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a6f38837f7a0526a95_697b712406148079bfae48c6_aampe-case-study-live-messages-10.webp",
        "alt": "UX accessibility after redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a6f38837f7a0526aab_697b712406148079bfae48c7_aampe-case-study-before-redesign-11.webp",
        "alt": "label management before redesign "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a6f38837f7a0526aae_697b712406148079bfae48c8_aampe-case-study-after-redesign-12.webp",
        "alt": "label management after redesign "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a6f38837f7a0526a9b_697b712406148079bfae48c9_aampe-case-study-after-redesign-13.webp",
        "alt": "label management overview "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a6f38837f7a0526a9e_697b712406148079bfae48ca_aampe-case-study-after-redesign-14.webp",
        "alt": "label management overview after redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a6f38837f7a0526aa2_697b712406148079bfae48cb_aampe-case-study-before-redesign-15.webp",
        "alt": "label management before redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a6f38837f7a0526aa8_697b712406148079bfae48cc_aampe-case-study-after-redesign-16.webp",
        "alt": "monitoring screen design"
      }
    ]
  },
  {
    "slug": "avid",
    "title": "Avid",
    "industry": "AI",
    "text": "How we helped an AI-powered fundraising tool build a feature no one else had",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a7bed3ce3426154c48_697b712406148079bfae4717_avid-thumbnail-image-02.webp",
    "headline": "How we helped an AI-powered fundraising tool build a feature no one else had",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How we helped an AI-powered fundraising tool build a feature no one else had",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a7bed3ce3426154c48_697b712406148079bfae4717_avid-thumbnail-image-02.webp",
        "alt": "Avid"
      }
    ]
  },
  {
    "slug": "my-video-spot",
    "title": "My Video Spot",
    "industry": "Education",
    "text": "How we redesigned My Video Spot’s complex platform into a seamless teacher experience in 2 months",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c6a6d602ae253a5e0b_697b712406148079bfae475f_my-video-spot-thumbnail-image-02.webp",
    "headline": "How we redesigned My Video Spot’s complex platform into a seamless teacher experience in 2 months",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How we redesigned My Video Spot’s complex platform into a seamless teacher experience in 2 months",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c6a6d602ae253a5e0b_697b712406148079bfae475f_my-video-spot-thumbnail-image-02.webp",
        "alt": "My Video Spot"
      }
    ]
  },
  {
    "slug": "data-streams",
    "title": "Data Streams",
    "industry": "Data",
    "text": "How redesign helped data management product achieve global expansion",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ada108b3c53f65e32d_697b712406148079bfae4726_datastreams-thumbnail-image-02.webp",
    "headline": "How redesign helped data management product achieve global expansion",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How redesign helped data management product achieve global expansion",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ada108b3c53f65e32d_697b712406148079bfae4726_datastreams-thumbnail-image-02.webp",
        "alt": "Data Streams"
      }
    ]
  },
  {
    "slug": "redowl",
    "title": "RedOwl",
    "industry": "AI",
    "text": "How our UX design helped a fintech startup raise $1M in funding",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/69944b891b69e88ead3449d9_redowl-thumbnail-image-02.webp",
    "headline": "How our UX design helped a fintech startup raise $1M in funding",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How our UX design helped a fintech startup raise $1M in funding",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/69944b891b69e88ead3449d9_redowl-thumbnail-image-02.webp",
        "alt": "RedOwl"
      }
    ]
  },
  {
    "slug": "whoosh",
    "title": "Whoosh",
    "industry": "Event Management",
    "text": "Creating the next Zoom: how Eleken&#x27;s design expertise makes it possible",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d97093a2084aa9ed39_697b712406148079bfae4730_whoosh-thumbnail-image-02.webp",
    "headline": "Creating the next Zoom: how Eleken&#x27;s design expertise makes it possible",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Creating the next Zoom: how Eleken&#x27;s design expertise makes it possible",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d97093a2084aa9ed39_697b712406148079bfae4730_whoosh-thumbnail-image-02.webp",
        "alt": "Whoosh"
      }
    ]
  },
  {
    "slug": "gotechiez",
    "title": "Gotechiez",
    "industry": "People Management",
    "text": "Gotechiez turns its innovative developer skills assessment product idea into reality",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b69137911d1d90fcbc_697b712406148079bfae472d_gotechiez-thumbnail-image-02.webp",
    "headline": "Gotechiez turns its innovative developer skills assessment product idea into reality",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Gotechiez turns its innovative developer skills assessment product idea into reality",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b69137911d1d90fcbc_697b712406148079bfae472d_gotechiez-thumbnail-image-02.webp",
        "alt": "Gotechiez"
      }
    ]
  },
  {
    "slug": "prift",
    "title": "Prift",
    "industry": "Finance",
    "text": "MVP design for a personal finance platform",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370cd22aa7393eed50e39_697b712406148079bfae4758_prift-thumbnail-image-02.webp",
    "headline": "MVP design for a personal finance platform",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "MVP design for a personal finance platform",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370cd22aa7393eed50e39_697b712406148079bfae4758_prift-thumbnail-image-02.webp",
        "alt": "Prift"
      }
    ]
  },
  {
    "slug": "gpi",
    "title": "Great Power Influence",
    "industry": "Data",
    "text": "The MVP design concept for a data science product for defense and intelligence services",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b7e9598ab894ec1a95_697b712406148079bfae473c_greatpowerinfluence-thumbnail-image-02.webp",
    "headline": "The MVP design concept for a data science product for defense and intelligence services",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "The MVP design concept for a data science product for defense and intelligence services",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b7e9598ab894ec1a95_697b712406148079bfae473c_greatpowerinfluence-thumbnail-image-02.webp",
        "alt": "Great Power Influence"
      }
    ]
  },
  {
    "slug": "healthstream-insights",
    "title": "HealthStream Insights",
    "industry": "Healthcare",
    "text": "How redesign helped HealthStream introduce users to customization of reports on employees’ development",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ba791eed54c6a39a7b_697b712406148079bfae4737_healthstream-thumbnail-image-02.webp",
    "headline": "How redesign helped HealthStream introduce users to customization of reports on employees’ development",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How redesign helped HealthStream introduce users to customization of reports on employees’ development",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ba791eed54c6a39a7b_697b712406148079bfae4737_healthstream-thumbnail-image-02.webp",
        "alt": "HealthStream Insights"
      }
    ]
  },
  {
    "slug": "privado-dining",
    "title": "Privado Dining",
    "industry": "AI",
    "text": "Transforming event management platform with modern UI and an AI co-pilot for faster workflows",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370cdacb03bcdb12af86d_697b712406148079bfae471b_privado-dining-thumbnail-image-02.webp",
    "headline": "Transforming event management platform with modern UI and an AI co-pilot for faster workflows",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Transforming event management platform with modern UI and an AI co-pilot for faster workflows",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370cdacb03bcdb12af86d_697b712406148079bfae471b_privado-dining-thumbnail-image-02.webp",
        "alt": "Privado Dining"
      }
    ]
  },
  {
    "slug": "populate",
    "title": "Populate",
    "industry": "Healthcare",
    "text": "Eleken teams up with a healthcare startup to help build the most customer-centric app in the world",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370cd90ff9e021081bd86_697b712406148079bfae4739_populate-thumbnail-image-02.webp",
    "headline": "Eleken teams up with a healthcare startup to help build the most customer-centric app in the world",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Eleken teams up with a healthcare startup to help build the most customer-centric app in the world",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370cd90ff9e021081bd86_697b712406148079bfae4739_populate-thumbnail-image-02.webp",
        "alt": "Populate"
      }
    ]
  },
  {
    "slug": "advan-research",
    "title": "Advan Research",
    "industry": "Geoservice",
    "text": "How redesign helps to attract new type of users to analytics product",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a6fd87dd8c02a0893e_697b712406148079bfae4733_advanresearch-thumbnail-image-02.webp",
    "headline": "How redesign helps to attract new type of users to analytics product",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How redesign helps to attract new type of users to analytics product",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a6fd87dd8c02a0893e_697b712406148079bfae4733_advanresearch-thumbnail-image-02.webp",
        "alt": "Advan Research"
      }
    ]
  },
  {
    "slug": "invyzia-solutions",
    "title": "Invyzia Solutions",
    "industry": "Finance",
    "text": "Unleashing the full potential of Invyzia&#x27;s legacy app with a redesign",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c1a5ea0b82e17ce806_697b712406148079bfae4731_invyziasolutions-thumbnail-image-02.webp",
    "headline": "Unleashing the full potential of Invyzia&#x27;s legacy app with a redesign",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Unleashing the full potential of Invyzia&#x27;s legacy app with a redesign",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c1a5ea0b82e17ce806_697b712406148079bfae4731_invyziasolutions-thumbnail-image-02.webp",
        "alt": "Invyzia Solutions"
      }
    ]
  },
  {
    "slug": "process-enablement-platform",
    "title": "Process Enablement Platform",
    "industry": "Process Management",
    "text": "Turning vision into investor-ready prototype for a process enablement platform",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d1f75d65d1b9937831_697b712406148079bfae4729_process-enablement-platform-thumbnail-image-02.webp",
    "headline": "Turning vision into investor-ready prototype for a process enablement platform",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Turning vision into investor-ready prototype for a process enablement platform",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d1f75d65d1b9937831_697b712406148079bfae4729_process-enablement-platform-thumbnail-image-02.webp",
        "alt": "Process Enablement Platform"
      }
    ]
  },
  {
    "slug": "drenchworks",
    "title": "Drenchworks",
    "industry": "Real Estate",
    "text": "Scaling modern software for trade contractors with a new Purchasing section",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b23e79e6c0f11b75d0_697b712406148079bfae4724_drenchworks-thumbnail-image-02.webp",
    "headline": "Scaling modern software for trade contractors with a new Purchasing section",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Scaling modern software for trade contractors with a new Purchasing section",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b23e79e6c0f11b75d0_697b712406148079bfae4724_drenchworks-thumbnail-image-02.webp",
        "alt": "Drenchworks"
      }
    ]
  },
  {
    "slug": "glow-labs",
    "title": "Glow Labs",
    "industry": "Marketing",
    "text": "Design for a white-label web3 loyalty rewards program startup moving to a SaaS platform",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b52373773015d2f4b7_697b712406148079bfae4736_glowlabs-thumbnail-image-02.webp",
    "headline": "Design for a white-label web3 loyalty rewards program startup moving to a SaaS platform",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Design for a white-label web3 loyalty rewards program startup moving to a SaaS platform",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b52373773015d2f4b7_697b712406148079bfae4736_glowlabs-thumbnail-image-02.webp",
        "alt": "Glow Labs"
      }
    ]
  },
  {
    "slug": "greenventory",
    "title": "Greenventory",
    "industry": "Geoservice",
    "text": "Design for green energy planning: how we defined Greenventory’s innovative app",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b7a6999ab5973a2bfd_697b712406148079bfae4728_greenventory-thumbnail-image-02.webp",
    "headline": "Design for green energy planning: how we defined Greenventory’s innovative app",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Design for green energy planning: how we defined Greenventory’s innovative app",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b7a6999ab5973a2bfd_697b712406148079bfae4728_greenventory-thumbnail-image-02.webp",
        "alt": "Greenventory"
      }
    ]
  },
  {
    "slug": "gridle",
    "title": "Gridle",
    "industry": "Sales",
    "text": "UI/UX redesign for a client experience platform",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ba8fb8285e6b647282_697b712406148079bfae4727_gridle-thumbnail-image-02.webp",
    "headline": "UI/UX redesign for a client experience platform",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "UI/UX redesign for a client experience platform",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ba8fb8285e6b647282_697b712406148079bfae4727_gridle-thumbnail-image-02.webp",
        "alt": "Gridle"
      }
    ]
  },
  {
    "slug": "highpoint",
    "title": "Highpoint",
    "industry": "Education",
    "text": "Transforming a PeopleSoft campus solution to deliver better user experience to students with a flexible design team",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bb1153e530f384d5d9_697b712406148079bfae4756_highpoint-thumbnail-image-02.webp",
    "headline": "Transforming a PeopleSoft campus solution to deliver better user experience to students with a flexible design team",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Transforming a PeopleSoft campus solution to deliver better user experience to students with a flexible design team",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bb1153e530f384d5d9_697b712406148079bfae4756_highpoint-thumbnail-image-02.webp",
        "alt": "Highpoint"
      }
    ]
  },
  {
    "slug": "idcore",
    "title": "IDCore",
    "industry": "Real Estate",
    "text": "Eleken redesigns IDCore to streamline compliance verification for real estate contractors",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bd2f7832da09bfd400_697b712406148079bfae472b_idcore-thumbnail-image-02.webp",
    "headline": "Eleken redesigns IDCore to streamline compliance verification for real estate contractors",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Eleken redesigns IDCore to streamline compliance verification for real estate contractors",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bd2f7832da09bfd400_697b712406148079bfae472b_idcore-thumbnail-image-02.webp",
        "alt": "IDCore"
      }
    ]
  },
  {
    "slug": "nworx",
    "title": "Nworx",
    "industry": "Education",
    "text": "How Eleken helped the corporate learning management platform solve the problem of negative feedback",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c5e9598ab894ec1fdc_697b712406148079bfae473f_nworx-thumbnail-image-02.webp",
    "headline": "How Eleken helped the corporate learning management platform solve the problem of negative feedback",
    "sections": [
      "We started with the deep product analysis",
      "Thorough research enabled us to design improved user flows",
      "We redesigned a core functionality UX",
      "Directly addressed  users’ needs",
      "Created a mobile version that complements the platform",
      "The client and the users loved the new platform",
      "Let&#x27;s design something special"
    ],
    "summary": [
      "NWORX is a B2B SaaS platform that embeds professional development into everyday work. The tool allows managers of large companies to create learning programs for their employees. The product also helps workers to learn and grow without interrupting their workflow. The ambitious goals of such a platform require flawless user experience.",
      "When by end of 2021 NWORX had collected user and buyer feedback on the product, they realized there was a problem. While the buyer feedback was great, there was a clear opportunity to improve the UX for end users. To work on this aspect, NWORX partnered with Eleken.",
      "To understand where the friction is hidden and how we can help the client’s business to overcome the challenge, we had to understand how the product works.",
      "NWORX customers are businesses that have a certain number of employees. The company submits an application expressing a desire to use NWORX  and then it is approved by creating accounts for the employees of the client company. Now, the company&#x27;s managers can create training programs (of any size) that employees will study.",
      "There’s a system for tracking the individual progress and evaluation of their knowledge at the end of the course. This is the most simple and widespread scenario of using the platform."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c5e9598ab894ec1fd0_697b712406148079bfae4975_nworx-main-image-hero-01.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c5e9598ab894ec1fc9_697b712406148079bfae4976_nworx-case-study-logo-03.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c5e9598ab894ec1f31_697b712406148079bfae4977_nworx-case-study-before-redesign-04.webp",
        "alt": "Nworx platform before"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c5e9598ab894ec1f3c_697b712406148079bfae4978_nworx-case-study-after-redesign-07.webp",
        "alt": "Nworx platform after"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c5e9598ab894ec1f34_697b712406148079bfae4979_nworx-case-study-user-flow-06.webp",
        "alt": "User flows designed by Eleken"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c4e9598ab894ec1f1d_697b712406148079bfae497a_nworx-case-study-after-redesign-08.webp",
        "alt": "Messages"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c5e9598ab894ec1f2e_697b712406148079bfae497b_nworx-case-study-after-redesign-09.webp",
        "alt": "Notifications"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c5e9598ab894ec1f3f_697b712406148079bfae497d_nworx-case-study-after-redesign-10.webp",
        "alt": "Business case situation"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c5e9598ab894ec1f38_697b712406148079bfae497c_nworx-case-study-after-redesign-11.webp",
        "alt": "Journey View"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c4e9598ab894ec1f25_697b712406148079bfae497e_nworx-case-study-after-redesign-mobile-version-12.webp",
        "alt": "Mobile version"
      },
      {
        "src": "https://cdn.prod.website-files.com/697b712306148079bfae08e3/697b712306148079bfae17e4_img-card-05.webp",
        "alt": "image"
      }
    ]
  },
  {
    "slug": "pay-up",
    "title": "PayUp",
    "industry": "Finance",
    "text": "How Eleken partnered with a financial startup to help scale their product quickly with a consistent design system",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c9c6d05012f2a5cc0e_697b712406148079bfae472c_payup-thumbnail-image-02.webp",
    "headline": "How Eleken partnered with a financial startup to help scale their product quickly with a consistent design system",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How Eleken partnered with a financial startup to help scale their product quickly with a consistent design system",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c9c6d05012f2a5cc0e_697b712406148079bfae472c_payup-thumbnail-image-02.webp",
        "alt": "PayUp"
      }
    ]
  },
  {
    "slug": "qu3st",
    "title": "QU3ST",
    "industry": "Data",
    "text": "Redesigning a web3 gaming analytics platform to stand out from the competition",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ce399ad51174b3cc99_697b712406148079bfae471d_qu3st-thumbnail-image-02.webp",
    "headline": "Redesigning a web3 gaming analytics platform to stand out from the competition",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Redesigning a web3 gaming analytics platform to stand out from the competition",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ce399ad51174b3cc99_697b712406148079bfae471d_qu3st-thumbnail-image-02.webp",
        "alt": "QU3ST"
      }
    ]
  },
  {
    "slug": "ricochet-360",
    "title": "Ricochet360",
    "industry": "Sales",
    "text": "Revamping the user interface to make the learning curve for sales managers more tolerable",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d15e060530b6e2e1f5_697b712406148079bfae4760_ricochet360-thumbnail-image-02.webp",
    "headline": "Revamping the user interface to make the learning curve for sales managers more tolerable",
    "sections": [
      "Product analysis to detect weak points",
      "Small changes for big results",
      "Screens restructuring to simplify user flow",
      "Revising priorities of the lead management screen",
      "Redesigning the on-call screen to stop straining the user&#x27;s eyes",
      "Changing the structure of the configuration menu",
      "Renewed design resulted in shortening the learning curve",
      "Let&#x27;s design something special"
    ],
    "summary": [
      "Every successful company reaches a point where it outgrows its product design. That was the case of one of our clients.",
      "Ricochet360 is a cloud phone system and CRM platform that enables sales teams to manage all their prospects in one place, alongside telemarketing, text, and email marketing. They have been on the market for 10 years and were going into the scaling stage. To scale successfully, they wanted to improve user experience and renew the design.",
      "Ricochet360&#x27;s clients loved the software once they got how to use it. The problem was that it took a while to get how to use it. It took about a month for the Ricochet360 team to help clients set up the application, customize it and train an admin to use it. When users struggle so much at learning, they are likely to churn early.",
      "The best way to shorten the learning curve was to make the design more intuitive. For that, Ricochet360 needed experienced designers who could get it right. And that&#x27;s why they came to Eleken.",
      "For successful product redesign, we first had to understand the cause of a shallow learning curve. That’s why we started with the product analysis."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d15e060530b6e2e1f1_697b712406148079bfae4a2e_ricochet360-main-image-hero-01.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d15e060530b6e2e1ec_697b712406148079bfae4a30_ricochet360-case-study-logo-03.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d05e060530b6e2e179_697b712406148079bfae4a31_ricochet360-case-study-after-redesign-04.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d05e060530b6e2e17c_697b712406148079bfae4a33_ricochet360-case-study-product-analysis-05.webp",
        "alt": "Analyzing Ricochet structure"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d05e060530b6e2e183_697b712406148079bfae4a32_ricochet360-case-study-before-redesign-06.webp",
        "alt": "Detecting frictions as a part of product analysis"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d05e060530b6e2e176_697b712406148079bfae4a34_ricochet360-case-study-before-restructuring-10.webp",
        "alt": "Original version of a screen"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d05e060530b6e2e16e_697b712406148079bfae4a35_ricochet360-case-study-before-redesign-08.webp",
        "alt": "Quick improvements in action"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d05e060530b6e2e171_697b712406148079bfae4a36_ricochet360-case-study-screens-restructuring-09.webp",
        "alt": "Restructuring the Ricochet&#x27;s screens"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d05e060530b6e2e189_697b712406148079bfae4a38_ricochet360-case-study-after-restructuring-11.webp",
        "alt": "Ricochet interface after Eleken redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d05e060530b6e2e16b_697b712406148079bfae4a37_ricochet360-case-study-before-redesign-12.webp",
        "alt": "Ricochet intial design"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d05e060530b6e2e18d_697b712406148079bfae4a39_ricochet360-case-study-after-redesign-13.webp",
        "alt": "Eleken&#x27;s design for Ricochet platform"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d05e060530b6e2e190_697b712406148079bfae4a3b_ricochet360-case-study-before-redesign-14.webp",
        "alt": "Ricochet old platform design"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d05e060530b6e2e17f_697b712406148079bfae4a3a_ricochet360-case-study-after-redesign-15.webp",
        "alt": "Ricochet new platform design"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/695f76c4f12192798a319fa3_ricochet360-case-study-after-redesign-configuration-menu-15.webp",
        "alt": "Before and after menu configuration design"
      }
    ]
  },
  {
    "slug": "techcore",
    "title": "TechCore",
    "industry": "Data",
    "text": "Eleken designed an intuitive software management platform for small and middle business",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d4270a0ad7956d7858_697b712406148079bfae4723_techcore-thumbnail-image-02.webp",
    "headline": "Eleken designed an intuitive software management platform for small and middle business",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Eleken designed an intuitive software management platform for small and middle business",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d4270a0ad7956d7858_697b712406148079bfae4723_techcore-thumbnail-image-02.webp",
        "alt": "TechCore"
      }
    ]
  },
  {
    "slug": "b-well",
    "title": "b.well",
    "industry": "Healthcare",
    "text": "Providing a healthcare company with quick design support not to let them fall behind their plans",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dd615366ef313021ce_697b712406148079bfae471a_b.well-thumbnail-image-02.webp",
    "headline": "Providing a healthcare company with quick design support not to let them fall behind their plans",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Providing a healthcare company with quick design support not to let them fall behind their plans",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370dd615366ef313021ce_697b712406148079bfae471a_b.well-thumbnail-image-02.webp",
        "alt": "b.well"
      }
    ]
  },
  {
    "slug": "cheerity",
    "title": "Cheerity",
    "industry": "Marketing",
    "text": "A redesign of the social campaign platform and amazing marketing website design",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae9a7d88d87d1438eb_697b712406148079bfae4734_cheerity-thumbnail-image-02.webp",
    "headline": "A redesign of the social campaign platform and amazing marketing website design",
    "sections": [
      "Communication is the key",
      "UI decisions",
      "Unique features",
      "Results of cooperation",
      "Let&#x27;s design something special"
    ],
    "summary": [
      "Cheerity is the world&#x27;s first purpose-driven digital campaign platform that serves enterprise customers, whose social campaigns have reached more than 100 million people. They also offer a SaaS platform for smaller customers.",
      "So when in spring 2021 the company turned to Eleken to redesign their product and create a new website, they could fully rely on us - as a design agency for SaaS businesses we have the relevant expertise and were glad to help embody their vision.",
      "Last year Cheerity started working on the small business version of their product, so they needed to update both their marketing website and internal products. They also had to implement subscription-based service best practices for their external website, so that customers could sign up for their new product directly on their website. To make all these things happen, the company needed a designer that could build the website under their supervision.",
      "The Cheerity team was looking specifically for a design agency with experience in building SaaS products. They also wanted to avoid a turnover of designers during the cooperation. All these factors made Eleken a perfect choice for the client. Our dedicated designer was the main point of contact for the client’s team throughout the project.",
      "Our designer worked closely with the client’s team who provided detailed requirements and references which made cooperation frictionless and very effective."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ae9a7d88d87d1438e8_697b712406148079bfae4ab1_cheerity-main-image-hero-01.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ad9a7d88d87d1438da_697b712406148079bfae4ab2_cheerity-case-study-logo-03.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ad9a7d88d87d143875_697b712406148079bfae4ab3_cheerity-case-study-screens-after-redesign-04.webp",
        "alt": "Cheerity case study"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ad9a7d88d87d14385f_697b712406148079bfae4ab4_cheerity-case-study-ui-decisions-after-redesign-05.webp",
        "alt": "Cheerity UI redesign"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ad9a7d88d87d143852_697b712406148079bfae4ab5_cheerity-case-study-unique-features-after-redesign-06.webp",
        "alt": "Cheerity campaign builder"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ad9a7d88d87d143862_697b712406148079bfae4ab6_cheerity-case-study-unique-features-after-redesign-07.webp",
        "alt": "Cheerity campaign builder"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ad9a7d88d87d143858_697b712406148079bfae4ab7_cheerity-case-study-dashboard-after-redesign-08.webp",
        "alt": "Campaign builder after redesign Cheerity"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ad9a7d88d87d143865_697b712406148079bfae4ab9_cheerity-case-study-dashboard-after-redesign-09.webp",
        "alt": "Dashboard after redesign Cheerity"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ad9a7d88d87d143855_697b712406148079bfae4ab8_cheerity-case-study-dashboard-after-redesign-10.webp",
        "alt": "Cheerity maps after redesign"
      }
    ]
  },
  {
    "slug": "bookpeep",
    "title": "BookPeep",
    "industry": "Healthcare",
    "text": "Improving the design of a customizable booking platform",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370aa6dc5a822ce6e1643_697b712406148079bfae4735_bookpeep-thumbnail-image-02.webp",
    "headline": "Improving the design of a customizable booking platform",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Improving the design of a customizable booking platform",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370aa6dc5a822ce6e1643_697b712406148079bfae4735_bookpeep-thumbnail-image-02.webp",
        "alt": "BookPeep"
      }
    ]
  },
  {
    "slug": "jobcall",
    "title": "JobCall",
    "industry": "Real Estate",
    "text": "Helping a property maintenance startup turn their MVP into a full-scale product",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c12f72d15374638990_697b712406148079bfae4738_jobcall-thumbnail-image-02.webp",
    "headline": "Helping a property maintenance startup turn their MVP into a full-scale product",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Helping a property maintenance startup turn their MVP into a full-scale product",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c12f72d15374638990_697b712406148079bfae4738_jobcall-thumbnail-image-02.webp",
        "alt": "JobCall"
      }
    ]
  },
  {
    "slug": "seo-crawl",
    "title": "SEOcrawl",
    "industry": "Marketing",
    "text": "SEOcrawl grows 2X after a complete UI/UX design overhaul",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d299c769a90d1a8a6e_697b712406148079bfae4752_seocrawl-thumbnail-image-02.webp",
    "headline": "SEOcrawl grows 2X after a complete UI/UX design overhaul",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "SEOcrawl grows 2X after a complete UI/UX design overhaul",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d299c769a90d1a8a6e_697b712406148079bfae4752_seocrawl-thumbnail-image-02.webp",
        "alt": "SEOcrawl"
      }
    ]
  },
  {
    "slug": "textmagic",
    "title": "TextMagic",
    "industry": "Marketing",
    "text": "Designing a CX platform to support Textmagic’s product expansion strategy",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d8796de2cba5975209_697b712406148079bfae4757_textmagic-thumbnail-image-02.webp",
    "headline": "Designing a CX platform to support Textmagic’s product expansion strategy",
    "sections": [
      "One platform that unites all products in a consistent way to not confuse the users",
      "Live Chats",
      "Email Campaigns",
      "SMS Campaigns",
      "Admin Dashboard",
      "Using design system to make new products consistent with the existing ones",
      "A team that can adapt to any changes in work volume",
      "Always in touch"
    ],
    "summary": [
      "‍Founded in 2001, TextMagic is the UK-based all-in-one text messaging service that has been successfully helping small businesses around the world do mobile marketing.",
      "In 2019, after gaining success in their niche, TextMagic were looking to expand their product line. We joined their team to help them design the products for their new Marketing Suite with SMS and email marketing campaigns and live chats. But as their requirements evolved over time, we ended up designing an entire platform. Read on to learn the details.",
      "Most SaaS companies in the space of sales and marketing usually start small and grow very complex as they add up new features and additional products. More features equal better capabilities. But at the same time, they equal worse customer experience.",
      "TextMagic wanted to avoid that. They were looking to become a new version of Zendesk, only simple from the user perspective. This product vision aligned with what users love about the company, as shown in many TextMagic reviews. Simplicity and functionality are core strengths they didn’t want to lose.",
      "By combining marketing campaigns, CRM and help desk functionality on one platform, we wanted to reduce the complexity and improve the productivity of the TextMagic customers&#x27; teams."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d8796de2cba5975200_697b712406148079bfae48f5_textmagic-main-image-hero-01.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d8796de2cba59751fd_697b712406148079bfae48f7_textmagic-case-study-logo-03.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba5975108_697b712406148079bfae48f6_textmagic-case-study-platform-screens-04.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba59750ee_697b712406148079bfae48f8_textmagic-case-study-chats-fill-message-05.webp",
        "alt": "Campaign configuration flow"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba5975102_697b712406148079bfae48f9_textmagic-case-study-campaigns-template-06.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba59750e5_697b712406148079bfae48fa_textmagic-case-study-live-chats-07.webp",
        "alt": "Live chats design"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d4796de2cba59750ba_697b712406148079bfae48fb_textmagic-case-study-settings-widget-appearance-08.webp",
        "alt": "Customization options"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d5796de2cba59750cb_697b712406148079bfae48fc_textmagic-case-study-chat-user-information-09.webp",
        "alt": "User interface for a support agent"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba59750f6_697b712406148079bfae48fd_textmagic-case-study-history-actions-10.webp",
        "alt": "Page with all the information related to visitors"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d5796de2cba59750c8_697b712406148079bfae48fe_textmagic-case-study-history-hover-11.webp",
        "alt": "Chat history records for all conversations"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d5796de2cba59750ce_697b712406148079bfae48ff_textmagic-case-study-setings-overview-12.webp",
        "alt": "Chat performance overview screen design"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba59750f3_697b712406148079bfae4900_textmagic-case-study-campaigns-setup-s1-13.webp",
        "alt": "intuitive email configuration flow"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d4796de2cba59750bd_697b712406148079bfae4901_textmagic-case-study-campaigns-segments-settings-14.webp",
        "alt": " easy-to-define conditions"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba59750f9_697b712406148079bfae4903_textmagic-case-study-campaigns-template-use-cases-15.webp",
        "alt": "Template section in campaign configuration flow"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba59750e8_697b712406148079bfae4902_textmagic-case-study-campaigns-template-themes-16.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba59750dc_697b712406148079bfae4904_textmagic-case-study-campaigns-design-17.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d6796de2cba59750d8_697b712406148079bfae4906_extmagic-case-study-sms-campaigns-setup-empty-18.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba59750e2_697b712406148079bfae4905_textmagic-case-study-sms-campaigns-message-19.webp",
        "alt": "drag-and-drop funcionality to personalize messages"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba59750eb_697b712406148079bfae4907_textmagic-case-study-sms-campaigns-message-insert-template-20.webp",
        "alt": "ready-made templates for SMS configuration"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba59750df_697b712406148079bfae4909_textmagic-case-study-sms-campaigns-message-file-uploaded-21.webp",
        "alt": "message preview design"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba59750fc_697b712406148079bfae4908_textmagic-case-study-sms-campaigns-review-22.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba5975105_697b712406148079bfae490a_textmagic-case-study-admin-dashboard-23.webp",
        "alt": "Admin dashboard design"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7796de2cba59751a0_697b712406148079bfae490b_textmagic-case-study-image-24.webp",
        "alt": "TextMagic design system"
      }
    ]
  },
  {
    "slug": "tymewise",
    "title": "Tymewise",
    "industry": "People Management",
    "text": "A time tracking web application to save your time (and money)",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7340137d05e6b3c21_697b712406148079bfae475c_tymewise-thumbnail-image-02.webp",
    "headline": "A time tracking web application to save your time (and money)",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "A time tracking web application to save your time (and money)",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d7340137d05e6b3c21_697b712406148079bfae475c_tymewise-thumbnail-image-02.webp",
        "alt": "Tymewise"
      }
    ]
  },
  {
    "slug": "process-place",
    "title": "Process Place",
    "industry": "Process Management",
    "text": "How we designed a workflow management app that fights organizational chaos",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ce7e96a4d758649836_697b712406148079bfae475d_processplace-thumbnail-image-02.webp",
    "headline": "How we designed a workflow management app that fights organizational chaos",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How we designed a workflow management app that fights organizational chaos",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ce7e96a4d758649836_697b712406148079bfae475d_processplace-thumbnail-image-02.webp",
        "alt": "Process Place"
      }
    ]
  },
  {
    "slug": "refera",
    "title": "Refera",
    "industry": "Healthcare",
    "text": "Landing page and product redesign for a dentist referral solution",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d022aa7393eed50f72_697b712406148079bfae475e_refera-thumbnail-image-02.webp",
    "headline": "Landing page and product redesign for a dentist referral solution",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Landing page and product redesign for a dentist referral solution",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d022aa7393eed50f72_697b712406148079bfae475e_refera-thumbnail-image-02.webp",
        "alt": "Refera"
      }
    ]
  },
  {
    "slug": "primepro",
    "title": "PrimePro",
    "industry": "Real Estate",
    "text": "MVP design for a mobile app that connects contractors and on-demand workers",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370cbb71f52d9141d98fb_697b712406148079bfae471e_primepro-thumbnail-image-02.webp",
    "headline": "MVP design for a mobile app that connects contractors and on-demand workers",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "MVP design for a mobile app that connects contractors and on-demand workers",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370cbb71f52d9141d98fb_697b712406148079bfae471e_primepro-thumbnail-image-02.webp",
        "alt": "PrimePro"
      }
    ]
  },
  {
    "slug": "stradigi-ai",
    "title": "Stradigi AI",
    "industry": "AI",
    "text": "Revamping AI solutions provider to make it understandable for business users",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d5be844c01236c95d8_697b712406148079bfae473a_stradigiai-thumbnail-image-02.webp",
    "headline": "Revamping AI solutions provider to make it understandable for business users",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Revamping AI solutions provider to make it understandable for business users",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d5be844c01236c95d8_697b712406148079bfae473a_stradigiai-thumbnail-image-02.webp",
        "alt": "Stradigi AI"
      }
    ]
  },
  {
    "slug": "hirerise",
    "title": "Hirerise",
    "industry": "People Management",
    "text": "UI/UX design for an applicant tracking system",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bc2f72d15374638808_697b712406148079bfae4742_hirerise-thumbnail-image-02.webp",
    "headline": "UI/UX design for an applicant tracking system",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "UI/UX design for an applicant tracking system",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bc2f72d15374638808_697b712406148079bfae4742_hirerise-thumbnail-image-02.webp",
        "alt": "Hirerise"
      }
    ]
  },
  {
    "slug": "reform",
    "title": "Reform",
    "industry": "Data",
    "text": "Designing a data preparation solution: from HTML prototype to market-ready product",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d0d90223a35d34ff43_697b712406148079bfae4732_reform-thumbnail-image-02.webp",
    "headline": "Designing a data preparation solution: from HTML prototype to market-ready product",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Designing a data preparation solution: from HTML prototype to market-ready product",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d0d90223a35d34ff43_697b712406148079bfae4732_reform-thumbnail-image-02.webp",
        "alt": "Reform"
      }
    ]
  },
  {
    "slug": "spoonfed",
    "title": "Spoonfed",
    "industry": "Event Management",
    "text": "A redesign for food logistics product",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d483d91811364c1120_697b712406148079bfae473d_spoonfed-thumbnail-image-02.webp",
    "headline": "A redesign for food logistics product",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "A redesign for food logistics product",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d483d91811364c1120_697b712406148079bfae473d_spoonfed-thumbnail-image-02.webp",
        "alt": "Spoonfed"
      }
    ]
  },
  {
    "slug": "involi",
    "title": "INVOLI",
    "industry": "Geoservice",
    "text": "UI/UX redesign for drone management platform",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c0a6d602ae253a5acf_697b712406148079bfae4759_involi-thumbnail-image-02.webp",
    "headline": "UI/UX redesign for drone management platform",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "UI/UX redesign for drone management platform",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c0a6d602ae253a5acf_697b712406148079bfae4759_involi-thumbnail-image-02.webp",
        "alt": "INVOLI"
      }
    ]
  },
  {
    "slug": "haven-diagnostics",
    "title": "Haven Diagnostics",
    "industry": "Healthcare",
    "text": "Returning to safe office spaces",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ba340137d05e6b30f0_697b712406148079bfae475b_haven-diagnostics-thumbnail-image-02.webp",
    "headline": "Returning to safe office spaces",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Returning to safe office spaces",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ba340137d05e6b30f0_697b712406148079bfae475b_haven-diagnostics-thumbnail-image-02.webp",
        "alt": "Haven Diagnostics"
      }
    ]
  },
  {
    "slug": "favorably",
    "title": "Favorably",
    "industry": "Sales",
    "text": "How Eleken designed an MVP of a unique referral-based platform for enterprise sales teams",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b24055bf2ea81af41e_697b712406148079bfae4740_favorably-thumbnail-image-02.webp",
    "headline": "How Eleken designed an MVP of a unique referral-based platform for enterprise sales teams",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How Eleken designed an MVP of a unique referral-based platform for enterprise sales teams",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b24055bf2ea81af41e_697b712406148079bfae4740_favorably-thumbnail-image-02.webp",
        "alt": "Favorably"
      }
    ]
  },
  {
    "slug": "logitude-word",
    "title": "LogitudeWorld",
    "industry": "Process Management",
    "text": "Eleken designed an intuitive white-label solution for a shipment tracking platform",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c388389284240b3daa_697b712406148079bfae4722_logitudeworld-thumbnail-image-02.webp",
    "headline": "Eleken designed an intuitive white-label solution for a shipment tracking platform",
    "sections": [
      "Creating an intuitive and informative dashboard through iterative design",
      "Creating white label design while avoiding over-customization",
      "Eleken designed an accessible tracking platform",
      "Let&#x27;s design something special"
    ],
    "summary": [
      "LogitudeWorld is a freight forwarding SaaS platform that provides its customers with logistics management software to manage daily communication with customers, partners, agents, and carriers. Looking to expand to a new market, the company wanted to create a brand new platform for their clients’ clients to track the shipments with ease.",
      "That&#x27;s why LogitudeWorld came to Eleken, trusting our experience designing complex apps that are easy to use. As we&#x27;ve already designed a freight tendering platform, TenderX, we had the right expertise to join the project.",
      "The dashboard where the customers can track their shipments is the first screen the customers see and the one they&#x27;ll interact with the most.",
      "For the first version, we tried to make the dashboard as simple to get as it could get. The data was divided into blocks, distinctive from one another. Our designers also used different types of diagrams, as well as distinctive color palettes, to make sure the customer can get the info they need at first glance.",
      "However, after receiving customer feedback, it became clear that it was not what they actually needed. We designed a strategic dashboard to provide the users with a birds-eye overview of their shipments, while what they needed was an operational dashboard to keep track of real-time data. Their wish is our command, so we got down to work."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c388389284240b3db7_697b712406148079bfae4515_LogitudeWorld%2520tracking%2520platform_dasboard_1.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c388389284240b3db4_697b712406148079bfae4517_LogitudeWorld%2520tracking%2520platform_logo_2.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c188389284240b3c1b_697b712406148079bfae4516_LogitudeWorld%2520tracking%2520platform_dasboard_3.webp",
        "alt": "first version of the dashboard design LogitudeWorld"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c288389284240b3c2d_697b712406148079bfae4518_LogitudeWorld%2520tracking%2520platform_dasboard_4.webp",
        "alt": "Prototype of the dashboard design LogitudeWorld"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c188389284240b3c12_697b712406148079bfae451a_LogitudeWorld%2520tracking%2520platform_dasboard_5.webp",
        "alt": "Navigation before redesign LogitudeWorld"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c188389284240b3c1e_697b712406148079bfae4519_LogitudeWorld%2520tracking%2520platform_dasboard_6.webp",
        "alt": "Navigation after redesign LogitudeWorld"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c188389284240b3c21_697b712406148079bfae4525_LogitudeWorld%2520tracking%2520platform_labels_7.webp",
        "alt": "Labels for icons before the redesign LogitudeWorld"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c288389284240b3c33_697b712406148079bfae4526_LogitudeWorld%2520tracking%2520platform_dasboard_8.webp",
        "alt": "Labels for icons after the redesign LogitudeWorld"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c288389284240b3c36_697b712406148079bfae4528_LogitudeWorld%2520tracking%2520platform_dasboard_9.webp",
        "alt": "LogitudeWorld dashboard"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c288389284240b3c3d_697b712406148079bfae452c_LogitudeWorld%2520tracking%2520platform_dasboard_10.webp",
        "alt": "LogitudeWorld dashboard"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c288389284240b3c29_697b712406148079bfae452b_LogitudeWorld%2520tracking%2520platform_dasboard_11.webp",
        "alt": "LogitudeWorld dashboard"
      }
    ]
  },
  {
    "slug": "habitspace",
    "title": "HabitSpace",
    "industry": "Healthcare",
    "text": "How we designed an engaging mobile app that helps people track their habits and improve their quality of life",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b7373b16e9e0b5b7ca_697b712406148079bfae4755_habitspace-thumbnail-image-02.webp",
    "headline": "How we designed an engaging mobile app that helps people track their habits and improve their quality of life",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How we designed an engaging mobile app that helps people track their habits and improve their quality of life",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b7373b16e9e0b5b7ca_697b712406148079bfae4755_habitspace-thumbnail-image-02.webp",
        "alt": "HabitSpace"
      }
    ]
  },
  {
    "slug": "vector0",
    "title": "Vector0",
    "industry": "Data",
    "text": "Eleken&#x27;s designer joins Vector0&#x27;s team to create UI/UX for cybersecurity project",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d8cfb5bd71ab715d13_697b712406148079bfae472a_vector0-thumbnail-image-02.webp",
    "headline": "Eleken&#x27;s designer joins Vector0&#x27;s team to create UI/UX for cybersecurity project",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Eleken&#x27;s designer joins Vector0&#x27;s team to create UI/UX for cybersecurity project",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d8cfb5bd71ab715d13_697b712406148079bfae472a_vector0-thumbnail-image-02.webp",
        "alt": "Vector0"
      }
    ]
  },
  {
    "slug": "cylynx",
    "title": "Cylynx",
    "industry": "Finance",
    "text": "Designing an MVP for a no-code graph visualization platform",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370af796de2cba5973e6f_697b712406148079bfae4741_cylynx-thumbnail-image-02.webp",
    "headline": "Designing an MVP for a no-code graph visualization platform",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Designing an MVP for a no-code graph visualization platform",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370af796de2cba5973e6f_697b712406148079bfae4741_cylynx-thumbnail-image-02.webp",
        "alt": "Cylynx"
      }
    ]
  },
  {
    "slug": "tendrx",
    "title": "TendrX",
    "industry": "Process Management",
    "text": "UI/UX design for a freight tendering platform that connects shippers and carriers through RFI",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d86f1d434bb4a9a7a5_697b712406148079bfae4750_tendrx-thumbnail-image-02.webp",
    "headline": "UI/UX design for a freight tendering platform that connects shippers and carriers through RFI",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "UI/UX design for a freight tendering platform that connects shippers and carriers through RFI",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d86f1d434bb4a9a7a5_697b712406148079bfae4750_tendrx-thumbnail-image-02.webp",
        "alt": "TendrX"
      }
    ]
  },
  {
    "slug": "megastep",
    "title": "MegaStep",
    "industry": "Data",
    "text": "Design from scratch in action or how we helped quality control app to jump into SaaS market",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a5a6999ab5973a27f9_697b712406148079bfae4720_megastep-thumbnail-image-02.webp",
    "headline": "Design from scratch in action or how we helped quality control app to jump into SaaS market",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Design from scratch in action or how we helped quality control app to jump into SaaS market",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a5a6999ab5973a27f9_697b712406148079bfae4720_megastep-thumbnail-image-02.webp",
        "alt": "MegaStep"
      }
    ]
  },
  {
    "slug": "clearpoint-strategy",
    "title": "ClearPoint Strategy",
    "industry": "Data",
    "text": "Dashboard design for ClearPoint’s award-winning solution",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370aacfb5bd71ab715283_697b712406148079bfae4721_clearpointstrategy-thumbnail-image-02.webp",
    "headline": "Dashboard design for ClearPoint’s award-winning solution",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Dashboard design for ClearPoint’s award-winning solution",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370aacfb5bd71ab715283_697b712406148079bfae4721_clearpointstrategy-thumbnail-image-02.webp",
        "alt": "ClearPoint Strategy"
      }
    ]
  },
  {
    "slug": "picasaas",
    "title": "PicaSaaS",
    "industry": "Data",
    "text": "Redesign and dashboard design for an automated SaaS building platform",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c90174b574ba32cd38_697b712406148079bfae473b_picasaas-thumbnail-image-02.webp",
    "headline": "Redesign and dashboard design for an automated SaaS building platform",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Redesign and dashboard design for an automated SaaS building platform",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c90174b574ba32cd38_697b712406148079bfae473b_picasaas-thumbnail-image-02.webp",
        "alt": "PicaSaaS"
      }
    ]
  },
  {
    "slug": "plantiful",
    "title": "Plantiful",
    "industry": "Process Management",
    "text": "Becoming the design agency for Plantiful app to revolutionize the plant industry",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370cb8b5cdf28747e4d0b_697b712406148079bfae471f_plantiful-thumbnail-image-02.webp",
    "headline": "Becoming the design agency for Plantiful app to revolutionize the plant industry",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Becoming the design agency for Plantiful app to revolutionize the plant industry",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370cb8b5cdf28747e4d0b_697b712406148079bfae471f_plantiful-thumbnail-image-02.webp",
        "alt": "Plantiful"
      }
    ]
  },
  {
    "slug": "photobooth-supply",
    "title": "Photobooth Supply",
    "industry": "Event Management",
    "text": "Redesign of Web and iOS Applications for a Company that Helps People Capture Their Precious Moments",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c85e060530b6e2df3c_697b712406148079bfae4751_photoboothsupply-thumbnail-image-02.webp",
    "headline": "Redesign of Web and iOS Applications for a Company that Helps People Capture Their Precious Moments",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Redesign of Web and iOS Applications for a Company that Helps People Capture Their Precious Moments",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c85e060530b6e2df3c_697b712406148079bfae4751_photoboothsupply-thumbnail-image-02.webp",
        "alt": "Photobooth Supply"
      }
    ]
  },
  {
    "slug": "astraea",
    "title": "Astraea",
    "industry": "Geoservice",
    "text": "Eleken designers join Astraea&#x27;s team to enhance geospatial SaaS, attracting new customers and investors",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a86ab7c02722a469f7_697b712406148079bfae4753_astaea-thumbnail-image-02.webp",
    "headline": "Eleken designers join Astraea&#x27;s team to enhance geospatial SaaS, attracting new customers and investors",
    "sections": [
      "As an early-stage startup, Astraea was working toward its product-market fit",
      "The vision was bold and the plans were big, but Astraea faced a roadblock in terms of a lack of design resources",
      "Getting in-house experience with Eleken remote designers",
      "Getting playful with Notebook AI",
      "Customizing design for external clients from different industries",
      "Designing for urgent needs",
      "Eleken&#x27;s support with UI/UX design resulted in increased interest from investors and new businesses",
      "Let&#x27;s design something special"
    ],
    "summary": [
      "Astraea is the Greek goddess of justice and an AI platform that combines cutting-edge technologies and analytics-ready satellite imagery.",
      "At the time we entered the project, Astraea was a startup that has just launched its product — a platform intended to make it really easy for anyone to acquire, discover, and analyze satellite data at scale. Businesses, NGOs, government institutions, energy, and ecology initiatives — Astraea wanted to make satellite data accessible for everyone who needs it.",
      "Achieving product-market fit is considered a critical milestone for startups and new products seeking to succeed in the marketplace, as it means your solution resonates with its target customers, solves their problems, and generates enough demand and revenue to sustain a viable business.",
      "The process of achieving product-market fit involves demonstrations to potential users and investors. For that reason, Astraea’s team needed to radically improve the quality of their product’s user interface and make it attractive, usable, and consistent. Additionally, they wanted to build tailored applications on top of their existing platform to enable specific industry verticals such as real estate, finance, agriculture, and conservation.",
      "With so much work needed to be done as soon as possible, Astraea started exploring what options they had to get proper help."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a86ab7c02722a46a44_697b712406148079bfae458e_Astraea_dashboard_1.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a86ab7c02722a469f0_697b712406148079bfae4590_Astraea_logo_2.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/69836e3d8ec64957942cebba_697b712406148079bfae4591_Astraea_dashboard_12.webp",
        "alt": "geospatial SaaS app design case study"
      },
      {
        "src": "https://cdn.prod.website-files.com/697b712306148079bfae08e3/697b712306148079bfae17e6_img-card-08.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a76ab7c02722a4691d_697b712406148079bfae4592_Astraea_dashboard_4.webp",
        "alt": "geospatial interface design example with a map"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a56ab7c02722a468d4_697b712406148079bfae4593_Astraea_dashboard_5.webp",
        "alt": "geospatial SaaS design example "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a56ab7c02722a468dc_697b712406148079bfae459d_Astraea_dashboard_6webp__.webp",
        "alt": "UI UX design examples for geospatial SaaS platforms"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a56ab7c02722a468e2_697b712406148079bfae4594_Astraea_dashboard_7.webp",
        "alt": "geospatial SaaS UI UX design "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a76ab7c02722a46910_697b712406148079bfae4595_Astraea_dashboard_8.webp",
        "alt": "bad map UI example for a geoservice SaaS app"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a56ab7c02722a468d7_697b712406148079bfae4596_Astraea_dashboard_9.webp",
        "alt": "map UI and UX design for a geospatial SaaS app"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a66ab7c02722a468f3_697b712406148079bfae4597_Astraea_dashboard_10.webp",
        "alt": "geospatial platform design "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a76ab7c02722a46906_697b712406148079bfae4598_Astraea_dashboard_11.webp",
        "alt": "map UI design example for a geoservice platform that analyse satelite data"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a66ab7c02722a468f0_697b712406148079bfae459a_Astraea_dashboard_13.webp",
        "alt": "AI design for geospatial SaaS app"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a66ab7c02722a468f7_697b712406148079bfae4599_Astraea_dashboard_14.webp",
        "alt": "geospatial platform design case study"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a76ab7c02722a46900_697b712406148079bfae459b_Astraea_dashboard_15.webp",
        "alt": "UI/UX design case study for a geospatial app with AI feature"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a76ab7c02722a46903_697b712406148079bfae459c_Astraea_dashboard_16.webp",
        "alt": "error page design examples "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a56ab7c02722a468df_697b712406148079bfae459e_Astraea_dashboard_17.webp",
        "alt": "geospatial SaaS app design example"
      }
    ]
  },
  {
    "slug": "habstash",
    "title": "Habstash",
    "industry": "Finance",
    "text": "Designing an MVP for a startup that helps people navigate savings needed to buy homes",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bb6621b66531fdfd53_697b712406148079bfae475a_habstash-thumbnail-image-02.webp",
    "headline": "Designing an MVP for a startup that helps people navigate savings needed to buy homes",
    "sections": [
      "Your universal solution in one app",
      "Progressing the existing prototype to an MVP",
      "Design process",
      "The result",
      "Let&#x27;s design something special"
    ],
    "summary": [
      "Millions of people dream of buying a home, but for the majority, this goal seems unattainable due to a lack of capital. And very often the process of saving money for your own house turns into an exhausting marathon.",
      "You need to consider and calculate how quickly you will be able to buy a home with your current income, how much money you need to save up monthly to reach your goal, what real-life prices for the house in the location you like are, how much taxes you will have to pay, and much more.",
      "Other apps and services on the market that help to solve the above issues are usually complicated or focus on solving one specific task only. In this regard, our client, Hubstash, came up with the idea of building an app aimed at simplifying the process of buying a house, and showing people in Britain that everyone can become a homeowner.",
      "The main idea of the software was to collect all the needed information and tools for users that want to buy a dwelling in one place.",
      "Habstash is an application that, based on the user’s data and preferences, such as income, home type, amount of savings, location, and so on, shows what house/apartment a person can afford with their current budget or how much more money they have to save up to buy a better variant while giving a piece of advice on how to do it."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bb6621b66531fdfd57_697b712406148079bfae4b31_habstash-main-image-hero-01.webp",
        "alt": ""
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370bb6621b66531fdfd5a_697b712406148079bfae4b33_habstash-case-study-logo-03.webp",
        "alt": "image"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ba6621b66531fdfcfa_697b712406148079bfae4b34_habstash-case-study-home-playground-04.webp",
        "alt": "fintech app design with interactive map for choosing property"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b96621b66531fdfce2_697b712406148079bfae4b36_habstash-case-study-sign-up-flow-step1-05.webp",
        "alt": "Wizard UX for user onboarding of a fintech SaaS "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ba6621b66531fdfd03_697b712406148079bfae4b35_habstash-case-study-sign-up-flow-step2-06.webp",
        "alt": "user onboarding steps UI design example "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b86621b66531fdfcd2_697b712406148079bfae4b37_habstash-case-study-sign-up-flow-step3-07.webp",
        "alt": "progressive disclosure UX for a property purchase fintech SaaS  "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ba6621b66531fdfcee_697b712406148079bfae4b3a_habstash-case-study-sign-up-flow-step4-08.webp",
        "alt": "interactive map UI for home buying SaaS app"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b96621b66531fdfcdf_697b712406148079bfae4b38_habstash-case-study-sign-up-flow-final-step-09.webp",
        "alt": "financial goal graph visualisation for a fintech SaaS "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/69666315bfddbee4d2c160db_habstash-case-study-email-reminders-10.01.webp",
        "alt": "email reminders design example for a fintech SaaS platform"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/6966631ea860c2eca6fd73f8_habstash-case-study-email-reminders-10.02.webp",
        "alt": "email reminders design example"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ba6621b66531fdfcf7_697b712406148079bfae4b39_habstash-case-study-home-playground-11.webp",
        "alt": "saving calculator design with interactive map for buying property UI and UX"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ba6621b66531fdfcf1_697b712406148079bfae4b40_habstash-case-study-dashboard-12.webp",
        "alt": "fintech dashboard design example with progress bar for goal tracking "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ba6621b66531fdfd06_697b712406148079bfae4b3b_habstash-case-study-savings-simulator-cash-13.webp",
        "alt": "fintech plus real estate SaaS interface design example "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b96621b66531fdfcdc_697b712406148079bfae4b3c_habstash-case-study-savings-simulator-investment-14.webp",
        "alt": "fintech SaaS interface design example"
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ba6621b66531fdfceb_697b712406148079bfae4b3e_habstash-case-study-save-with-partner-15.webp",
        "alt": "interface design example of a financial app, money saving feature "
      },
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ba6621b66531fdfce8_697b712406148079bfae4b3f_habstash-case-study-dashboard-with-partner-16.webp",
        "alt": "money saving fintech dashboard design example "
      }
    ]
  },
  {
    "slug": "polaris",
    "title": "Polaris",
    "industry": "Data",
    "text": "First Prototype For a Code Security App",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ca7fe48fe3d3399723_697b712406148079bfae4725_polaris-thumbnail-image-02.webp",
    "headline": "First Prototype For a Code Security App",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "First Prototype For a Code Security App",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ca7fe48fe3d3399723_697b712406148079bfae4725_polaris-thumbnail-image-02.webp",
        "alt": "Polaris"
      }
    ]
  },
  {
    "slug": "alture-funds",
    "title": "Alture Funds",
    "industry": "Finance",
    "text": "Alture Funds: How we created an investment platform MVP in 2 months",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a69a7d88d87d14365b_697b712406148079bfae4718_alturefunds-thumbnail-image-02.webp",
    "headline": "Alture Funds: How we created an investment platform MVP in 2 months",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Alture Funds: How we created an investment platform MVP in 2 months",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370a69a7d88d87d14365b_697b712406148079bfae4718_alturefunds-thumbnail-image-02.webp",
        "alt": "Alture Funds"
      }
    ]
  },
  {
    "slug": "frontend-ai",
    "title": "Frontend AI",
    "industry": "AI",
    "text": "Webcrumbs: How Eleken designed a Frontend AI tool that went viral on Product Hunt",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b6b365f8a6f50650fb_697b712406148079bfae4716_frontendai-thumbnail-image-02.webp",
    "headline": "Webcrumbs: How Eleken designed a Frontend AI tool that went viral on Product Hunt",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "Webcrumbs: How Eleken designed a Frontend AI tool that went viral on Product Hunt",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370b6b365f8a6f50650fb_697b712406148079bfae4716_frontendai-thumbnail-image-02.webp",
        "alt": "Frontend AI"
      }
    ]
  },
  {
    "slug": "siena",
    "title": "Siena",
    "industry": "AI",
    "text": "How we helped Siena grow with new AI features and a smarter UX",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d5b55bf6a642bfcc97_697b712406148079bfae4713_siena-thumbnail-image-02.webp",
    "headline": "How we helped Siena grow with new AI features and a smarter UX",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How we helped Siena grow with new AI features and a smarter UX",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d5b55bf6a642bfcc97_697b712406148079bfae4713_siena-thumbnail-image-02.webp",
        "alt": "Siena"
      }
    ]
  },
  {
    "slug": "casescribe",
    "title": "CaseScribe",
    "industry": "Legal",
    "text": "How Eleken helped CaseScribe launch a user-ready legal AI platform",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ab9a7d88d87d143817_697b712406148079bfae4714_casescribe-thumbnail-image-02.webp",
    "headline": "How Eleken helped CaseScribe launch a user-ready legal AI platform",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How Eleken helped CaseScribe launch a user-ready legal AI platform",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370ab9a7d88d87d143817_697b712406148079bfae4714_casescribe-thumbnail-image-02.webp",
        "alt": "CaseScribe"
      }
    ]
  },
  {
    "slug": "sessionboard",
    "title": "Sessionboard",
    "industry": "Event Management",
    "text": "How Eleken helped Sessionboard stop fixing and start building",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d2569d6689def6226d_697b712406148079bfae4711_sessionboard-thumbnail-image-02.webp",
    "headline": "How Eleken helped Sessionboard stop fixing and start building",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How Eleken helped Sessionboard stop fixing and start building",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d2569d6689def6226d_697b712406148079bfae4711_sessionboard-thumbnail-image-02.webp",
        "alt": "Sessionboard"
      }
    ]
  },
  {
    "slug": "modia",
    "title": "Modia",
    "industry": "AI",
    "text": "How we redesigned an internal AI content creation tool so it could scale into a full SaaS product",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c7940da690d5348c73_697b712406148079bfae470f_modia-thumbnail-image-02.webp",
    "headline": "How we redesigned an internal AI content creation tool so it could scale into a full SaaS product",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How we redesigned an internal AI content creation tool so it could scale into a full SaaS product",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c7940da690d5348c73_697b712406148079bfae470f_modia-thumbnail-image-02.webp",
        "alt": "Modia"
      }
    ]
  },
  {
    "slug": "panjaya",
    "title": "Panjaya",
    "industry": "AI",
    "text": "How we redesigned an AI-powered dubbing platform for an enterprise-ready UX",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c800e7627e94ec83b7_697b712406148079bfae49f6_panjaya-thumbnail-image-02.webp",
    "headline": "How we redesigned an AI-powered dubbing platform for an enterprise-ready UX",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How we redesigned an AI-powered dubbing platform for an enterprise-ready UX",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370c800e7627e94ec83b7_697b712406148079bfae49f6_panjaya-thumbnail-image-02.webp",
        "alt": "Panjaya"
      }
    ]
  },
  {
    "slug": "vli-tech",
    "title": "VLI Tech",
    "industry": "Healthcare",
    "text": "How Eleken redesigned a workforce app for the complex world of EMS teams",
    "img": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d84161b531c85fa277_697b712406148079bfae4c20_vli-tech-thumbnail-image-02.webp",
    "headline": "How Eleken redesigned a workforce app for the complex world of EMS teams",
    "sections": [
      "The Challenge",
      "How We Started",
      "Redesign Process",
      "Key Deliverables",
      "Final Results"
    ],
    "summary": [
      "How Eleken redesigned a workforce app for the complex world of EMS teams",
      "We collaborated directly with the founders and engineering leads to overhaul workflows, simplify complex interactions, and create an intuitive product interface."
    ],
    "quote": null,
    "visuals": [
      {
        "src": "https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/698370d84161b531c85fa277_697b712406148079bfae4c20_vli-tech-thumbnail-image-02.webp",
        "alt": "VLI Tech"
      }
    ]
  }
];

export const featuredCases = allCases.slice(0, 8);

export const industriesList = [
  "All",
  "AI",
  "Data",
  "Sales",
  "Finance",
  "Healthcare",
  "Geoservice",
  "Legal",
  "Real Estate",
  "Process Management",
  "People Management",
  "Social Media",
  "Education",
  "Event Management"
];
