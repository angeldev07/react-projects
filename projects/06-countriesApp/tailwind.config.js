/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif']
      },
      backgroundColor: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue': 'hsl(207, 26%, 17%)',
        'very-ligth-gray': 'hsl(0, 0%, 98%)',
        'input-dark-gray': 'hsl(0, 0%, 52%)'
      },
      colors: {
        'ligth': 'hsl(200, 15%, 8%)'
      }
    },
  },
  plugins: [],
 darkMode: 'class'
}
