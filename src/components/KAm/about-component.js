import React from "react"
import {
    Flex,
    Button,
    Text,
    Box,
    UnorderedList,
    ListItem,
    Link,
    HStack,
} from "@chakra-ui/react"
import reactDom from "react-dom"
import { motion, isValidMotionProp } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Boxes from "~components/KAm/boxes"
import AboutMeList from "~components/KAm/about-me-list"
import { FaChevronDown, FaReact, FaJava, FaJsSquare } from "react-icons/fa"

const AboutComponent = () => {
    return (
        <>
            <Box
                id={"About"}
                background={"#47126B"}
                fontFamily={"Trebuchet MS"}
            >
                <Text
                    color={"white"}
                    fontSize={"lg"}
                    padding={"2%"}
                    textAlign={["center"]}
                >
                    About Me
                </Text>
                <Text
                    fontSize={"lg"}
                    textAlign={"center"}
                    color={"white"}
                    padding="2%"
                >
                    As a business-minded Computer Science student at Louisiana
                    State University, I use my skills in programming and product
                    design to help bring high-level analysis to the world of
                    tech.
                </Text>
                <Text
                    fontSize={"lg"}
                    textAlign={"center"}
                    color={"white"}
                    padding={"2%"}
                >
                    I am from the Dallas area in the state of Texas and I am 20
                    years old. I plan on pursuing a career in the field of
                    Software Engineering and this page will be used to display
                    my progress along the way.
                </Text>
                <Box>
                    <Text
                        textAlign={"center"}
                        color={"white"}
                        fontSize={"lg"}
                        textDecoration={"underline"}
                    >
                        Skills
                    </Text>
                    <UnorderedList
                        listStyleType={"none"}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <ListItem padding={"1.1rem"}>
                            <FaReact size={"3rem"} color={"white"}></FaReact>
                        </ListItem>
                        <ListItem padding={"1.1rem"}>
                            <FaJava size={"3rem"} color={"white"} />
                        </ListItem>
                        <ListItem padding={"1.1rem"}>
                            <FaJsSquare
                                size={"3rem"}
                                color={"white"}
                            ></FaJsSquare>
                        </ListItem>
                    </UnorderedList>
                </Box>
                <Box display={"flex"} justifyContent={"center"} padding={"2%"}>
                    <Button
                        background={"transparent"}
                        _hover={{ background: "none" }}
                        _active={{ transform: "scale(0.5)" }}
                        _focus={{ background: "transparent" }}
                        onClick={() =>
                            document
                                .getElementById("projects")
                                .scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        {" "}
                        <FaChevronDown
                            size={"3rem"}
                            color={"white"}
                        ></FaChevronDown>
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default AboutComponent
