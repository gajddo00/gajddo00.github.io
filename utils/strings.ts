const cs = (key: string): string => {
    const strings = new Map<string, string>([
        //General
        ["general.save", "Uložit"],
        ["general.noResults", "Žádné výsledky..."],
        ["general.register", "Registrovat"],
        ["general.confirm", "Potvrdit"],
        ["general.cancel", "Zrušit"],
        ["general.copied", "Hodnota byla zkopírována."],
        ["general.confirmation", "Potvrzení akce"],
        ["general.delete", "Odstranit"],

        ["user.name", "Jméno"],

        //Errors
        ["error.empty", "Pole nesmí být prázdné."],
        ["error.url", "Pole musí být validní URL."],
        ["error.max", "Pole může obsahovat max. {X} znaků."],
        ["error.email", "Pole musí být validní e-mail."],
        ["error.passwordMatch", "Hesla se neshodují."],

        //Navigation
        ["services", "Služby"],
        ["users", "Uživatelé"],
        ["settings", "Nastavení"],
        ["logout", "Odhlásit se"],
        ["login", "Přihlásit se"],
        ["requests", "Žádosti"],
        ["registration", "Registrace"],
        //Login
        ["login.email", "E-mail"],
        ["login.password", "Heslo"],
        ["login.withCredentials", "nebo se přihlásit s"],
        ["login.credentials", "e-mailem a heslem"],
        ["login.withEmail", "nebo se přihlásit přes"],
        ["login.withEmail.desc", "Pro přihlášení zadejte svůj e-mail. Do vaší e-mailové schránky bude zaslán potvrzovací kód."],
        ["login.withMobile", "Přihlásit se s mobilní aplikací"],
        ["login.withMobile.desc", "Pro přihlášení stačí v mobilní aplikaci naskenovat QR kód."],

        //Services
        ["services.search", "Hledat aplikace..."],
        ["services.pending", "Čekající"],
        ["services.add", "Přidat službu"],

        //Register service
        ["service.register", "Registrace služby"],
        ["service.register.type", "Typ"],
        ["service.register.type.website", "Webová stránka"],
        ["service.register.type.mobile", "Mobilní aplikace"],
        ["service.register.type.desktop", "Desktopová aplikace"],
        ["service.register.name", "Název služby"],
        ["service.register.desc", "Popis"],
        ["service.register.minAuth", "Min. autentizace"],
        ["service.register.authUrl", "Autorizační URL"],
        ["service.register.logoutUrl", "Hook URL odhlášení"],

        ["service.detail.createdAt", "Žádost vytvořena v"],
        ["service.detail.cancelRequest", "Zrušit žádost"],
        ["service.detail.cancelRequest.message", "Opravdu chcete zrušit žádost o registraci služby {X}?"],
        ["service.detail.removeService.message", "Opravdu chcete odstranit službu {X}?"],
        ["service.detail.org", "Organizace"],
        ["service.detail.integration", "Integrace"],
        ["service.detail.publicKey", "Veřejný klíč"],
        ["service.detail.feEnabled", "FE notifikace"],

        ["service.loginHistory", "Historie přihlášení"],
        ["service.loginHistory.place", "Místo"],
        ["service.loginHistory.timestamp", "Čas"],
        ["service.loginHistory.authMethod", "Metoda"],
        ["service.loginHistory.platform", "Platforma"],
        ["service.loginHistory.browser", "Prohlížeč"],
        ["service.loginHistory.filter", "Filter"],
        ["service.loginHistory.filter.all", "Vše"],
        ["service.loginHistory.filter.me", "Moje historie"],

        //Settings
        ["settings.changePassword", "Změnit heslo"],
        ["settings.currentPassword", "Heslo"],
        ["settings.newPassword", "Nové heslo"],
        ["settings.confirmPassword", "Potvrdit heslo"],

        ["requests", "Žádosti"],
        ["requests.remove.message", "Opravdu chcete tuto žádost odstranit?"],
        ["requests.approve.message", "Opravdu chcete tuto žádost potvrdit?"],
        ["requests.action", "Akce"],

        ["registration.title", "Registrace správce služeb..."],
        ["registration.firstname", "Jméno"],
        ["registration.lastname", "Příjmení"],
        ["registration.register", "Registrovat"]
    ]);

    return strings.get(key) || "Missing translation for locale...";
}

const en = (key: string): string => {
    const strings = new Map<string, string>([
        //General
        ["general.save", "Save"],
        ["general.noResults", "No results..."],
        ["general.register", "Register"],
        ["general.confirm", "Confirm"],
        ["general.cancel", "Cancel"],
        ["general.copied", "Copied to clipboard!"],
        ["general.confirmation", "Confirm action"],
        ["general.delete", "Remove"],

        ["user.name", "Name"],

        //Errors
        ["error.empty", "Value must not be empty."],
        ["error.url", "Value must be a valid URL."],
        ["error.max", "Value must have max {X} characters."],
        ["error.email", "Value must be a valid e-mail."],
        ["error.passwordMatch", "Passwords are not matching."],

        //Navigation
        ["services", "Services"],
        ["users", "Users"],
        ["settings", "Settings"],
        ["logout", "Log out"],
        ["login", "Log in"],
        ["requests", "Requests"],
        ["registration", "Registration"],

        ["login.email", "E-mail"],
        ["login.password", "Password"],
        ["login.withCredentials", "or login with"],
        ["login.credentials", "credentials"],
        ["login.withEmail", "or login with"],
        ["login.withEmail.desc", "To login, enter your e-mail below. A confirmation code will be sent to your inbox."],
        ["login.withMobile", "Log in with mobile app"],
        ["login.withMobile.desc", "Scan the code above in the auth mobile application to sign in."],

        //Services
        ["services.search", "Search apps..."],
        ["services.pending", "Pending"],
        ["services.add", "Add service"],

        //Register service
        ["service.register", "Register service"],
        ["service.register.type", "Type"],
        ["service.register.type.website", "Website"],
        ["service.register.type.mobile", "Mobile"],
        ["service.register.type.desktop", "Desktop"],
        ["service.register.name", "Service name"],
        ["service.register.desc", "Description"],
        ["service.register.minAuth", "Minimum auth"],
        ["service.register.authUrl", "Authorize URL"],
        ["service.register.logoutUrl", "Logout Hook URL"],

        ["service.detail.createdAt", "Request created at"],
        ["service.detail.cancelRequest", "Cancel request"],
        ["service.detail.cancelRequest.message", "Do you really want to cancel the registration request for {X}?"],
        ["service.detail.removeService.message", "Do you really want to remove {X}?"],
        ["service.detail.org", "Organization"],
        ["service.detail.integration", "Integration"],
        ["service.detail.publicKey", "Public key"],
        ["service.detail.feEnabled", "FE notifications"],

        ["service.loginHistory", "Login history"],
        ["service.loginHistory.place", "Place"],
        ["service.loginHistory.timestamp", "Time"],
        ["service.loginHistory.authMethod", "Method"],
        ["service.loginHistory.platform", "Platform"],
        ["service.loginHistory.browser", "Browser"],
        ["service.loginHistory.filter", "Filter"],
        ["service.loginHistory.filter.all", "All"],
        ["service.loginHistory.filter.me", "My history"],

        //Settings
        ["settings.changePassword", "Change password"],
        ["settings.currentPassword", "Current password"],
        ["settings.newPassword", "New password"],
        ["settings.confirmPassword", "Confirm password"],

        ["requests", "Requests"],
        ["requests.remove.message", "Do you really want to remove this request?"],
        ["requests.approve.message", "Do you really want to accept this request?"],
        ["requests.action", "Actions"],

        ["registration.title", "Service manager registration..."],
        ["registration.firstname", "Firstname"],
        ["registration.lastname", "Lastname"],
        ["registration.register", "Register"]
    ]);

    return strings.get(key) || "Missing translation for locale...";
}

export const getString = (key: string, locale: string | undefined): string => {
    switch (locale ?? "cs") {
        case "en": return en(key);
        case "cs": return cs(key);
    }

    return "Missing translation for locale...";
}