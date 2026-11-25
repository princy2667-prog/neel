/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme-aware tokens (swap in dark mode via CSS variables)
        paper: 'rgb(var(--paper-rgb) / <alpha-value>)',
        surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        // Fixed blue-and-white accents — always paired with navy text
        sig: {
          azure: '#3b82f6',
          sky: '#93c5fd',
          cyan: '#4fd1ff',
          royal: '#1d4ed8',
          navy: '#0a1f5c',
          white: '#eaf2ff',
        },
        // Legacy scale remapped to the blue palette so older utilities still fit
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#0a1f5c',
          800: '#12308a',
          900: '#0a1f5c',
          950: '#06143d',
        },
        cyan: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
      },
      // Square everything — brutalism has no soft corners
      borderRadius: {
        none: '0px',
        sm: '0px',
        DEFAULT: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        '4xl': '0px',
        full: '0px',
      },
      borderWidth: {
        DEFAULT: '2px',
        2: '3px',
        4: '6px',
      },
      // Hard, un-blurred offset shadows
      boxShadow: {
        sm: '3px 3px 0 0 var(--ink)',
        DEFAULT: '4px 4px 0 0 var(--ink)',
        md: '5px 5px 0 0 var(--ink)',
        lg: '7px 7px 0 0 var(--ink)',
        xl: '9px 9px 0 0 var(--ink)',
        '2xl': '12px 12px 0 0 var(--ink)',
        brut: '6px 6px 0 0 var(--ink)',
        'brut-sm': '3px 3px 0 0 var(--ink)',
        'brut-lg': '10px 10px 0 0 var(--ink)',
        glow: '6px 6px 0 0 var(--ink)',
        soft: '5px 5px 0 0 var(--ink)',
        elevated: '8px 8px 0 0 var(--ink)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        ecg: {
          '0%': { strokeDashoffset: '1' },
          '70%, 100%': { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.18)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-rev': 'marquee 55s linear infinite reverse',
        ecg: 'ecg 4.5s steps(60, end) infinite',
        blink: 'blink 1.1s steps(1) infinite',
        wiggle: 'wiggle 2.4s ease-in-out infinite',
        beat: 'beat 1.1s ease-in-out infinite',
        shimmer: 'shimmer 3.5s linear infinite',
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
