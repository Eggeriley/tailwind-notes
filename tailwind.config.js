module.exports = {
  purge: ['/public/**/*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      },

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    scale: {
      '0': '0',
      '5': '.5',
     '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
     '95': '.95',
      '100': '1',
      '102': '1.02',
     '105': '1.05',
     '110': '1.1',
      '125': '1.25',
      '150': '1.5',
     '200': '2',
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
