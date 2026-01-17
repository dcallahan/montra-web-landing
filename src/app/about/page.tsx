import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Heart, Shield, Sparkles, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Our Story",
  description:
    "Learn about Montra Money's mission to make personal finance accessible for busy families. We believe everyone deserves financial peace of mind.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-container mx-auto px-6 text-center">
            <p className="text-overline text-primary-dark uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1 className="text-display-lg md:text-display-xl text-charcoal mb-6 font-display">
              We believe everyone deserves financial peace of mind
            </h1>
            <p className="text-body-lg text-muted max-w-2xl mx-auto">
              Montra Money was born from a simple idea: managing your family&apos;s
              finances shouldn&apos;t require a finance degree.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-display-md text-charcoal mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg text-muted space-y-6">
                <p className="text-body-lg">
                  Like many families, we struggled with the complexity of personal
                  finance. Spreadsheets felt overwhelming. Traditional budgeting apps
                  were either too simplistic or required hours of manual entry.
                </p>
                <p className="text-body-lg">
                  We wanted something different—an app that could answer questions
                  like &ldquo;Can we afford a family vacation this summer?&rdquo; without
                  requiring us to become spreadsheet experts.
                </p>
                <p className="text-body-lg">
                  That&apos;s why we built Montra. An AI-first approach to personal
                  finance that speaks your language, understands your life, and helps
                  you make confident financial decisions—all without the jargon.
                </p>
                <p className="text-body-lg">
                  Today, Montra helps thousands of families take control of their
                  money with simple conversations, smart insights, and features
                  designed for real life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display-md text-charcoal mb-4">Our Values</h2>
              <p className="text-body-lg text-muted max-w-2xl mx-auto">
                The principles that guide everything we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-surface rounded-lg p-8 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary-dark" />
                  </div>
                  <h3 className="text-heading-md text-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-body-md text-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-charcoal text-white">
          <div className="max-w-container mx-auto px-6 text-center">
            <h2 className="text-display-md mb-6">Our Mission</h2>
            <p className="text-heading-lg text-white/80 max-w-3xl mx-auto font-normal leading-relaxed">
              To empower every family to feel confident and in control of their
              financial future, regardless of their financial background or
              expertise.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-container mx-auto px-6">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-display-lg text-primary font-display mb-2">
                    {stat.value}
                  </p>
                  <p className="text-body-md text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-cta">
          <div className="max-w-container mx-auto px-6 text-center">
            <h2 className="text-display-md text-charcoal mb-4">
              Join our mission
            </h2>
            <p className="text-body-lg text-charcoal-light mb-8 max-w-2xl mx-auto">
              Be part of a community that&apos;s transforming how families manage
              their money.
            </p>
            <Button variant="secondary" size="lg" href="/get-started">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const values = [
  {
    icon: Heart,
    title: "Approachable over intimidating",
    description:
      "Finance doesn't have to be scary. We use plain language, friendly design, and supportive guidance to make money management feel accessible to everyone.",
  },
  {
    icon: Sparkles,
    title: "AI that helps, not replaces",
    description:
      "Our AI is designed to assist and educate, not make decisions for you. We empower you with insights so you can make confident choices.",
  },
  {
    icon: Shield,
    title: "Privacy first",
    description:
      "Your financial data is sacred. We use bank-level security, never sell your data, and give you full control over your information.",
  },
  {
    icon: Users,
    title: "Inclusive by design",
    description:
      "We build for real families with diverse backgrounds, needs, and financial situations. Everyone deserves tools that work for them.",
  },
];

const stats = [
  { value: "50K+", label: "Families using Montra" },
  { value: "$2M+", label: "Saved by our users" },
  { value: "4.8", label: "Average app rating" },
];
