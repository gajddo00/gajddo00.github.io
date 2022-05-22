import { Role } from "../../api";
import ManagerServices from "../../components/services/manager-services";
import UserServices from "../../components/services/user-services";
import useUser from "../../hooks/useUser";
import { authenticatedRoute } from "../../utils/authenticatedRoute";

const Services = () => {
    const { user } = useUser();

    const servicesContent = () => {
        switch (user?.role) {
            case Role.User: return <UserServices />;
            case Role.ServiceManager: return <ManagerServices />;
        }
    }

    return <>
        {servicesContent()}
    </>
}

export default authenticatedRoute(Services);