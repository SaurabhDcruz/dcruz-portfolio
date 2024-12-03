/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff4500", // Custom primary color
        secondary: '', // Custom secondary color
        // You can add more custom colors here
      },
      screens: {
        xs: { min: "310px", max: "639px" },
        // => @media (min-width: 360px) { ... }
      },
    },
  },
  plugins: [],
}

