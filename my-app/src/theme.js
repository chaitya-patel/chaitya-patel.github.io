import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lexend"; 

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }

export const MyTheme = extendTheme ({
    colors: {
        purple: {
            50: "#f8ecff",
            100: "#ddcaea",
            200: "#c1a9d7",
            300: "#a687c6",
            400: "#8a64b4",
            500: "#6e4b9b",
            600: "#593a79",
            700: "#432958",
            800: "#2c1837",
            900: "#140618",
        },
        coral: {
            50: "#ffe5e7",
            100: "#fbb9ba",
            200: "#f38e8b",
            300: "#ee5e63",
            400: "#e83043",
            500: "#cf1734",
            600: "#a11132",
            700: "#740c2d",
            800: "#46051e",
            900: "#1d000e",
        }
    },
    config,
    fonts: {
        heading: `'Lexend', sans-serif`,
        body: `'Lexend', sans-serif`
    },

});
