/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'sans-serif'],
      },
      colors: {
        'nav-menu': 'rgb(62 117 145)',
        'primary-color': '#265e78',
      },
    },
  },
  plugins: [],
}
