# SaaS Template

A minimalistic, framework-agnostic SaaS template in plain HTML, CSS and a small
amount of vanilla JS. Three pages out of the box:

- `index.html` — dashboard shell (sidebar + topbar + content with stats, chart,
  usage, table, form, upgrade CTA, empty state).
- `login.html` — sign-in card with SSO buttons and an email/password form.
- `landing.html` — marketing landing page (hero, logo strip, feature grid,
  workflow + terminal mockup, dark observability band, pricing, final CTA,
  footer).

## Design references

- [`DESIGN.md`](./DESIGN.md) — the design language used here (color tokens,
  typography scale, spacing, components, elevation, do's & don'ts), defining a
  Vercel-inspired light theme style. The CSS variables in `styles.css` mirror
  the tokens defined in this file.
- [getdesign.md](https://getdesign.md) — the design-language format the
  `DESIGN.md` file follows.
- [Preline UI](https://preline.co/docs/about.html) — used as inspiration for
  some component patterns (e.g. the input-with-kbd shortcut, alert chrome,
  tabs).
- [Heroicons](https://heroicons.com/) — the icon set used throughout. The
  dashboard and login pages use the 16×16 [micro](https://heroicons.com/micro)
  variant; `landing.html` uses the 24×24 [solid](https://heroicons.com/solid)
  variant. All UI icons are inlined as SVG `<path>`s so there is no runtime
  dependency. Swap an icon by copying any Heroicons SVG and replacing its
  `<path>` in the markup.

## Run the preview

The template is plain static files — open `index.html` directly in a browser,
or serve the directory with any local HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Node (no install)
npx serve .
```

Then visit:

- <http://localhost:8000/landing.html> — marketing landing page
- <http://localhost:8000/index.html> — dashboard
- <http://localhost:8000/login.html> — login

## File layout

```
.
├── DESIGN.md      design tokens + component spec
├── index.html     dashboard shell
├── login.html     sign-in page
├── landing.html   marketing landing page
├── styles.css     all styles (tokens at the top)
└── script.js      tabs, segmented control, alert dismiss, ⌘K focus
```

Design tokens live in `:root` at the top of `styles.css` — adjust once and the
change propagates across all pages.
