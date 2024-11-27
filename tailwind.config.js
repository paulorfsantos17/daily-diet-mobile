/* eslint-disable @typescript-eslint/no-var-requires */
const gluestackPlugin = require('@gluestack-ui/nativewind-utils/tailwind-plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['app/**/*.{tsx,jsx,ts,js}', 'components/**/*.{tsx,jsx,ts,js}'],
  presets: [require('nativewind/preset')],
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#FAFAFA',
          200: '#EFF0F0',
          300: '#EFF0F0',
          400: '#B9BBBC',
          700: '#5C6265',
          800: '#333638',
          900: '#1B1D1E',
        },
        red: {
          dark: '#BF3B44',
          mid: '#F3BABD',
          light: '#F4E6E7',
        },
        green: {
          dark: '#639339',
          mid: '#CBE4B4',
          light: '#E5F0DB',
        },
      },
      fontFamily: {
        heading: 'NunitoSans_700Bold',
        body: 'NunitoSans_400Regular',
        mono: 'NunitoSans_400Regular',
        roboto: ['Nunito Sans', 'serif'],
      },
      fontWeight: {
        extrablack: '950',
      },
      fontSize: {
        '2xs': '10px',
      },
      boxShadow: {
        'hard-1': '-2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-2': '0px 3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-3': '2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-4': '0px -3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-5': '0px 2px 10px 0px rgba(38, 38, 38, 0.10)',
        'soft-1': '0px 0px 10px rgba(38, 38, 38, 0.1)',
        'soft-2': '0px 0px 20px rgba(38, 38, 38, 0.2)',
        'soft-3': '0px 0px 30px rgba(38, 38, 38, 0.1)',
        'soft-4': '0px 0px 40px rgba(38, 38, 38, 0.1)',
      },
    },
  },
  plugins: [gluestackPlugin],
}