/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        accent: "hsl(var(--color-accent) / <alpha-value>)",
      },
    },
    fontFamily: {
      dmsans: ["DM Sans"],
      montserrat: ["Montserrat"],
    },
    screens: {
      xs: "180px",
      sm: "768px",
      md: "900px",
    },
  },
  plugins: [],
  darkMode: "class",
};
