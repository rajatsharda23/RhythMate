/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#298CD6',
        customPink: '#F2BAE4',
      },
      fontFamily: {
        readex: ['Readex Pro','sans-serif'],
      },
    },
  },
  plugins: [],
}

