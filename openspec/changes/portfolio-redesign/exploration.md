## Exploration: Portfolio Redesign

### Current State

The project is a static HTML/CSS site from a Platzi web development course (5 git commits). It consists of:

- **`index.html`** (140 lines) — single-page site with hardcoded Spanish content. Sections: header (logo + nav), hero (greeting + image), portfolio (2 project articles), events (4 event cards), contact (email form + social links), footer. Name **Sergio Ruiz** already appears in the hero. Social links point to `leonidasesteban` (course instructor), not the user.
- **`css/style.css`** (280 lines) — hand-written vanilla CSS. Uses Fjalla One + Source Sans Pro fonts. Color palette: `#1D252C` (dark header/footer), `#026FFF` (blue accent), `#FAFAFA` (light portfolio section). Flexbox layout, no responsive breakpoints.
- **No `package.json`**, no build tooling, no JS of any kind.
- **`images/`** directory is gitignored (no actual image files in repo).
- No tests, no API layer, no routing.

### Reference Site Analysis: https://my-portfolio-frontend-dexh.onrender.com/

The reference is a **Create React App** production build with:

| Aspect | Details |
|--------|---------|
| **Framework** | React 19.1.0 + React Router (client-side routing) |
| **UI** | Bootstrap 5.3.6 (utility classes only — no custom CSS extracted from the bundle) |
| **HTTP** | Axios |
| **Font** | Bebas Neue (Google Fonts) |
| **Routes** | Home, About, Contact |
| **Roles** | Full Stack Developer, Frontend Developer, Backend Developer |
| **Skills** | React, TypeScript, JavaScript, MongoDB, SQL, Node, Express, CSS, HTML |
| **Projects** | "Email Sheduling Sequence", "Real Estate Website", "To Do List" |
| **Brand/Nav** | Navbar with name display and menu toggle for mobile |
| **Design System** | Dark background sections, rounded card layouts, Bootstrap utility classes throughout (`d-flex`, `gap-*`, `rounded-*`, `rounded-pill`, `text-white`, `bg-black`, `mx-5`, `py-*`, `px-*`) |

Key UI patterns inferred from the class names in the JS bundle:
- **Header**: `d-flex justify-content-between text-white align-items-center mx-5` with `menu-toggle d-md-none` (hamburger on mobile)
- **Hero/Intro**: `intro-container d-flex flex-wrap gap-5 text-white justify-content-center align-items-center`
- **Projects**: `projects-container d-flex flex-column align-items-center` with individual `indi-container d-flex flex-wrap gap-5` cards
- **Contact form**: Bootstrap form controls with `form-control p-2 rounded px-4 py-3` and `rounded-pill px-4 py-3 mt-4` submit button
- **Skill badges**: `btn rounded-pill px-4 py-2` pattern
- **Footer**: `bg-black` full-width section

### Affected Areas

| Path | Why Affected |
|------|-------------|
| `index.html` | **Complete replacement** — will be replaced by React's `index.html` shell |
| `css/style.css` | **Deletion** — all styles move to Bootstrap utility classes + minimal custom CSS |
| `images/` | Needs new profile/portfolio images (currently gitignored, none committed) |
| `public/` | New — static assets (favicon, manifest, etc.) |
| `src/` | New — entire React application source tree |
| `package.json` | New — dependencies, scripts, build config |

### Approaches

1. **Vite + React** — Lightweight, fast build tooling with React
   - Pros: Fastest HMR (Hot Module Replacement), zero-config TypeScript support, smaller bundle than CRA, actively maintained, native ESM
   - Cons: Different dev server behavior from CRA reference (may need minor adjustments)
   - Effort: Medium

2. **Create React App** — Matches the reference site exactly
   - Pros: Exact parity with reference (same build system), well-known, no surprises
   - Cons: CRA is effectively unmaintained (deprecated in favor of frameworks), slower dev server, larger initial bundle, no native TypeScript config
   - Effort: Medium

3. **Next.js** — Full React framework with SSR
   - Pros: SEO benefits, file-based routing, image optimization, API routes (could replace Axios backend)
   - Cons: Overkill for a static portfolio (no SSR needed), steeper learning curve, more moving parts, larger initial setup
   - Effort: High

### Recommendation

**Use Vite + React (Approach 1).**

Rationale:
- The reference site uses CRA, but CRA is deprecated. Vite is the modern community standard for React SPAs.
- Vite gives you fast iteration (HMR in milliseconds), native TypeScript support, and a production build that's smaller and faster than CRA.
- There's nothing in the reference that depends on CRA-specific behavior — the code is plain React + React Router + Bootstrap, all of which work identically on Vite.
- React Router v7 with data loaders could even eliminate the need for Axios if the portfolio data is static JSON.

**Effect on Design System**: Bootstrap 5.3.6 utility classes handle virtually all layout and styling — the `css/style.css` can be reduced to a small custom theme file (colors, font imports) or replaced entirely with Bootstrap's Sass variables if you want customization without hand-written CSS.

### Suggested Folder Structure

```
portfolio/
├── index.html              # Vite entry
├── package.json
├── vite.config.ts
├── public/
│   └── favicon.ico
├── src/
│   ├── main.tsx            # React entry
│   ├── App.tsx             # Router setup
│   ├── assets/
│   │   └── images/         # Profile pic, project images
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── portfolio.ts    # Static JSON for projects, skills
│   └── styles/
│       └── custom.css      # Bootstrap overrides + font imports
```

### Content Mapping (Current → Reference)

| Current (Platzi) | Reference Site | Action |
|-----------------|---------------|--------|
| "Portafolio" section with 2 projects | 3 projects (Email Schedul, Real Estate, To Do List) | Replace content, keep structure |
| "Experiencia" section (4 event cards) | Skills/About section with badge list | Reimagine as skills grid |
| "Trabajemos juntos" contact form | Contact form + social links | Keep, update social links to Sergio's |
| Social links to leonidasesteban | Unknown social links | Replace with Sergio's profiles |
| Header with logo + menu | Navbar with name + hamburger | Redesign |
| Hero: "Hola soy Sergio Ruiz" | Hero with intro + roles | Keep name, add role badges |

### Risks

- **No images committed** — the `images/` directory is gitignored. New profile/project images must be sourced and committed for the portfolio to be presentable.
- **CRA → Vite migration** — the reference site is CRA-based. Some patterns (e.g., importing SVG as components, `react-app-env.d.ts`) don't exist in Vite. Must verify all reference site features before copying code.
- **Static data architecture** — the reference uses Axios for HTTP, but a static portfolio may not need an API. If the user wants a backend (e.g., for contact form submissions), the data layer needs separate design.
- **Responsive breakpoints** — the current CSS has zero responsive behavior. Bootstrap utilities solve this, but every component must be verified at mobile widths.
- **Skill resolution**: none — no registry paths or SKILL: Load instructions were injected. Phase skill `sdd-explore` loaded directly.

### Ready for Proposal

**Yes.** The exploration is complete. The orchestrator should tell the user:

1. The current static HTML/CSS site maps cleanly to React + Bootstrap 5 components
2. **Vite is recommended over CRA** since CRA is deprecated — the reference's CRA approach should not be replicated
3. 3 projects, 9 skills, and role badges should be confirmed before proposal
4. Social links need the user's real profiles (currently pointing to the course instructor)
5. Images must be sourced (currently gitignored)
6. The next SDD phase is **`sdd-propose`** to define intent, scope, and approach
