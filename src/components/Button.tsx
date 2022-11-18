import React from 'react'


type ButtonProps = {
    bg?: string;
    label?: string;
    icon?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    className?: string,
    disabled?: boolean,
}
const defaultButtonProps: ButtonProps = {
    bg: 'bg-sky-400',
    label: 'button',
}


function Button(props: ButtonProps) {
    props = { ...defaultButtonProps, ...props };
    return (
        <button disabled={props.disabled} className={`py-1.5 px-2.5 text-sm  rounded-md flex items-center gap-1
        ${props.disabled ? 'opacity-50 ': 'cursor-pointer  hover:opacity-80 active:opacity-70'} ${props.bg} ${props.className}`}
            onClick={props.onClick}>
            {props.icon} {props.label}
        </button>
    )
}

export default Button