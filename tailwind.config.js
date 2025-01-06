/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        creepster: ["Creepster", "cursive"],
      },
      colors: {
        halloween: {
          purple: "#6A0DAD",
          orange: "#FF6B6B",
          black: "#1a0f2e",
          "deep-purple": "#2d1b4e",
          "ghost-white": "#F8F8FF",
          "witch-green": "#50FA7B",
        },
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 10px #6A0DAD, 0 0 20px #6A0DAD",
            textShadow: "0 0 10px #6A0DAD, 0 0 20px #6A0DAD",
          },
          "50%": {
            boxShadow: "0 0 15px #6A0DAD, 0 0 30px #6A0DAD",
            textShadow: "0 0 15px #6A0DAD, 0 0 30px #6A0DAD",
          },
        },
        fly: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-15px) rotate(-2deg)" },
          "50%": { transform: "translateY(-20px) rotate(0deg)" },
          "75%": { transform: "translateY(-15px) rotate(2deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
        shake: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        spookyBg: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        glow: "glow 1.5s infinite ease-in-out",
        fly: "fly 4s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        shake: "shake 0.5s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        spookyBg: "spookyBg 15s ease infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "spooky-gradient":
          "linear-gradient(45deg, #1a0f2e 0%, #2d1b4e 50%, #1a0f2e 100%)",
      },
      backdropFilter: {
        glass: "blur(10px)",
      },
    },
  },
  plugins: [],
};
