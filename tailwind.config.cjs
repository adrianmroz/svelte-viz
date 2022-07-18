/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{html,js,svelte,ts}', './src/routes/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        source: '"Source Code Pro", Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;'
      }
    },
    colors: {
      current: 'currentColor',
      adelie: 'rgb(255, 110, 1)',
      chinstrap: 'rgb(199, 92, 203)',
      gentoo: 'rgb(9, 112, 117)'
    }
  },
  plugins: [],
}
