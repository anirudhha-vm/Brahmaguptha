# findings.md — Research, Discoveries & Constraints
> **Project:** Brahmagupta Club Platform
> **Created:** 2026-04-05 | **Updated:** 2026-04-05

---

## 📋 Concept Document Analysis

**Source:** User-provided concept document (2026-04-05)

### Core Insight
The platform is described as a **self-compounding digital system** — not a static website. Each event, blog, and member interaction adds permanent value to the ecosystem. The longer it runs, the more valuable it becomes.

### Critical Design Constraint
> "Continuity by Design — a new president inheriting the system next year can onboard in under an hour."
> This is the **most important non-functional requirement**. It has direct implications for:
> - Admin panel clarity and self-documentation
> - Data exportability
> - Role-based access clarity
> - Onboarding documentation quality

### System Components (from Concept Doc)
| Component | Priority | Complexity |
|---|---|---|
| Event Ecosystem | 🔴 Critical | High |
| User Identity & Dashboard | 🔴 Critical | High |
| Blog / Knowledge Layer | 🟠 High | Medium |
| AI Chatbot ("Ask Brahmagupta") | 🟠 High | High |
| Smart Event Recommendations | 🟠 High | Medium |
| Auto-Generated Event Recaps | 🟠 High | Medium |
| Mentorship Marketplace | 🟡 Medium | High |
| Project Showcase | 🟡 Medium | Medium |
| Opportunity Board | 🟡 Medium | Medium |
| Resource Library | 🟡 Medium | Low |
| Admin Analytics Dashboard | 🟠 High | High |
| Memory & Archive System | 🟡 Medium | Medium |
| Communication / Newsletter | 🟡 Medium | Low |

---

### Tech Stack Confirmed
- **Frontend/Framework**: Next.js (App Router)
- **Database Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (Google + Email/Password)
- **Hosting**: Vercel (Fully Free Tier matching Supabase Free Tier)
- **AI**: Abstract modular structure (Add API key later)
- **Aesthetic**: Premium UI. Colors: #915524 (Copper), #1A1A1A (Onyx). Fonts: Cinzel & Montserrat.

### Frontend Framework
- [ ] Next.js 15 (App Router) — Preferred for SSR/SSG + API routes
- [ ] Nuxt.js
- [ ] Remix

### Email Service
- [ ] Resend (developer-friendly, transactional)
- [ ] SendGrid
- [ ] Nodemailer + SMTP

### File Storage
- [ ] Supabase Storage (if Supabase is chosen for DB)
- [ ] Cloudinary (media transformation included)
- [ ] AWS S3

---

## ⚠️ Known Constraints

1. **No keys available yet** — Phase 2 (Link) is blocked until credentials are provided by user.
2. **No tech stack confirmed** — Awaiting Discovery Q&A answers.
3. **AI recap must be human-reviewed** — This is a behavioral rule, not optional.
4. **Event states are immutable lifecycle** — No state can be skipped.
5. **Blog peer review is mandatory** — No direct publish without a reviewer.

---

## 💡 Key Discoveries & Learnings

> This section is updated as we discover non-obvious facts during implementation.

| Date | Discovery | Impact |
|---|---|---|
| 2026-04-05 | Platform must function even as membership turns over annually | Architecture must prioritize self-documentation |
| 2026-04-05 | WhatsApp chaos is the status quo for opportunities/sponsorships | Opportunity Board is a high-value differentiator to build well |
| 2026-04-05 | Club identity is Mathematics + AI | Chatbot and AI features are core, not extras |

---

> **Rule:** Discoveries are added here immediately upon finding them. This file is never deleted.
