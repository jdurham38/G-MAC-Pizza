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
var index_module_css_1 = __importDefault(require("./index.module.css"));
function Contact() {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: index_module_css_1.default.background }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "How did we do?" }), (0, jsx_runtime_1.jsx)("h2", { children: "Leave us a comment or suggestion and we'll get back to you ASAP!" }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: "Name" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: "Email: 5" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: "Phone: 555-555-5555" }) })] })));
}
exports.default = Contact;
