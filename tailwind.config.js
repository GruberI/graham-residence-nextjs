/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: [`"Comorant, serif"`]
       },
      animation: {
        fadeTwo: 'fadeOut 2s',
        fadeFour: 'fadeOut 4s'
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: theme('opacity.0') },
          '100%': { opacity: theme('opacity.1') },
        },
      }),
      color: {
        eggnog: '#93535f',
      }
    }
  },
  plugins: [],
};
