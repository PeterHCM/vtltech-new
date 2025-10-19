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
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        primary: '#e06800',
        secondary: '#006163',
        slogan: '#f4f5f5',
        dark: '#0a0a0a',
      },
      spacing: {
        '18': '4.5rem',
        '100': '25rem',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      maxHeight: {
        screen: '100vh',
        full: '100%',
        menu: '500px',
      },
      transitionDelay: {
        '0': '0ms',
        '50': '50ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'scaleY(0.95)', opacity: '0' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme('fontFamily.sans').join(', '),
            color: theme('colors.gray.800'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.primary'),
              fontFamily: theme('fontFamily.sans').join(', '),
            },
            a: {
              color: theme('colors.gray.800'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.300'),
              color: theme('colors.gray.500'),
            },
            ul: { listStyleType: 'disc', paddingLeft: '1.5rem' },
            ol: { listStyleType: 'disc', paddingLeft: '1.5rem' },
            li: {
              color: theme('colors.gray.800'),
            },
            'li::marker': {
              color: theme('colors.gray.800'),
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
        dark: {
          css: {
            fontFamily: theme('fontFamily.sans').join(', '),
            color: theme('colors.gray.200'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.white'),
              fontFamily: theme('fontFamily.sans').join(', '),
            },
            strong: {
              color: theme('colors.white'),
            },
            a: {
              color: theme('colors.gray.200'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.400'),
            },
            ul: { listStyleType: 'disc', paddingLeft: '1.5rem' },
            ol: { listStyleType: 'disc', paddingLeft: '1.5rem' },
            li: {
              color: theme('colors.gray.200'),
            },
            'li::marker': {
              color: theme('colors.gray.200'),
            },
          },
        },
      }),
    },
  },
  safelist: [
    'peer-checked:rotate-90',
    'delay-[0ms]', 'delay-[50ms]', 'delay-[100ms]', 'delay-[150ms]', 'delay-[200ms]', 'delay-[250ms]', 'delay-[300ms]',
    'bg-green-100', 'text-green-800', 'border-green-300',
    'dark:bg-green-900', 'dark:text-green-100', 'dark:border-green-700',
    'bg-yellow-100', 'text-yellow-800', 'border-yellow-300',
    'dark:bg-yellow-900', 'dark:text-yellow-100', 'dark:border-yellow-700',
    'bg-red-100', 'text-red-800', 'border-red-300',
    'dark:bg-red-900', 'dark:text-red-100', 'dark:border-red-700',
    'bg-blue-100', 'text-blue-800', 'border-blue-300',
    'dark:bg-blue-900', 'dark:text-blue-100', 'dark:border-blue-700',
    ...Array.from({ length: 12 }, (_, i) => `col-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `sm:col-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `md:col-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `lg:col-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `xl:col-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `2xl:col-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `sm:grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `md:grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `lg:grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `xl:grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `2xl:grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `row-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `sm:row-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `md:row-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `lg:row-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `xl:row-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `2xl:row-span-${i + 1}`),
  ],
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
