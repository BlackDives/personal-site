import React from "react"
import {
    Flex,
    Button,
    Text,
    Box,
    Link,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react"
import reactDom from "react-dom"
import List from "~components/KAm/list"

const Footer = () => {
    return (
        <Box height="42rem" background={"#131313"}>
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                height={"100%"}
                overflowX={"hidden"}
                id={"contact"}
                fontFamily={"Trebuchet MS"}
            >
                <Link
                    fontSize={"3xl"}
                    color={"#9518fc"}
                    _hover={{ textDecor: "none" }}
                    textAlign={["center", "initial"]}
                >
                    Let's work together!
                </Link>
                <Text color={"#fc6045"} textAlign={["center", "initial"]}>
                    What do you want for lunch?
                </Text>
                <List></List>
            </Box>
        </Box>
    )
}
export default Footer
