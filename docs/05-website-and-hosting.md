# Website & hosting: a small home on the internet

**The job:** Give people one trustworthy place to understand what you do, contact you, and buy only if you actually need to sell online. A small static site is enough for most authors, consultants, freelancers, and service businesses getting started.

> **Not legal advice.** Privacy policies, accessibility obligations, advertising claims, and e-commerce requirements depend on your business and audience. Get help when you collect data, sell regulated products, or make claims about outcomes. Never put API keys or other secrets in a public website.

## Two free hosts, two different jobs

### GitHub Pages

[GitHub Pages](https://pages.github.com/) hosts static sites directly from a GitHub repository, free. It supports custom domains and HTTPS.

**Use it when:**

- You're comfortable with a repository or willing to learn.
- Your site is informational: an author hub, documentation, a project page, a portfolio.
- You don't need server-side form handling, logins, or e-commerce.
- You're okay with the repository being public on GitHub Free. Publishing a Pages site from a private repository requires a paid GitHub plan; check current docs.

**Official limits and rules to know:**

- Repositories and published sites have a **1 GB** recommended maximum.
- Bandwidth has a **soft 100 GB/month** limit and builds a **soft 10/hour** limit.
- GitHub says GitHub Pages is **not intended or allowed as free hosting to run your online business, e-commerce site, or any other site primarily directed at commercial transactions or providing commercial SaaS**. Don't use it for a storefront. Read the current official limits page before choosing it.
- Don't collect sensitive data through a GitHub Pages site.

For a free informational author page or open-source project, GitHub Pages is an excellent fit. For a business site whose main purpose is commercial transactions, choose a host whose terms allow that.

### Netlify Free

[Netlify](https://www.netlify.com/pricing/) is a static hosting platform with drag-and-drop or Git-based deploys, HTTPS, custom domains, deploy previews, and more backend features.

**Use it when:**

- You want to drag a folder of files into a browser and get a live site.
- You want easier custom domain and deploy-preview workflows.
- You're building a commercial brochure site or need optional form/functions features.
- You want to experiment without running a server.

**Current free-plan reality (checked October 22, 2026):** The free plan shows a **300-credit monthly limit** covering usage such as production deploys, compute, form submissions, bandwidth, and requests. Different actions consume credits. A small static site should fit comfortably, but AI/function features or viral traffic can use more. Netlify's 2024 free-plan announcement described commercial projects as allowed; terms and credit mechanics have evolved, so confirm current pricing and terms before relying on that for a business-critical site.

### Honest comparison

| | GitHub Pages | Netlify Free |
|---|---|---|
| Setup style | Git repository, GitHub Actions or branch | Drag-and-drop or Git |
| Custom domain + HTTPS | Yes | Yes |
| Best for | Docs, portfolios, informational pages, open source | Small business brochure sites, previews, forms |
| Form handling | No built-in backend | Some form/function options within plan limits |
| Commercial / storefront | Not allowed as primary commercial host | Follow current terms; static brochure use is common |
| Main catch | Public repo on GitHub Free; commercial-use language | Usage credits and changing plan terms |

**A domain is not free.** A custom `.com` usually costs roughly $10–$25 per year, sometimes less for the first year and more on renewal. A `*.github.io` or `*.netlify.app` subdomain is free. Start there if money is tight. Buy a domain when it helps people remember and trust you.

## Build the smallest useful site

Five pages or fewer:

1. **Home** — who you help, what you offer, one next step.
2. **About** — a credible short bio, no fake credentials.
3. **Work / books / services** — what you actually offer, with real details.
4. **Contact** — email or a form, plus expectations for response time.
5. **Privacy & disclosures** — what data you collect, if any; affiliate and advertising disclosures where applicable.

For an author: add a book page, a simple email signup, and a clear way to request a talk or workshop. For a service business: add scope, starting price or a clear "request a quote," and a booking link. For a reseller: follow the marketplace rules and host only content you own.

### Write like a person

- Lead with the customer's problem, not your origin story.
- Use short headings and real examples.
- Put contact details where people expect.
- Tell people what happens after they contact you.
- Use real testimonials only with permission. Never invent reviews or results.
- Add alt text to meaningful images; leave decorative images with empty alt.
- Check color contrast and keyboard navigation.

## Publish without leaking secrets

1. **Start locally.** Build or write the files in a private folder.
2. **Check for secrets.** Search for `API_KEY`, `SECRET`, passwords, personal addresses, unredacted client files, and analytics tokens you don't recognize. Never commit `.env` files.
3. **Use a public repository only for public content.** GitHub history is not a secret vault.
4. **Deploy via Netlify Drop or a Git integration.** Follow the host's current steps; don't guess an old workflow.
5. **Set the custom domain and HTTPS.** Follow DNS instructions exactly. Changes can take time to propagate.
6. **Test on a phone and with a keyboard.** Open every link. Check the contact route. Check the 404 page.
7. **Add a privacy note** if you collect anything, even an email address through a form.
8. **Keep an offline copy.** Download the repository or a ZIP of the published files. Your host is not your backup.

## Forms, analytics, and privacy

- Static hosts don't automatically give you a database. Use a free form tool such as Tally or Google Forms, or a host's form product, and review where submissions go.
- **Don't collect SSNs, payment details, health information, or passwords through a generic form.**
- If you add analytics, choose a privacy-respecting option, disclose it, and avoid collecting more than you need. Many free analytics tools use cookies; if you're subject to GDPR/UK GDPR, get proper advice on consent.
- Keep site JavaScript minimal. Never expose an API key in client-side code. If a tool needs a secret, it needs a server or a trusted integration.

## Free-plan watch-outs

- **Free hosting can have soft limits.** A popular post can create a bandwidth bill or site suspension if limits are exceeded.
- **Terms matter more than "it says free."** GitHub Pages is explicitly not a free e-commerce platform.
- **A custom domain is a recurring cost.** Don't forget the renewal.
- **Email on your domain may be a separate paid service.** A domain does not automatically include a mailbox.
- **Free SSL certificates still require configuration.** Follow the host's instructions.
- **Don't host a community or customer portal on a static site.** Static means no secure login or private data storage.

## AI helper: edit the homepage without adding fiction

```text
Review this homepage copy for clarity, warmth, and accessibility: [paste
copy with no customer data]. The audience is [describe]. Rewrite it at a
plain-English reading level. Do not invent testimonials, credentials,
statistics, or outcomes. Keep a maximum of one primary call to action.
Flag any claim that needs evidence. Suggest heading structure and alt-text
ideas for images I describe. This is editing help, not legal advice.
```

AI is useful for tightening copy and drafting a privacy page outline—not for making up reviews or promising legal compliance. Check the final content yourself.

## Sources

- GitHub Pages: <https://pages.github.com/>
- GitHub Pages limits and prohibited uses: <https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits>
- GitHub Pages visibility requirements for free plans: <https://docs.github.com/pages/getting-started-with-github-pages/about-github-pages>
- Netlify pricing: <https://www.netlify.com/pricing/>
- Netlify Free announcement (historical context): <https://www.netlify.com/blog/introducing-netlify-free-plan/>
- SBA local counseling: <https://www.sba.gov/counseling/local-assistance/>

*Limits checked October 22, 2026. Hosting terms change; confirm before publishing.*

**Not legal advice.** Next: [Design →](06-design.md)
