import React, { useState } from "react"
import {
    Flex,
    Text,
    Button,
    UnorderedList,
    ListItem,
    Link,
} from "@chakra-ui/react"
import ResponsiveBlock from "../shared/responsive-block"
import Hamburger from "hamburger-react"

const NewMobileNav = () => {
    const [isOpen, setOpen] = useState(false)

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
        <>
            <Flex
                display={["initial", "initial", "initial", "none", "none"]}
                height={"100px"}
                w={"100%"}
                overflowX={"hidden"}
                background={"#131313"}
                flexDirection={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
            >
                <Flex
                    w={"100%"}
                    h={"100%"}
                    flexDirection={"row"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    zIndex={99}
                >
                    {" "}
                    <Hamburger
                        toggle={setOpen}
                        toggled={isOpen}
                        color={"white"}
                    />
                </Flex>
            </Flex>
            {isOpen && (
                <ResponsiveBlock background={"orange"}>
                    <Flex
                        height={"100vh"}
                        width={"100%"}
                        background={"#131313"}
                        opacity={"0.9"}
                        position={"absolute"}
                        top={"100px"}
                        left={0}
                        zIndex={2}
                        overflowX={"hidden"}
                    >
                        <UnorderedList
                            display={"flex"}
                            flexDir={"column"}
                            listStyleType={"none"}
                            w={"100%"}
                            justifyContent={"flex-start"}
                            alignItems={"center"}
                            m={0}
                        >
                            {Links.map(data => {
                                return (
                                    <ListItem p={[5]}>
                                        <Button
                                            onClick={() => {
                                                data.link()
                                                setOpen(!isOpen)
                                            }}
                                            background={"transparent"}
                                            color={"white"}
                                            fontSize={["md"]}
                                            fontWeight={"extrabold"}
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
                </ResponsiveBlock>
            )}
        </>
    )
}
export default NewMobileNav
