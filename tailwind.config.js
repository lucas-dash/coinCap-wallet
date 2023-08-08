/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      transitionDuration: {
        1500: '1500ms',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        primary: '#EFF2F5',
        'primary-dark': '#1b212C',
        secondary: '#6A52FF',
        'secondary-dark': '#8470FF',
        'secondary-foreground': '#3F96FE',
        'secondary-foreground-dark': '#77B5FE',
        accent: '#C102DE',
        'accent-dark': '#E967FE',
        background: '#EFF0F1',
        'background-dark': '#2D333D',
        foreground: '#F8F8F8',
        'foreground-dark': '#1E2029',
        typography: '#1E2029',
        'typography-dark': '#FCFCFC',
        'typography-detail': '#666666',
        'typography-detail-dark': '#919191',
        shadow: '#666666',
        'shadow-dark': '#808A9D',
        select: '#CCCCCC',
        upchange: '#16C784',
        downchange: '#EA3943',
        input: '#3F96FE',
        'input-dark': '#8470FF',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
