# Legal Pages Specification

## Overview

All legal pages must be:
- Written in plain, accessible language
- Legally compliant (consult attorney for final review)
- Mobile-friendly and readable
- Dated with "Last Updated" timestamp
- Versioned (keep history of changes)

---

## Privacy Policy (/privacy)

### Required Sections

#### 1. Introduction
- Who we are (Montra Money, company details)
- What this policy covers
- Commitment to privacy

#### 2. Information We Collect

**Information you provide:**
- Account data (email, name, password)
- Profile information (avatar, preferences)
- Financial goals and budget categories
- Messages sent to AI assistant
- Support communications

**Information from connected services:**
- Bank account data via Plaid (transactions, balances, account names)
- Authentication providers (Google, Apple) if used

**Automatically collected:**
- Device information (type, OS, browser)
- Usage data (features used, time in app)
- IP address
- Cookies and similar technologies

#### 3. How We Use Information

- Provide and improve the service
- Process transactions and sync accounts
- Power AI assistant responses
- Send service communications
- Analyze usage patterns
- Detect and prevent fraud
- Legal compliance

**We DO NOT:**
- Sell your personal data
- Share financial data with advertisers
- Use data for third-party marketing

#### 4. Data Sharing

**Service Providers:**
| Provider | Purpose | Data Shared |
|----------|---------|-------------|
| Plaid | Bank connections | Bank credentials, account access |
| Supabase | Database & Auth | All app data |
| OpenAI | AI responses | Anonymized queries |
| RevenueCat | Subscriptions | Payment status |
| Vercel | Hosting | Access logs |

**Legal Requirements:**
- Law enforcement requests
- Legal proceedings
- Safety concerns

#### 5. Data Security
- 256-bit encryption in transit and at rest
- Secure credential storage
- Regular security audits
- Employee access controls
- Incident response procedures

#### 6. Data Retention
- Active account: data retained while active
- Deleted account: 30-day grace period, then permanent deletion
- Anonymized analytics: retained indefinitely
- Legal holds: as required by law

#### 7. Your Rights

**All Users:**
- Access your data
- Correct inaccurate data
- Delete your account and data
- Export your data
- Opt out of marketing

**California Residents (CCPA):**
- Right to know
- Right to delete
- Right to opt-out of sale (we don't sell)
- Non-discrimination

**EU/UK Residents (GDPR):**
- All above rights
- Data portability
- Restrict processing
- Object to processing
- Lodge complaint with supervisory authority
- Legal basis: consent, contract, legitimate interest

#### 8. Children's Privacy
- Service not intended for under 13 (or 16 in EU)
- No knowingly collecting children's data
- Parental notification if discovered

#### 9. International Transfers
- Data stored in United States
- Standard contractual clauses for EU transfers
- Privacy Shield (if applicable)

#### 10. Changes to Policy
- Notice of material changes via email or in-app
- 30-day notice before changes take effect
- Continued use constitutes acceptance

#### 11. Contact
- Email: privacy@montra.money
- Address: [Company address]
- Data Protection Officer (if required)

---

## Terms of Service (/terms)

### Required Sections

#### 1. Acceptance of Terms
- Agreement to be bound
- Age requirement (18+ or 13+ with guardian)
- Capacity to enter agreement

#### 2. Description of Service
- What Montra Money provides
- AI assistant capabilities and limitations
- Bank connection features
- Not a replacement for professional financial advice

#### 3. Account Registration
- Accurate information required
- One account per person
- Account security responsibility
- Password requirements

#### 4. Subscription Terms

**Free Tier:**
- Features included
- Limitations

**Premium Subscription:**
- Features included
- Pricing (reference pricing page)
- Billing cycle (monthly/annual)
- Auto-renewal
- Price changes (30-day notice)

**Cancellation:**
- How to cancel
- Access until end of billing period
- No refunds for partial periods
- Refund policy for annual subscriptions

**Free Trial:**
- 14-day trial period
- Automatic conversion to paid
- Cancel anytime during trial

#### 5. Acceptable Use

**You agree NOT to:**
- Violate laws
- Infringe intellectual property
- Transmit malware
- Attempt unauthorized access
- Scrape or data mine
- Impersonate others
- Use for illegal financial activity
- Circumvent usage limits

#### 6. Financial Information Disclaimer

**IMPORTANT:**
- Montra is NOT a financial advisor
- AI responses are informational only
- Not investment, tax, or legal advice
- Users responsible for financial decisions
- Consult qualified professionals for advice

#### 7. Third-Party Services
- Plaid terms apply to bank connections
- App store terms apply to downloads
- Payment processor terms apply
- No liability for third-party services

#### 8. Intellectual Property
- Montra owns service, content, trademarks
- User retains ownership of user data
- Limited license to use service
- No reverse engineering

#### 9. User Content
- User responsible for content accuracy
- License granted to Montra to process data
- Right to remove violating content

#### 10. Privacy
- Reference to Privacy Policy
- Incorporation by reference

#### 11. Termination
- User can terminate anytime
- Montra can terminate for violations
- Effect of termination (data deletion)
- Surviving provisions

#### 12. Disclaimer of Warranties
- Service provided "AS IS"
- No warranty of accuracy
- No warranty of uninterrupted service
- No warranty of fitness for purpose

#### 13. Limitation of Liability
- Cap on damages (subscription fees paid)
- Exclusion of consequential damages
- Exclusion of financial losses from decisions

#### 14. Indemnification
- User indemnifies Montra
- For violations of terms
- For third-party claims

#### 15. Dispute Resolution
- Governing law (state)
- Arbitration clause (optional)
- Class action waiver (if arbitration)
- Venue for litigation

#### 16. Modifications
- Right to modify terms
- Notice of material changes
- Continued use = acceptance

#### 17. General Provisions
- Entire agreement
- Severability
- Waiver
- Assignment

#### 18. Contact
- Legal notices: legal@montra.money
- Address for formal notices

---

## Cookie Policy (/cookies)

### Required Sections

#### 1. What Are Cookies
- Plain language explanation
- Types: session, persistent, first-party, third-party

#### 2. Cookies We Use

| Cookie | Type | Purpose | Duration |
|--------|------|---------|----------|
| session_id | Essential | User authentication | Session |
| preferences | Functional | Remember settings | 1 year |
| _ga | Analytics | Usage tracking | 2 years |
| _gid | Analytics | Usage tracking | 24 hours |

**Categories:**

**Essential (Always Active):**
- Authentication
- Security
- Load balancing
- Cannot be disabled

**Functional:**
- Remember preferences
- Theme selection
- Language (future)

**Analytics:**
- Google Analytics
- Vercel Analytics
- Usage patterns
- Performance monitoring

**Marketing (if applicable):**
- Currently none
- Future: retargeting, attribution

#### 3. How to Manage Cookies

**Browser Settings:**
- Link to instructions for Chrome, Safari, Firefox, Edge

**Our Cookie Banner:**
- Accept all
- Reject non-essential
- Customize preferences
- Withdraw consent anytime

#### 4. Do Not Track
- Honor DNT signals (yes/no)
- GPC (Global Privacy Control) support

#### 5. Updates
- Policy may be updated
- Check "Last Updated" date

#### 6. Contact
- cookies@montra.money

---

## Cookie Consent Implementation

### Banner Requirements

**Initial State:**
- Shown on first visit
- Blocks non-essential cookies until consent
- Cannot be dismissed without choice

**Options:**
1. "Accept All" - enables all cookies
2. "Reject All" - only essential cookies
3. "Manage Preferences" - granular control

**Preference Center:**
- Toggle for each category
- Description of each category
- Save preferences button
- Close button

**Persistence:**
- Store consent in cookie (1 year)
- Re-ask after 1 year
- Allow changing preferences anytime

### Technical Implementation

```typescript
// Consent categories
type ConsentCategory = 'essential' | 'functional' | 'analytics' | 'marketing';

// Consent state
interface ConsentState {
  essential: true; // Always true
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
}

// Cookie name
const CONSENT_COOKIE = 'montra_consent';
```

**GTM Integration:**
- Use consent mode
- Block tags until consent granted
- Fire tags based on consent categories

---

## GDPR/CCPA Compliance Checklist

### GDPR (EU Users)
- [ ] Legal basis documented
- [ ] Consent is freely given, specific, informed
- [ ] Easy withdrawal of consent
- [ ] Data Processing Agreements with vendors
- [ ] Privacy by design implemented
- [ ] Data breach notification procedure
- [ ] DPO appointed (if required)
- [ ] Records of processing activities

### CCPA (California Users)
- [ ] "Do Not Sell" link in footer (even if not selling)
- [ ] Privacy policy discloses categories of PI
- [ ] 45-day response to requests
- [ ] Verification process for requests
- [ ] Train staff on handling requests

---

## Implementation Notes

### Page Layout
- Clean, readable typography
- Table of contents for long pages
- Accordion for sections (optional)
- Print-friendly styles
- Last updated date prominent

### Accessibility
- Heading hierarchy (h1, h2, h3)
- Skip links
- Sufficient contrast
- Keyboard navigable

### Version Control
- Keep previous versions accessible
- `/privacy/archive/2024-01-15`
- Link to previous versions from current

### Translation (Future)
- Prepare for multi-language
- Use i18n from start
- Store content in CMS or JSON
