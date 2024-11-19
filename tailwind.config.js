/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native");

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: {
          raw: "(min-width:375px) AND (min-height: 600px)",
        },
        "sm-1": {
          raw: "(min-width:375px) AND (min-height: 800px)",
        },
        "sm-2": {
          raw: "(min-width:375px) AND (min-height: 900px)",
        },
        md: {
          raw: "(min-width:400px) AND (min-height: 600px)",
        },
        "md-1": {
          raw: "(min-width:400px) AND (min-height: 800px)",
        },
        "md-2": {
          raw: "(min-width:400px) AND (min-height: 900px)",
        },
        lg: {
          raw: "(min-width:428px) AND (min-height: 600px)",
        },
        "lg-1": {
          raw: "(min-width:428px) AND (min-height: 800px)",
        },
        "lg-2": {
          raw: "(min-width:428px) AND (min-height: 900px)",
        },
      },
      fontFamily: {
        jokkerr: ['"Jokker-Regular"'],
        jokkerb: ['"Jokker-Bold"'],
        jokkerh: ['"Jokker-Heavy"'],
        jokkerl: ['"Jokker-Light"'],
        jokkerm: ['"Jokker-Medium"'],
        jokkers: ['"Jokker-Semibold"'],
        jokkert: ['"Jokker-Thin"'],
      },
      colors: {
        "gradient-start": "#EEE8DC",
        "gradient-end": "#FFF8E6",
        "soft-page-bg-start": "#FAEBE7",
        "soft-page-bg-end": "#F4E6E5",
        modal: "#FEFCFB",
        "category-card": "#FFFCF2",
        card: {
          DEFAULT: "#FFF7F5",
          100: "#FFFCF2",
        },
        dark: "#111830",
        "sand-bold": "#F6EDDC",
        orange10: "#ED5F00",
        orange: "#FA934E",
        slate7: "#D7DBDF",
        slate11: "#687076",
        "light-blue": "#DAEBF8",
        black: "#000000",
        white: "#FFFFFF",
        red: "#FF0000",
        gray: "#6B7280",
        "light-gray": "#F7F3EA",
        "gray-regular": "#787880",
        "dark-gray": "#24384D",
        transparent: "transparent",
        "vanilla-medium": "#FFF7F5",
        "vanilla-regular": "#FDF2DD",
        "vanilla-bold": "#F8EBD2",
        facebook: "#3B5998",
        light: {
          DEFAULT: "#FDF8EE",
          100: "#E3DCCC",
          200: "#D1C9B4",
        },
        "primary-blue": {
          100: "#111830",
        },
        "action-sheet": {
          light: "#FAF6F4",
        },
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
};
