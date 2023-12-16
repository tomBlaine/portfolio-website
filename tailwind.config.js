/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {


        primary: {
          50: '#f0f5fe',
          100: '#dde8fc',
          200: '#c3d8fa',
          300: '#9ac0f6',
          400: '#699ff1',
          500: '#467deb',
          600: '#315fdf',
          700: '#284bcd',
          800: '#273fa6',
          900: '#253883',
          950: '#19224b',
      },

        secondary: {
          50: '#f4f7fa',
          100: '#e6ebf3',
          200: '#d4dce9',
          300: '#b7c6db',
          400: '#92a7c8',
          500: '#788db9',
          600: '#6677aa',
          700: '#5a679b',
          800: '#4d5680',
          900: '#414967',
          950: '#2b2f40',
      },
      }
    },
    colors: {
      ...colors,
      //primary: colors.blue,
      //secondary: colors.cyan,
    },
  },
  plugins: [],
}
