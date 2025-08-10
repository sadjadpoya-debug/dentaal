# Dentaal – Brand Book (repo version)

This file mirrors the brand book from our canvas so it can live in your repo at `/brand/brandbook.md`.

## Essence
- **Positioning:** Heldere zorg in heldere taal.
- **One‑liner:** **Heldere zorg. Helder verhaal.**
- **Values:** Helder • Transparant • Persoonlijk • Beste ervaring.

## Logo
- Wordmark: “Dentaal.” Keep the period.
- Variants: full color on light, white on gradient/dark, mono black.
- Clearspace: ≥ height of lowercase **d** bowl. Min width: 160 px screen.
- Icon: circular gradient badge with white **D**.

## Colors
- Gradient: `#54AFCC → #5677D5 → #6741DC`
- Solids: Blue `#5677D5`, Teal `#54AFCC`, Violet `#6741DC`
- Neutrals: Ink `#0F172A`, Slate `#334155`, `#94A3B8`, Mist `#F1F5F9`, White `#FFFFFF`

## Typography
- **Plus Jakarta Sans** (H1–H3 600/700) • **Inter** (Body 400/500)
- Headline scale: H1 56/40, H2 40/32, H3 28/22; Body 16; Line-height 1.55–1.7.

## Components
- Sticky nav (transparent → white), hero with gradient/video, pill buttons, card grid, FAQ accordion, compare slider for cases.
- Kids variant: multicolor **D** icon on kids pages only.

## Voice (B1)
- Kort, duidelijk, vriendelijk. “Feit + geruststelling.”
- Blijf weg van politiek/religie/geaardheid; geen angstmarketing.

## Accessibility & SEO
- AA contrast, semantic headings, alt‑text, fast load.
- Schema.org: `Dentist`, `LocalBusiness`, `MedicalWebPage`, `FAQPage`.
- Sitemap + robots configured in app.

## Strategic goals
1) **#1 kennisbron**: kennisbank, podcast, Q&A; E‑E‑A‑T (auteurs + bronnen).  
2) **Traffic**: content‑cadans, lokale landing pages, internal links, OG.  
3) **Patiëntenportaal**: QR → verify → offerte → informed consent (e‑sign) → nazorg (PDF/mail).

## Code tokens (Tailwind)
```js
// tailwind.config.js (excerpt)
extend:{ colors:{ brand:{teal:'#54AFCC',blue:'#5677D5',violet:'#6741DC'}, ink:{900:'#0F172A'}, slate:{700:'#334155',400:'#94A3B8',100:'#F1F5F9'} }, borderRadius:{xl:'12px',full:'999px'} }
```