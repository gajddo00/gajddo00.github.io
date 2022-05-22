import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import LoginPassword from '../components/login/login-psw';
import LoginEmail from "../components/login/login-email";
import useAuthState from '../hooks/useAuthState';
import { useRouter } from 'next/router';
import { publicAuthenticatedRoute } from '../utils/publicAuthenticatedRoute';
import { AuthApi, AuthMethod, LoginRequestDto, RedirectDto } from '../api';
import LoginQR from '../components/login/login-qr';
import useAuthorization from '../hooks/useAuthorization';
import ActiveLoader from '../components/common/active-loader';

const Login: NextPage = () => {

    const { auth } = useAuthState();
    const router = useRouter();
    const authorize = useAuthorization();
    const [authMethod, setAuthMethod] = useState<AuthMethod>();
    const [stateMethod, setStateMethod] = useState<AuthMethod>();
    const api = new AuthApi();
    const [requestKey, setRequestKey] = useState<string>("");
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);

    useEffect(() => {
        const key = encodeURI(
            new URLSearchParams(window.location.search).get("requestKey") ?? ""
        );

        setRequestKey(key);

        const preventEmptyRequest = async () => {
            if (key === "") {
                if (Object.keys(auth ?? {}).length != 0) {
                    router.replace('/');
                } else {
                    const response: RedirectDto = await authorize();
                    router.replace(response.redirectUrl ?? "/");
                }
            }
        }

        preventEmptyRequest();
    }, [auth])

    useEffect(() => {
        const getRequestDescription = async () => {
            if (requestKey != "") {
                try {
                    const response = await api.authGetLoginRequestDescription(requestKey);
                    const loginRequest: LoginRequestDto = response.data;
                    setAuthMethod(loginRequest.requiredAuthMethod)
                    setStateMethod(loginRequest.requiredAuthMethod)
                    setDataLoaded(true);
                } catch { }
            }
        }

        getRequestDescription();
    }, [requestKey])

    const handleStateChange = (state: AuthMethod) => {
        setStateMethod(state);
    }

    const LoginComponent = () => {
        switch (stateMethod) {
            case AuthMethod.Password:
                return <LoginPassword emailOptionHandler={handleStateChange} />
            case AuthMethod.Email:
                return <LoginEmail
                    passwordOptionHandler={handleStateChange} showLinkToPassword={authMethod == AuthMethod.Password} />
            default: return <></>
        }
    }

    if (dataLoaded) {
        return <div className="flex flex-col sm:flex-row">
            {stateMethod != AuthMethod.Mobile &&
                <LoginComponent />
            }
            <LoginQR requestKey={requestKey} />
        </div >
    } else {
        return <ActiveLoader />
    }
}

export default publicAuthenticatedRoute(Login);