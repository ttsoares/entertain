// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,jsx,ts,tsx,css}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        outfl: ["outfl", "sans-serif"],
        outfm: ["outfm", "sans-serif"],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
      colors: {
        cubg1: "rgba(var(--color-cubg1), <alpha-value>)",
        cubg2: "rgba(var(--color-cubg2), <alpha-value>)",
        cuins: "rgba(var(--color-cuins), <alpha-value>)",
        cuist: "rgba(var(--color-cuist), <alpha-value>)",
        cuclr: "rgba(var(--color-cuclr), <alpha-value>)",
        cured: "rgba(var(--color-cured), <alpha-value>)",
        tggbg: "rgba(var(--color-tglbg), <alpha-value>)",
        tggfg: "rgba(var(--color-cured), <alpha-value>)",
      },
    },
  },
  variants: {},
  plugins: [],
};
