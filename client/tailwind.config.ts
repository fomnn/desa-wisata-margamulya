import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      base: '14px',
    },
    extend: {
      colors: {
        darkGreen: '#3A5331',
      },
      fontFamily: {
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        abhaya: ['"Abhaya Libre"'],
      },
    },
  },
  plugins: [],
} satisfies Config
