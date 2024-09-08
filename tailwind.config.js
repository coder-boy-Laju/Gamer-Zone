const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary": "#FF42A5",
        "gradient-1": "#F948B2",
        "gradient-2": "#8758F1",
        "blue": "#4EC5F7",
        "dim-gray": "#534C64",
        "deep-navy-blue": "#0B0223",
      },
    },
  },
  plugins: [],
};
