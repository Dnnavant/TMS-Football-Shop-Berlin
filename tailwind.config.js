/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#B22234',
          blue: '#0A3161',
          white: '#FFFFFF',
        },
        primary: '#B22234',
        secondary: '#0A3161',
      },
    },
  },
  plugins: [],
};
