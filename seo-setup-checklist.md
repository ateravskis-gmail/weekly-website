# SEO setup checklist (manual steps)

Complete these after deploying the site to https://getweekly.io.

## Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add property: **URL prefix** `https://getweekly.io` (or **Domain** `getweekly.io` for DNS verification).
3. Verify ownership:
   - **DNS (recommended):** Add the TXT record Google provides at your domain registrar (same place as the GitHub Pages CNAME).
   - **HTML file:** Download the verification file and place it in this repo root, then deploy.
4. Submit sitemap: `https://getweekly.io/sitemap.xml`
5. **URL Inspection** → enter `https://getweekly.io/` → **Request indexing**
6. Repeat URL Inspection for `https://getweekly.io/privacy.html` and `https://getweekly.io/terms.html`
7. Monitor **Pages**, **Core Web Vitals**, and **Enhancements** weekly

## Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Import site from Google Search Console, or add `https://getweekly.io` and verify (DNS or HTML).
3. Submit `https://getweekly.io/sitemap.xml`

## Analytics (Google Analytics 4)

GA4 is wired via [`analytics.js`](analytics.js) on all public pages.

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com) (if you have not already).
2. Add a **Web** data stream for `https://getweekly.io`.
3. Copy the **Measurement ID** (format `G-XXXXXXXXXX`).
4. Open [`analytics.js`](analytics.js) and replace `G-XXXXXXXXXX` with your ID.
5. Deploy, then visit the site and check **Reports → Realtime** in GA4.

Tracked automatically:
- Page views on `index.html`, `privacy.html`, and `terms.html`
- `sign_up` events when visitors click Login / Signup or Get Started links (via `data-ga-event`)

### Plausible (privacy-friendly alternative)

If you prefer Plausible instead of GA4, remove the `analytics.js` script tags from the HTML files and follow Plausible's embed instructions instead.

## Post-deploy validation

| Tool | URL |
|------|-----|
| PageSpeed Insights | https://pagespeed.web.dev/?url=https://getweekly.io |
| Rich Results Test | https://search.google.com/test/rich-results?url=https://getweekly.io |
| Facebook Sharing Debugger | https://developers.facebook.com/tools/debug/?q=https://getweekly.io |

**Targets:** Mobile Performance ≥ 85, LCP &lt; 2.5s, structured data valid with no errors.
