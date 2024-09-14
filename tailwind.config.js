/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.svelte"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontSize: {
        "1xs": [
          "10px",
          {
            lineHeight: "14px",
            fontWeight: "500",
          },
        ],
        "2xs": [
          "8px",
          {
            lineHeight: "12px",
            fontWeight: "500",
          },
        ],
        "3xs": [
          "6px",
          {
            lineHeight: "10px",
            fontWeight: "500",
          },
        ],
        "7xl": [
          "4.5rem",
          {
            lineHeight: "1.36",
            fontWeight: "800",
          },
        ],
        // "5xl": [
        //   "3.5rem",
        //   {
        //     lineHeight: "10px",
        //     fontWeight: "800",
        //   },
        // ],
      },
      colors: {
        blue: {
          100: "#d1dff8",
          200: "#a4bff0",
          300: "#769fe9",
          400: "#497fe1",
          500: "#1b5fda",
          600: "#164cae",
          700: "#103983",
          800: "#0b2657",
          900: "#05132c",
        },
        bodyblack: "#292a2f",
        darkgray: "#1e1e1e",
        lightgray: "#19191c",
        mdGray: "#202023",
        extraBlue: {
          300: "#5182ef",
          400: "#3b73ed",
          500: "#2563EB",
          600: "#1e4fbc",
          700: "#163b8d",
        },
        alert: {
          primary: "#3B71CA",
          secondary: "#a12cb8",
          warning: "#E4A11B",
          danger: "#DC4C64",
          info: "#54B4D3",
          success: "#14A44D",
        },
        gray: {
          100: "#A8A9AD", //secondary
          200: "#a0a1a5", //primary
          300: "#94959a",
          400: "#818286",
          500: "#707175",
          600: "#636469",
          700: "#505155",
          800: "#444549",
          900: "#3d3e42", //sidebar
          a00: "#393a3e",
          b00: "#303135", //secondsidebar
          c00: "#232428", // primary
          d00: "#616161", //text color in light mode
          e00: "#242424", // background gray1
          f00: "#2F2F2F", // background gray2
          g00: "#797979", // text gray
        },
        extraBlue: {
          300: "#5182ef",
          400: "#3b73ed",
          500: "#2563EB",
          600: "#1e4fbc",
          700: "#163b8d",
        },
      },
      boxShadow: {
        box_Shadow: "0px 0px 20px 10px rgb(0 0 0 / .15)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        boxshadow: "inset 0 0 20px #f8a100",
        boxShadow: " inset 0 10px 8px #21130d, inset 0 -10px 8px #21130d",
        colorShadow: " 0 0 10px -3px #6d6d6d;",
      },
      screens: {
        mobile: "500px",
        xls: "1366px",
      },
      animation: {
        shake: "1s linear shake",
        copy: "0.5s linear copy ",
        rotate: "1s infinite linear rotation ",
      },
      keyframes: {
        shake: {
          "0% , 90%": { transform: "translate3d(-1px, 0, 0)" },
          "20%,80%": { transform: "translate3d(2px, 0, 0)" },
          "30%,50%,70%": { transform: "translate3d(-4px, 0, 0)" },
          "40%,60%": { transform: "translate3d(4px, 0, 0)" },
        },
        copy: {
          "0%": { transform: "translateY(-50px) translateX(5px)", opacity: 1 },
          "100%": { transform: "translateY(-70px) translateX(5px)", opacity: 0 },
        },
        rotation: {
          "100% ": {
            transform: "rotatey(360deg)",
          },
        },
      },
    },
  },
}
