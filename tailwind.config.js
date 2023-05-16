const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        inner:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      },
      fontFamily: {
        monte: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        cedar: ['"Cedarville Cursive"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
