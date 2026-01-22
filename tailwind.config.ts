import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rocks theme colors
        rocks: {
          bg: "#0a0a0a",
          accent: "#10b981",
          secondary: "#00D4FF",
        },
        // Engineer theme colors
        engineer: {
          bg: "#FAFAFA",
          accent: "#0066CC",
          text: "#1a1a1a",
        },
        // Social theme colors
        social: {
          purple: "#8B5CF6",
          pink: "#EC4899",
          bg: "#fefefe",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
