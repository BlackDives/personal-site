import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = {
    body: "Poppins",
    heading: "Montserrat",
}

const fontSizes = {
    "2xs": "12px",
    xs: "14px",
    sm: "16px",
    md: "22px",
    lg: "27px",
    xl: "44px",
    "2xl": "48px",
    "3xl": "62px",
    "4xl": "80px",
}

const colors = {
    brand: {
        default: "#f74734",
        50: "#fddcd8",
        100: "#fcb8b1",
        200: "#fa9589",
        300: "#f87162",
        400: "#f74734",
        500: "#eb200a",
        600: "#c41b08",
        700: "#9d1607",
        800: "#761005",
        900: "#3b0802",
    },
    gray: {
        50: "#f6f6f6",
        100: "#e0e0e0",
        200: "#cccccc",
        300: "#b8b8b8",
        400: "#a3a3a3",
        500: "#8f8f8f",
        600: "#7a7a7a",
        700: "#666666",
        800: "#525252",
        900: "#333333",
    },
    gradient: "#ff6034",
    gradientBg: "linear-gradient(135deg, #f74734 0%, #ff6034 100%)",
    white: "#ffffff",
    black: "#242424",
    transparent: "transparent",
}

const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
})

const components = {
    Input: {
        variants: {
            flushed: {
                bg: "transparent",
            },
        },
        defaultProps: {
            size: "sm",
            variant: "flushed",
            focusBorderColor: "black",
        },
    },
    Textarea: {
        variants: {
            flushed: {
                bg: "transparent",
            },
        },
        defaultProps: {
            size: "sm",
            variant: "flushed",
            focusBorderColor: "black",
        },
    },
    Text: {
        baseStyle: {
            color: "black",
        },
    },
    Heading: {
        baseStyle: {
            color: "black",
        },
        sizes: {
            xl: {
                fontSize: "xl",
            },
        },
        defaultProps: {
            size: "xl",
        },
    },
    Button: {
        baseStyle: {
            fontWeight: "400",
        },
        variants: {
            brand: {
                bg: "gray.100",
                _hover: {
                    bg: "brand.400",
                    textColor: "white",
                },
                _active: {
                    bg: "brand.600",
                    textColor: "white",
                },
            },
        },
        sizes: {
            md: {
                fontSize: "sm",
            },
        },
        defaultProps: {},
    },
}

export const theme = extendTheme({
    fonts: fonts,
    fontSizes: fontSizes,
    colors: colors,
    breakpoints: breakpoints,
    components: components,
})
