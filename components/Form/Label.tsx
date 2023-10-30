import { LabelHTMLAttributes } from 'react';

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
    return (
        <label
            {...props}
            className="text-emerald-500 font-semibold"
        />
    );
}
