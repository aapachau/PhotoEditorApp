/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00F0FF',
          purple: '#BD00FF',
          pink: '#FF0099',
          cyan: '#0FF4FF',
          indigo: '#3B00FF'
        },
        cyber: {
          dark: '#0A0118',
          darker: '#060111',
          gray: '#1A1127',
          light: '#2D1F45'
        }
      },
      container: {
        center: true,
        padding: '2rem',
      },
      backgroundImage: {
        'cyber-grid': "url('https://images.unsplash.com/photo-1704921430429-e91c8e788726?auto=format&fit=crop&q=80&w=2000')",
        'neural': "url('https://images.unsplash.com/photo-1704921430429-e91c8e788726?auto=format&fit=crop&q=80&w=2000')",
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 20px #00F0FF' },
          '100%': { 'box-shadow': '0 0 40px #BD00FF' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};