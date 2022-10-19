/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
};
