import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { LoginHistoryDto, ManagerServiceDto, ServicesManagerApi } from "../../../api";
import { formatTimestamp } from "../../../utils/date-util";
import { getString } from "../../../utils/strings";
import BackButton from "../../common/back-button";
import Text from "../../common/text";
import LoginHistoryPagination from "../login-history-pagination";
import TabView from "../../common/tabview";
import ManagerServiceDetailRegisteredForm from "./manager-service-detail-registered-form";
import Select from "../../select/select";
import Option from "../../select/option";
import { mapLoginHistoryFilter } from "../../../utils/enum-mappings";
import { toast } from "react-toastify";
import { handleDefaultError } from "../../../utils/handle-error";
import Dialog from "../../common/dialog";
import ManagerServiceDetailRegisteredIntegration from "./manager-service-detail-registered-integration";

type ManagerServiceDetailRegisteredProps = {
    service: ManagerServiceDto
}

const ManagerServiceSetailRegistered = ({ service }: ManagerServiceDetailRegisteredProps) => {
    const [loginStamps, setLoginStamps] = useState<Array<LoginHistoryDto>>([]);
    const [currentTab, setCurrentTab] = useState<number>(0);
    const [currentFilter, setCurrentFilter] = useState<number>(0);

    const [confirmDeletionDialogVisible, setConfirmDeletionDialogVisible] = useState<boolean>(false);

    const controller = useMemo(() => new AbortController(), []);
    const serviceApi = new ServicesManagerApi();
    const router = useRouter();

    const handleFilterChange = (index: number) => {
        setCurrentFilter(index);
    }

    const handleDeleteAction = async () => {
        try {
            const response = await serviceApi.servicesManagerDeleteService(service.id ?? "", {
                signal: controller.signal
            })

            toast(response.data.message);
            router.back();
        } catch (error) {
            handleDefaultError(error);
            setConfirmDeletionDialogVisible(false);
        }
    }

    const loginHistory = () => {
        return <section className="flex-50 mt--3_2 sm:pt-0 pt-16">
            <div className="flex flex-row justify-between">
                <Text type='medium'>{getString("service.loginHistory", router.locale)}</Text>
                <div className="flex flex-row items-center gap-3">
                    <label className="ml-2">{getString("service.loginHistory.filter", router.locale)}:</label>
                    <Select
                        defaultValue={getString("service.loginHistory.filter.all", router.locale)}
                        optionSelected={handleFilterChange}
                    >
                        <Option
                            value={getString("service.loginHistory.filter.all", router.locale)}
                            index={0}>
                            {getString("service.loginHistory.filter.all", router.locale)}
                        </Option>
                        <Option
                            value={getString("service.loginHistory.filter.me", router.locale)}
                            index={1}>
                            {getString("service.loginHistory.filter.me", router.locale)}
                        </Option>
                    </Select>
                </div>
            </div>
            <table className="v-table w-full mt-5 overflow-x-scroll sm:overflow-hidden">
                <thead>
                    <tr>
                        <th>{getString("user.name", router.locale)}</th>
                        <th>E-mail</th>
                        <th>{getString("service.loginHistory.timestamp", router.locale)}</th>
                        <th>{getString("service.loginHistory.authMethod", router.locale)}</th>
                    </tr>
                </thead>
                <tbody>
                    {loginStamps.map((stamp, index) => {
                        return (
                            <tr key={index}>
                                <td>{stamp.name}</td>
                                <td>{stamp.email}</td>
                                <td>{formatTimestamp(stamp.timestamp!)}</td>
                                <td>{stamp.method}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <LoginHistoryPagination
                service={service}
                filter={mapLoginHistoryFilter(currentFilter)}
                updateLoginStamps={(stamps) => setLoginStamps(stamps)}
            />
        </section>
    }

    const TabContent = () => {
        switch (currentTab) {
            case 0: return <ManagerServiceDetailRegisteredForm
                service={service}
                triggerDeleteDialog={() => setConfirmDeletionDialogVisible(true)}
            />
            case 1: return <ManagerServiceDetailRegisteredIntegration
                service={service}
            />
        }
    }

    return <>
        {confirmDeletionDialogVisible &&
            <Dialog
                title={getString("general.confirmation", router.locale)}
                message={getString("service.detail.removeService.message", router.locale).replace("{X}", service.name ?? "")}
                setVisible={setConfirmDeletionDialogVisible}
                action={handleDeleteAction}
                actionTitle={getString("general.delete", router.locale)}
            />
        }

        <div className="pt-3 px-8 pb-10">
            <BackButton title={service?.name ?? ""} />
            <div className="flex flex-col sm:flex-row mt-10 gap-16">
                <article className="flex flex-col flex-50">
                    <TabView
                        tabTitles={[getString('service.register.desc', router.locale), getString('service.detail.integration', router.locale)]}
                        currentTab={currentTab}
                        tabChanged={(index) => setCurrentTab(index)}
                    />
                    {TabContent()}
                </article>
                {loginHistory()}
            </div>
        </div>
    </>
}

export default ManagerServiceSetailRegistered;