import React from "react";
import { Text, Box, Link, } from "@chakra-ui/react";
import List from "~components/KAm/list";
var FooterComponent = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { height: "42rem", background: "#822FAF" },
            React.createElement(Box, { display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%", overflowX: "hidden", id: "contact", fontFamily: "Trebuchet MS" },
                React.createElement(Link, { fontSize: "3xl", color: "white", _hover: { textDecor: "none" }, textAlign: ["center", "initial"] }, "Let's work together!"),
                React.createElement(Text, { color: "#bdbdbd", textAlign: ["center", "initial"] }, "What do you want for lunch?"),
                React.createElement(List, null)))));
};
export default FooterComponent;
