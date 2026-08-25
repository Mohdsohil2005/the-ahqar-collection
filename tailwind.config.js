/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ahqar: {
          bg: '#faf5f7',
          card: '#ffffff',
          blush: '#fcebf2',
          soft: '#f8d5e3',
          rose: '#e4a5b9',
          gold: '#c994a5',
          accent: '#a85b73',
          deep: '#733748',
          text: '#2d2125',
          muted: '#6e5d63',
          lightMuted: '#9e8b92',
          border: '#f3e1e7'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        signature: ['"Alex Brush"', 'Great Vibes', 'cursive']
      },
      boxShadow: {
        'pink-subtle': '0 10px 30px -10px rgba(228, 165, 185, 0.15)',
        'pink-hover': '0 20px 40px -15px rgba(228, 165, 185, 0.3)',
        'pink-glow': '0 0 30px rgba(248, 213, 227, 0.4)',
        'glass': '0 8px 32px 0 rgba(228, 165, 185, 0.12)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 8s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [],
}
