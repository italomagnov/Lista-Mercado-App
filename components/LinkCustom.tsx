import Link, { LinkProps } from 'next/link';

interface LinkCustomProps extends LinkProps {
    buttontype: 'primary' | 'secondary';
    title: string;
}

export function LinkCustom(props: LinkCustomProps) {
    const variants = {
        primary: 'bg-emerald-500',
        secondary: 'bg-red-500',
    };

    return (
        <Link
            {...props}
            className={`w-full py-4 px-4 rounded-lg font-semibold text-center text-white ${
                variants[props.buttontype]
            }`}
        >
            {props.title}
        </Link>
    );
}
