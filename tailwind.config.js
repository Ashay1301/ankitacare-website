/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FBF6F1',
          50: '#FFFDFB',
          100: '#FBF6F1',
          200: '#F4E9DF',
        },
        blush: {
          DEFAULT: '#F7C9D6',
          50: '#FDF2F5',
          100: '#FBE3EA',
          200: '#F7C9D6',
          300: '#F0A9BE',
        },
        rose: {
          DEFAULT: '#E5849E',
          400: '#E5849E',
          500: '#D86C8A',
          600: '#C25B79',
          700: '#A4496A',
        },
        sage: {
          DEFAULT: '#9CB29C',
          400: '#9CB29C',
          500: '#7E967E',
          600: '#647A64',
        },
        ink: {
          DEFAULT: '#4A3540',
          light: '#6E5A64',
          muted: '#9A8A91',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(194, 91, 121, 0.18)',
        card: '0 18px 50px -18px rgba(74, 53, 64, 0.22)',
        glow: '0 0 0 1px rgba(247, 201, 214, 0.5), 0 20px 60px -20px rgba(216, 108, 138, 0.35)',
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #FDF2F5 0%, #FBF6F1 55%, #F4E9DF 100%)',
        'rose-gradient': 'linear-gradient(135deg, #E5849E 0%, #C25B79 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
