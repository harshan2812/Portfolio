/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      bordercolor:{
        'bcolor':'rgb(26, 15, 67)'
      }
    },
    fontFamily:{
      'hero':'Tagesschrift'
    }
  },
  plugins: [],
}

