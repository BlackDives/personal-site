import React from "react";
import { Button, Text, Box, Link, SimpleGrid, } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Boxes from "~components/KAm/boxes";
var ProjectComponent = function () {
    var vari = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    };
    //const controls = useAnimation();
    //const { ref, inView } = useInView();
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { background: "#6411AD", margin: 0, overflowX: "hidden", id: "projects", fontFamily: "Trebuchet MS", display: "flex", alignContent: "center", justifyContent: "center", flexDirection: "column", padding: "2%" },
            React.createElement(Text, { textAlign: "center", padding: "1.2rem", fontSize: "2xl", textDecoration: "underline", color: "#fff", textShadow: "1px 1px 2px black" }, "Check Out Some of My Stuff"),
            React.createElement(SimpleGrid, { columns: [1, 2, 3, 3, 3], 
                //   display={"grid"}
                //   gridTemplateColumns={[1, 2, 3, 3, 3]}
                spacing: "1.2rem", justifyContent: "center", alignContent: "center", width: "100%" },
                React.createElement(motion.div, { initial: "hidden", animate: "visible", transition: { delay: 0, duration: 1 }, variants: vari },
                    React.createElement(Boxes, null)),
                React.createElement(motion.div, { initial: "hidden", animate: "visible", transition: { delay: 0.2, duration: 1 }, variants: vari },
                    React.createElement(Boxes, null)),
                React.createElement(motion.div, { initial: "hidden", animate: "visible", transition: { delay: 0.4, duration: 1 }, variants: vari },
                    React.createElement(Boxes, null)),
                React.createElement(motion.div, { initial: "hidden", animate: "visible", transition: { delay: 0.6, duration: 1 }, variants: vari },
                    React.createElement(Boxes, null)),
                React.createElement(motion.div, { initial: "hidden", animate: "visible", transition: { delay: 0.8, duration: 1 }, variants: vari },
                    React.createElement(Boxes, null)),
                React.createElement(motion.div, { initial: "hidden", animate: "visible", transition: { delay: 1, duration: 2 }, variants: vari },
                    React.createElement(Boxes, null))),
            React.createElement(Link, { _hover: { textDecoration: "none" }, _visited: {
                    background: "linear-gradient(to right, #ff6e7f, #bfe9ff)",
                }, href: "https://github.com/BlackDives?tab=projects", display: "grid", gridTemplateColumns: "3", target: "_blank", padding: "1.2rem" },
                React.createElement(Box, { gridColumnGap: ["1", "2/3"], width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" },
                    React.createElement(Button, { background: "#822FAF", color: "white", fontSize: "lg", padding: "1.5rem", position: "static", _hover: { background: "#C05299" } }, "Show All"))))));
};
export default ProjectComponent;
