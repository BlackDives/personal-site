import React from "react"
import { Flex, UnorderedList, ListItem, Link, Text } from "@chakra-ui/react"

const NavBar = () => {
    const Links = [
        { title: "HOME", link: "" },
        { title: "ABOUT ME", link: "" },
        { title: "PROJECTS", link: "" },
        { title: "CONTACT", link: "" },
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
                            <Link
                                href={data.link}
                                color={"whiteAlpha.400"}
                                fontSize={["md"]}
                                fontWeight={"extrabold"}
                                _hover={{
                                    textDecoration: "none",
                                    color: "#9518fc",
                                    transition: "all 0.3 ease",
                                }}
                            >
                                {data.title}
                            </Link>
                        </ListItem>
                    )
                })}
            </UnorderedList>
        </Flex>
    )
}

export default NavBar
