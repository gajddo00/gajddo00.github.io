"use strict";
exports.id = 524;
exports.ids = [524];
exports.modules = {

/***/ 8203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow_back.b057c3f9.svg","height":9,"width":6});

/***/ }),

/***/ 7674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4574);
/* harmony import */ var _select_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9220);
/* harmony import */ var _select_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5761);





const AuthMethodSelect = ({ defaultIndex =0 , valueSelected  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const optionTitles = [
        (0,_utils_strings__WEBPACK_IMPORTED_MODULE_4__/* .getString */ .K)("login.password", router.locale),
        (0,_utils_strings__WEBPACK_IMPORTED_MODULE_4__/* .getString */ .K)("login.email", router.locale),
        (0,_utils_strings__WEBPACK_IMPORTED_MODULE_4__/* .getString */ .K)("service.register.type.mobile", router.locale)
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-row justify-between items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "ml-2",
                children: (0,_utils_strings__WEBPACK_IMPORTED_MODULE_4__/* .getString */ .K)("service.register.minAuth", router.locale)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_select_select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                defaultValue: optionTitles[defaultIndex],
                optionSelected: valueSelected,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_select_option__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        value: optionTitles[0],
                        index: 0,
                        children: optionTitles[0]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_select_option__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        value: optionTitles[1],
                        index: 1,
                        children: optionTitles[1]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_select_option__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        value: optionTitles[2],
                        index: 2,
                        children: optionTitles[2]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthMethodSelect);


/***/ }),

/***/ 3272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8339);
/* harmony import */ var _assets_arrow_back_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8203);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





const BackButton = ({ title  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-row self-start items-center gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: "flex p-3 rounded-full sm:hover:bg-neutral-200 sm:bg-transparent bg-neutral-200",
                onClick: ()=>router.back()
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    src: _assets_arrow_back_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                    height: 15,
                    width: 15,
                    alt: "back-button"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                type: "large",
                children: title
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackButton);


/***/ }),

/***/ 2296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Textarea = ({ required =false , ...props })=>{
    const { name , type , labelValue , error , register  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                htmlFor: props.name,
                className: "mr-2 ml-2",
                children: [
                    labelValue,
                    required && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "error",
                        children: " *"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                ...register(name),
                defaultValue: props.value,
                name: name,
                className: "textField mt-1 textArea"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "error ml-2 mr-2",
                children: error
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);


/***/ }),

/***/ 5761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _select_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9748);



const Option = ({ value , type , index , ...props })=>{
    const { changeSelectedOption  } = (0,_select_context__WEBPACK_IMPORTED_MODULE_2__/* .useSelectContext */ .T)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: "select-option",
        onClick: ()=>changeSelectedOption(value, index)
        ,
        children: props.children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Option);


/***/ }),

/***/ 9748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useSelectContext),
/* harmony export */   "Z": () => (/* binding */ SelectContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SelectContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    selectedOption: 0,
    changeSelectedOption: (option, index)=>{}
});
const useSelectContext = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SelectContext);
    if (!context) {
        throw new Error("Error in creating the context");
    }
    return context;
};



/***/ }),

/***/ 9220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ select_select)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/select/select-context.ts
var select_context = __webpack_require__(9748);
;// CONCATENATED MODULE: ./components/select/useOnClickOutsideHook.ts

const useOnClickOutside = (ref, handler)=>{
    (0,external_react_.useEffect)(()=>{
        const listener = (event)=>{
            const el = ref === null || ref === void 0 ? void 0 : ref.current;
            if (!el || el.contains((event === null || event === void 0 ? void 0 : event.target) || null)) {
                return;
            }
            handler(event); // Call the handler only if the click is outside of the element passed.
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return ()=>{
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [
        ref,
        handler
    ]); // Reload only if ref or handler changes
};
/* harmony default export */ const useOnClickOutsideHook = (useOnClickOutside);

;// CONCATENATED MODULE: ./components/select/select.tsx




const Select = ({ type ="default" , defaultValue ="" , ...props })=>{
    const { 0: selectedOption , 1: setSelectedOption  } = (0,external_react_.useState)(0);
    const { 0: name , 1: setName  } = (0,external_react_.useState)(defaultValue);
    const { 0: showDropdown , 1: setShowDropdown  } = (0,external_react_.useState)(false);
    const showDropdownHandler = ()=>setShowDropdown(!showDropdown)
    ;
    const selectContainerRef = (0,external_react_.useRef)(null);
    const clickOutsideHandler = ()=>setShowDropdown(false)
    ;
    useOnClickOutsideHook(selectContainerRef, clickOutsideHandler);
    (0,external_react_.useEffect)(()=>{
        setName(defaultValue);
        setSelectedOption(0);
    }, [
        props.reset
    ]);
    const updateSelectedOption = (option, index)=>{
        setName(option);
        props.optionSelected(index);
        setSelectedOption(index);
        setShowDropdown(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(select_context/* SelectContext.Provider */.Z.Provider, {
        value: {
            selectedOption,
            changeSelectedOption: updateSelectedOption
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `select-container ${props.className}`,
            ref: selectContainerRef,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: showDropdown ? "select-text active" : "select-text",
                    onClick: showDropdownHandler,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mr-6 overflow-hidden text-ellipsis whitespace-nowrap",
                        children: name
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: showDropdown ? "select-options show-dropdown-options" : "select-options hide-dropdown-options",
                    children: props.children
                })
            ]
        })
    });
};
/* harmony default export */ const select_select = (Select);


/***/ }),

/***/ 8152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Og": () => (/* binding */ mapServiceType),
/* harmony export */   "iF": () => (/* binding */ mapAuthMethod),
/* harmony export */   "ks": () => (/* binding */ mapLoginHistoryFilter)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2855);


const mapServiceType = (index)=>{
    const value = parseInt(index.toString());
    switch(value){
        case 0:
            return _api_api__WEBPACK_IMPORTED_MODULE_0__/* .ServiceType.Website */ .UW.Website;
        case 1:
            return _api_api__WEBPACK_IMPORTED_MODULE_0__/* .ServiceType.Mobile */ .UW.Mobile;
        case 2:
            return _api_api__WEBPACK_IMPORTED_MODULE_0__/* .ServiceType.Desktop */ .UW.Desktop;
    }
    return _api_api__WEBPACK_IMPORTED_MODULE_0__/* .ServiceType.Website */ .UW.Website;
};
const mapAuthMethod = (index)=>{
    const value = parseInt(index.toString());
    switch(value){
        case 0:
            return _api_api__WEBPACK_IMPORTED_MODULE_0__/* .AuthMethod.Password */ .Hi.Password;
        case 1:
            return _api_api__WEBPACK_IMPORTED_MODULE_0__/* .AuthMethod.Email */ .Hi.Email;
        case 2:
            return _api_api__WEBPACK_IMPORTED_MODULE_0__/* .AuthMethod.Mobile */ .Hi.Mobile;
    }
    return _api_api__WEBPACK_IMPORTED_MODULE_0__/* .AuthMethod.Password */ .Hi.Password;
};
const mapLoginHistoryFilter = (index)=>{
    const value = parseInt(index.toString());
    switch(value){
        case 0:
            return _api_api__WEBPACK_IMPORTED_MODULE_0__/* .LoginHistoryFilter.All */ .GL.All;
        case 1:
            return _api_api__WEBPACK_IMPORTED_MODULE_0__/* .LoginHistoryFilter.OnlyMe */ .GL.OnlyMe;
    }
    return _api_api__WEBPACK_IMPORTED_MODULE_0__/* .LoginHistoryFilter.All */ .GL.All;
};


/***/ }),

/***/ 8822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ handleDefaultError)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);

const handleDefaultError = (error)=>{
    var ref, ref1;
    const err = error;
    var ref2;
    const message = (ref2 = err === null || err === void 0 ? void 0 : (ref = err.response) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.Message) !== null && ref2 !== void 0 ? ref2 : "Unknown error";
    (0,react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast)(message);
};


/***/ })

};
;