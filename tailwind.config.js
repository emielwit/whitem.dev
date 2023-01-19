/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        // sm: "2rem",
        // lg: "18rem",
        xl: "18rem",
        "2xl": "18rem",
      },
    },
    extend: {
      animation: {
        blinker: "blinker 1s linear infinite",
      },
      colors: {
        white: "#ffffff",
        whitem: {
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#b1b1b1",
          500: "#b1b1b1",
          600: "#b1b1b1",
          700: "#2e2e2e",
          800: "#2e2e2e",
          900: "#111111",
        },
      },
    },
  },
  plugins: [],
};
