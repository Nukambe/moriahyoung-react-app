# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-08-09

A full visual redesign of the portfolio plus a move off Create React App.

### Added

- Dark, editorial design system built on Tailwind 4 `@theme` tokens: warm ink
  backgrounds, bone text, an antique-gold accent, and Cormorant Garamond
  display type over Inter.
- Fixed top navigation that fades in on scroll, with an animated active-route
  underline and a full-height mobile drawer (scroll lock, Escape to close,
  closes on navigation).
- Home page sections: cinematic split hero, scrolling specialty marquee,
  discipline cards, and a closing booking call to action.
- About page: bio with drop cap, an "at a glance" spec table, a masonry
  headshot gallery, and a home-studio section.
- Voice page: category tabs and a sticky transport bar with seek, elapsed and
  total time, volume with mute, previous/next, auto-advance on track end, and
  an animated equalizer beside the playing track.
- On-Camera page: reels in framed 16:9 cards with a sidebar caption column and
  a casting call to action.
- Contact page: split layout with inline per-field validation, an `aria-live`
  status region, and a honeypot field.
- Site-wide page transitions, scroll reveals, `focus-visible` rings, a skip
  link, and `prefers-reduced-motion` handling.
- Responsive imagery: `npm run images:optimize` generates 800w/1600w WebP
  derivatives with sharp, served through an `<Img>` component that emits a
  `srcSet`.
- Vitest test suite covering routing, the audio player, and contact-form
  validation.
- ESLint 9 flat config (`npm run lint`).
- Per-page SEO titles and descriptions using React 19's native document
  metadata hoisting.

### Changed

- Build tooling moved from Create React App (`react-scripts` 5) to Vite 8.
  `npm start` still runs a dev server; `npm run build` still outputs to
  `build/`.
- Upgraded React 18 → 19, `react-router-dom` 6 → 7, Tailwind CSS 3 → 4, and
  `framer-motion` → `motion` 13.
- All site copy, navigation, socials, demos, and reels consolidated into
  `src/data/site.js`.
- Social links now render as monochrome inline SVG marks instead of
  full-colour brand logos.
- Contact form submission reports success and failure inline instead of
  through `alert()`, and EmailJS identifiers can be overridden with
  `VITE_EMAILJS_*` environment variables.
- Photography is no longer served at full resolution: the largest assets drop
  from ~5.5 MB each to a 1.5 MB total across all optimized derivatives.

### Removed

- `react-helmet` (React 19 hoists `<title>` and `<meta>` natively),
  `react-responsive` (Tailwind breakpoints), `@headlessui/react` (unused), and
  `validator` (replaced by a small local validator).
- Unused legacy components: the rose sidebar/hamburger navigation, the
  duplicated mobile home hero, `aboutSection`, `navbar`, `navPopOut`, and
  `myNavLink`.
- The unused `ThemeContext` and `ScreenContext` providers.

### Fixed

- The mobile menu never appeared. The header's `backdrop-filter` became the
  containing block for the fixed drawer, collapsing it to zero height; the
  drawer now renders as a sibling of the header.
- Audio playback stopped roughly a second after starting. The mount effect's
  `play()` raced the play/pause sync effect, which saw `playing === false` and
  immediately paused the element. Playback is now driven by a single effect.
- Interior pages misaligned their content with the page heading because the
  headers and body sections used different container widths.
