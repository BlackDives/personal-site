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
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
    FaHashtag,
} from "react-icons/fa"

const Socials = [
    {
        social: "LinkedIn",
        link: "https://www.linkedin.com/in/sir-w/",
        icon: <FaLinkedin />,
    },
    {
        social: "GitHub",
        link: "https://github.com/BlackDives",
        icon: <FaGithub />,
    },
    {
        social: "Twitter",
        link: "https://twitter.com/KamNotKam",
        icon: <FaTwitter />,
    },
    {
        social: "Email",
        link: "mailto: sirkamronwilson00@gmail.com",
        icon: <FaEnvelope />,
    },
    {
        social: "Phone",
        link: "#",
        icon: <FaHashtag />,
    },
]
const List = () => {
    return (
        <>
            <UnorderedList
                display={"flex"}
                flexDirection={["column", "row"]}
                justifyContent={"center"}
                width={"100%"}
                margin={0}
                listStyleType="none"
                color={"#fff"}
                fontSize={"lg"}
            >
                {Socials.map(data => {
                    return (
                        <ListItem
                            padding={"1.2rem"}
                            transition={"all 0.3s ease"}
                            display={"flex"}
                            alignItems={"center"}
                            margin={"auto"}
                            _hover={{
                                color: "#fc6045",
                                transition: "all 0.3s ease",
                            }}
                        >
                            {data.icon}
                            <Link
                                _hover={{
                                    textDecor: "none",
                                }}
                                href={data.link}
                                marginLeft={"12px"}
                                target={"_blank"}
                            >
                                {data.social}
                            </Link>
                        </ListItem>
                    )
                })}
            </UnorderedList>
        </>
    )
}
export default List
