import React from "react"
import { Flex, Text, Image, Box, Grid } from "@chakra-ui/react"
import img from "~images/about-me-pic.png"
import { FaJava, FaReact, FaJsSquare } from "react-icons/fa"

const AboutMe = () => {
    const Skills = [
        { title: "REACT", level: 30 },
        { title: "REACT NATIVE", level: 10 },
        { title: "JAVA", level: 50 },
        { title: "JAVASCRIPT", level: 25 },
        { title: "WEBPACK", level: 10 },
    ]

    return (
        <Flex h={"90vh"}>
            <Text>It's me, Kam</Text>
        </Flex>
    )
}
export default AboutMe
