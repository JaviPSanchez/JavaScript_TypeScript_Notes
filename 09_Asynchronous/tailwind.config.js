/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        grey1: '#FAFAFA',
        grey2: '#F5F8F9',
        grey3: '#ECF2F4',
        grey4: '#CCDBE0',
        primary: '#06283D',
        secondary: '#1363DF',
        dark1: '#030243',
        dark2: '#8898a2',
        dark3: '#385364',
        dark4: '#0E0C15',
        error: '#fc8181',
        red: '#ff0000',
        orangeLightess: '#fff4e6',
        orangeLight: '#ffe8cc',
        orangeMedium: '#ffa94d',
        orangeDark: '#ff922b',
        yellow: '#ffc107',
      },
    },
  },
  plugins: [],
};
