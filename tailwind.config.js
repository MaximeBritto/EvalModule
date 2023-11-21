/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
      extend: {
        borderRadius: {
          btnRadius: "50%",
        },
        colors: {
          "blackBg": "#141414",
          
          "whiteBg": {
            100: "#F7F7F7",
            200: "#FFFFFF",
          },
        },
      },
  },
  plugins: [],
  darkMode: "class",
};

