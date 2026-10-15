# Sudipa Subedi — portfolio

The portfolio site for **sudipasubedi.com.np**, built with Next.js 15, TypeScript and Tailwind CSS. It exports as plain static files, so you can host it anywhere (Cloudflare Pages is the plan).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site → ./out
```

All the wording on the site lives in `data/profile.ts`. **To add the MBA school**, set `school: "…"` there.

---

## Design specification

### Concept: "quiet luxury, kept like a ledger"
The site should read like a private-bank annual report: obsidian and chalk, one champagne accent, serif headlines, generous whitespace. The ledger idea runs through the whole site:
- the sections are numbered like a report (`01 — Thesis`, `02 — Experience`, …)
- her experience is shown as a ledger table with reference numbers
- the competencies section is called "the working balance sheet"
- the logo uses the accountant's mark for a balanced total

### Logo
- A serif **S** sits above a **double rule**. In accounting, a double underline marks a final, balanced total.
- The top rule lifts at its right end. That stands for *confident (the books are in order) and learning (the career is rising)*.
- The files:
  - `public/logo.svg`: the mark on dark backgrounds
  - `public/logo-ink.svg`: the mark on light backgrounds
  - `public/icon.svg`, `favicon.ico` and the app icons: the mark in a gold-ruled square
  - `components/Monogram.tsx`: the mark as a reusable component

### Colour
| Token | Hex | Use |
|---|---|---|
| ink | `#0B0F19` | hero, timeline, correspondence (the dark sections) |
| paper | `#F5F5F7` | experience, credentials (the light sections) |
| ivory | `#EFEAE1` | thesis: a warm band that separates it from Experience |
| gold | `#D4AF37` | the accent on dark sections only |
| gold-deep | `#7A5E17` | gold for text on light sections (passes the 4.5:1 contrast check) |
| slate / stone | `#8E8E93` / `#5B5B61` | secondary text on dark / on light |

Sections alternate ink → ivory → paper → ink → paper → ink, so neighbouring sections never share a tone.

### Typography
- **Cormorant Garamond** (500, with italic) for headlines, figures, quotes and the signature.
- **Inter** for body text, labels and data.
- Small-caps labels use letter-spacing of 0.22em.
- All figures use lining tabular numerals.

### Grid and layout
- The page uses a 12-column grid with a maximum width of 1240px.
- Section titles are asymmetric: the label takes 3 columns and the heading takes 9.
- The hero splits 7 columns of copy against 5 columns of portrait. The portrait's gold frame is offset by 12px.

### Motion
- **Reveal:** each section fades up 14px over 1.1s, using the curve `cubic-bezier(0.16, 1, 0.3, 1)` and staggered by 80–140ms.
- **Ledger rows:** they expand over 700ms on the same curve.
- **Links:** the underline draws in from the left.
- **Reduced motion:** visitors who ask for it see no animation at all.
- **No JavaScript:** if JavaScript fails, the content still shows.

### Sections
1. **Hero:** editorial headline; *Accountant × MBA Candidate*; a studio-style portrait cut out from her photo and graded onto the page colour; live "days in practice" and Nepal fiscal-year panel; figures 4+ / 5 / 1.
2. **Thesis:** type-only manifesto on the ivory band, with three principles.
3. **Experience:** five engagements with all details visible (period, sector, mandate, bullets, a big serif "scale" word).
4. **Expertise:** six capabilities, including office administration; industries served.
5. **Credentials:** a two-column balance sheet (education and recognition on the left; competencies and training on the right).
6. **Correspondence:** a signed letter with email, LinkedIn, WhatsApp and résumé.
7. A discreet floating **Mail** button that opens a prefilled email (WhatsApp stays in the contact letter).

### Honesty and privacy
- Every figure on the site comes from her CV. The site states no deal values or confidential amounts.
- Referees' names are not published. Her phone number is used only behind the WhatsApp links (and inside the CV PDF).
- One photo is used: her background was removed, sunglasses kept, colour gently desaturated, and she was placed on a studio-style ivory backdrop with the bench kept. The original photo is not published.

## Photography

All images come from one original photograph, edited in code. These are the steps:

1. **Cut-out:** the background was removed with an AI segmentation model (`isnet-general-use`), using alpha matting to keep the fine hair edges.
2. **Ivory backdrop with the bench kept:** the wall was replaced with a warm ivory gradient; the wooden bench and handbag stay as photographed (matted with GrabCut) and fade softly into the ivory at their ends.
3. **Portrait correction:**
   - white balance corrected against the original wall
   - gentle exposure and contrast curve
   - a soft lift on the face only
   - a +10% saturation boost on the green of the saree only
   - light sharpening
4. **Kept exactly as photographed:** her face, skin tone, expression, sunglasses, jewellery, bindi and sindoor.
5. **Compositing:** edge colours were cleaned so no light halo shows around her. I added a soft shadow down and to the right, a slight wrap of backdrop light on her edges, and fine grain over the whole image.

| File (in `public/img/`) | Size | Used in |
|---|---|---|
| `portrait-primary.webp/.jpg` (+`-sm`) | 680×850 (4:5) | Hero, on desktop |
| `portrait-profile.webp/.jpg` | 480×600 (4:5) | spare profile crop |
| `portrait-avatar.webp/.jpg` | 480×480 | Hero on mobile, contact letter |
| `portrait-wide.webp/.jpg` (+`-sm`) | 1600×900 (16:9) | spare wide crop (not currently used) |
| `brand/sudipa-cutout-transparent.png` | — | transparent cut-out, for other uses |

The images are never upscaled beyond the source resolution. Each one is served as WebP with a JPEG fallback, with fixed width and height so the page doesn't shift while loading, and every image except the hero portrait loads lazily.

## Deploying (same setup as sudip-subedi.com.np)
1. Push this folder to a GitHub repo (e.g. `sudipa-portfolio`).
2. In Cloudflare, go to **Workers & Pages → Create** and click **"Continue to Pages"**, then **Import Git repository**.
3. Use these build settings:
   - build command: `npm run build`
   - output directory: `out`
   - environment variable: `NODE_VERSION` = `22`
4. Add `sudipasubedi.com.np` under **Custom domains**. The domain's nameservers must point to Cloudflare first.

### Tools page (`/tools/`)
The finance desk (live VAT, loan EMI and fixed-deposit calculators in lakh/crore format) lives on its own page, reached through the gold **Tools** link in the header. It is not on the home page.
