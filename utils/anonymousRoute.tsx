import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { AuthApi } from "../api/api";
import ActiveLoader from "../components/common/active-loader";
import Delayed from "../components/common/delayed-component";
import useAuthState from "../hooks/useAuthState";

let initial = true;

export const anonymousRoute = (Component: any) => {
    return () => {
        const api = new AuthApi();
        const { auth } = useAuthState();
        const router = useRouter();

        useEffect(() => {
            const controller = new AbortController();

            const checkAuth = async () => {
                try {
                    await api.authCheck({
                        signal: controller.signal
                    })
                } catch (error) { }

            }

            checkAuth();

            return () => {
                controller.abort();
            }
        }, [])

        useEffect(() => {
            if (auth?.token && !initial) {
                router.replace('/');
            }

            initial = false;
        }, [auth])

        return <Delayed>
            <Component />
        </Delayed>
    }
}