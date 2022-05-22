import Select from "../select/select";
import Option from "../select/option";
import { getString } from "../../utils/strings";
import { useRouter } from "next/router";

type ServiceTypeSelectProps = {
    defaultIndex?: number
    valueSelected: (index: number) => void
}

const ServiceTypeSelect = ({ defaultIndex = 0, valueSelected }: ServiceTypeSelectProps) => {
    const router = useRouter();

    const optionTitles = [
        getString("service.register.type.website", router.locale),
        getString("service.register.type.mobile", router.locale),
        getString("service.register.type.desktop", router.locale)
    ]

    return <div className="flex flex-row justify-between items-center">
        <label className="ml-2">{getString("service.register.type", router.locale)}</label>
        <Select
            defaultValue={optionTitles[defaultIndex]}
            optionSelected={valueSelected}
        >
            <Option
                value={optionTitles[0]}
                index={0}>
                {optionTitles[0]}
            </Option>
            <Option
                value={optionTitles[1]}
                index={1}>
                {optionTitles[1]}
            </Option>
            <Option
                value={optionTitles[2]}
                index={2}>
                {optionTitles[2]}
            </Option>
        </Select>
    </div>
}

export default ServiceTypeSelect;