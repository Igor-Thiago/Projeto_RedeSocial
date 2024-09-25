import { ImgHTMLAttributes } from 'react';  // Isso importa uma classe já pronta do react com todas as propriedades possíveis que podem ter em uma imagem 
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;  // "?" indica que a propriedade não é obrigatória
    src: string;
}


export function Avatar({ hasBorder = true, ...props}: AvatarProps) {  // Por conta da importação da primeira linha posso passar qualquer propriedade como parâmetro ao utilizar o "restOperator (...props)"

    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props} // Aqui eu declaro ele e assim quando for usar este componente
                       // em qualuqer outro componente, posso passar qualquer pripriedade nele
        />
    )
}