# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Anyone curious about Hiba: recruiters and hiring managers, classmates, collaborators, and friends, weighted equally. It is a personal home on the web more than a job-application funnel. Visitors arrive from LinkedIn, a résumé, Devpost, GitHub, or a direct link, usually on a laptop, sometimes on a phone.

## Product Purpose

A single-page personal portfolio for Hiba Mubeen (hibamubeen.com) that shows who she is, what she has built, and where she has worked, and makes it easy and pleasant to get in touch. Success: a visitor leaves with a clear, warm sense of her as a person and a builder, remembers the site, and reaches out (email, LinkedIn, GitHub, Devpost).

## Positioning

Hiba sits between product, design, and code: a CS student at UT Dallas (Business Intelligence & Analytics minor, Applied Design Experience & Research certificate) who has shipped an AI feature to production as a PM intern at Bluebeam, leads ACM UTD as Vice President, and grew up on filmmaking and theatre. The site itself should demonstrate that mix: thoughtful product thinking, real design taste, and working code with a bit of play.

## Operating Context

- Static site: `index.html` plus JSX components compiled in the browser by Babel standalone; components attach to `window`, no bundler. Needs a local server to run.
- Sections today: hero, about (product/design/code), work (case studies that open as a detail sheet), experience timeline, off duty, contact.
- Case-study copy lives in `components/projects.jsx` (`PROJECTS`); experience data in `components/resume.jsx` (`XP`).

## Capabilities and Constraints

- Must keep: all real content and facts (bio, projects, experience, quick facts, contact links), the project detail view, keyboard access.
- Wording may be rewritten to fit a new design, as long as the facts stay true.
- Must keep: clickable plush stuffed-animal characters (they may change species or setting). Other interactive pieces (the pearl hunt, the scroll guide) are replaceable.
- Open/undecided: résumé PDF not linked yet; project galleries are placeholders awaiting real screenshots; the dash- problem statement needs confirmation from Hiba; `assets/hiba.jpg` is 8.5 MB and should be compressed before deploying; possible later move from in-browser Babel to Vite.

## Brand Commitments

- Name: Hiba Mubeen. Domain hibamubeen.com.
- Voice: conversational, warm, story-driven, a little playful. No corporate language. No em dashes in any copy.
- Personality: loves stuffed animals; loves nature, open water, sky, and anything green; loves winter.
- Visual direction stated by Hiba for the current redesign (binding): unique and fun, calm, blue, white and pastels, nature, evoking winter, with a warm golden glow.
- Asset: `assets/hiba.jpg` (portrait).

## Evidence on Hand

- Real case studies: AI for Studio Projects at Bluebeam, Waves, ReLeaf, NOVA, UTD Trends, Echo, Wasted, dash- (copy in `components/projects.jsx`).
- Real experience: Bluebeam PM intern, ACM UTD (VP, media roles, frontend dev), Apple, Alpha Kappa Psi, and earlier roles (in `components/resume.jsx`).
- Real metrics already in copy (e.g. 800+ members, 700,000+ views, 99.7% accuracy). Do not invent new metrics, testimonials, or press.
- No project screenshots yet; no résumé PDF linked yet.

## Product Principles

1. Show the person, not a template: every section should feel like Hiba made it.
2. Play is earned by clarity: fun moments never hide the content or the way to contact her.
3. Calm first: delight comes in small, discoverable doses rather than constant motion.
4. Truth over polish: real facts only; placeholders are marked as placeholders.

## Accessibility & Inclusion

All motion respects `prefers-reduced-motion` (and the site's `body.still` toggle). Interactive characters are real buttons with labels. Text keeps WCAG AA contrast.
