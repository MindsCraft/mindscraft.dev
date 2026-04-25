# MindsCraft.dev

## 💎 Premium AI-Driven Development & UX Agency
**Crafting Digital Experiences with 2026 AI Intelligence.**

---

### 🎯 Mission
At **MindsCraft**, we bridge the gap between human ingenuity and artificial intelligence. We build high-performance, AI-native SaaS products, premium web experiences, and scalable infrastructures designed for the 2026 tech landscape.

### 🔄 CI/CD & Release Strategy
We maintain a professional, industry-standard release cycle to ensure stability and zero-downtime production environments.

- **`main`**: **Production.** Always reflects the live site (`mindscraft.dev`).
- **`develop`**: **Staging.** Integration branch for team review and QA on Vercel Previews.
- **`feat/*`**: **Development.** Feature branches for specific tasks and local work.

**Standard Workflow:** `Feature Branch` → `PR into develop` (Staging/QA) → `Full Launch to main` (Production).

---

### 🤖 AI Content Engine (Gemini 2.5 Flash)
This repository features a proprietary AI-powered blog system that generates technical, 1000+ word articles with modern UX elements.

| Script | Purpose |
| :--- | :--- |
| `npm run build:blog` | Scours technical feeds and generates today's automated blog post. |
| `npm run build:blog:all` | Retroactively rewrites all blog posts using the latest 2026 industry context. |
| `npm run blog:feature <ID>` | Sets a specific blog post as the featured highlight on the landing page. |

---

### 🛠️ Tech Stack
- **Core:** [Next.js 16+](https://nextjs.org/) (Turbopack, RSC), React 19.
- **AI Ops:** Google Generative AI (Gemini), GitHub Actions.
- **Styles:** Tailwind CSS, Framer Motion, Premium Design Tokens.
- **Email:** [Resend](https://resend.com) (Serverless Delivery).
- **Deployment:** [Vercel](https://vercel.com).

### ⚙️ Quick Start
1. **Install:** `npm install`
2. **Environment:** Set `GEMINI_API_KEY`, `RESEND_API_KEY`, and `CONTACT_EMAIL` in `.env.local`.
3. **Develop:** `npm run dev`

---
© 2026 MindsCraft. Excellence in Digital Craftsmanship.