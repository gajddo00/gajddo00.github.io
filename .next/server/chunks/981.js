"use strict";
exports.id = 981;
exports.ids = [981];
exports.modules = {

/***/ 5524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Button = ({ type ="dark" , label , mode ="medium" , submit =false , ...props })=>{
    var _className;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: submit ? "submit" : "button",
        ...props,
        className: [
            "button",
            `button--${type}`,
            `button--${mode}`,
            `${(_className = props.className) !== null && _className !== void 0 ? _className : ""}`
        ].join(" "),
        children: label
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 3400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ input)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./assets/eye_closed.svg
/* harmony default export */ const eye_closed = ({"src":"/_next/static/media/eye_closed.0a2ad6ae.svg","height":22,"width":22});
;// CONCATENATED MODULE: ./assets/eye_open.svg
/* harmony default export */ const eye_open = ({"src":"/_next/static/media/eye_open.05f1887d.svg","height":16,"width":22});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/common/input.tsx





const Input = ({ required =false , disabled =false , ...props })=>{
    const { name , type , labelValue , error , register  } = props;
    const { 0: passwordVisible , 1: setPasswordVisible  } = (0,external_react_.useState)(false);
    const getType = ()=>{
        if (type == "password") {
            return passwordVisible ? "text" : type;
        }
        return type;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `flex flex-col ${props.className}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                htmlFor: props.name,
                className: "mr-2 ml-2",
                children: [
                    labelValue,
                    required && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "error",
                        children: " *"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex gap-2 mt-1",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `textField flex justify-between gap-2 pr-2 items-center w-full ${disabled ? "textField--dark" : ""}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                ...register && register(name),
                                defaultValue: props.value,
                                disabled: disabled,
                                name: name,
                                type: getType(),
                                className: "w-full"
                            }),
                            props.type == "password" && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                tabIndex: -1,
                                title: "change password visibility",
                                className: "flex items-center",
                                type: "button",
                                onClick: ()=>setPasswordVisible((value)=>!value
                                    )
                                ,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: passwordVisible ? eye_open : eye_closed,
                                    width: 18,
                                    height: 18,
                                    alt: "eye"
                                })
                            })
                        ]
                    }),
                    props.accessoryIcon && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        tabIndex: -1,
                        className: "textField_action-button flex items-center justify-center",
                        type: "button",
                        title: "generate random password",
                        onClick: props.accessoryOnClick,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: props.accessoryIcon,
                            width: 23,
                            height: 23,
                            alt: "input accessory icon"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "error ml-2 mr-2",
                children: error
            })
        ]
    });
};
/* harmony default export */ const input = (Input);


/***/ })

};
;