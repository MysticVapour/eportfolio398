# Advay Choudhury — ENGL398B ePortfolio

A polished, single-page Vite + React + TypeScript portfolio site for **ENGL398B: Writing for Social Entrepreneurs** at the University of Maryland.

The site frames the semester's work around the central mindset of the course — **Words Are Power** — and showcases the journey from academic writing toward strategic, audience-centered communication.

## Stack

- Vite + React 18 + TypeScript
- Plain CSS (custom design system in `src/styles.css`)
- No backend, no env vars, no paid APIs

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The static site is emitted to `dist/`.

## Deploy to Vercel

This is a standard Vite app — no extra configuration required.

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

## Editing content

All editorial content lives in `src/data.ts` as plain TypeScript arrays/objects:

- `NAV` — navigation items
- `FEATURED_PROJECTS` — hero project cards
- `JOURNEY_STEPS` — semester timeline
- `VENTURE_OVERVIEW`, `VENTURE_STATS`, `VENTURE_PILLARS`, `VENTURE_SKILLS`
- `PRESS_DETAILS`, `PRESS_SKILLS`
- `PITCH_STRUCTURE`, `PITCH_TRANSCRIPT`, `PITCH_SKILLS`
- `GUIDE_FEATURES`, `GUIDE_EXAMPLES`, `GUIDE_SKILLS`
- `ARTIFACTS`, `COURSEWORK_HIGHLIGHTS`
- `REFLECTION_PARAGRAPHS`

Update those arrays to change copy without touching component code.

## File structure

```
src/
  App.tsx
  main.tsx
  data.ts
  styles.css
  components/
    Navbar.tsx
    Section.tsx
    ProjectCard.tsx
    QuoteBlock.tsx
    ArtifactCard.tsx
    SkillPill.tsx
```
