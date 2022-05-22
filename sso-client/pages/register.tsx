import { anonymousRoute } from '../utils/anonymousRoute';
import Text from '../components/common/text';
import { getString } from '../utils/strings';
import { useRouter } from 'next/router';
import * as yup from "yup";
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../components/common/input';
import RandomIcon from "../assets/random_dice.svg";
import { generateRandomPassword } from '../utils/password-generator';
import Button from '../components/common/button';
import { AuthApi, RegisterServiceManagerCommand } from '../api';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

const RegisterManager = () => {
    const [error, setError] = useState<string>();

    const router = useRouter();
    const controller = useMemo(() => new AbortController(), []);
    const api = new AuthApi();

    const schema = yup.object({
        firstname: yup.string()
            .required(getString("error.empty", router.locale)),
        lastname: yup.string()
            .required(getString("error.empty", router.locale)),
        email: yup.string()
            .email(getString("error.email", router.locale))
            .required(getString("error.empty", router.locale)),
        password: yup.string()
            .required(getString("error.empty", router.locale)),
        passwordConfirm: yup.string()
            .required(getString("error.empty", router.locale)),

    }).required();

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const passwordsAreMatching = (data: any) => {
        const newPassword = data['password'];
        const confirm = data['passwordConfirm'];
        return newPassword === confirm;
    }

    const handleRandomPassword = () => {
        const randomPassword = generateRandomPassword();
        setValue("password", randomPassword);
    }

    const registerUser = async (data: RegisterServiceManagerCommand) => {
        try {
            const response = await api.authRegisterManager(data, {
                signal: controller.signal
            })

            response.data.message && toast(response.data.message, {
                autoClose: 10000
            });
            reset();
            setError("");
        } catch (error) {
            const err = error as AxiosError;
            const message = err?.response?.data?.Message ?? "Unknown error";
            setError(message);
        }
    }

    const onSubmit = async (data: any) => {
        if (!passwordsAreMatching(data)) {
            setError(getString("error.passwordMatch", router.locale));
            return;
        }

        const requestModel: RegisterServiceManagerCommand = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
            organization: data.organization
        };

        await registerUser(requestModel);
    }

    return <section className="pt-3 sm:h-screen">
        <Text type='large' className='self-start pl-8'>{getString("registration", router.locale)}</Text>

        <div className="flex flex-col items-center">
            <Text type='body' className="text-center">
                {getString("registration.title", router.locale)}
            </Text>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col gap-4 pb-10 items-center">
                <div className="flex gap-4">
                    <Input
                        className="w-50"
                        name="firstname"
                        labelValue={getString("registration.firstname", router.locale)}
                        type="text"
                        error={errors.firstname?.message}
                        register={register}
                        required={true}
                    />
                    <Input
                        className="w-50"
                        name="lastname"
                        labelValue={getString("registration.lastname", router.locale)}
                        type="text"
                        error={errors.lastname?.message}
                        register={register}
                        required={true}
                    />
                </div>
                <Input
                    className="w-full"
                    name="email"
                    labelValue={getString("login.email", router.locale)}
                    type="text"
                    error={errors.email?.message}
                    register={register}
                    required={true}
                />
                <Input
                    className="w-full"
                    name="organization"
                    labelValue={getString("service.detail.org", router.locale)}
                    type="text"
                    error={errors.email?.message}
                    register={register}
                    required={true}
                />
                <Input
                    className="w-full"
                    name="password"
                    labelValue={getString("settings.currentPassword", router.locale)}
                    type="password"
                    error={errors.password?.message}
                    register={register}
                    required={true}
                    accessoryIcon={RandomIcon}
                    accessoryOnClick={handleRandomPassword}
                />
                <Input
                    className="w-full"
                    name="passwordConfirm"
                    labelValue={getString("settings.confirmPassword", router.locale)}
                    type="password"
                    error={errors.passwordConfirm?.message}
                    register={register}
                    required={true}
                />

                <span className="error ml-2 mt-4 text-center w-80">
                    {error}
                </span>

                <Button
                    label={getString("registration.register", router.locale)}
                    className="btn bg-dark block m-auto mt-4"
                    submit={true}
                />
            </form>
        </div>
    </section>
}

export default anonymousRoute(RegisterManager);