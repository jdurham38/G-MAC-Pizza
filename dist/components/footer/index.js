"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var fa_1 = require("react-icons/fa");
function Footer() {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Footer" }), (0, jsx_runtime_1.jsx)("li", { children: "Careers" }), (0, jsx_runtime_1.jsx)("li", { children: "Location" }), (0, jsx_runtime_1.jsx)("li", { children: "Phone Number: " }), (0, jsx_runtime_1.jsx)("li", { children: "Hours" }), (0, jsx_runtime_1.jsx)("li", { children: "Privacy Policy" }), (0, jsx_runtime_1.jsx)("li", { children: "Terms of Service" }), (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://www.facebook.com/macpizzawings3", target: "_blank", rel: "noopener noreferrer" }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaFacebook, {}) }))] }));
}
exports.default = Footer;
