import Image from 'next/image';
import Google from '@/assets/googleIcon.png';

interface GoogleIconProps {}
export function GoogleIcon(props: GoogleIconProps) {
    return (
        <Image
            src={Google}
            alt="Imagem de uma cesta de compras"
            width={25}
        />
    );
}
