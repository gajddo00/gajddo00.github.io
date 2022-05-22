import React, { useEffect } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    name: string
    type: string
    labelValue: string
    error: string
    required?: boolean
    register: UseFormRegister<FieldValues>
    value?: string
}

const Textarea = ({ required = false, ...props }: InputProps) => {
    const { name, type, labelValue, error, register } = props;

    return (
        <div className="flex flex-col">
            <label htmlFor={props.name} className="mr-2 ml-2">
                {labelValue}
                {required && <span className="error"> *</span>}
            </label>
            <textarea
                {...register(name)}
                defaultValue={props.value}
                name={name}
                className="textField mt-1 textArea"
            ></textarea>
            <span className="error ml-2 mr-2">{error}</span>
        </div>
    );
};

export default Textarea;