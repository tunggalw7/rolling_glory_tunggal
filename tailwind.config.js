/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "#e1e8ee",
        gray: "#232323",
        "white-secondary": "#F2F2F4",
        "black-primary": "#3C3C3F",
        "black-secondary": "#262626",
        "black-third": "#525F7F",
        "gray-primary": "#D5D5D5",
        "gray-secondary": "#888888",
        "gray-arrow": "#A0A0A0",
        "gray-line": "#9D9D9D",
        "gray-third": "#838EAB",
        "gray-thick": "#E6E8EE",
        "green-primary": "#79B625",
        "green-secondary": "#74B71B",
        "green-third": "#006A4E",
        "red-secondary": "#E64580",
      },
      fontSize: {
        small: "15px",
        "semi-medium": "16px",
        medium: "17px",
      },
      screens: {
        "2md": "769px",
      },
    },
    backgroundImage: {
      "custom-pattern": "url('assets/images/bg-transparent.svg')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
