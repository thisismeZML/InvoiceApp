/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        primaryBgColor : "#333333",
        secondaryBgColor : "#dddddd",
        primaryTextColor : "#393939",
        secondaryTextColor : "#b9b9b9"
      }
    },
  },
  plugins: [],
}
