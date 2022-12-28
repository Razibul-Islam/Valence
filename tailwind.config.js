/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      secondary: "rgb(167 139 250)",
    },
  },
  plugins: [require("daisyui")],
};
