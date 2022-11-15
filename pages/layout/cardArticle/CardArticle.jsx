import Styles from './CardArticle.module.scss'
import ImageArticle from './components/ImageArticle/ImageArticle'
import BodyArticle from './components/BodyArticle/BodyArticle'

export default function CardArticle () {
  return (
    <article className={Styles.article}>
      <ImageArticle />
      <BodyArticle />
    </article>
  )
}
