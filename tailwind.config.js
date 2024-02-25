/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.8rem",
        md: "1rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "sans-serif"],
        barlow: ["Barlow", "barlow"],
      },
      colors: {
        primary: "#ffde5f",
        secondary: "#e7d6f9",
      },
    },
  },
  plugins: [],
};
