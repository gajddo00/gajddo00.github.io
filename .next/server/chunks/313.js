"use strict";
exports.id = 313;
exports.ids = [313];
exports.modules = {

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

/***/ 7313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* binding */ authenticatedRoute)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./hooks/useAuthState.ts
var useAuthState = __webpack_require__(2640);
// EXTERNAL MODULE: ./api/api.ts + 3 modules
var api_api = __webpack_require__(2855);
// EXTERNAL MODULE: ./hooks/useUser.ts
var useUser = __webpack_require__(1587);
// EXTERNAL MODULE: ./components/common/active-loader.tsx
var active_loader = __webpack_require__(5544);
// EXTERNAL MODULE: ./components/common/text.tsx
var common_text = __webpack_require__(8339);
;// CONCATENATED MODULE: ./components/common/fobidden.tsx


const Forbidden = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center h-screen",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "text-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(common_text/* default */.Z, {
                    className: "purple",
                    type: "medium",
                    children: "Forbidden access"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(common_text/* default */.Z, {
                    type: "body",
                    children: "You do not have permission to access this page."
                })
            ]
        })
    });
};
/* harmony default export */ const fobidden = (Forbidden);

;// CONCATENATED MODULE: ./utils/authenticatedRoute.tsx







const authenticatedRoute = (Component, roles = [])=>{
    return ()=>{
        const { 0: userLoggedIn , 1: setUserLoggedIn  } = (0,external_react_.useState)(false);
        const { 0: hasRequiredUserRole , 1: setHasRequiredUserRole  } = (0,external_react_.useState)(false);
        const { auth  } = (0,useAuthState/* default */.Z)();
        const { user , setUser  } = (0,useUser/* default */.Z)();
        const api = new api_api/* UserApi */.Wj();
        (0,external_react_.useEffect)(()=>{
            const controller = new AbortController();
            const checkAuth = async ()=>{
                try {
                    const response = await api.userGetProfile({
                        signal: controller.signal
                    });
                    setUser(response.data);
                } catch (error) {}
            };
            checkAuth();
            return ()=>{
                controller.abort();
            };
        }, []);
        (0,external_react_.useEffect)(()=>{
            setUserLoggedIn((auth === null || auth === void 0 ? void 0 : auth.token) !== undefined);
        }, [
            auth
        ]);
        (0,external_react_.useEffect)(()=>{
            if (roles.length == 0) {
                setHasRequiredUserRole(true);
                return;
            }
            if (user && user.role && roles.includes(user.role)) {
                setHasRequiredUserRole(true);
            } else {}
        }, [
            user
        ]);
        if (userLoggedIn && hasRequiredUserRole) {
            return /*#__PURE__*/ jsx_runtime_.jsx(Component, {});
        }
        if (user && !hasRequiredUserRole) {
            return /*#__PURE__*/ jsx_runtime_.jsx(fobidden, {});
        }
        return /*#__PURE__*/ jsx_runtime_.jsx(active_loader/* default */.Z, {});
    };
};


/***/ })

};
;