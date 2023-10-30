import logo from '@/assets/Logo.png';
import Image from 'next/image';

export const IconHomePage = () => {
    return (
        <Image
            src={logo}
            alt="Imagem de uma cesta de compras"
            width={150}
            priority
        />
    );
};
