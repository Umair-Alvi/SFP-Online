/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: '#00788b',
          50: '#eef6f7',
          100: '#d0eaed',
          200: '#a1d4dd',
          300: '#70bdcf',
          400: '#3e9ebd',
          500: '#00788b',
          600: '#005c6d',
          700: '#004753',
          800: '#00333a',
          900: '#001b23',
        },
      },
    },
  },
  plugins: [],
}
// tailwind.config.js



