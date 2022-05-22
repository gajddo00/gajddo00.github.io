import { useRouter } from "next/router";
import PagingButton from "./paging-button"
import Text from "../../components/common/text";
import { getString } from "../../utils/strings";

type PaginationProps = {
    page: number,
    pages: number,
    count: number,
    setPage: (page: number) => void
}

const Pagination = ({ page, pages, count, setPage }: PaginationProps) => {
    const router = useRouter();

    if (pages == 1) {
        return <></>
    }

    if (count ?? 0 > 0) {
        return (<div className="flex mt-4 gap-3 justify-end">
            <PagingButton className="scale-x-flip" onClick={() => setPage(page - 1)} disabled={page == 1} />
            <PagingButton onClick={() => setPage(page + 1)} disabled={(pages && page == pages) || false} />
        </div>)
    } else {
        return <Text className="mt-4" type='body'>{getString("general.noResults", router.locale)}</Text>
    }
}

export default Pagination;