/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        eco_green: '#69A625',
        eco_green_hover: '#4a751a',
        eco_blue: '#3A90C3',
        eco_blue_hover: '#206a96',
        eco_white: '#ECECEC',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
}
