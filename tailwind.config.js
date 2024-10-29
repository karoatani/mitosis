/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat : ["montserrat"]
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #6A0DAD, 0 0 20px #6A0DAD' },
          '50%': { boxShadow: '0 0 15px #6A0DAD, 0 0 30px #6A0DAD' },
        },
      },
      animation: {
        glow: 'glow 1.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}