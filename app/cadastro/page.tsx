'use client';

// React
import { useEffect, useState } from 'react';

// Next
import Image from 'next/image';

// Components
import { ButtonCustom } from '@/components/ButtonCustom';
import { Form } from '@/components/Form';
import { LinkCustom } from '@/components/LinkCustom';
import { TitleCustom } from '@/components/Title';

// Radix
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

// Zod
import { z } from 'zod';

// React Hook Form
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type AvatarIcons = {
    id: number;
    urlImage: string;
    name: string;
    description: string;
};

const userSchema = z.object({
    avatar: z.string(),
    name: z.string(),
    username: z.string(),
    email: z.string(),
    password: z.string(),
});
type CreateUserData = z.infer<typeof userSchema>;

export default function CadastroPage() {
    const [avatar, setAvatar] = useState<AvatarIcons[]>([]);
    const [iconAvatar, setIconAvatar] = useState<AvatarIcons>(
        {} as AvatarIcons
    );
    const [isSelected, setIsSelected] = useState(false);

    const createUserForm = useForm<CreateUserData>({
        resolver: zodResolver(userSchema),
    });

    const {
        formState: { errors },
    } = createUserForm;

    useEffect(() => {
        async function getData() {
            const res = await fetch(
                'https://my-json-server.typicode.com/italomagnov/profile-icons/profileIcons'
            );
            const data: AvatarIcons[] = await res.json();

            setAvatar(data);
        }
        getData();
    }, []);

    async function createUser(data: CreateUserData) {
        let user = {
            avatar: iconAvatar.urlImage,
            name: data.name,
            username: data.username,
            email: data.email,
            password: data.password,
        };
    }

    function toggleSelectIconAvatar() {
        setIsSelected(!isSelected);
    }

    function handleSelectIconAvatar(id: Number) {
        toggleSelectIconAvatar();

        const selectedAvatar = avatar.find((item) => item.id === id);
        setIconAvatar(selectedAvatar as AvatarIcons);
    }

    const methods = useForm();

    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-center p-8">
            <div className="w-full flex flex-col gap-4 md:max-w-3xl md:mx-auto">
                <TitleCustom title="Cadastro" />
                <FormProvider {...methods}>
                    <form
                        onSubmit={methods.handleSubmit(createUser as any)}
                        className="w-full flex flex-col gap-4"
                    >
                        <div className="w-full flex flex-col gap-2">
                            <div className="flex flex-col text-center items-center gap-2">
                                <div className="flex flex-col gap-4">
                                    {iconAvatar.urlImage !== undefined ? (
                                        <Image
                                            src={iconAvatar.urlImage}
                                            alt={iconAvatar.description}
                                            className="w-36 h-36 rounded-full border-4 border-emerald-500 bg-emerald-100"
                                            width={150}
                                            height={150}
                                        />
                                    ) : (
                                        <div className="w-36 h-36 rounded-full bg-emerald-100 border-4 border-emerald-500"></div>
                                    )}
                                    <Dialog.Root>
                                        <Dialog.Trigger asChild>
                                            <button className="text-emerald-500 py-2 rounded-md bg-white border-2 border-emerald-500 font-medium focus:outline-none">
                                                Avatar
                                            </button>
                                        </Dialog.Trigger>
                                        <Dialog.Portal>
                                            <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
                                            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[70vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                                                <Dialog.Title className="text-emerald-500 font-medium mb-4">
                                                    Selecione seu avatar
                                                </Dialog.Title>

                                                <div className="w-full max-h-[40vh] flex items-center justify-center flex-wrap gap-2 overflow-auto">
                                                    {avatar.map(
                                                        (item: AvatarIcons) => (
                                                            <div
                                                                className={`w-20 md:w-32 md:h-32 h-20 bg-white border-2 
                                                        ${
                                                            item.id ===
                                                            iconAvatar?.id
                                                                ? 'border-4 border-emerald-500'
                                                                : 'border-4 border-gray-400'
                                                        }
                                                    `}
                                                                key={item.id}
                                                                onClick={() =>
                                                                    handleSelectIconAvatar(
                                                                        item.id
                                                                    )
                                                                }
                                                            >
                                                                <Image
                                                                    src={
                                                                        item.urlImage
                                                                    }
                                                                    alt={
                                                                        item.description
                                                                    }
                                                                    width={150}
                                                                    height={150}
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </div>

                                                <div className="mt-[25px] flex justify-end">
                                                    <Dialog.Close asChild>
                                                        <button className="bg-emerald-500 py-2 px-4 text-white rounded-md font-medium">
                                                            Salvar
                                                        </button>
                                                    </Dialog.Close>
                                                </div>
                                                <Dialog.Close asChild>
                                                    <button
                                                        className="text-red-500 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                                        aria-label="Fechar"
                                                    >
                                                        <Cross2Icon />
                                                    </button>
                                                </Dialog.Close>
                                            </Dialog.Content>
                                        </Dialog.Portal>
                                    </Dialog.Root>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Input
                                    type="text"
                                    name="name"
                                    className="py-4 px-2 border rounded-lg shadow-md outline-emerald-500"
                                    placeholder="Digite seu nome"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <Form.Label>Email:</Form.Label>
                                <Form.Input
                                    type="email"
                                    name="email"
                                    className="py-4 px-2 border rounded-lg shadow-md outline-emerald-500"
                                    placeholder="seu@email.com"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <Form.Label>Usuário:</Form.Label>
                                <Form.Input
                                    type="text"
                                    name="username"
                                    className="py-4 px-2 border rounded-lg shadow-md outline-emerald-500"
                                    placeholder="Digite seu usuário"
                                    autoComplete="username"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <Form.Label>Senha:</Form.Label>
                                <Form.Input
                                    type="password"
                                    name="password"
                                    className="py-4 px-2 border rounded-lg shadow-md outline-emerald-500"
                                    placeholder="********"
                                    autoComplete="current-password"
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <ButtonCustom
                                type="submit"
                                buttontypecolor="primary"
                            >
                                CADASTRAR
                            </ButtonCustom>
                            <LinkCustom
                                href="/login"
                                buttontype="secondary"
                                title="CANCELAR"
                            />
                        </div>
                    </form>
                </FormProvider>
            </div>
        </main>
    );
}
