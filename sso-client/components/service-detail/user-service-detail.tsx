import Text from "../common/text";
import BackButton from "../common/back-button";
import { LoginHistoryDto, ServiceDto, ServicesApi } from "../../api/api";
import { useEffect, useState } from "react";
import { formatTimestamp } from "../../utils/date-util";
import { getString } from "../../utils/strings";
import { useRouter } from "next/router";
import LoginHistoryPagination from "./login-history-pagination";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { handleDefaultError } from "../../utils/handle-error";

type UserServiceDetailProps = {
    serviceId: string
}

const UserServiceDetail = ({ serviceId }: UserServiceDetailProps) => {
    const [loginStamps, setLoginStamps] = useState<Array<LoginHistoryDto>>([]);
    const [service, setService] = useState<ServiceDto>();
    const api = new ServicesApi();
    const router = useRouter();

    useEffect(() => {
        const controller = new AbortController();

        const fetchDetail = async () => {
            try {
                if (serviceId) {
                    const response = await api.servicesGetServiceDetail(serviceId, {
                        signal: controller.signal
                    })
                    const serviceDto = response?.data as ServiceDto;
                    setService(serviceDto);
                }
            } catch (error) {
                handleDefaultError(error);
            }
        }

        fetchDetail();

        return () => {
            controller.abort();
        }
    }, [serviceId])

    return <div className="pt-3 px-8">
        <BackButton title={service?.name ?? ""} />
        <div className="flex flex-col sm:flex-row mt-10 gap-16">
            <section className="flex-50">
                <Text type='medium'>{getString("service.register.desc", router.locale)}</Text>
                <table className="h-table w-full mt-5">
                    <tbody>
                        <tr>
                            <th>{getString("service.register.name", router.locale)}</th>
                            <td>{service?.name}</td>
                        </tr>
                        <tr>
                            <th>{getString("service.register.desc", router.locale)}</th>
                            <td>{service?.description}</td>
                        </tr>
                        <tr>
                            <th>{getString("service.detail.org", router.locale)}</th>
                            <td>{service?.organization}</td>
                        </tr>
                        <tr>
                            <th>{getString("service.register.type", router.locale)}</th>
                            <td>{service?.serviceType}</td>
                        </tr>
                        <tr>
                            <th>URL</th>
                            <td>{service?.url}</td>
                        </tr>
                        <tr>
                            <th>{getString("service.register.minAuth", router.locale)}</th>
                            <td>{service?.authMethod}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="flex-50 overflow-x-scroll sm:overflow-hidden">
                <Text type='medium'>{getString("service.loginHistory", router.locale)}</Text>
                <table className="v-table w-full mt-5">
                    <thead>
                        <tr>
                            <th>{getString("service.loginHistory.place", router.locale)}</th>
                            <th>{getString("service.loginHistory.timestamp", router.locale)}</th>
                            <th>{getString("service.loginHistory.authMethod", router.locale)}</th>
                            <th>{getString("service.loginHistory.platform", router.locale)}</th>
                            <th>{getString("service.loginHistory.browser", router.locale)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loginStamps.map((stamp, index) => {
                            return (
                                <tr key={index}>
                                    <td>{stamp.location}</td>
                                    <td>{formatTimestamp(stamp.timestamp!)}</td>
                                    <td>{stamp.method}</td>
                                    <td>{stamp.platform}</td>
                                    <td>{stamp.userAgent}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {service &&
                    <LoginHistoryPagination
                        service={service}
                        updateLoginStamps={(stamps) => setLoginStamps(stamps)}
                    />
                }
            </section>
        </div>
    </div>
}

export default UserServiceDetail;