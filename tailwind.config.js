/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        transform_one: "transform_one 18s ease-in-out infinite both alternate",
        transform_two: "transform_two 10s ease-in-out infinite both alternate",
        transform_three:
          "transform_three 7s ease-in-out infinite both alternate",
      },
      keyframes: {
        transform_one: {
          "0%, 100%": { transform: "none" },
          "50%": {
            transform: "translate(-110%, 40%) rotateY(10deg) scale(1.7)",
          },
        },
        transform_two: {
          "0%, 100%": { transform: "none" },
          "50%": {
            transform: "translate(70%, 30%) rotate(-200deg) scale(1.3)",
          },
        },
        transform_three: {
          "0%, 100%": { transform: "none" },
          "50%": {
            transform: "translate(70%, 30%) rotate(-200deg) scale(1.3)",
          },
        },
      },

      fontFamily: {
        // "poppins": ["Poppins"],
        // lexend: ["Lexend", "sans-serif"],
        // turret: ["Turret Road", "sans-serif"],

        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
        "5xl": "2000px",
      },
      textColor: {
        "custom-color": "#01FF9D",
      },
      colors: {
        sidebar: "#182230",
        "custom-gradient": "linear-gradient(to right, #00FC9E, #1C7EF0)",
        "custom-cyan": "#01FF9D",
        "custom-border": "#3d4054",
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(to right, #00FC9E, #1C7EF0)",
        "blurry-effect": "backdrop-blur-md bg-white/5",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-gradient-color": {
          "background-image": "linear-gradient(to right, #00FC9E, #1C7EF0)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
          color: "transparent",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
