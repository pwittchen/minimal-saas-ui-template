# SaaS Template

A minimalistic, framework-agnostic SaaS template in plain HTML, CSS and a small
amount of vanilla JS. Two pages out of the box:

- `index.html` — dashboard shell (sidebar + topbar + content with stats, chart,
  usage, table, form, upgrade CTA, empty state).
- `login.html` — sign-in card with SSO buttons and an email/password form.

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
- [Heroicons (micro)](https://heroicons.com/micro) — the 16×16 icon set used
  throughout. All UI icons are inlined as SVG `<path>`s in `index.html` /
  `login.html` so there is no runtime dependency. Swap an icon by copying any
  micro SVG from the site and replacing its `<path>` in the markup.

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

- <http://localhost:8000/index.html> — dashboard
- <http://localhost:8000/login.html> — login

## File layout

```
.
├── DESIGN.md      design tokens + component spec
├── index.html     dashboard shell
├── login.html     sign-in page
├── styles.css     all styles (tokens at the top)
└── script.js      tabs, segmented control, alert dismiss, ⌘K focus
```

Design tokens live in `:root` at the top of `styles.css` — adjust once and the
change propagates across both pages.
