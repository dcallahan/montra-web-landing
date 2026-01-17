import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <main className="pt-16">
        <section className="min-h-[calc(100vh-64px)] flex items-center bg-gradient-hero">
          <div className="max-w-container mx-auto px-6 py-20">
            <div className="max-w-2xl mx-auto text-center">
              {/* Overline */}
              <p className="text-overline text-primary-dark uppercase tracking-widest mb-4">
                AI-Powered Finance
              </p>

              {/* Headline */}
              <h1 className="text-display-lg md:text-display-xl text-charcoal mb-6 font-display">
                Finally, a money app that speaks your language
              </h1>

              {/* Subheadline */}
              <p className="text-body-lg text-muted mb-10 max-w-xl mx-auto">
                Meet your AI-powered financial companion. Ask questions, get answers,
                and take control of your family&apos;s finances—no spreadsheets required.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button variant="primary" size="lg" href="/get-started">
                  Start Free Trial
                </Button>
                <Button variant="secondary" size="lg" href="#how-it-works">
                  See How It Works
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-6 text-body-sm text-muted">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  Bank-level security
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  12,000+ banks supported
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  No credit card required
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display-md text-charcoal mb-4">
                Managing money shouldn&apos;t feel like a second job
              </h2>
              <p className="text-body-lg text-muted max-w-2xl mx-auto">
                We get it. Between work, family, and everything else, who has time
                to become a financial expert?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-heading-sm text-charcoal mb-3">
                  &ldquo;Where did all the money go?&rdquo;
                </p>
                <p className="text-body-md text-muted">
                  Just ask. Montra shows you exactly where every dollar went—in plain English.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-heading-sm text-charcoal mb-3">
                  &ldquo;Is this budget realistic?&rdquo;
                </p>
                <p className="text-body-md text-muted">
                  AI creates smart budgets based on your actual spending, not wishful thinking.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-heading-sm text-charcoal mb-3">
                  &ldquo;Are we on track for our goals?&rdquo;
                </p>
                <p className="text-body-md text-muted">
                  Get personalized insights and celebrate milestones along the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display-md text-charcoal mb-4">
                Everything you need to feel confident about money
              </h2>
              <p className="text-body-lg text-muted max-w-2xl mx-auto">
                No finance degree required. Just you and your questions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-surface rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-dark" />
                  </div>
                  <h3 className="text-heading-sm text-charcoal mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-body-sm text-muted">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-cta">
          <div className="max-w-container mx-auto px-6 text-center">
            <h2 className="text-display-md text-charcoal mb-4">
              Ready to feel confident about your money?
            </h2>
            <p className="text-body-lg text-charcoal-light mb-8 max-w-2xl mx-auto">
              Join thousands of families who&apos;ve transformed their relationship with money.
            </p>
            <Button variant="secondary" size="lg" href="/get-started">
              Start Your Free Trial
            </Button>
            <p className="text-body-sm text-charcoal-light mt-4">
              No credit card required. 14 days free.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Feature data
import { MessageCircle, PieChart, Target, Link, Calendar, Users } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "AI Financial Assistant",
    description:
      "Get instant answers like 'How much did we spend on groceries last month?' or 'Can we afford a weekend trip?'",
  },
  {
    icon: PieChart,
    title: "Smart Budgeting",
    description:
      "AI learns your patterns and creates realistic budgets. No more guilt-inducing categories.",
  },
  {
    icon: Target,
    title: "Savings Goals",
    description:
      "Set goals, track progress, and celebrate milestones. From emergency funds to family vacations.",
  },
  {
    icon: Link,
    title: "Bank Sync",
    description:
      "Securely connect 12,000+ banks. See your complete financial picture in seconds.",
  },
  {
    icon: Calendar,
    title: "Bill Tracking",
    description:
      "Automatic reminders and smart alerts keep you ahead of due dates.",
  },
  {
    icon: Users,
    title: "Family Sharing",
    description:
      "Invite your partner or family members. Everyone stays in sync.",
  },
];
