const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
fontFamily:{
  manrope: [ "Manrope", ...defaultTheme.fontFamily.sans]
}

    },
  },
  plugins: [],
}

