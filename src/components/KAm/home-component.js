import React from "react"
import {
    Flex,
    Button,
    Text,
    Box,
    UnorderedList,
    ListItem,
    useTheme,
    HStack,
    Link,
    scaleFadeConfig,
} from "@chakra-ui/react"
import { motion, isValidMotionProp, transform } from "framer-motion"
import image from "~images/background-image.gif"
import NavComponent from "~components/KAm/nav-component"
import { FaChevronDown } from "react-icons/fa"
import MobileNav from "~components/KAm/mobile-nav"

const HomeComponent = () => {
    const theme = useTheme()

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const variants2 = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, fontSize: "3xl" },
    }

    return (
        <>
            <Box
                backgroundImage={`url(${image})`}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
                height={"46rem"}
                width={"100%"}
                // overflow={"hidden"}
                id={"Home"}
                fontFamily={"Trebuchet MS"}
                // backgroundColor={"#47126B"}
            >
                <MobileNav></MobileNav>
                <Box
                    display={"flex"}
                    flexDir={"column"}
                    height={"100%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    id={"Home"}
                    position={"relative"}
                >
                    <Text
                        fontSize={["lg", "2xl"]}
                        color={"white"}
                        textShadow={"1px 1px 0px rgba(0,0,0, 0.7)"}
                        display={"flex"}
                        flexDirection={"column"}
                    >
                        <HStack spacing={4}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={variants2}
                                transition={{ duration: 2 }}
                            >
                                <span></span>
                                Hey, I'm
                            </motion.div>{" "}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                transition={{ delay: 2, duration: 0.5 }}
                            >
                                Sir Kam'ron
                            </motion.div>
                        </HStack>
                    </Text>
                    <Text
                        color={"white"}
                        fontSize={["md", "lg"]}
                        textShadow={"1px 1px 0px rgba(0,0,0, 0.5)"}
                    >
                        a web developer
                    </Text>
                    <Box display={["none", "initial"]}>
                        <NavComponent />
                    </Box>
                    <Button
                        _focus={{ outline: "none" }}
                        _active={{
                            background: "none",
                            transform: "scale(0.5)",
                        }}
                        _hover={{ background: "transparent" }}
                        background={"transparent"}
                        onClick={() =>
                            document
                                .getElementById("About")
                                .scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        <FaChevronDown
                            color={"white"}
                            size={"3rem"}
                            filter={"drop-shadow(1px 1px 0px rgba(0,0,0, 0.5))"}
                        ></FaChevronDown>
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default HomeComponent
