/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '3': '3deg'
      },
      backgroundImage: {
        'rocket': 'url("/src/images/landing-bg.jpeg");', 
      } 
    },
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
      slab: ['Josefin Slab', 'serif']
    },

  },
  plugins: [],
}
