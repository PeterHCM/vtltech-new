// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './wwwroot/Views/**/*.cshtml',
    './wwwroot/js/**/*.js',
    './wwwroot/css/**/*.css',
  ],
  darkMode: 'class', // Sử dụng class 'dark' để bật/tắt chế độ tối
  theme: {
    extend: {
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Cấu hình cho Light Mode
            color: theme('colors.gray.800'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.gray.900'),
            },
            'a': {
              'color': theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
            'blockquote': {
              borderLeftColor: theme('colors.gray.300'),
              color: theme('colors.gray.500'),
            },
            'ul, ol': {
              'list-style-type': 'disc',
              'padding-left': '1.5rem',
            },
            'li': {
              color: theme('colors.gray.800'),
            },
            // Loại bỏ dấu ngoặc kép trên code block inline
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        // Cấu hình cho Dark Mode. Tailwind tự động thêm class 'dark'
        dark: {
          css: {
            color: theme('colors.gray.200'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.white'),
            },
            'strong': {
              color: theme('colors.white'),
            },
            'a': {
              'color': theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            'blockquote': {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.400'),
            },
            'ul, ol': {
                'list-style-type': 'disc',
                'padding-left': '1.5rem',
            },
            'li': {
                color: theme('colors.gray.200'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};