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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var orderNow_1 = __importDefault(require("../orderNow"));
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
function Navbar() {
    return ((0, jsx_runtime_1.jsxs)("nav", __assign({ className: styles_module_css_1.default.navbar }, { children: [(0, jsx_runtime_1.jsx)("a", __assign({ href: "#about", className: styles_module_css_1.default.link }, { children: "About Us" })), (0, jsx_runtime_1.jsx)("a", __assign({ href: "#facebook", className: styles_module_css_1.default.link }, { children: "Our Team" })), (0, jsx_runtime_1.jsx)("a", __assign({ href: "#contact", className: styles_module_css_1.default.link }, { children: "Contact Us" })), (0, jsx_runtime_1.jsx)(orderNow_1.default, {})] })));
}
exports.default = Navbar;
