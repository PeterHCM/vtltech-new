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
        brand: {
          primary: {
            blue: 'rgb(0, 99, 97)',
            orange: 'rgb(224, 104, 0)',
          },
          gray: {
            dark: 'rgb(93, 94, 94)',
            light: 'rgb(140, 141, 141)',
          }
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'sans-serif']
      },
      boxShadow: {
        card: '0 2px 6px rgba(0,0,0,0.05)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}
