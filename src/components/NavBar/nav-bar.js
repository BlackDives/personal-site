import React from "react"
import {
    Flex,
    UnorderedList,
    ListItem,
    Link,
    Text,
    Button,
} from "@chakra-ui/react"

const NavBar = () => {
    const Links = [
        {
            title: "HOME",
            link: () =>
                document
                    .getElementById("Home")
                    .scrollIntoView({ behavior: "smooth" }),
        },
        {
            title: "ABOUT ME",
            link: () =>
                document
                    .getElementById("AboutMe")
                    .scrollIntoView({ behavior: "smooth" }),
        },
        {
            title: "PROJECTS",
            link: () =>
                document
                    .getElementById("MyProjects")
                    .scrollIntoView({ behavior: "smooth" }),
        },
        {
            title: "CONTACT",
            link: () =>
                document
                    .getElementById("FooterSection")
                    .scrollIntoView({ behavior: "smooth" }),
        },
    ]

    return (
        <Flex
            w={"100%"}
            height={["100px"]}
            overflowX={"hidden"}
            background={"#131313"}
            display={["none", "none", "none", "initial", "initial"]}
        >
            <UnorderedList
                display={"flex"}
                flexDir={"row"}
                listStyleType={"none"}
                w={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                {Links.map(data => {
                    return (
                        <ListItem p={[5]}>
                            <Button
                                color={"whiteAlpha.400"}
                                background={"transparent"}
                                fontSize={["md"]}
                                fontWeight={"extrabold"}
                                onClick={() => data.link()}
                                _hover={{
                                    textDecoration: "none",
                                    color: "#9518fc",
                                    transition: "all 0.3 ease",
                                    background: "transparent",
                                }}
                            >
                                {data.title}
                            </Button>
                        </ListItem>
                    )
                })}
            </UnorderedList>
        </Flex>
    )
}

export default NavBar
