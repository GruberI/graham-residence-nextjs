/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
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
    }
  },
  plugins: [],
};
