# Personal Website — Design Brief

## Overview

A personality-first personal website for a mechanical engineer who is also a sailor and writer. The site is a blend of portfolio and blog. Tone should feel like a thoughtful person walked in the room — not a resume dropped on a desk.

**Stack:** Astro + Netlify (free tier)  
**Payments:** Not needed now, easy to add later (Gumroad or Stripe)

---

## Design Principles

- **Personality first** — the person leads, projects and writing follow as equal facets
- **Clean and editorial** — not a developer portfolio, not purely artistic. Warm, precise, human
- **Sparse content friendly** — layout should work with a small number of posts and projects and grow naturally
- **No category bubbles** — lean toward Option C (category below title, muted) or Option D (no category at all). Decide once real content is in place

---

## Site Structure

```
Home
├── Projects
├── Blog
├── About
└── Contact
```

---

## Pages

### Home

- **Nav** — name left, links right: Home · Projects · Blog · About · Contact
- **Hero** — name/tagline left, avatar/photo right. Tagline TBD — placeholder: *"I build things that move, sail when the wind is right, and write about all of it."* Three-word identity: Engineer. Sailor. Writer.
- **About blurb** — 3–4 sentences, conversational, serif font. Placeholder: *"I'm a mechanical engineer working in hard tech — the kind of problems that require getting your hands dirty. Off hours I'm usually on the water or at a desk trying to put something into words. This site is where those threads come together."*
- **Recent feed** — unified list of latest posts and projects, mixed. No separate columns. Date right-aligned. Category label below title in muted text (Option C) or omitted (Option D).
- **Writing activity calendar** — heatmap grid, one square per day, past 12 months. Color intensity = post frequency. Sits quietly at the bottom, more texture than feature.
- **Footer** — copyright left, GitHub + email links right

### Projects

**Subtitle:** "Builds, refits, and engineering work — personal and professional."

Three projects in this order (reverse chronological):

#### 1. Sailboat refit (2025–26) · Personal
- Full refit — hull, rigging, electrical, interior. Ongoing.
- Photo-led layout: grid of up to 24 images, grouped by chapter (before / process / after)
- Light narrative captions, minimal prose

#### 2. Van build (2023–24) · Personal
- Restoration and conversion of a van — insulation, electrical, cabinetry
- Same photo-led treatment as sailboat
- Up to 24 images

#### 3. Boston Flugtag (2022) · Work
- Mentored 15–20 summer interns through full engineering cycle for Red Bull Flugtag Boston
- Narrative-led layout — more prose, fewer photos (~3: design day, build week, event day)
- Story is about mentorship and process, not the object

**Note:** Photo counts and grid sizes TBD once real images are selected. Good rule of thumb: one image per chapter of the build.

### Blog

**Subtitle:** "Sailing, writing, and the occasional engineering tangent."

- Simple chronological list
- Each entry: title, date (right-aligned), one-sentence preview
- No sidebar, no tag filtering on launch — keep it simple

### About

- **Hero paragraph block** — 3 paragraphs, serif font, generous line height
- **Quick facts row** — 3 tiles: Based in / Vessel / Currently reading

Placeholder copy:
> *I'm a mechanical engineer working in hard tech — the kind of work that involves real materials, real forces, and things that can actually break. I care about making things that are well-considered and built to last.*
>
> *Outside the workshop I'm usually on the water. Sailing has taught me more about patience, judgment, and reading a situation than anything else I've done. I've also been writing for most of my life — essays, notes, the occasional story. It's how I think.*
>
> *This site is where those three things share a space.*

### Contact

- Short blurb — conversational, not formal
- No contact form — direct links only
- Email (primary)
- GitHub
- LinkedIn (optional, only if actively used)

---

## Activity Calendar — Detail

- GitHub-style heatmap but tracking blog post frequency, not commits
- 52 weeks × 7 days grid
- Color palette: neutral (no posts) → green scale (posts). Can be filtered by category if categories are implemented later.
- Shown on homepage only (compact version). Can be expanded on a dedicated /writing page later.

---

## Color & Typography

Not finalized. Guidelines:

- **Avoid:** pure developer aesthetics (terminal green, dark mode default), generic SaaS blue
- **Lean toward:** warm neutrals, single accent color, feels grounded
- **Typography:** serif for body/hero text, sans-serif for UI labels and nav
- **Palette to explore:** off-white background, dark slate text, one warm or nautical accent

---

## What's Not Decided Yet

- Hero tagline (exact wording — workshop separately)
- Photo vs illustration in hero
- Option C vs D for recent feed category labels
- Final color palette and type choices
- Whether to add category filtering to blog later

---

## Notes for Claude Code

- Start with Astro. The **Dante** theme is the closest base — clean, content-focused, works for both portfolio and blog
- Alternatively start from the official Astro portfolio starter and add blog
- The activity calendar will need a custom component — track post publish dates and render the heatmap client-side
- Payments not needed now. If added later: Gumroad (simplest) or Stripe Checkout
- All three projects are on a single `/projects` page, not individual routes (for now)
- Keep it simple on launch — resist adding features until content demands them
