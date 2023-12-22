/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      dela: ['Monsieur La Doulaise', 'cursive'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      radialGradientColors: theme => theme('colors'),
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}
