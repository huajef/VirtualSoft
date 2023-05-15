/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx.vue}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#7c01ff',
        'primary-color-alt': '#6301cc',
        'black-opacity': 'rgba(0,0,0, .5)'
      }
    },
  },
  plugins: [],
}

