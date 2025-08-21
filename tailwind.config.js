/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0A2540',
          light: '#1E3A8A',
          muted: '#61788A'
        }
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
}
