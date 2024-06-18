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
// ScrollToTopButton.tsx
var react_1 = require("react");
var ScrollToTopButton = function () {
    var _a = (0, react_1.useState)(false), isVisible = _a[0], setIsVisible = _a[1];
    var toggleVisibility = function () {
        if (window.scrollY > 100) { // Adjust 500 based on when you want the button to appear
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    };
    var scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener('scroll', toggleVisibility);
        return function () {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    if (!isVisible)
        return null;
    return ((0, jsx_runtime_1.jsx)("button", __assign({ onClick: scrollToTop, style: {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            height: '50px',
            width: '50px',
            fontSize: '24px',
            zIndex: 1000,
            cursor: 'pointer',
            borderRadius: '50%',
            border: 'none',
            outline: 'none',
            backgroundColor: '#000',
            color: '#fff'
        } }, { children: "\u2191" })));
};
exports.default = ScrollToTopButton;
