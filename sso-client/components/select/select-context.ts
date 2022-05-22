import { createContext, useContext } from "react";

const SelectContext = createContext<{
    selectedOption: number;
    changeSelectedOption: (option: string, index: number) => void;
}>({
    selectedOption: 0,
    changeSelectedOption: (option: string, index: number) => { }
});

const useSelectContext = () => {
    const context = useContext(SelectContext);
    if (!context) {
        throw new Error("Error in creating the context");
    }
    return context;
};

export { useSelectContext, SelectContext };
