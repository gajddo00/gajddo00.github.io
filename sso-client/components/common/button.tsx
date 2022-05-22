import React from "react";

export type ButtonProps = {
    label: string;
    type?: 'dark' | 'light' | 'warning';
    mode?: 'large' | 'medium' | 'small';
    submit?: boolean;
} & React.HTMLProps<HTMLButtonElement>

const Button = ({
    type = 'dark',
    label,
    mode = 'medium',
    submit = false,
    ...props
}: ButtonProps) => {
    return <button
        type={submit ? 'submit' : 'button'}
        {...props}
        className={['button', `button--${type}`, `button--${mode}`, `${props.className ?? ''}`].join(' ')}
    >{label}</button>;
};

export default Button;