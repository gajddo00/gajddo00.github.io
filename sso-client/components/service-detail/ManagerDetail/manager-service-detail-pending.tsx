import { ManagerServiceDto, Role, ServicesManagerApi } from "../../../api";
import Text from "../../common/text";
import BackButton from "../../common/back-button";
import Button from "../../common/button";
import Dialog from "../../common/dialog";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { formatTimestamp } from "../../../utils/date-util";
import { getString } from "../../../utils/strings";
import { handleDefaultError } from "../../../utils/handle-error";
import useUser from "../../../hooks/useUser";

type ManagerServiceDetailPendingProps = {
    service: ManagerServiceDto
}

const ManagerServiceDetailPending = ({ service }: ManagerServiceDetailPendingProps) => {
    const [dialogVisible, setDialogVisible] = useState<boolean>(false);
    const serviceApi = new ServicesManagerApi();
    const controller = useMemo(() => new AbortController(), []);
    const router = useRouter();
    const { user } = useUser();

    useEffect(() => {
        return () => {
            controller.abort();
        }
    }, [])

    const handleDeleteAction = async () => {
        try {
            const response = await serviceApi.servicesManagerDeleteService(service.id ?? "", {
                signal: controller.signal
            })

            toast(response.data.message);
            router.back();
        } catch (error) {
            handleDefaultError(error);
            setDialogVisible(false);
        }
    }

    return <>
        {dialogVisible &&
            <Dialog
                title={getString("service.detail.cancelRequest", router.locale)}
                message={getString("service.detail.cancelRequest.message", router.locale).replace("{X}", service.name ?? "")}
                setVisible={setDialogVisible}
                action={handleDeleteAction}
            />
        }
        <div className="pt-3 px-8 h-screen">
            <BackButton title={service?.name ?? ""} />
            <div className="flex flex-col">
                <section className="mt-10">
                    <Text type='medium'>{getString("service.register.desc", router.locale)}</Text>
                    <table className="h-table sm:w-1/2 w-full mt-5">
                        <tbody>
                            <tr>
                                <th>{getString("service.register.name", router.locale)}</th>
                                <td>{service?.name}</td>
                            </tr>
                            <tr>
                                <th>{getString("service.register.desc", router.locale)}</th>
                                <td>{service.description || "—"}</td>
                            </tr>
                            <tr>
                                <th>{getString("service.register.type", router.locale)}</th>
                                <td>{service?.serviceType}</td>
                            </tr>
                            <tr>
                                <th>{getString("service.register.minAuth", router.locale)}</th>
                                <td>{service?.authMethod}</td>
                            </tr>
                            <tr>
                                <th>{getString("service.detail.createdAt", router.locale)}</th>
                                <td>{formatTimestamp(service?.createdAt ?? "")}</td>
                            </tr>
                            {service.url &&
                                <>
                                    <tr>
                                        <th>URL</th>
                                        <td>{service?.url}</td>
                                    </tr>
                                    <tr>
                                        <th>{getString("service.register.authUrl", router.locale)}</th>
                                        <td>{service?.authorizeUrl}</td>
                                    </tr>
                                    {service.logoutHookUrl &&
                                        <tr>
                                            <th>{getString("service.register.logoutUrl", router.locale)}</th>
                                            <td>{service?.logoutHookUrl}</td>
                                        </tr>
                                    }
                                </>
                            }
                        </tbody>
                    </table>
                </section>
                {user?.role == Role.ServiceManager &&
                    <Button
                        onClick={() => setDialogVisible(true)}
                        type='warning'
                        label={getString("service.detail.cancelRequest", router.locale)}
                        className="btn mt-20 self-center absolute bottom-5"
                    />
                }
            </div>
        </div>
    </>
}

export default ManagerServiceDetailPending;