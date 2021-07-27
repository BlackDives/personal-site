var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import React from "react";
import { Box, Menu, MenuList, MenuButton, MenuItem, IconButton, } from "@chakra-ui/react";
import { FaBars, FaHome, FaAddressCard, FaTh, FaPhone } from "react-icons/fa";
import { useState } from "react";
var MobNav = [
    {
        name: "Home",
        place: function () {
            return document.getElementById("Home").scrollIntoView({ behavior: "smooth" });
        },
        icon: React.createElement(FaHome, null),
    },
    {
        name: "About",
        place: function () {
            return document.getElementById("About").scrollIntoView({ behavior: "smooth" });
        },
        icon: React.createElement(FaAddressCard, null),
    },
    {
        name: "Projects",
        place: function () {
            return document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
        },
        icon: React.createElement(FaTh, null),
    },
    {
        name: "Contact",
        place: function () {
            return document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        },
        icon: React.createElement(FaPhone, null),
    },
];
var MobileNav = function () {
    var _a = __read(useState(0), 2), count = _a[0], setCount = _a[1];
    var decrement = function () {
        setCount(function (prevCount) { return prevCount - 1; });
    };
    var increment = function () {
        setCount(function (prevCount) { return prevCount + 1; });
    };
    var isDarkMode = false;
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { display: ["flex", "none"], justifyContent: "flex-end", padding: "1.2rem" },
            React.createElement(Menu, null,
                React.createElement(MenuButton, { as: IconButton, rightIcon: React.createElement(FaBars, { size: "24px" }), background: isDarkMode ? "black" : "transparent", _active: { background: "transparent", color: "#DE541E" } }),
                React.createElement(MenuList, null, MobNav.map(function (data, index) {
                    return (React.createElement(MenuItem, { key: index, icon: data.icon, onClick: function () { return data.place(); } }, data.name));
                }))))));
};
export default MobileNav;
