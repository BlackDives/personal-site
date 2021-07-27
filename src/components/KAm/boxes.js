import React from "react"
import {
    Flex,
    Button,
    Text,
    Box,
    UnorderedList,
    ListItem,
    Link,
    transition,
} from "@chakra-ui/react"
import reactDom from "react-dom"

const Boxes = () => {
    return (
        <>
            <Link
                _hover={{
                    textDecoration: "none",
                    opacity: "0.5",
                    transition: "all 0.3s ease",
                }}
            >
                <Box
                    background={"#fff"}
                    boxSize={"256px"}
                    height={"360px"}
                    display={"flex"}
                    alignItems={"flex-end"}
                    borderRadius={"8px"}
                    boxShadow={"2px 2px 5px rgba(0,0,0, 0.5)"}
                    margin={"auto"}
                >
                    <Text
                        textAlign={"center"}
                        background={"#822FAF"}
                        width={"100%"}
                        color={"white"}
                        padding={"1.2rem"}
                        fontSize={"lg"}
                    >
                        Random Page
                    </Text>
                </Box>
            </Link>
        </>
    )
}

export default Boxes
