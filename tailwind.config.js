/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bridge: {
          dark: '#01222C',
          orange: '#FC6000',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 40px -24px rgba(15, 23, 42, 0.24)',
      },
    },
  },
  plugins: [],
}
