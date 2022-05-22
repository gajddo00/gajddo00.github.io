import { useEffect, useMemo, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from 'react-toastify';
import { AuthApi, AuthMethod, PasswordLoginCommand, RedirectDto } from '../../api';
import Button from '../common/button';
import Input from '../common/input';
import Text from "../common/text"
import { AxiosError } from 'axios';
import { getString } from '../../utils/strings';
import { useRouter } from 'next/router';
import { handleDefaultError } from '../../utils/handle-error';

type LoginPasswordProps = {
    emailOptionHandler: (state: AuthMethod) => void;
}

const LoginPassword = (props: LoginPasswordProps) => {
    const Api = new AuthApi();
    const [loginError, setLoginError] = useState<string>("");
    const router = useRouter();
    const controller = useMemo(() => new AbortController(), []);

    const schema = yup.object({
        email: yup.string()
            .email(getString("error.email", router.locale))
            .required(getString("error.empty", router.locale)),
        password: yup.string()
            .required(getString("error.empty", router.locale)),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        return (() => {
            controller.abort();
        })
    }, [])

    const onSubmit = async (data: any) => {
        const requestKey = encodeURI(
            new URLSearchParams(window.location.search).get("requestKey") ?? ""
        );

        const requestData: PasswordLoginCommand = {
            email: data.email,
            password: data.password,
            requestKey: requestKey,
        }

        console.log(requestData);


        await requestPwdLogin(requestData);
    }

    const requestPwdLogin = async (data: PasswordLoginCommand) => {
        try {
            const response = await Api.authPwdLogin(data, {
                signal: controller.signal
            });
            const redirectData = response.data as RedirectDto;
            if (redirectData.redirectUrl) {
                window.location.assign(redirectData.redirectUrl);
            }
        } catch (error) {
            const err = error as AxiosError;
            if (err?.response && err?.response.status === 400) {
                setLoginError(err?.response?.data.Message);
            } else {
                handleDefaultError(error);
            }
        }
    };

    return <section className="pt-3 flex-50 h-screen">
        <Text type='large' className='self-start pl-8'>{getString("login", router.locale)}</Text>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-20 flex flex-col items-center gap-4 h-screen-50">
            <Input
                className="w-80"
                name="email"
                labelValue={getString("login.email", router.locale)}
                type="text"
                error={errors.email?.message}
                register={register}
            />
            <Input
                className="w-80"
                name="password"
                labelValue={getString("login.password", router.locale)}
                type="password"
                error={errors.password?.message}
                register={register}
            />
            <span className="error ml-2 mt-4 text-center flex justify-center">
                {loginError}
            </span>
            <Text type='body' bold={true}>
                {getString("login.withEmail", router.locale)} <button type='button' className="purple" onClick={() => props.emailOptionHandler(AuthMethod.Email)}>e-mail</button>
            </Text>
            <Button
                label={getString("login", router.locale)}
                className="btn bg-dark block m-auto mt-4"
                submit={true}
            />
        </form>
    </section>
}

export default LoginPassword;