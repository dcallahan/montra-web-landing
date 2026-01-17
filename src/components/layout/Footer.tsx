import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/download", label: "Download" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/careers", label: "Careers" },
      { href: "/press", label: "Press" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/cookies", label: "Cookies" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { href: "/help", label: "Help Center" },
      { href: "/contact", label: "Contact" },
      { href: "/status", label: "Status" },
    ],
  },
};

const socialLinks = [
  { href: "https://twitter.com/montramoney", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com/montramoney", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com/company/montramoney", icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-container mx-auto px-6 py-16">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-heading-md text-white">
                Montra
              </span>
            </Link>
            <p className="text-body-sm text-white/60 mb-6 max-w-xs">
              Your AI-first personal finance companion. Helping families take control of their money.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-body-sm font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-white/10 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption text-white/40">
            &copy; {currentYear} Montra Money. All rights reserved.
          </p>
          <p className="text-caption text-white/40">
            Made with care for families everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
