# Changelog

All notable changes to this project are documented in this file.

## [2026.09] - 2026-09-16

- Maintenance review of healthcare-landing — a single-page React 19 + Vite + Tailwind marketing landing page for "MédiConnect", a French-language digital health platform concept.
- Status: public, one commit from 2026-02-18 (initial commit), unchanged since. The whole page lives in `src/App.jsx` (~1,600 lines) with features, platform, benefits, testimonials and contact sections; deploy configs are present for both Vercel (`vercel.json`) and Netlify (`netlify.toml`), but the README states no live URL.
- Reviewed September 2026: docs refreshed, `## Status` line added to README, changelog started, versioned as v2026.09 with the package version bumped off 0.0.0. No component code was changed.
- Known gaps: the README is still the stock "React + Vite" template text and says nothing about MédiConnect, its stack choices or how to deploy it; no LICENSE; no tests or CI; no CHANGELOG before this release; the entire UI is one 1,600-line component file with no routing or component split.
- Contact and testimonial content is landing-page copy only — no backend or form handler is wired in this repo, and none was added in this pass.
