# Homepage v2 — Wireframe & Spec

**Status:** Draft for founder sign-off
**Replaces:** `homepage-wireframe.md` (v1) — kept for history, do not edit
**Last updated:** 2026-06-27

---

## Why this version exists

V1 was written for a positioning the company is not actually pursuing: "AI-first development partner for growing startups." The company is, in reality, a recently-started **design + development + content agency** with a broader service stack.

V1's copy (funding stages, "60% faster MVPs", "AI integrations") leaks into the homepage, services data, and case studies. This spec does **not** rewrite `servicesData.ts` or `workData.ts` — those are a separate cleanup pass. This spec only governs `/` (`src/app/page.tsx` and `src/app/home/*.tsx`).

### Founder decisions captured (2026-06-27)

1. **What we do:** Design, development, and full-stack **brand content support** — graphics, video content for social, copywriting/editorial planning. One agency, three pillars.
2. **Features section:** **Delete** `src/app/home/Features.tsx`. It was an experiment (chatbot product copy). Re-introduce a Capabilities block later under a different framing.
3. **Testimonials:** A few real ones will come later. For now, the page must not ship with placeholder names.

---

## Goals (in priority order)

The homepage has exactly four jobs:

1. **Tell visitors what we do** — three pillars, plain English.
2. **Prove we can do it** — work > everything else.
3. **Reduce agency risk** — process + engagement model + the human faces.
4. **Make the next step obvious** — one primary CTA, one secondary.

Everything else is decoration. If a section does not serve one of these four, it is cut.

---

## Section order (7 sections)

| # | Section | Job it does | Replaces |
|---|---|---|---|
| 1 | Hero | Position + qualify | Existing Hero (rewrite copy) |
| 2 | Trusted by | Trust bar | Existing Clients (keep marquee, add stat row) |
| 3 | What we do | Three-pillar service map | Existing Services (rewrite, drop "AI Product Development" framing) |
| 4 | Selected work | Proof of craft | Existing Work (keep grid, reduce to 4) |
| 5 | How we work | Reduce risk | New section (port from old "Process" wireframe) |
| 6 | Engagement | Self-select fit | Existing Engagement (keep both cards) |
| 7 | Final CTA | Convert | Existing Cta (rewrite copy, add dual CTA) |

### Sections removed from the homepage

- **Features** — deleted per founder decision. The block is unhooked from `src/app/page.tsx` and `Features.tsx` is left as dead code to be removed in a follow-up cleanup PR.
- **Testimonials** — removed until real quotes are supplied. Re-introduce when 2+ real founder quotes with names + permission exist.
- **FAQ** — moved to `/contact`. The questions belong at decision time, not on the homepage.
- **Blog** — removed from the homepage. Reachable via the main nav.

---

## Section 1 — Hero

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [Eyebrow: Design • Development • Content]                                  │
│                                                                             │
│  We help brands show up                                                    │
│  online with intent.                                                        │
│  [H1 — brand-dark, 56px desktop / 36px mobile, max-width 18ch]              │
│                                                                             │
│  Strategy, design, code, and the content that ties it all together —        │
│  under one roof. From your website to the socials, we build the             │
│  brand presence your customers actually recognise.                          │
│  [Sub — gray-600, 18px, max-width 56ch]                                     │
│                                                                             │
│  [Primary CTA: Start a project →]   [Secondary: See our work]               │
│                                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                        │
│  │ 20+ brands   │  │ 4 disciplines│  │ One team     │                        │
│  │ collaborated │  │ design • dev │  │ end-to-end   │                        │
│  │ with         │  │ content      │  │              │                        │
│  └──────────────┘  └──────────────┘  └──────────────┘                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Copy rules

- **H1** must mention **brand** and **online presence** — that's the value prop a recently-started agency can credibly own.
- **Eyebrow** lists the three pillars so the visitor scans them in <1s.
- **Subhead** is one sentence, no jargon, no "AI-first," no "MVP."
- **Stat row** uses honest, conservative numbers. Founder to confirm the "20+ brands" figure. If unsure, fall back to "Brands we've worked with" + the client marquee below does the counting.
- **Primary CTA** is action-oriented ("Start a project") — anchors to `/contact`. **Secondary** routes to `/work`.

### Implementation notes

- Reuse the existing `aww-hero` class structure; only the copy and stat row change.
- Stat row is a 3-column grid on desktop, stacks on mobile.
- The current hero's "Rated 5.0 on Clutch / Awarded by Awwwards" social-proof line stays **only if true**. Default to remove until confirmed.

---

## Section 2 — Trusted by

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  Brands we've worked with                                                   │
│  [H2 — 24px, muted weight]                                                  │
│                                                                             │
│  [logo] [logo] [logo] [logo] [logo] [logo]                                  │
│  [logo] [logo] [logo] [logo] [logo] [logo]                                  │
│  [Grayscale, hover-to-color, 6-col grid, wraps]                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Implementation notes

- Keep `ClientsGrid.tsx` as the default (it's the newer, structured grid). The marquee `Clients.tsx` is the fallback if you prefer motion.
- Both files draw from `/public/content/clients/`. Log list is already in `ClientsGrid.tsx` — 23 logos.
- No new copy is needed beyond the section title. Per founder, these logos are real (from prior engagements).

---

## Section 3 — What we do

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  What we do.                                                                │
│  [H2 — brand-dark, 40px]                                                    │
│                                                                             │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐     │
│  │ [icon]             │  │ [icon]             │  │ [icon]             │     │
│  │ Design             │  │ Development        │  │ Content            │     │
│  │                    │  │                    │  │                    │     │
│  │ Brand systems,     │  │ Marketing sites,   │  │ Graphics, social   │     │
│  │ UI/UX, web & app   │  │ e-commerce,        │  │ video, and the     │     │
│  │ interfaces.        │  │ custom web apps.   │  │ editorial plan     │     │
│  │                    │  │                    │  │ that ties it       │     │
│  │ → See design work  │  │ → See dev work     │  │ together.          │     │
│  │                    │  │                    │  │ → See content work │     │
│  └────────────────────┘  └────────────────────┘  └────────────────────┘     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Copy rules (founder-locked)

- **Three pillars, equal weight:** Design, Development, Content. No "AI Product" card. No "MVP" card. No "Strategy" card.
- **Content pillar language** (per founder): "Graphics, video content for social, and the editorial plan." Plain language — buyers should recognize their own need in the first sentence.
- Each card links to `/services` with a relevant anchor. No deep linking required for v2; single anchor to `/services` is acceptable.
- Cards are equal-height, 3-col on desktop, stack on mobile.

### Implementation notes

- Rewrite `src/app/home/Services.tsx` to the three-pillar structure. Keep the existing `aww-services` CSS classes; only the data + heading change.
- The contents of `src/data/servicesData.ts` are **out of scope** for this PR — separate cleanup.

---

## Section 4 — Selected work

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  Selected work.                                [View all →]                 │
│  [H2 — left-aligned]                          [link to /work]              │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ [Project screenshot, 16:9]                                            │  │
│  │                                                                       │  │
│  │  Brand name                                                           │  │
│  │  One-line outcome / scope (e.g. "Brand system + e-commerce site")     │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                          │  │
│  ┌────────────────────────┐  ┌────────────────────────┐                  │  │
│  │ [Project screenshot]   │  │ [Project screenshot]   │                  │  │
│  │ Brand name             │  │ Brand name             │                  │  │
│  │ Scope line             │  │ Scope line             │                  │  │
│  └────────────────────────┘  └────────────────────────┘                  │  │
│                                                                          │  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Implementation notes

- Keep the existing `aww-work-grid` layout. Reduce featured count from 4 to 3 (1 hero + 2 below) to tighten the section.
- Pull from `workItems` in `src/data/workData.ts`. **Founder to confirm which 3 case studies are real, recently-shipped, and presentable** — the data file currently has AI-startup-flavored entries that may not match the new positioning.
- Each card shows: title, one-line scope/outcome, no metrics if we can't verify them.

---

## Section 5 — How we work

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  How we work.                                                               │
│  [H2 — brand-dark]                                                          │
│                                                                             │
│  01 Discover        02 Design         03 Build           04 Ship & support  │
│  [icon]             [icon]            [icon]             [icon]             │
│  Brief, goals,      Wireframes,       Code, content,     Launch, iterate,   │
│  audience, and      visual system,    assets, QA.       hand-off docs.     │
│  scope.             and copy deck.                                      │
│                                                                          │
│  Typical project length: 4–10 weeks                                       │
│  [muted line, centered]                                                    │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Copy rules

- Four steps. Names: **Discover → Design → Build → Ship & support.**
- "Ship & support" replaces "Launch" — it's more honest for a small agency that stays with clients post-launch.
- "Typical project length: 4–10 weeks" — founder to confirm. Default to this range until told otherwise.

### Implementation notes

- New section. Component: `src/app/home/Process.tsx`. Reuse `aww-section-header` + a new `aww-process-grid` CSS class.
- Horizontal 4-col on desktop, vertical timeline on mobile.

---

## Section 6 — Engagement

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  Engagement models.                                                         │
│  [H2]  [Sub: Two ways to work with us.]                                     │
│                                                                             │
│  ┌──────────────────────────┐   ┌──────────────────────────┐               │
│  │ 01                       │   │ 02                       │               │
│  │ End-to-end delivery      │   │ Embedded expertise       │               │
│  │                          │   │                          │               │
│  │ Best for: a launch or a  │   │ Best for: teams that     │               │
│  │ rebrand from scratch.    │   │ need senior capacity.    │               │
│  │                          │   │                          │               │
│  │ ✓ Discovery to launch    │   │ ✓ Senior specialists     │               │
│  │ ✓ Cross-functional team  │   │ ✓ Match your workflow    │               │
│  │ ✓ Defined scope          │   │ ✓ Flexible scale         │               │
│  └──────────────────────────┘   └──────────────────────────┘               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Implementation notes

- Existing `src/app/home/Engagement.tsx` already has the right shape. **Add a "Best for:" line** to each card so visitors self-select.
- No structural rewrite; copy adjustment only.

---

## Section 7 — Final CTA

### Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  Ready to put your best work online?                                        │
│  [H2 — 40px, centered]                                                      │
│                                                                             │
│  Tell us about your project — we reply within one working day.             │
│  [Sub — gray-600, centered]                                                 │
│                                                                             │
│  [Primary CTA: Start a project →]   [Secondary: hello@mindscraft.dev]       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Copy rules

- **Replace** "Let's build something meaningful" / "Say Hello" — those are friendly but they don't do a job.
- "Ready to put your best work online" — speaks to founder/brand-owner ego and is consistent with the H1.
- Secondary CTA is the email address, **not** another button. This handles the "I'd rather just email" path.
- Founder to confirm the email and the "one working day" reply promise.

### Implementation notes

- Rewrite `src/app/home/Cta.tsx`. Keep `aww-cta` shell. Add a visible email link.

---

## Component map

| New file | Replace / status |
|---|---|
| `src/app/home/Hero.tsx` | **Rewrite** — new copy, stat row |
| `src/app/home/Clients.tsx` | **Pick one** — keep `ClientsGrid` (newer, structured), drop the marquee `Clients.tsx` from the homepage |
| `src/app/home/Services.tsx` | **Rewrite** — three pillars, drop AI framing |
| `src/app/home/Work.tsx` | **Tweak** — reduce to 3, ensure scope line per card |
| `src/app/home/Process.tsx` | **New** — 4-step horizontal flow |
| `src/app/home/Engagement.tsx` | **Tweak** — add "Best for:" line |
| `src/app/home/Cta.tsx` | **Rewrite** — replace copy, add email CTA |
| `src/app/home/Features.tsx` | **Delete from page** — leave file in repo for now, unhook from `page.tsx` |
| `src/app/home/Testimonials.tsx` | **Delete from page** — same handling |
| `src/app/home/Faq.tsx` | **Delete from page** — move FAQ content to `/contact` in follow-up |
| `src/app/home/Blog.tsx` | **Delete from page** — reachable via nav |

---

## Acceptance checklist (founder review)

Before merging this rebuild, confirm each item:

- [ ] H1 mentions brand + online presence, no AI/MVP/startup language
- [ ] Hero stat row uses honest numbers (or no numbers)
- [ ] "What we do" is exactly three pillars: Design, Development, Content
- [ ] Content pillar copy reflects "graphics, video for social, editorial plan"
- [ ] Selected work shows 3 case studies founder has personally shipped
- [ ] "How we work" timeline (4–10 weeks) is realistic
- [ ] No fake testimonials anywhere on the page
- [ ] Final CTA has a real email address and a real reply-time promise
- [ ] No "AI Product Development" or "MVP" language on the homepage
- [ ] No "About" section on the homepage — team is surfaced via `/about` in nav

---

## Out of scope (separate PRs)

- `src/data/servicesData.ts` — still has AI-startup framing. Clean up in a follow-up.
- `src/data/workData.ts` — same. Founder to pick 3 real case studies and rewrite copy.
- FAQ content + `/contact` page rebuild.
- Blog redesign.
- Header/nav cleanup (current IA still references "AI" in some labels).
- Brand docs (`docs/brand/*`, `docs/research/positioning-strategy.md`) need rewrites to match the actual agency positioning. Out of scope for this homepage PR.
