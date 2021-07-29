import React from "react"
import { Flex } from "@chakra-ui/react"
import NavBar from "../NavBar/nav-bar"
import HeaderSection from "./header-section"

const HeaderPage = () => {
    return (
        <Flex direction={"column"}>
            <NavBar />
            <HeaderSection />
        </Flex>
    )
}
export default HeaderPage
