/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          900: '#312e81',
        },
        dark: '#0f172a',
        darker: '#020617',
      }
    },
  },
  plugins: [],
}
