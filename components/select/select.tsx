import React, { useEffect, useRef, useState } from "react";
import { SelectContext } from "./select-context";
import useOnClickOutside from "./useOnClickOutsideHook";

export type SelectProps = {
    defaultValue?: string
    type?: 'default' | 'gray',
    optionSelected: (index: number) => void,
    reset?: number
} & React.HTMLProps<HTMLElement>

const Select = ({
    type = 'default',
    defaultValue = "",
    ...props
}: SelectProps) => {
    const [selectedOption, setSelectedOption] = useState(0);
    const [name, setName] = useState<string>(defaultValue);
    const [showDropdown, setShowDropdown] = useState(false);
    const showDropdownHandler = () => setShowDropdown(!showDropdown);
    const selectContainerRef = useRef(null);

    const clickOutsideHandler = () => setShowDropdown(false);

    useOnClickOutside(selectContainerRef, clickOutsideHandler);

    useEffect(() => {
        setName(defaultValue);
        setSelectedOption(0);
    }, [props.reset])

    const updateSelectedOption = (option: string, index: number) => {
        setName(option);
        props.optionSelected(index);
        setSelectedOption(index);
        setShowDropdown(false);
    };

    return (
        <SelectContext.Provider
            value={{ selectedOption, changeSelectedOption: updateSelectedOption }}
        >
            <div className={`select-container ${props.className}`} ref={selectContainerRef}>
                <div
                    className={showDropdown ? 'select-text active' : 'select-text'}
                    onClick={showDropdownHandler}
                >
                    <p className="mr-6 overflow-hidden text-ellipsis whitespace-nowrap">
                        {name}
                    </p>
                </div>
                <ul className={
                    showDropdown
                        ? "select-options show-dropdown-options"
                        : "select-options hide-dropdown-options"
                }>
                    {props.children}
                </ul>
            </div>
        </SelectContext.Provider>
    )
};

export default Select;
