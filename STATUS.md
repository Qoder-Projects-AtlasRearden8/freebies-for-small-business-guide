# STATUS

**Project:** Free Tools to Run a Small Business / LLC
**Publisher:** Asdale Dynamics, LLC
**Status:** Complete — Markdown guide, static site, build tooling, and verification are in place.
**Last verified:** October 25, 2026, on Node.js 20.19.2 / npm 11.21.0 (Linux).

## What was built

A complete, plain-English field guide to legitimate freebies for a new small business or single-member LLC, especially in Indiana and the US. Documentation and the website are both finished, not stubs.

### The guide

- **16 chapters plus an overview**, about **18,475 words**.
- Covers the original brief end to end:
  - free software (accounting, invoicing, CRM, email, website, design, scheduling, forms, e-signature),
  - free templates and official forms,
  - free training and business education,
  - free government, SBA, SCORE, SBDC, and Indiana resources,
  - free AI helpers with privacy and verification rules,
  - a 90-day implementation plan, source list, and scam checks.
- Written in the Asdale Dynamics voice: warm, direct, step by step, never condescending.
- Every chapter includes a free starting point, setup guidance, free-plan watch-outs, an optional AI prompt, official sources, and a "not legal or tax advice" boundary.
- No affiliate links, no signup walls, no invented urgency.

### The website

- **20 static HTML pages**: landing page, overview, 16 chapters, a 78-page print edition, and a license page.
- **Zero runtime dependencies.** The generator and server use only Node.js built-ins.
- **Local-first.** No external fonts, scripts, analytics, trackers, or images. All assets are local.
- **Works from `file://`** as well as through the local server.
- **Client-side search** with `/` and Ctrl/Cmd+K shortcuts, safe DOM rendering, highlighted matches, and a local 145 KB index.
- **Accessible structure**: skip links, landmarks, labeled controls, visible focus, dark mode, reduced-motion support, responsive layout, and print styles.
- **Print edition** with all chapters and the license in one document.

### Tooling and project files

```text
docs/                 Markdown source (README + chapters 00–15)
site/                 Generated static site and editable source assets
  src/assets/         CSS, JavaScript, favicon
scripts/build.mjs     Markdown → HTML generator
scripts/serve.mjs     Local static server
test/build.test.mjs   14 build, link, structure, security, and server tests
README.md             Project overview and usage
STATUS.md             This file
LICENSE               MIT License
package.json          Build/serve/test scripts, no dependencies
```

## How to run it

You do not need Node.js to read the guide.

```bash
# Open the static site
# site/index.html

# Or read the Markdown
# docs/00-start-here.md

# Preview with the local server
npm run serve
# http://127.0.0.1:4173

# Rebuild the site after editing docs/ or site/src/assets/
npm run build

# Run the test suite
npm test

# Build and test in one step
npm run check
```

There is **no `npm install` step** and no dependency tree. Node.js 18 or newer is sufficient; the project was verified on Node.js 20.19.2.

## Verification results

### Build

```text
Built 16 chapters + landing, overview, print, and license pages (18,475 words)
```

The build is deterministic: producing the site twice yields identical bytes. Stale generated HTML is cleaned by marker, while hand-edited assets are preserved.

### Automated tests — 14/14 passing

```text
# tests 14
# pass 14
# fail 0
```

The suite checks:

1. All expected pages and assets exist.
2. Every page has required metadata, structure, and accessible landmarks.
3. Every internal link and fragment resolves.
4. The site loads no third-party assets.
5. The search index is complete and every indexed heading anchor exists.
6. The print edition contains all 16 chapters plus the license.
7. The guide covers the original freebie brief (software, templates, training, SBA, SCORE, Indiana, single-member LLC, no affiliates).
8. Documentation links are valid and chapters form a complete next/previous chain.
9. Known-moved official URLs are not reintroduced.
10. Navigation order is complete on every chapter page.
11. License, copyright, and README credit are correct.
12. No secrets, credentials, personal contact data, or `.env` files are present.
13. The build is deterministic.
14. The local server serves pages and assets, returns 404s, and blocks path traversal.

### Browser checks

Verified in headless Chrome against the local server:

- Desktop landing page renders correctly at 1440 px; 16 chapter cards are present.
- Mobile chapter page renders at 390 px with **no horizontal overflow**.
- Sidebar and on-page table of contents are visible on desktop and collapsed on mobile.
- Search opens from the button and the `/` shortcut.
- Searching **"invoice"** returns 9 matches; the first result links to the invoicing chapter.
- A nonsense query shows a helpful empty state.
- Search works from `file://` with the local index (7 matches for "training").
- No browser exceptions occurred. No external assets were requested.
- The print page contains 17 chapter/license sections and no sidebar.

### Print edition

Generated a PDF from `site/print.html` with headless Chrome:

- **78 pages**, US Letter (612 × 792 pt).
- Title page and chapter layout render cleanly.
- Callouts, lists, code, and links remain readable.

The PDF was generated for verification only and is not committed.

### External link audit

- Extracted and checked **92 unique external URLs** from the documentation.
- Found and fixed five real navigation problems:
  - SBA Business Guide moved to `https://www.sba.gov/counseling/#business-guide`.
  - SBA Learning Platform moved to `https://learning.sba.gov/`.
  - SBA Women's Business Center link is now an anchor on the current resource-partner page.
  - SBA Veterans Business Outreach Center link is now an anchor on the same page.
  - The Indiana e-signature citation now points to the official Indiana General Assembly code rather than an unofficial reproduction.
- Added Google Forms' current **1 GB total storage / 500,000 responses per form** limits.
- Added a regression test so the moved SBA and Indiana URLs are not reintroduced.
- Some sites returned `403`, `404`, `500`, `503`, or connection errors to automated requests while remaining valid in a browser (for example, Cloudflare-protected SCORE, Etsy, MBDA, and W3C pages; Google support pages; Kaggle; Meta; eBay; INBiz; and the Indiana SBDC). These are documented as unconfirmed rather than declared broken.

### Security and privacy

- No API keys, tokens, passwords, credentials in URLs, private keys, or personal email addresses are present.
- No external scripts, analytics, cookies, or tracking.
- No forms collect data on the site; the AI prompt templates explicitly instruct readers to redact sensitive information.
- The site has no backend and no database.
- Search runs entirely in the browser.

## Known gaps and caveats

- **Free plans change.** The guide is a verified snapshot (October 22–25, 2026), not a permanent promise. Re-check pricing and limits before depending on a tool.
- **Not professional advice.** Nothing here is legal, tax, accounting, financial, or medical advice. The guide repeatedly points readers to attorneys, CPAs, and free advising.
- **US/Indiana scope.** The software advice is broadly useful, but government links, filing details, and some programs are US-specific, with Indiana emphasis.
- **Link rot is unavoidable.** Several official and vendor sites block automated checks. The remaining `403`/`5xx` results could not be conclusively verified from this environment.
- **Browser verification is Chrome-only and ad hoc.** No committed Playwright/CI browser suite; Firefox and Safari were not tested.
- **Search is simple by design.** Exact substring matching, no fuzzy matching or typo correction. The local index is roughly 145 KB, loaded only when the site is opened.
- **Accessibility is structural, not certified.** The site has skip links, landmarks, labels, focus styles, reduced motion, and responsive layout, but has not had a screen-reader or full WCAG audit.
- **Print output verified as PDF, not on paper.** Generated as 78 US-Letter pages; printer margins and ink usage were not tested.
- **No CI or remote.** Tests run locally. The repository is local-only and has not been pushed or published.
- **`site/` is generated.** Edit `docs/` for prose and `site/src/assets/` for styles/scripts, then run `npm run build`. Editing generated HTML directly will be overwritten.

## Repository state

- Git repository initialized locally on the `main` branch.
- The project is committed as the existing git identity, with no co-author trailers.
- No remote is configured, nothing is pushed, and nothing is published.
- License: MIT, copyright (c) 2026 Asdale Dynamics, LLC.
