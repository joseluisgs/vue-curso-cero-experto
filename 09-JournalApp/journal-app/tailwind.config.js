module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  // Instalo el plugin tailwindcss de tipografía
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  // Themes
  daisyui: {
    // Se ponen por orden
    themes: [
      'dark',
      'light',
      {
        // Un tema personalizado con daisyui
        // https://daisyui.com/theme-generator/
        joseluisgs: {
          primary: '#7c3aed',

          secondary: '#22d3ee',

          accent: '#34d399',

          neutral: '#3D4451',

          'base-100': '#FFFFFF',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#fde047',

          error: '#fb7185',
        },
      },
    ],
  },
}
