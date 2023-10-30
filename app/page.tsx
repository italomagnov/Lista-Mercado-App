'use client';

import { LinkCustom } from '@/components/LinkCustom';
import { IconHomePage } from '@/components/IconHomePage';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ButtonCustom } from '@/components/ButtonCustom';
import { ChevronRightIcon } from '@radix-ui/react-icons';

export default function Home() {
    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-center p-8 bg-emerald-200">
            <motion.div
                className="w-full flex flex-col items-center gap-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: 'easeInOut',
                }}
            >
                <div className="animate-bounce">
                    <IconHomePage />
                </div>

                <Link
                    href="/login"
                    className="flex py-4 px-4 font-semibold text-white bg-emerald-500 rounded-full border"
                >
                    <ChevronRightIcon />
                </Link>
            </motion.div>
        </main>
    );
}
