/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './wwwroot/Views/**/*.cshtml',
    './wwwroot/js/**/*.js',
  ],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      colors: {
        primary: '#e06800',
        secondary: '#006163',
        slogan: '#f4f5f5',
        dark: '#0a0a0a',
      },

      animation: {
        slideDown: 'slideDown 0.3s ease-out forwards',
      },

      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'scaleY(0.95)' },
          '100%': { opacity: '1', transform: 'scaleY(1)' },
        },
      },

      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              textDecoration: 'none',
              '&:hover': { color: theme('colors.primary') },
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              '&:hover': { color: theme('colors.primary') },
            },
          },
        },
      }),
    },
  },

  safelist: [
    'flex',
    'items-center',
    'justify-between',
    'ml-auto',
    'border-r',
    'gap-2',
    'gap-3',
    'gap-5',
    'w-3.5',
    'h-3.5',
    'text-[11px]',
    'dark:border-white/10',
    'peer-checked:rotate-90',

    {
      pattern:
        /^(col-span|row-span|grid-cols)-(1|2|3|4|5|6|7|8|9|10|11|12)$/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    {
      pattern:
        /^(bg|text|border)-(green|yellow|red|blue)-(100|300|800)$/,
      variants: ['dark'],
    },
  ],

  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};