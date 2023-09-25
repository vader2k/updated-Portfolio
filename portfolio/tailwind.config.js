/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        golden: "#f2dbc6",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Abril: ['Abril Fatface', 'cursive'],
        Aladin: ['Aladin', 'cursive']
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
