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
      grey: '#808080',
    },
    extend: {},
  },
  plugins: [],
};
