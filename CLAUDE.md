# Hiba's Portfolio

Personal portfolio for Hiba Mubeen (hibamubeen.com). One scrolling page: sky → sea → sky.

## Run it

The JSX files are compiled in the browser by Babel standalone, so it needs a local server (opening index.html directly won't load the components):

```
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

- `index.html`: all CSS (design tokens in `:root`, then sections, plush friends, animations), CDN scripts, and script tags in load order
- `app.jsx`: nav, scroll progress bar, active-section tracking, project sheet state, Tweaks panel
- `components/primitives.jsx`: Cloud, Wave (section dividers), Bubbles, Ripple, Icon set, `useReveal` (staggered scroll reveals)
- `components/plushies.jsx`: plush sea friends (whale, seal, jellyfish, starfish, crab, fish, bear icon) + `puff()` for hearts/bubbles
- `components/dive.jsx`: the whale guide that dives with you on scroll (depth readout, section stops, edge shading via `--depth`) + five hidden `Pearl` clams with a counter and reward toast (progress saved in localStorage)
- `components/cover.jsx`: hero (letter drop-in name, role cycler, bubble portrait with spinning text ring)
- `components/about.jsx`: product/design/code Venn bubbles + bio + quick facts
- `components/projects.jsx`: `PROJECTS` data (all case-study copy lives here) + tilt cards
- `components/project-detail.jsx`: case study sheet, opens as a ripple from the click point
- `components/resume.jsx`: `XP` data + grouped timeline with scroll-linked fill and swimming fish
- `components/extras.jsx`: "Off duty" cards
- `components/contact.jsx`: contact + footer with crab
- `components/cursor.jsx`: bubble trail on mouse move
- `tweaks-panel.jsx`: helper from Claude Design; the panel only opens inside that editor, harmless elsewhere

Components attach themselves to `window` (no bundler/imports).

## Design direction

- Seaglass & clouds: breezy, whimsical, clean, NOT maximalist. Blue and white, nature/ocean.
- Cute plush animations are welcome (she loves stuffed animals), one plushie per section max.
- Colors: `--deep #12314F` text, `--tide #46627A` secondary, `--accent #2F74A6`, `--seaglass #9FCBE3`, `--foam #DCEDF7`, `--mist #F3F8FC`. Soft pink `#F5B8C4` only for cheeks/small accents.
- Type: Fraunces (display, italic `em` in accent), DM Sans (body), Caveat (handwritten kickers).
- Glass cards: `.glass` class.
- All motion respects `prefers-reduced-motion` and the `body.still` class.

## Writing style

- Conversational, warm, story-driven. No corporate language.
- **No em dashes** in any copy.

## Open TODOs

- Résumé download button has no PDF linked yet
- Project galleries are placeholders (need real screenshots)
- dash- problem statement is a guess; confirm with Hiba
- `assets/hiba.jpg` is 8.5 MB; should be resized/compressed before deploying
- Could move off in-browser Babel to Vite for production
