/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        bebasNeue: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        'ferrariRed': 'rgb(255,40,2)',
        'darkerFerrariRed': 'rgb(237,38,3)',
        'ferrariYellow': 'rgb(255,242,0)',
        'darkGGray': 'rgb(31, 31, 31)',
        'lightGray': 'rgb(235, 235, 235)'
      }
    },
  },
  plugins: [],
}

