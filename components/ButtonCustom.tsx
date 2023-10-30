import { ButtonHTMLAttributes } from 'react';

interface ButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttontypecolor: 'primary' | 'secondary';
}

export function ButtonCustom(props: ButtonCustomProps) {
    const variants = {
        primary: 'bg-emerald-500',
        secondary: 'bg-red-500',
    };

    return (
        <button
            {...props}
            className={`w-full py-4 px-4 rounded-lg font-semibold text-center text-white ${
                variants[props.buttontypecolor]
            }`}
        >
            {props.children}
        </button>
    );
}
