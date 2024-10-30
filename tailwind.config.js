/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat : ["montserrat"],
        creepster : ["Creepster"]
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #6A0DAD, 0 0 20px #6A0DAD' },
          '50%': { boxShadow: '0 0 15px #6A0DAD, 0 0 30px #6A0DAD' },
        },
        fly: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        glow: 'glow 1.5s infinite ease-in-out',

        fly: 'fly 4s linear infinite',
      },

    },
  },
  plugins: [],
}