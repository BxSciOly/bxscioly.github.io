const { default: NoWorkResult } = require('postcss/lib/no-work-result');
const { FaLightbulb } = require('react-icons/fa');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '3': '3deg'
      }
    },
  },
  plugins: [],
}
