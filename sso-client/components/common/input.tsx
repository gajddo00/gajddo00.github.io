import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import EyeClosed from "../../assets/eye_closed.svg";
import EyeOpened from "../../assets/eye_open.svg";
import Image from "next/image";

type InputProps = {
    name: string
    type: string
    labelValue: string
    error?: string
    required?: boolean
    disabled?: boolean
    register?: UseFormRegister<FieldValues>
    accessoryOnClick?: () => void
    accessoryIcon?: any
    value?: string
} & React.HTMLProps<HTMLDivElement>

const Input = ({ required = false, disabled = false, ...props }: InputProps) => {
    const { name, type, labelValue, error, register } = props;

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const getType = () => {
        if (type == 'password') {
            return passwordVisible ? 'text' : type;
        }

        return type;
    }

    return (
        <div className={`flex flex-col ${props.className}`}>
            <label htmlFor={props.name} className="mr-2 ml-2">
                {labelValue}
                {required && <span className="error"> *</span>}
            </label>
            <div className="flex gap-2 mt-1">
                <div className={`textField flex justify-between gap-2 pr-2 items-center w-full ${disabled ? 'textField--dark' : ''}`}>
                    <input
                        {...register && register(name)}
                        defaultValue={props.value}
                        disabled={disabled}
                        name={name}
                        type={getType()}
                        className="w-full"
                    ></input>
                    {props.type == "password" &&
                        <button
                            tabIndex={-1}
                            title="change password visibility"
                            className="flex items-center"
                            type='button'
                            onClick={() => setPasswordVisible(value => !value)}>
                            <Image src={passwordVisible ? EyeOpened : EyeClosed} width={18} height={18} alt="eye" />
                        </button>
                    }
                </div>
                {props.accessoryIcon &&
                    <button
                        tabIndex={-1}
                        className="textField_action-button flex items-center justify-center"
                        type='button'
                        title="generate random password"
                        onClick={props.accessoryOnClick}>
                        <Image
                            src={props.accessoryIcon}
                            width={23} height={23}
                            alt="input accessory icon" />
                    </button>
                }
            </div>
            <span className="error ml-2 mr-2">{error}</span>
        </div >
    );
};

export default Input;