import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoginHistoryDto, LoginHistoryFilter, PaginatedListOfLoginHistoryDto, ServiceDto, ServicesApi } from "../../api";
import { handleDefaultError } from "../../utils/handle-error";
import { getString } from "../../utils/strings";
import PagingButton from "../common/paging-button";
import Text from "../common/text";

type LoginHistoryPaginationProps = {
    service: ServiceDto,
    filter?: LoginHistoryFilter,
    updateLoginStamps: (stamps: Array<LoginHistoryDto>) => void
}

const LoginHistoryPagination = ({ service, updateLoginStamps, filter }: LoginHistoryPaginationProps) => {
    const [page, setPage] = useState<number>(1);
    const [paginatedHistory, setPaginatedHistory] = useState<PaginatedListOfLoginHistoryDto>();

    const servicesApi = new ServicesApi();
    const router = useRouter();

    useEffect(() => {
        const controller = new AbortController();

        const fetchLoginHistory = async () => {
            try {
                if (service.id) {
                    const response = await servicesApi.servicesGetLoginHistory(service.id, filter, page, 10, {
                        signal: controller.signal
                    })
                    setPaginatedHistory(response?.data)
                    const loginHistory = response?.data?.items;
                    loginHistory && updateLoginStamps(loginHistory);
                }
            } catch (error) {
                handleDefaultError(error);
            };
        }

        fetchLoginHistory();

        return () => {
            controller.abort();
        }
    }, [page, service.id, filter])

    const Pagination = () => {
        const totalPages = paginatedHistory?.totalPages

        if (totalPages == 1) {
            return <></>
        }

        if (paginatedHistory?.totalCount ?? 0 > 0) {
            return (<div className="flex mt-4 gap-3 justify-end">
                <PagingButton className="scale-x-flip" onClick={() => setPage(value => value - 1)} disabled={page == 1} />
                <PagingButton onClick={() => setPage(value => value + 1)} disabled={(totalPages && page == totalPages) || false} />
            </div>)
        } else {
            return <Text className="mt-4" type='body'>{getString("general.noResults", router.locale)}</Text>
        }
    }

    return <Pagination />
}

export default LoginHistoryPagination;