/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#2C3E50",
          secondary: "#34495E",
          tertiary: "#7F8C8D",
        },
        text: {
          primary: "#ECF0F1",
          secondary: "#BDC3C7",
          accent: "#E74C3C",
        },
      }
      
    },
  },
  plugins: [],
}