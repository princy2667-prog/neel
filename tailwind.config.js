/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#00a8ff', // Accent Cyan
          700: '#0b3c7d', // Primary Deep Blue
          800: '#072856', // Dark Royal Blue
          900: '#041738', // Midnight Navy
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'glow': '0 0 25px rgba(0, 168, 255, 0.3)',
        'soft': '0 10px 30px -10px rgba(11, 60, 125, 0.08)',
        'elevated': '0 20px 40px -15px rgba(7, 40, 86, 0.15)',
      }
    },
  },
  plugins: [],
}
