import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ServiceDto, ServicesApi } from "../../api/api";
import Card from "../common/card";
import SearchBar from "../common/search-bar";
import Text from "../common/text";
import { getString } from "../../utils/strings";
import ActiveLoader from "../common/active-loader";

const UserServices = () => {
    const [search, setSearch] = useState<string>();
    const [services, setServices] = useState<Array<ServiceDto>>([]);
    const [requestFinished, setRequestFinished] = useState<boolean>(false);
    const api = new ServicesApi();
    const router = useRouter();

    useEffect(() => {
        const controller = new AbortController();

        const fetchServices = async () => {
            try {
                const response = await api.servicesGetServices(search, 1, 20, {
                    signal: controller.signal
                });
                response.data.items && setServices(response.data.items)
                setRequestFinished(true);
            } catch (error) {
                const err = error as AxiosError;
                const message = err?.response?.data?.Message ?? "Unknown error";
                if (message) {
                    toast(message);
                    setRequestFinished(true);
                }
            }
        }

        fetchServices();

        return () => {
            controller.abort();
        }
    }, [search])

    const searchNewValue = (text: string) => {
        setSearch(text);
    }

    const noResults = () => {
        return (search && search !== '') && services.length == 0;
    }

    if (requestFinished) {
        return <section className="py-3 px-8">
            <div className="flex sm:flex-row flex-col justify-between mt-5 sm:mt-0">
                <Text type='large' className='self-start'>{getString("services", router.locale)}</Text>
                <SearchBar
                    placeholder={getString("services.search", router.locale)}
                    textDidChange={searchNewValue}
                />
            </div>

            <section className="mt-6">
                <Text type='body' className={
                    noResults() ? '' : 'hidden'
                }>No results...</Text>
                <div className="card-container">
                    {services.map((service, i) => {
                        return (
                            <Link key={i} passHref href={{
                                pathname: "services/[id]",
                                query: { id: service.id }
                            }}>
                                <button>
                                    <Card serviceName={service.name ?? "service"} />
                                </button>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </section>
    } else {
        return <ActiveLoader />
    }
}

export default UserServices;