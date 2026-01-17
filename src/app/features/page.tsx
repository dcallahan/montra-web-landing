import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import {
  MessageCircle,
  PieChart,
  Target,
  Link2,
  Calendar,
  Users,
  Sparkles,
  TrendingUp,
  Bell,
  Palette,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features - Smart Budgeting & AI Insights",
  description:
    "Discover Montra's smart features: AI chat, automatic budgeting, goal tracking, and family sharing. Personal finance made simple. See all features.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-container mx-auto px-6 text-center">
            <p className="text-overline text-primary-dark uppercase tracking-widest mb-4">
              Features
            </p>
            <h1 className="text-display-lg md:text-display-xl text-charcoal mb-6 font-display">
              Powerful features, simple experience
            </h1>
            <p className="text-body-lg text-muted max-w-2xl mx-auto">
              Everything you need to take control of your family&apos;s finances,
              without the complexity.
            </p>
          </div>
        </section>

        {/* Feature Sections */}
        {featureDetails.map((feature, index) => (
          <section
            key={feature.title}
            className={`py-20 ${index % 2 === 0 ? "bg-surface" : "bg-background"}`}
          >
            <div className="max-w-container mx-auto px-6">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary-dark" />
                  </div>
                  <h2 className="text-display-md text-charcoal mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-body-lg text-muted mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-body-md text-charcoal-light">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] bg-gradient-card rounded-2xl shadow-lg flex items-center justify-center">
                    <feature.icon className="w-20 h-20 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* All Features Grid */}
        <section className="py-20 bg-charcoal text-white">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display-md mb-4">And so much more</h2>
              <p className="text-body-lg text-white/60 max-w-2xl mx-auto">
                Packed with features designed for busy families.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-heading-sm mb-2">{feature.title}</h3>
                  <p className="text-body-sm text-white/60">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-cta">
          <div className="max-w-container mx-auto px-6 text-center">
            <h2 className="text-display-md text-charcoal mb-4">
              Ready to try these features?
            </h2>
            <p className="text-body-lg text-charcoal-light mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the difference.
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

const featureDetails = [
  {
    icon: MessageCircle,
    title: "AI Financial Assistant",
    description:
      "Ask anything about your money in plain English. Get instant, accurate answers without digging through transactions.",
    benefits: [
      "Natural language questions like 'How much did we spend eating out?'",
      "Smart insights based on your spending patterns",
      "Personalized suggestions to save more",
      "Available 24/7, no appointments needed",
    ],
  },
  {
    icon: PieChart,
    title: "Smart Budgeting",
    description:
      "Budgets that actually work. Our AI creates realistic budgets based on your real spending, not arbitrary limits.",
    benefits: [
      "Auto-categorizes your transactions",
      "Learns and adapts to your patterns",
      "Flexible categories that make sense",
      "No guilt—just helpful guidance",
    ],
  },
  {
    icon: Target,
    title: "Savings Goals",
    description:
      "Turn your dreams into achievable plans. Set goals, track progress, and celebrate every milestone along the way.",
    benefits: [
      "Visual progress tracking",
      "Milestone celebrations",
      "Smart saving suggestions",
      "Multiple goals at once",
    ],
  },
  {
    icon: Link2,
    title: "Bank Sync",
    description:
      "Connect all your accounts in one secure place. See your complete financial picture at a glance.",
    benefits: [
      "12,000+ supported banks",
      "Plaid-powered security",
      "Real-time balance updates",
      "Multiple account types supported",
    ],
  },
  {
    icon: Users,
    title: "Family Sharing",
    description:
      "Manage finances together. Invite your partner or family members to stay in sync on your financial goals.",
    benefits: [
      "Up to 4 family members",
      "Shared budgets and goals",
      "Individual spending insights",
      "Privacy controls",
    ],
  },
];

const additionalFeatures = [
  {
    icon: Calendar,
    title: "Bill Reminders",
    description: "Never miss a payment with smart alerts.",
  },
  {
    icon: TrendingUp,
    title: "Spending Trends",
    description: "See where your money goes over time.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified about unusual activity.",
  },
  {
    icon: Palette,
    title: "10+ Themes",
    description: "Customize your experience.",
  },
  {
    icon: BarChart3,
    title: "Financial Health Score",
    description: "Track your overall financial wellness.",
  },
  {
    icon: Sparkles,
    title: "AI Insights",
    description: "Discover savings opportunities.",
  },
  {
    icon: MessageCircle,
    title: "Chat History",
    description: "Review past conversations anytime.",
  },
  {
    icon: Target,
    title: "Goal Milestones",
    description: "Celebrate progress along the way.",
  },
];
