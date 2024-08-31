/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'false',
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant", serif'], // Cormorant font
        libre: ['"Libre Baskerville"', 'serif'], // Libre Baskerville font
        ebgaramond: ['"EB Garamond"', 'serif'], // EB Garamond font added here
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'], // Example of a common sans-serif stack
        mono: ['"Courier New"', 'Courier', 'monospace'], // Example of a monospace stack
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        fadeTwo: 'fadeOut 2s',
        fadeFour: 'fadeOut 4s',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: theme('opacity.0') },
          '100%': { opacity: theme('opacity.1') },
        },
      }),
      colors: {
        eggnog: '#93535f',
      },
    },
    letterSpacing: {
      tightest: '-.185em',
    },
  },
  plugins: [],
};