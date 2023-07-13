/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      brightness: {
        40: ".40",
      },
      colors: {
        primary: "#FFA233",
        secondary: "#071e2c",
        lightSecondary: "#02090D",
        customGray: "#0B2B42",
      },
      boxShadow: {
        "3xl": "0 5px 85px -15px #FFA233",
      },
      borderRadius: {
        xl: "20px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
