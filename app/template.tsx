'use client';

import { motion } from 'framer-motion';
import { easeInOut } from 'framer-motion/dom';

const variants = {
    hidden: { opacity: 0, x: 0, y: 200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};

interface TemplateProps {}

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{
                duration: 0.2,
                ease: easeInOut,
            }}
        >
            {children}
        </motion.main>
    );
}
