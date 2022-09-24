/** @type {import('tailwindcss').Config} */
// module.exports = {
//   mode: "jit",
//   purge: ["./**/*.html"],
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  // mode: "jit",
  mode: process.env.NODE_ENV ? "jit" : undefined,
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  // purge: ["./**/*.html"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primaryLight: "#4693AD",
        primary: "#1C2AAF",
        primaryDark: "#0E1879",
        textLight: "#D1D6FE",
        textBg: "#2B37BD",
        textDark: "#5C6086",
        bodyDark: "#E9ECFF",

        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "button-accent": "var(--color-button-accent)",
        },
      },

      fontFamily: {
        head: ["poppins"],
        body: ["noto sans"],
        topic: [
          "SF Pro Display",
          "SF Pro Icons",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        scoop: "0 -50px 0 0 #1C2AAF",
        troop: "0 50px 0 0 #D1D6FE",
        droop: "0 50px 0 0 #FFFFFF",
      },
      borderRadius: {
        "4xl": "3.5rem",
        "5xl": "4rem",
        "6xl": "4.5rem",
        "7xl": "5rem",
      },
      transitionTimingFunction: {
        "menu-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      boxShadow: {
        inner: "inset 0 0 7px 0 rgba(0, 0, 0, 0.7)",
      },
      screens: {
        vsm: { max: "450px" },
        minSm: { min: "450px" },
        minMd: { min: "650px" },
        mdX: { max: "650px" },
      },
    },
  },
  plugins: ["tailwindcss"],
};
