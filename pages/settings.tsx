import { useRouter } from "next/router";
import UserSettings from "../components/settings/user-settings";
import Text from "../components/common/text";
import { authenticatedRoute } from "../utils/authenticatedRoute";
import { getString } from "../utils/strings";

const Settings = () => {
    const router = useRouter();

    return <section className="pt-3 px-8">
        <Text type='large' className='self-start'>{getString("settings", router.locale)}</Text>
        <UserSettings />
    </section>
}

export default authenticatedRoute(Settings);