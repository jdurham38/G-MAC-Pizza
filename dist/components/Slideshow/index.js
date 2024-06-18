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
var Carousel_1 = __importDefault(require("react-bootstrap/Carousel"));
var styles_module_css_1 = __importDefault(require("./styles.module.css")); // Import your CSS module
var gmac_1_jpeg_1 = __importDefault(require("../../images/gmac-1.jpeg"));
var gmac_2_jpeg_1 = __importDefault(require("../../images/gmac-2.jpeg"));
var gmac_3_jpeg_1 = __importDefault(require("../../images/gmac-3.jpeg"));
function UncontrolledExample() {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_css_1.default.carouselContainer }, { children: [" ", (0, jsx_runtime_1.jsxs)(Carousel_1.default, { children: [(0, jsx_runtime_1.jsx)(Carousel_1.default.Item, { children: (0, jsx_runtime_1.jsx)("img", { className: styles_module_css_1.default.carouselImage, src: gmac_1_jpeg_1.default, alt: "First slide" }) }), (0, jsx_runtime_1.jsx)(Carousel_1.default.Item, { children: (0, jsx_runtime_1.jsx)("img", { className: styles_module_css_1.default.carouselImage, src: gmac_2_jpeg_1.default, alt: "Second slide" }) }), (0, jsx_runtime_1.jsx)(Carousel_1.default.Item, { children: (0, jsx_runtime_1.jsx)("img", { className: styles_module_css_1.default.carouselImage, src: gmac_3_jpeg_1.default, alt: "Third slide" }) })] })] })));
}
exports.default = UncontrolledExample;
