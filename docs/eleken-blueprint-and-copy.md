# Eleken (eleken.co) — Complete Website Blueprint, Copy & Redesign Architecture

> **Purpose:** Comprehensive source of truth for the Eleken homepage. Contains 100% of the structural layout, exact copywriting, micro-interactions, client data, testimonials, comparison matrices, process steps, FAQs, and design tokens for rebuilding and redesigning the website.

---

## 1. Brand Positioning & Design System Tokens

### 1.1 Brand Identity & Core Value Proposition
- **One-Liner:** Pragmatic UI/UX design agency for SaaS
- **Sub-Pitch:** Turning clunky MVPs and dev-designed tools into clean, usable products with a dedicated designer starting in 24 hours.
- **Engagement Model:** Monthly subscription / retainer with flexible scaling (add designers, pause anytime, no long-term contracts).
- **Brand Voice:** Pragmatic, anti-fluff, confident, transparent, direct, senior, and business-grounded ("Users don't come first. Business comes.").

### 1.2 Visual Language & Design Tokens
```css
:root {
  /* Surface / Backgrounds */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F9F7F3;    /* Warm beige / sand tone used extensively */
  --bg-card: #FFFFFF;
  --bg-card-alt: #E6E4E0;      /* Muted stone grey-beige */
  
  /* Text / Neutral Colors */
  --text-primary: #1D1E22;     /* Deep near-black */
  --text-secondary: #615D55;   /* Warm charcoal gray */
  --text-muted: #888686;       /* Mid gray for captions and inactive states */
  --border-subtle: #E4E4E7;    /* Subtle light borders */
  --border-line: #BCB5AF;      /* Dashed timeline/divider lines */

  /* Accent & Interaction */
  --accent-orange: #F59958;    /* Signature terracotta / warm amber orange */
  --accent-orange-hover: #E88944;
  --accent-black: #1D1E22;
  
  /* Indicators & Sliders */
  --dot-active: #F59958;
  --dot-inactive: #E4E4E7;
  --dot-height: 3px;
  --dot-progress-duration: 4000ms;
  
  /* Typography */
  --font-heading: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-body: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

---

## 2. Global Navigation & Header

### Primary Navigation Links
- **Logo:** Eleken wordmark (`/`)
- **Links:**
  - **Case studies** (`/cases`)
  - **Services** (Dropdown):
    - Product redesign (`/engagement/product-redesign`)
    - Design from scratch (MVP) (`/engagement/mvp-design-for-saas`)
    - Team extension (`/engagement/team-extension`)
    - UX audit (`/ux-audit-service`)
    - Design system (`/design-system-service`)
    - Consulting (`/consulting`)
  - **Industries** (2-Column Dropdown):
    - *Column 1:* Sales (`/industries/sales`), Fintech (`/industries/fintech`), Healthcare (`/industries/healthcare`), Marketing (`/industries/marketing`), Data (`/industries/ui-ux-design-for-data-products`)
    - *Column 2:* Geoservice (`/industries/ui-ux-design-for-geospatial-data-products`), DevTools (`/industries/ui-ux-design-for-developers`), AI (`/industries/ui-ux-design-for-ai-based-products`), Legal tech (`/industries/legal-tech-ux-design-services`), Real estate (`/industries/real-estate-ux-design-services`)
  - **Pricing** (`/pricing`)
  - **About** (`/about-us`)
  - **Blog** (`/blog/main`)
- **Header CTAs:**
  - `Log in` (secondary)
  - `Get started` / `Book a call` (`/contact-us` - primary button)

---

## 3. Section-by-Section Copy & Blueprint

### Section 1: Hero Section & Client Marquee
- **Category:** Hero
- **Badge:** None (pure typographical hierarchy)
- **H1 Headline:**
  > Pragmatic UI/UX design agency for SaaS
- **Subheadline:**
  > We help SaaS teams turn clunky MVPs and dev-designed tools into clean, usable products — with a dedicated designer on your side, starting tomorrow and moving fast.
- **Action Buttons:**
  - Primary CTA: `Book a call` (`/contact-us`)
  - Secondary CTA: `Check portfolio` → (`/cases`) with arrow icon
- **Social Proof Callout:**
  - 5 Golden Stars rating icon row
  - Text: `100+ reviews on Clutch.co`
- **Interactive Client Logo Marquee (Dual-Tagged Cards):**
  Each logo item features:
  - Top tag: **Industry Vertical**
  - Center: **Client Logo**
  - Bottom tag: **Engagement Type**
  
  *Client Roster & Tags:*
  1. **Hotspot Shield** | Industry: `Cybersecurity` | Service: `Team extension`
  2. **Gamaya** | Industry: `AgTech/AI` | Service: `Product Redesign`
  3. **Rex** | Industry: `Real estate` | Service: `Design from scratch`
  4. **Cheerity** | Industry: `Social impact` | Service: `Product Redesign`
  5. **Acadeum** | Industry: `EdTech` | Service: `Product redesign`
  6. **Refera** | Industry: `Healthcare` | Service: `Product redesign`
  7. **Peep** | Industry: `Recruiting` | Service: `Team extension`
  8. **HighPoint** | Industry: `EdTech` | Service: `Product Redesign`
  9. **Whoosh** | Industry: `Travel tech` | Service: `Product Redesign`
  10. **Wrapt** | Industry: `Gifting` | Service: `Product Redesign`
  11. **Datawisp** | Industry: `Data analytics` | Service: `Product Redesign`
  12. **JOOR** | Industry: `Fashion Wholesale` | Service: `Product Redesign`
  13. **HealthStream** | Industry: `Healthcare` | Service: `Product Redesign`
  14. **Cylynx** | Industry: `Cybersecurity` | Service: `MVP design`
  15. **Ricochet 360** | Industry: `Sales automation` | Service: `Product Redesign`
  16. **TextMagic** | Industry: `SMS marketing` | Service: `Product Redesign`
  17. **Stradigi AI** | Industry: `AI` | Service: `Product Redesign`
  18. **PRIFT** | Industry: `Fintech` | Service: `MVP design`
  19. **Abode** | Industry: `Real estate` | Service: `Product Redesign`
  20. **MindTickle** | Industry: `Sales enablement` | Service: `Product Redesign`
  21. **Astrea** | Industry: `Geospatial analytics` | Service: `Team extension`

---

### Section 2: The Core Thesis Statement
- **Style:** Large editorial typographic highlight with animated word reveal on scroll.
- **Copy:**
  > **Most SaaS products don’t fail on features. They fail on UX.**
  >
  > Confusing design means more churn, more support tickets, and fewer conversions — not because your product lacks value, but because users can't access that value fast. We can help.

---

### Section 3: Problem/Solution 1 — Confusing UI vs. Complex Backend
- **Layout:** Split 2-column (Copy on Left, Lottie Animation on Right).
- **Lottie Art:** Vector maze illustrating complex navigation solved by a clean path.
- **H2 Headline:**
  > You have a sophisticated product and a confusing design
- **Body Copy:**
  > Your product was designed by engineers — a solid backend, packed with features, but the interface is a mess. Nothing’s clear. Users can’t find their way around. They get confused, frustrated, then leave before they ever see the value.
  >
  > Let us gently take over your UI/UX and turn it into something very intuitive, so your product finally delivers on its full potential.
- **CTA Button:** `Redesign my SaaS` → (`/engagement/product-redesign`)

---

### Section 4: Problem/Solution 2 — The Recruiting Bottleneck
- **Layout:** Split 2-column (Lottie Magnifying Glass on Left, Copy on Right).
- **Lottie Art:** Interactive magnifying glass examining candidate stacks.
- **H2 Headline:**
  > Hunting for UX designer takes months of interviews and portfolio reviews
- **Body Copy:**
  > You needed design help weeks ago. But you're still buried in resumes and portfolios, hoping someone actually knows SaaS. You try freelancers — they disappear. You try hiring — it drags for months. Meanwhile, your devs are blocked, and designs aren’t moving.
  >
  > Let us drop in immediately with a senior designer who’s done this before — no onboarding, no hand-holding, just real work from day one.
- **CTA Button:** `Extend my team` → (`/engagement/team-extension`)

---

### Section 5: Problem/Solution 3 — Burning Deadlines & MVP Timelines
- **Layout:** Centered column + horizontal timeline visualization with dashed lines & week counters (`Week 543` to `Week 550`).
- **H2 Headline:**
  > You have a very aggressive timeline. You need MVP asap
- **Body Copy:**
  > You don’t want a long research phase. You want screens — fast. The sooner you put it in front of users, the sooner you know if it works. We take a pragmatic approach: using proven UX patterns to speed up design, and component libraries like Ant Design or Tailwind to make handoff to developers instant. You get an MVP that’s usable, testable, and ready to build on.
- **CTA Button:** `Design from scratch` → (`/engagement/mvp-design-for-saas`)

---

### Section 6: Verified Commercial Outcomes (Case Study Slider)
- **H2 Headline:**
  > We’ve helped improve and scale 200+ SaaS products
- **Subheadline:**
  > When your product is easy to use, the results speak for themselves.
- **CTA Button:** `More product redesign examples` → (`/cases`)
- **Slider Cards with Dynamic Progress Bar:**
  1. **/ 01 — Datawisp:**
     - **Headline:** *Datawisp secures $3.6M in seed funding*
     - **Impact Copy:** *We redesigned Datawisp’s core UX to make its data logic builder self-explanatory.*
     - **Link:** `Explore`
  2. **/ 02 — Aampe:**
     - **Headline:** *Aampe raises $18M after platform redesign*
     - **Impact Copy:** *We redesigned Aampe so marketers could run AI-powered campaigns on their own, no devs needed.*
     - **Link:** `Explore`
  3. **/ 03 — MyInterview:**
     - **Headline:** *MyInterview fixes 90% candidate drop-off with new UX*
     - **Impact Copy:** *We rebuilt the candidate flow to cut the drop-off and designed new functionality that helped to win enterprise clients.*
     - **Link:** `Explore`
  4. **/ 04 — Nworx:**
     - **Headline:** *Nworx increases user satisfaction by 200% after revamp*
     - **Impact Copy:** *We restructured Nworx’s LMS interface, aligning it with user goals and cutting support tickets across key workflows.*
     - **Link:** `Explore`

---

### Section 7: SaaS Vertical Competency Band
- **H2 Headline:**
  > Your SaaS vertical is no mystery to us — we've designed for them all
- **Subheadline:**
  > We understand the SaaS space in-depth — and most likely have experience in your vertical.
- **CTA Button:** `Case studies` → (`/cases`)
- **Vertical Tickers / Badges:**
  - `Healthcare`
  - `Geoservice`
  - `Sales`
  - `Fintech`
  - `Development-focused`
  - `Marketing`
  - `Data`
  - `AI`

---

### Section 8: Low-Risk Offer — 3-Day Free Trial & Interactive Lead Form
- **H2 Headline:**
  > Test our SaaS design expertise with a free 3-day trial
- **Subheadline:**
  > Choosing a SaaS design agency on the web is often a game of luck. So we offer you to put our collaboration to test before committing.
- **The 4 Steps:**
  - `01` — Pick a small part of your existing product.
  - `02` — See our process in action and test if you enjoy it.
  - `03` — Get 1-2 screens designed for you during the trial period.
  - `04` — Decide if you’re ready for a subscription.
- **Trial Testimonials:**
  - *"Their talented team impressed us right from the start with a three-day trial, presenting several design options, each of which was excellent and reinforced our confidence in moving forward."* — **Sean Quinn**, Founder of TimeKeeper
  - *"I really enjoyed the designer trial period since it allowed us to assess our designer’s ability to execute on our specific design needs."* — **Claire Tsukuda**, Co-Founder & CEO of Kipsi
  - *"The three-day trial was very unique, giving you a risk-free chance to try working with them."* — **Moritz Uehling**, CTO at Datawisp
- **Embedded Form Fields:**
  1. Full Name (`input[type=text]`, required)
  2. Your Company (`input[type=text]`, required)
  3. E-mail (`input[type=email]`, required)
  4. How can we help you? (`textarea`, "Tell us about your product…", 1000 character limit)
  5. How did you hear about us? (`select`: *Clutch.co, Perplexity, Gemini, ChatGPT, DesignRush, Blog, LinkedIn, YouTube, Referral, Other search engine*)
  6. Submit Button: `Proceed with call booking`
  7. Disclaimer: *"By clicking on the button, you consent to the processing of personal data and agree to the site's Privacy Policy."*

---

### Section 9: The Tailored Partner Comparison Matrix
- **H2 Headline:**
  > Eleken is a tailored design partner for SaaS startups
- **Subheadline:**
  > Freelancers bail. Agencies overprice. In-house takes forever to hire. We keep what works from all of them, and cut what doesn’t.
- **Interactive Tabs:**

| Tab | Problem (Alternative) | Solution (Eleken) |
|---|---|---|
| **Flexibility** | **Outsourcing vendors'** one-size-fits-all processes don't fit SaaS startups. | You get a dedicated designer that integrates into your team like in-house specialist. |
| **Reliability** | **Freelance designers** are flexible, but may not always be reliable. | The designer communicates directly with your team and works exclusively on your project. |
| **Transparency** | **Design agencies** lack the transparency that in-house designers offer. | You always know who’s working, what they’re doing, and how much time it takes — no middlemen, no surprises. |
| **Expertise** | **In-house designers** lack the team expertise that design agencies have. | You get SaaS-focused designers with system-level thinking, guided by senior design leads. |

- **CTA Button:** `Get a dedicated partner` → (`/contact-us`)

---

### Section 10: Social Proof & Clutch Review Masonry
- **H2 Headline:**
  > 4.9 is our Clutch average
- **Subheadline:**
  > Here’s what SaaS founders and product teams shared about working with us.
- **Clutch Badge Widget:** 4.9 / 5.0 Rating badge
- **Key Testimonials & Quotes:**
  1. *"The designs helped us to generate significant customer excitement and help investors align with our product's vision and potential."* — **Mathew Beechener**, Product Manager at Loxo
  2. *"When priorities shifted—as they often do in a fast-moving startup—they adapted immediately, re-scoping tasks and providing quick, thoughtful solutions without missing a beat."* — **Jeff Houlé**, Co-Founder at Smartpin
  3. *"During the project, we evolved from 0 to thousands of users with no marketing efforts, just product-led growth and word of mouth, which tells about the quality of Eleken's work."* — **Webcrumps**
  4. *"Items were delivered on time and we found that our Eleken designer was almost always ahead of my internal team."* — **Christopher Byrd**, Integrator & EVP at Vlitech
  5. *"The team at Eleken are true professionals and I felt as though we were immediately getting value from our collaboration."* — **Tanay Kothari**, CEO at Floret
  6. *"They were professional to the core and ensured that they deliver no matter what."* — **Nworx Team**
  7. *"They were able to really listen to us and learn about our business, to be open to the changes that we brought. Next to the fact that design skills are top-notch."* — **Pieter Kinds**, CEO at Freightender
  8. *"Our partnership with Eleken ended up being our ideal scenario. Subscription structure and one-on-one designer approach is great."* — **Cara Incandela**, Director of Product Marketing at Spa Week
  9. *"Their commitment to transparent communication, proactive problem-solving, and adaptability showcased a level of professionalism that set them apart."* — **Anita Os**, CEO at GoTechiez
  10. *"What impressed us the most about Eleken is their ability to delve deep into a complex product and deliver exceptional design solutions."* — **David Fischer**, Director

---

### Section 11: Behind the Scenes (Quality Control & Vetting)
- **H2 Headline:**
  > Here’s what we do behind the scenes
- **Subheadline:**
  > You get a trained designer who meets our standards, not someone we just found last week.
- **The 3 Pillars:**
  1. **Source top 1% designers:**
     *We vet for design skills, fluent English, critical thinking, and clear communication.*
  2. **Train every designer for 3 months:**
     *They go through an intense bootcamp to learn our UX standards, practices, and design process.*
  3. **Back them with senior oversight:**
     *Each designer works independently but never alone — their work is reviewed by a design lead and peers.*

---

### Section 12: Frictionless Onboarding (4 Steps)
- **H2 Headline:**
  > So that your designer can just fit in, pick things up fast, and get them done
- **Step Breakdown:**
  - `01 Intro call`: You book a 30-minute chat to share where you’re stuck. We’ll walk you through how we can help.
  - `02 Free trial`: You give us a real task. In three days, you see exactly how we think, communicate, and deliver.
  - `03 Subscription kickoff`: Our model is month-to-month, with no long-term commitments, no overhead, and no waiting.
  - `04 Scale up or down`: Need more speed? Add a second designer. Done for now? Pause anytime. We flex with your roadmap.
- **Bottom Callout:**
  - *Sounds good? Your dedicated SaaS designer is just one call away.*
  - CTA Button: `Redesign with confidence`

---

### Section 13: 6-Stage SaaS Delivery Process
- **H2 Headline:**
  > A battle-tested process, perfected for SaaS
- **Subheadline:**
  > Start small with a trial, validate with research, iterate screens quickly, then smoothly hand off to developers with ongoing support.
- **Phase Breakdown & Deliverables:**
  1. **Trial:**
     - *Begin with a no-commitment trial to ensure we are a right fit for you.*
     - **You get:** 1-2 screens designed.
  2. **User research:**
     - *Audit in case of redesign, product discovery and competitor analysis if we design from scratch. This step clarifies the “what” and “why” behind your product decisions.*
     - **You get:** Competitive analysis, UX audit report.
  3. **Information architecture:**
     - *We map out the app’s structure and navigation, ensuring workflows are intuitive and scalable before diving into screen design.*
     - **You get:** User flows, Initial wireframes.
  4. **Screens design:**
     - *You get several UI/UX design options with variations in typography, icons and colors. The preferred one gets iterated until the final design is ready.*
     - **You get:** Wireframes, Prototypes, Several UI options, Final design.
  5. **Design handoff:**
     - *We don't develop software, but we make sure your developers have everything they need to implement the product we've designed.*
     - **You get:** All screens, UI kit, Design system.
  6. **Project support:**
     - *We stay engaged for as long as you need us, making sure our designs are implemented smoothly.*
     - **You get:** Adding new features, UX consulting, Supervising execution.

---

### Section 14: Mid-Page Conversion Breaker
- **Headline:**
  > Let’s make your SaaS product the best it can be.
- **Body Copy:**
  > You handle the vision and the development — we’ll handle the UX/UI. Ready to give it a go?
- **Action CTAs:**
  - Primary: `Book your trial`
  - Secondary: *Not quite ready to start your free trial? No problem — check out our case studies to get a better sense of what working with Eleken feels like.* → `See case studies`

---

### Section 15: Core Design Philosophy & Principles
- **H2 Headline:**
  > We stick to our principles:
- **Pillars:**
  - `01 Users don’t come first. Business comes`:
    *This doesn’t mean ignoring the users. Every business will benefit from understanding its users better and making the product better for them. Being user-centered is a good thing. But it’s a good thing because it’s good for the business.*
  - `02 Structure is key, but good UI matters`:
    *Well-thought information architecture and navigation makes complex apps easy to use. Beautiful interfaces make those apps emotionally appealing.*
  - `03 Design is a process, not an event`:
    *There’s no place for overnight success. We work in short iterations, moving to the result bit by bit, and expect your consistent feedback.*

---

### Section 16: High-Status Disqualification Gate ("We Are Not For Everyone")
- **H2 Headline:**
  > We are not for everyone
- **The Filter Statements:**
  - ❌ *If you are not SaaS — don’t apply.*
  - ❌ *If you want us to design a logo, landing page or banner — don’t apply.*
  - ❌ *If you have no time to communicate with a designer — don’t apply.*
  - ❌ *If your budget for a design project is under 10K — don’t apply.*
  - ❌ *If you expect your app to be magically designed overnight — don’t apply.*
- **Fallback CTA:** `View our case studies`

---

### Section 17: Situational Fit Matrix ("When We're The Best Fit")
- **H2 Headline:**
  > When we’re the best fit
- **Subheadline:**
  > If you find yourself in one of the situations described below, our service is exactly what you need.
- **Tabs / Categories:**

1. **Hiring Scenario:**
   - **Problem:** *The right designers are hard to find.* You don't have the right design talent with expertise in creating SaaS, and it's not easy to find candidates with relevant skill sets and the right attitude.
   - **Solution:** *Experienced SaaS designers.* We have 40+ UI/UX designers with SaaS design expertise on the team, so we can jump into the project whenever you need us. Plus, we provide a 3-day FREE trial to let you see us in action before signing the contract.

2. **Deadlines Scenario:**
   - **Problem:** *Deadlines are burning.* You've underestimated the amount of work that goes into your project, and now you're behind schedule. You want to find designers who can help you out, but posting a job and interviewing candidates is taking up too much of your time.
   - **Solution:** *Scale without hiring.* We can provide as many designers as you need to complete your project and not add a single employee to your payroll. We'll work with you throughout the process until you are satisfied with the final product, on schedule.

3. **Overload Scenario:**
   - **Problem:** *There's too much on your plate.* You've built your SaaS business up quite a bit over the last few years, and you've got more than enough customers to keep your team busy. Now you're ready to develop a new product. But how will you keep your current customers happy?
   - **Solution:** *Extra hands.* Eleken can provide a remote team to help you implement new features, support the design system you've started to create, or redesign your products while you focus on other priorities.

---

### Section 18: Final Call to Action Banner
- **H2 Headline:**
  > We get hired to design, fix or scale SaaS products
- **Subheadline:**
  > Whether you are looking to secure funding for your new product, redesign your SaaS to increase profitability, or get a remote design team for faster growth, Eleken is the right choice for continuous product development.
- **CTA Button:** `Get started`

---

### Section 19: Curated Blog / Thought Leadership
- **H2 Headline:**
  > Explore our blog posts
- **Articles:**
  1. **How to Evaluate UI/UX Designers Before Hiring Them**
     *Making a successful hire is challenging. Read our article to learn what skill sets to evaluate to make the right choice.*
  2. **Product Design vs Product Management and Why They Need to Combine Forces**
     *Struggling to find the right team collaboration structure? Here we explain all the nuances of product management and product design that you need to know.*
  3. **To Redesign or Not to Redesign Your Product: A Solution to Resolve Your Doubts**
     *Doubting whether to redesign your product or not? Find out why redesigns fail so often and how to avoid that.*
  4. **Scaling Your Startup - How It Looks from the Product Design Perspective**
     *Learn what pitfalls might wait for you when scaling a product team and expanding the product and how to overcome them.*
  5. **Onboarding New Designers Shouldn't Be a Problem: Here's How to Onboard Your Remote Team**
     *Want to get your new designers on track as fast as possible? Learn our tips for remote UX designers onboarding.*
  6. **The Cost of Hiring a Designer for Your Startup: Main Things to Consider**
     *First time looking for a product or UI/UX designer? Read on to learn how much they charge, what their rates depend on, and where to find a good fit for your team.*

---

### Section 20: Comprehensive FAQ (Accordion)
- **H2 Headline:**
  > Frequently asked questions
- **Q&A Items:**

1. **What is the minimum contract duration?**
   > The shortest contract we offer is 2 months. However, many of our clients stick around for much longer, sometimes even for years.

2. **Do you offer marketing design services like ad creatives, ebooks, or social media visuals?**
   > Not at Eleken. We focus purely on product design for SaaS. But our sister company TodayMade, specializes in marketing design and offers a subscription service that covers everything from ad creatives to motion design.

3. **Can you do mobile and landing page designs?**
   > Absolutely, our UI/UX design agency handles both web and mobile interfaces. While we don't take on landing pages as standalone projects, if we're designing your product, we'll definitely make those landing pages part of the whole experience.

4. **Will my designer be limited to their timezone?**
   > Most of our designers are in GMT+2, while our clients are mainly in the US. So, here's how we make it work:
   > If you're on the US East Coast, for instance, you're 7 hours behind us. We can catch up and have meetings until your noon.
   > Then, while you're off, we're working away, and by the time you're up the next day, you'll see we've made some magic happen overnight.
   > Plus, we often send you updates through Loom videos, so you can check them out whenever it's convenient for you.

5. **How long does it take to start?**
   > You can start with a designer pretty much tomorrow. We are a SaaS design company that always has a few designers on the bench, ready to jump in if you need something done urgently.

6. **Do you support part-time subscriptions?**
   > Of course! You can get a full-time or a part-time designer at Eleken. For more details, please check our pricing page.

7. **Can I interview a designer and see their portfolio?**
   > Sure, during the trial intro call, feel free to ask your designer some questions and request to see some of their works. Generally, though, Eleken handles the selection process. It's our responsibility to hire, train, and match you with the best designer for your project. With years of experience, our SaaS design company got a pretty good track record of getting it right.

8. **What if I don't like a designer?**
   > It's pretty rare, but if you're not clicking with a designer, you can always expect a replacement.

9. **Can your designers deal with complex & technical B2B use cases?**
   > Complex & technical B2B challenges? That's where we shine. As a design agency for SaaS, we have navigated everything from AI-driven analytics to geospatial mapping projects. Got a tough challenge for us? We’re all ears.

10. **Can we integrate designers into our processes?**
    > Absolutely! We ensure our designers blend into your team as if they were in-house. They'll hop onto your Slack, dive into your task tracker, and be right there with you on calls. It's all about making collaboration as smooth as possible.

11. **Can we upscale the team if needed?**
    > Our subscription model is designed for flexibility, so you can adjust your team size up or down based on your needs. It's a feature our clients find incredibly useful because it gives them a level of freedom that's hard to find with an in-house team.

---

## 4. Footer Architecture & Sitemap Links

### Locations:
- **Kyiv, Ukraine:** Dehtiarivska str. 33B
- **Eleken US, LLC:** 131 Continental Dr, Suite 305, Newark, DE 19713 US

### Link Taxonomy:
1. **Services:**
   - Product redesign
   - Design from scratch (MVP)
   - Team extension
   - UX audit
   - Design system
   - Hire UI/UX designer
   - Design as a service
   - UX design subscription
   - Consulting
2. **Approach:**
   - SaaS design
   - UI/UX design
   - Web design
   - UI/UX audit
   - Mobile design
3. **Company:**
   - Case studies
   - Pricing
   - About
   - Blog
   - Contact us
4. **Industries:**
   - Geoservice, Real estate, Healthcare, Legal tech, Marketing, DevTools, Fintech, Sales, Data, AI
5. **Comparisons:**
   - Eleken vs Toptal
   - Eleken vs In-house designer
   - Eleken vs Traditional agency
6. **eBooks & Guides:**
   - A Non-Boring Guide to How UX Research Is Supposed to Work
   - The UX Design Crash Course for Product Owners
   - How to Get Along with Designers and Work Well Together
   - How We Work: Client's Guide
   - How Design Impacts Your Growth Metrics
7. **Legal & Policies:**
   - Editorial Process, Advertising Policy, Team of Experts, Privacy Policy, Copyright © 2026 Eleken.

---

## 5. Architectural Guide for mindsCraft Redesign

When rebuilding and redesigning this website for your brand:

1. **Color Palette Strategy:**
   - Retain the clean, light-mode warm sand background (`#F9F7F3` / `#FFFFFF`) with crisp graphite typography (`#1D1E22`).
   - Use high-contrast interactive accents (the signature terracotta orange `#F59958`) for buttons, active state indicators, and animated slider lines.
2. **Component Modularity:**
   - Build reusable components: `HeroBanner`, `LogoMarquee`, `StatQuote`, `SplitPillarCard`, `CaseStudySlider`, `ComparisonTabs`, `TestimonialWall`, `ProcessSteps`, `FilterGate`, and `FaqAccordion`.
3. **Animations & Micro-interactions:**
   - Progress-bar carousel timers on sliders (`3px` line fill with `scaleX(1)` transition).
   - Word-by-word typographic scroll animations on the core thesis statement.
   - Smooth tab transitions for the Problem/Solution matrix.
4. **High-Converting UX Principles:**
   - **Low-Risk Starter:** Keep the 3-day free trial / sprint audit prominent.
   - **Disqualification Filter:** Keep the bold boundary-setting "We are not for everyone" section to elevate brand authority.
   - **Transparent Outcome-Driven Case Studies:** Feature real funding raised, conversion lifts, and drop-off reductions rather than generic aesthetic claims.
