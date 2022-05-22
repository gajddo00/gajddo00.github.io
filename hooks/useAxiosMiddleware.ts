import { RedirectDto } from '../api/api';
import { useEffect } from 'react';
import globalAxios from 'axios';
import useRefreshToken from './useRefreshToken';
import useGlobalState from './useGlobalState';
import useAuthorization from './useAuthorization';
import { useRouter } from 'next/router';

const useAxiosMiddleware = () => {
    const refresh = useRefreshToken();
    const authorize = useAuthorization();
    const { auth } = useGlobalState();
    const refreshURL = process.env.NEXT_PUBLIC_API_BASE_URL + "/auth/refresh-token";
    const router = useRouter();
    const anonymousRoutes = ["/login", "/register"]

    useEffect(() => {
        globalAxios.defaults.withCredentials = true;
        const requestIntercept = globalAxios.interceptors.request.use(
            config => {
                if (config.headers) {
                    if (!config.headers["Authorization"]) {
                        config.headers["Authorization"] = `Bearer ${auth?.token}`;
                    }

                    config.headers["Accept-Language"] = router.locale ?? "cs";
                }

                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = globalAxios.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;

                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true;

                    if (error?.request?.responseURL === refreshURL) {
                        if (anonymousRoutes.includes(router.pathname)) {
                            return Promise.reject(error);
                        }

                        const redirectData: RedirectDto = await authorize();
                        if (redirectData.redirectUrl) {
                            window.location.assign(redirectData.redirectUrl);
                        }
                        return Promise.reject(error);
                    }

                    try {
                        const newAccessToken = await refresh();
                        prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
                        return globalAxios(prevRequest);
                    } catch (error) {
                        return Promise.reject(error);
                    }
                }
                return Promise.reject(error);
            }
        );

        return () => {
            globalAxios.interceptors.request.eject(requestIntercept);
            globalAxios.interceptors.response.eject(responseIntercept);
        }
    }, [refresh, auth])

    return globalAxios;
}

export default useAxiosMiddleware;