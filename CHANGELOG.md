# Changelog

All notable changes to this project are documented in this file.

## [2026.10] - 2026-10-12

- healthcare-landing is a public single-page React 19 + Vite + Tailwind landing page for 'MediConnect', a French-language digital health platform concept; the whole UI lives in src/App.jsx. Deploy configs exist for Vercel and Netlify.
- Reviewed October 2026: tree re-checked; the only commit besides release commits is the 2026-02-18 initial commit. README links (all stock Vite template references) returned HTTP 200.
- Known gaps: README is still the stock React + Vite template text and does not describe MediConnect; no LICENSE, tests or CI; single 1,600-line component; no backend or form handler wired.
- Release housekeeping only: package version 0.1.0 to 0.2.0, Status line, changelog and Work with SkynetLabs section. No component code changed.

## [2026.09] - 2026-09-16

- Maintenance review of healthcare-landing — a single-page React 19 + Vite + Tailwind marketing landing page for "MédiConnect", a French-language digital health platform concept.
- Status: public, one commit from 2026-02-18 (initial commit), unchanged since. The whole page lives in `src/App.jsx` (~1,600 lines) with features, platform, benefits, testimonials and contact sections; deploy configs are present for both Vercel (`vercel.json`) and Netlify (`netlify.toml`), but the README states no live URL.
- Reviewed September 2026: docs refreshed, `## Status` line added to README, changelog started, versioned as v2026.09 with the package version bumped off 0.0.0. No component code was changed.
- Known gaps: the README is still the stock "React + Vite" template text and says nothing about MédiConnect, its stack choices or how to deploy it; no LICENSE; no tests or CI; no CHANGELOG before this release; the entire UI is one 1,600-line component file with no routing or component split.
- Contact and testimonial content is landing-page copy only — no backend or form handler is wired in this repo, and none was added in this pass.
