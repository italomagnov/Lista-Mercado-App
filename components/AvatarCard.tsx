import Image from 'next/image';

type AvatarIcons = {
    id: number;
    name: string;
    urlImage: string;
    description: string;
};

export async function AvatarCard(props: AvatarIcons[]) {
    return (
        <>
            {props.map((item: AvatarIcons) => (
                <div
                    className="w-36 h-36 rounded-full border-4 border-emerald-500 bg-emerald-100"
                    key={item.id}
                >
                    <Image
                        key={item.id}
                        src={item.urlImage}
                        alt={item.description}
                        width={150}
                        height={150}
                    />
                </div>
            ))}
        </>
    );
}
