'use client';

import { ButtonCustom } from '@/components/ButtonCustom';
import { Form } from '@/components/Form';
import { GoogleIcon } from '@/components/GoogleIcon';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

import z from 'zod';

type userLogin = {
    username: string;
    password: string;
};

const userLoginSchema = z.object({
    username: z.string(),
    password: z.string(),
});

type CreateUserLoginSchema = z.infer<typeof userLoginSchema>;

interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
    const methods = useForm();

    const createLoginForm = useForm<CreateUserLoginSchema>({
        resolver: zodResolver(userLoginSchema),
    });

    const {
        formState: { errors },
    } = createLoginForm;

    async function handleLoginApp(data: CreateUserLoginSchema) {
        const loginUser = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return loginUser;
    }

    return (
        <main className="w-full flex min-h-screen flex-col items-end justify-end bg-loginWalpaper bg-cover">
            <motion.div className="w-full min-h-[80vh] bg-white rounded-3xl md:rounded-t-[48px]">
                <div className="w-full flex flex-col items-center gap-16 p-8 md:max-w-3xl md:mx-auto">
                    <h2 className="text-2xl font-semibold text-emerald-500">
                        Bem Vindo(a)!
                    </h2>
                    <FormProvider {...methods}>
                        <form
                            onSubmit={methods.handleSubmit(
                                handleLoginApp as any
                            )}
                            className="w-full flex flex-col gap-8"
                        >
                            <div className="flex flex-col gap-2">
                                <Form.Label>Usuário</Form.Label>
                                <Form.Input
                                    name="username"
                                    className="py-4 px-2 rounded-2xl bg-emerald-50 outline-emerald-500"
                                    type="text"
                                    autoComplete="username"
                                    placeholder="Digite o seu usuário"
                                    required
                                />
                                <Form.Label>Senha</Form.Label>
                                <Form.Input
                                    name="password"
                                    className="py-4 px-2 rounded-2xl bg-emerald-50 outline-emerald-500"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="Digite a sua senha"
                                    required
                                />
                            </div>
                            <ButtonCustom
                                type="submit"
                                buttontypecolor="primary"
                            >
                                ENTRAR
                            </ButtonCustom>
                            <div className="flex items-center gap-4">
                                <hr className="w-full bg-emerald-500" />
                                <span>ou</span>
                                <hr className="w-full bg-emerald-500" />
                            </div>
                            <button className="w-full p-4 px-2 flex gap-4 items-center justify-center rounded-lg bg-white border-[2px] border-emerald-200">
                                <GoogleIcon />
                                <span>Entrar com Google</span>
                            </button>
                            <p className="text-xs text-center">
                                Não possui uma conta?{' '}
                                <Link
                                    href="/cadastro"
                                    className="text-emerald-500"
                                >
                                    Cadastre-se
                                </Link>
                            </p>
                        </form>
                    </FormProvider>
                </div>
            </motion.div>
        </main>
    );
}
