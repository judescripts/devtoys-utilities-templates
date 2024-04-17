/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "wwwroot/**/*.{razor,html,cshtml}",
    "Components/**/*.{razor,html,cshtml}",
    "Styles/**/*.{razor,html,cshtml}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

