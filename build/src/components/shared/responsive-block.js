var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { Box } from "@chakra-ui/react";
/**
 * Wraps sections of pages to uniformly create padding.
 * @param {boolean} wide Slightly wider variant, which will override if both wide and narrow are true.
 * @param children
 */
var ResponsiveBlock = function (_a) {
    var _b = _a.wide, wide = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["wide", "children"]);
    var widePaddings = ["1em", "2em", "3em", "4em", "calc(50vw - 720px)"];
    var normalPaddings = [
        "1.5em",
        "2.5em",
        "5em",
        "6em",
        "calc(50vw - 540px)",
    ];
    var paddings = wide ? widePaddings : normalPaddings;
    return (React.createElement(Box, __assign({}, props, { w: "100%", h: "100%", paddingLeft: paddings, paddingRight: paddings }), children));
};
export default ResponsiveBlock;
