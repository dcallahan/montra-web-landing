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
  Shield,
  Lock,
  Fingerprint,
  Eye,
  BadgeCheck,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-64px)] flex items-center bg-gradient-hero">
          <div className="max-w-container mx-auto px-6 py-20">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-overline text-primary-dark uppercase tracking-widest mb-4">
                AI-Powered Finance
              </p>

              <h1 className="text-display-lg md:text-display-xl text-charcoal mb-6 font-display">
                Finally, a money app that speaks your language
              </h1>

              <p className="text-body-lg text-muted mb-10 max-w-xl mx-auto">
                Meet your AI-powered financial companion. Ask questions, get answers,
                and take control of your family&apos;s finances—no spreadsheets required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button variant="primary" size="lg" href="/get-started">
                  Start Free Trial
                </Button>
                <Button variant="secondary" size="lg" href="#how-it-works">
                  See How It Works
                </Button>
              </div>

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
              {problemSolutions.map((item) => (
                <div
                  key={item.problem}
                  className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-heading-sm text-charcoal mb-3">
                    &ldquo;{item.problem}&rdquo;
                  </p>
                  <p className="text-body-md text-muted">{item.solution}</p>
                </div>
              ))}
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
                  <p className="text-body-sm text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-surface">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display-md text-charcoal mb-4">
                Get started in 3 minutes
              </h2>
              <p className="text-body-lg text-muted max-w-2xl mx-auto">
                No complicated setup. Just download, connect, and start asking.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Step number */}
                  <div className="w-12 h-12 rounded-full bg-primary text-charcoal font-display text-heading-md flex items-center justify-center mb-6">
                    {index + 1}
                  </div>

                  {/* Connector line (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-12 w-[calc(100%-48px)] h-0.5 bg-primary-light" />
                  )}

                  <h3 className="text-heading-md text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body-md text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display-md text-charcoal mb-4">
                Loved by busy families everywhere
              </h2>
              <p className="text-body-lg text-muted max-w-2xl mx-auto">
                Join thousands who&apos;ve transformed their relationship with money.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-surface rounded-lg p-8 shadow-sm"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-warning"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-body-md text-charcoal mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                      <span className="text-primary-dark font-semibold text-body-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-body-sm font-semibold text-charcoal">
                        {testimonial.name}
                      </p>
                      <p className="text-caption text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20 bg-charcoal text-white">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display-md mb-4">Your security is our priority</h2>
              <p className="text-body-lg text-white/60 max-w-2xl mx-auto">
                We use the same security standards as major banks to keep your data safe.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-heading-sm mb-2">{feature.title}</h3>
                  <p className="text-body-sm text-white/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Themes Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-overline text-primary-dark uppercase tracking-widest mb-4">
                  Personalization
                </p>
                <h2 className="text-display-md text-charcoal mb-4">
                  Make it yours
                </h2>
                <p className="text-body-lg text-muted mb-8">
                  Choose from 10+ beautiful themes that match your style. From Pretty
                  in Pink to Cozy Pastels, find the perfect look for your financial
                  dashboard.
                </p>
                <div className="flex flex-wrap gap-3">
                  {themes.map((theme) => (
                    <div
                      key={theme.name}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-background"
                    >
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.color }}
                      />
                      <span className="text-body-sm text-charcoal">{theme.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-card rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center text-muted">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <p className="text-body-sm">App Preview</p>
                  </div>
                </div>
              </div>
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
              Join thousands of families who&apos;ve transformed their relationship
              with money.
            </p>
            <Button variant="secondary" size="lg" href="/get-started">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
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

// Data
const problemSolutions = [
  {
    problem: "Where did all the money go?",
    solution:
      "Just ask. Montra shows you exactly where every dollar went—in plain English.",
  },
  {
    problem: "Is this budget realistic?",
    solution:
      "AI creates smart budgets based on your actual spending, not wishful thinking.",
  },
  {
    problem: "Are we on track for our goals?",
    solution:
      "Get personalized insights and celebrate milestones along the way.",
  },
];

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
    icon: Link2,
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
    description: "Invite your partner or family members. Everyone stays in sync.",
  },
];

const steps = [
  {
    title: "Connect your banks",
    description:
      "Securely link your accounts with Plaid, trusted by millions of users worldwide.",
  },
  {
    title: "Ask your first question",
    description:
      "Try 'What's my biggest expense?' or 'How much can I save this month?'",
  },
  {
    title: "Take control",
    description:
      "Get personalized insights and build better money habits, one conversation at a time.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Mom of 3, Marketing Manager",
    quote:
      "I used to dread looking at our bank accounts. Now I actually enjoy chatting with Montra about our money. It's like having a financial advisor who never judges me.",
  },
  {
    name: "Jennifer K.",
    role: "Working Mom, Teacher",
    quote:
      "Finally, an app that understands my busy life. I can check our budget while waiting at soccer practice. Game changer!",
  },
  {
    name: "Michelle T.",
    role: "Mom of 2, Nurse",
    quote:
      "The AI helped us find $400 in subscriptions we forgot about. Paid for itself in the first week!",
  },
];

const securityFeatures = [
  {
    icon: Shield,
    title: "256-bit Encryption",
    description: "Bank-level encryption protects your data in transit and at rest.",
  },
  {
    icon: Lock,
    title: "Secure Connections",
    description: "Plaid-powered bank links used by major financial apps.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Auth",
    description: "Face ID and fingerprint login for quick, secure access.",
  },
  {
    icon: Eye,
    title: "No Data Selling",
    description: "Your financial data is never sold to third parties. Ever.",
  },
];

const themes = [
  { name: "Mint Fresh", color: "#A8DFC4" },
  { name: "Pretty in Pink", color: "#F8B4D9" },
  { name: "Ocean Blue", color: "#7DD3FC" },
  { name: "Cozy Pastels", color: "#FDE68A" },
  { name: "Lavender", color: "#C4B5FD" },
];
