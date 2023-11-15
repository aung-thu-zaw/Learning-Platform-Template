/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],

  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: "#0EA5E9",
        dark: "#0F172A",
        mid: "#CBD5E1",
        light: "#F8FAFC",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
