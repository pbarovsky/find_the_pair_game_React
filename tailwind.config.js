/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sl: "568px",
        sm: "420px",
        xs: "320px",
      },
      colors: {
        main: "var(--main-color)",
        accent: "var(--accent-color)",
        disabled: "var(--disabled)",
        backdrop: "var(--backdrop)",
        image: "var(--image)",
        transparent: "transparent",
      },
      fontFamily: {
        jetbrains: ["JetBrains Mono", "serif"],
        qubix: ["Qubix", "serif"],
      },
      boxShadow: {
        current:
          "1px 1px 0px 0px var(--accent-color), 2px 2px 0px 0px var(--accent-color), 3px 3px 0px 0px var(--accent-color), 4px 4px 0px 0px var(--accent-color), 5px 5px 0px 0px var(--accent-color)",
        disabled:
          "1px 1px 0px 0px var(--disabled), 2px 2px 0px 0px var(--disabled), 3px 3px 0px 0px var(--disabled), 4px 4px 0px 0px var(--disabled), 5px 5px 0px 0px var(--disabled)",
        active: "0px 0px 0px 0px",
        modal: "0 4px 8px rgba(0, 0, 0, 0.2)",
      },
      keyframes: {
        rotateX: {
          "0%": { transform: "rotateX(0deg)" },
          "50%": { transform: "rotateX(360deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
        rotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(360deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
      },
      animation: {
        rotateX: "rotateX 3s ease-in-out infinite",
        rotateY: "rotateY 3s ease-in-out infinite",
        fadeIn: 'fadeIn 0.5s ease-out',
        fadeOut: 'fadeOut 0.5s ease-in',
      },
    },
  },
  plugins: [],
};
