import React from "react"

import Layout from "~components/shared/layout"

const WrapPageElement = ({ element, props }) => {
	// props provide same data to Layout as Page element will get
	// including location, data, etc - you don't need to pass it
	return <Layout {...props}>{element}</Layout>
}

export default WrapPageElement
