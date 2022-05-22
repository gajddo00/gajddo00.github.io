import { Role } from "../api";
import Text from "../components/common/text";
import { authenticatedRoute } from "../utils/authenticatedRoute";

const Integration = () => {
    return <Text type='large' className='self-start'>Integration</Text>
}

export default authenticatedRoute(Integration, [Role.ServiceManager]);