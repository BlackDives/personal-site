import React from "react"
import { Box, BoxProps } from "@chakra-ui/react"

type ResponsiveBlockType = {
    wide?: boolean
    children?: React.ReactNode
}

/**
 * Wraps sections of pages to uniformly create padding.
 * @param {boolean} wide Slightly wider variant, which will override if both wide and narrow are true.
 * @param children
 */
const ResponsiveBlock: React.FC<ResponsiveBlockType & BoxProps> = ({
    wide = false,
    children,
    ...props
}) => {
    const widePaddings = ["1em", "2em", "3em", "4em", "calc(50vw - 720px)"]

    const normalPaddings = [
        "1.5em",
        "2.5em",
        "5em",
        "6em",
        "calc(50vw - 540px)",
    ]

    const paddings = wide ? widePaddings : normalPaddings

    return (
        <Box
            {...props}
            w="100%"
            h="100%"
            paddingLeft={paddings}
            paddingRight={paddings}
        >
            {children}
        </Box>
    )
}

export default ResponsiveBlock
