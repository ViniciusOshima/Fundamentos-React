import { PencilLine } from 'phosphor-react'

import style from './sidebar.module.css'

export function Sidebar () {
  return (
    <aside className= {style.sidebar}>
      <img className={style.cover} src="https://images.unsplash.com/photo-1678737171211-bf2c3def509f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=50"/>

      <div className={style.profile}>
        <img className= {style.avatar} src="https://github.com/ViniciusOshima.png" />
        <strong>Diego Fernandes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}