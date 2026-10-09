/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // STRICT 3-COLOR SYSTEM: Burnt Orange (#D5360C), Warm Ivory (#E6D5BD), Soft Black (#101010)
        burntOrange: {
          DEFAULT: '#D5360C',
          50: '#FDF2EE',
          100: '#FBE4DB',
          200: '#F7C4B2',
          300: '#F29F84',
          400: '#EB714F',
          500: '#D5360C', // CORE
          600: '#B82D09',
          700: '#942206',
          800: '#751A04',
          900: '#5A1302',
          glow: 'rgba(213, 54, 12, 0.45)',
        },
        warmIvory: {
          DEFAULT: '#E6D5BD',
          50: '#FAF7F2',
          100: '#F4ECE0',
          200: '#E6D5BD', // CORE
          300: '#D6BD9B',
          400: '#C29F72',
          500: '#AB824F',
          600: '#8C673A',
          700: '#6C4F2B',
          800: '#4D371E',
          900: '#2E2010',
          glow: 'rgba(230, 213, 189, 0.3)',
        },
        softBlack: {
          DEFAULT: '#101010', // CORE
          50: '#2A2A2A',
          100: '#222222',
          200: '#1A1A1A',
          300: '#161616',
          400: '#121212',
          500: '#101010', // CORE
          600: '#0D0D0D',
          700: '#0A0A0A',
          800: '#070707',
          900: '#040404',
        },
        terminalCyan: {
          DEFAULT: '#00F0FF',
          glow: 'rgba(0, 240, 255, 0.4)'
        },
        vintageYellow: {
          DEFAULT: '#F1B333'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        syne: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'halo-orange': '0 0 100px 20px rgba(213, 56, 12, 0.45)',
        'halo-ivory': '0 0 80px 15px rgba(230, 213, 176, 0.25)',
        'card-orange': '0 0 35px -5px rgba(213, 56, 12, 0.35)',
        'card-ivory': '0 0 35px -5px rgba(230, 213, 176, 0.15)',
        'brutal-black': '5px 5px 0px #101010',
        'brutal-orange': '5px 5px 0px #D5380C',
        'brutal-ivory': '5px 5px 0px #E6D5B0',
      }
    },
  },
  plugins: [],
}
