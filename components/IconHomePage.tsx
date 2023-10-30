import Icon from '@/assets/Logo.png';
import Image from 'next/image';

export const IconHomePage = () => {
    return (
        <Image
            src={Icon}
            alt="Imagem de uma cesta de compras"
            width={150}
            priority
        />
    );
};
