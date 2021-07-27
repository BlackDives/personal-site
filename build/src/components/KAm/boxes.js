import React from "react";
import { Text, Box, Link, } from "@chakra-ui/react";
var Boxes = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Link, { _hover: {
                textDecoration: "none",
                opacity: "0.5",
                transition: "all 0.3s ease",
            } },
            React.createElement(Box, { background: "#fff", boxSize: "256px", height: "360px", display: "flex", alignItems: "flex-end", borderRadius: "8px", boxShadow: "2px 2px 5px rgba(0,0,0, 0.5)", margin: "auto" },
                React.createElement(Text, { textAlign: "center", background: "#822FAF", width: "100%", color: "white", padding: "1.2rem", fontSize: "lg" }, "Random Page")))));
};
export default Boxes;
