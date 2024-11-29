/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
