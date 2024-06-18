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
var header_1 = __importDefault(require("./components/header"));
var hero_1 = __importDefault(require("./components/hero"));
var about_1 = __importDefault(require("./components/about"));
var Slideshow_1 = __importDefault(require("./components/Slideshow"));
var modal_1 = __importDefault(require("./components/facebook/modal"));
var contact_1 = __importDefault(require("./components/contact"));
var footer_1 = __importDefault(require("./components/footer"));
var scrollToTop_1 = __importDefault(require("./components/scrollToTop"));
function App() {
    var images = [
        '/images/gmac-1.jpeg',
        '/images/gmac-2.jpeg',
        '/images/gmac-3.jpeg',
        '/images/gmac-4.jpeg',
        '/images/gmac-5.jpeg',
        '/images/gmac-6.jpeg',
        '/images/gmac-7.jpeg',
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(header_1.default, {}), (0, jsx_runtime_1.jsx)("div", __assign({ id: "hero" }, { children: (0, jsx_runtime_1.jsx)(hero_1.default, {}) })), (0, jsx_runtime_1.jsx)(scrollToTop_1.default, {}), (0, jsx_runtime_1.jsx)("div", __assign({ id: "about" }, { children: (0, jsx_runtime_1.jsx)(about_1.default, {}) })), (0, jsx_runtime_1.jsx)(Slideshow_1.default, {}), (0, jsx_runtime_1.jsx)("div", __assign({ id: "facebook" }, { children: (0, jsx_runtime_1.jsx)(modal_1.default, {}) })), (0, jsx_runtime_1.jsx)("div", __assign({ id: "contact" }, { children: (0, jsx_runtime_1.jsx)(contact_1.default, {}) })), (0, jsx_runtime_1.jsx)(footer_1.default, {})] }));
}
exports.default = App;
