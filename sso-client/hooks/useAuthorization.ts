import { AuthorizeCommand, RedirectDto } from './../api/api';
import { AuthApi } from "../api/api";
import { useRouter } from 'next/router';

const useAuthorization = () => {
    const api = new AuthApi();
    const router = useRouter()

    const authorize = async () => {
        const requestData: AuthorizeCommand = {
            clientId: process.env.NEXT_PUBLIC_APP_ID,
            callbackURL: process.env.NEXT_PUBLIC_BASE_URL + "authorize"
        }

        const response = await api.authAuthorize(requestData);
        const redirectData: RedirectDto = response.data;

        const path = router.asPath;
        const wrongPaths = ['login', 'authorize', 'register']
        if (wrongPaths.every((element) => !path.includes(element))) {
            localStorage.setItem('preAuthorizationPath', path);
        }
        return redirectData;
    }

    return authorize;
}

export default useAuthorization;