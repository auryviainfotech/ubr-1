import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#020617",
          800: "#02091f",
          700: "#020b2b"
        },
        gold: {
          300: "#ffe1a6",
          400: "#f5d08a",
          500: "#d4af37"
        }
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(245, 208, 138, 0.35)"
      },
      backgroundImage: {
        "navy-gradient":
          "radial-gradient(circle at top, rgba(245,208,138,0.12), transparent 55%), radial-gradient(circle at bottom, rgba(15,23,42,0.95), #020617)",
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem"
      }
    },
  },
  plugins: [],
};

export default config;

