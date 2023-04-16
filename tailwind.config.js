/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      minHeight: {
        96: '24rem',
      },
      colors: {
        beige: '#FFDF98',
        lightGreen: '#87C1B9',
        midGreen: '#467971',
        darkGreen: '#2E4C48',
      },
    },
  },
  variants: {
    extend: {},
  },
};
