/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CBD5E1",
        grey: "#999999",
        ItemList: "#E8EAF5",
        icon: "#616161",
        modal: "rgba(0, 0, 0, 0.3)"
      }
    },
  },
  plugins: [],
}
