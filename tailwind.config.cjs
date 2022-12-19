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
        secondaryBgColor: "#f5f5f5",

        dividerColor: "#e0e0e0",
        greenOnline: "#00c853",
        happyBlue: "#0091ea",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
