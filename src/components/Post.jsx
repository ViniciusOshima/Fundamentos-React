import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './Avatar'
import {Comment} from './Comment'

import style from './Post.module.css'

export function Post ({author, publishedAt, content}) {
  const [comment, setComment] = useState([
    1,
    2
  ])

  const publishedDateFormatted= format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})

  function handleCreateNewComment() {
    event.preventDefault()

    setComment([...comment, comment.length + 1])
  }

  return (
    <article className={style.Post}>
      <header>
        <div className={style.author}>
          <Avatar author= {author.avatarUrl} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={style.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comment.map(comment => {
          return <Comment />
        } )}
      </div>

    </article>
  )
}