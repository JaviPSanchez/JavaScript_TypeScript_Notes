module.exports = {
  // media : system's color strategy
  darkMode: 'class',
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
    './src/**/*.{html,js,jsx,ts,tsx}',
    './src/sections/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      scrollbarWidth: ['hover', 'focus'],
      gridTemplateColumns: {
        // Simple 16 column grid
        fit: 'repeat(auto-fit, minmax(250px, 1fr))',
        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px',
      },
      fontSize: {
        '4xl': [
          '2rem',
          {
            lineHeight: '2.8rem',
            letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
        '12xl': [
          '12rem',
          {
            lineHeight: '10.25rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
      },

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
        error: '#fc8181',
      },
      lineHeight: {
        12: '1.2',
        13: '1.3',
        16: '1.6',
      },
    },
    screens: {
      xxs: { max: '450px' },
      xs: { max: '700px' },
      sm: { max: '640px' },
      md: { max: '1200px' },
      lg: { max: '1800px' },
    },
    fontFamily: {
      Rubik: ['Rubik', 'sans-serif'],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
