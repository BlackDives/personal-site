import React from "react"
import { Flex, Text, Button } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"

const HeaderSection = () => {
    return (
        <Flex
            w={"100%"}
            h={["100vh", "90vh"]}
            background={"#131313"}
            overflowX={"hidden"}
        >
            <Flex
                display={"flex"}
                direction={"column"}
                w={"100%"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 4,
                        repeat: Infinity,
                    }}
                >
                    <Text
                        color={"white"}
                        backgroundImage="linear-gradient(90deg, #fc6045 0%, #fd1d1d 10%, #9518fc 100%)"
                        backgroundClip="text"
                        textFillColor="transparent"
                        fontSize={["xl", "3xl"]}
                    >
                        Hey
                    </Text>
                </motion.div>
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 4,
                        repeat: Infinity,
                    }}
                >
                    <Text
                        color={"white"}
                        backgroundImage="linear-gradient(90deg, #fc6045 0%, #fd1d1d 10%, #9518fc 100%)"
                        backgroundClip="text"
                        textFillColor="transparent"
                        fontSize={["xl", "3xl"]}
                    >
                        I'm Sir Kamron
                    </Text>
                </motion.div>
                <Flex pt={5}>
                    <Button
                        background={"transparent"}
                        _hover={{
                            background: "transparent",
                            transform: "scale(2)",
                        }}
                    >
                        {" "}
                        <FaChevronDown size={30} />
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default HeaderSection
