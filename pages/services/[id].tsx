import { authenticatedRoute } from "../../utils/authenticatedRoute";
import { Role } from "../../api/api";
import useUser from "../../hooks/useUser";
import UserServiceDetail from "../../components/service-detail/user-service-detail";
import ManagerServiceDetail from "../../components/service-detail/ManagerDetail/manager-service-detail";
import { useRouter } from "next/router";

import ActiveLoader from "../../components/common/active-loader";

const ServiceDetail = () => {
    const { user } = useUser();
    const router = useRouter();
    const serviceId = router.query.id as string;

    const content = () => {
        if (user) {
            switch (user?.role) {
                case Role.User: return <UserServiceDetail serviceId={serviceId} />;
                case Role.ServiceManager: return <ManagerServiceDetail serviceId={serviceId} />;
                case Role.Administrator: return <ManagerServiceDetail
                    serviceId={serviceId} />;
            }
        }

        return <ActiveLoader />
    }

    return <>
        {content()}
    </>
}

export default authenticatedRoute(ServiceDetail);
