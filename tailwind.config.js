/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './wwwroot/Views/**/*.cshtml',
    './wwwroot/js/**/*.js',
    './wwwroot/css/**/*.css'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e68000',
        secondary: '#006163',
        slogan: '#f4f5f5',
        dark: '#0a0a0a'
      },
      spacing: {
        '18': '4.5rem',
        '100': '25rem',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}