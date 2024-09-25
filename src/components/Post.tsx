import { format, formatDistanceToNow } from 'date-fns';
import {ptBR} from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { FormEvent, useState, ChangeEvent } from 'react';


interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}
interface PostProps {
    post: PostType;
}


export function Post({post}: PostProps){

    const [comments, setComments] = useState([
        'Post muito DAHORA!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR,})

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('');    
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string){
        const commentsWhitoutDeletedOne = comments.filter(comment => {    // Esse método do js(filter) retorna a lista de comentários filtrando todos menos o que excluimos
            return comment !== commentToDelete;
        })
        setComments(commentsWhitoutDeletedOne);  // Esse método atualiza a lista de comentários 
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
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