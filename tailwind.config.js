/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      current: 'current',
      primary: '#8BC34A',
      'primary-fade': '#EEF6E4',
      black: '#000',
      white: '#fff',
      grey: '#b1b1b1',
    },
    extend: {
      flex: {
        35: '1 0 35%',
        65: '1 0 65%',
      },
    },
  },
  plugins: [],
};
