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
            neutral: {
              "0": "#FFFFFF",
              "25": "#FCFDFD",
              "50": "#F9FAFB",
              "100": "#F2F4F7",
              "200": "#E4E7EC",
              "300": "#D0D5DD",
              "400": "#98A1B3",
              "500": "#667085",
              "600": "#475067",
              "700": "#343C54",
              "800": "#1D2339",
              "900": "#101428",
            },
            error: {
              "25": "#FFF6EE",
              "50": "#FFEFE0",
              "100": "#FEE5CE",
              "200": "#FBC69D",
              "300": "#F69D6D",
              "400": "#EC7547",
              "500": "#E13B11",
              "600": "#C0230B",
              "700": "#A10F08",
              "800": "#810406",
              "900": "#650203",
            },
            warning: {
              "25": "#FFFEED",
              "50": "#FFFCDD",
              "100": "#FEFACB",
              "200": "#FDF498",
              "300": "#FBEB63",
              "400": "#FADE3D",
              "500": "#F4D000",
              "600": "#D1AF01",
              "700": "#AF9000",
              "800": "#8D7200",
              "900": "#705B03",
            },
            success: {
              "25": "#F6FFED",
              "50": "#EEFFDD",
              "100": "#E5FACF",
              "200": "#C7F5A3",
              "300": "#9AE16F",
              "400": "#6EC448",
              "500": "#389C1A",
              "600": "#248512",
              "700": "#156F0D",
              "800": "#0A5908",
              "900": "#054703",
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
