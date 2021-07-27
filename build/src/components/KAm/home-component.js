import React from "react";
import { Button, Text, Box, useTheme, HStack, } from "@chakra-ui/react";
import { motion } from "framer-motion";
import image from "~images/background-image.gif";
import NavComponent from "~components/KAm/nav-component";
import { FaChevronDown } from "react-icons/fa";
import MobileNav from "~components/KAm/mobile-nav";
var HomeComponent = function () {
    var theme = useTheme();
    var variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    var variants2 = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, fontSize: "3xl" },
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { backgroundImage: "url(" + image + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "46rem", width: "100%", 
            // overflow={"hidden"}
            id: "Home", fontFamily: "Trebuchet MS" },
            React.createElement(MobileNav, null),
            React.createElement(Box, { display: "flex", flexDir: "column", height: "100%", alignItems: "center", justifyContent: "center", id: "Home", position: "relative" },
                React.createElement(Text, { fontSize: ["lg", "2xl"], color: "white", textShadow: "1px 1px 0px rgba(0,0,0, 0.7)", display: "flex", flexDirection: "column" },
                    React.createElement(HStack, { spacing: 4 },
                        React.createElement(motion.div, { initial: "hidden", animate: "visible", variants: variants2, transition: { duration: 2 } },
                            React.createElement("span", null),
                            "Hey, I'm"),
                        " ",
                        React.createElement(motion.div, { initial: "hidden", animate: "visible", variants: variants, transition: { delay: 2, duration: 0.5 } }, "Sir Kam'ron"))),
                React.createElement(Text, { color: "white", fontSize: ["md", "lg"], textShadow: "1px 1px 0px rgba(0,0,0, 0.5)" }, "a web developer"),
                React.createElement(Box, { display: ["none", "initial"] },
                    React.createElement(NavComponent, null)),
                React.createElement(Button, { _focus: { outline: "none" }, _active: {
                        background: "none",
                        transform: "scale(0.5)",
                    }, _hover: { background: "transparent" }, background: "transparent", onClick: function () {
                        return document
                            .getElementById("About")
                            .scrollIntoView({ behavior: "smooth" });
                    } },
                    React.createElement(FaChevronDown, { color: "white", size: "3rem", filter: "drop-shadow(1px 1px 0px rgba(0,0,0, 0.5))" }))))));
};
export default HomeComponent;
