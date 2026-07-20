# Design: Portfolio Redesign

## Technical Approach

Single-page React SPA with 4 sections (Landing, About, Projects, Contact) rendered in one vertically-scrolled layout. No React Router — anchor-based smooth scroll is simpler and sufficient for section navigation. Bootstrap 5 handles layout, navbar collapse, and responsive grid. Static TypeScript modules supply skills and projects data. Contact form uses EmailJS SDK via a custom hook managing validation → submission → feedback as a state machine.

## Architecture Decisions

| Decision | Options | Choice | Rationale |
|----------|---------|--------|-----------|
| Router | React Router vs anchor `scrollIntoView` | Anchor + smooth scroll | Single-page section layout doesn't need routing — React Router adds 7KB+ for zero routing benefit |
| Styling | Bootstrap 5 vs Tailwind | Bootstrap 5 | Bootstrap navbar collapse, responsive grid, and form components reduce custom code. Matches proposal stack. |
| Form state | RHF/Formik vs custom hook | `useContactForm` hook | One form doesn't justify a library. Hook encapsulates validation, EmailJS submission, and state transitions cleanly. |
| Images | Static import vs public folder | Static import (`import avatar from ...`) | Vite content-hashes imports for cache busting; public folder bypasses that |
| Data source | REST API vs static modules | Static TS modules | No backend (out of scope). Typed constants give autocomplete and type safety with zero network overhead |
| Active nav detection | Scroll event vs IntersectionObserver | IntersectionObserver | Native, performant, no rAF/throttle needed |

## Data Flow

```
skills.ts ──► About ──► SkillCategory ──► SkillBadge[]
projects.ts ──► Projects ──► ProjectCard[]

ContactForm (useContactForm)
  user input → validate → EmailJS.send() → success | error → reset fields

Navbar (useActiveSection)
  IntersectionObserver → active section ID → Navbar highlight
```

## File Changes

| File | Action | Purpose |
|------|--------|---------|
| `index.html` | Create (replaces) | Vite entry point. Old HTML removed entirely. |
| `package.json` | Create | Vite, React 18, TypeScript, Bootstrap 5, EmailJS, Vitest, RTL |
| `vite.config.ts` | Create | Vite config with React plugin and test config |
| `tsconfig.json` / `tsconfig.node.json` | Create | TypeScript config |
| `.gitignore` | Create | Standard Vite ignores |
| `src/main.tsx` | Create | React root mount |
| `src/App.tsx` | Create | Root: renders Navbar + sections in viewport |
| `src/components/Navbar.tsx` | Create | Bootstrap fixed-top navbar, hamburger collapse, active highlight |
| `src/components/Hero.tsx` | Create | Landing: name, subtitle, role badges, CTAs, profile image, SocialLinks |
| `src/components/About.tsx` | Create | Bio + categorized skills grid |
| `src/components/SkillBadge.tsx` | Create | Single skill pill/badge |
| `src/components/Projects.tsx` | Create | Section container rendering 3 ProjectCards |
| `src/components/ProjectCard.tsx` | Create | Card with title, description, tech badges, conditional link |
| `src/components/ContactForm.tsx` | Create | Form with validation, EmailJS, loading/error/success states |
| `src/components/SocialLinks.tsx` | Create | GitHub + LinkedIn icon links |
| `src/data/skills.ts` | Create | Typed skill list by category (Frontend, Backend & Cloud, Tools) |
| `src/data/projects.ts` | Create | 3 typed template projects |
| `src/data/social.ts` | Create | Social link config (GitHub, LinkedIn URLs) |
| `src/hooks/useActiveSection.ts` | Create | IntersectionObserver → active section ID |
| `src/hooks/useContactForm.ts` | Create | Form state machine: idle → loading → success/error |
| `src/styles/custom.css` | Create | Font imports + Bootstrap theme variable overrides |
| `src/vite-env.d.ts` | Create | Vite type declarations |
| `src/__tests__/*.test.tsx` | Create | Component + hook tests |
| `css/style.css` | Delete | Fully replaced by Bootstrap utilities + custom.css |

## Interfaces / Contracts

```typescript
interface Skill { name: string; category: SkillCategory }
type SkillCategory = 'Frontend' | 'Backend & Cloud' | 'Tools'

interface Project {
  id: string; title: string; description: string;
  techStack: string[]; imageUrl?: string; projectUrl?: string;
}

interface FormFields { name: string; email: string; message: string }
type FormStatus = 'idle' | 'loading' | 'success' | 'error'
interface FormState {
  status: FormStatus; fields: FormFields;
  errors: Partial<Record<keyof FormFields, string>>;
}

interface EmailJSConfig {
  serviceId: string; templateId: string; publicKey: string;
}
```

## Testing Strategy

| Layer | What | Approach |
|-------|------|----------|
| Unit | All components (Navbar, Hero, About, ProjectCard, Projects, ContactForm) | Vitest + RTL: render, assert elements, fire events, test conditional rendering |
| Unit | `useContactForm` | Test validation (empty fields, invalid email, short message), state transitions idle→loading→success/error, EmailJS mock |
| Unit | `useActiveSection` | Mock IntersectionObserver, verify callback fires correct section ID |
| Edge | Empty/undefined data arrays | Test fallback rendering for empty skills[], projects[] |
| Edge | Image load failure | Test placeholder fallback on `<img>` error |
| Edge | Form double-submit guard | Verify button disabled during loading state |

## Threat Matrix

N/A — no routing, shell, subprocess, VCS/PR automation, executable-file classification, or process-integration boundary.

## Migration / Rollout

No migration required. Vite generates `dist/` for static hosting. Old files (`index.html`, `css/`) are deleted — recoverable via git.

## Open Questions

- [ ] Profile image: user must provide the source file or confirm a placeholder while awaiting the asset
