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

const Links = [
    {
        title: "Home",
        link: () =>
            document
                .getElementById("Home")
                .scrollIntoView({ behavior: "smooth" }),
    },
    {
        title: "About",
        link: () =>
            document
                .getElementById("About")
                .scrollIntoView({ behavior: "smooth" }),
    },
    {
        title: "Work",
        link: () =>
            document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" }),
    },
    {
        title: "Contact",
        link: () =>
            document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" }),
    },
]
const NavComponent = () => {
    return (
        <>
            <Box>
                <Box margin={0}>
                    <UnorderedList
                        display={"flex"}
                        listStyleType={"none"}
                        justifyContent={"flex-end"}
                        margin={0}
                        width={"100%"}
                        fontFamily={"Trebuchet MS"}
                        fontSize={"lg"}
                        textShadow={"1px 1px 0px rgba(0,0,0, 0.7)"}
                    >
                        {Links.map(blah)}
                    </UnorderedList>
                </Box>
            </Box>
        </>
    )
}

function blah(data) {
    return (
        <ListItem
            padding={"1.2rem"}
            color={"white"}
            transition={"all 0.3s ease"}
            _hover={{
                color: "lightgray",
                fontSize: "xl",
                tranisition: "all 0.3s ease",
            }}
        >
            <Button
                onClick={() => data.link()}
                background={"transparent"}
                fontSize={"lg"}
                _hover={{ background: "transparent", fontSize: "xl" }}
                _focus={{ outline: "none" }}
                _active={{ background: "none", transform: "scale(0.5)" }}
            >
                {data.title}
            </Button>
        </ListItem>
    )
}

export default NavComponent
