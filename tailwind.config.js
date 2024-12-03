/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff4500', // Custom primary color
        secondary: '' // Custom secondary color
        // You can add more custom colors here
      },
      boxShadow: {
        'white-3': 'var(--shadow-white-3)',
        'shadow-1': 'var(--shadow-1)',
        'shadow-2': 'var(--shadow-2)',
        'inner-shadow': 'var(--inner-shadow)'
      },
      backgroundImage:{
        'gradient-box-w':'var(--gradient-box-w)',
        'gradient-red-hover':'var(--gradient-red-hover)'
      },
      screens: {
        xs: { min: '310px', max: '639px' }
        // => @media (min-width: 360px) { ... }
      }
    }
  },
  plugins: []
}
