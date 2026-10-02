# Wingit — pre-launch landing page

Two creative directions for the same product story:

| Version | Live | Idea |
|---|---|---|
| **V1 · The Swatch Journal** | `/` | Considered deliberation: berry on sage paper, editorial serif, handwritten notes |
| **V2 · Electric Beauty** | `/v2/` | Self-expression and ritual: cobalt, tangerine and butter, condensed grotesk, illustrated footer |

V1 is also frozen at git tag `v1`. A floating switcher on both pages flips between them.

A brand reimagination and working pre-launch page for Wingit, an at-home, try-before-you-pay beauty concierge launching in NCR.

```bash
npm start            # node server.mjs → http://localhost:4173
```

You need Node 18 or later. There are no dependencies to install.

| Path | What |
|---|---|
| `site/` | The landing page: `index.html`, `styles.css` (design tokens at the top), `main.js`, `config.js`, self-hosted fonts and images |
| `server.mjs` | Static server plus `POST /api/waitlist`, which stores signups in `data/waitlist.json` (prototype only) |
| `site/v2/` | V2: `index.html`, `styles.css`, `illustrations.svg` (hand-drawn object kit), `directions.html` (colour study). Reuses `../main.js` and `../config.js` |
| `DESIGN_V2.md` | V2 brand direction, colour/type system, section-by-section comparison |
| `DESIGN_RATIONALE.md` | Audit, research, brand direction, design system, UX rationale, before/after, dependencies |
| `research/territories.html` | Moodboards for the three creative territories |
| `research/screens/` | Before/after and responsive screenshots |
| `research/original-assets/` | Logo and illustrations collected from wingitclub.com |

`site/` also works on any static host. Point `site/config.js → waitlistEndpoint` at a production signup API first. Without one, the form shows an honest error and never fakes a success message.
