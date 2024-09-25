import styles from './Avatar.module.css'

interface AvatarProps {
    hasBorder?: boolean;  // "?" indica que a propriedade não é obrigatória
    src: string;
}


export function Avatar({ hasBorder = true, src}: AvatarProps) {

    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
        />
    )
}