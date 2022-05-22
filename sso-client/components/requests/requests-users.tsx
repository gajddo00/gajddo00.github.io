import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AdminApi, PaginatedListOfServiceManagerRequestDto, ServiceManagerRequestDto } from "../../api";
import { handleDefaultError } from "../../utils/handle-error";
import { getString } from "../../utils/strings";
import RemoveIcon from "../../assets/remove_icon.svg";
import ApproveIcon from "../../assets/approve_icon.svg";
import Image from "next/image";
import Pagination from "../common/pagination";
import ActiveLoader from "../common/active-loader";
import { RequestTab } from "../../pages/requests";
import { toast } from "react-toastify";

type ServiceManagerRequestsProps = {
    triggerApproveDialog: () => void
    triggerDenyDialog: () => void
    approved: boolean
    denied: boolean
    updateTabNotification: (count: number, tab: RequestTab) => void
}

const ServiceManagerRequests = (props: ServiceManagerRequestsProps) => {
    const [requests, setRequests] = useState<PaginatedListOfServiceManagerRequestDto>();
    const [page, setPage] = useState<number>(1);
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [userIdInProcess, setUserIdInProcess] = useState<string>();

    const api = new AdminApi();
    const router = useRouter();
    const controller = useMemo(() => new AbortController(), []);

    const fetchServiceRequests = useCallback(async () => {
        try {
            const response = await api.adminGetServicesManagerRequests(page, 10, {
                signal: controller.signal
            });

            if (response.data.items) {
                setRequests(response.data)
                props.updateTabNotification(response.data.totalCount ?? 0, RequestTab.Users);
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
                const response = await api.adminApproveServiceManagerRequest(userIdInProcess ?? "", {
                    signal: controller.signal
                });
                toast(response.data.message)
                await fetchServiceRequests();
                setUserIdInProcess(undefined);
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
                const response = await api.adminRemoveServiceManagerRequest(userIdInProcess ?? "", {
                    signal: controller.signal
                });
                toast(response.data.message)
                await fetchServiceRequests();
                setUserIdInProcess(undefined);
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
                    <th>{getString('service.detail.org', router.locale)}</th>
                    <th>{getString('requests.action', router.locale)}</th>
                </tr>
            </thead>
            <tbody>
                {requests?.items?.map((user, index) => {
                    return <tr key={index}>
                        <td>{`${user.firstname} ${user.lastname}`}</td>
                        <td>{user.email}</td>
                        <td>{user.organization}</td>
                        <td>
                            <button className="pr-2"
                                onClick={() => {
                                    if (user.userId) {
                                        setUserIdInProcess(user.userId);
                                        props.triggerDenyDialog();
                                    }
                                }}>
                                <Image src={RemoveIcon} height={20} width={20} alt="Remove service request icon" />
                            </button>
                            <button onClick={() => {
                                if (user.userId) {
                                    setUserIdInProcess(user.userId);
                                    props.triggerApproveDialog();
                                }
                            }}>
                                <Image src={ApproveIcon} height={20} width={20} alt="Approve service request icon" />
                            </button>
                        </td>
                    </tr>
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

export default ServiceManagerRequests;