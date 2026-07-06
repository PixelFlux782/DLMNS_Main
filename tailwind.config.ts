import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f6f1e8",
        graphite: "#202822",
        forest: "#243a31",
        sage: "#b9c6a8",
        "sage-dark": "#6d7d5f",
        brass: "#a9814a",
        "blue-accent": "#1f73b7"
      },
      fontFamily: {
        sans: ["Aptos", "Segoe UI", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(36, 58, 49, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
