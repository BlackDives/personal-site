import React from "react"
import { Flex, Text, Button, Link } from "@chakra-ui/react"
import { motion } from "framer-motion"
import img from "~images/cypher-image.png"
import { FaGithub } from "react-icons/fa"

const ProjectBox = ({ title, desc, delay, link }) => {
    return (
        <motion.div
            animate={{
                y: [-50, 0],
                scale: [1.1, 1],
                opacity: [0, 1],
            }}
            transition={{
                ease: "easeInOut",
                duration: 0.7,
                delay: delay,
            }}
            style={{ height: "100%" }}
        >
            <Flex
                // background={"white"}
                flexDirection={"column"}
                border={"2px solid #9518fc"}
                borderRadius={"20px"}
                p={5}
                h="100%"
            >
                <Flex
                    background={`${img}`}
                    h={"150px"}
                    w={"100%"}
                    backgroundSize={"cover"}
                    justify={"center"}
                    align={"center"}
                >
                    <Text
                        fontSize={"lg"}
                        fontWeight={900}
                        backgroundImage="linear-gradient(90deg, #fc6045 0%, #fd1d1d 10%, #9518fc 100%)"
                        backgroundClip="text"
                        textFillColor="transparent"
                    >
                        {title}
                    </Text>
                </Flex>
                <Flex
                    flexDirection={"column"}
                    h="100%"
                    justifyContent="space-between"
                >
                    <Text color={"white"}>{desc}</Text>
                    <Flex
                        flexDir={"row"}
                        justifyContent={"flex-end"}
                        pt={4}
                        alignItems={"flex-end"}
                    >
                        <Button
                            background={"#9518fc"}
                            borderRightRadius={0}
                            borderRadius={"20px"}
                        >
                            <FaGithub color={"white"} />
                        </Button>
                        <Button
                            borderLeftRadius={0}
                            background={"#fc6045"}
                            borderRadius={"20px"}
                            _hover={{ background: "#fc6045", opacity: "0.5" }}
                        >
                            <Link
                                href={link}
                                _hover={{ textDecoration: "none" }}
                            >
                                {" "}
                                <Text color={"white"}>View Live</Text>
                            </Link>
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </motion.div>
    )
}
export default ProjectBox
