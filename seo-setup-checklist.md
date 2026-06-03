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

## Analytics (choose one)

### Google Analytics 4

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com).
2. Copy the Measurement ID (format `G-XXXXXXXXXX`).
3. Add before `</head>` in `index.html`, `privacy.html`, and `terms.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

4. Update the Privacy Policy (Section 1.2 / service providers) to mention Google Analytics if enabled.

### Plausible (privacy-friendly alternative)

1. Sign up at [plausible.io](https://plausible.io) and add `getweekly.io`.
2. Add the script snippet Plausible provides to the same three HTML files.

## Post-deploy validation

| Tool | URL |
|------|-----|
| PageSpeed Insights | https://pagespeed.web.dev/?url=https://getweekly.io |
| Rich Results Test | https://search.google.com/test/rich-results?url=https://getweekly.io |
| Facebook Sharing Debugger | https://developers.facebook.com/tools/debug/?q=https://getweekly.io |

**Targets:** Mobile Performance ≥ 85, LCP &lt; 2.5s, structured data valid with no errors.
