import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Montra Money - Your AI Personal Finance Companion",
    template: "%s | Montra Money",
  },
  description:
    "Meet Montra Money: the AI-powered finance app for busy families. Ask questions, track spending, and reach goals—no spreadsheets needed. Try free today.",
  keywords: [
    "personal finance app",
    "budgeting app for families",
    "ai finance assistant",
    "family budget tracker",
    "money management app",
    "budgeting app for moms",
  ],
  authors: [{ name: "Montra Money" }],
  creator: "Montra Money",
  metadataBase: new URL("https://montra.money"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://montra.money",
    siteName: "Montra Money",
    title: "Montra Money - Your AI Personal Finance Companion",
    description:
      "Meet Montra Money: the AI-powered finance app for busy families. Ask questions, track spending, and reach goals—no spreadsheets needed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Montra Money - AI Personal Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@montramoney",
    creator: "@montramoney",
    title: "Montra Money - Your AI Personal Finance Companion",
    description:
      "Meet Montra Money: the AI-powered finance app for busy families. Ask questions, track spending, and reach goals—no spreadsheets needed.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
