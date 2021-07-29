import React from "react"
import { Flex, Text } from "@chakra-ui/react"
import { motion, useAnimation } from "framer-motion"

const HeaderSection = () => {
    const variants = {
        visible: { top: 100 },
        hidden: { top: 0 },
    }

    // const controls = useAnimation()
    // controls.start({
    //     y: 10,
    // })

    return (
        <Flex w={"100%"} h={"90vh"} background={"#131313"}>
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
                        fontSize={"3xl"}
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
                        fontSize={"3xl"}
                    >
                        I'm Sir Kamron
                    </Text>
                </motion.div>
            </Flex>
        </Flex>
    )
}
export default HeaderSection
