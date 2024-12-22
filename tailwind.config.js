/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@ionic/vue/**/*.js',
    './node_modules/@ionic/vue-router/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};