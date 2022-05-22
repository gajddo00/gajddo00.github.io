import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../components/common/input';
import Textarea from "../../components/common/textarea";
import Button from '../../components/common/button';
import { useEffect, useRef, useState } from 'react';
import BackButton from '../../components/common/back-button';
import { AuthMethod, CreateServiceCommand, ServicesManagerApi, ServiceType } from "../../api";
import { mapAuthMethod, mapServiceType } from "../../utils/enum-mappings";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { getString } from "../../utils/strings";
import { authenticatedRoute } from "../../utils/authenticatedRoute";
import { serviceSchema } from "../../utils/validation-schemas/service-schema";
import AuthMethodSelect from "../../components/common/auth-method-select";
import ServiceTypeSelect from "../../components/common/service-type-select";
import { handleDefaultError } from "../../utils/handle-error";

const AddService = () => {
    const [authMethod, setAuthMethod] = useState<number>(0);
    const [serviceType, setServiceType] = useState<number>(0);
    const serviceApi = new ServicesManagerApi();
    const router = useRouter();
    const controller = useRef(new AbortController());

    const schema = serviceSchema(router, serviceType);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        return () => {
            controller.current.abort();
        }
    }, [])

    const onSubmit = async (data: any) => {
        const type = mapServiceType(serviceType);
        const method = mapAuthMethod(authMethod);

        const requestData: CreateServiceCommand = {
            url: type === ServiceType.Website ? data.url : null,
            serviceName: data.serviceName,
            description: data.description,
            logoutHookURL: data.logoutHookUrl,
            authorizeURL: type === ServiceType.Website ? data.authorizeUrl : null,
            serviceType: type,
            minimumAuthMethod: type === ServiceType.Website ? method : AuthMethod.Password
        };

        await requestServiceRegister(requestData);
    }

    const authOptionSelected = (index: number) => {
        setAuthMethod(index);
    }

    const serviceTypeOptionSelected = (index: number) => {
        setServiceType(index);
    }

    const requestServiceRegister = async (data: CreateServiceCommand) => {
        try {
            const response = await serviceApi.servicesManagerCreateService(data, {
                signal: controller.current.signal
            });

            toast(response.data.message);
            router.back();
        } catch (error) {
            handleDefaultError(error);
        }
    };

    return <section className="pt-3 px-8 sm:h-screen">
        <BackButton title={getString("service.register", router.locale)} />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center sm:h-90pr mt-20 sm:mt-0">
            <div className="flex sm:flex-row flex-col w-full justify-center">
                <div className="flex flex-col gap-5 sm:w-1/3 w-full sm:px-8">
                    <ServiceTypeSelect
                        defaultIndex={serviceType}
                        valueSelected={serviceTypeOptionSelected} />
                    <Input
                        name="serviceName"
                        labelValue={getString("service.register.name", router.locale)}
                        type="text"
                        required={true}
                        error={errors.serviceName?.message}
                        register={register}
                    />
                    <Textarea
                        name="description"
                        labelValue={getString("service.register.desc", router.locale)}
                        type="text"
                        error={errors.description?.message}
                        register={register}
                    />
                    {serviceType == 0 &&
                        <AuthMethodSelect
                            defaultIndex={authMethod}
                            valueSelected={authOptionSelected} />
                    }
                </div>
                {serviceType == 0 &&
                    <div className="flex flex-col gap-5 sm:w-1/3 w-full sm:px-8 sm:mt-0 mt-4">
                        <Input
                            name="url"
                            labelValue="URL"
                            required={true}
                            type="text"
                            error={errors.url?.message}
                            register={register}
                        />
                        <Input
                            name="authorizeUrl"
                            labelValue={getString("service.register.authUrl", router.locale)}
                            type="text"
                            required={true}
                            error={errors.authorizeUrl?.message}
                            register={register}
                        />
                        <Input
                            name="logoutHookUrl"
                            labelValue={getString("service.register.logoutUrl", router.locale)}
                            type="text"
                            error={errors.logoutHookUrl?.message}
                            register={register}
                        />
                    </div>
                }
            </div>
            <Button
                label={getString("general.register", router.locale)}
                className="btn bg-dark mt-20"
                submit={true}
            />
        </form>
    </section >
}

export default authenticatedRoute(AddService);