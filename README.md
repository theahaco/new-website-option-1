# The Aha Company — Marketing Website

Production React rebuild of The Aha Company marketing site, recreated faithfully
from the high-fidelity Claude Design handoff. The Aha Company is a Stellar-focused
(and multi-chain) blockchain engineering firm serving financial institutions and
Web3 teams. Every page drives toward one conversion goal: **"Schedule a call."**

Built per issue [#1](https://github.com/theahaco/new-website-option-1/issues/1).

## Stack

- **Next.js 16** (App Router) + **TypeScript**, configured for **static export**
  (`output: "export"` → emits `./out`).
- **CSS variables (design tokens) + CSS Modules** — no Tailwind, no CSS-in-JS.
- **`next/font`** self-hosts the brand type: **Spectral** (serif display) +
  **Space Grotesk** (sans body/UI).

## Quickstart

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # type-check + static export to ./out
npm run lint
```

Deploy the contents of `./out` to any static host (Vercel, Netlify, Cloudflare
Pages, GitHub Pages). No server required.

## Structure

```
app/
  layout.tsx            # root: fonts, metadata, <Nav/> + <main/> + <Footer/>, reveal script
  globals.css           # design tokens (CSS vars) + utility classes
  page.tsx              # Home
  services/             # Expertise
  case-studies/         # index + [slug] template
  about/
  blog/                 # index + [slug] article template
  contact/
  sitemap.ts            # /sitemap.xml
  not-found.tsx         # 404
components/             # Nav, Footer, ButtonLink, CaseCard, BlogCard,
                        # TestimonialCarousel, RevealProvider + per-page client bits
content/                # CMS-ready collections: caseStudies.ts, posts.ts
public/assets/          # logos, partner logos, team photo, avatars
```

## Design system

All brand values are CSS custom properties in `app/globals.css`
(`--navy`, `--green`, `--paper`, type, spacing, radii). Components compose
semantic utility classes (`.section`, `.eyebrow`, `.h1`/`.h2`, `.btn`, `.card`,
`.pill`, `.services-grid`, `.marquee`) and per-section CSS Modules. Scroll-reveal
is a progressive enhancement (`data-aha-reveal` + `RevealProvider`) that respects
`prefers-reduced-motion`.

## Content model

**Blog** and **Case Studies** are content collections in `content/`, seeded with
demonstration entries. Index pages filter/search over them; `[slug]` templates
render one entry and `generateStaticParams` prerenders every slug. Wire to a CMS
by replacing these modules.

- Blog post: `title, slug, author, date, category, readingTime, excerpt, thumb`
- Case study: `slug, label, eyebrow, category, gradient, title, summary, client,
  role, ecosystem, status, challenge, solution, architectureHighlights,
  outcomeMetrics, techUsed, testimonial`

## Placeholders to fill before launch

- **Team photo** — `public/assets/team-meridian-rio-crop.jpg` is currently a
  **branded placeholder** (the real photo exceeded the design tool's 256 KiB
  export cap). Drop in the real cropped group photo at that path.
- **Testimonials** — Tomer Weller + Jane Wang quotes are real; two homepage
  carousel slides are marked `[Placeholder]` pending clearance.
- **Case-study testimonial** — the EURCV / FORGE quote is a placeholder.
- **Blog/article content** — author, date, and body are placeholders.
- **Calendar embed** — the Contact page has a dashed placeholder; drop in
  Calendly / Cal.com.
- **Forms** — contact + newsletter are front-end only; wire to Netlify Forms /
  Formspree / a custom endpoint.
- **Social links** — footer GitHub / LinkedIn are `#`.
- **Contact email** — `hello@ahalabs.dev` used throughout; confirm.
- **Canonical domain** — set in `app/layout.tsx` (`SITE_URL`) and `app/sitemap.ts`.

## Conventions (client direction)

"onchain" (no hyphen) sitewide · no em dashes in copy · locations are
"United States · France · Brazil" · multi-chain positioning (Stellar named only
as a specific proof point) · "$20M+" = regulated stablecoins issued and live
onchain (not TVL).
