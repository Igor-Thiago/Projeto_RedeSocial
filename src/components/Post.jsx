import { Avatar } from './Avatar'
import { Comment } from './comment'
import styles from './Post.module.css'
export function Post(){

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src='https://github.com/Igor-Thiago.png'/>
                    <div className={styles.authorInfo}>
                        <strong>Igor Thiago</strong>
                        <span>Web developer</span>
                    </div>
                </div>
                <time title="11 de Maio às 08:13h" dateTime="2024-09-18">Publicado a 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href=''>👉 jane.design/doctorcare</a></p>

                <p>
                    <a href=''>#novoprojeto </a>
                    <a href=''>#nlw </a>
                    <a href=''>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />
                
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}