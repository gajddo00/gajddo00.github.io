import React, { useEffect } from "react";
import { UserApi } from "../api/api";
import useUser from "../hooks/useUser";

export const publicAuthenticatedRoute = (Component: any) => {
    return () => {
        const { setUser } = useUser();
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

        return (
            <Component />
        )
    }
}