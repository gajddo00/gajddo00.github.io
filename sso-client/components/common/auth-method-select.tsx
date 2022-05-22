import { useRouter } from "next/router";
import { getString } from "../../utils/strings"
import Select from "../select/select";
import Option from "../select/option";

type AuthMethodSelectProps = {
    defaultIndex?: number
    valueSelected: (index: number) => void
}

const AuthMethodSelect = ({ defaultIndex = 0, valueSelected }: AuthMethodSelectProps) => {
    const router = useRouter();

    const optionTitles = [
        getString("login.password", router.locale),
        getString("login.email", router.locale),
        getString("service.register.type.mobile", router.locale)
    ];

    return <div className="flex flex-row justify-between items-center">
        <label className="ml-2">{getString("service.register.minAuth", router.locale)}</label>
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

export default AuthMethodSelect;