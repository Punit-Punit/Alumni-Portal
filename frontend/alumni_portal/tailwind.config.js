/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 5px theme('colors.slate.200'), 0 0 20px theme('colors.slate.400')",
      },
    },
  },
  plugins: [require("daisyui")],
};
