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
      "hover-bg-highlight": "#495968",
    },
    fontFamily: {
      roboto: "'Roboto', sans-serif",
    },
    borderColor: {
      borderColor: "rgb(47, 51, 54)",
      header: "rgb(29, 155, 240)",
    },
    colors: {
      "unhighlighted-color": "#6a6f74",
      white: "white",
      black: "black",
    },
    extend: {},
  },
  plugins: [],
};
