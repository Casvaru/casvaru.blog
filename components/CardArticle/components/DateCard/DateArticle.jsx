import Styles from './DateArticle.module.scss'

export default function DateArticle () {
  return (
    <div className={Styles.container}>
      <p className={Styles.date}>Fecha del artículo</p>
    </div>
  )
}
