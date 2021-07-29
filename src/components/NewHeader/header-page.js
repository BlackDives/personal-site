import React from "react"
import { Flex } from "@chakra-ui/react"
import NavBar from "../NavBar/nav-bar"
import NewMobileNav from "../NavBar/new-mobile-nav"
import HeaderSection from "./header-section"

const HeaderPage = () => {
    return (
        <Flex direction={"column"} w={"100%"}>
            <NewMobileNav />
            <NavBar />
            <HeaderSection />
        </Flex>
    )
}
export default HeaderPage
