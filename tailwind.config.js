/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'Dark-Blue': 'hsl(209, 23%, 22%)',
        'Very-Dark-Blue': 'hsl(207, 26%, 17%)',
        'Very-Dark-Black': 'hsl(200, 15%, 8%)',
        'Dark-Gray': 'hsl(0, 0%, 52%)',
        'Very-Light-Gray': 'hsl(0, 0 % , 98 % )',
        'White': 'hsl(0, 0 % , 100 % )',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
