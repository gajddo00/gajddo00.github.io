import { AxiosRequestConfig } from 'axios';
import { AuthApi } from "../api";
import useAuth from "./useAuthState";

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth();
    const api = new AuthApi();

    const refresh = async () => {
        const config: AxiosRequestConfig = {
            withCredentials: true
        }

        const response = await api.authRefreshToken(config);

        setAuth!(prev => {
            return {
                ...prev,
                token: response.data.token
            }
        });

        return response.data.token;
    }

    return refresh;
}

export default useRefreshToken;