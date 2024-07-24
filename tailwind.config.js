/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        "proxima":"Proxima Nova Bold,sans-serif"
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}