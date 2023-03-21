import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import style from './Comment.module.css'

export function Comment ({content}) {
  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} author="https://github.com/ViniciusOshima.png" alt="" />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='15 de março às 17:22h'>Cerca de 2h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}