import { PencilLine} from 'phosphor-react'

import style from './Sidebar.module.css';

export function Sidebar(){

    return(
        <aside className={style.sidebar}>
            <img 
              className={style.cover}
              src='https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <div className={style.profile}>
                <img className={style.avatar} src="https://github.com/Igor-Thiago.png" />
                <strong>Igor Thiago</strong>
                <span>Desenvolvedor</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}