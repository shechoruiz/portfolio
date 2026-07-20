# Proposal: Portfolio Redesign

## Intent

Replace the static HTML/CSS portfolio (from a Platzi course) with a modern, responsive Vite + React SPA that showcases Sergio Ruiz's fullstack developer profile, skills, and projects. The current site has no build tooling, no routing, references wrong social profiles (course instructor), and lacks responsive design.

## Scope

### In Scope
- Vite + React + TypeScript project scaffold
- Bootstrap 5 responsive layout throughout
- Navbar with navigation between Home, About, Contact sections
- Hero section with developer image, name, and role badges (Fullstack React/React Native + Node.js)
- About section with bio and skills grid (React, TypeScript, JS, HTML, CSS, Node.js, SQL, Git, AWS)
- Projects section with 3 template project cards (fictitious names, real tech stack)
- Contact form with EmailJS integration (functional, not just UI)
- Social links to shechoruiz GitHub and LinkedIn
- Responsive design for all viewport sizes
- Unit tests with Vitest + React Testing Library for components and hooks

### Out of Scope
- Backend API or database (static data + EmailJS only)
- Real project content — template placeholders until actual projects are built
- E2E tests (deferred to later iteration)
- CI/CD pipeline or deployment configuration

## Capabilities

### New Capabilities
- `portfolio-landing`: Hero/home section with name, role badges, CTA buttons, and developer image
- `portfolio-about`: About section with bio, skill badges grid, and professional summary
- `portfolio-projects`: Project cards section with 3 template projects showcasing real tech stack
- `portfolio-contact`: Contact form with EmailJS API integration for message delivery
- `portfolio-navigation`: Responsive Navbar with section navigation and mobile hamburger menu

### Modified Capabilities
None — greenfield app with no existing specs.

## Approach

Scaffold with Vite + React + TypeScript. Use React Router for hash/smooth-scroll navigation within a single-page layout. Apply Bootstrap 5 utility classes for all layout and responsive behavior — minimal custom CSS (font imports + theme overrides). Store project/skill data as static TypeScript modules (no API needed). Integrate EmailJS via the official SDK for contact form submissions. Test with Vitest + React Testing Library covering component rendering, user interactions, and hooks. Deploy as a static SPA.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `index.html` | Removed | Replaced by Vite's `index.html` entry point |
| `css/style.css` | Removed | All styling moves to Bootstrap utilities |
| `images/` | Modified | New profile image assets |
| `src/` | New | React component tree, pages, data, styles |
| `src/__tests__/` | New | Vitest unit tests for components and hooks |
| `package.json` | New | Vite, React, Bootstrap, EmailJS, Vitest dependencies |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|-------------|
| Large image (1.9MB PNG) slows load | Medium | Optimize/resize image during build, use responsive `<img>` |
| No committed images in repo | High | Add profile image to repo or document source clearly |
| CRA to Vite pattern differences | Low | No CRA-specific code to port — plain React + Router + Bootstrap |

## Rollback Plan

Git revert the Vite scaffold commit. Old `index.html` and `css/` recoverable via `git checkout HEAD~1 -- index.html css/`.

## Dependencies

- Node.js 18+
- EmailJS account (free tier) — user must register and provide API keys
- Developer image source file (PNG ~1.9MB) — user must provide or confirm placement in `src/assets/images/`

## Success Criteria

- [ ] Portfolio loads and renders correctly at desktop, tablet, and mobile viewports
- [ ] Navbar navigates between all sections with smooth scroll
- [ ] Contact form sends email successfully via EmailJS (end-to-end test)
- [ ] Social links open correct GitHub and LinkedIn profiles in new tabs
- [ ] All 3 project cards render with title, description, and tech stack badges
- [ ] Developer image displays in hero section
- [ ] Unit tests pass with `vitest run` (no failing tests)
