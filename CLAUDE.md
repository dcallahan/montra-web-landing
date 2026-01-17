# Montra Money Landing Page

## Project Overview
Next.js 16 landing page for Montra Money - an AI-first personal finance app targeting women 25-45 managing family finances.

**Tagline:** "Your AI-first personal finance companion"
**Repo:** github.com/dcallahan/montra-web-landing
**Branches:** main (prod), dev (development)

## Tech Stack
- Next.js 16 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Deployed on Vercel

## Design System

### Colors
```
Primary Mint:    #A8DFC4  (CTAs, accents)
Mint Dark:       #7DCAB0  (hover states)
Mint Light:      #D4F0E3  (backgrounds, chips)
Charcoal:        #1A1F24  (headlines, primary text)
Charcoal Light:  #3D4852  (secondary text)
Background:      #F7F9F8  (page background)
Surface:         #FFFFFF  (cards)
Muted Grey:      #677487  (body text)
Success:         #94D3A2
Warning:         #F5C17D
Error:           #E07A5F
```

### Typography
- **Headlines:** Inter, 600-700 weight
- **Body:** Inter, 400-500 weight
- **Logo:** Space Grotesk (wordmark only)

### Spacing
8dp grid: 8, 16, 24, 32px increments

### Border Radius
- Buttons: 12px
- Cards: 16px
- Inputs: 20px
- Pills/chips: 999px

## Target Audience
Women 25-45 who:
- Manage household finances
- Want approachable, jargon-free financial guidance
- Value AI-powered insights over complex dashboards
- Seek work-life-money balance

## Voice & Tone
- Warm, empowering, conversational
- No finance jargon
- Supportive, not intimidating
- Focus on family financial wellness

## Pages

### Homepage (/)
1. Hero - tagline, CTA, app preview
2. Features - AI chat, budgeting, goals, bank sync
3. Social proof - testimonials
4. Pricing/CTA
5. Footer

### Additional Pages
- /features - detailed feature breakdown
- /pricing - subscription tiers
- /about - company story
- /privacy - privacy policy
- /terms - terms of service
- /cookies - cookie policy
- /help - knowledge base / FAQ
- /signin - authentication

## Key Features to Highlight
1. AI Chat (Perplexity-style financial Q&A)
2. Smart Budgeting (auto-categorization)
3. Savings Goals (milestones, tracking)
4. Bank Sync (Plaid integration)
5. Family Sharing (household accounts)
6. Financial Health Score
7. Bill Tracking
8. 10+ Custom Themes

## SEO Requirements
- Meta tags, Open Graph, Twitter Cards
- Structured data (Organization, SoftwareApplication)
- Semantic HTML
- Core Web Vitals optimized
- Sitemap.xml, robots.txt

## Specs
See `/specs/` directory:
- `design-system.md` - complete design tokens
- `pages.md` - page structure and content
- `seo.md` - SEO strategy
- `legal.md` - legal page requirements

## Commands
```bash
npm run dev      # development
npm run build    # production build
npm run lint     # eslint
```

## File Structure
```
src/
├── app/           # Next.js pages
├── components/    # React components
│   ├── ui/        # Base components
│   ├── sections/  # Page sections
│   └── layout/    # Layout components
├── lib/           # Utilities
└── styles/        # Global styles
```

## Guidelines
- Mobile-first responsive design
- Accessibility (WCAG 2.1 AA)
- Animate sparingly (prefer CSS transitions)
- Images: WebP with fallbacks, lazy load
- No tracking without cookie consent
