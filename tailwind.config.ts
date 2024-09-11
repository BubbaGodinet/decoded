import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: {
        100: "#dddde6",
        200: "#bbbbce",
        300: "#9a99b5",
        400: "#78779d",
        500: "#565584",
        600: "#45446a",
        700: "#34334f",
        800: "#222235",
        900: "#11111a"
      },
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      bubblegum: '#ff77e9',
      bermuda: '#78dcca',
      bgMain: '#09080B',
      hoverPurple: '#4e2cac',
    },
    screens: {
      mob: { 'max': '435px' },
      tab: { 'min': '436px', 'max': '1024px' },
      dt: { 'min': '1025px', 'max': '1440px' },
      fw: '1441px',
    },
    extend: {
      width: {
        95: '95%'
      },
      height: {
        95: '95%'
      },
      borderRadius: {
        '30': '1.875rem',
        '52': '3.25rem',
      },
      fontFamily: {
        humane: ['Humane-Regular', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr',
      },
      textOrientation: {
        upright: 'upright',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.writing-mode-vertical-rl': {
          'writing-mode': 'vertical-rl',
        },
        '.writing-mode-vertical-lr': {
          'writing-mode': 'vertical-lr',
        },
        '.text-orientation-upright': {
          'text-orientation': 'upright',
        },
      });
    },
  ],
};

export default config;

