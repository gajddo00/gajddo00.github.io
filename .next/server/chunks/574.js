"use strict";
exports.id = 574;
exports.ids = [574];
exports.modules = {

/***/ 4574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ getString)
/* harmony export */ });
const cs = (key)=>{
    const strings = new Map([
        //General
        [
            "general.save",
            "Ulo\u017Eit"
        ],
        [
            "general.noResults",
            "\u017D\xe1dn\xe9 v\xfdsledky..."
        ],
        [
            "general.register",
            "Registrovat"
        ],
        [
            "general.confirm",
            "Potvrdit"
        ],
        [
            "general.cancel",
            "Zru\u0161it"
        ],
        [
            "general.copied",
            "Hodnota byla zkop\xedrov\xe1na."
        ],
        [
            "general.confirmation",
            "Potvrzen\xed akce"
        ],
        [
            "general.delete",
            "Odstranit"
        ],
        [
            "user.name",
            "Jm\xe9no"
        ],
        //Errors
        [
            "error.empty",
            "Pole nesm\xed b\xfdt pr\xe1zdn\xe9."
        ],
        [
            "error.url",
            "Pole mus\xed b\xfdt validn\xed URL."
        ],
        [
            "error.max",
            "Pole m\u016F\u017Ee obsahovat max. {X} znak\u016F."
        ],
        [
            "error.email",
            "Pole mus\xed b\xfdt validn\xed e-mail."
        ],
        [
            "error.passwordMatch",
            "Hesla se neshoduj\xed."
        ],
        //Navigation
        [
            "services",
            "Slu\u017Eby"
        ],
        [
            "users",
            "U\u017Eivatel\xe9"
        ],
        [
            "settings",
            "Nastaven\xed"
        ],
        [
            "logout",
            "Odhl\xe1sit se"
        ],
        [
            "login",
            "P\u0159ihl\xe1sit se"
        ],
        [
            "requests",
            "\u017D\xe1dosti"
        ],
        [
            "registration",
            "Registrace"
        ],
        //Login
        [
            "login.email",
            "E-mail"
        ],
        [
            "login.password",
            "Heslo"
        ],
        [
            "login.withCredentials",
            "nebo se p\u0159ihl\xe1sit s"
        ],
        [
            "login.credentials",
            "e-mailem a heslem"
        ],
        [
            "login.withEmail",
            "nebo se p\u0159ihl\xe1sit p\u0159es"
        ],
        [
            "login.withEmail.desc",
            "Pro p\u0159ihl\xe1\u0161en\xed zadejte sv\u016Fj e-mail. Do va\u0161\xed e-mailov\xe9 schr\xe1nky bude zasl\xe1n potvrzovac\xed k\xf3d."
        ],
        [
            "login.withMobile",
            "P\u0159ihl\xe1sit se s mobiln\xed aplikac\xed"
        ],
        [
            "login.withMobile.desc",
            "Pro p\u0159ihl\xe1\u0161en\xed sta\u010D\xed v mobiln\xed aplikaci naskenovat QR k\xf3d."
        ],
        //Services
        [
            "services.search",
            "Hledat aplikace..."
        ],
        [
            "services.pending",
            "\u010Cekaj\xedc\xed"
        ],
        [
            "services.add",
            "P\u0159idat slu\u017Ebu"
        ],
        //Register service
        [
            "service.register",
            "Registrace slu\u017Eby"
        ],
        [
            "service.register.type",
            "Typ"
        ],
        [
            "service.register.type.website",
            "Webov\xe1 str\xe1nka"
        ],
        [
            "service.register.type.mobile",
            "Mobiln\xed aplikace"
        ],
        [
            "service.register.type.desktop",
            "Desktopov\xe1 aplikace"
        ],
        [
            "service.register.name",
            "N\xe1zev slu\u017Eby"
        ],
        [
            "service.register.desc",
            "Popis"
        ],
        [
            "service.register.minAuth",
            "Min. autentizace"
        ],
        [
            "service.register.authUrl",
            "Autoriza\u010Dn\xed URL"
        ],
        [
            "service.register.logoutUrl",
            "Hook URL odhl\xe1\u0161en\xed"
        ],
        [
            "service.detail.createdAt",
            "\u017D\xe1dost vytvo\u0159ena v"
        ],
        [
            "service.detail.cancelRequest",
            "Zru\u0161it \u017E\xe1dost"
        ],
        [
            "service.detail.cancelRequest.message",
            "Opravdu chcete zru\u0161it \u017E\xe1dost o registraci slu\u017Eby {X}?"
        ],
        [
            "service.detail.removeService.message",
            "Opravdu chcete odstranit slu\u017Ebu {X}?"
        ],
        [
            "service.detail.org",
            "Organizace"
        ],
        [
            "service.detail.integration",
            "Integrace"
        ],
        [
            "service.detail.publicKey",
            "Ve\u0159ejn\xfd kl\xed\u010D"
        ],
        [
            "service.detail.feEnabled",
            "FE notifikace"
        ],
        [
            "service.loginHistory",
            "Historie p\u0159ihl\xe1\u0161en\xed"
        ],
        [
            "service.loginHistory.place",
            "M\xedsto"
        ],
        [
            "service.loginHistory.timestamp",
            "\u010Cas"
        ],
        [
            "service.loginHistory.authMethod",
            "Metoda"
        ],
        [
            "service.loginHistory.platform",
            "Platforma"
        ],
        [
            "service.loginHistory.browser",
            "Prohl\xed\u017Ee\u010D"
        ],
        [
            "service.loginHistory.filter",
            "Filter"
        ],
        [
            "service.loginHistory.filter.all",
            "V\u0161e"
        ],
        [
            "service.loginHistory.filter.me",
            "Moje historie"
        ],
        //Settings
        [
            "settings.changePassword",
            "Zm\u011Bnit heslo"
        ],
        [
            "settings.currentPassword",
            "Heslo"
        ],
        [
            "settings.newPassword",
            "Nov\xe9 heslo"
        ],
        [
            "settings.confirmPassword",
            "Potvrdit heslo"
        ],
        [
            "requests",
            "\u017D\xe1dosti"
        ],
        [
            "requests.remove.message",
            "Opravdu chcete tuto \u017E\xe1dost odstranit?"
        ],
        [
            "requests.approve.message",
            "Opravdu chcete tuto \u017E\xe1dost potvrdit?"
        ],
        [
            "requests.action",
            "Akce"
        ],
        [
            "registration.title",
            "Registrace spr\xe1vce slu\u017Eeb..."
        ],
        [
            "registration.firstname",
            "Jm\xe9no"
        ],
        [
            "registration.lastname",
            "P\u0159\xedjmen\xed"
        ],
        [
            "registration.register",
            "Registrovat"
        ]
    ]);
    return strings.get(key) || "Missing translation for locale...";
};
const en = (key)=>{
    const strings = new Map([
        //General
        [
            "general.save",
            "Save"
        ],
        [
            "general.noResults",
            "No results..."
        ],
        [
            "general.register",
            "Register"
        ],
        [
            "general.confirm",
            "Confirm"
        ],
        [
            "general.cancel",
            "Cancel"
        ],
        [
            "general.copied",
            "Copied to clipboard!"
        ],
        [
            "general.confirmation",
            "Confirm action"
        ],
        [
            "general.delete",
            "Remove"
        ],
        [
            "user.name",
            "Name"
        ],
        //Errors
        [
            "error.empty",
            "Value must not be empty."
        ],
        [
            "error.url",
            "Value must be a valid URL."
        ],
        [
            "error.max",
            "Value must have max {X} characters."
        ],
        [
            "error.email",
            "Value must be a valid e-mail."
        ],
        [
            "error.passwordMatch",
            "Passwords are not matching."
        ],
        //Navigation
        [
            "services",
            "Services"
        ],
        [
            "users",
            "Users"
        ],
        [
            "settings",
            "Settings"
        ],
        [
            "logout",
            "Log out"
        ],
        [
            "login",
            "Log in"
        ],
        [
            "requests",
            "Requests"
        ],
        [
            "registration",
            "Registration"
        ],
        [
            "login.email",
            "E-mail"
        ],
        [
            "login.password",
            "Password"
        ],
        [
            "login.withCredentials",
            "or login with"
        ],
        [
            "login.credentials",
            "credentials"
        ],
        [
            "login.withEmail",
            "or login with"
        ],
        [
            "login.withEmail.desc",
            "To login, enter your e-mail below. A confirmation code will be sent to your inbox."
        ],
        [
            "login.withMobile",
            "Log in with mobile app"
        ],
        [
            "login.withMobile.desc",
            "Scan the code above in the auth mobile application to sign in."
        ],
        //Services
        [
            "services.search",
            "Search apps..."
        ],
        [
            "services.pending",
            "Pending"
        ],
        [
            "services.add",
            "Add service"
        ],
        //Register service
        [
            "service.register",
            "Register service"
        ],
        [
            "service.register.type",
            "Type"
        ],
        [
            "service.register.type.website",
            "Website"
        ],
        [
            "service.register.type.mobile",
            "Mobile"
        ],
        [
            "service.register.type.desktop",
            "Desktop"
        ],
        [
            "service.register.name",
            "Service name"
        ],
        [
            "service.register.desc",
            "Description"
        ],
        [
            "service.register.minAuth",
            "Minimum auth"
        ],
        [
            "service.register.authUrl",
            "Authorize URL"
        ],
        [
            "service.register.logoutUrl",
            "Logout Hook URL"
        ],
        [
            "service.detail.createdAt",
            "Request created at"
        ],
        [
            "service.detail.cancelRequest",
            "Cancel request"
        ],
        [
            "service.detail.cancelRequest.message",
            "Do you really want to cancel the registration request for {X}?"
        ],
        [
            "service.detail.removeService.message",
            "Do you really want to remove {X}?"
        ],
        [
            "service.detail.org",
            "Organization"
        ],
        [
            "service.detail.integration",
            "Integration"
        ],
        [
            "service.detail.publicKey",
            "Public key"
        ],
        [
            "service.detail.feEnabled",
            "FE notifications"
        ],
        [
            "service.loginHistory",
            "Login history"
        ],
        [
            "service.loginHistory.place",
            "Place"
        ],
        [
            "service.loginHistory.timestamp",
            "Time"
        ],
        [
            "service.loginHistory.authMethod",
            "Method"
        ],
        [
            "service.loginHistory.platform",
            "Platform"
        ],
        [
            "service.loginHistory.browser",
            "Browser"
        ],
        [
            "service.loginHistory.filter",
            "Filter"
        ],
        [
            "service.loginHistory.filter.all",
            "All"
        ],
        [
            "service.loginHistory.filter.me",
            "My history"
        ],
        //Settings
        [
            "settings.changePassword",
            "Change password"
        ],
        [
            "settings.currentPassword",
            "Current password"
        ],
        [
            "settings.newPassword",
            "New password"
        ],
        [
            "settings.confirmPassword",
            "Confirm password"
        ],
        [
            "requests",
            "Requests"
        ],
        [
            "requests.remove.message",
            "Do you really want to remove this request?"
        ],
        [
            "requests.approve.message",
            "Do you really want to accept this request?"
        ],
        [
            "requests.action",
            "Actions"
        ],
        [
            "registration.title",
            "Service manager registration..."
        ],
        [
            "registration.firstname",
            "Firstname"
        ],
        [
            "registration.lastname",
            "Lastname"
        ],
        [
            "registration.register",
            "Register"
        ]
    ]);
    return strings.get(key) || "Missing translation for locale...";
};
const getString = (key, locale)=>{
    switch(locale !== null && locale !== void 0 ? locale : "cs"){
        case "en":
            return en(key);
        case "cs":
            return cs(key);
    }
    return "Missing translation for locale...";
};


/***/ })

};
;