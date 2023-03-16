import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'

export function Comment () {
  return (
    <div className={style.comment}>
      <img src="https://github.com/ViniciusOshima.png" alt="" />

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

          <p>Muito bom Devon, parabéns!! 👏👏</p>
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