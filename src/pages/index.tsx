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
import ProjectComponent from "~components/KAm/projects-component"
import FooterComponent from "~components/KAm/footer-component"
import HomeComponent from "~components/KAm/home-component"
import About from "~components/KAm/about-component"
import AboutComponent from "~components/KAm/about-component"
const SirKamron = () => {
    return (
        <>
            <HomeComponent></HomeComponent>
            <AboutComponent></AboutComponent>
            <ProjectComponent></ProjectComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}

export default SirKamron
