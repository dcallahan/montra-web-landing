# SEO & Content Strategy Specification

## SEO Goals

1. Rank for personal finance app keywords targeting women/families
2. Build organic traffic for budgeting/financial wellness queries
3. Establish brand authority in AI-powered finance space
4. Drive app downloads and trial signups

---

## Keyword Strategy

### Primary Keywords
| Keyword | Monthly Volume | Intent |
|---------|----------------|--------|
| personal finance app | 12,000 | Transactional |
| budgeting app for families | 2,400 | Transactional |
| ai finance assistant | 1,800 | Informational |
| family budget tracker | 3,600 | Transactional |
| money management app | 8,100 | Transactional |

### Long-tail Keywords (Lower Competition)
- "budgeting app for moms"
- "ai personal finance assistant"
- "family money management app"
- "simple budgeting app for beginners"
- "best app to track family spending"
- "budget app that asks questions"
- "no jargon finance app"
- "money app for busy parents"

### Brand Keywords
- "montra money"
- "montra app"
- "montra finance"

---

## On-Page SEO

### Title Tag Format
`[Page-Specific] | Montra Money - AI Personal Finance`

Examples:
- Homepage: `Montra Money - Your AI Personal Finance Companion`
- Features: `Features - Smart Budgeting & AI Insights | Montra Money`
- Pricing: `Simple Pricing - Start Free | Montra Money`

### Meta Descriptions
130-155 characters, include primary keyword, end with CTA

**Homepage:**
"Meet Montra Money: the AI-powered finance app for busy families. Ask questions, track spending, and reach goals—no spreadsheets needed. Try free today."

**Features:**
"Discover Montra's smart features: AI chat, automatic budgeting, goal tracking, and family sharing. Personal finance made simple. See all features."

**Pricing:**
"Start free, upgrade when ready. Montra Money offers simple pricing with a 14-day free trial. No credit card required. View pricing plans."

### Heading Structure (per page)
```
<h1> Single, keyword-rich (one per page)
  <h2> Major sections
    <h3> Subsections
      <h4> Feature details (if needed)
```

### URL Structure
- Lowercase, hyphenated
- Short and descriptive
- `/features`, `/pricing`, `/about`, `/help`
- Help articles: `/help/getting-started/connect-bank`

---

## Technical SEO

### Core Web Vitals Targets
| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| TTFB (Time to First Byte) | < 600ms |

### Implementation
- Next.js Image optimization
- Font preloading (Inter, Space Grotesk)
- Critical CSS inlining
- Lazy load below-fold images
- Static generation for all marketing pages
- Edge caching via Vercel

### Structured Data

**Organization (site-wide)**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Montra Money",
  "url": "https://montra.money",
  "logo": "https://montra.money/logo.png",
  "sameAs": [
    "https://twitter.com/montramoney",
    "https://instagram.com/montramoney"
  ]
}
```

**SoftwareApplication (homepage)**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Montra Money",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  }
}
```

**FAQPage (help/pricing)**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

**BreadcrumbList (all pages)**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

### Sitemap
Generate `sitemap.xml` with:
- All marketing pages
- Help articles
- Blog posts (future)
- Priority and lastmod tags

### Robots.txt
```
User-agent: *
Allow: /

Sitemap: https://montra.money/sitemap.xml

# Block internal paths
Disallow: /api/
Disallow: /_next/
```

### Canonical URLs
- Self-referencing canonicals on all pages
- Handle trailing slashes consistently (prefer no trailing)

---

## Open Graph & Social

### Default OG Tags
```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="Montra Money">
<meta property="og:locale" content="en_US">
```

### Per-Page OG Tags
```html
<meta property="og:title" content="[Page Title]">
<meta property="og:description" content="[Page Description]">
<meta property="og:image" content="[Page-specific or default image]">
<meta property="og:url" content="[Canonical URL]">
```

### OG Image Specs
- Size: 1200x630px
- Format: PNG or JPEG
- Brand consistent (mint background, logo, key message)
- Create variants for: homepage, features, pricing

### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@montramoney">
<meta name="twitter:creator" content="@montramoney">
```

---

## Content Strategy

### Homepage Content
- 500-800 words visible
- Natural keyword integration
- Benefit-focused headlines
- Scannable format (bullets, short paragraphs)

### Feature Pages
- 300-500 words per feature
- Use cases and examples
- Screenshots/mockups
- Internal links to related features

### Help Center
- Comprehensive FAQs
- Step-by-step tutorials
- Video guides (future)
- Search-optimized titles

### Future Blog Topics
Target informational keywords:
- "How to create a family budget"
- "Teaching kids about money"
- "Budget tips for busy moms"
- "How much emergency fund do I need"
- "Saving for college while paying mortgage"

---

## Local SEO (if applicable)
Not priority for SaaS, but consider:
- Google Business Profile (for brand queries)
- Consistent NAP if physical address exists

---

## Analytics & Tracking

### Required
- Google Analytics 4 (via GTM)
- Google Search Console
- Vercel Analytics

### Events to Track
- Page views
- CTA clicks (Start Trial, Sign In)
- Feature section views
- Pricing plan comparisons
- Help article reads
- Scroll depth

### Conversion Goals
1. Trial signup
2. Premium subscription
3. App download click

---

## Performance Checklist

- [ ] All pages have unique title tags
- [ ] All pages have meta descriptions
- [ ] All images have alt text
- [ ] Heading hierarchy is correct
- [ ] Internal links use descriptive anchor text
- [ ] External links open in new tab with rel="noopener"
- [ ] sitemap.xml is generated and submitted
- [ ] robots.txt is configured
- [ ] Structured data validates in Google Rich Results Test
- [ ] OG images are created for all pages
- [ ] Core Web Vitals pass in PageSpeed Insights
- [ ] Mobile-friendly test passes
- [ ] No broken links (check with crawler)
- [ ] HTTPS enforced with redirects
- [ ] www/non-www redirect configured

---

## Monitoring

### Weekly
- Search Console impressions/clicks
- Top performing queries
- Index coverage issues

### Monthly
- Keyword ranking changes
- Core Web Vitals scores
- Backlink profile
- Competitor analysis

### Tools
- Google Search Console
- Ahrefs or SEMrush (optional)
- PageSpeed Insights
- Rich Results Test
