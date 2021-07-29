import React from "react"
import Home from "~components/KAm/home-component"
import {
    Flex,
    Button,
    Text,
    Box,
    UnorderedList,
    ListItem,
    Link,
} from "@chakra-ui/react"
import ResponsiveBlock from "~components/shared/responsive-block"
import HeaderPage from "~components/NewHeader/header-page"
import AboutMe from "~components/AboutMe/about-me"
import MyProjects from "~components/Projects/my-projects"
import Footer from "~components/NewFooter/footer"

const SirKamron = () => {
    return (
        <>
            <ResponsiveBlock background={"#131313"} overflowX={"hidden"} m={0}>
                <HeaderPage />
                <AboutMe />
                <MyProjects />
                <Footer />
            </ResponsiveBlock>
        </>
    )
}

export default SirKamron
