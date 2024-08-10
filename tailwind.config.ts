import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'Poppins': ['poppins', 'sans-serif'],
        'Inter': ['inter', 'sans-serif'],
      },
      fontSize: {
        "7xl": ["64px", "62px"],
        "6xl": ["48px", "58px"],
        "5xl": ["42px", "52px"],
        "4xl": ["36px", "44px"],
        "3xl": ["32px", "38px"],
        "2xl": ["24px", "30px"],
        xl: ["20px", "24px"],
        lg: ["18px", "22px"],
        base: ["16px", "18px"],
        sm: ["14px", "16px"],
        xs: ["12px", "14px"],
      },
      colors: {
        primary: {
          light: {
            "light": "#E9E9E9",
            "hover": "#DDDDDD",
            "active": "#B9B9B9",
          },
          normal: {
            "normal": "#1E1E1E",
            "hover": "#1B1B1B",
            "active": "#181818",
          },
          dark: {
            "dark": "#171717",
            "hover": "#121212",
            "active": "#0D0D0D",
            "darker": "#0B0B0B",
          },
        },
        secondary: {
          light: {
            "light": "#F7F7F6",
            "hover": "#F3F3F1",
            "active": "#E6E5E2",
          },
          normal: {
            "normal": "#AFACA2",
            "hover": "#9E9B92",
            "active": "#8C8A82",
          },
          dark: {
            "dark": "#83817A",
            "hover": "#696761",
            "active": "#4F4D49",
            "darker": "#3D3C39",
          },
        },
        accent: {
          color1: {

            light: {
              "light": "#F2F3FC",
              "hover": "#EBEDFA",
              "active": "#D6DBF4",
            },
            normal: {
              "normal": "#7A8ADC",
              "hover": "#6E7CC6",
              "active": "#626EB0",
            },
            dark: {
              "dark": "#5C68A5",
              "hover": "#495384",
              "active": "#373E63",
              "darker": "#2B304D",
            },
          },
          color2: {
            light: {
              "light": "#F5EFF9",
              "hover": "#F0E7F6",
              "active": "#E1CCED",
            },
            normal: {
              "normal": "#9D5CC5",
              "hover": "#8D53B1",
              "active": "#7E4A9E",
            },
            dark: {
              "dark": "#764594",
              "hover": "#5E3776",
              "active": "#472959",
              "darker": "#372045",
            },
          },
        },
       AddsOn: {
        "gray" : "#323231",
        "white" : "#FFF9E2",
        "neutral" : "#FFFFFF"
       },
      },
    },
  },

  plugins: [],
};
export default config;
