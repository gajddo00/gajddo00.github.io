(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _active_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5544);



const Delayed = ({ children , waitBeforeShow =50  })=>{
    const { 0: isShown , 1: setIsShown  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setIsShown(true);
        }, waitBeforeShow);
        return ()=>clearTimeout(timer)
        ;
    }, [
        waitBeforeShow
    ]);
    return isShown ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_active_loader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Delayed);


/***/ }),

/***/ 9418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./assets/menu-icon.svg
/* harmony default export */ const menu_icon = ({"src":"/_next/static/media/menu-icon.5fffef79.svg","height":263,"width":329});
;// CONCATENATED MODULE: ./assets/cross-icon.svg
/* harmony default export */ const cross_icon = ({"src":"/_next/static/media/cross-icon.89e62c2c.svg","height":260,"width":260});
;// CONCATENATED MODULE: ./assets/sso_logo.svg
/* harmony default export */ const sso_logo = ({"src":"/_next/static/media/sso_logo.63af046d.svg","height":42,"width":42});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/common/button.tsx
var common_button = __webpack_require__(5524);
// EXTERNAL MODULE: ./components/common/text.tsx
var common_text = __webpack_require__(8339);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./hooks/useUser.ts
var useUser = __webpack_require__(1587);
// EXTERNAL MODULE: ./api/api.ts + 3 modules
var api_api = __webpack_require__(2855);
// EXTERNAL MODULE: ./utils/handle-error.ts
var handle_error = __webpack_require__(8822);
// EXTERNAL MODULE: ./hooks/useAuthState.ts
var useAuthState = __webpack_require__(2640);
;// CONCATENATED MODULE: ./hooks/useLogout.ts





const useLogout = ()=>{
    const api = new api_api/* AuthApi */.z9();
    const { setAuth  } = (0,useAuthState/* default */.Z)();
    const { setUser  } = (0,useUser/* default */.Z)();
    const router = (0,router_.useRouter)();
    const hardLogout = async ()=>{
        setAuth({});
        setUser({});
        var ref;
        const subId = (ref = localStorage.getItem("subId")) !== null && ref !== void 0 ? ref : undefined;
        try {
            const response = await api.authLogout({
                logoutCallbackUrl: process.env.NEXT_PUBLIC_BASE_URL + "login",
                notificationsSubId: subId
            });
            const redirectData = response.data;
            if (redirectData.redirectUrl) {
                window.location.assign(redirectData.redirectUrl);
            }
        } catch (error) {
            (0,handle_error/* handleDefaultError */.U)(error);
        }
    };
    const softLogout = ()=>{
        setAuth({});
        setUser({});
        router.push("/login");
    };
    return {
        softLogout,
        hardLogout
    };
};
/* harmony default export */ const hooks_useLogout = (useLogout);

// EXTERNAL MODULE: ./components/common/delayed-component.tsx
var delayed_component = __webpack_require__(433);
// EXTERNAL MODULE: ./utils/strings.ts
var strings = __webpack_require__(4574);
;// CONCATENATED MODULE: ./components/common/navbar.tsx
















const Navbar = (props)=>{
    const { 0: hidden , 1: setHidden  } = (0,external_react_.useState)(true);
    const router = (0,router_.useRouter)();
    const { user  } = (0,useUser/* default */.Z)();
    const { auth  } = (0,useAuthState/* default */.Z)();
    const { hardLogout  } = hooks_useLogout();
    const toggleNavbar = ()=>{
        setHidden((p)=>!p
        );
    };
    const bgColor = ()=>{
        return hidden ? "bg-none sm:bg-neutral-200" : "bg-neutral-200";
    };
    const btnSize = ()=>{
        return hidden ? "medium" : "large";
    };
    const type = (path)=>{
        return router.pathname.includes(path) ? "dark" : "light";
    };
    const handleNavItemClick = ()=>{
        setHidden(true);
    };
    const handleLogout = ()=>{
        hardLogout();
    };
    const menuItems = {
        "services": /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/services",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(common_button/* default */.Z, {
                    label: (0,strings/* getString */.K)("services", router.locale),
                    type: type("/services"),
                    mode: btnSize(),
                    onClick: handleNavItemClick
                })
            })
        }),
        "settings": /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/settings",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(common_button/* default */.Z, {
                    label: (0,strings/* getString */.K)("settings", router.locale),
                    type: type("/settings"),
                    mode: btnSize(),
                    onClick: handleNavItemClick
                })
            })
        }),
        "users": /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/users",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(common_button/* default */.Z, {
                    label: (0,strings/* getString */.K)("users", router.locale),
                    type: type("/users"),
                    mode: btnSize(),
                    onClick: handleNavItemClick
                })
            })
        }),
        "requests": /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/requests",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(common_button/* default */.Z, {
                    label: (0,strings/* getString */.K)("requests", router.locale),
                    type: type("/requests"),
                    mode: btnSize(),
                    onClick: handleNavItemClick
                })
            })
        }),
        "logout": /*#__PURE__*/ jsx_runtime_.jsx(common_button/* default */.Z, {
            className: "mt-auto",
            label: (0,strings/* getString */.K)("logout", router.locale),
            type: "light",
            mode: btnSize(),
            onClick: ()=>{
                handleNavItemClick();
                handleLogout();
            }
        })
    };
    const UserNavbarContent = ()=>{
        var ref, ref1;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col h-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("header", {
                    className: "text-center pt-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(common_text/* default */.Z, {
                        type: "body",
                        children: `${(ref = user === null || user === void 0 ? void 0 : user.firstName) !== null && ref !== void 0 ? ref : ""} ${(ref1 = user === null || user === void 0 ? void 0 : user.lastName) !== null && ref1 !== void 0 ? ref1 : ""}`
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-3 items-center py-14 sm:py-6 sm:mt-10 flex-grow",
                    children: [
                        menuItems["services"],
                        menuItems["settings"],
                        menuItems["logout"]
                    ]
                })
            ]
        });
    };
    const ManagerNavbarContent = ()=>{
        var ref, ref2;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col h-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("header", {
                    className: "text-center pt-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(common_text/* default */.Z, {
                        type: "body",
                        children: `${(ref = user === null || user === void 0 ? void 0 : user.firstName) !== null && ref !== void 0 ? ref : ""} ${(ref2 = user === null || user === void 0 ? void 0 : user.lastName) !== null && ref2 !== void 0 ? ref2 : ""}`
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-3 items-center py-14 sm:py-6 sm:mt-10 flex-grow",
                    children: [
                        menuItems["services"],
                        menuItems["users"],
                        menuItems["settings"],
                        menuItems["logout"]
                    ]
                })
            ]
        });
    };
    const AnonymousNavbarContent = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col h-full",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: "text-center pt-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "cursor-pointer",
                            src: sso_logo,
                            width: 70,
                            height: 70,
                            onClick: ()=>router.replace("/")
                            ,
                            alt: "logo"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(common_text/* default */.Z, {
                            type: "body",
                            bold: true,
                            children: "SSO"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-3 items-center py-14 sm:py-6 h-90pr sm:mt-10 flex-grow",
                    children: [
                        router.pathname.includes("/login") && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/register",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(common_button/* default */.Z, {
                                    label: (0,strings/* getString */.K)("registration", router.locale),
                                    type: "light",
                                    mode: btnSize(),
                                    onClick: handleNavItemClick
                                })
                            })
                        }),
                        router.pathname.includes("/register") && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/login",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(common_button/* default */.Z, {
                                    label: (0,strings/* getString */.K)("login", router.locale),
                                    type: "light",
                                    mode: btnSize(),
                                    onClick: handleNavItemClick
                                })
                            })
                        })
                    ]
                })
            ]
        });
    };
    const AdminNavbarContent = ()=>{
        var ref, ref3;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col h-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("header", {
                    className: "text-center pt-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(common_text/* default */.Z, {
                        type: "body",
                        children: `${(ref = user === null || user === void 0 ? void 0 : user.firstName) !== null && ref !== void 0 ? ref : ""} ${(ref3 = user === null || user === void 0 ? void 0 : user.lastName) !== null && ref3 !== void 0 ? ref3 : ""}`
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-3 items-center py-14 sm:py-6 sm:mt-10 flex-grow",
                    children: [
                        menuItems["services"],
                        menuItems["users"],
                        menuItems["requests"],
                        menuItems["settings"],
                        menuItems["logout"]
                    ]
                })
            ]
        });
    };
    const NavbarContent = ()=>{
        if ((auth === null || auth === void 0 ? void 0 : auth.token) === undefined || (auth === null || auth === void 0 ? void 0 : auth.token) === null) {
            return /*#__PURE__*/ jsx_runtime_.jsx(AnonymousNavbarContent, {});
        } else {
            switch(user === null || user === void 0 ? void 0 : user.role){
                case api_api/* Role.User */.uU.User:
                    return /*#__PURE__*/ jsx_runtime_.jsx(UserNavbarContent, {});
                case api_api/* Role.ServiceManager */.uU.ServiceManager:
                    return /*#__PURE__*/ jsx_runtime_.jsx(ManagerNavbarContent, {});
                case api_api/* Role.Administrator */.uU.Administrator:
                    return /*#__PURE__*/ jsx_runtime_.jsx(AdminNavbarContent, {});
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${props.className} ${bgColor()} ${hidden ? "h-5" : "h-screen"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "p-3 sm:hidden absolute right-2 top-2 ",
                onClick: toggleNavbar,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: hidden ? menu_icon : cross_icon,
                    height: 25,
                    width: 25,
                    className: "",
                    alt: "menu-icon",
                    title: "toggle menu"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: `${bgColor()} h-full w-full ${hidden ? "hidden sm:flex sm:flex-col sm:items-center" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(delayed_component/* default */.Z, {
                    waitBeforeShow: 50,
                    children: NavbarContent()
                })
            })
        ]
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/common/layout.tsx


const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "sm:h-screen sm:flex sm:flex-row-reverse",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "absolute sm:relative sm:h-screen w-full bg-neutral-100 sm:overflow-y-auto",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                className: "absolute w-screen sm:h-screen sm:relative sm:w-72"
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 8540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ persist_login)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./api/index.ts
var api_0 = __webpack_require__(1534);
// EXTERNAL MODULE: ./hooks/useAuthState.ts
var useAuthState = __webpack_require__(2640);
;// CONCATENATED MODULE: ./hooks/useRefreshToken.ts


const useRefreshToken = ()=>{
    const { auth , setAuth  } = (0,useAuthState/* default */.Z)();
    const api = new api_0/* AuthApi */.z9();
    const refresh = async ()=>{
        const config = {
            withCredentials: true
        };
        const response = await api.authRefreshToken(config);
        setAuth((prev)=>{
            return {
                ...prev,
                token: response.data.token
            };
        });
        return response.data.token;
    };
    return refresh;
};
/* harmony default export */ const hooks_useRefreshToken = (useRefreshToken);

// EXTERNAL MODULE: ./hooks/useGlobalState.ts
var useGlobalState = __webpack_require__(3730);
// EXTERNAL MODULE: ./hooks/useAuthorization.ts
var useAuthorization = __webpack_require__(7641);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./hooks/useAxiosMiddleware.ts






const useAxiosMiddleware = ()=>{
    const refresh = hooks_useRefreshToken();
    const authorize = (0,useAuthorization/* default */.Z)();
    const { auth  } = (0,useGlobalState/* default */.Z)();
    const refreshURL = process.env.NEXT_PUBLIC_API_BASE_URL + "/auth/refresh-token";
    const router = (0,router_.useRouter)();
    const anonymousRoutes = [
        "/login",
        "/register"
    ];
    (0,external_react_.useEffect)(()=>{
        (external_axios_default()).defaults.withCredentials = true;
        const requestIntercept = external_axios_default().interceptors.request.use((config)=>{
            if (config.headers) {
                if (!config.headers["Authorization"]) {
                    config.headers["Authorization"] = `Bearer ${auth === null || auth === void 0 ? void 0 : auth.token}`;
                }
                var _locale;
                config.headers["Accept-Language"] = (_locale = router.locale) !== null && _locale !== void 0 ? _locale : "cs";
            }
            return config;
        }, (error)=>Promise.reject(error)
        );
        const responseIntercept = external_axios_default().interceptors.response.use((response)=>response
        , async (error)=>{
            var ref;
            const prevRequest = error === null || error === void 0 ? void 0 : error.config;
            if ((error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.status) === 401 && !(prevRequest === null || prevRequest === void 0 ? void 0 : prevRequest.sent)) {
                var ref1;
                prevRequest.sent = true;
                if ((error === null || error === void 0 ? void 0 : (ref1 = error.request) === null || ref1 === void 0 ? void 0 : ref1.responseURL) === refreshURL) {
                    if (anonymousRoutes.includes(router.pathname)) {
                        return Promise.reject(error);
                    }
                    const redirectData = await authorize();
                    if (redirectData.redirectUrl) {
                        window.location.assign(redirectData.redirectUrl);
                    }
                    return Promise.reject(error);
                }
                try {
                    const newAccessToken = await refresh();
                    prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                    return external_axios_default()(prevRequest);
                } catch (error) {
                    return Promise.reject(error);
                }
            }
            return Promise.reject(error);
        });
        return ()=>{
            external_axios_default().interceptors.request.eject(requestIntercept);
            external_axios_default().interceptors.response.eject(responseIntercept);
        };
    }, [
        refresh,
        auth
    ]);
    return (external_axios_default());
};
/* harmony default export */ const hooks_useAxiosMiddleware = (useAxiosMiddleware);

;// CONCATENATED MODULE: ./middleware/persist-login.tsx

const PersistLogin = ({ children  })=>{
    hooks_useAxiosMiddleware();
    return children;
};
/* harmony default export */ const persist_login = (PersistLogin);


/***/ }),

/***/ 5508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useAuthState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2640);
/* harmony import */ var _microsoft_fetch_event_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8898);
/* harmony import */ var _microsoft_fetch_event_source__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_fetch_event_source__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var broadcast_channel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8061);
/* harmony import */ var broadcast_channel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(broadcast_channel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6555);
/* harmony import */ var _hooks_useAuthorization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_4__]);
uuid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const SSELayer = ({ children  })=>{
    const { auth  } = (0,_hooks_useAuthState__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const authorize = (0,_hooks_useAuthorization__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const channel = new broadcast_channel__WEBPACK_IMPORTED_MODULE_3__.BroadcastChannel("logout-channel", {
        webWorkerSupport: false
    });
    const handleLogoutEvent = async ()=>{
        const redirectData = await authorize();
        if (redirectData.redirectUrl) {
            window.location.assign(redirectData.redirectUrl);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        channel.onmessage = async (event)=>{
            switch(event.event){
                case "LOGOUT":
                    await handleLogoutEvent();
                    break;
            }
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const controller = new AbortController();
        let subId = localStorage.getItem("subId");
        if (!subId) {
            subId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)();
            localStorage.setItem("subId", subId !== null && subId !== void 0 ? subId : "");
        }
        const subscribeKey = `${subId}_${process.env.NEXT_PUBLIC_APP_ID}`;
        const subscribe = async ()=>{
            console.log("SUBSCRIBING WITH: " + subscribeKey);
            await (0,_microsoft_fetch_event_source__WEBPACK_IMPORTED_MODULE_2__.fetchEventSource)(process.env.NEXT_PUBLIC_API_BASE_URL + "/notifications/" + subscribeKey, {
                onmessage (event) {
                    channel.postMessage(event);
                },
                onerror (err) {
                    controller.abort();
                },
                method: "GET",
                signal: controller.signal,
                headers: {
                    "Authorization": "Bearer " + (auth === null || auth === void 0 ? void 0 : auth.token)
                }
            });
        };
        subscribe();
        return ()=>{
            controller.abort();
        };
    }, [
        auth
    ]);
    return children;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SSELayer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9418);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8011);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _middleware_persist_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8540);
/* harmony import */ var _middleware_sse_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_middleware_sse_layer__WEBPACK_IMPORTED_MODULE_6__]);
_middleware_sse_layer__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__/* .AppProvider */ .w, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {
                    theme: "dark",
                    position: "bottom-left",
                    autoClose: 3000
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_middleware_persist_login__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_middleware_sse_layer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 8898:
/***/ ((module) => {

"use strict";
module.exports = require("@microsoft/fetch-event-source");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 8061:
/***/ ((module) => {

"use strict";
module.exports = require("broadcast-channel");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4979:
/***/ ((module) => {

"use strict";
module.exports = require("react-spinners-kit");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,676,664,534,339,723,574,325], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();