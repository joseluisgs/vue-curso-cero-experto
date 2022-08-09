/* eslint-env node */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // Instalo el modo JIT, que me hace lo mismo que WindiCSS
  // https://tailwindcss.com/blog/tailwindcss-v3#just-in-time-all-the-time
  // No es necesario pero si esta en v2 sí hay que ponerlo, en v3 es por defecto
  mode: 'jit',
  content: ['./src/**/*.{vue,js,ts}'],
  // Instalo el plugin tailwindcss de tipografía
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  // Themes: Personalización de Tailwind, le añado la fuente por defecto, aunque podría
  // hacerlo en el CSS como estaba antes
  // https://tailwindcss.com/docs/theme
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
  },
  // Daisyui y tema por defecto
  daisyui: {
    // Se ponen por orden
    themes: [
      'night', // Al ponerlo es elk tema por defecto oscuro!!!
      'dark',
      'light',
      'lemonade',
      {
        // Un tema personalizado con daisyui
        // https://daisyui.com/theme-generator/
        joseluisgs: {
          primary: '#7c3aed',

          secondary: '#22d3ee',

          accent: '#34d399',

          neutral: '#3D4451',

          'base-100': '#fdfdfd', // Este es el fondo

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#fde047',

          error: '#fb7185',
        },
      },
    ],
  },
}
