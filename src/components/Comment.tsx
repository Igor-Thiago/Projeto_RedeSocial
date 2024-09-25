import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'
  
interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) =>void; // <- Jeito de falar q o tipo da variável é uma função que não retorna nada
}

export function Comment ({ content, onDeleteComment }: CommentProps){
    const [likeCount, setLikeCount] = useState(0);  // Varialvel contadora de likes e ua função para atualizar o número -> sempre importante inicializar um estado com o mesmo tipo da informação que vamos armazenar nele

    function handleDeleteComments(){
        onDeleteComment(content)
    }
    function handleLikeComment() {
       // maneira antiga -> "setLikeCount(likeCount +1)" <- funciona porém o valor de likes depende do valor atual dos likes . 
        // maneira correta
        setLikeCount((state) => {
            return state + 1
        });
    
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/Igor-Thiago.png'/>

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Igor Thiago </strong>
                            <time title="11 de Maio às 08:13h" dateTime="2024-09-18">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComments} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>


                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        
        </div>
    )
}