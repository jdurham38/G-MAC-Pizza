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
var modal_1 = __importDefault(require("../testimonials/modal"));
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
function About() {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_css_1.default.aboutContainer }, { children: [(0, jsx_runtime_1.jsx)("h1", __assign({ className: styles_module_css_1.default.aboutHeader }, { children: "About" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: styles_module_css_1.default.aboutText }, { children: "This is the about page" })), (0, jsx_runtime_1.jsx)(modal_1.default, {})] })));
}
exports.default = About;
