import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F0EB',
          light: '#FAF7F4',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#2C2C2C',
          muted: '#3D3D3D',
        },
        bronze: {
          DEFAULT: '#C9A96E',
          light: '#D4BA8A',
          dark: '#A88A4E',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-playfair)', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
}

export default config
