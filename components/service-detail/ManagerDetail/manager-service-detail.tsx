import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ManagerServiceDto, ServiceDto, ServicesManagerApi, ServiceState } from "../../../api";
import { handleDefaultError } from "../../../utils/handle-error";
import ActiveLoader from "../../common/active-loader";
import ManagerServiceDetailPending from "./manager-service-detail-pending";
import ManagerServiceSetailRegistered from "./manager-service-detail-registered";

type ManagerServiceDetailProps = {
    serviceId: string
}

const ManagerServiceDetail = ({ serviceId }: ManagerServiceDetailProps) => {
    const [service, setService] = useState<ManagerServiceDto>();
    const api = new ServicesManagerApi();

    useEffect(() => {
        const controller = new AbortController();
        const fetchDetail = async () => {
            try {
                if (serviceId) {
                    const response = await api.servicesManagerGetServiceDetail(serviceId, {
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

    const content = () => {
        if (service) {
            switch (service.serviceState) {
                case ServiceState.Registered: return <ManagerServiceSetailRegistered service={service} />
                case ServiceState.Pending: return <ManagerServiceDetailPending service={service} />
            }
        }

        return <ActiveLoader />
    }

    return <>
        {content()}
    </>
}

export default ManagerServiceDetail;