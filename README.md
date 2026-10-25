# Free Tools to Run a Small Business / LLC

**A friendly, no-subscription field guide for new small businesses and single-member LLCs—especially in Indiana and the US.**

This is a complete, plain-English guide to legitimate freebies: free software, free templates, free training, and free government and SBA resources. It is written for a one-person business that needs a real operating system, not a 47-tab productivity fantasy.

**16 chapters · about 18,000 words · static HTML site included · no affiliate links · no build dependencies**

Published by **Asdale Dynamics, LLC**, an Indiana company focused on beginner-friendly AI education, books and guides, and practical tools. The same rule applies here as everywhere in the library: explain it like a friend would, step by step, never condescending.

## What's inside

| Part | Chapters | What it covers |
|---|---|---|
| Foundations | 00 | A 30-minute setup: business email, folders, calendar, and the first working version |
| Money | 01–02 | Wave Starter for bookkeeping, Zoho Invoice Free or Wave for invoices, a monthly money date |
| Customers | 03–04, 07–08 | CRM, email marketing, scheduling, and forms |
| Be found | 05–06 | GitHub Pages or Netlify, Canva Free, a tiny brand kit |
| Paperwork | 09–10 | DocuSeal Free, official INBiz/IRS/SBA/SCORE template starting points |
| Learn & get help | 11–12 | SBA Learning Platform, SCORE, freeCodeCamp, Indiana SBDC, SBA resource partners |
| AI, carefully | 13 | Free chatbots, local AI, free coding tools, redaction and verification rules |
| Put it together | 14–15 | A 13-week setup plan, sources, scam checks, and the fine print |

Each chapter gives you:

- the job in plain English,
- a genuinely free starting point (or two),
- setup steps and a realistic rhythm,
- free-plan watch-outs,
- an optional AI prompt with privacy rules,
- official sources to re-check.

## The free stack at a glance

| Job | Free starting point |
|---|---|
| Books | Wave Starter |
| Invoices | Zoho Invoice Free or Wave |
| People | Spreadsheet or HubSpot Free |
| Email | MailerLite Free or Brevo Free |
| Website | GitHub Pages or Netlify Free |
| Design | Canva Free + system fonts |
| Booking | Cal.com Free or Calendly Free |
| Forms | Tally Free or Google Forms |
| Signatures | DocuSeal Free |
| Training | SBA Learning Platform, SCORE, freeCodeCamp |
| Human help | Indiana SBDC, SCORE, SBA |
| AI drafts | Free hosted assistant or local AI |

A domain, card-processing fees, and professional advice may still cost money. The goal is to keep the **monthly software bill at zero**, not to pretend business has no costs.

## Read it or run it

You do not need Node.js to read the guide.

- **Read the guide:** open [`site/index.html`](site/index.html) in a browser, or start with [`docs/00-start-here.md`](docs/00-start-here.md).
- **Print edition:** open [`site/print.html`](site/print.html) and print or save as PDF.
- **Preview locally (recommended):**

  ```bash
  npm run serve
  # http://127.0.0.1:4173
  ```

- **Rebuild the static site:**

  ```bash
  npm run build
  ```

- **Run the checks:**

  ```bash
  npm test
  # or
  npm run check   # build, then test
  ```

The build script and tests use **zero npm dependencies**. Node.js 18 or newer is enough; there is no `npm install` step.

## Repository layout

```text
docs/                 Markdown source (README + chapters 00–15)
site/                 Static HTML deliverable
  index.html          Landing page
  overview.html       Rendered guide overview
  00-*.html … 15-*.html
  print.html          All chapters in one printable page
  license.html        MIT license
  assets/             Local CSS, JS, search index, favicon
site/src/assets/      Editable source assets
scripts/build.mjs     Zero-dependency Markdown → HTML generator
scripts/serve.mjs     Zero-dependency local static server
test/build.test.mjs   Build, link, structure, safety, and server tests
LICENSE               MIT License
STATUS.md             What was built, verification results, known gaps
```

The site is self-contained and works offline. External links are ordinary links; no external fonts, scripts, analytics, or trackers are loaded. Search runs from a local JavaScript index, so it works without a server as well.

Build and verification status, including known gaps, is recorded in [`STATUS.md`](STATUS.md).

## How this guide stays honest

- **Free means a usable free tier**, not a trial that watermarks client work.
- **No affiliate links.** No tool or agency paid for placement.
- **Official sources win.** Every chapter links to the pricing page, agency, or program it describes.
- **Free plans change.** Details were checked October 22–24, 2026. Re-check anything you plan to depend on.
- **Data can leave.** Each tool recommendation is paired with an export or backup habit.
- **No secrets or personal data.** The templates and examples contain none. Do not add any to the prompts or forms.
- **Education, not advice.** Nothing here is legal, tax, accounting, financial, or medical advice.

See [`docs/15-sources-and-fine-print.md`](docs/15-sources-and-fine-print.md) for the source list, freebie scorecard, and scam red flags.

## License and credit

Copyright (c) 2026 Asdale Dynamics, LLC. Released under the [MIT License](LICENSE).

If you reuse substantial portions, credit “Asdale Dynamics, LLC — Free Tools to Run a Small Business / LLC.” Tool names, logos, and trademarks belong to their owners.

**Not affiliated with any tool or agency listed.**
