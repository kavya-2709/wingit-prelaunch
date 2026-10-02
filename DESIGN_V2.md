# Wingit V2 — "Electric Beauty"

A second creative direction for the same product story.
Live: `/v2/` (V1 stays at `/`). Colour study: [`site/v2/directions.html`](site/v2/directions.html). V1 is preserved untouched at git tag `v1`.

---

## 1. The new brand idea

**V1, *The Swatch Journal*:** beauty as *considered deliberation*. A quiet notebook of trials, with berry on sage paper and handwritten notes.
**V2, *Electric Beauty*:** beauty as *self-expression and personal ritual*. Trying on is a moment you enjoy, at your own vanity, in your own light. It's confident, colourful and a little theatrical, but never chaotic.

Strategy, narrative and facts are unchanged: an at-home trial with sealed testers, a beauty partner, ₹0 upfront, pay for what you keep, launching in NCR. Everything visual is new.

**Headline:** V1's "Your skin gets the final say." becomes **"Your face. Your call."** Same strategic job (you decide, on you), in a bolder, more expressive voice.

## 2. Colour: three directions, one choice

| Direction | Palette | Verdict |
|---|---|---|
| A · Botanical Pop | #1F4D36 · #FF7A59 · #FFF8EA · #C9E265 | The illustrations' sage skin goes muddy on forest green, and the leaves disappear. It reads skincare-only. |
| **B · Electric Beauty ✓** | **#2B3BD6 · #FF6B2C · #FFE27A · #FBF6EC · #16143D** | **Chosen.** No Indian beauty retailer owns blue (Nykaa pink, Tira red, Purplle purple, Sephora black). Cobalt complements the warm skin and pink blossoms, so the illustrations pop, and indigo/kohl gives it cultural roots. |
| C · Modern Rouge | #E2412F · #D9C8F2 · #F7C8D0 · #3A1238 | Red is Tira's territory and too close to V1's berry. Pink flowers lose contrast on red. |

**Final system** (`site/v2/styles.css → :root`)

| Role | Hex | Use |
|---|---|---|
| Primary: Cobalt | `#2B3BD6` | Wordmark, primary CTA, hero, footer, active nav, kept-tags |
| Primary hover | `#1C2799` | Button hover and press |
| Secondary: Tangerine | `#FF6B2C` | Hero CTA on cobalt, shelves, Join section, poster. **Never text on light** (2.6:1) |
| Accent: Butter | `#FFE27A` | Highlights on cobalt and ink, pills, mirror, focus ring on dark |
| Main background | `#FBF6EC` | Reading sections |
| Alt background | `#FFF3C7` / `#F3ECDC` | How-it-works, story / preview |
| Primary text | `#16143D` | 15.7:1 on paper |
| Secondary text | `#5A5880` | 6.2:1 on paper |
| Borders | `#16143D` (2px structural), `#DDD4C0` (hairline) | |
| Focus | Ink ring on light, butter ring on dark | |

All text pairs pass WCAG AA: paper on cobalt 7.2, ink on tangerine 6.2, butter on cobalt 6.1.

**Buttons:** primary is cobalt with paper text, a 2px ink border and an offset ink shadow (lifts on hover, presses on click). *Hot* is tangerine with ink text, used on cobalt; it turns butter on hover. Chips go cobalt when selected.

## 3. Typography

| Role | Face | Setting |
|---|---|---|
| Display / H1 / H2 | **Bricolage Grotesque** 800, width 75–85% | Hero `clamp(3.6→9.6rem)`, line-height .84; H2 `clamp(2.4→5rem)` |
| Accent words | **Instrument Serif** *italic* | One or two words per headline (*call*, *the pressure doesn't*), plus verdicts and pull quotes |
| Body / UI / nav / labels | **Figtree** 400–700 | Body 17px/1.6; labels 12.5px caps with .14em tracking |

The heavy condensed grotesk plus a soft serif italic is the identity's "voice": loud and tender at once. It replaces V1's Fraunces, Instrument Sans and Caveat. All fonts are self-hosted under the SIL OFL.

**Wordmark:** "wıngıt" set in Bricolage, with a hand-drawn **blossom replacing the dot of the second i**, taken from your footer reference. It's used in the nav, the footer bar, and at monumental scale in the footer scene.

## 4. Illustration

- Wingit's original line-art women are kept, so the same illustrator is clearly at work. They're now framed in vanity mirrors, arched poster windows and a tangerine portrait circle.
- A new **hand-drawn object kit** (`site/v2/illustrations.svg`) with ink outlines, flat fills and one shade tone: blossom, bud, leaf, sprig, bloom bank, lipstick, perfume, cream jar, compact, Q-tips, petal, draped cloth. Colours come from CSS variables, so the same drawing recolours per context (yellow blossoms in the Scent poster, a cobalt compact in Join). The line weight is constant at every scale, like one pen.
- **Restraint:** flowers appear in the hero shelf, one sprig per section where used, and the footer. Everything else is type and colour.

## 5. Page: same story, new compositions

| # | Section | V1 | V2 |
|---|---|---|---|
| 1 | Bar + nav | Berry bar, logo PNG | Ink bar; flower-dot wordmark; pill nav with cobalt active state; full-screen cobalt mobile menu |
| 2 | Hero | Arch portrait + tester card on paper | Full-bleed cobalt; giant condensed headline; oval vanity mirror on a tangerine shelf with perfume, lipstick, jar and blossoms; rotating "Try first · Wing it" badge |
| 3 | Philosophy | Serif statement + crossed-out list | Huge grotesk manifesto; the turn set in three colour-blocked highlights; Five faces as **compacts on a shelf** |
| 4 | How it works | 4-column icons | Sticky title + **ritual list** with outlined numerals and kit objects |
| — | Hygiene | Berry panel + cards | Ink panel; foam portrait in a tangerine circle; numbered rule tiles |
| 6 | Brand world | Alternating editorial rows | **Three poster cards** (cobalt / tangerine / butter) with arch windows: Shade, Texture, Scent |
| 5 | Preview | Two phones on sage | Phones over a tangerine disc; "Concept, not live" sticker plus inline concept chip |
| — | Story, FAQ | Notebook cards, ruled accordion | Big serif pull quotes; boxed accordion that tints cobalt when open |
| 7 | Join | Dark berry + tester card | **Tangerine** section, paper form card with a cobalt offset shadow, compact and lipstick still life |
| 8 | Footer | Ink + faint "wing it." | **Illustrated cobalt scene**: monumental wordmark, a stone ledge with draped cloth, perfume, jar, lipstick, blossoms, Q-tips and an open compact, plus drifting petals. A separate compact composition for mobile (recomposed, not cropped). Nav and copyright live in an HTML bar below, never baked into the art. |

**Colour rhythm:** cobalt opening → paper (read) → butter (ritual) → ink (trust) → colour posters (desire) → paper → butter → paper → tangerine (act) → cobalt close.

## 6. Verified

Headless Chrome at 1440 / 820 / 390px: no console errors, no failed requests, no horizontal overflow. Keyboard order checked, with a visible focus ring on every control. Reduced motion stops the badge and reveals while keeping all content visible. Forms tested: empty, invalid, saved, duplicate. The mobile menu closes and scrolls on link tap. V1 was checked for regressions.

## 7. Open items

- **Waitlist backend:** same as V1. GitHub Pages has no API, so the live form shows an honest "couldn't add you" message. Set `site/config.js → waitlistEndpoint` to a real ESP/CRM.
- **Wordmark:** the flower-dot "wıngıt" is a typeset proposal. A production logo needs custom-drawn letterforms and an SVG master.
- **Illustration:** the object kit was drawn to match the original style. A commissioned pass by the original illustrator would unify line texture further.
- **Business facts:** unchanged from V1. There are no launch date, brand, pricing or funding claims, and the founders still need to approve the copy.
