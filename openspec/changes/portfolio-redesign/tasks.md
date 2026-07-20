# Tasks: Portfolio Redesign

## Review Workload Forecast

30+ new files from scratch (static HTML → Vite + React SPA). Estimated 1800–2200 changed lines.

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Focused test cmd | Runtime harness | Rollback |
|------|------|-----------|-----------------|----------------|----------|
| 1 | Vite scaffold + types + data + CSS | PR 1 | `npx tsc --noEmit` | `npm run dev` loads blank app | `git revert PR1` |
| 2 | Components + hooks + App.tsx | PR 2 | `npx tsc --noEmit` | `npm run dev` shows full portfolio | `git revert PR2` |
| 3 | Full test suite | PR 3 | `vitest run` | N/A — standalone | `git revert PR3` |

## Phase 1: Foundation

- [ ] 1.1 Create Vite scaffold: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `.gitignore`, `index.html`, `src/vite-env.d.ts`
- [ ] 1.2 Create types: `src/types/index.ts` — `Skill`, `Project`, `FormFields`, `FormState`, `EmailJSConfig`
- [ ] 1.3 Create data modules: `src/data/skills.ts` (categorized), `src/data/projects.ts` (3 template), `src/data/social.ts` (GH + LI URLs)
- [ ] 1.4 Create `src/styles/custom.css` — font imports + Bootstrap variable overrides
- [ ] 1.5 Delete old `css/style.css`

## Phase 2: Core Components

- [x] 2.1 Create `src/main.tsx` and `src/App.tsx` — Navbar + 4 sections with id anchors, Bootstrap import
- [x] 2.2 Create `src/components/Navbar.tsx` — fixed-top, hamburger collapse, active highlight, smooth-scroll
- [x] 2.3 Create `src/components/Hero.tsx` — heading, subtitle, role badges, CTA buttons, profile image + fallback
- [x] 2.4 Create `src/components/SocialLinks.tsx` — GH + LinkedIn icons, `target="_blank" rel="noopener noreferrer"`
- [x] 2.5 Create `src/components/SkillBadge.tsx` and `src/components/About.tsx` — bio + categorized skill grid
- [x] 2.6 Create `src/components/ProjectCard.tsx` and `src/components/Projects.tsx` — responsive 3-card grid
- [x] 2.7 Create `src/components/ContactForm.tsx` — validation, EmailJS, loading/error/success states

## Phase 3: Hooks

- [x] 3.1 Create `src/hooks/useActiveSection.ts` — IntersectionObserver → active section ID
- [x] 3.2 Create `src/hooks/useContactForm.ts` — idle→loading→success|error state machine + EmailJS

## Phase 4: Tests

- [ ] 4.1 Test `Navbar`: 4 links render, active highlight, hamburger <576px, link closes menu, keyboard nav
- [ ] 4.2 Test `Hero`: heading + subtitle, core badges, empty badges edge, CTA scroll, image alt + fallback
- [ ] 4.3 Test `About`: bio renders, empty bio edge, categorized badges, empty skills edge, responsive stack
- [ ] 4.4 Test `Projects`: 3 cards, empty fallback, card with/without URL, responsive grid
- [ ] 4.5 Test `ContactForm`: fields render, validation (empty/invalid email/short), submit, loading guard, success→clear, error→preserve
- [ ] 4.6 Test `SocialLinks`: both icons, correct href, target + rel attrs
- [ ] 4.7 Test `SkillBadge` + `ProjectCard`: renders name/tech badges, conditional link
- [ ] 4.8 Test `useActiveSection`: mock IO, verify correct section ID
- [ ] 4.9 Test `useContactForm`: validation, state transitions, EmailJS mock with payload
