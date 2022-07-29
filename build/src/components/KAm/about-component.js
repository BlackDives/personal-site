import React from "react"
import { Button, Text, Box, UnorderedList, ListItem } from "@chakra-ui/react"
import { FaChevronDown, FaReact, FaJava, FaJsSquare } from "react-icons/fa"
var AboutComponent = function() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            Box,
            {
                id: "About",
                background: "#47126B",
                height: "100vh",
                fontFamily: "Trebuchet MS",
            },
            React.createElement(
                Text,
                {
                    color: "white",
                    fontSize: "lg",
                    padding: "2%",
                    textAlign: ["center"],
                },
                "About Me"
            ),
            React.createElement(
                Text,
                {
                    fontSize: "lg",
                    textAlign: "center",
                    color: "white",
                    padding: "2%",
                },
                "As a business-minded Computer Science student at Louisiana State University, I use my skills in programming and product design to help bring high-level analysis to the world of tech."
            ),
            React.createElement(
                Text,
                {
                    fontSize: "lg",
                    textAlign: "center",
                    color: "white",
                    padding: "2%",
                },
                "I am from the Dallas area in the state of Texas and I am 20 years old. I plan on pursuing a career in the field of Software Engineering and this page will be used to display my progress along the way."
            ),
            React.createElement(
                Box,
                null,
                React.createElement(
                    Text,
                    {
                        textAlign: "center",
                        color: "white",
                        fontSize: "lg",
                        textDecoration: "underline",
                    },
                    "Skills"
                ),
                React.createElement(
                    UnorderedList,
                    {
                        listStyleType: "none",
                        display: "flex",
                        justifyContent: "center",
                    },
                    React.createElement(
                        ListItem,
                        { padding: "1.1rem" },
                        React.createElement(FaReact, {
                            size: "3rem",
                            color: "white",
                        })
                    ),
                    React.createElement(
                        ListItem,
                        { padding: "1.1rem" },
                        React.createElement(FaJava, {
                            size: "3rem",
                            color: "white",
                        })
                    ),
                    React.createElement(
                        ListItem,
                        { padding: "1.1rem" },
                        React.createElement(FaJsSquare, {
                            size: "3rem",
                            color: "white",
                        })
                    )
                )
            ),
            React.createElement(
                Box,
                { display: "flex", justifyContent: "center", padding: "2%" },
                React.createElement(
                    Button,
                    {
                        background: "transparent",
                        _hover: { background: "none" },
                        _active: { transform: "scale(0.5)" },
                        _focus: { background: "transparent" },
                        onClick: function() {
                            return document
                                .getElementById("projects")
                                .scrollIntoView({ behavior: "smooth" })
                        },
                    },
                    " ",
                    React.createElement(FaChevronDown, {
                        size: "3rem",
                        color: "white",
                    })
                )
            )
        )
    )
}
export default AboutComponent
