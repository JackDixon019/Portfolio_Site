/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
  theme: {
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
      }
    },
    extend: {},
  },
  plugins: [],
}

