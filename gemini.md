# gemini.md — Project Constitution
> **Status:** APPROVED — Phase 1 (Blueprint) locked in.
> **Last Updated:** 2026-04-05
> **Law:** This file is the single source of truth. No tool is written, no schema is changed, without this file being updated first.

---

## 📌 Project Identity

| Field | Value |
|---|---|
| Project | Brahmagupta Club Website |
| Type | Full-Stack Web Platform + Automation |
| Protocol | B.L.A.S.T. (Blueprint → Link → Architect → Stylize → Trigger) |
| Architecture | A.N.T. 3-Layer (Architecture SOPs / Navigation / Tools) |
| Phase | 1 — Blueprint & Architecture |

---

## 🧠 System Philosophy

1. **Automation First** — Every repetitive task must be automated.
2. **User-Centric** — Students are users with accounts, history, and dashboards.
3. **Data-Driven** — All content is dynamically stored and managed.
4. **Scalable** — Works for 50 or 5,000 members without architectural change.
5. **Continuity by Design** — New leadership can onboard in under 1 hour.

---

## 🔐 Roles & Permissions (Architectural Invariant)

| Role | Permissions |
|---|---|
| **Public** | Browse events, read blogs, view showcase |
| **Member** | All above + dashboard, blog submissions, project uploads |
| **Core Team** | All above + create events, approve blogs, post updates |
| **Admin** | Full access — manage roles, view analytics, manage users |

> **Rule:** Roles are assigned in the database. No hardcoded permission checks in UI components.

---

## 📐 Data Schema (DRAFT — Awaiting Discovery Answers)

> ⚠️ Schemas below are derived from the Concept Document. They will be finalized after the 5 Discovery Questions are answered and approved.

### User
```json
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "role": "public | member | core_team | admin",
  "avatar_url": "string | null",
  "joined_at": "ISO8601 timestamp",
  "interests": ["string"],
  "events_participated": ["event_id"],
  "blogs_authored": ["blog_id"],
  "projects_contributed": ["project_id"]
}
```

### Event
```json
{
  "id": "uuid",
  "title": "string",
  "type": "quiz | workshop | guest_lecture | competition | other",
  "description": "string",
  "banner_url": "string | null",
  "created_by": "user_id",
  "status": "draft | published | ongoing | completed | archived",
  "start_datetime": "ISO8601",
  "end_datetime": "ISO8601",
  "registration_deadline": "ISO8601",
  "max_participants": "integer | null",
  "registered_users": ["user_id"],
  "feedback_sent": "boolean",
  "recap_blog_id": "blog_id | null",
  "tags": ["string"]
}
```

### Blog
```json
{
  "id": "uuid",
  "title": "string",
  "author_id": "user_id",
  "status": "draft | under_review | published | featured",
  "content_md": "string (markdown)",
  "cover_image_url": "string | null",
  "tags": ["string"],
  "created_at": "ISO8601",
  "published_at": "ISO8601 | null",
  "reviewer_id": "user_id | null",
  "view_count": "integer",
  "is_ai_generated_recap": "boolean"
}
```

### Project
```json
{
  "id": "uuid",
  "title": "string",
  "description": "string",
  "authors": ["user_id"],
  "repo_url": "string | null",
  "demo_url": "string | null",
  "tags": ["string"],
  "created_at": "ISO8601",
  "is_featured": "boolean"
}
```

### Opportunity
```json
{
  "id": "uuid",
  "title": "string",
  "type": "internship | hackathon | competition | research | other",
  "description": "string",
  "external_link": "string",
  "deadline": "ISO8601 | null",
  "submitted_by": "string (name/org)",
  "status": "pending_review | published | expired",
  "created_at": "ISO8601"
}
```

### Feedback
```json
{
  "id": "uuid",
  "event_id": "event_id",
  "user_id": "user_id",
  "rating": "integer (1-5)",
  "comments": "string | null",
  "submitted_at": "ISO8601"
}
```

### Mentor
```json
{
  "id": "uuid",
  "user_id": "user_id",
  "topics": ["string"],
  "availability": "string",
  "is_alumni": "boolean",
  "sessions_completed": "integer"
}
```

---

## 🏗️ Architectural Invariants

> These rules CANNOT be broken. They are enforced at the architecture level.

1. **Schema-First:** No tool or API endpoint is coded without its Input/Output schema defined here first.
2. **No Hardcoded Business Logic in UI:** All rules (role checks, deadlines, state transitions) live in the backend.
3. **Event Lifecycle is Immutable:** `draft → published → ongoing → completed → archived`. No skipping states.
4. **Blog Lifecycle is Immutable:** `draft → under_review → published`. Peer review is mandatory.
5. **`.env` for All Secrets:** No API key, DB connection string, or token appears in source code.
6. **`.tmp/` for All Intermediates:** Scraped data, logs, and temporary files are never committed.
7. **Feedback is Automated:** Post-event feedback form fires automatically within 24 hours of event end — no manual trigger.
8. **AI Recaps are Drafts:** AI-generated event recaps go to `under_review` status — a human editor must approve before publish.

---

## 🔌 Integrations (APPROVED)

| Service | Purpose | Status |
|---|---|---|
| Supabase Auth | User authentication (Google OAuth + Email/Password) | 🟢 Approved |
| Supabase (PostgreSQL) | Primary data store | 🟢 Approved |
| Resend (Free Tier) | Notifications & feedback emails | 🟢 Approved |
| Modular AI Plugin (TBD) | Chatbot, recaps, recommendations | 🟢 Approved (Deferred keys) |
| Supabase Storage | Images, videos, files | 🟢 Approved |
| Vercel (Free Tier) | Production deployment (Next.js) | 🟢 Approved |

---

## 🛠️ Maintenance Log

| Date | Author | Change |
|---|---|---|
| 2026-04-05 | System Pilot | Initial constitution created — Protocol 0 |

---

> **Remember:** `gemini.md` is updated ONLY when a schema changes, a rule is added, or architecture is modified. It is not a progress log.
