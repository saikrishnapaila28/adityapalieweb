import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#05080D",
        surface: {
          DEFAULT: "rgba(8, 10, 14, 0.78)",
          glass: "rgba(8, 10, 14, 0.78)",
          glassHover: "rgba(12, 15, 20, 0.85)",
          glassInner: "rgba(6, 7, 10, 0.78)",
          border: "rgba(255, 255, 255, 0.055)",
        },
        text: {
          primary: "#EEEEEE",
          secondary: "#B5B5B5",
          body: "#999999",
          muted: "#6F6F6F",
        },
        brand: {
          DEFAULT: "#27435F",
          50: "#f1f5f9",
          100: "#dde6ee",
          200: "#b8cbde",
          300: "#86a6c6",
          400: "#557fa9",
          500: "#27435F",
          600: "#1d3349",
          700: "#152434",
          800: "#0d1721",
          900: "#070c12",
        },
      },
      borderRadius: {
        "xl": "0.875rem",
        "2xl": "1.375rem",
        "3xl": "1.5rem",
      },
      fontFamily: {
        sans: ["Satoshi", "var(--font-inter-tight)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["Satoshi", "var(--font-inter-tight)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
        normal: "0",
        wide: "0.02em",
        wider: "0.08em",
        widest: "0.12em",
      },
      animation: {
        "marquee": "marquee 38s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
