import React from "react";
import { Button, Box, UnorderedList, ListItem, } from "@chakra-ui/react";
var Links = [
    {
        title: "Home",
        link: function () {
            return document
                .getElementById("Home")
                .scrollIntoView({ behavior: "smooth" });
        },
    },
    {
        title: "About",
        link: function () {
            return document
                .getElementById("About")
                .scrollIntoView({ behavior: "smooth" });
        },
    },
    {
        title: "Work",
        link: function () {
            return document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
        },
    },
    {
        title: "Contact",
        link: function () {
            return document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
        },
    },
];
var NavComponent = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, null,
            React.createElement(Box, { margin: 0 },
                React.createElement(UnorderedList, { display: "flex", listStyleType: "none", justifyContent: "flex-end", margin: 0, width: "100%", fontFamily: "Trebuchet MS", fontSize: "lg", textShadow: "1px 1px 0px rgba(0,0,0, 0.7)" }, Links.map(blah))))));
};
function blah(data) {
    return (React.createElement(ListItem, { padding: "1.2rem", color: "white", transition: "all 0.3s ease", _hover: {
            color: "lightgray",
            fontSize: "xl",
            tranisition: "all 0.3s ease",
        } },
        React.createElement(Button, { onClick: function () { return data.link(); }, background: "transparent", fontSize: "lg", _hover: { background: "transparent", fontSize: "xl" }, _focus: { outline: "none" }, _active: { background: "none", transform: "scale(0.5)" } }, data.title)));
}
export default NavComponent;
