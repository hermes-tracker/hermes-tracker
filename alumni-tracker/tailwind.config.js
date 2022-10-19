/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './resources/**/*.{edge,html,js}',
    './resources/*.{edge,html,js}'
  ],
  theme: {
    extends: {
      colors: {
        cyan: colors.cyan,
      }
    }
  },
  plugins: [
  ],
}
