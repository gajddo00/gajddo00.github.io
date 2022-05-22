import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { number } from "yup";
import { AdminApi, AdminNotificationsDto } from "../api";
import Dialog from "../components/common/dialog";
import TabView from "../components/common/tabview";
import Text from "../components/common/text";
import ServicesRequests from "../components/requests/requests-services";
import ServiceManagerRequests from "../components/requests/requests-users";
import { authenticatedRoute } from "../utils/authenticatedRoute";
import { getString } from "../utils/strings";

export const RequestTab = {
    Services: 'Services',
    Users: 'Users',
} as const;

export type RequestTab = typeof RequestTab[keyof typeof RequestTab];

const Requests = () => {
    const [currentTab, setCurrentTab] = useState<number>(0);
    const [confirmRemoveVisible, setConfirmRemoveVisible] = useState<boolean>(false);
    const [confirmApproveVisible, setConfirmApproveVisible] = useState<boolean>(false);

    const router = useRouter();
    const api = new AdminApi();

    //updates to the opposite value, only serves as a publisher of changed state
    const [approved, setApproved] = useState<boolean>(false);
    const [denied, setDenied] = useState<boolean>(false);

    const [servicesTabTitle, setServicesTabTitle] = useState(getString('services', router.locale));
    const [usersTabTitle, setUsersTabTitle] = useState(getString('users', router.locale));

    useEffect(() => {
        const controller = new AbortController();

        const loadTabNotificationCounts = async () => {
            try {
                const response = await api.adminGetNotificationsCount({
                    signal: controller.signal
                });

                const data: AdminNotificationsDto = response.data;

                updateTabNotificationCount(
                    data.serviceRequestsCount ?? 0,
                    RequestTab.Services
                );

                updateTabNotificationCount(
                    data.serviceManagerRequestsCount ?? 0,
                    RequestTab.Users
                );
            } catch (error) { }
        }

        loadTabNotificationCounts();

        return (() => {
            controller.abort();
        })
    }, [])

    const updateTabNotificationCount = (count: number, tab: RequestTab) => {
        switch (tab) {
            case 'Services':
                let servicesTitle = getString('services', router.locale);
                if (count > 0) {
                    servicesTitle = `${servicesTitle} (${count})`;
                    setServicesTabTitle(servicesTitle);
                } else {
                    setServicesTabTitle(servicesTitle);
                }
                break;
            case 'Users':
                let usersTitle = getString('users', router.locale);
                if (count > 0) {
                    usersTitle = `${usersTitle} (${count})`;
                    setUsersTabTitle(usersTitle);
                } else {
                    setUsersTabTitle(usersTitle);
                }
                break;
        }
    }

    const TabContent = () => {
        switch (currentTab) {
            case 0: return <ServicesRequests
                triggerApproveDialog={() => setConfirmApproveVisible(true)}
                triggerDenyDialog={() => setConfirmRemoveVisible(true)}
                approved={approved}
                denied={denied}
                updateTabNotification={updateTabNotificationCount}
            />

            case 1: return <ServiceManagerRequests
                triggerApproveDialog={() => setConfirmApproveVisible(true)}
                triggerDenyDialog={() => setConfirmRemoveVisible(true)}
                approved={approved}
                denied={denied}
                updateTabNotification={updateTabNotificationCount}
            />
        }
    }

    return <>
        {confirmApproveVisible &&
            <Dialog
                title={getString("general.confirmation", router.locale)}
                message={getString("requests.approve.message", router.locale)}
                setVisible={setConfirmApproveVisible}
                action={() => {
                    setApproved(p => !p);
                    setConfirmApproveVisible(false);
                }}
            />
        }

        {confirmRemoveVisible &&
            <Dialog
                title={getString("general.confirmation", router.locale)}
                message={getString("requests.remove.message", router.locale)}
                setVisible={setConfirmRemoveVisible}
                action={() => {
                    setDenied(p => !p);
                    setConfirmRemoveVisible(false);
                }}
            />
        }

        <section className="pt-3 px-8">
            <Text type='large' className='self-start'>{getString('requests', router.locale)}</Text>
            <article className="mt-10">
                <TabView
                    tabTitles={[
                        servicesTabTitle,
                        usersTabTitle
                    ]}
                    currentTab={currentTab}
                    tabChanged={(index) => setCurrentTab(index)}
                />
                {TabContent()}
            </article>
        </section>
    </>
}

export default authenticatedRoute(Requests);