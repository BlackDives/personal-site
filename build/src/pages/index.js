import React from "react";
import ProjectComponent from "~components/KAm/projects-component";
import FooterComponent from "~components/KAm/footer-component";
import HomeComponent from "~components/KAm/home-component";
import AboutComponent from "~components/KAm/about-component";
var SirKamron = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(HomeComponent, null),
        React.createElement(AboutComponent, null),
        React.createElement(ProjectComponent, null),
        React.createElement(FooterComponent, null)));
};
export default SirKamron;
