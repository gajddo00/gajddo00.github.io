import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { AuthMethod, ManagerServiceDto, ServicesManagerApi, ServiceType, StatusDto, UpdateServiceCommand } from "../../../api"
import { mapAuthMethod, mapServiceType } from "../../../utils/enum-mappings";
import { handleDefaultError } from "../../../utils/handle-error";
import { getString } from "../../../utils/strings";
import AuthMethodSelect from "../../common/auth-method-select";
import Button from "../../common/button";
import Input from "../../common/input";
import Textarea from "../../common/textarea";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

type ManagerServiceDetailRegisteredFormProps = {
    service: ManagerServiceDto
    triggerDeleteDialog: () => void
}

const ManagerServiceDetailRegisteredForm = ({ service, triggerDeleteDialog }: ManagerServiceDetailRegisteredFormProps) => {
    const [serviceType] = useState<number>(Object.keys(ServiceType).indexOf(service.serviceType ?? ServiceType.Website));
    const [authMethod, setAuthMethod] = useState<number>(Object.keys(AuthMethod).indexOf(service.authMethod ?? AuthMethod.Password));

    const router = useRouter();
    const schema = yup.object({
        serviceName: yup.string().required(getString("error.empty", router.locale)),
        description: yup.string().max(100, getString("error.max", router.locale).replace("{X}", "100")),
        url: yup.string()
            .required(getString("error.empty", router.locale))
        //  .url(getString("error.url", router.locale))
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const api = new ServicesManagerApi();
    const controller = useMemo(() => new AbortController(), []);

    const authOptionSelected = (index: number) => {
        setAuthMethod(index);
    }

    const onSubmit = async (data: any) => {
        const requestData: UpdateServiceCommand = {
            serviceType: mapServiceType(serviceType),
            serviceId: service.id,
            serviceName: data.serviceName,
            url: data.url,
            description: data.description,
            authorizeURL: service.authorizeUrl,
            logoutHookURL: service.logoutHookUrl,
            feNotificationsEnabled: service.feNotificationsEnabled,
            minimumAuthMethod: mapAuthMethod(authMethod)
        };

        await handleUpdate(requestData);
    }

    useEffect(() => {
        return (() => {
            controller.abort();
        })
    }, [service])

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

    return <form className="flex flex-col gap-5 mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between px-2">
            <label>{getString("service.register.type", router.locale)}</label>
            <label>{service.serviceType}</label>
        </div>
        <Input
            value={service.name ?? ""}
            name="serviceName"
            labelValue={getString("service.register.name", router.locale)}
            type="text"
            required={true}
            error={errors.serviceName?.message}
            register={register}
        />
        <Textarea
            value={service.description ?? ""}
            name="description"
            labelValue={getString("service.register.desc", router.locale)}
            type="text"
            error={errors.description?.message}
            register={register}
        />
        {service.serviceType == ServiceType.Website &&
            <>
                <Input
                    value={service.url ?? ""}
                    name="url"
                    labelValue="URL"
                    required={true}
                    type="text"
                    error={errors.url?.message}
                    register={register}
                />
            </>
        }

        <AuthMethodSelect
            defaultIndex={authMethod}
            valueSelected={authOptionSelected} />

        <div className="flex flex-row self-center mt-10 gap-4">
            <Button
                onClick={() => triggerDeleteDialog()}
                type='warning'
                label={getString("general.delete", router.locale)}
                className="btn self-center"
            />
            <Button
                submit={true}
                label={getString("general.save", router.locale)}
                className="btn self-center"
            />
        </div>
    </form>
}

export default ManagerServiceDetailRegisteredForm;