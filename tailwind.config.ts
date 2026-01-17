import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: "#A8DFC4",
          dark: "#7DCAB0",
          light: "#D4F0E3",
        },
        // Neutral colors
        charcoal: {
          DEFAULT: "#1A1F24",
          light: "#3D4852",
        },
        muted: "#677487",
        light: "#9CA3AF",
        background: "#F7F9F8",
        surface: "#FFFFFF",
        // Semantic colors
        success: "#94D3A2",
        warning: "#F5C17D",
        error: "#E07A5F",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-lg": ["3rem", { lineHeight: "1.15", fontWeight: "700" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-lg": ["1.75rem", { lineHeight: "1.3", fontWeight: "600" }],
        "heading-md": ["1.375rem", { lineHeight: "1.35", fontWeight: "600" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        caption: ["0.75rem", { lineHeight: "1.4", fontWeight: "500" }],
        overline: ["0.75rem", { lineHeight: "1.4", fontWeight: "600", letterSpacing: "0.1em" }],
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "8": "32px",
        "10": "40px",
        "12": "48px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(20, 40, 120, 0.05)",
        md: "0 4px 12px rgba(20, 40, 120, 0.08)",
        lg: "0 8px 24px rgba(20, 40, 120, 0.12)",
        xl: "0 16px 48px rgba(20, 40, 120, 0.16)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "300ms",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      maxWidth: {
        container: "1200px",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #F7F9F8 0%, #D4F0E3 100%)",
        "gradient-cta": "linear-gradient(135deg, #A8DFC4 0%, #7DCAB0 100%)",
        "gradient-card": "linear-gradient(180deg, #FFFFFF 0%, #F7F9F8 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
