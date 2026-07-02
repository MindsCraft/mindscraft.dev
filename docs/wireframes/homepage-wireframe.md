# Homepage Wireframe — AI-First Product Studio

**Status:** Active single source of truth for `/` (`src/app/page.tsx`).
**Replaces:** The original "AI-Powered Development for Growing Startups" draft in this file, and the v2 ("Design · Development · Content" agency) wireframe which was deleted 2026-07-02 — the agency positioning was abandoned in code and never reflected in the live site.
**Last updated:** 2026-07-02
**Build owner:** `src/app/page.tsx` + `src/components/home/*`

---

## Why this version exists

Three positioning ghosts existed in the repo. Only one was the live site:

| Source | Position | Status |
|---|---|---|
| Original v1 (this file) | "AI-Powered Development for Growing Startups" | Superseded |
| v2 wireframe (2026-06-27) | "Design · Development · Content" agency | Abandoned — code drifted away |
| **Live code (this is the target)** | **AI-First Product Studio · Dhaka · 14+ countries** | **Active** |

This wireframe documents the **live** positioning. The v2 wireframe file was deleted as part of this cleanup.

### Founder-locked decisions (2026-07-02)

1. **What we are:** AI-first product studio. Senior-led, fixed-scope, fixed-price. We ship AI integrations, AI-augmented SaaS, and full AI MVPs for funded founders.
2. **Geo:** "Dhaka · 14+ countries" — keep in the eyebrow.
3. **Three home-page service pillars (locked):**
   - AI Product Development
   - SaaS MVP Development
   - UX Design & CRO
4. **Testimonials policy:** No fake names. Three anonymous-but-honest role/title quotes are live; replace with real attributed quotes as they come in.
5. **What we added vs. the 2024 draft:** Two proof sections to match July 2026 market expectations — an AI tooling band (operational credibility) and a "How we ship" discipline row (delivery maturity).
6. **What we kept off the home:** Founder face, blog feed, FAQ, "About" — all reachable via nav or `/about`.

---

## Goals (in priority order)

The homepage has exactly four jobs:

1. **Position the studio** — AI-first, senior-led, fast, fixed-scope.
2. **Show the craft** — three pillars + selected work.
3. **Reduce buyer risk** — process + testimonials + tooling/discipline.
4. **Make the next step obvious** — one primary CTA, one secondary, repeated.

Everything else is decoration. If a section does not serve one of these four, it is cut.

---

## Section order (10 sections)

| # | Section | Job it does | Component | Notes |
|---|---|---|---|---|
| 1 | Hero | Position + dual-audience qualify | `home/Hero.tsx` | Two-track voice; range sub |
| 2 | Trusted by | Trust bar | `home/ClientsGrid.tsx` | Real logos, 23 in marquee |
| 3 | What we ship | Four-pillar service map | `home/Services.tsx` | First 4 from `servicesData.ts` |
| 4 | Two ways to work | Routing layer — separates mid-market vs retainer | `home/TwoWaysBand.tsx` (new) | Two side-by-side cards |
| 5 | Tooling | Stack credibility across all pillars | `home/ToolingBand.tsx` (new) | 4 rows: web, apps, content, AI |
| 6 | How we ship | Dual-track delivery discipline | `home/ShippingDiscipline.tsx` (new) | Senior-review row + monthly-cadence row |
| 7 | Selected work | Two-row proof (real client + spec projects) | `home/FeaturedWork.tsx` (rewrite) | Two rows, two audiences |
| 8 | How we work | Reduce risk, show process | `home/Process.tsx` | 4 steps ending in "Stay" |
| 9 | What clients say | Trust | `home/Testimonials.tsx` | Anonymous roles, both audiences |
| 10 | Final CTA | Convert via dual routes | `home/CtaBand.tsx` (rewrite) | Primary = project, secondary = retainer |

### Sections intentionally NOT on the home

- **Founder face** — covered by `/about` in nav.
- **Blog feed** — reachable via nav.
- **FAQ** — moved to `/contact` in a separate cleanup.
- **Pricing detail** — lives at `/pricing` and `/services/retainer`. The home CTA points to those routes.
- **Engagement models detail** — `/services` covers both tracks.

### Two-track model summary

The home serves two audiences without making either feel like an afterthought:

- **Mid-market project clients** — funded teams, regional chains, founders modernising legacy stacks. They buy fixed-scope, fixed-price projects. They want to see senior review, real references, clear process.
- **Small-business retainer clients** — restaurants, clinics, retail, tuition, NGOs, agents. They buy monthly digital support. They want a single team, predictable cost, ongoing responsiveness.

The Two Ways to Work band (Section 4) is the explicit routing layer. Every other section below it speaks to both audiences through phrasing, examples, and CTA choices — never by addressing only one.

---

## Section 1 — Hero (locked copy)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [bg-video: subtle gradient mesh, brand-slate, slow drift]                  │
│                                                                             │
│  [●] AI-First Product Studio · Dhaka · 14+ countries                        │
│                                                                             │
│  We build the digital backbone                                              │
│  for businesses that are done being held                                    │
│  back by their web stack.                                                   │
│  [brand-dark, clamp(2.5rem, 6vw + 0.75rem, 6.5rem), em-on-italic]           │
│  ^ em-italic on "back" in the second line for emphasis                       │
│                                                                             │
│  From a five-page restaurant site to a clinic network of forty doctors —     │
│  websites, apps, content, social, and AI features — built and run by a      │
│  senior team in Dhaka for clients in 14+ countries. Choose a fixed-scope    │
│  project or a monthly retainer.                                             │
│                                                                             │
│  [Tell us about your project →]   [Stay with us monthly →]                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Copy rules (locked 2026-07-02)

- **Eyebrow** must read exactly `AI-First Product Studio · Dhaka · 14+ countries`. Do not change.
- **H1** reads exactly as above. em-italic emphasis on `back` in line 2 (the word that conveys "no longer held back"). Three lines on desktop, two on mobile.
- **Sub** is the locked copy above. The "restaurant site to clinic network" range is deliberate — it pre-answers the "are you too big / too small for me" question both audiences have. Do not shorten.
- **Primary CTA** → `/contact?type=project` (project route). **Secondary CTA** → `/services/retainer` (retainer route).
- No stat row below the CTAs. Numbers live in `/services` and the selected work section.
- No "weeks not quarters" or "MVPs for funded founders" language. That was the previous positioning and it spoke to a buyer we are not prioritising.

### Implementation notes

- Class: `.ph-*`. Section lives in `home/Hero.tsx`.
- Bg-video canvas lives behind the hero (decorative).
- Hero copy is the **single most-reviewed line of the site**. Any change here should be a deliberate, one-commit pass with the founder reviewing live.
- The H1 breaks at three lines on desktop (60ch+ viewports). On mobile it wraps to two lines naturally. Test on both.

---

## Section 2 — Trusted by

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Brands we've worked with                                                    │
│                                                                             │
│  [logo] [logo] [logo] [logo] [logo] [logo]                                  │
│  [logo] [logo] [logo] [logo] [logo] [logo]                                  │
│  [logo] [logo] [logo] [logo] [logo] [logo]                                  │
│  [Grayscale, 6-col grid, wraps. 23 logos total in /content/clients/]        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Implementation notes

- Class: `.lc-*`. Component: `home/ClientsGrid.tsx`.
- Source: `ClientsGrid.tsx` `clients[]` array. Keep it the canonical list. The old marquee `Clients.tsx` is unused.
- Logos are real. No copy changes needed.

---

## Section 3 — What we ship

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  What we ship                                                                │
│                                                                             │
│  Four focused offerings.                                                    │
│  One senior-led team.                                                        │
│                                                                             │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐     │
│  │ [icon]             │  │ [icon]             │  │ [icon]             │     │
│  │ 01                 │  │ 02                 │  │ 03                 │     │
│  │                    │  │                    │  │                    │     │
│  │ Website &          │  │ Apps &             │  │ Content &          │     │
│  │ Web Apps           │  │ Internal Tools     │  │ Social             │     │
│  │                    │  │                    │  │                    │     │
│  │ Marketing sites,   │  │ Customer portals,  │  │ Posts, calendars,  │     │
│  │ e-commerce,        │  │ dashboards,        │  │ captions, ads,     │     │
│  │ custom web apps.   │  │ internal tools,    │  │ reviews, SEO.      │     │
│  │ WordPress,         │  │ AI features        │  │ Run by our         │     │
│  │ Laravel, Next.js.  │  │ inside the apps    │  │ content marketer,  │     │
│  │                    │  │ your team uses.    │  │ not an algorithm.  │     │
│  │                    │  │                    │  │                    │     │
│  │ → See web work     │  │ → See app work     │  │ → See content work │     │
│  └────────────────────┘  └────────────────────┘  └────────────────────┘     │
│  ┌────────────────────┐                                                       │
│  │ [icon]             │                                                       │
│  │ 04                 │                                                       │
│  │                    │                                                       │
│  │ AI Integrations    │                                                       │
│  │                    │                                                       │
│  │ Add AI features    │                                                       │
│  │ to your existing   │                                                       │
│  │ site, app or       │                                                       │
│  │ workflow. RAG over │                                                       │
│  │ your docs,         │                                                       │
│  │ WhatsApp bots,     │                                                       │
│  │ workflow agents.   │                                                       │
│  │                    │                                                       │
│  │ → See AI work      │                                                       │
│  └────────────────────┘                                                       │
│                                                                             │
│  No agency theatre. No outsourcing. You get a senior on every project,      │
│  fixed scope, fixed price — or a single retainer if you want us to run it   │
│  end to end.                                                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Pillar order (locked 2026-07-02)

| # | Pillar | Both audiences see it as |
|---|---|---|
| 01 | Website & Web Apps | "My site, my store, my web app — handled" |
| 02 | Apps & Internal Tools | "The thing my team uses every day" |
| 03 | Content & Social | "Someone to keep my pages alive" |
| 04 | AI Integrations | "Smart features inside the things above" |

The four pillars are not ordered by "popularity" — they are ordered by **dependency**. Web apps host the AI features. Apps & tools power the operations. Content makes the surfaces visible. AI is the layer that fits inside all three.

### Copy rules

- **Four pillars, locked.** No fifth. No reorder without a wireframe revision.
- **No per-pillar dollar pricing on this section.** Pricing lives in `/services` (project scoping) and `/services/retainer` (monthly). The home offers the offering, not the price.
- **Each card's first sentence must be plain English** — what the founder or owner is buying, not the tech stack. The stack is in the Tooling Band (Section 5).
- **Card CTA** → `/services#{pillar-id}` deep link.
- **Subhead** under the cards explicitly mentions "fixed scope, fixed price" (for mid-market) AND "single retainer" (for small-business). Both audiences self-route from one line.
- **No "AI-first" or "MVP" repetition** in this section — those words already live in the eyebrow and the H1.

### Implementation notes

- Class: `.sv-*`. Component: `home/Services.tsx`.
- Data: `servicesData.ts` (4 entries). **Founder review pending** to confirm the four entries and their copy land for both audiences.
- Layout: 3 cards + 1 below (desktop). Stacks to 4 vertical cards on mobile.
- Icons (react-icons/fi): Website & Web Apps = `FiMonitor`, Apps & Internal Tools = `FiCpu`, Content & Social = `FiShare2`, AI Integrations = `FiZap`. Final icon picks are cosmetic; confirm before merge.

---

## Section 4 — Two ways to work (NEW, dual-track routing layer)

### Why this section exists

This is the **most important new section** on the home. Without it, both audiences bounce:

- Mid-market prospects think "they're for small businesses" because the subhead says "restaurant to clinic".
- Small-business prospects think "they're too expensive / too enterprise" because the H1 says "digital backbone".

The Two Ways band sits between the services band and the tooling band. It is the section that says, in 30 seconds, **"yes, both, you pick"**. Every visitor must reach this section before they decide to leave.

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  Two ways to work with us.                                                   │
│                                                                             │
│  ┌──────────────────────────────────┐  ┌──────────────────────────────────┐ │
│  │ [icon: briefcase]                │  │ [icon: refresh-cw]               │ │
│  │                                  │  │                                  │ │
│  │ Build a project.                 │  │ Stay with us monthly.            │ │
│  │                                  │  │                                  │ │
│  │ Mid-market scope. Senior-led.    │  │ Small-business digital retainer. │ │
│  │ Fixed scope. Fixed price.        │  │ One team, one monthly bill.      │ │
│  │ A named senior on every project. │  │ Your WhatsApp away.              │ │
│  │                                  │  │                                  │ │
│  │ Best for: regional chains,       │  │ Best for: restaurants, retail,   │ │
│  │ founders modernising legacy      │  │ clinics, tuition, NGOs, agents.  │ │
│  │ stacks, funded teams, NGOs       │  │ Anyone who wants the digital     │ │
│  │ with project budgets.            │  │ layer run by someone else.       │ │
│  │                                  │  │                                  │ │
│  │ Typical scope: $5K – $50K.       │  │ Typical scope: $300 – $1,500/    │ │
│  │ 2-8 weeks.                       │  │ month. 30-day rolling.           │ │
│  │                                  │  │                                  │ │
│  │ [Tell us about your project →]   │  │ [Stay with us monthly →]         │ │
│  │                                  │  │                                  │ │
│  └──────────────────────────────────┘  └──────────────────────────────────┘ │
│                                                                             │
│  Not sure which fits? Get a free digital audit — 30 min, written            │
│  recommendations in 48 hours. No pitch.                                      │
│  [Get a free digital audit →]                                               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Copy rules

- **Two cards, equal weight.** No "featured" badge. No "popular" label. Both are first-class offers.
- **Each card has the same shape:** audience qualifier + promise + "best for" list + typical scope + CTA.
- **Typical scope numbers are illustrative.** Final numbers are the founder's call. Wireframe carries them as `??` until confirmed.
- **The line below the cards** ("Not sure which fits?") is the third route for the undecided visitor. It links to the digital-audit form (`/contact?type=audit`).
- **No "AI" in either card title.** The AI pillar is one of four offerings; it isn't the routing layer.

### Implementation notes

- **New component:** `home/TwoWaysBand.tsx`. CSS class: `.tw-*`.
- Layout: 2-col on desktop, stacks on mobile. Cards have a subtle accent border on hover (left = navy, right = cream — visual signal without being heavy).
- Founder to confirm: icon picks, "best for" lists, typical scope numbers, copy on the audit sub-line.
- Page order: this section sits between Services (Section 3) and Tooling Band (Section 5). Section numbering below shifts accordingly.

## Section 5 — Tooling (renumbered, was Section 4 — AI tooling)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  What we ship with.                                                          │
│  [eyebrow, muted]                                                            │
│                                                                             │
│  Web          [Next.js]  [Laravel]  [WordPress]  [Vite]  [Tailwind]          │
│  Apps         [React]  [Node]  [Supabase]  [Postgres]  [Prisma]              │
│  Content      [Sanity]  [Notion]  [Buffer]  [Ahrefs]  [GA4]                  │
│  AI           [LangGraph]  [Vercel AI SDK]  [pgvector]  [Pinecone]          │
│               [OpenAI]  [Anthropic]  [Gemini]  [Langfuse]                   │
│                                                                             │
│  [muted: Model-agnostic by default — we pick the right tools for the job,    │
│   and we don't lock you into any of them.]                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Copy rules

- **Four rows, one per pillar.** Web, Apps, Content, AI. Not five, not three.
- **No marketing prose.** This is a tools shelf, not a pitch. Label per item, not full sentences.
- **The single line below the rows** says "model-agnostic by default — we pick the right tools for the job, and we don't lock you into any of them" or equivalent.
- **Exact tool labels are founder to confirm.** Stack changes month-to-month in 2026.

### Implementation notes

- Component: `home/ToolingBand.tsx`. CSS class: `.tb-*` (add to `home.css`).
- Layout: 4 rows, label column on the left (sticky on desktop), chips/labels flowing right. Stacks on mobile.
- No images. Text labels in monospace or muted uppercase.
- The AI row is **last** so the section does not lead with AI — the section order itself signals that AI is one of four, not the headline.

### Implementation notes

- New component: `home/ToolingBand.tsx`. CSS class: `.tb-*` (add to `home.css`).
- Layout: 5 rows, label column on the left (sticky on desktop), chips/labels flowing right. Stacks on mobile.
- No images. Text labels in monospace or muted uppercase.

---

## Section 6 — How we ship (dual-track)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  How we ship.                                                                │
│                                                                             │
│  For projects: senior-review discipline.    For retainers: monthly cadence. │
│  [eyebrow-left]                                 [eyebrow-right]             │
│                                                                             │
│  ┌──────────────────────────────┐   ┌─────────────────────────────────┐     │
│  │ Eval-first delivery.         │   │ [eval report screenshot]        │     │
│  │ Every prompt and model swap  │   │ A real eval run from a recent   │     │
│  │ ships behind an eval suite.  │   │ engagement — accuracy /         │     │
│  │ No "looks good to me".       │   │ latency / regression deltas.    │     │
│  │                              │   │                                 │     │
│  │ Versioned prompts.           │   └─────────────────────────────────┘     │
│  │ Every change is reviewed,    │                                              │
│  │ reversible, and traceable.   │   ┌─────────────────────────────────┐     │
│  │                              │   │ [observability dashboard        │     │
│  │ Post-launch monitoring.      │   │  screenshot]                     │     │
│  │ We don't disappear at        │   │ Live traces, cost-per-call,     │     │
│  │ launch. 30 days included.    │   │ hallucination rate.             │     │
│  │                              │   │                                 │     │
│  │ Model-agnostic.              │   └─────────────────────────────────┘     │
│  │ Switch providers without     │                                              │
│  │ rewriting the app.           │                                               │
│  └──────────────────────────────┘                                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Copy rules

- **Two-column band.** Left = project discipline. Right = retainer cadence. Equal weight.
- **Left column vocabulary** is for mid-market buyers: "senior", "versioned", "fixed scope", "rollback". No AI-eval jargon — that speaks to funded founders and dilutes the message for both target audiences.
- **Right column vocabulary** is for small-business buyers: "12 posts", "monthly call", "WhatsApp", "30-day rolling". No project-management jargon — that speaks to mid-market PMs and confuses the buyer.
- **No mockups or artefacts** in this section (unlike the previous draft). The proof is in the discipline column itself. Visual evidence lives in Section 7 (Selected Work) and the spec projects.
- **First three bullets on each side are the same shape:** a short headline, then 2-3 plain-English sentences. The last bullet on each side is the "next step" line ("Fixed scope. Fixed price." / "30-day rolling. Cancel any month.").
- **Founder to confirm:** final wording of all 8 bullets. The shape is locked, the words aren't.

### Implementation notes

- New component: `home/ShippingDiscipline.tsx`. CSS class: `.sd-*`.
- Layout: 2-col on desktop with a thin vertical divider. Stacks on mobile (project on top, retainer below).
- The section intentionally **does not** lead with AI. It leads with "How we ship" — the discipline promise, not the technology.
- This is the most-skimmed differentiator on the page for both audiences. Every word matters.

---

## Section 7 — Selected work (two rows, two audiences)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  Selected work                                       [See all work →]       │
│                                                                             │
│  ── Recent projects ──                                          (eyebrow)   │
│  Real client work shipped in the last 12 months.                            │
│                                                                             │
│  ┌─────────────────────┐  ┌─────────────────────┐  ┌────────────────────┐  │
│  │ [project image]     │  │ [project image]     │  │ [project image]    │  │
│  │                     │  │                     │  │                    │  │
│  │ [Client name]       │  │ [Client name]       │  │ [Client name]      │  │
│  │ Apps & Tools        │  │ Website             │  │ Content & Social   │  │
│  │ One-line scope.     │  │ One-line scope.     │  │ One-line scope.    │  │
│  └─────────────────────┘  └─────────────────────┘  └────────────────────┘  │
│                                                                             │
│  ── Spec projects ──                                             (eyebrow)   │
│  Internal builds that demo what we can ship for clients.                    │
│                                                                             │
│  ┌─────────────────────┐  ┌─────────────────────┐  ┌────────────────────┐  │
│  │ [spec screenshot]   │  │ [spec screenshot]   │  │ [spec screenshot]  │  │
│  │                     │  │                     │  │                    │  │
│  │ [Spec name]         │  │ [Spec name]         │  │ [Spec name]        │  │
│  │ AI Integrations     │  │ AI Integrations     │  │ AI Integrations    │  │
│  │ RAG over public     │  │ Multi-agent         │  │ Inbound SDR        │  │
│  │ docs.               │  │ research.           │  │ agent.             │  │
│  └─────────────────────┘  └─────────────────────┘  └────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Copy rules

- **Two rows. Two audiences. No mixing.**
  - Row 1 ("Recent projects") = real client work. Card stack proves we ship for paying customers.
  - Row 2 ("Spec projects") = internal builds that demo the AI pillar we don't yet have client proof for.
- **Each row gets its own eyebrow.** Same rule as Section 5 (Tooling) and Section 6 (How we ship) — sub-eyebrows make the dual structure scannable in 3 seconds.
- **No fabricated names.** Row 1 cards display real client names only when the founder confirms each entry is shippable. Until then, the row shows 1-2 confirmed entries + 1-2 "Coming soon" placeholders (honest, not invented).
- **No invented metrics on either row.** Cards have a one-line scope, period. Numbers live in case studies on `/work`.
- **Row 2 must be honest about being spec work.** "Internal builds that demo what we can ship" — not "case studies", not "portfolio", not "client results". Specs are sales tools, not claims.
- **Row 2 ordering:** RAG demo first (per founder lock, 2026-07-02). It is the most concrete AI capability and the one closest to ship. Other two specs (multi-agent research, inbound SDR) are placeholders until founder confirms scope.

### Implementation notes

- Class: `.fw-*`. Component: `home/FeaturedWork.tsx`.
- Data: `featuredWork.ts` rewritten to two arrays: `recentProjects[]` and `specProjects[]`.
  - `recentProjects`: founder-confirmed client work only. Empty array is acceptable until founder adds entries.
  - `specProjects`: hardcoded list of 3 spec demos, ordered by ship-readiness.
- `workData.ts` (the long-form work data with 6 items) is for `/work` only. The home page draws from `featuredWork.ts`.
- **Row labels are required UI**, not optional subtext. Without them, visitors see 6 cards and assume all 6 are clients — exactly the failure mode that broke the previous version.

---

## Section 8 — How we work

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  How we work.                                                                │
│                                                                             │
│  01 Discover        02 Design         03 Build           04 Ship            │
│                                                                             │
│  Scope in 48        Wireframes to     Weekly demos,      Deploy, hand-off, │
│  hours. 30-min      lock the shape.   no surprises.      support.          │
│  call, written      Lo-fi day 3,      A named senior                          │
│  scope next day.    hi-fi Figma       ships in 2-week                       │
│                     by end of W1.     sprints.                                │
│                                                                             │
│  For projects: 2-8 weeks.    For retainers: we stay.                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Copy rules

- **Four steps, names locked:** Discover → Design → Build → Ship.
- **Final line is the dual-track close.** Two pieces of text on one line, separated by enough whitespace to read as parallel options:
  - `For projects: 2-8 weeks.` — speaks to mid-market buyers.
  - `For retainers: we stay.` — speaks to small-business buyers.
- **"We stay" is the most important word on this section** for the retainer audience. It is the only place on the home page that uses the language small-business buyers actually use ("stay with us", "ongoing", "monthly").
- **No "AI" or "MVP" in step names.** Plain verbs. The AI pillar is proven elsewhere on the page (Services, Tooling, Spec Work).
- **Project length "2-8 weeks"** — founder to confirm. Tighter than the v1 mockup's "8-12 weeks" because the live copy already says "2-8 weeks" and we should not contradict it.

### Implementation notes

- Class: `.pr-*`. Component: `home/Process.tsx`.
- Layout: horizontal 4-col timeline on desktop, vertical timeline on mobile.
- **Final line uses a 2-column flex layout** (not a separator pipe), so the two options sit side-by-side on desktop and stack on mobile.
- The Process component renders the four steps + the dual-track close line. The close line is the visual transition into Section 9 (What clients say) — testimonials for both audiences can sit right after it.

---

## Section 9 — What clients say

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  What clients say.                                                           │
│                                                                             │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐     │
│  │ "                  │  │ "                  │  │ "                  │     │
│  │ Quote text..."     │  │ Quote text..."     │  │ Quote text..."     │     │
│  │                    │  │                    │  │                    │     │
│  │ Founder, AI startup│  │ Operations lead,   │  │ Owner, restaurant  │     │
│  │ Series A · SF      │  │ clinic chain       │  │ chain (4 locations)│     │
│  └────────────────────┘  └────────────────────┘  └────────────────────┘     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Copy rules

- **Three quotes max.** A balanced set across both audiences:
  - One mid-market project quote (founder / CTO / product lead — funded or well-funded context).
  - One small-business retainer quote (owner / operations / marketing lead — multi-location or multi-staff context).
  - One role that's intentionally ambiguous and could be either (e.g., "Head of Growth" at a 20-person startup), to avoid the section feeling segmented.
- **Section header dropped "founders"** (the old wording) and went to **"What clients say"**. Reason: most retainer clients are not "founders" — they're owners, ops leads, marketing directors. The header now matches the dual audience.
- **Honest anonymous roles** are acceptable while real quotes with permission are pending (founder-locked rule: "No fake names. Three anonymous-but-honest role/title quotes are live; replace with real attributed quotes as they come in.").
- **No metrics** in any quote unless the founder wrote them with the source client and has permission to publish.
- **No "AI" repetition in quote bodies** — AI is anchored in the H1 and the Services section. Repeated AI-claims inside quote copy read as forced.
- **Tone split across the three quotes:**
  - Quote 1 (mid-market) = terse, technical, references "scoping", "spec", "shipping".
  - Quote 2 (retainer) = warmer, references "monthly", "call", "WhatsApp", "team".
  - Quote 3 (either) = more reflective, references "trust", "consistency", "long-term".

### Implementation notes

- Class: `.tm-*`. Component: `home/Testimonials.tsx`.
- Data: inlined `quotes[]` array in the component (3 entries, role + location suffix). Acceptable to leave inline until real quotes arrive, then move to `data/testimonials.ts`.
- **Quotes live in order: project → retainer → either.** This ordering means a skim-reader sees "scoped and shipped" first (mid-market signal) and "monthly call" second (retainer signal). Either audience recognises themselves within two cards.

---

## Section 10 — Final CTA (dual route)

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [●] Currently booking Q3 2026                                               │
│                                                                             │
│  One project, or one team that stays.                                        │
│                                                                             │
│  ── Got a project? ──                          ── Need a team that stays? ──│
│                                                                             │
│  Tell us what you're building.                Let's talk about what your    │
│  30-min call, written scope the next day.      business needs every month.   │
│  No sales pitch, no deck — a senior            30-day rolling. Cancel any   │
│  engineer telling you what it would take       month. WhatsApp, calls, or    │
│  and what it would cost.                       async — your call.           │
│                                                                             │
│  [Tell us about your project →]                [Stay with us monthly →]      │
│   → /contact?type=project                       → /services/retainer        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Copy rules

- **H1 is the dual-track close.** `One project, or one team that stays.` — same sentence carries both audiences. The two-line header (no third line) is intentional; the room belongs to the two options below it.
- **Two equal-weight columns.** Left = project route. Right = retainer route. Both get:
  - A sub-eyebrow ("Got a project?" / "Need a team that stays?")
  - A two-sentence pitch tuned to that audience
  - A primary button with a clear destination route
- **No "AI" in either CTA copy.** Both audiences are addressed on their own terms:
  - Project column uses "scope", "senior engineer", "what it would take and what it would cost" (decision-maker language).
  - Retainer column uses "monthly", "30-day rolling", "Cancel any month", "WhatsApp" (small-business operator language).
- **Primary CTA** = the project route (`/contact?type=project` — founder-locked, matches Hero primary).
- **Secondary CTA** = the retainer route (`/services/retainer` — founder-locked, matches Hero secondary).
- **Eyebrow with "Currently booking"** signals scarcity without lying. Update the quarter (Q3 → Q4 etc.) every cycle.
- **The sub-promise must be true.** "30-min call, written scope the next day" and "30-day rolling. Cancel any month." Both are operationally honest — no "we'll get back to you in 24h" type padding that bites later.
- **No "free audit" CTA anymore.** That was the v1 dual-route (call + audit). The audit was always a tool-led product, not a sales CTA. The two CTAs now are both sales routes — one project, one retainer.

### Implementation notes

- Class: `.cb-*`. Component: `home/CtaBand.tsx`. Full rewrite.
- Layout: 2-col with a soft vertical divider on desktop. Stacks on mobile (project on top, retainer below).
- The **H1 (`One project, or one team that stays.`)** sits centred above the two columns. Below the H1, a thin horizontal divider splits the section into two parallel lanes — same visual rhythm as Sections 5/6/9.
- **Buttons must use the same style as Hero CTAs.** Same primary/secondary weight, same padding, same hover state. Visual continuity between the top of the page and the bottom is part of the dual-track brand promise.
- The CTA section is the **last component on `/`**. It ends the page.

---

## Component map

| File | Status | Action needed |
|---|---|---|
| `home/Hero.tsx` | Live, copy being rewritten | Apply locked copy (Section 1) |
| `home/ClientsGrid.tsx` | Live, 23 logos | None |
| `home/Services.tsx` | Live, draws 3 of 6 from `servicesData` | Update to draw 4 (3+1 layout), swap data file |
| `home/TwoWaysBand.tsx` | **New** | Build per spec (Section 4) |
| `home/ToolingBand.tsx` | **New** | Build per spec (Section 5), 4 rows |
| `home/ShippingDiscipline.tsx` | **New** | Build per spec (Section 6), 2-col |
| `home/FeaturedWork.tsx` | Live, draws from `featuredWork.ts` | Rewrite to two rows (Section 7) |
| `home/Process.tsx` | Live | Update final line to dual-track close (Section 8) |
| `home/Testimonials.tsx` | Live, inline quotes | Reorder to project → retainer → either (Section 9) |
| `home/CtaBand.tsx` | Live | Full rewrite to dual-route (Section 10) |

**Data files in scope for this rewrite:**

| File | Status | Action needed |
|---|---|---|
| `src/data/servicesData.ts` | 6 fabricated entries | Rewrite to 4 honest pillars, no per-pillar pricing |
| `src/data/featuredWork.ts` | 3 fabricated entries | Rewrite to two arrays: `recentProjects[]`, `specProjects[]` |
| `src/data/workData.ts` | 6 fabricated case studies | Strip to empty placeholders. `/work` page draws blank until founder confirms entries |

---

## Acceptance checklist (founder review)

Before merging any home-page change, confirm:

### Dual-track routing (the most critical checks)

- [ ] Hero has two CTAs: `Tell us about your project →` and `Stay with us monthly →` (founder-locked routes: `/contact?type=project` and `/services/retainer`)
- [ ] Section 4 (Two Ways to Work) renders with two cards, equal weight, no visual hierarchy that pushes one audience down
- [ ] Section 10 (Final CTA) renders both routes in two columns with the same button weight as Hero
- [ ] Section 8 (How we work) final line shows both: `For projects: 2-8 weeks.` AND `For retainers: we stay.`
- [ ] Every section's copy rules reviewed for "no AI-eval jargon in retainer copy, no PM jargon in project copy"

### Honesty over fabrication

- [ ] No case study name appears on the page unless the founder has personally shipped it
- [ ] `featuredWork.ts` `recentProjects[]` contains only founder-confirmed entries (empty array is acceptable; placeholders are not)
- [ ] `featuredWork.ts` `specProjects[]` is **clearly labelled** as spec/internal work in the UI ("Spec projects — internal builds that demo what we can ship")
- [ ] No invented metrics anywhere — not in case studies, not in testimonials, not in copy
- [ ] Testimonials use anonymous roles only (Founder / Operations lead / Owner / etc.) — no fabricated names

### Structural

- [ ] Eyebrow includes "AI-First Product Studio", "Dhaka", and "14+ countries"
- [ ] Services section surfaces exactly the four honest pillars: Website & Web Apps, Apps & Internal Tools, Content & Social, AI Integrations
- [ ] Tooling band has 4 rows (Web, Apps, Content, AI) — not 3
- [ ] "How we ship" has the discipline column (left) and cadence column (right) — equal weight, no "AI" lead
- [ ] Process timeline (2-8 weeks) is realistic
- [ ] No "About" section on the homepage — team lives at `/about`
- [ ] Header/nav still has the AI labels (founder-locked: they're correct)

### Continuity

- [ ] Hero primary CTA route = Final CTA primary CTA route (`/contact?type=project`)
- [ ] Hero secondary CTA route = Final CTA secondary CTA route (`/services/retainer`)
- [ ] Testimonials order is project → retainer → either (Section 9 rule)
- [ ] Selected Work row 1 (Recent projects) is above row 2 (Spec projects) on every viewport
- [ ] No "MVP" or "AI-first" repetition in adjacent sections (one anchor each)

---

## Out of scope (separate PRs)

### In this PR (homepage rewrite)

- All 10 home-page sections + their wired components + `src/data/servicesData.ts`, `src/data/featuredWork.ts`, `src/data/workData.ts`.
- `src/app/page.tsx` reorders sections to match the new sequence.

### NOT in this PR (founder-locked as separate work)

- **`/services/retainer`** — the Secondary CTA on Hero and Final CTA both target this. The page does not yet exist. Build it before the homepage goes live, or the secondary CTA 404s.
- **`/pricing` rebuild** — current pricing still references the v1 "fixed scope, fixed price" model without retainer framing. Needs a retainer-vs-project comparison layer.
- **Spec projects themselves** — RAG demo is the founder-locked first spec. The wireframe reserves the slot in Section 7 (Spec projects), but the demo is a separate build. Sections 5 (Tooling), 6 (How we ship), and the dual CTA copy all reference "what we can ship" — without at least one spec demo live, that promise reads as overclaim.
- **`/work` page rebuild** — `src/data/workData.ts` is being stripped in this PR, which means `/work` will render with no entries until the founder confirms real case studies. Either restore `/work` in a follow-up PR, or plan a temporary "case studies coming soon" page.
- **`/about` page** — referenced from the nav, currently not in the wireframe scope.
- **FAQ content** — founder-locked decision: no FAQ on the home page.
- **Blog (`src/data/posts.json` + `blogData.ts`)** — kept as-is; separate cleanup.
- **Brand docs (`docs/brand/*`, `docs/research/positioning-strategy.md`)** — still reference the older "AI-Powered Development for Growing Startups" framing. They need their own pass after this PR lands, otherwise there's a wireframe-vs-brand-docs contradiction in the repo.
- **Header/nav** — no change needed. AI labels in nav are correct.

---

## Change log

- **2026-07-02 (later same day)** — **Dual-track rewrite.** Three founder-locked decisions applied: (1) two-track model — mid-market project buyers + small-business retainer buyers, served side-by-side on the home, not blended; (2) dual CTA — `Tell us about your project →` (`/contact?type=project`) + `Stay with us monthly →` (`/services/retainer`), anchored in Hero and Final CTA; (3) spec projects as the AI pillar's proof — RAG demo first (founder-locked priority), internal builds labelled honestly. Restructured the page to 10 sections: added Section 4 (Two Ways to Work) as a routing layer between Hero and Services. Renumbered all subsequent sections. Services went from 3 pillars to 4 honest pillars (Website & Web Apps, Apps & Internal Tools, Content & Social, AI Integrations) with no per-pillar pricing. Tooling band went from AI-only to 4 rows (Web, Apps, Content, AI). Selected Work split into two clearly-labelled rows (Recent projects + Spec projects). Testimonials reordered project → retainer → either. Final CTA rewritten to dual route. Component map updated to add Three new components (`TwoWaysBand`, `ToolingBand`, `ShippingDiscipline`). Strip in progress: `servicesData.ts`, `featuredWork.ts`, `workData.ts` to remove fabricated entries. **`/services/retainer` page, `/pricing` rebuild, RAG demo, and `/work` rebuild deferred to separate PRs** (see Out of scope).
- **2026-07-02 (earlier same day)** — Consolidated v1 + v2 wireframes. New positioning: AI-First Product Studio. Geo "Dhaka · 14+ countries". Three pillars locked. Added Tooling Band and Shipping Discipline sections to match July 2026 market expectations. Deleted `homepage-v2-wireframe.md` (agency positioning was abandoned in code). This is the single source of truth for `/`.
- **2026-06-27 (prior)** — v2 wireframe added ("Design · Development · Content" agency). Never implemented; superseded before merge.
- **Earlier (v1, "AI-Powered Development for Growing Startups")** — original 2024-era draft. Kept in git history.

## Layout Structure

### Header Section
```
[Logo: Mindscraft]                    [Nav: Services | Work | About | Blog]  [CTA: Start Project]
```

### Hero Section
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  AI-Powered Development for Growing Startups                               │
│  [Large headline - brand-dark, 48px desktop/32px mobile]                   │
│                                                                             │
│  Launch faster, scale smarter with intelligent solutions                   │
│  built for your stage of growth                                            │
│  [Subheadline - gray-600, 18px]                                           │
│                                                                             │
│  [Primary CTA: Start Your AI Project] [Secondary CTA: View Case Studies]   │
│                                                                             │
│  ✓ 50+ AI implementations  ✓ 8-week delivery  ✓ Startup-friendly pricing  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Social Proof Section
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    Trusted by Growing Startups                             │
│                                                                             │
│  [Client Logo] [Client Logo] [Client Logo] [Client Logo] [Client Logo]     │
│                                                                             │
│  "Mindscraft helped us launch our AI-powered MVP 60% faster"               │
│  - Sarah Chen, Founder at TechStart                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Services Overview
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        Our AI-First Services                               │
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐            │
│  │ [AI Icon]       │  │ [Web Icon]      │  │ [Mobile Icon]   │            │
│  │ AI Integration  │  │ Web Development │  │ Mobile Apps     │            │
│  │ Smart features  │  │ Modern, fast    │  │ Native & hybrid │            │
│  │ [Learn More]    │  │ [Learn More]    │  │ [Learn More]    │            │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Featured Work
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           Recent Success Stories                           │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │ [Project Screenshot]                                                    │ │
│  │                                                                         │ │
│  │ FinTech AI Dashboard                                                    │ │
│  │ Increased user engagement by 340% with AI-powered insights             │ │
│  │ [View Case Study]                                                       │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  [View All Work]                                                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Process Section
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        How We Work With You                                │
│                                                                             │
│  1. Discovery        2. Design           3. Development      4. Launch      │
│  [Icon] Understand   [Icon] Create       [Icon] Build        [Icon] Deploy  │
│  your needs          smart solutions     with AI             & optimize     │
│                                                                             │
│  Typical timeline: 8-12 weeks from start to launch                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CTA Section
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    Ready to Build Something Amazing?                       │
│                                                                             │
│              Let's discuss your AI-powered product vision                  │
│                                                                             │
│                        [Start Your Project]                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Footer
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Logo]                                                                      │
│                                                                             │
│ Services        Company         Resources       Contact                     │
│ AI Integration  About           Blog            hello@mindscraft.dev        │
│ Web Dev         Team            Case Studies    +1 (555) 123-4567          │
│ Mobile Apps     Careers         Resources       San Francisco, CA          │
│                                                                             │
│ © 2024 Mindscraft. All rights reserved.                                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Mobile Wireframe Adaptations

### Mobile Hero (375px width)
```
┌─────────────────────────────┐
│ [☰] [Logo]         [CTA]    │
├─────────────────────────────┤
│                             │
│  AI-Powered Development     │
│  for Growing Startups       │
│                             │
│  Launch faster, scale       │
│  smarter with intelligent   │
│  solutions                  │
│                             │
│  [Start Your AI Project]    │
│  [View Case Studies]        │
│                             │
│  ✓ 50+ implementations      │
│  ✓ 8-week delivery          │
│  ✓ Startup pricing          │
│                             │
└─────────────────────────────┘
```

### Mobile Services (Stacked)
```
┌─────────────────────────────┐
│    Our AI-First Services    │
│                             │
│ ┌─────────────────────────┐ │
│ │ [AI Icon]               │ │
│ │ AI Integration          │ │
│ │ Smart features that     │ │
│ │ drive engagement        │ │
│ │ [Learn More]            │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │ [Web Icon]              │ │
│ │ Web Development         │ │
│ │ Modern, fast, scalable  │ │
│ │ [Learn More]            │ │
│ └─────────────────────────┘ │
│                             │
└─────────────────────────────┘
```

## Key Design Decisions

### Information Hierarchy
1. **Primary Focus**: AI-powered development for startups
2. **Secondary Focus**: Proven results and social proof
3. **Tertiary Focus**: Services and process explanation
4. **Conversion Points**: Multiple CTAs throughout the page

### User Flow Optimization
- **Immediate Value**: Hero section clearly states value proposition
- **Trust Building**: Social proof and client testimonials early
- **Service Discovery**: Clear service categories with easy navigation
- **Conversion**: Multiple CTA opportunities without being pushy

### Content Strategy
- **Headlines**: Benefit-focused, not feature-focused
- **Copy**: Startup-friendly language, avoiding technical jargon
- **CTAs**: Action-oriented, specific to user intent
- **Social Proof**: Specific metrics and client quotes

### Responsive Considerations
- **Mobile First**: Stack elements vertically on small screens
- **Touch Targets**: Minimum 44px height for all interactive elements
- **Content Priority**: Most important content visible above fold
- **Navigation**: Hamburger menu for mobile, horizontal for desktop