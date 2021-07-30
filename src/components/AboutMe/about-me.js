import React, { useRef } from "react"
import { Flex, Text, Image, Box, Grid } from "@chakra-ui/react"
import { useInView } from "react-intersection-observer"
import { motion, useMotionValue, useSpring } from "framer-motion"
import img from "~images/about-me-pic.png"

const AboutMe = () => {
    const { ref, inView, entry } = useInView({ threshold: 0 })

    const x = useSpring(0, { stiffness: 300 })

    const Skills = [
        { title: "REACT", level: inView ? 30 : 0 },
        { title: "REACT NATIVE", level: 10 },
        { title: "JAVA", level: 50 },
        { title: "JAVASCRIPT", level: 25 },
        { title: "WEBPACK", level: 10 },
        { title: "GIT", level: 15 },
    ]

    if (inView == true) {
    }

    return (
        <Flex
            background={"#131313"}
            flexDir={"column"}
            w={"100%"}
            pt={[0, 20]}
            id={"AboutMe"}
        >
            <Flex h={"60%"} flexDir={["column", "row"]}>
                <Flex
                    w={["100%", "40%"]}
                    flexDir={"row"}
                    justifyContent={"center"}
                >
                    <Flex
                        borderRadius={"80%"}
                        w={{ base: "230px", lg: "400px" }}
                        h={{ base: "230px", lg: "400px" }}
                        borderImage={
                            "linear-gradient(to bottom, red, blue, green)"
                        }
                        backgroundImage={
                            "linear-gradient(90deg, #fc5045 0%, #fd1d1d 30%,#9518fc 100%)"
                        }
                        flexDir={"row"}
                        justifyContent={"center"}
                    >
                        <Image
                            src={img}
                            h={"100%"}
                            backgroundSize={"contain"}
                            w={"100%"}
                            padding={5}
                        />
                    </Flex>
                </Flex>
                <Flex
                    w={["100%", "70%"]}
                    flexDir={"column"}
                    alignItems={"center"}
                >
                    <Text
                        color={"#9518fc"}
                        fontSize={"xl"}
                        fontWeight={900}
                        pt={[5, 0]}
                    >
                        ABOUT ME
                    </Text>
                    <Text
                        color={"#fc6045"}
                        fontWeight={900}
                        textAlign={"center"}
                    >
                        SIR KAMRON WILSON - WEB DEVELOPER
                    </Text>
                    <Text
                        textAlign={"center"}
                        color={"white"}
                        w={["100%", "60%"]}
                        pt={10}
                        fontSize={"md"}
                    >
                        As a business-minded Computer Science student at
                        Louisiana State University, I use my skills in
                        programming and product design to help bring high-level
                        analysis to the world of tech. I am from the Dallas area
                        in the state of Texas and I am 19 years old. I plan on
                        pursuing a career in the field of Software Engineering
                        and this page will be used to display my progress along
                        the way.
                    </Text>
                </Flex>
            </Flex>
            <Flex
                w={"100%"}
                direction={["column", "row"]}
                justifyContent={"center"}
                h={"40%"}
                pt={[10, 20]}
            >
                <Flex
                    direction={"column"}
                    h={"100%"}
                    w={["100%", "40%"]}
                    alignItems={["flex-start", "center"]}
                >
                    <Flex direction={"column"}>
                        <Flex direction={"column"}>
                            <Text color={"white"} fontSize={"md"}>
                                BIO
                            </Text>
                        </Flex>
                        <Flex direction={"column"} pt={3}>
                            <Text color={"white"}>NAME</Text>
                            <Text color={"#9518fc"}>Sir Kam'ron Wilson</Text>
                        </Flex>
                        <Flex direction={"column"} pt={3}>
                            <Text color={"white"}>AGE</Text>
                            <Text color={"#9518fc"}>19</Text>
                        </Flex>
                        <Flex direction={"column"} pt={3}>
                            <Text color={"white"}>SCHOOL</Text>{" "}
                            <Text color={"#9518fc"}>
                                Louisiana State University
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    flexDir={"column"}
                    p={[0, 10]}
                    w={["100%", "60%"]}
                    pt={[20, 0]}
                >
                    <Flex>
                        <Text color={"white"} fontSize={"md"}>
                            SKILLS
                        </Text>
                    </Flex>
                    <Grid
                        gridTemplateColumns={[
                            "repeat(1, 1fr)",
                            "repeat(2, 1fr)",
                        ]}
                        gridTemplateRows={["repear(8, 1fr)", "repeat(4, 1fr)"]}
                    >
                        {Skills.map(data => {
                            return (
                                <Flex flexDirection={"column"} pt={3} ref={ref}>
                                    <Text color={"white"}>{data.title}</Text>
                                    <Box
                                        backgroundImage={
                                            "linear-gradient(90deg, #fc5045 0%, #fd1d1d 30%,#9518fc 100%)"
                                        }
                                        height={"10px"}
                                        w={inView ? `${data.level}%` : 0}
                                        transition={"width 4s ease-in-out"}
                                        transitionDelay={"0.8s"}
                                        borderRadius={"10px"}
                                    ></Box>
                                </Flex>
                            )
                        })}
                    </Grid>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default AboutMe
