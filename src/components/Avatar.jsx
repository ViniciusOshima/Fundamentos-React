import style from './Avatar.module.css'

export function Avatar ({hasBorder = true, author}) {
  return (
    <img className={hasBorder ? style.avatarWithBorder : style.avatar} src={author}/>
  )
}