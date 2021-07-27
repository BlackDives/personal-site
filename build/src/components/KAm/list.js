import React from "react";
import { Link, UnorderedList, ListItem, } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHashtag, } from "react-icons/fa";
var Socials = [
    {
        social: "LinkedIn",
        link: "https://www.linkedin.com/in/sir-w/",
        icon: React.createElement(FaLinkedin, null),
    },
    {
        social: "GitHub",
        link: "https://github.com/BlackDives",
        icon: React.createElement(FaGithub, null),
    },
    {
        social: "Twitter",
        link: "https://twitter.com/KamNotKam",
        icon: React.createElement(FaTwitter, null),
    },
    {
        social: "Email",
        link: "mailto: sirkamronwilson00@gmail.com",
        icon: React.createElement(FaEnvelope, null),
    },
    {
        social: "Phone",
        link: "#",
        icon: React.createElement(FaHashtag, null),
    },
];
var List = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(UnorderedList, { display: "flex", flexDirection: ["column", "row"], justifyContent: "center", width: "100%", margin: 0, listStyleType: "none", color: "#fff", fontSize: "lg" }, Socials.map(function (data) {
            return (React.createElement(ListItem, { padding: "1.2rem", transition: "all 0.3s ease", display: "flex", alignItems: "center", margin: "auto", _hover: {
                    color: "#DE541E",
                    transition: "all 0.3s ease",
                } },
                data.icon,
                React.createElement(Link, { _hover: {
                        textDecor: "none",
                    }, href: data.link, marginLeft: "12px", target: "_blank" }, data.social)));
        }))));
};
export default List;
