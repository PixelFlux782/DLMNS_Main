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
        ink: "#05070b",
        "ink-soft": "#0a1018",
        "line-soft": "rgba(148, 163, 184, 0.16)",
        "dlmns-cyan": "#6ee7f9",
        "dlmns-blue": "#2563eb"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        panel: "0 24px 80px rgba(0, 0, 0, 0.32)"
      }
    }
  },
  plugins: []
};

export default config;
