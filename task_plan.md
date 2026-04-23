# task_plan.md — Brahmagupta Club Platform
> **Protocol:** B.L.A.S.T. | **Architecture:** A.N.T. 3-Layer
> **Created:** 2026-04-05 | **Status:** Phase 1 — Blueprint

---

## 🟢 Phase 0: Initialization
- [x] Read and internalize Concept Document
- [x] Create `gemini.md` (Project Constitution)
- [x] Create `task_plan.md` (this file)
- [x] Create `findings.md`
- [x] Create `progress.md`
- [x] Receive answers to 5 Discovery Questions
- [x] Finalize Data Schema in `gemini.md`
- [x] Get user approval on Blueprint before coding begins

---

## 🏗️ Phase 1: Blueprint (Vision & Logic)
- [x] **Discovery Q&A** — 5 questions answered by user
- [x] **Schema Finalization** — All JSON schemas approved in `gemini.md`
- [x] **Tech Stack Decision** — Next.js + Supabase + Vercel
- [ ] **GitHub Research** — Find relevant OSS resources and templates
- [ ] **Architecture SOPs** — Write `.md` files in `architecture/` for each system component
  - [ ] `architecture/event_lifecycle.md`
  - [ ] `architecture/user_auth.md`
  - [ ] `architecture/blog_pipeline.md`
  - [ ] `architecture/ai_integration.md`
  - [ ] `architecture/admin_layer.md`
  - [ ] `architecture/notifications.md`
  - [ ] `architecture/mentorship.md`
  - [ ] `architecture/opportunity_board.md`

---

## ⚡ Phase 2: Link (Connectivity)
- [x] Set up `.env` file with all required credentials
- [x] Verify database connection
- [x] Verify auth provider connection
- [ ] Verify email service connection
- [ ] Verify AI API connection
- [ ] Verify file storage connection
- [ ] Build `tools/verify_connections.py` — Handshake script for all services

---

## ⚙️ Phase 3: Architect (3-Layer Build)

### Layer 1: Architecture SOPs (see Phase 1 above)

### Layer 2: Navigation (Backend API / Logic)
- [ ] User authentication & role management
- [ ] Event CRUD + lifecycle state machine
- [ ] Blog CRUD + editorial pipeline
- [ ] Automated feedback trigger (post-event, 24h)
- [ ] AI recap generation hook
- [ ] Smart event recommendations engine
- [ ] Mentorship marketplace logic
- [ ] Opportunity board (submission + review + publish)
- [ ] Admin analytics aggregation
- [ ] Newsletter / announcement system

### Layer 3: Tools (`tools/`)
- [ ] `tools/send_feedback_email.py` — Auto-sends feedback form 24h post-event
- [ ] `tools/generate_recap.py` — AI-drafted recap from event data
- [ ] `tools/recommend_events.py` — Personalized event suggestions
- [ ] `tools/sync_analytics.py` — Aggregates attendance, feedback, blog stats
- [ ] `tools/notify_users.py` — Email/push notification dispatcher
- [ ] `tools/verify_connections.py` — API handshake validation

---

## ✨ Phase 4: Stylize (UI/UX)
- [ ] Design system — color palette, typography, spacing tokens
- [ ] Homepage (dynamic, personalized)
- [ ] Events listing + individual event page
- [ ] User dashboard
- [ ] Blog listing + editor + detail view
- [ ] Project showcase
- [ ] Mentorship marketplace UI
- [ ] Opportunity board UI
- [ ] Admin dashboard (analytics, user management, content moderation)
- [ ] "Ask Brahmagupta" AI chatbot UI
- [ ] Resource library UI
- [ ] Memory/archive gallery

---

## 🛰️ Phase 5: Trigger (Deployment)
- [ ] Set up production hosting
- [ ] Configure CI/CD pipeline
- [ ] Set up cron jobs for automated tasks
- [ ] Configure webhooks for event triggers
- [ ] Final end-to-end test
- [ ] Finalize Maintenance Log in `gemini.md`
- [ ] Handoff documentation for new admin onboarding

---

## 🎯 Key Milestones

| Milestone | Target | Status |
|---|---|---|
| Protocol 0 Complete | After Discovery Q&A | 🟡 In Progress |
| Blueprint Approved | After schema sign-off | ⬜ Pending |
| First API Handshake | After credentials received | ⬜ Pending |
| Core MVP (Events + Users) | TBD | ⬜ Pending |
| Full Platform Live | TBD | ⬜ Pending |

---

> **Rule:** This file is updated after every meaningful task. It is the system's memory of what needs to happen.
