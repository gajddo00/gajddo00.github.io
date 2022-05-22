import { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthApi, TokenCommand } from "../api";

const Authorize = () => {
    const Api = new AuthApi();
    const router = useRouter();

    const requestJwtToken = useCallback(async (data: TokenCommand) => {
        try {
            const config: AxiosRequestConfig = {
                withCredentials: true
            };
            await Api.authToken(data, config);
            const originalPath = localStorage.getItem('preAuthorizationPath');
            localStorage.removeItem('preAuthorizationPath');
            router.push(originalPath || '/');
            console.log("AUTORIZING");
        } catch (error: any) {
            if (error.response) {
                const message = error.response.data.Message;
                toast(message);
            }
        }
    }, [])

    useEffect(() => {
        const authToken: string = encodeURI(
            new URLSearchParams(window.location.search).get("authToken") ?? ""
        );

        if (authToken == "") {
            router.push("/");
            return;
        }

        const requestData: TokenCommand = {
            authToken: authToken,
            clientId: process.env.NEXT_PUBLIC_APP_ID
        }

        requestJwtToken(requestData);
    }, [])

    return <div />
}

export default Authorize;