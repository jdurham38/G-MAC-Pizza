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
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var logo_1 = __importDefault(require("../logo"));
var navbar_1 = __importDefault(require("../navbar"));
function Header() {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_css_1.default.header }, { children: [(0, jsx_runtime_1.jsx)(logo_1.default, {}), (0, jsx_runtime_1.jsx)(navbar_1.default, {})] })));
}
exports.default = Header;
