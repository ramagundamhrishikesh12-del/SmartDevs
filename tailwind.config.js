/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38aaf7',
          500: '#0e8fe6',
          600: '#0272c4',
          700: '#035ba0',
          800: '#074d84',
          900: '#0c416e',
          950: '#082949',
        },
        slate: {
          850: '#151e2e',
          925: '#0b111e',
        }
      },
    },
  },
  plugins: [],
}
