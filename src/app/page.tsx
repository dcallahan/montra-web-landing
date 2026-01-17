export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <main className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="max-w-container text-center">
          {/* Logo */}
          <h1 className="font-display text-display-lg text-charcoal mb-4">
            Montra Money
          </h1>

          {/* Tagline */}
          <p className="text-body-lg text-muted mb-8 max-w-xl mx-auto">
            Your AI-first personal finance companion
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-dark text-charcoal font-semibold px-7 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
              Start Free Trial
            </button>
            <button className="border-2 border-charcoal text-charcoal font-semibold px-7 py-3.5 rounded-md transition-all duration-200 hover:bg-charcoal hover:text-white">
              See How It Works
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-body-sm text-muted">
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
      </main>
    </div>
  );
}
