/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      'Bebas-Neue': ['Bebas Neue'],
      'Montserrat': ['Montserrat'],
      'Rubik': ['Rubik'],
    },
    colors: {
      'orange-peel': {
        '50': '#fffcea',
        '100': '#fff4c5',
        '200': '#ffea85',
        '300': '#ffd846',
        '400': '#ffc51b',
        '500': '#ffa200',
        '600': '#e27a00',
        '700': '#bb5302',
        '800': '#984008',
        '900': '#7c350b',
        '950': '#481a00',
      },
      'papaya-whip': {
        '50': '#fff8ed',
        '100': '#ffeed4',
        '200': '#fedaaa',
        '300': '#fdbf74',
        '400': '#fb983c',
        '500': '#f97b16',
        '600': '#ea5f0c',
        '700': '#c2470c',
        '800': '#9a3912',
        '900': '#7c3112',
        '950': '#431607',
      },
      'smalt': {
        '50': '#ebf7ff',
        '100': '#d1edff',
        '200': '#aedfff',
        '300': '#76ceff',
        '400': '#35b1ff',
        '500': '#0788ff',
        '600': '#0062ff',
        '700': '#0049ff',
        '800': '#003cd7',
        '900': '#0036a0',
        '950': '#062365',
      },
      'scarlet': {
        '50': '#fff5ec',
        '100': '#ffe8d3',
        '200': '#ffcda5',
        '300': '#ffa96d',
        '400': '#ff7932',
        '500': '#ff550a',
        '600': '#f23700',
        '700': '#cc2602',
        '800': '#a11f0b',
        '900': '#821c0c',
        '950': '#460a04',
    },
    'test': {
      '50': '#ff8f0a',
      '100': '#ff8210'
    }
    },
    extend: {},
  },
  plugins: [],
}

