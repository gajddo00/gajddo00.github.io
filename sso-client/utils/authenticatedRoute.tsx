import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuthState";
import { Role, UserApi } from "../api/api";
import useUser from "../hooks/useUser";
import ActiveLoader from "../components/common/active-loader";
import Forbidden from "../components/common/fobidden";

export const authenticatedRoute = (Component: any, roles: Array<Role> = []) => {
    return () => {
        const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
        const [hasRequiredUserRole, setHasRequiredUserRole] = useState<boolean>(false);
        const { auth } = useAuth();
        const { user, setUser } = useUser();
        const api = new UserApi();

        useEffect(() => {
            const controller = new AbortController();

            const checkAuth = async () => {
                try {
                    const response = await api.userGetProfile({
                        signal: controller.signal
                    })
                    setUser!(response.data);
                } catch (error) { }
            }

            checkAuth();

            return () => {
                controller.abort();
            }
        }, [])

        useEffect(() => {
            setUserLoggedIn(auth?.token !== undefined)
        }, [auth])

        useEffect(() => {
            if (roles.length == 0) {
                setHasRequiredUserRole(true);
                return;
            }

            if (user && user.role && roles.includes(user.role)) {
                setHasRequiredUserRole(true);
            } else {

            }
        }, [user])

        if (userLoggedIn && hasRequiredUserRole) {
            return (
                <Component />
            )
        }

        if (user && !hasRequiredUserRole) {
            return <Forbidden />
        }

        return (
            <ActiveLoader />
        )
    }
}