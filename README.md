# Anushma LLC — Site

A full redesign of [anushma.site](https://anushma.site) for **Anushma LLC**, a lab-materials
distributor in Dublin, CA. Clean, editorial aesthetic in the spirit of the Claude homepage:
white canvas, near-black text, a hint of light blue, generous whitespace, and a refined serif.

## Stack

- **Create React App** (react-scripts 5)
- **Vanta.js** (open-source, MIT) for the WebGL animations — `NET` (hero) and `GLOBE` (showcase),
  loaded via dynamic import and themed light/blue
- **Framer Motion** — entrance reveals, scroll progress, animated counters
- Fonts: **Newsreader** (serif display) + **Inter** (body)

## Design language

- **Palette** — white `#ffffff`, near-black `#16181d`, light-blue accent `#4a83e6` used sparingly
- **No gradients, no rounded corners** — flat fills, sharp edges, thin 1px borders
- **Type** — large serif headlines with italic blue emphasis; clean sans body
- **Logo** — the original Anushma "A." monogram (`public/assets/anushma-logo.png`) in the nav,
  footer, and preloader
- **Zero overlap** — every animation lives in its own bordered panel; text never sits on top of it

## Content

All copy/products come from the real Anushma LLC catalog (`src/data.js`): Acetonitrile Optima
LC/MS, Ammonium Acetate, Amber Vials, Upchurch PEEK tubing/fittings, heat sealers — across Lab
Essentials, Lab Consumables, Fluidic Connections, and Reagents. Contact: 650-204-0995 ·
info@anushma.site · Dublin, CA 94568.

## Develop

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production bundle in ./build
```

## Deploy

Static SPA — drop `build/` on any host. On Vercel: framework preset **Create React App**
(build `npm run build`, output `build`), then point the `anushma.site` domain at the project.

## Structure

```
public/assets/anushma-logo.png   # original brand mark
src/
  App.js                 # layout + scroll-progress bar
  data.js                # all company/product content
  index.css              # full design system (one file)
  components/
    Vanta.js             # open-source WebGL animation wrapper (dynamic import)
    Preloader, Navbar, Hero, Marquee, Stats, Categories,
    Showcase, Products, Features, Contact, Footer, Icons
```
