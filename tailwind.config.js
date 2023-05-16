const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      fontFamily: {
        monte: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        cedar: ['"Cedarville Cursive"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
