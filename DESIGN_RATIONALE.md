# Wingit — Brand Reimagination & Pre-Launch Landing Page

**Design rationale** · October 2026
Live build: `npm start` → http://localhost:4173 · Moodboards: [`research/territories.html`](research/territories.html) · Screens: [`research/screens/`](research/screens/)

---

## 0. A correction to the brief, first

The brief says Wingit is "India's first beauty platform for the top 1%", with a ~$7M seed round. **I couldn't verify either claim.**

- The live site (wingitclub.com) never says "top 1%". What it describes is concrete: **an at-home, try-before-you-pay beauty concierge, launching soon in NCR.**
- Press coverage from late September 2026 (Peak XV's *Surge 12* cohort, covered by TechCrunch, Entrepreneur India and RetailIntel) calls Wingit a *"beauty platform for India's premium consumers"*, founded by Nikunj Kothari and Saksham Khandelwal. It says Surge companies are eligible for *up to* $5M. No source I found confirms $7M.

**Decision:** the page carries no funding claims and no "1%" language. Every product statement on the page comes from the existing site's copy or FAQ. Anything forward-looking is labelled as a concept.

---

## A. Audit summary (wingitclub.com, inspected live)

**What it communicates:** "Beauty concierge at your home". You pick makeup, skincare or fragrance. A female beauty partner brings sealed full-size products plus a tester of each. You try with single-use applicators and pay only for what you keep. It's launching in NCR. There are founder stories (hyperpigmentation, eczema, ~200 conversations), a 9-question FAQ, testimonials, and a hygiene section.

| | Findings |
|---|---|
| **Working** | • A genuinely specific proposition (try on *your* skin, ₹0 upfront, sealed testers), which is rare in Indian beauty retail.<br>• Strong lines: *"Same foundation, five faces, five verdicts"*, *"Would you let a stranger put it on you?"*, *"Others know what you bought. Wingit knows what you tried."*<br>• An owned illustration style: line-art women with sage-grey skin that sidesteps skin-tone casting.<br>• An authentic founder story. |
| **Not working** | • **There's no conversion path.** "Launching soon in NCR" looks like a button but isn't a link, and there's no email capture anywhere. A pre-launch site with no way to join is the biggest miss.<br>• The hero headline ("Beauty that meets you at home") is generic and could belong to any salon-at-home brand. The real differentiator, *try before you pay*, sits in the sub-copy.<br>• Category pills (Makeup / Skincare / Fragrance) look tappable but do nothing.<br>• Heavy Poppins caps plus berry blocks feel closer to D2C promo than premium. Fonts are mixed (Poppins, General Sans, Fraunces) without clear roles.<br>• The marquee strip and testimonial carousel are generic patterns. Showing testimonials *before launch* also raises credibility questions.<br>• The illustrations sit as isolated hero images rather than working as a system. |
| **Retain** | Wordmark, berry as the anchor hue, the illustrations, the try-before-you-pay mechanics, the hygiene promise, the founder story, verified FAQ answers, and the "Wing it" sign-off. |
| **Redesign** | Headline hierarchy, CTA and waitlist, type system, palette roles, section rhythm, and turning the illustration style into a graphic language (doodles, annotations, swatches). |

**Implication:** the brand doesn't need a new idea. It needs its *existing* idea promoted to the headline, a visual language that expresses it, and a way to join.

---

## B. Research synthesis

All sites below were visited live in October 2026. Sephora US geo-blocks India. Aesop's India path returned an error page, so I used aesop.com. Kult's site was paused. Warby Parker's Home Try-On page now says *the programme has ended*, which is a useful signal about how hard try-at-home logistics are.

| Brand | Relevant strength | Design / UX pattern | Opportunity for Wingit |
|---|---|---|---|
| **Nykaa** | Scale, assortment, trust | Promo carousels, coupon bars, login modal on load, dense category nav | Be the *calm* alternative: no discounts, no clutter. Choice made bearable by trying, not by filters. |
| **Tira** | Premium-leaning retail | Model-led festive hero, "Shop now", 10+ nav categories, coupon bar | Avoid generic glam-model heroes. Lead with a mechanic rather than a campaign. |
| **Sephora** | Category-defining discovery | Loyalty, services, store and event booking | The "beauty counter" is the reference point. Wingit's counter comes home, minus shared testers. |
| **Glossier** | Conversational voice | Short, witty headlines; "Notify me" capture | A first-person, confident voice; email capture as a natural action. |
| **Rhode** | Product desirability | Tight product cards; "early access" login framing | Make access feel earned, not urgent. Hover swatches → tactile shade UI. |
| **Aesop** | Editorial restraint | Story-first heroes ("Explore the story"), curated sets, generous space | Lead with a point of view; let typography do the luxury. |
| **Warby Parker** | Home try-on precedent | Clear step-by-step mechanics, "free to try" | Explain the trial in 4 plain steps. Be honest that it's not live yet. |

1. **Common patterns:** promo-led heroes, glam-model photography, carousels, dense mega-nav, discount codes, "Shop now".
2. **Overused conventions to avoid:** beige + gold + black luxury, marquee strips, soft-focus models, glassmorphism, countdown timers.
3. **Unmet communication:** nobody in Indian beauty talks about *where the decision happens* (skin, light, hygiene). Retailers sell assortment; Wingit can sell *certainty*.
4. **Whitespace:** an editorial, intimate, *verdict-driven* brand. Premium means being considered and clean, not being rich.
5. **Influence map:** visual → Aesop (restraint) plus Wingit's own illustrations; storytelling → Glossier/Rhode voice; UX → Warby Parker's step clarity and Glossier's capture pattern.

---

## C. Brand direction

**Positioning:** *For premium beauty buyers in NCR who are tired of buying on faith (wrong undertone, scent that turns, a reactive flare-up), Wingit brings the beauty counter home: sealed products, single-use testers, a beauty partner, and nothing to pay for what you don't keep.*

**The "top 1%", reframed:** exclusivity doesn't come from wealth signals. It comes from *care*: a visit to your home, a fresh applicator for every shade, an all-female team, and no push to buy. Premium is the *standard of the experience*, not the price tag.

**Personality:** *Editorial, not aloof* · *Discerning, not clinical* · *Warm and a little witty* · *Straight-talking* (₹0, no fees, no double-dipping).

**Voice principles:** lead with the verdict; use concrete nouns (Q-tip, wrist, undertone) over adjectives (luxurious, curated); one wink per section; never claim what isn't built.

**Three territories explored** (see `research/territories.html`):

| | Concept | Verdict |
|---|---|---|
| **A · The Swatch Journal ✓** | Editorial type plus a hand-annotated layer, like notes from an at-home trial | **Chosen.** The visual language *is* the product mechanic (swatch → compare → circle the winner). It systematises the owned illustrations and is premium without being cold. |
| B · Playful Beauty Culture | Grotesk caps, stickers, hot pink and yellow | Memorable, but reads as discount D2C and undercuts trust for in-home visits. |
| C · Contemporary Premium | Dark, still-life photography, Aesop calm | Generic luxury; discards the illustrations; needs product photography Wingit can't truthfully show yet. |

---

## D. Design system (`site/styles.css` → `:root`)

**Colour**

| Role | Token | Hex | Note |
|---|---|---|---|
| Primary | `--berry-700` | #7A0E3A | Evolved from the original #7D0033, for recognition |
| Deep / dark sections | `--berry-800/900` | #5A0A2E / #3E0520 | |
| Ground | `--sage-50` | #F5F4EC | "Tester-card paper", keyed to the illustrations' sage skin. Deliberately *not* beige. |
| Secondary | `--sage-100/300/500` | #ECEDE0 / #DCDDC6 / #A4A88A | |
| Accent (annotations only) | `--vermilion` | #C2381F | The "pen": circles, ticks, notes |
| Highlight on dark | `--blush-300` | #F4A6C4 | Evolved from the original #F59AC0 |
| Text | `--ink-900/700/500` | #1D1922 / #3E3946 / #5F5967 | |
| Motif | `--shade-1…5` | #F0D2B6 → #633B24 | A five-tone Indian skin strip |
| Feedback | `--success` / `--error` / `--focus` | #2D6A3E / #B3261E / #2156D9 | |

Contrast was checked for every text pairing. All meet WCAG AA, for example ink-500 on paper at 6.1:1, blush on berry at 5.7:1, and vermilion on paper at 4.9:1.

**Typography** (self-hosted, SIL OFL)
- **Fraunces** (variable; SOFT and opsz axes): display and section headings. The soft italic carries emphasis (*final say*, *the pressure doesn't*). Hero `clamp(2.9rem → 6.4rem)`, H2 `clamp(2.1 → 3.9rem)`, line-height 0.98–1.04, tracking −0.02 to −0.035em.
- **Instrument Sans**: body, UI, labels. Body 16px/1.6, lede ~1.06–1.25rem, labels 12px with 0.16em caps tracking.
- **Caveat**: annotations only (verdicts, wrist notes, ticks). Never used for information the user has to act on.
- Measure: about 34rem for body text, 10–18ch for headlines.

**Layout:** 1240px container, fluid gutters `clamp(1.25 → 2.5rem)`, 4px spacing scale, section padding `clamp(4.5 → 9rem)`. Breakpoints: 480 / 600 / 700 / 860 / 960 / 1080.

**Shape:** radius 6 (inputs), 14 (cards), 28 (panels), pill (buttons, chips), plus an *arch* (pill top, square bottom) as the signature frame for illustrations.

**Buttons:** one primary (berry pill with an offset "pressed" shadow that lifts on hover and sinks on press), plus chips for multi-select. Focus: a 3px blue ring on everything.

**Illustration:** reuse Wingit's line-art women (sage skin, ink outline). New SVG doodles share one `#rough` turbulence filter, rounded 2.6px strokes and two inks (ink/berry on light, blush on dark), with vermilion reserved for marks of judgement. Icons follow the same rules, so pictograms and decoration read as one hand.

**Motion:** the hero rises in once on load (≤700ms, staggered, never gated on scroll). Sections reveal on scroll (18px, 900ms ease-out). Doodles "draw themselves" via `pathLength` dash animation. The tester card and sticker float gently. Everything collapses to static under `prefers-reduced-motion`.

---

## E. Landing page

`site/index.html` · `site/styles.css` · `site/main.js` · `server.mjs`. No framework, no build step, zero npm dependencies. The project folder was empty, so the smallest robust stack won.

**Implemented behaviour**
- Sticky header with scroll state, a current-section underline, and an accessible mobile menu (aria-expanded, Esc to close, closes on link tap).
- **Waitlist (functional):** a hero quick-join (email only) plus a full "trial card" (email, name, NCR area, interests). Client-side validation with inline errors and focus management, a busy state, a honeypot field, and success copy personalised by name and area. Duplicate emails get "you're already on the list". Server, validation and network failures each get honest, actionable errors with an Instagram fallback, and the page never claims you were added unless the server confirmed it.
- `server.mjs` stores signups in `data/waitlist.json` with validation, dedupe, size limits and serialised writes.
- An interactive "Five faces" verdict strip (hover, focus or tap); native `<details>` FAQ; skip link; one H1; alt text on content images and decorative art hidden from screen readers.
- Fonts are preloaded, images lazy-loaded with intrinsic sizes (no layout shift), and there are no third-party requests at runtime.

**Verified** in headless Chrome at 1440 / 820 / 390px: zero console errors, zero failed requests, no horizontal overflow. Keyboard tab order was checked, and reduced motion leaves all content visible. Form flows tested: empty → invalid → created → duplicate → server error → network error.

---

## F. UX rationale: the story

Each section answers the visitor's next question:

| # | Section | Visitor's question | Emotion | Action |
|---|---|---|---|---|
| 0 | Pre-launch bar | "Is this live?" | Clarity | Join |
| 1 | **Hero: "Your skin gets the final say."** | "What is this?" | Recognition ("yes, that's my problem") | Join (inline) or scroll |
| 2 | The idea + Five faces | "Why does it matter?" | *Aha*: same product, five verdicts | Interact |
| 3 | How a trial works (4 steps) | "How would it actually work?" | Ease, no pressure | — |
| 4 | Clean-tester rule | "Is it hygienic / safe at home?" | Trust | — |
| 5 | Swatch Journal: Shade / Texture / Scent | "Is it for what I buy?" | Desire, specificity | — |
| 6 | Concept preview (clearly labelled) | "What will the product be like?" | Anticipation | — |
| 7 | Our story | "Who's behind it?" | Credibility | — |
| 8 | FAQ | "What's the catch?" | Reassurance | — |
| 9 | Join: the trial card | "How do I get in?" | Belonging | **Join** |
| 10 | Footer: "Try it on. Keep what works. Wing the rest." | — | Closure | — |

**Key decisions**
- **The headline makes the mechanic the promise.** "Your skin gets the final say" contains try-on, personalisation and no-pressure in five words. The hand-drawn circle around *final say* enacts the choice.
- **The CTA is "Join the first list"**, not "Get early access". We can truthfully promise launch news, but not access.
- **Testimonials are dropped.** I couldn't verify them for a pre-launch product. The verdict strip shows the same insight without borrowed voices.
- **No retailer names in the FAQ** ("authorised brand stores and leading chains"). Naming Nykaa, Tira and Sephora as suppliers next to a premium retail positioning is a partnership and legal call for the founders.
- **The product preview is shown as a concept and labelled twice** (a dashed note plus a "concept, not live" tag). It uses no brand names, prices or inventory.

---

## G. Before → after

Screens: `research/screens/before-*.png` vs `desktop-hero.png`, `mobile-hero.png`, `*-full.png`.

| Before | After | Why |
|---|---|---|
| "Beauty That Meets You at Home." | "Your skin gets the final say." | Puts the true differentiator in the headline |
| No way to sign up; a fake-button pill | Hero email capture plus a full trial card, both working with honest states | A pre-launch site has one job |
| Poppins heavy caps, three unassigned fonts | Fraunces / Instrument Sans / Caveat, each with one role | Editorial premium and clear hierarchy |
| Berry, black and pink blocks | Berry on sage paper, a vermilion annotation pen, a skin-tone strip | Distinctive, not beige-luxe, and tied to the product |
| Illustrations as standalone hero images | Illustrations plus a doodle system (circles, ticks, swatches, icons) | Owned assets become a brand language |
| Marquee and testimonial carousel | Interactive "Five faces" and a step-by-step trial | Show the insight instead of claiming it |
| Unexplained "How it works" icons | Four plain-language steps from verified FAQ facts | Reduces uncertainty about an unfamiliar model |
| No sense of the future product | A labelled concept: trial bag plus trial notes | Builds anticipation without faking functionality |

---

## H. Outstanding dependencies

1. **Production waitlist backend.** Point `site/config.js → waitlistEndpoint` at a real service (an ESP/CRM such as Mailchimp, Brevo or HubSpot, or a serverless function with a database). Add double opt-in, rate limiting/CAPTCHA, and a consent record (DPDP Act 2023). `server.mjs` is a prototype store, not production.
2. **Privacy policy coverage.** The page links to wingitclub.com's existing policy. Legal should confirm it covers waitlist data.
3. **Founder sign-off on copy:** service areas within NCR, scheduling wording, whether retail sources may be named, and the use of the founders' personal stories.
4. **Launch facts:** date, first neighbourhoods, brands carried, pricing and delivery windows. All are intentionally absent until confirmed.
5. **Assets:** an SVG master of the wordmark (only a PNG was available), original high-res illustration files, a dedicated fragrance illustration, and an OG/social share image.
6. **Analytics and consent:** events for CTA clicks, form starts and completions, and section depth. None is included, and no tracking runs by default.
7. **Testimonials:** reinstate only with verified, consented pilot customers.

Sources: [wingitclub.com](https://wingitclub.com/) · [TechCrunch — Peak XV Surge cohort](https://techcrunch.com/2026/09/28/peak-xv-goes-bigger-at-seed-with-new-surge-cohort-as-series-a-bar-rises/) · [RetailIntel](https://retailintel.in/signal/peak-xv-adds-premium-beauty-platform-wingit-to-18-startup-su-5783c16e) · [Entrepreneur India](https://india.entrepreneur.com/business-news/peak-xv-unveils-surge-12-cohort-of-18-startups) · competitor sites as listed in §B.
