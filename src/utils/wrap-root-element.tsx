import React from "react"
import PropTypes from "prop-types"
import { ChakraProvider } from "@chakra-ui/react"

import { UserProvider } from "~config/user-context"
import { theme } from "~config/theme"

const WrapRootElement = ({ element }) => {
	return (
		<ChakraProvider theme={theme}>
			<UserProvider>{element}</UserProvider>
		</ChakraProvider>
	)
}

WrapRootElement.propTypes = {
	element: PropTypes.element,
}

export default WrapRootElement
