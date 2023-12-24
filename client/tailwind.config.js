/** @type {import('tailwindcss').Config} */
// import tailwindForms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]', "className"],
  theme: {
    extend: {
      backgroundColor: {
        light: "white",
        dark: "black",
        "accent-dark": "#16181C",
        "hover-dark": "#080808",
        "btn-dark": "#1D9BF0",
        "hover-bg-highlight": "#495968",
        dropdownHoverBg: "#84c0f2",
        commentHoverBg: "#050f18",
        modalBackdrop: "rgba(91, 112, 131, 0.4)",
        retweetHoverBg: "#071a14",
        likeHoverBg: "#200914",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      borderColor: {
        borderColor: "rgb(47, 51, 54)",
        header: "rgb(29, 155, 240)",
        subscribeBtnColor: "rgb(201, 54, 204)",
      },
      colors: {
        "unhighlighted-color": "#6a6f74",
        commentHoverText: "#2887d0",
        white: "white",
        black: "black",
        retweetHoverText: "#00ba7c",
        likeHoverText: "#de1672",
        subscribeBtnColor: "rgb(201, 54, 204)",
      },
    },
  },
  plugins: [
    // tailwindForms
  ],
};
