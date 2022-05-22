import { AxiosError } from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ManagerServiceDto, ServicesManagerApi } from "../../api/api";
import Card from "../common/card";
import SearchBar from "../common/search-bar";
import Text from "../common/text";
import AddIcon from "../../assets/add_button.svg";
import Image from "next/image";
import ActiveLoader from "../common/active-loader";
import { getString } from "../../utils/strings";
import { useRouter } from "next/router";

const ManagerServices = () => {
    const [search, setSearch] = useState<string>();
    const [services, setServices] = useState<Array<ManagerServiceDto>>([]);
    const [pending, setPending] = useState<Array<ManagerServiceDto>>([]);
    const [requestFinished, setRequestFinished] = useState<boolean>(false);
    const api = new ServicesManagerApi();
    const router = useRouter();

    useEffect(() => {
        const controller = new AbortController();

        const fetchServices = async () => {
            try {
                const response = await api.servicesManagerGetServices(search, 1, 20, {
                    signal: controller.signal
                });
                setServices(response.data.services?.items ?? []);
                setPending(response.data.pendingRequests ?? []);
                setRequestFinished(true);
            } catch (error) {
                const err = error as AxiosError;
                const message = err?.response?.data?.Message;
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
        return services.length === 0 && pending.length === 0;
    }

    if (requestFinished) {
        return <section className="py-3 px-8">
            <div className="flex sm:flex-row flex-col justify-between mt- sm:mt-0">
                <SearchBar
                    placeholder={getString("services.search", router.locale)}
                    textDidChange={searchNewValue}
                />
                <div className="flex items-start sm:justify-start justify-end gap-4 absolute right-6 top-20 sm:relative sm:right-0 sm:top-0">
                    <Text type='large'>{getString("services.add", router.locale)}</Text>
                    <Link href="/services/add-service" passHref>
                        <Image src={AddIcon} alt="Add service button" width={33} height={33} className="cursor-pointer" />
                    </Link>
                </div>
            </div>

            {noResults() &&
                <Text type='body' className={
                    `${noResults() ? '' : 'hidden'} mt-10`
                }>{getString("general.noResults", router.locale)}</Text>
            }

            {pending.length > 0 &&
                <section className="mt-10">
                    <Text type='large' className='self-start'>{getString("services.pending", router.locale)}</Text>
                    <div className="card-container mt-4">
                        {pending.map((request, i) => {
                            return (
                                <Link key={i} passHref href={{
                                    pathname: "services/[id]",
                                    query: { id: request.id }
                                }}>
                                    <button>
                                        <Card
                                            serviceName={request.name ?? "request"} bgColor='gray' />
                                    </button>
                                </Link>
                            )
                        })}
                    </div>
                </section>
            }

            {services.length > 0 &&
                <section className="mt-6">
                    <Text type='large' className='self-start'>{getString("services", router.locale)}</Text>
                    <div className="card-container mt-4">
                        {services.map((service, i) => {
                            return (
                                <Link passHref key={i} href={{
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
            }
        </section >
    } else {
        return <ActiveLoader />
    }
}

export default ManagerServices;