# Cotypist search launch checklist

The product and content work lives in the application. This checklist covers
the external steps that require production deployment or account access.

## Before merge

- [ ] Confirm every Cotypist claim against <https://cotypist.app/pricing>.
- [ ] Confirm Cotabby requirements, shortcuts, and model behavior against the
      current release.
- [ ] Run `npm run typecheck`, `npm run lint`, `npm test`,
      `npm run lint:shadows`, and `npm run build`.
- [ ] Review `/cotypist-alternative` at 390 px and 1440 px.
- [ ] Confirm the production sitemap contains all six new routes.

## Production verification

Set these server-side environment variables in Vercel, then redeploy:

```text
GOOGLE_SITE_VERIFICATION=<Google Search Console token>
BING_SITE_VERIFICATION=<Bing Webmaster Tools token>
```

After deployment:

1. Verify the `https://cotabby.app` domain property in Google Search Console.
2. Submit `https://cotabby.app/sitemap.xml` to Google and Bing.
3. Inspect and request indexing for:
   - `/cotypist-alternative`
   - `/guides/cotypist-to-cotabby`
   - `/ai-autocomplete-mac`
   - `/apple-intelligence-autocomplete-mac`
   - `/mac-app-compatibility`
   - `/security`
4. Validate `/cotypist-alternative` with Google Rich Results Test and the
   Schema.org validator.
5. Confirm Vercel Analytics receives `download_intent`, `download_started`,
   and `newsletter_signup` events with a route path.

## Search Console tracking

Create a query filter using this regular expression:

```text
cotypist|co typist|cotypist alternative|alternative to cotypist|cotypist free|cotypist pricing
```

Record a 28-day and 90-day baseline for:

- Impressions, clicks, CTR, and average position for the query group.
- Organic visits and download starts on `/cotypist-alternative`.
- Non-brand organic clicks and downloads across the site.
- Indexed URL count and Core Web Vitals status.
- New referring domains pointing to the comparison or category guide.

Review the dashboard weekly. Compare 28-day periods only after the first full
28 days; daily ranking changes are too noisy to guide edits.

## Distribution

Use a consistent product name, description, icon, and canonical homepage on:

- GitHub repository profile and README.
- Homebrew cask metadata.
- Product Hunt and AlternativeTo.
- Mac software and local-AI directories with editorial review.
- Curated open-source macOS and local-AI lists.

Do not buy links, automate directory submissions, or create undisclosed
community posts. When participating in a Cotypist discussion, disclose the
Cotabby affiliation and link only when the page answers the question.

## Editorial outreach

Pitch one useful asset rather than a generic product announcement. Recommended
asset: a reproducible local autocomplete benchmark covering latency, memory,
accepted-word rate, offline behavior, and app compatibility on multiple Apple
Silicon Macs.

The benchmark must publish:

- Hardware, macOS, app, and model versions.
- Prompt/context corpus and acceptance criteria.
- Warm-up behavior and number of runs.
- Raw results, not only a winner statement.
- Cases where Cotypist or another product performs better.

Contact writers who have already covered Cotypist, local Mac AI, or private
writing tools. Keep outreach personal and do not send the same mass template.

## Monthly claim review

Review the comparison on the first business day of each month and after any
major Cotypist pricing announcement. Update the visible date and JSON-LD
`dateModified` only when the content was actually verified or changed.

Review these fields:

- Free daily completion allowance.
- Plus and Pro prices and billing interval.
- Macs covered per plan.
- Model catalog restrictions.
- Clipboard, autocorrect, custom instructions, and per-app features.
- Trial duration and supported macOS/hardware.

## 30/60/90-day decisions

### Day 30

- Confirm all new pages are indexed.
- Rewrite titles only when impressions exist but CTR is weak for the page's
  intended query.
- Fix coverage, canonical, or mobile usability errors before adding content.

### Day 60

- Expand sections that rank between positions 8 and 20 and already receive
  meaningful impressions.
- Add original screenshots or measurements only when the methodology can be
  published.
- Review whether external references are relevant and editorial, not merely
  high in count.

### Day 90

- Compare non-brand organic download starts against the pre-launch baseline.
- Consolidate pages if Search Console shows query cannibalization.
- Add a new page only when a distinct query and user task are visible in the
  data; do not generate thin app-specific pages.
