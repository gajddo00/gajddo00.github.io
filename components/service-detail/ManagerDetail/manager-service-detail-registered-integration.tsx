import router from "next/router";
import { ManagerServiceDto, ServicesManagerApi, ServiceType, StatusDto, UpdateServiceCommand } from "../../../api";
import { copyToClipboard } from "../../../utils/copy-clipboard";
import { getString } from "../../../utils/strings";
import Input from "../../common/input";
import CopyIcon from "../../../assets/copy_icon.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../common/button";
import { useMemo, useState } from "react";
import { handleDefaultError } from "../../../utils/handle-error";
import { toast } from "react-toastify";
import Text from "../../common/text";

type ManagerServiceDetailRegisteredIntegrationProps = {
    service: ManagerServiceDto
}

const ManagerServiceDetailRegisteredIntegration = ({ service }: ManagerServiceDetailRegisteredIntegrationProps) => {
    const schema = yup.object({
        authorizeUrl: yup.string().required(getString("error.empty", router.locale)),
        //.url(getString("error.url", router.locale))
        logoutHookUrl: yup.string(),
        feEnabled: yup.bool()
        //.url(getString("error.url", router.locale))
    }).required();

    const [feNotifEnabled, setFeNotifEnabled] = useState<boolean>(service.feNotificationsEnabled ?? false);
    const controller = useMemo(() => new AbortController(), []);
    const api = new ServicesManagerApi();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const handleCopyApiKey = () => {
        if (service.appId)
            copyToClipboard(service.appId, router);
    }

    const handleCopyPublicKey = () => {
        if (service.publicKey) {
            copyToClipboard(service.publicKey, router);
        }
    }

    const onSubmit = async (data: any) => {
        const requestData: UpdateServiceCommand = {
            serviceId: service.id,
            serviceName: service.name,
            url: service.url,
            description: service.description,
            authorizeURL: data.authorizeUrl,
            logoutHookURL: data.logoutHookUrl,
            minimumAuthMethod: service.authMethod,
            feNotificationsEnabled: feNotifEnabled
        };

        await handleUpdate(requestData);
    }

    const handleUpdate = async (data: UpdateServiceCommand) => {
        try {
            const response = await api.servicesManagerUpdateService(data, {
                signal: controller.signal
            })

            const status: StatusDto = response.data;
            toast(status.message);
        } catch (error) {
            handleDefaultError(error);
        }
    }

    return <article>
        <form className="flex flex-col gap-5 mt-5" onSubmit={handleSubmit(onSubmit)}>
            <Input
                value={service.appId ?? ""}
                name="appId"
                labelValue="App ID"
                type="password"
                disabled={true}
                accessoryIcon={CopyIcon}
                accessoryOnClick={handleCopyApiKey}
            />
            <Input
                value={service.publicKey ?? ""}
                name="publicKey"
                labelValue={getString("service.detail.publicKey", router.locale)}
                type="password"
                disabled={true}
                accessoryIcon={CopyIcon}
                accessoryOnClick={handleCopyPublicKey}
            />
            {service.serviceType == ServiceType.Website &&
                <>
                    <Input
                        value={service.authorizeUrl ?? ""}
                        name="authorizeUrl"
                        labelValue={getString("service.register.authUrl", router.locale)}
                        type="text"
                        required={true}
                        error={errors.authorizeUrl?.message}
                        register={register}
                    />
                    <Input
                        value={service.logoutHookUrl ?? ""}
                        name="logoutHookUrl"
                        labelValue={getString("service.register.logoutUrl", router.locale)}
                        type="text"
                        error={errors.logoutHookUrl?.message}
                        register={register}
                    />
                    <div className="flex items-center justify-between">
                        <label htmlFor="feEnabled" className="mr-2 ml-2">
                            {getString("service.detail.feEnabled", router.locale)}
                        </label>
                        <input
                            onChange={(e) => setFeNotifEnabled(e.target.checked)}
                            defaultChecked={feNotifEnabled}
                            type="checkbox"
                            name="feEnabled"
                        />
                    </div>
                    <Button
                        submit={true}
                        label={getString("general.save", router.locale)}
                        className="btn self-center mt-5"
                    />
                </>
            }
        </form>
    </article>
}

export default ManagerServiceDetailRegisteredIntegration;