# moriahyoung.com — Actress Portfolio

The portfolio site for **Moriah Young**, a voice over artist and on-camera
actress. A dark, editorial single-page app covering her biography, headshot
gallery, voice demos, on-camera reels and booking enquiries.

Live site: https://moriahyoung.com/

## Stack

| | |
| --- | --- |
| Framework | React 19 |
| Build | Vite 8 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 (CSS-first `@theme` tokens) |
| Motion | Motion (framer-motion's successor) |
| Mail | EmailJS |
| Tests | Vitest + Testing Library |
| Lint | ESLint 9 (flat config) |

## Getting started

```sh
npm install
npm run dev      # http://localhost:3000
```

### Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` / `npm start` | Vite dev server with HMR |
| `npm run build` | Production bundle into `build/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Vitest in watch mode |
| `npm run lint` | ESLint over the project |
| `npm run images:optimize` | Regenerate responsive WebP derivatives |

## Project layout

```
src/
  assets/content/    full-resolution photography (source of truth)
  assets/optimized/  generated WebP derivatives that ship to the browser
  components/
    audio/           sticky transport bar for the voice demos
    contact/         form field primitives
    layout/          nav bar, mobile drawer, footer, scroll restoration
    ui/              buttons, page header, reveal-on-scroll, icons, <Img>
  data/site.js       all copy, navigation, socials, demos and reels
  lib/               image resolution + contact-form validation
  pages/             one component per route
  styles/index.css   Tailwind theme tokens, base styles, components
```

Site copy, demo tracks, reels and social links all live in `src/data/site.js` —
edit that file rather than the page components to update content.

## Images

Source photography is multi-megabyte, so `src/assets/content` is never served
directly. `npm run images:optimize` uses sharp to emit 800w and 1600w WebP
derivatives into `src/assets/optimized` (~35 MB of originals become ~1.5 MB),
and the `<Img>` component wires them up as a `srcSet`. After adding a photo,
register it in `scripts/optimize-images.mjs` and re-run the script.

## Contact form

The form posts through EmailJS. The bundled public identifiers are used by
default; override them with a `.env` file if the account changes:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## Deployment

`npm run build` outputs a static bundle to `build/`. `public/_redirects` keeps
client-side routing working on Netlify-style hosts; any other host needs an
equivalent SPA fallback to `index.html`.
