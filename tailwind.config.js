/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
        '8xl' : '88rem'
      },
      fontFamily : {
        'russo' : ['Russo One', 'Sans Serif'],
        'poppins' : ['Poppins', 'Sans Serif']
      }
    },
  },
  plugins: [],
}