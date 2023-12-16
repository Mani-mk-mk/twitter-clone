/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-mode="dark"], className'],
  theme: {
    backgroundColor: {
      light: "white",
      dark: "rgba(0, 0, 0, 0.0)",
      "accent-dark": "#16181C",
      "hover-dark": "#080808",
      "btn-dark": "#1D9BF0",
    },
    fontFamily: {
      roboto: "'Roboto', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
