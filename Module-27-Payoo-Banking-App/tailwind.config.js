/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {},
    fontFamily:{
      'outfit': ['Outfit', 'sans-serif'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
};
