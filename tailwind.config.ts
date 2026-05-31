import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1a1a1a",
        paper: "#fafaf8",
        line: "#e5e3dd",
      },
      fontFamily: {
        sans: ["var(--font-plex-arabic)", "Geeza Pro", "Segoe UI", "Tahoma", "sans-serif"],
      },
      fontSize: {
        base: ["16px", { lineHeight: "1.8" }],
        heading: ["20px", { lineHeight: "1.4" }],
        title: ["32px", { lineHeight: "1.3" }],
      },
    },
  },
  plugins: [],
};
export default config;
