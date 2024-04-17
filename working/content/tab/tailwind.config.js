/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "Components/**/*.{razor,html,cshtml}",
    "wwwroot/**/*.{razor,html,cshtml}",
    "Styles/**/*.{razor,html,cshtml}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

