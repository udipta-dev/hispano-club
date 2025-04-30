/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0052A3",
          success: "#28A745",
          grayText: "#6C757D",
          lightBg: "#F8F9FA",
          darkPrimary: "#003D7A",
        },
        fontFamily: {
          sans: ["'Open Sans'", "sans-serif"],
          heading: ["Montserrat", "sans-serif"],
        },
      },
    },
    plugins: [],
  };