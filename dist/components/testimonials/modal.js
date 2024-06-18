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
function TestimonialsModal() {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_css_1.default.container }, { children: [(0, jsx_runtime_1.jsx)("h1", __assign({ className: styles_module_css_1.default.title }, { children: "Here's What Our Customers Have To Say" })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_css_1.default.testimonialsWrapper }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_css_1.default.testimonialCard }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_css_1.default.testimonialName }, { children: "John Doe" })), (0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_css_1.default.testimonialQuote }, { children: "This is a great service! I'm very satisfied." })), (0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_css_1.default.testimonialRating }, { children: "\u2605\u2605\u2605\u2605\u2605" }))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_css_1.default.testimonialCard }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_css_1.default.testimonialName }, { children: "Jane Smith" })), (0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_css_1.default.testimonialQuote }, { children: "Excellent customer support. Highly recommended." })), (0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_css_1.default.testimonialRating }, { children: "\u2605\u2605\u2605\u2605\u2605" }))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_css_1.default.testimonialCard }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_css_1.default.testimonialName }, { children: "Bob Johnson" })), (0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_css_1.default.testimonialQuote }, { children: "Fast delivery and high-quality products. Will order again." })), (0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_css_1.default.testimonialRating }, { children: "\u2605\u2605\u2605\u2605\u2605" }))] }))] }))] })));
}
exports.default = TestimonialsModal;
