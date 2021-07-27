import React from "react";
import { UnorderedList, ListItem, } from "@chakra-ui/react";
var AboutMeList = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(UnorderedList, { display: "flex", justifyContent: "center", fontSize: "xl" },
            React.createElement(ListItem, null, "I am a Computer Science student at Louisiana State University"),
            React.createElement(ListItem, null))));
};
export default AboutMeList;
