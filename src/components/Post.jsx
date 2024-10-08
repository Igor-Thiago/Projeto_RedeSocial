import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comment } from './comment';
import styles from './Post.module.css';
import { useState } from 'react';



export function Post({author, publishedAt, content}){

    const [comments, setComments] = useState([
        'Post muito DAHORA!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR,})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(){
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('');    
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete){
        const commentsWhitoutDeletedOne = comments.filter(comment => {    // Esse método do js(filter) retorna a lista de comentários filtrando todos menos o que excluimos
            return comment !== commentToDelete;
        })
        setComments(commentsWhitoutDeletedOne);  // Esse método atualiza a lista de comentários 
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name = 'comment'
                    placeholder='Deixe um comentário'
                    value ={newCommentText}
                    onChange={handleNewCommentChange}
                    required
                />
                
                <footer>
                    <button type='submit' disabled={newCommentText.length == 0}>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comments => {       // Esta função map percorre toda a lista de comentários e retorna algo
                    return (
                      <Comment
                        key={comments}
                        content={comments}
                        onDeleteComment={deleteComment}  // Função sendo passada como propriedade para ser usada em outro componente (Comment.jsx) 
                        />
                    )
                })}
            </div>
        </article>
    )
}