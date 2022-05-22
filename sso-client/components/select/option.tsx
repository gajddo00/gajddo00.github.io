import React from "react";
import { useSelectContext } from "./select-context";

export type OptionProps = {
    value: string,
    index: number,
    type?: 'default' | 'gray',
} & React.HTMLProps<HTMLElement>

const Option = ({
    value,
    type,
    index,
    ...props
}: OptionProps) => {
    const { changeSelectedOption } = useSelectContext();

    return (
        <li className="select-option" onClick={() => changeSelectedOption(value, index)}>
            {props.children}
        </li>
    );
};

export default Option;