import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';


import './global.css'
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Igor-Thiago.png',
      name: 'Igor Thiago',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},

      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content: 'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2024-09-19 19:40:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/relipe.png',
      name: 'Felipe Augusto',
      role: 'Infra Manager'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},

      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content: 'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2024-09-18 19:00:00'),
  },
]

export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key ={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


