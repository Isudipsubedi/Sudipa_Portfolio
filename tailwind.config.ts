import type { Config } from "tailwindcss";

/**
 * "Quiet luxury" tokens.
 * ink #0B0F19 obsidian · paper #F5F5F7 chalk · gold #D4AF37 champagne (on dark only)
 * gold-deep #7A5E17 (gold for text on paper, 5:1) · slate #8E8E93 (on dark) · stone #5B5B61 (on paper)
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0B0F19", 2: "#121726", 3: "#1B2131", line: "#262C3C" },
        paper: { DEFAULT: "#F5F5F7", 2: "#ECECEF", line: "#D9D9DE" },
        ivory: { DEFAULT: "#EFEAE1", line: "#DCD4C6" },
        gold: { DEFAULT: "#D4AF37", deep: "#7A5E17", soft: "#E9D9A6" },
        slate: "#8E8E93",
        stone: "#5B5B61",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Garamond", "Georgia", "serif"],
        sans: ['"Inter Variable"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: { frame: "1240px" },
      letterSpacing: { caps: "0.22em" },
      transitionTimingFunction: { institutional: "cubic-bezier(0.16, 1, 0.3, 1)" },
    },
  },
  plugins: [],
};
export default config;
