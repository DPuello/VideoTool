/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1700px", // desktop
        xl: "1440px", // desktop
        lg: "1025px", // laptop
        md: "768px", // tablet
        sm: "640px", // big mobile
        xs: "480px", // medium mobile
        xxs: "300px", // small mobile
      },
      colors: {
        main: "#4A00FF",
        grayLight: "#F4F4F4",
        gray:"#D8D8D8",
        grayDark: "#B2B2B2",
      },
    },
  },
  plugins: [],
}

