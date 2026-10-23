/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // SIGNATURE EDITORIAL PALETTE: Yellow (#E7BA05), Butter (#F6E3B8), Leaf (#6B9E5A), Brown (#906342), Pure Black (#000000)
        brandYellow: {
          DEFAULT: '#E7BA05',
          50: '#FDF9EE',
          100: '#FBF2D5',
          200: '#F7E4A8',
          300: '#F2D57A',
          400: '#EDC740',
          500: '#E7BA05', // CORE
          600: '#C79F04',
          700: '#9E7E03',
          800: '#755D02',
          900: '#4C3D01',
          glow: 'rgba(231, 186, 5, 0.45)',
        },
        brandButter: {
          DEFAULT: '#F6E3B8',
          50: '#FDFBF7',
          100: '#FAF4E8',
          200: '#F6E3B8', // CORE
          300: '#EDD194',
          400: '#E3BF70',
          500: '#D5A946',
          600: '#B48C30',
          700: '#8E6D23',
          800: '#674E17',
          900: '#41310C',
          glow: 'rgba(246, 227, 184, 0.35)',
        },
        brandLeaf: {
          DEFAULT: '#6B9E5A',
          50: '#F2F7F0',
          100: '#E1EDDE',
          200: '#C4DCBD',
          300: '#A5CA9A',
          400: '#87B778',
          500: '#6B9E5A', // CORE
          600: '#558246',
          700: '#416435',
          800: '#2D4625',
          900: '#1A2A16',
          glow: 'rgba(107, 158, 90, 0.45)',
        },
        brandBrown: {
          DEFAULT: '#906342',
          50: '#F7F3F0',
          100: '#EDE2DA',
          200: '#DCC4B5',
          300: '#C9A48E',
          400: '#AD8266',
          500: '#906342', // CORE
          600: '#785135',
          700: '#5E3E28',
          800: '#432B1B',
          900: '#2A1A10',
          glow: 'rgba(144, 99, 66, 0.35)',
        },
        brandBlack: {
          DEFAULT: '#000000', // CORE - Pure OLED Black (No blue tint)
          50: '#1A1A1A',
          100: '#141414',
          200: '#0F0F0F',
          300: '#0A0A0A',
          400: '#050505',
          500: '#000000', // CORE
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },

        // Backward compatibility mappings
        burntOrange: {
          DEFAULT: '#E7BA05',
          50: '#FDF9EE',
          100: '#FBF2D5',
          200: '#F7E4A8',
          300: '#F2D57A',
          400: '#EDC740',
          500: '#E7BA05',
          600: '#C79F04',
          700: '#9E7E03',
          800: '#755D02',
          900: '#4C3D01',
          glow: 'rgba(231, 186, 5, 0.45)',
        },
        warmIvory: {
          DEFAULT: '#F6E3B8',
          50: '#FDFBF7',
          100: '#FAF4E8',
          200: '#F6E3B8',
          300: '#EDD194',
          400: '#E3BF70',
          500: '#D5A946',
          600: '#B48C30',
          700: '#8E6D23',
          800: '#674E17',
          900: '#41310C',
          glow: 'rgba(246, 227, 184, 0.35)',
        },
        softBlack: {
          DEFAULT: '#000000',
          50: '#1A1A1A',
          100: '#141414',
          200: '#0F0F0F',
          300: '#0A0A0A',
          400: '#050505',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        terminalCyan: {
          DEFAULT: '#E7BA05',
          glow: 'rgba(231, 186, 5, 0.4)'
        },
        vintageYellow: {
          DEFAULT: '#E7BA05'
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
        'halo-yellow': '0 0 100px 20px rgba(231, 186, 5, 0.45)',
        'halo-butter': '0 0 80px 15px rgba(246, 227, 184, 0.25)',
        'halo-leaf': '0 0 80px 15px rgba(107, 158, 90, 0.35)',
        'halo-brown': '0 0 80px 15px rgba(144, 99, 66, 0.25)',
        'card-yellow': '0 0 35px -5px rgba(231, 186, 5, 0.35)',
        'card-butter': '0 0 35px -5px rgba(246, 227, 184, 0.15)',
        'brutal-black': '5px 5px 0px #000000',
        'brutal-yellow': '5px 5px 0px #E7BA05',
        'brutal-butter': '5px 5px 0px #F6E3B8',
        'brutal-leaf': '5px 5px 0px #6B9E5A',
        'brutal-brown': '5px 5px 0px #906342',

        // Legacy compatibility
        'halo-orange': '0 0 100px 20px rgba(231, 186, 5, 0.45)',
        'halo-ivory': '0 0 80px 15px rgba(246, 227, 184, 0.25)',
        'card-orange': '0 0 35px -5px rgba(231, 186, 5, 0.35)',
        'card-ivory': '0 0 35px -5px rgba(246, 227, 184, 0.15)',
        'brutal-orange': '5px 5px 0px #E7BA05',
        'brutal-ivory': '5px 5px 0px #F6E3B8',
      }
    },
  },
  plugins: [],
}
