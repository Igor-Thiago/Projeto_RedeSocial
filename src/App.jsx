import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';


import './global.css'
import styles from './App.module.css';

export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post  
            author = 'Iguets'
            content = 'UABISNARA? MINHAs VARA'
          />

          <Post
            author = 'Leticia'
            content = 'UABISLITO? MEU PINTO'
          />
        </main>
      </div>
    </div>
  )
}


