import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AdminApi, PaginatedListOfServiceRequestDto, ServiceRequestDto } from "../../api";
import { handleDefaultError } from "../../utils/handle-error";
import { getString } from "../../utils/strings";
import RemoveIcon from "../../assets/remove_icon.svg";
import ApproveIcon from "../../assets/approve_icon.svg";
import Image from "next/image";
import Pagination from "../common/pagination";
import Link from "next/link";
import ActiveLoader from "../common/active-loader";
import { toast } from "react-toastify";
import { RequestTab } from "../../pages/requests";

type ServicesRequestsProps = {
    triggerApproveDialog: () => void
    triggerDenyDialog: () => void
    approved: boolean
    denied: boolean
    updateTabNotification: (count: number, tab: RequestTab) => void
}

const ServicesRequests = (props: ServicesRequestsProps) => {
    const [requests, setRequests] = useState<PaginatedListOfServiceRequestDto>();
    const [page, setPage] = useState<number>(1);
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [serviceInProcess, setServiceInProcess] = useState<ServiceRequestDto>();

    const api = new AdminApi();
    const router = useRouter();
    const controller = useMemo(() => new AbortController(), []);

    const fetchServiceRequests = useCallback(async () => {
        try {
            const response = await api.adminGetServiceRequests(page, 10, {
                signal: controller.signal
            });

            if (response.data.items) {
                setRequests(response.data)
                props.updateTabNotification(response.data.totalCount ?? 0, RequestTab.Services);
            }
        } catch (error) {
            handleDefaultError(error);
        } finally {
            setDataLoaded(true);
        }
    }, [page]);

    useEffect(() => {
        const controller = new AbortController();
        fetchServiceRequests();

        return (() => {
            controller.abort();
        })
    }, [page])

    useEffect(() => {
        const handleApproveRequest = async () => {
            try {
                const response = await api.adminApproveServiceRequest(serviceInProcess?.serviceId ?? "", {
                    signal: controller.signal
                });
                toast(response.data.message)
                await fetchServiceRequests();
                setServiceInProcess(undefined);
            } catch (error) {
                handleDefaultError(error);
            }
        }

        if (dataLoaded) {
            handleApproveRequest();
        }
    }, [props.approved])

    useEffect(() => {
        const handleRemoveRequest = async () => {
            try {
                const response = await api.adminRemoveServiceRequest(serviceInProcess?.serviceId ?? "", {
                    signal: controller.signal
                });
                toast(response.data.message)
                await fetchServiceRequests();
                setServiceInProcess(undefined);
            } catch (error) {
                handleDefaultError(error);
            }
        }

        if (dataLoaded) {
            handleRemoveRequest();
        }
    }, [props.denied])


    if (!dataLoaded) {
        return <ActiveLoader />
    }

    return <article className="overflow-x-scroll sm:overflow-hidden">
        <table className="v-table w-full mt-5">
            <thead>
                <tr>
                    <th>{getString('user.name', router.locale)}</th>
                    <th>E-mail</th>
                    <th>{getString('service.register.name', router.locale)}</th>
                    <th>URL</th>
                    <th>{getString('service.register.minAuth', router.locale)}</th>
                    <th>{getString('service.register.type', router.locale)}</th>
                    <th>{getString('requests.action', router.locale)}</th>
                </tr>
            </thead>
            <tbody>
                {requests?.items?.map((service, index) => {
                    return <Link key={index} passHref href={{
                        pathname: "services/[id]",
                        query: { id: service.serviceId }
                    }}>
                        <tr className="selectable-row">
                            <td>{service.userFullName}</td>
                            <td>{service.userEmail}</td>
                            <td>{service.serviceName}</td>
                            <td>{service.url}</td>
                            <td>{service.authMethod}</td>
                            <td>{service.serviceType}</td>
                            <td>
                                <button className="pr-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setServiceInProcess(service);
                                        props.triggerDenyDialog();
                                    }}>
                                    <Image src={RemoveIcon} height={20} width={20} alt="Remove service request icon" />
                                </button>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    setServiceInProcess(service);
                                    props.triggerApproveDialog();
                                }}>
                                    <Image src={ApproveIcon} height={20} width={20} alt="Approve service request icon" />
                                </button>
                            </td>
                        </tr>
                    </Link>
                })}
            </tbody>
        </table>
        <Pagination
            page={page}
            pages={requests?.totalPages ?? 0}
            count={requests?.totalCount ?? 0}
            setPage={(newPage) => setPage(newPage)}
        />
    </article>
}

export default ServicesRequests;