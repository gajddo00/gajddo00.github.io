"use strict";
exports.id = 339;
exports.ids = [339];
exports.modules = {

/***/ 8339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Text = ({ children , type ="body" , bold =false , ...props })=>{
    switch(type){
        case "large":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                ...props,
                className: [
                    "text",
                    `text--${type}`,
                    props.className,
                    bold && "text--bold" || ""
                ].join(" "),
                children: children
            });
        case "medium":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                ...props,
                className: [
                    "text",
                    `text--${type}`,
                    props.className,
                    bold && "text--bold" || ""
                ].join(" "),
                children: children
            });
        case "body":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                ...props,
                className: [
                    "text",
                    `text--${type}`,
                    props.className,
                    bold && "text--bold" || ""
                ].join(" "),
                children: children
            });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);


/***/ })

};
;