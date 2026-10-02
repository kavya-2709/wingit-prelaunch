# Wingit — pre-launch landing page

A brand reimagination and working pre-launch page for Wingit, an at-home, try-before-you-pay beauty concierge launching in NCR.

```bash
npm start            # node server.mjs → http://localhost:4173
```

You need Node 18 or later. There are no dependencies to install.

| Path | What |
|---|---|
| `site/` | The landing page: `index.html`, `styles.css` (design tokens at the top), `main.js`, `config.js`, self-hosted fonts and images |
| `server.mjs` | Static server plus `POST /api/waitlist`, which stores signups in `data/waitlist.json` (prototype only) |
| `DESIGN_RATIONALE.md` | Audit, research, brand direction, design system, UX rationale, before/after, dependencies |
| `research/territories.html` | Moodboards for the three creative territories |
| `research/screens/` | Before/after and responsive screenshots |
| `research/original-assets/` | Logo and illustrations collected from wingitclub.com |

`site/` also works on any static host. Point `site/config.js → waitlistEndpoint` at a production signup API first. Without one, the form shows an honest error and never fakes a success message.
