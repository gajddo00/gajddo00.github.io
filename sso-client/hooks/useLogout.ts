import { handleDefaultError } from './../utils/handle-error';
import { useRouter } from 'next/router';
import { RedirectDto } from './../api/api';
import { AuthApi } from "../api/api";
import useAuthState from "./useAuthState";
import useUser from "./useUser";

const useLogout = () => {
    const api = new AuthApi();
    const { setAuth } = useAuthState();
    const { setUser } = useUser();
    const router = useRouter();

    const hardLogout = async () => {
        setAuth!({});
        setUser!({});

        const subId = localStorage.getItem('subId') ?? undefined;

        try {
            const response = await api.authLogout({
                logoutCallbackUrl: process.env.NEXT_PUBLIC_BASE_URL + "login",
                notificationsSubId: subId
            })
            const redirectData = response.data as RedirectDto;
            if (redirectData.redirectUrl) {
                window.location.assign(redirectData.redirectUrl);
            }
        } catch (error) {
            handleDefaultError(error);
        }
    }

    const softLogout = () => {
        setAuth!({});
        setUser!({});
        router.push("/login");
    }

    return { softLogout, hardLogout };
}

export default useLogout;