import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Check, HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Simple Pricing - Start Free",
  description:
    "Start free, upgrade when ready. Montra Money offers simple pricing with a 14-day free trial. No credit card required. View pricing plans.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-container mx-auto px-6 text-center">
            <p className="text-overline text-primary-dark uppercase tracking-widest mb-4">
              Pricing
            </p>
            <h1 className="text-display-lg md:text-display-xl text-charcoal mb-6 font-display">
              Simple, transparent pricing
            </h1>
            <p className="text-body-lg text-muted max-w-2xl mx-auto">
              Start free. Upgrade when you&apos;re ready. No hidden fees, no surprises.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-surface">
          <div className="max-w-container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Free Tier */}
              <div className="bg-background rounded-2xl p-8 shadow-sm border border-charcoal/5">
                <h3 className="text-heading-lg text-charcoal mb-2">Free</h3>
                <p className="text-body-md text-muted mb-6">
                  Perfect for getting started
                </p>
                <div className="mb-6">
                  <span className="text-display-md text-charcoal">$0</span>
                  <span className="text-body-md text-muted">/month</span>
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/get-started"
                  className="w-full mb-8"
                >
                  Get Started
                </Button>
                <ul className="space-y-4">
                  {freeTierFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-body-md text-charcoal-light">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Premium Tier */}
              <div className="bg-charcoal rounded-2xl p-8 shadow-lg relative overflow-hidden">
                {/* Popular badge */}
                <div className="absolute top-4 right-4 bg-primary text-charcoal text-caption font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>

                <h3 className="text-heading-lg text-white mb-2">Premium</h3>
                <p className="text-body-md text-white/60 mb-6">
                  For families serious about their finances
                </p>
                <div className="mb-2">
                  <span className="text-display-md text-white">$9.99</span>
                  <span className="text-body-md text-white/60">/month</span>
                </div>
                <p className="text-body-sm text-primary mb-6">
                  or $79/year (save 34%)
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  href="/get-started"
                  className="w-full mb-8"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <ul className="space-y-4">
                  {premiumTierFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-body-md text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display-md text-charcoal mb-4">
                Frequently asked questions
              </h2>
              <p className="text-body-lg text-muted max-w-2xl mx-auto">
                Everything you need to know about our pricing.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-surface rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-heading-sm text-charcoal mb-2 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-body-md text-muted pl-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-cta">
          <div className="max-w-container mx-auto px-6 text-center">
            <h2 className="text-display-md text-charcoal mb-4">
              Try Premium free for 14 days
            </h2>
            <p className="text-body-lg text-charcoal-light mb-8 max-w-2xl mx-auto">
              No credit card required. Cancel anytime. Experience all premium
              features risk-free.
            </p>
            <Button variant="secondary" size="lg" href="/get-started">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const freeTierFeatures = [
  "1 bank connection",
  "10 AI questions/month",
  "Basic budgeting",
  "1 savings goal",
  "Standard themes",
];

const premiumTierFeatures = [
  "Unlimited bank connections",
  "Unlimited AI questions",
  "Smart budgeting with categories",
  "Unlimited goals with milestones",
  "All 10+ premium themes",
  "Family sharing (up to 4 members)",
  "Priority support",
  "Financial health score",
  "Bill tracking & reminders",
  "Spending analytics & trends",
];

const faqs = [
  {
    question: "Can I try Premium before paying?",
    answer:
      "Yes! Every new user gets a 14-day free trial of all Premium features. No credit card required to start.",
  },
  {
    question: "What happens after my trial ends?",
    answer:
      "If you don't upgrade, you'll automatically move to the Free plan. You won't lose any data—you just won't have access to Premium features.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time. You'll keep access to Premium features until the end of your billing period.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. We use Stripe for payment processing, which is PCI compliant. We never store your full credit card number.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a full refund within the first 30 days if you're not satisfied. For annual subscriptions, we'll refund the prorated amount.",
  },
  {
    question: "Can I switch between monthly and annual billing?",
    answer:
      "Yes, you can switch at any time. If you switch to annual, you'll get the discounted rate immediately.",
  },
];
