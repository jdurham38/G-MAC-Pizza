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
var styles_module_css_1 = __importDefault(require("./styles.module.css")); // Make sure the import path matches
function Hero() {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_css_1.default.hero }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_css_1.default.orderNow }, { children: [(0, jsx_runtime_1.jsx)("a", __assign({ href: "https://mac3.hrpos.heartland.us/menu", style: { color: 'red' } }, { children: "Order Now" })), "            "] })), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", __assign({ className: styles_module_css_1.default.items1 }, { children: "760 Memorial Pkwy, Phillipsburg, NJ 08865" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: styles_module_css_1.default.items2 }, { children: "(908) 768-3500" }))] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("li", __assign({ className: styles_module_css_1.default.items2 }, { children: "Monday-Thursday: 11:00-9:00, Friday-Saturday: 11:00-10:00, Sunday: 12:00-8:00" })) })] })));
}
exports.default = Hero;
