// tailwind.config.js

const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  content: [
    './src/assets/**/*.{vue,js,css}',
    './src/components/**/*.{vue,js,ts}',
    './src/composables/**/*.{vue,js,ts}',
    './src/content/**/*.md',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // TOOL: https://uicolors.app/create (palette generator) 
        colors: {
            green: {
              50: '#EFFDF5',
              100: '#D9FBE8',
              200: '#B3F5D1',
              300: '#75EDAE',
              400: '#00DC82',
              500: '#00C16A',
              600: '#00A155',
              700: '#007F45',
              800: '#016538',
              900: '#0A5331',
              950: '#052e16'
            }
          }
      },
      keyframes: {
        fade: {
            '0%': { opacity: '0%'},
            '100%': { opacity: '100%'},
        }
      },
      animation: {
        'fade': 'fade 1s ease-in-out',
      },
    },
    fontFamily: {
    },
  },
}