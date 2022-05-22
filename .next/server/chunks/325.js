"use strict";
exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 7641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2855);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const useAuthorization = ()=>{
    const api = new _api_api__WEBPACK_IMPORTED_MODULE_0__/* .AuthApi */ .z9();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const authorize = async ()=>{
        const requestData = {
            clientId: process.env.NEXT_PUBLIC_APP_ID,
            callbackURL: process.env.NEXT_PUBLIC_BASE_URL + "authorize"
        };
        const response = await api.authAuthorize(requestData);
        const redirectData = response.data;
        const path = router.asPath;
        const wrongPaths = [
            "login",
            "authorize",
            "register"
        ];
        if (wrongPaths.every((element)=>!path.includes(element)
        )) {
            localStorage.setItem("preAuthorizationPath", path);
        }
        return redirectData;
    };
    return authorize;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuthorization);


/***/ }),

/***/ 1587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useGlobalState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3730);

const useUser = ()=>{
    const { user , setUser  } = (0,_useGlobalState__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    return {
        user,
        setUser
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUser);


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