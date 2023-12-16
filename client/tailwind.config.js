/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]', "className"],
  theme: {
    backgroundColor: {
      light: "white",
      dark: "black",
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
