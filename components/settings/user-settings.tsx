import Input from "../common/input";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Button from "../common/button";
import Text from "../common/text";
import RandomIcon from "../../assets/random_dice.svg"
import { generateRandomPassword } from "../../utils/password-generator";
import { useEffect, useMemo, useState } from "react";
import { UpdateSettingsCommand, UserApi } from "../../api";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { getString } from "../../utils/strings";
import { handleDefaultError } from "../../utils/handle-error";

const schema = yup.object({
    currentPassword: yup.string(),
    newPassword: yup.string(),
    newPasswordConfirm: yup.string()
}).required();

const UserSettings = () => {
    const [passwordMatchError, setPasswordMatchError] = useState<string>();
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const userApi = new UserApi();
    const abortController = useMemo(() => new AbortController(), []);
    const router = useRouter();

    useEffect(() => {
        return (() => {
            abortController.abort();
        })
    }, [abortController])

    const passwordsAreMatching = (data: any) => {
        const newPassword = data['newPassword'];
        const confirm = data['newPasswordConfirm'];
        return newPassword === confirm;
    }

    const updateSettings = async (data: UpdateSettingsCommand) => {
        try {
            const response = await userApi.userUpdateSettings(data, {
                signal: abortController.signal
            });

            setPasswordMatchError("");
            reset();
            toast(response.data.message)
        } catch (error) {
            handleDefaultError(error);
        }
    }

    const onSubmit = async (data: any) => {
        if (!passwordsAreMatching(data)) {
            setPasswordMatchError(getString("error.passwordMatch", router.locale));
            return;
        }

        const nonEmptyProps = Object.keys(data).filter((prop: string) => {
            return data[prop] && data[prop] != "";
        })

        if (nonEmptyProps.length > 0) {
            const requestModel: UpdateSettingsCommand = {
                oldPassword: data['currentPassword'],
                newPassword: data['newPassword']
            }
            await updateSettings(requestModel);
        }
    }

    const handleRandomPassword = () => {
        const randomPassword = generateRandomPassword();
        setValue("newPassword", randomPassword);
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col sm:flex-row sm:gap-20 mt-16">
            <section>
                <Text type='medium'>{getString("settings.changePassword", router.locale)}</Text>
                <div className="mt-8 flex flex-col items-start gap-4 sm:h-screen-50">
                    <Input
                        className="w-full"
                        name="currentPassword"
                        labelValue={getString("settings.currentPassword", router.locale)}
                        type="password"
                        error={errors.currentPassword?.message}
                        register={register}
                    />
                    <Input
                        className="w-full"
                        name="newPassword"
                        labelValue={getString("settings.newPassword", router.locale)}
                        type="password"
                        error={errors.newPassword?.message}
                        register={register}
                        accessoryIcon={RandomIcon}
                        accessoryOnClick={handleRandomPassword}
                    />
                    <Input
                        className="w-full"
                        name="newPasswordConfirm"
                        labelValue={getString("settings.confirmPassword", router.locale)}
                        type="password"
                        error={errors.newPasswordConfirm?.message}
                        register={register}
                    />
                    <span className="error ml-2 mt-4 text-center flex justify-center">
                        {passwordMatchError}
                    </span>

                </div>
            </section>

            <section>
                <Text type='medium'>Automatic logout</Text>
            </section>
        </div>
        <Button
            label={getString("general.save", router.locale)}
            className="btn bg-dark block m-auto mt-4"
            submit={true}
        />
    </form>
}

export default UserSettings;