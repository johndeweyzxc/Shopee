/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FB5533",
        secondaryColor: "#C4001D",
        textColor: "#000000",
        secondaryTextColor: "#616161",
        primaryBgColor: "#FFFFFF",
        dividerColor: "#e0e0e0",

        greenBg: "#00c853",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
