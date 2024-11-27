/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        popins: ["'Poppins', serif"], 
        barlow: ["'Barlow', serif"], 
      },
      colors: {
        primary: '#0f2454', 
        secondary: '#2095ae', 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}