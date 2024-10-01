// tailwind.config.js
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './**/@material-tailwind/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A3AFF',
        secondary: '#F3F1FF',
        'neutral-800': '#14142B',
        'neutral-700': '#4E4B66',
        'neutral-600': '#6E7191',
        'neutral-500': '#A0A3BD',
        'neutral-400': '#E3E5F2',
        'neutral-300': '#EFF0F6',
        'neutral-200': '#F7F7FB',
        'neutral-100': '#FFFFFF',
        'nemil-blue': '#0078F0',
        'nemil-sky': '#E5F1FD',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
    },
    fontFamily: {
      PretendardRegular: ['Pretendard-Regular'],
    },
  },
  plugins: [],
};

export default colors;
