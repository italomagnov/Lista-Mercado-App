interface TitleCustomProps {
    title: string;
}
export function TitleCustom(props: TitleCustomProps) {
    return (
        <h1 className="text-4xl text-center font-bold text-emerald-500">
            {props.title}
        </h1>
    );
}
