/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        'mobile': {'min': '400px', 'max': '767px'},
      },
      fontFamily: {
        'sans': 'Poppins, sans-serif'
      },
      colors: {
        'title': '#fffcf9',
        'subtitle': '#b3b3b3',
        'button': '#e9e6e3'
      }
    },
  },
  plugins: [],
}
